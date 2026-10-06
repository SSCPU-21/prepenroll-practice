/* PrepEnroll™ IB Physics C.4 Standing waves and resonance — 100 assessable prompts */
(function(){"use strict";
const sub="C.4",x=0;
function M(i,q,o,a,e){MCQ.push({t:"C",s:sub,x,uid:"PE-C4-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,h,r,parts){P1B.push({t:"C",s:sub,x,uid:"PE-C4-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(h,r),parts})})}
function T(i,intro,parts){P2.push({t:"C",s:sub,x,uid:"PE-C4-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A standing wave is formed by superposition of two waves that have",["the same frequency and amplitude and travel in opposite directions","different frequencies and travel in the same direction","the same direction only","zero amplitude"],0,"Standing waves result from equal-frequency counter-propagating waves.");
M(2,"At a node of a standing wave, the displacement amplitude is",["zero","maximum","half maximum","time dependent but never zero"],0,"Nodes remain at zero displacement.");
M(3,"At an antinode of a standing wave, displacement amplitude is",["maximum","zero","always half maximum","undefined"],0,"Antinodes have maximum oscillation amplitude.");
M(4,"Adjacent nodes in a standing wave are separated by",["λ/2","λ","λ/4","2λ"],0,"Node-to-node spacing is half a wavelength.");
M(5,"A node and its nearest antinode are separated by",["λ/4","λ/2","λ","2λ"],0,"Node to adjacent antinode is a quarter wavelength.");
M(6,"Points in the same loop of a standing wave oscillate",["in phase","180° out of phase","with random phase","at different frequencies"],0,"Points between the same two adjacent nodes are in phase.");
M(7,"Points in adjacent loops of a standing wave oscillate",["180° out of phase","in phase","90° out of phase","at different frequencies"],0,"Neighbouring loops are in antiphase.");
M(8,"For a string fixed at both ends in the fundamental mode, its length equals",["λ/2","λ","λ/4","2λ"],0,"Fixed ends are nodes.");
M(9,"For a string fixed at both ends, the second harmonic has wavelength",["L","2L","L/2","4L"],0,"λ_n=2L/n, so n=2 gives λ=L.");
M(10,"For an open pipe in the fundamental mode, the pipe length is",["λ/2","λ/4","λ","2λ"],0,"Open ends are displacement antinodes; fundamental is half-wave.");
M(11,"For a pipe closed at one end and open at the other, the fundamental length is",["λ/4","λ/2","λ","3λ/4"],0,"Closed end is a node and open end an antinode.");
M(12,"A closed-open pipe supports which harmonic sequence ideally?",["odd harmonics only","all integer harmonics","even harmonics only","no harmonics"],0,"Allowed frequencies are odd multiples of the fundamental.");
M(13,"Resonance occurs when driving frequency is",["near the system's natural frequency","zero","much larger than every natural frequency","unrelated to the system"],0,"Resonance is strongest near a natural frequency.");
M(14,"Increasing damping generally makes a resonance peak",["lower and broader","higher and narrower","unchanged","infinitely sharp"],0,"Damping reduces and broadens the response.");
M(15,"At resonance, energy transfer from the driver to the oscillator is",["particularly effective","zero","always negative","independent of damping"],0,"Resonance corresponds to efficient periodic energy transfer.");
M(16,"A guitar string's fundamental frequency increases if string tension",["increases","decreases","becomes zero","changes sign"],0,"Wave speed and hence resonant frequencies rise with tension.");
M(17,"If wave speed in a string is constant and length doubles, its fundamental frequency becomes",["half as large","twice as large","four times as large","unchanged"],0,"f1=v/(2L).");
M(18,"Which point in a standing sound wave in an open pipe is a displacement antinode?",["an open end","a closed end","every midpoint only","no point"],0,"Open ends are displacement antinodes.");
M(19,"Which point in a standing sound wave in a closed end is a displacement node?",["the closed end","the open end","every antinode","the midpoint in every mode"],0,"Air displacement is constrained at a closed end.");
M(20,"A standing wave transfers",["no net energy along the medium in the ideal pattern","maximum net energy from node to node","matter steadily from one end to the other","only gravitational energy"],0,"Counter-propagating energy fluxes balance in an ideal standing wave.");

/* 10 Paper 1B */
P(1,"A stretched string of fixed length is driven at several frequencies. Large amplitudes are observed at resonances.",["f / Hz","relative amplitude"],[[50,1.0],[75,1.4],[100,6.0],[125,1.7],[150,5.2],[175,1.3],[200,4.8]],[
{q:"Identify three approximate resonant frequencies.",m:1,ms:["about 100,150,200 Hz"]},
{q:"Estimate the fundamental frequency from the spacing pattern.",m:1,ms:["about 50 Hz if the listed peaks correspond to higher harmonics with spacing 50 Hz"]},
{q:"Explain why amplitudes are large near resonances.",m:2,ms:["driving frequency matches a natural mode, enabling efficient energy transfer"]},
{q:"State one reason resonance amplitudes differ between modes.",m:1,ms:["damping/coupling to driver varies with mode"]}]);
P(2,"A string fixed at both ends shows different standing-wave modes.",["mode n","number of loops"],[[1,1],[2,2],[3,3],[4,4],[5,5]],[
{q:"State the relation between mode number and number of loops.",m:1,ms:["equal"]},
{q:"Write the wavelength of mode n in terms of L.",m:1,ms:["λ_n=2L/n"]},
{q:"State how frequency depends on n when wave speed is fixed.",m:1,ms:["f_n=n v/(2L)"]},
{q:"Explain why the ends are nodes.",m:1,ms:["the fixed endpoints cannot move"]}]);
P(3,"A pipe open at both ends has measured resonant frequencies.",["resonance","f / Hz"],[[1,170],[2,342],[3,511],[4,682]],[
{q:"State whether the pattern is consistent with integer harmonics.",m:1,ms:["yes"]},
{q:"Estimate the fundamental frequency.",m:1,ms:["about 170 Hz"]},
{q:"If sound speed is 340 m s⁻¹, estimate pipe length.",m:2,ms:["L=v/(2f1)≈1.0 m"]},
{q:"State the displacement condition at both ends.",m:1,ms:["antinodes"]}]);
P(4,"A pipe closed at one end shows measured resonances.",["resonance","f / Hz"],[[1,85],[2,255],[3,425],[4,595]],[
{q:"Describe the frequency pattern.",m:1,ms:["odd multiples of about 85 Hz"]},
{q:"State why the second allowed resonance is near 3f1 rather than 2f1.",m:1,ms:["closed-open boundary conditions allow only odd harmonics"]},
{q:"Estimate the pipe length for sound speed 340 m s⁻¹.",m:2,ms:["L=v/(4f1)≈1.0 m"]},
{q:"State the displacement conditions at the two ends.",m:1,ms:["node at closed end, antinode at open end"]}]);
P(5,"A resonance curve is measured with two damping settings.",["f / Hz","amplitude low damping / cm","amplitude high damping / cm"],[[8,1.0,1.2],[9,2.0,1.5],[10,7.0,2.7],[11,2.1,1.6],[12,1.0,1.2]],[
{q:"Identify the approximate natural frequency.",m:1,ms:["about 10 Hz"]},
{q:"Compare peak amplitudes.",m:1,ms:["low damping gives much larger peak"]},
{q:"Compare the widths qualitatively.",m:1,ms:["high damping is broader/flatter"]},
{q:"Explain why damping reduces resonant amplitude.",m:1,ms:["more energy is dissipated each cycle"]}]);
P(6,"Node positions are measured along a standing wave on a string.",["node number","position / m"],[[1,0.00],[2,0.30],[3,0.60],[4,0.90],[5,1.20]],[
{q:"Determine node spacing.",m:1,ms:["0.30 m"]},
{q:"Use the measured node-to-node spacing to obtain the wavelength.",m:1,ms:["0.60 m"]},
{q:"If frequency is 40 Hz, determine wave speed.",m:1,ms:["24 m s⁻¹"]},
{q:"State where antinodes lie relative to these node positions.",m:1,ms:["midway between adjacent nodes"]}]);
P(7,"A string's fundamental frequency is measured for different lengths at fixed tension and linear density.",["L / m","f1 / Hz"],[[0.40,250],[0.50,200],[0.80,125],[1.00,100],[1.25,80]],[
{q:"State the relationship.",m:1,ms:["f1 proportional to 1/L"]},
{q:"Specify axes for a straight-line test of the stated resonance relation.",m:1,ms:["f1 against 1/L"]},
{q:"Determine wave speed from one row.",m:1,ms:["v=2Lf1≈200 m s⁻¹"]},
{q:"State why tension must be controlled.",m:1,ms:["wave speed changes with tension"]}]);
P(8,"A tube resonance experiment uses a tuning fork and adjustable air-column length.",["resonance number","L / m"],[[1,0.21],[2,0.63],[3,1.05],[4,1.47]],[
{q:"Determine the spacing between successive resonant lengths.",m:1,ms:["0.42 m"]},
{q:"Relate this spacing to wavelength.",m:1,ms:["successive closed-pipe resonances differ by λ/2"]},
{q:"Estimate wavelength.",m:1,ms:["0.84 m"]},
{q:"If f=400 Hz, estimate sound speed.",m:1,ms:["336 m s⁻¹"]}]);
P(9,"The phase of points along a standing wave is inferred from synchronized video.",["point","loop","phase relative to A"],[["A",1,"0"],["B",1,"0"],["C",2,"π"],["D",2,"π"]],[
{q:"State what the data show about points in one loop.",m:1,ms:["they oscillate in phase"]},
{q:"State what the data show about adjacent loops.",m:1,ms:["they oscillate in antiphase"]},
{q:"Identify what separates the loops.",m:1,ms:["a node"]},
{q:"Explain why phase changes abruptly across a node in the ideal pattern.",m:1,ms:["the displacement changes sign between neighbouring loops"]}]);
P(10,"A mechanical oscillator is driven at resonance while damping is varied.",["damping setting","steady amplitude / cm"],[["very low",9.0],["low",6.5],["medium",4.0],["high",2.2]],[
{q:"Describe how steady resonant amplitude varies with damping.",m:1,ms:["amplitude decreases as damping increases"]},
{q:"Explain the trend in energy terms.",m:1,ms:["more input energy is dissipated each cycle"]},
{q:"State whether the natural frequency must vanish at high damping.",m:1,ms:["no"]},
{q:"Give one context where strong damping is desirable.",m:1,ms:["vehicle suspension / buildings / machinery vibration control"]}]);

/* 10 Paper 2 */
T(1,"Two identical sinusoidal waves travel in opposite directions on a string.",[
{q:"State the condition under which they form a stationary standing-wave pattern.",m:1,ms:["same frequency/wavelength and stable phase relation"]},
{q:"Define a node.",m:1,ms:["point of zero displacement amplitude"]},
{q:"Define an antinode.",m:1,ms:["point of maximum displacement amplitude"]},
{q:"Explain why there is no net energy transport in the ideal standing wave.",m:2,ms:["equal counter-propagating waves carry equal energy in opposite directions"]}]);
T(2,"A string of length L is fixed at both ends and supports standing waves at speed v.",[
{q:"Write the fundamental wavelength for the fixed-fixed string.",m:1,ms:["λ1=2L"]},
{q:"Write the fundamental frequency.",m:1,ms:["f1=v/(2L)"]},
{q:"Write the nth harmonic frequency.",m:1,ms:["fn=nv/(2L)"]},
{q:"Explain why only integer numbers of half-wavelengths fit.",m:1,ms:["both ends must be nodes"]}]);
T(3,"An open-open pipe of length L supports sound standing waves.",[
{q:"State the displacement condition at both open ends of the pipe.",m:1,ms:["antinodes"]},
{q:"Write the fundamental wavelength for the open-open air column.",m:1,ms:["2L"]},
{q:"Write the harmonic frequencies.",m:1,ms:["fn=nv/(2L)"]},
{q:"Explain why the same frequency pattern as a fixed-fixed string can occur despite different end conditions.",m:1,ms:["both ends have identical boundary type, allowing integer half-wavelengths"]}]);
T(4,"A closed-open pipe has length L.",[
{q:"State the displacement conditions at the closed end and at the open end.",m:1,ms:["node at closed end, antinode at open end"]},
{q:"Write the fundamental wavelength for the closed-open air column.",m:1,ms:["4L"]},
{q:"State the allowed frequency sequence.",m:1,ms:["odd multiples of f1"]},
{q:"Explain why even harmonics are excluded.",m:1,ms:["they cannot satisfy node-antinode boundary conditions simultaneously"]}]);
T(5,"A driven oscillator exhibits resonance.",[
{q:"Define driving frequency.",m:1,ms:["frequency of the external periodic force"]},
{q:"Define natural frequency.",m:1,ms:["frequency of free oscillation"]},
{q:"Explain why amplitude grows near resonance.",m:2,ms:["energy is transferred efficiently from driver over successive cycles"]},
{q:"State how damping limits amplitude.",m:1,ms:["dissipation balances input at a finite steady amplitude"]}]);
T(6,"A violin string is shortened by pressing it against the fingerboard while tension stays approximately constant.",[
{q:"State how wave speed changes approximately.",m:1,ms:["approximately unchanged if tension and linear density stay unchanged"]},
{q:"State how fundamental frequency changes.",m:1,ms:["increases"]},
{q:"Use f1=v/(2L) to justify the change.",m:1,ms:["smaller L gives larger f1"]},
{q:"State what happens to the wavelength of the fundamental.",m:1,ms:["decreases to 2L"]}]);
T(7,"A bridge experiences periodic forcing from wind.",[
{q:"Explain why resonance can produce large oscillations.",m:2,ms:["forcing near a natural frequency transfers energy efficiently"]},
{q:"State one design strategy to reduce resonance risk.",m:1,ms:["increase damping / shift natural frequencies / alter stiffness/mass"]},
{q:"Explain the role of damping.",m:1,ms:["removes mechanical energy from oscillation"]},
{q:"State why avoiding one natural frequency does not guarantee safety.",m:1,ms:["structures have multiple modes/natural frequencies"]}]);
T(8,"A standing wave on a string has adjacent nodes separated by 0.25 m and frequency 60 Hz.",[
{q:"Use the given adjacent-node separation to obtain the wavelength.",m:1,ms:["0.50 m"]},
{q:"Determine wave speed.",m:1,ms:["30 m s⁻¹"]},
{q:"Determine distance from a node to the nearest antinode.",m:1,ms:["0.125 m"]},
{q:"State the phase relation of points in neighbouring loops.",m:1,ms:["π rad / antiphase"]}]);
T(9,"A resonance tube has one closed end and one open end. Two successive resonance lengths differ by ΔL.",[
{q:"Relate ΔL to wavelength.",m:1,ms:["ΔL=λ/2"]},
{q:"Hence write λ in terms of ΔL.",m:1,ms:["λ=2ΔL"]},
{q:"Write the wave speed in terms of f and ΔL.",m:1,ms:["v=2fΔL"]},
{q:"Explain why using successive resonances reduces sensitivity to an end correction.",m:2,ms:["a nearly constant end correction cancels in the length difference"]}]);
T(10,"A system has a sharp resonance peak in one test and a broad resonance peak after modification.",[
{q:"Identify which case has lower damping.",m:1,ms:["the sharp peak"]},
{q:"Compare maximum amplitudes.",m:1,ms:["lower damping generally gives larger maximum amplitude"]},
{q:"Explain why a broad response may be useful in some devices.",m:1,ms:["it allows response over a wider frequency range"]},
{q:"Explain why a sharp resonance may be useful in tuning applications.",m:1,ms:["it selectively responds to a narrow frequency range"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("C.4 prompt count "+prompts);
})();