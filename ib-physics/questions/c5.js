/* PrepEnroll™ IB Physics C.5 Doppler effect — 100 assessable prompts */
(function(){"use strict";
const sub="C.5";
function M(i,x,q,o,a,e){MCQ.push({t:"C",s:sub,x,uid:"PE-C5-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,x,intro,h,r,parts){P1B.push({t:"C",s:sub,x,uid:"PE-C5-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(h,r),parts})})}
function T(i,x,intro,parts){P2.push({t:"C",s:sub,x,uid:"PE-C5-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,0,"An ambulance approaches a stationary observer while its siren frequency is constant. The observer hears a frequency that is",["higher than the emitted frequency","lower than the emitted frequency","exactly zero","unchanged in every case"],0,"Approaching motion compresses wavefront spacing.");
M(2,0,"After the ambulance passes and moves away, the observer hears a frequency that is",["lower than the emitted frequency","higher than the emitted frequency","always unchanged","infinite"],0,"Receding motion increases wavefront spacing.");
M(3,0,"For a moving source approaching a stationary observer, the wavefronts in front of the source are",["closer together","farther apart","unchanged","absent"],0,"Source motion reduces emitted wavefront spacing ahead.");
M(4,0,"For a moving source, the frequency of the source itself in its own frame",["does not change because of the Doppler effect","must increase","must decrease","becomes zero"],0,"The Doppler effect changes observed frequency due to relative motion.");
M(5,0,"A stationary source and moving observer approach each other in still air. Compared with stationary observer, the moving observer encounters wavefronts",["more frequently","less frequently","at the same rate regardless of speed","only once"],0,"Observer motion changes encounter rate.");
M(6,0,"The Doppler effect for electromagnetic waves is observed as a change in",["measured frequency or wavelength","speed of light in vacuum","electric charge","Planck constant"],0,"Relative motion changes measured frequency/wavelength, not c.");
M(7,0,"A star moving away from Earth shows spectral lines shifted toward",["longer wavelengths","shorter wavelengths","zero wavelength","unchanged wavelengths always"],0,"Recession gives redshift.");
M(8,0,"A star moving toward Earth shows spectral lines shifted toward",["shorter wavelengths","longer wavelengths","radio only","zero frequency"],0,"Approach gives blueshift.");
M(9,0,"For v≪c, the fractional wavelength shift of light is approximately",["Δλ/λ≈v/c","Δλ/λ≈c/v","Δλ/λ≈v²/c² only","Δλ/λ=0"],0,"Use the non-relativistic Doppler approximation.");
M(10,0,"For small speeds compared with c, a measured fractional frequency shift of 2×10⁻4 corresponds to radial speed approximately",["6×10⁴ m s⁻¹","1.5×10¹² m s⁻¹","600 m s⁻¹","2×10⁻4 m s⁻¹"],0,"v≈cΔf/f.");
M(11,0,"The Doppler effect requires",["relative motion along the line of sight component","a change in source frequency","a reflecting wall","a vacuum for sound"],0,"Only the radial component contributes to the shift.");
M(12,0,"If a source moves perpendicular to the line joining source and observer in the classical sound model at one instant, the first-order Doppler shift from radial motion is",["zero at that instant","maximum","infinite","equal to the source frequency"],0,"Radial velocity component is zero.");
M(13,0,"A Doppler shift can be used in astronomy to infer",["radial motion of stars and galaxies","stellar mass directly without other information","the speed of light changing","absolute distance in all cases"],0,"Spectral shifts reveal line-of-sight velocity.");
M(14,0,"Which diagram best represents an approaching moving sound source?",["wavefronts compressed ahead and spread behind","equal spacing everywhere","wavefronts compressed equally on both sides","no wavefronts behind"],0,"This is the characteristic moving-source pattern.");
M(15,1,"A source of frequency f approaches a stationary observer at speed us in a medium where wave speed is v. The observed frequency is",["fv/(v-us)","fv/(v+us)","f(v-us)/v","f(v+us)/v"],0,"Moving approaching source gives denominator v-us.");
M(16,1,"A source recedes from a stationary observer. The observed frequency is",["fv/(v+us)","fv/(v-us)","f(v+us)/v","fv/us"],0,"Receding source increases effective wavelength.");
M(17,1,"A stationary source is approached by an observer at speed uo. The observed frequency is",["f(v+uo)/v","fv/(v-uo)","fv/(v+uo)","f(v-uo)/v"],0,"Moving observer changes wavefront encounter speed.");
M(18,1,"A stationary observer hears a 500 Hz source approach at 20 m s⁻¹ in air where v=340 m s⁻¹. Observed frequency is closest to",["531 Hz","472 Hz","500 Hz","340 Hz"],0,"f'=500×340/(340-20)≈531 Hz.");
M(19,1,"A 600 Hz source recedes at 30 m s⁻¹ in air where v=330 m s⁻¹. Observed frequency is",["550 Hz","660 Hz","600 Hz","300 Hz"],0,"f'=600×330/(330+30)=550 Hz.");
M(20,1,"A stationary 800 Hz source is approached by an observer at 15 m s⁻¹; sound speed is 300 m s⁻¹. Observed frequency is",["840 Hz","760 Hz","800 Hz","815 Hz"],0,"f'=800(300+15)/300=840 Hz.");

/* 10 Paper 1B */
P(1,0,"The same spectral line is measured from several stars with different radial motions.",["star","λobserved / nm"],[["A",656.0],["B",656.6],["C",655.4],["D",657.2]],[
{q:"Assuming the laboratory wavelength is 656.0 nm, identify a receding star.",m:1,ms:["B or D"]},
{q:"Identify the star moving toward Earth most strongly.",m:1,ms:["C"]},
{q:"Explain the sign of the wavelength shift for a receding source.",m:1,ms:["wavelength is longer / redshift"]},
{q:"State one assumption needed to infer radial speed from the shift.",m:1,ms:["shift is primarily Doppler and speed is small compared with c for the approximation"]}]);
P(2,0,"A galaxy's spectral lines have measured fractional redshifts.",["line","Δλ/λ"],[["A",0.0005],["B",0.00052],["C",0.00049],["D",0.00051]],[
{q:"Estimate the mean fractional shift.",m:1,ms:["about 5.05×10⁻4"]},
{q:"Estimate radial speed using v/c≈Δλ/λ.",m:2,ms:["about 1.5×10⁵ m s⁻¹"]},
{q:"Explain why several lines improve confidence.",m:1,ms:["they provide repeated estimates and help identify calibration/blending errors"]},
{q:"State whether the galaxy is approaching or receding.",m:1,ms:["receding"]}]);
P(3,0,"An ambulance passes a microphone. The measured dominant frequency changes.",["time / s","fobs / Hz"],[[-4,760],[-2,765],[-0.5,770],[0.5,680],[2,685],[4,690]],[
{q:"Identify approximately when the source passes the microphone.",m:1,ms:["near t=0"]},
{q:"Explain the sudden change from higher to lower observed frequency.",m:2,ms:["radial velocity changes from approaching to receding"]},
{q:"State why frequency may vary gradually away from the pass point.",m:1,ms:["line-of-sight component of source velocity changes with geometry"]},
{q:"State one reason the measured values may fluctuate.",m:1,ms:["traffic reflections / microphone resolution / siren modulation"]}]);
P(4,0,"Wavefront spacing from a moving source is measured in front of and behind it.",["region","λ / m"],[["front",0.90],["side-near",1.00],["behind",1.10]],[
{q:"Identify the direction in which observed frequency is highest for a stationary observer.",m:1,ms:["front"]},
{q:"Explain using f=v/λ.",m:1,ms:["smaller wavelength at same wave speed gives higher frequency"]},
{q:"State why source motion changes wavelength even though source frequency remains fixed.",m:2,ms:["successive wavefronts are emitted from different source positions"]},
{q:"State what happens to spacing if source speed increases.",m:1,ms:["front spacing decreases and rear spacing increases"]}]);
P(5,0,"A rotating star shows one edge blueshifted and the opposite edge redshifted.",["edge","measured shift"],[["left","−0.10 nm"],["centre","0.00 nm"],["right","+0.10 nm"]],[
{q:"Interpret the negative shift.",m:1,ms:["that edge is moving toward the observer"]},
{q:"Interpret the positive shift.",m:1,ms:["that edge is moving away"]},
{q:"Explain why the centre can show little radial shift.",m:1,ms:["its rotational velocity is largely transverse to the line of sight at the centre"]},
{q:"State what property of the star this pattern can reveal.",m:1,ms:["rotation / rotational speed"]}]);
P(6,0,"An observer measures the same source while moving at different line-of-sight speeds. The shifts are small.",["uo / m s⁻¹","fobs / Hz"],[[-20,470],[-10,485],[0,500],[10,515],[20,530]],[
{q:"Describe how the measured frequency changes as the observer speed changes.",m:1,ms:["observed frequency increases as observer moves more strongly toward source"]},
{q:"Identify the emitted frequency.",m:1,ms:["about 500 Hz at uo=0"]},
{q:"Explain why the relation is approximately linear at small observer speeds.",m:1,ms:["f'=f(1+uo/v) for fixed v"]},
{q:"State one way to determine sound speed from the gradient if f is known.",m:1,ms:["gradient=f/v, so v=f/gradient"]}]);
P(7,0,"A radar system measures reflected frequency shifts from vehicles moving directly toward it.",["vehicle speed / m s⁻¹","relative shift / arbitrary units"],[[5,1.0],[10,2.0],[15,3.0],[20,4.0],[25,5.0]],[
{q:"Describe the dependence shown by these Doppler data.",m:1,ms:["shift is proportional to speed in this small-speed range"]},
{q:"Explain why Doppler measurements can be calibrated to infer speed.",m:1,ms:["frequency shift depends predictably on radial velocity"]},
{q:"State what velocity component is actually measured.",m:1,ms:["line-of-sight/radial component"]},
{q:"Explain why a vehicle moving perpendicular to the beam can give a much smaller first-order shift.",m:1,ms:["radial component is small/zero"]}]);
P(8,1,"A stationary observer measures a moving sound source of emitted frequency 600 Hz in air at 340 m s⁻¹.",["us / m s⁻¹","fobs approaching / Hz"],[[0,600],[10,618],[20,638],[30,658],[40,680]],[
{q:"State the moving-source equation used.",m:1,ms:["f'=fv/(v-us)"]},
{q:"Explain why the increase is not exactly linear at larger source speed.",m:1,ms:["source speed appears in the denominator"]},
{q:"Use the 20 m s⁻¹ row to check the model approximately.",m:2,ms:["600×340/320≈638 Hz"]},
{q:"State the physical limit in the denominator as source speed approaches wave speed.",m:1,ms:["v-us tends to zero; classical formula predicts very large frequency and wavefront piling"]}]);
P(9,1,"A stationary source emits 750 Hz while an observer moves directly toward it in air at 300 m s⁻¹.",["uo / m s⁻¹","fobs / Hz"],[[0,750],[10,775],[20,800],[30,825],[40,850]],[
{q:"State the moving-observer equation.",m:1,ms:["f'=f(v+uo)/v"]},
{q:"Describe the relationship with observer speed.",m:1,ms:["linear"]},
{q:"Determine the gradient in Hz per m s⁻¹.",m:1,ms:["2.5 Hz per m s⁻¹"]},
{q:"Use the gradient to recover the wave speed.",m:1,ms:["v=f/gradient=750/2.5=300 m s⁻¹"]}]);
P(10,1,"A source moves away from a stationary detector in a medium with wave speed 330 m s⁻¹.",["us / m s⁻¹","fobs/f"],[[0,1.000],[15,0.957],[30,0.917],[45,0.880],[60,0.846]],[
{q:"State the expected ratio for a receding source.",m:1,ms:["f'/f=v/(v+us)"]},
{q:"Explain why the ratio decreases as source speed rises.",m:1,ms:["wavefront spacing behind the source increases"]},
{q:"Use us=30 m s⁻¹ to check the ratio.",m:1,ms:["330/360≈0.917"]},
{q:"State whether changing emitted frequency would change this ratio for fixed speeds.",m:1,ms:["no"]}]);

/* 10 Paper 2 */
T(1,0,"A sound source moves toward a stationary observer.",[
{q:"Explain qualitatively how source motion changes wavefront spacing.",m:2,ms:["source moves toward previously emitted fronts, reducing spacing ahead"]},
{q:"State what happens to observed frequency.",m:1,ms:["increases"]},
{q:"State what happens behind the source.",m:1,ms:["wavefront spacing increases and observed frequency is lower"]},
{q:"Explain why the propagation speed of sound in the medium is not increased by source motion.",m:1,ms:["wave speed is set by medium properties, not source speed"]}]);
T(2,0,"An observer moves toward a stationary sound source.",[
{q:"State whether wavelength in the medium changes.",m:1,ms:["no"]},
{q:"Explain why observed frequency increases.",m:2,ms:["observer meets wavefronts at a greater rate"]},
{q:"Contrast this with a moving source.",m:2,ms:["moving source changes wavefront spacing/wavelength in the medium"]},
{q:"State one practical example.",m:1,ms:["moving listener / detector / vehicle"]}]);
T(3,0,"A star's known spectral line of wavelength λ is observed at λ+Δλ, where |Δλ|≪λ.",[
{q:"State the approximate Doppler relation.",m:1,ms:["Δλ/λ≈v/c"]},
{q:"Interpret positive Δλ.",m:1,ms:["recession/redshift"]},
{q:"Write v in terms of measured quantities.",m:1,ms:["v≈cΔλ/λ"]},
{q:"State one limitation of this approximation.",m:1,ms:["requires speed much smaller than c"]}]);
T(4,0,"A galaxy spectrum contains several identifiable absorption lines shifted by the same fractional amount.",[
{q:"Explain why matching several line patterns is useful.",m:1,ms:["confirms identification and reduces chance of misidentifying one line"]},
{q:"State what equal fractional shifts indicate.",m:1,ms:["a common radial Doppler motion"]},
{q:"Explain how sign of shift gives direction.",m:1,ms:["longer wavelength means receding; shorter means approaching"]},
{q:"State another possible cause of spectral-line displacement that would need consideration in precision work.",m:1,ms:["gravitational redshift / calibration effects"]}]);
T(5,0,"A siren passes close to a stationary observer along a straight road.",[
{q:"Explain why the observed frequency is high before passing.",m:1,ms:["source has an approaching radial component"]},
{q:"Explain why it is low after passing.",m:1,ms:["source has a receding radial component"]},
{q:"Explain why the shift may be smallest at closest approach for a path exactly perpendicular to the line of sight at that instant.",m:2,ms:["instantaneous radial velocity component can be zero"]},
{q:"State why source frequency itself need not change.",m:1,ms:["Doppler shift is an observation effect caused by relative motion"]}]);
T(6,0,"A spacecraft transmits radio waves while receding slowly compared with c.",[
{q:"State the sign of the observed frequency shift.",m:1,ms:["negative / observed frequency lower"]},
{q:"Write the approximate fractional-frequency relation.",m:1,ms:["|Δf|/f≈v/c for small speed"]},
{q:"Explain why the measured radio-wave speed remains c.",m:1,ms:["speed of electromagnetic waves in vacuum is invariant"]},
{q:"State one use of the measured shift.",m:1,ms:["determine radial velocity"]}]);
T(7,0,"A rotating galaxy has one side approaching and one side receding relative to Earth.",[
{q:"Predict the spectral shift from the approaching side.",m:1,ms:["blueshift"]},
{q:"Predict the shift from the receding side.",m:1,ms:["redshift"]},
{q:"Explain how comparing the two shifts can estimate rotational speed.",m:2,ms:["opposite radial velocities produce opposite Doppler shifts whose magnitude reflects rotation"]},
{q:"State why inclination of the galaxy matters.",m:1,ms:["only line-of-sight velocity component is measured"]}]);
T(8,1,"A source of frequency f moves toward a stationary observer at speed us in a medium with wave speed v.",[
{q:"Determine the emitted wavelength behind a stationary source first.",m:1,ms:["λ=v/f"]},
{q:"Explain why the wavelength ahead of the moving source is (v-us)/f.",m:2,ms:["during one period the previous front moves vT while source advances usT"]},
{q:"Derive the measured frequency for this particular moving-source or moving-observer case.",m:2,ms:["f'=v/λ'=fv/(v-us)"]},
{q:"State the corresponding change for a receding source.",m:1,ms:["replace denominator with v+us"]}]);
T(9,1,"A stationary source emits frequency f while an observer moves toward it at speed uo.",[
{q:"State the wavelength in the medium.",m:1,ms:["λ=v/f"]},
{q:"State the relative speed at which wavefronts meet the observer.",m:1,ms:["v+uo"]},
{q:"Derive the measured frequency for this particular moving-source or moving-observer case.",m:2,ms:["f'=(v+uo)/λ=f(v+uo)/v"]},
{q:"State the expression for an observer moving away.",m:1,ms:["f'=f(v-uo)/v"]}]);
T(10,1,"A source of 1000 Hz approaches a stationary observer at 25 m s⁻¹ in air where sound speed is 350 m s⁻¹.",[
{q:"Calculate the observed frequency.",m:2,ms:["f'=1000×350/(350-25)≈1077 Hz"]},
{q:"Calculate the wavelength ahead of the source.",m:1,ms:["λ'=(350-25)/1000=0.325 m"]},
{q:"Compare this with the wavelength for a stationary source.",m:1,ms:["stationary λ=0.350 m, so it is shorter ahead"]},
{q:"Explain physically why the observer hears the higher frequency.",m:1,ms:["compressed wavefronts arrive more frequently"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("C.5 prompt count "+prompts);
})();