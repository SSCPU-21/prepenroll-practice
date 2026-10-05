
/* PrepEnroll Universal Practice Engine v1
   Enhances a curriculum adapter that exposes: state, ALL_Q, render(), renderQ(),
   generatePractice(), navigate(), answer/check handlers, and timerSeconds. */
(function(){
  'use strict';
  const STORE_KEY='prepenroll:cbse9:session:v1';
  let sessionMode='practice';
  let flags=new Set();
  let examResponses={};
  let reportOpen=false;
  let restored=false;

  function qById(id){ return ALL_Q.find(q=>String(q.id)===String(id)); }
  function attempted(id){
    if(sessionMode==='exam') return Object.prototype.hasOwnProperty.call(examResponses,id);
    return state && Object.prototype.hasOwnProperty.call(state.answered,id);
  }
  function setSessionMode(mode){
    sessionMode=mode==='exam'?'exam':'practice';
    document.body.classList.toggle('pe-exam-mode',sessionMode==='exam');
    document.querySelectorAll('.pe-session-btn').forEach(b=>b.classList.toggle('active',b.dataset.session===sessionMode));
    const note=document.getElementById('pe-session-note');
    if(note) note.textContent=sessionMode==='exam'
      ? 'Exam Mode hides answers and explanations until final submission.'
      : 'Practice Mode gives immediate checking and explanations while you work.';
    const banner=document.getElementById('pe-exam-banner');
    if(banner) banner.classList.toggle('show',sessionMode==='exam');
    updateFinishLabel();
    saveSession();
    if(state.filtered && state.filtered.length) render();
  }
  function updateFinishLabel(){
    const b=document.getElementById('pe-finish');
    if(b)b.textContent=sessionMode==='exam'?'Submit Exam':'View Performance';
  }

  function injectUI(){
    const setup=document.getElementById('setup-stage');
    if(setup && !document.getElementById('pe-session-mode')){
      const card=document.createElement('div');
      card.className='builder-card pe-engine-mode-card';
      card.id='pe-session-mode';
      card.innerHTML='<div class="builder-title">Session mode</div><div class="pe-engine-mode-row"><button type="button" class="pe-session-btn active" data-session="practice">Practice Mode</button><button type="button" class="pe-session-btn" data-session="exam">Exam Mode</button></div><div class="pe-session-note" id="pe-session-note">Practice Mode gives immediate checking and explanations while you work.</div>';
      setup.prepend(card);
      card.querySelectorAll('.pe-session-btn').forEach(b=>b.onclick=()=>setSessionMode(b.dataset.session));
    }
    if(setup && !document.getElementById('pe-resume')){
      const r=document.createElement('div'); r.className='pe-resume'; r.id='pe-resume';
      r.innerHTML='<span>An unfinished practice session is saved on this device.</span><div><button type="button" id="pe-resume-btn">Resume</button> <button type="button" id="pe-discard-btn" style="background:#fff;color:#173654;border:1px solid #ccd8e5">Discard</button></div>';
      setup.prepend(r);
      document.getElementById('pe-resume-btn').onclick=restoreSession;
      document.getElementById('pe-discard-btn').onclick=()=>{localStorage.removeItem(STORE_KEY);r.classList.remove('show')};
    }

    const stage=document.getElementById('test-stage');
    if(stage && !document.getElementById('pe-exam-banner')){
      const banner=document.createElement('div'); banner.id='pe-exam-banner'; banner.className='pe-exam-banner';
      banner.textContent='Exam Mode · Answers are saved, not revealed. Submit when you are ready to see results.';
      stage.insertBefore(banner,stage.firstChild);
    }

    const toolbar=stage&&stage.querySelector('.test-toolbar');
    if(toolbar && !document.getElementById('pe-finish')){
      const b=document.createElement('button'); b.id='pe-finish'; b.className='pe-finish-btn'; b.type='button';
      b.textContent='View Performance'; b.onclick=finishSession; toolbar.appendChild(b);
    }

    if(stage && !document.getElementById('pe-palette')){
      const area=document.getElementById('q-area');
      const nav=document.querySelector('.bottom-nav');
      const holder=document.createElement('div'); holder.className='pe-engine-shell'; holder.id='pe-engine-shell';
      const left=document.createElement('div'); left.id='pe-engine-main';
      if(area) left.appendChild(area);
      if(nav) left.appendChild(nav);
      const palette=document.createElement('aside'); palette.id='pe-palette'; palette.className='pe-palette';
      palette.innerHTML='<div class="pe-palette-title">Question palette</div><div class="pe-palette-grid" id="pe-palette-grid"></div><div class="pe-palette-key"><span class="pe-key"><i class="k-a"></i>Attempted</span><span class="pe-key"><i class="k-u"></i>Unanswered</span><span class="pe-key"><i class="k-f"></i>Flagged</span></div>';
      holder.append(left,palette);
      stage.appendChild(holder);
    }
  }

  function toggleFlag(id){ const k=String(id); flags.has(k)?flags.delete(k):flags.add(k); saveSession(); render(); }
  window.peToggleFlag=toggleFlag;

  const baseRenderQ=renderQ;
  renderQ=function(q,idx,total){
    let html=baseRenderQ(q,idx,total);
    const flagged=flags.has(String(q.id));
    html=html.replace('<div class="q-num">Question '+(idx+1)+'</div>',
      '<div class="pe-qhead-actions"><button type="button" class="pe-flag-btn '+(flagged?'on':'')+'" onclick="peToggleFlag(\''+q.id+'\')">'+(flagged?'⚑ Flagged':'⚐ Flag')+'</button><div class="q-num">Question '+(idx+1)+'</div></div>');
    return html;
  };

  function paintExamResponse(){
    if(sessionMode!=='exam'||!state.filtered.length)return;
    const q=state.filtered[state.idx], val=examResponses[q.id];
    if(val===undefined)return;
    if(q.type==='mcq'||q.type==='ar'){
      document.querySelectorAll('.opt').forEach((el,i)=>el.classList.toggle('selected',i===val));
    }else if(q.type==='tf'){
      document.querySelectorAll('.tf-btn').forEach((el,i)=>el.style.outline=((i===0?1:0)===val?'2px solid #1B3D72':''));
    }else if(q.type==='fitb'){
      const el=document.getElementById('fitb-'+q.id);if(el)el.value=val;
    }else if(q.type==='num'){
      const el=document.getElementById('num-'+q.id);if(el)el.value=val;
    }else if(q.type==='conc'){
      const el=document.getElementById('conc-input-'+q.id);if(el)el.value=val;
    }
  }

  function updatePalette(){
    const grid=document.getElementById('pe-palette-grid'); if(!grid)return;
    grid.innerHTML='';
    state.filtered.forEach((q,i)=>{
      const b=document.createElement('button');b.type='button';b.className='pe-qdot';
      b.textContent=i+1;b.title='Question '+(i+1);
      if(i===state.idx)b.classList.add('current');
      if(attempted(q.id))b.classList.add('attempted');
      if(flags.has(String(q.id)))b.classList.add('flagged');
      b.onclick=()=>{reportOpen=false;state.idx=i;render()};
      grid.appendChild(b);
    });
  }

  const baseRender=render;
  render=function(){
    if(reportOpen)return;
    baseRender();
    updatePalette();
    paintExamResponse();
    saveSession();
  };

  const baseAnswerMCQ=answerMCQ, baseAnswerTF=answerTF, baseFITB=checkFITB, baseNUM=checkNUM, baseConcept=checkConceptual;
  answerMCQ=function(qid,chosen,correct){
    if(sessionMode==='exam'){examResponses[qid]=chosen;saveSession();render();return}
    baseAnswerMCQ(qid,chosen,correct);
  };
  answerTF=function(qid,chosen,correct){
    if(sessionMode==='exam'){examResponses[qid]=chosen;saveSession();render();return}
    baseAnswerTF(qid,chosen,correct);
  };
  checkFITB=function(qid){
    if(sessionMode==='exam'){
      const el=document.getElementById('fitb-'+qid); if(!el||!el.value.trim())return;
      examResponses[qid]=el.value.trim();saveSession();render();return;
    }
    baseFITB(qid);
  };
  checkNUM=function(qid){
    if(sessionMode==='exam'){
      const el=document.getElementById('num-'+qid); if(!el||!el.value.trim())return;
      examResponses[qid]=el.value.trim();saveSession();render();return;
    }
    baseNUM(qid);
  };
  checkConceptual=function(qid){
    if(sessionMode==='exam'){
      const el=document.getElementById('conc-input-'+qid);if(!el||!el.value.trim()){alert('Please write your answer first.');return}
      examResponses[qid]=el.value.trim();saveSession();render();return;
    }
    baseConcept(qid);
  };

  const baseGenerate=generatePractice;
  generatePractice=function(){
    flags=new Set();examResponses={};reportOpen=false;
    baseGenerate();
    document.body.classList.toggle('pe-exam-mode',sessionMode==='exam');
    updateFinishLabel();updatePalette();saveSession();
  };

  function evaluateExam(){
    state.answered={};state.correct=0;state.partial=0;state.wrong=0;
    state.fitbVals={};state.numVals={};state.concVals={};state.concReview={};
    state.filtered.forEach(q=>{
      if(!Object.prototype.hasOwnProperty.call(examResponses,q.id))return;
      const v=examResponses[q.id];
      if(q.type==='mcq'||q.type==='ar'||q.type==='tf'){
        state.answered[q.id]=v;if(v===q.ans)state.correct++;else state.wrong++;
      }else if(q.type==='fitb'){
        const val=String(v).trim().toLowerCase(),accepted=(Array.isArray(q.ans)?q.ans:[q.ans]).map(x=>String(x).trim().toLowerCase());
        const ok=accepted.some(a=>val===a||(val.length>2&&a.includes(val)));state.fitbVals[q.id]=v;state.answered[q.id]=ok;ok?state.correct++:state.wrong++;
      }else if(q.type==='num'){
        const val=parseFloat(v),correct=parseFloat(q.ans),ok=!isNaN(val)&&!isNaN(correct)&&Math.abs(val-correct)<=Math.abs(correct)*.02+.001;
        state.numVals[q.id]=v;state.answered[q.id]=ok;ok?state.correct++:state.wrong++;
      }else if(q.type==='conc'){
        state.concVals[q.id]=v;state.answered[q.id]='partial';state.partial++;
      }
    });
  }

  function resultFor(q){
    if(!Object.prototype.hasOwnProperty.call(state.answered,q.id))return 'unattempted';
    const v=state.answered[q.id];
    if(q.type==='mcq'||q.type==='ar'||q.type==='tf')return v===q.ans?'correct':'wrong';
    if(q.type==='fitb'||q.type==='num')return v===true?'correct':'wrong';
    if(q.type==='conc')return v==='full'?'correct':(v==='partial'?'partial':'wrong');
    return 'wrong';
  }
  function breakdown(keyFn,labelFn){
    const m={};
    state.filtered.forEach(q=>{
      const k=keyFn(q),label=labelFn(q); if(!m[k])m[k]={label,correct:0,partial:0,wrong:0,unattempted:0,total:0};
      const r=resultFor(q);m[k][r]++;m[k].total++;
    });
    return Object.values(m).map(x=>({...x,acc:x.total?Math.round((x.correct+.5*x.partial)/x.total*100):0})).sort((a,b)=>a.acc-b.acc);
  }
  function reportHTML(){
    const total=state.filtered.length, attemptedCount=state.filtered.filter(q=>resultFor(q)!=='unattempted').length;
    const earned=state.correct+.5*state.partial, pct=total?Math.round(earned/total*100):0;
    const topic=breakdown(q=>q.ch,q=>CH_NAMES[q.ch]||('Topic '+q.ch));
    const typeNames={mcq:'MCQ',ar:'Assertion–Reason',tf:'True / False',fitb:'Fill in Blanks',num:'Numerical',conc:'Conceptual'};
    const types=breakdown(q=>q.type,q=>typeNames[q.type]||q.type);
    const weak=topic.length?topic[0]:null;
    const rows=a=>a.map(x=>'<tr><td>'+x.label+'</td><td>'+x.acc+'%</td></tr>').join('');
    return '<div class="pe-report"><div class="pe-report-hero"><div class="pe-report-kicker">Session complete</div><h2>'+pct+'% performance</h2><p>'+attemptedCount+' of '+total+' questions attempted · '+formatTime(timerSeconds)+'</p></div>'+
      '<div class="pe-report-stats"><div class="pe-stat"><b>'+state.correct+'</b><span>Correct</span></div><div class="pe-stat"><b>'+state.partial+'</b><span>Partial</span></div><div class="pe-stat"><b>'+state.wrong+'</b><span>Wrong</span></div><div class="pe-stat"><b>'+(total-attemptedCount)+'</b><span>Unattempted</span></div><div class="pe-stat"><b>'+formatTime(timerSeconds)+'</b><span>Time</span></div></div>'+
      '<div class="pe-report-section"><div class="pe-breakdown"><div><h3>Topic accuracy</h3><table class="pe-table"><tbody>'+rows(topic)+'</tbody></table></div><div><h3>Question type accuracy</h3><table class="pe-table"><tbody>'+rows(types)+'</tbody></table></div></div></div>'+
      (weak?'<div class="pe-report-section"><h3>Weak concept focus</h3><div class="pe-weak">Lowest current accuracy: <strong>'+weak.label+'</strong> at '+weak.acc+'%. Use “Practice Weak Area” to generate a focused follow-up set.</div></div>':'')+
      '<div class="pe-report-actions"><button type="button" onclick="peRetryWrong()">Retry Wrong</button><button type="button" onclick="pePracticeWeak()">Practice Weak Area</button><button type="button" onclick="peSimilar()">Generate Similar Test</button><button type="button" class="primary" onclick="peNewSession()">New Session</button></div></div>';
  }
  function formatTime(sec){const m=Math.floor(sec/60),s=sec%60;return m+':'+String(s).padStart(2,'0');}
  function finishSession(){
    if(sessionMode==='exam'){
      const n=Object.keys(examResponses).length;
      if(n<state.filtered.length&&!confirm('You have '+(state.filtered.length-n)+' unanswered question(s). Submit anyway?'))return;
      evaluateExam();
    }
    clearInterval(timerId);timerRunning=false;reportOpen=true;
    document.getElementById('q-area').innerHTML=reportHTML();
    const nav=document.querySelector('.bottom-nav');if(nav)nav.style.display='none';
    document.getElementById('pe-palette').style.display='none';
    localStorage.removeItem(STORE_KEY);
  }
  window.peRetryWrong=function(){
    const wrong=state.filtered.filter(q=>resultFor(q)==='wrong');
    if(!wrong.length){alert('No wrong answers to retry.');return}
    startSubset(wrong,'Retry Wrong');
  };
  window.pePracticeWeak=function(){
    const t=breakdown(q=>q.ch,q=>CH_NAMES[q.ch]||('Topic '+q.ch))[0];
    if(!t)return;
    const ch=state.filtered.find(q=>(CH_NAMES[q.ch]||('Topic '+q.ch))===t.label)?.ch;
    const qs=shuffle(ALL_Q.filter(q=>q.ch===ch)).slice(0,Math.min(10,ALL_Q.filter(q=>q.ch===ch).length));
    startSubset(qs,'Weak Area Practice');
  };
  window.peSimilar=function(){
    reportOpen=false;state.filtered=state.mode==='full'?buildFullPaper():buildCustomSet();resetRun();showTest();render();
  };
  window.peNewSession=function(){
    reportOpen=false;localStorage.removeItem(STORE_KEY);document.getElementById('test-stage').classList.remove('active');document.getElementById('setup-stage').classList.remove('hidden');document.querySelector('.bottom-nav').style.display='flex';document.getElementById('pe-palette').style.display='block';window.scrollTo({top:0,behavior:'smooth'});
  };
  function startSubset(qs,label){reportOpen=false;state.filtered=shuffle(qs);resetRun();showTest();document.getElementById('paper-label').textContent=label;render();}
  function resetRun(){state.idx=0;state.answered={};state.correct=0;state.partial=0;state.wrong=0;state.fitbVals={};state.numVals={};state.concVals={};state.concReview={};examResponses={};flags=new Set();timerSeconds=0;renderTimer();startTimer();}
  function showTest(){document.getElementById('setup-stage').classList.add('hidden');document.getElementById('test-stage').classList.add('active');document.querySelector('.bottom-nav').style.display='flex';document.getElementById('pe-palette').style.display='block';}

  function saveSession(){
    if(restored||!state||!state.filtered||!state.filtered.length||reportOpen)return;
    const payload={sessionMode,flags:[...flags],examResponses,mode:state.mode,types:[...state.types],topics:[...state.topics],bl:state.bl,length:state.length,idx:state.idx,ids:state.filtered.map(q=>q.id),answered:state.answered,correct:state.correct,partial:state.partial,wrong:state.wrong,fitbVals:state.fitbVals||{},numVals:state.numVals||{},concVals:state.concVals||{},concReview:state.concReview||{},timerSeconds,savedAt:Date.now()};
    try{localStorage.setItem(STORE_KEY,JSON.stringify(payload))}catch(e){}
  }
  function maybeOfferResume(){
    try{const p=JSON.parse(localStorage.getItem(STORE_KEY)||'null');if(p&&p.ids&&p.ids.length){const r=document.getElementById('pe-resume');if(r)r.classList.add('show')}}catch(e){}
  }
  function restoreSession(){
    try{
      const p=JSON.parse(localStorage.getItem(STORE_KEY)||'null');if(!p)return;
      const qs=p.ids.map(id=>qById(id)).filter(Boolean);if(!qs.length)return;
      restored=true;state.mode=p.mode||'custom';state.types=new Set(p.types||['mcq']);state.topics=new Set(p.topics||[4,6,7,10]);state.bl=p.bl||0;state.length=p.length||10;state.idx=Math.min(p.idx||0,qs.length-1);state.filtered=qs;state.answered=p.answered||{};state.correct=p.correct||0;state.partial=p.partial||0;state.wrong=p.wrong||0;state.fitbVals=p.fitbVals||{};state.numVals=p.numVals||{};state.concVals=p.concVals||{};state.concReview=p.concReview||{};timerSeconds=p.timerSeconds||0;flags=new Set(p.flags||[]);examResponses=p.examResponses||{};sessionMode=p.sessionMode||'practice';
      setSessionMode(sessionMode);showTest();renderTimer();startTimer();reportOpen=false;render();document.getElementById('pe-resume').classList.remove('show');restored=false;
    }catch(e){console.error(e);localStorage.removeItem(STORE_KEY)}
  }

  function addConceptKeyPoints(){
    const old=renderQ;
    renderQ=function(q,idx,total){
      let html=old(q,idx,total);
      if(q.type==='conc' && q.exp){
        const points=String(q.exp).split(/[.;]\s+/).filter(Boolean).slice(0,4);
        if(points.length){
          const kp='<div class="conc-review" style="margin-top:9px"><div class="conc-review-title">Key points to include</div><ul style="margin:6px 0 0 18px;font-size:.82rem;line-height:1.55">'+points.map(x=>'<li>'+x.replace(/[<>]/g,'')+'</li>').join('')+'</ul></div>';
          html=html.replace('</div><div class="card-footer">',kp+'</div><div class="card-footer">');
        }
      }
      return html;
    };
  }

  function ready(){
    injectUI();addConceptKeyPoints();updateFinishLabel();
    const wait=setInterval(()=>{if(Array.isArray(ALL_Q)&&ALL_Q.length){clearInterval(wait);maybeOfferResume()}},120);
    setInterval(saveSession,10000);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)saveSession()});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();