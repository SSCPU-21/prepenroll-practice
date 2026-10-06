/* PrepEnroll™ IB Physics C.1 Simple harmonic motion — 100 assessable prompts */
(function(){"use strict";
const sub="C.1";
function M(i,x,q,o,a,e){MCQ.push({t:"C",s:sub,x,uid:"PE-C1-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,x,intro,head,rows,parts){P1B.push({t:"C",s:sub,x,uid:"PE-C1-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,x,intro,parts){P2.push({t:"C",s:sub,x,uid:"PE-C1-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,0,"Which condition defines simple harmonic motion?",["Acceleration is proportional to displacement and directed toward equilibrium","Velocity is proportional to displacement","Acceleration is constant","Period increases with amplitude for all oscillations"],0,"SHM satisfies a=-ω²x.");
M(2,0,"An oscillator has period 0.50 s. Its frequency is",["2.0 Hz","0.50 Hz","4.0 Hz","π Hz"],0,"f=1/T.");
M(3,0,"An oscillator has frequency 5.0 Hz. Its angular frequency is",["10π rad s⁻¹","5π rad s⁻¹","2.5π rad s⁻¹","25 rad s⁻¹"],0,"ω=2πf.");
M(4,0,"At the equilibrium position of an ideal SHM oscillator, the magnitude of acceleration is",["zero","maximum","equal to ω","equal to amplitude"],0,"a=-ω²x and x=0 at equilibrium.");
M(5,0,"At an extreme position of an ideal SHM oscillator, its instantaneous speed is",["zero","maximum","equal to amplitude","equal to ω"],0,"The oscillator reverses direction at the extremes.");
M(6,0,"A spring-mass system has mass m and spring constant k. Its period is",["2π√(m/k)","2π√(k/m)","√(mk)","2πm/k"],0,"Use the standard mass–spring period relation.");
M(7,0,"If the mass on an ideal spring is quadrupled, the period becomes",["twice as large","four times as large","half as large","unchanged"],0,"T∝√m.");
M(8,0,"If the spring constant is quadrupled with mass unchanged, the period becomes",["half as large","twice as large","four times as large","unchanged"],0,"T∝1/√k.");
M(9,0,"For a small-angle simple pendulum, increasing its length by a factor of 4 changes the period by a factor of",["2","4","1/2","1"],0,"T∝√l.");
M(10,0,"For a small-angle simple pendulum, which change leaves its ideal period unchanged?",["Changing the bob mass","Changing pendulum length","Changing local g","Replacing the support point height"],0,"Mass does not appear in T=2π√(l/g).");
M(11,0,"During SHM, kinetic energy is greatest when the particle is",["at equilibrium","at an extreme position","halfway only if amplitude is 1 m","at maximum acceleration"],0,"Speed and therefore kinetic energy are maximum at equilibrium.");
M(12,0,"During SHM, potential energy associated with the oscillation is greatest when the particle is",["at an extreme position","at equilibrium","moving fastest","when acceleration is zero"],0,"Potential energy is maximum at maximum displacement.");
M(13,0,"A real oscillator is lightly damped. Compared with an ideal oscillator, its amplitude generally",["decreases with time","increases with time","remains exactly constant","becomes zero instantly"],0,"Dissipation removes mechanical energy.");
M(14,0,"For ideal SHM, the acceleration and displacement are",["180° out of phase","in phase","90° out of phase","unrelated"],0,"a=-ω²x.");
M(15,1,"An SHM particle has x=x₀sin(ωt+φ). Its velocity is",["ωx₀cos(ωt+φ)","−ω²x₀sin(ωt+φ)","x₀ωt","ωx₀sin(ωt+φ)"],0,"Differentiate displacement with respect to time.");
M(16,1,"An SHM particle has amplitude x₀. At displacement x, its speed magnitude is",["ω√(x₀²−x²)","ωx","ωx₀²/x","ω²(x₀−x)"],0,"Use v=±ω√(x₀²−x²).");
M(17,1,"For an SHM oscillator with total energy E, the potential energy at displacement x is proportional to",["x²","x","1/x","√x"],0,"Ep=½mω²x².");
M(18,1,"At displacement x=x₀/√2 in ideal SHM, the kinetic and potential energies are",["equal","both zero","kinetic twice potential","potential twice kinetic"],0,"Ep/E=x²/x₀²=1/2.");
M(19,1,"If the amplitude of an ideal SHM oscillator doubles while ω is unchanged, total mechanical energy becomes",["four times larger","twice as large","half as large","unchanged"],0,"E∝x₀².");
M(20,1,"In ideal SHM, maximum speed is",["ωx₀","ω²x₀","x₀/ω","ω/x₀"],0,"Set x=0 in v=ω√(x₀²−x²).");

/* 10 Paper 1B */
P(1,0,"A motion sensor records displacement of a mass on a spring.",["t / s","x / cm"],[[0.00,4.0],[0.25,0.0],[0.50,-4.0],[0.75,0.0],[1.00,4.0]],[
{q:"Determine the period from the table.",m:1,ms:["1.00 s"]},
{q:"Determine the frequency.",m:1,ms:["1.0 Hz"]},
{q:"Read the oscillation amplitude from the relevant data.",m:1,ms:["4.0 cm"]},
{q:"State the phase relation between displacement and acceleration.",m:1,ms:["180° out of phase / opposite signs"]}]);
P(2,0,"The period of a spring–mass system is measured for different attached masses.",["m / kg","T / s"],[[0.10,0.63],[0.20,0.89],[0.30,1.09],[0.40,1.26],[0.50,1.41]],[
{q:"State a linearizing graph for the ideal relation.",m:1,ms:["T² against m"]},
{q:"For a T²-against-m graph, identify the physical meaning of the gradient.",m:2,ms:["4π²/k"]},
{q:"Explain why a non-zero intercept may occur.",m:2,ms:["effective mass of spring / timing offset / support compliance"]},
{q:"Suggest one method to reduce timing uncertainty.",m:1,ms:["time many oscillations and divide by the number"]}]);
P(3,0,"A simple pendulum is tested at small angles for different lengths.",["l / m","T / s"],[[0.20,0.90],[0.40,1.27],[0.60,1.55],[0.80,1.79],[1.00,2.01]],[
{q:"State a transformed graph suitable for determining g.",m:1,ms:["T² against l"]},
{q:"For a T²-against-l graph, write the expected theoretical gradient.",m:2,ms:["4π²/g"]},
{q:"Explain why keeping amplitude small is important.",m:1,ms:["small-angle model is required for the stated period relation"]},
{q:"State why changing bob mass should not alter the ideal graph.",m:1,ms:["period is independent of bob mass"]}]);
P(4,0,"The amplitude of a lightly damped oscillator is measured after each cycle.",["cycle","amplitude / cm"],[[0,6.0],[1,5.4],[2,4.9],[3,4.4],[4,4.0],[5,3.6]],[
{q:"Describe how oscillation amplitude changes from cycle to cycle.",m:1,ms:["amplitude decreases with time/cycle number"]},
{q:"Explain the trend in energy terms.",m:2,ms:["mechanical energy is dissipated to the surroundings"]},
{q:"State whether the motion can still be approximately periodic.",m:1,ms:["yes, if damping is light"]},
{q:"Suggest one physical source of damping.",m:1,ms:["air resistance / friction"]}]);
P(5,0,"A spring oscillator is measured at different positions during one cycle.",["x / cm","speed / cm s⁻¹"],[[-5,0],[-4,18],[-2,27],[0,30],[2,27],[4,18],[5,0]],[
{q:"Identify where speed is maximum.",m:1,ms:["x=0"]},
{q:"Read the oscillation amplitude from the relevant data.",m:1,ms:["5 cm"]},
{q:"Explain why equal positive and negative displacements have equal speed magnitudes.",m:1,ms:["energy depends on x² / motion is symmetric"]},
{q:"State where acceleration magnitude is greatest.",m:1,ms:["at x=±5 cm"]}]);
P(6,0,"A pendulum's measured period is recorded for different starting angles.",["angle / °","T / s"],[[3,1.42],[6,1.42],[9,1.43],[12,1.44],[18,1.47]],[
{q:"Identify the range over which the small-angle approximation appears best.",m:1,ms:["roughly 3–9°"]},
{q:"Explain why period begins to increase at larger amplitudes.",m:1,ms:["the small-angle SHM approximation becomes less accurate"]},
{q:"State one reason repeated timing over many cycles is useful.",m:1,ms:["reduces fractional timing uncertainty"]},
{q:"Name one quantity that should be kept fixed while changing the starting angle.",m:1,ms:["length / bob / local g"]}]);
P(7,0,"A driven oscillator is tested at several driving frequencies. Only qualitative resonance analysis is required.",["fdrive / Hz","amplitude / cm"],[[0.6,1.2],[0.8,2.0],[1.0,5.8],[1.2,2.2],[1.4,1.3]],[
{q:"Estimate the resonant frequency.",m:1,ms:["about 1.0 Hz"]},
{q:"Explain why amplitude peaks near this frequency.",m:2,ms:["energy transfer from driver is most effective near the natural frequency"]},
{q:"State the qualitative effect of increased damping on the resonance peak.",m:1,ms:["lower and broader peak"]},
{q:"Give one useful application or one destructive effect of resonance.",m:1,ms:["instrument resonance / tuning / bridge or building vibration"]}]);
P(8,1,"An SHM particle's displacement is recorded and a sinusoidal fit gives x=0.060 sin(8.0t+0.40) in SI units.",["quantity","value"],[["x₀ / m",0.060],["ω / rad s⁻¹",8.0],["φ / rad",0.40]],[
{q:"Determine the period.",m:1,ms:["T=2π/8.0≈0.785 s"]},
{q:"Determine the maximum speed.",m:1,ms:["vmax=ωx₀=0.48 m s⁻¹"]},
{q:"Determine the maximum acceleration.",m:1,ms:["amax=ω²x₀=3.84 m s⁻²"]},
{q:"State the role of the phase angle φ.",m:1,ms:["sets the oscillator's position/phase at t=0"]}]);
P(9,1,"For an SHM oscillator the measured kinetic energy varies with displacement.",["x / cm","Ek / mJ"],[[0,18.0],[1,16.0],[2,10.0],[3,0.0]],[
{q:"Read the oscillation amplitude from the relevant data.",m:1,ms:["3 cm"]},
{q:"State the total mechanical energy.",m:1,ms:["18 mJ"]},
{q:"Explain why kinetic energy decreases with x².",m:2,ms:["Ep∝x² and Etotal is constant, so Ek=E−Ep"]},
{q:"State the kinetic energy at the opposite extreme.",m:1,ms:["0"]}]);
P(10,1,"A numerical model gives velocity and displacement pairs for an SHM oscillator.",["x / m","v / m s⁻¹"],[[0.00,0.80],[0.03,0.69],[0.05,0.48],[0.06,0.00]],[
{q:"Read the oscillation amplitude from the relevant data.",m:1,ms:["0.06 m"]},
{q:"Use the maximum speed to estimate angular frequency.",m:2,ms:["ω=vmax/x₀≈13.3 rad s⁻¹"]},
{q:"State a plot that could test v²=ω²(x₀²−x²).",m:1,ms:["v² against x², giving a straight line with negative slope"]},
{q:"State the physical meaning of the point where v=0.",m:1,ms:["turning point/extreme displacement"]}]);

/* 10 Paper 2 */
T(1,0,"A mass m oscillates vertically on an ideal spring of spring constant k.",[
{q:"State the equilibrium condition before oscillations begin.",m:1,ms:["spring force balances weight"]},
{q:"State the period of small oscillations about equilibrium.",m:1,ms:["T=2π√(m/k)"]},
{q:"Predict the effect on period if mass is increased by a factor of 9.",m:1,ms:["period becomes 3 times larger"]},
{q:"Explain qualitatively the energy exchange during one full cycle.",m:2,ms:["kinetic and elastic/gravitational-related potential energy exchange while total remains constant ideally"]}]);
T(2,0,"A simple pendulum of length l undergoes small oscillations.",[
{q:"Write the period relation.",m:1,ms:["T=2π√(l/g)"]},
{q:"State two quantities the ideal period does not depend on.",m:2,ms:["bob mass; small amplitude"]},
{q:"Explain why the model ceases to be exact at large angle.",m:1,ms:["restoring acceleration is no longer proportional to angular displacement under the small-angle approximation"]},
{q:"Describe a procedure to determine g from multiple lengths.",m:2,ms:["measure T for several l, plot T² against l and use g=4π²/gradient"]}]);
T(3,0,"A cart attached to springs passes through equilibrium with maximum speed.",[
{q:"State its acceleration at equilibrium.",m:1,ms:["zero"]},
{q:"State where acceleration magnitude is maximum.",m:1,ms:["at the extremes"]},
{q:"Explain why speed is maximum at equilibrium.",m:2,ms:["potential energy is minimum and kinetic energy maximum"]},
{q:"Sketch qualitatively one cycle of displacement and acceleration on common time axes.",m:2,ms:["same period; opposite phase"]}]);
T(4,0,"A lightly damped pendulum is driven by a periodic force whose frequency can be varied.",[
{q:"Define natural frequency.",m:1,ms:["frequency of free oscillation of the system"]},
{q:"Define resonance.",m:1,ms:["large-amplitude response when driving frequency is near natural frequency"]},
{q:"Explain resonance in terms of energy transfer.",m:2,ms:["driver transfers energy most effectively when phase/frequency conditions align near natural frequency"]},
{q:"State the qualitative effect of stronger damping on resonance amplitude.",m:1,ms:["reduces peak amplitude"]}]);
T(5,0,"A mass-spring oscillator has amplitude A and period T.",[
{q:"State the distance travelled in one complete cycle.",m:1,ms:["4A"]},
{q:"State the average velocity over one complete cycle.",m:1,ms:["zero"]},
{q:"State the average speed over one complete cycle.",m:1,ms:["4A/T"]},
{q:"Explain why average speed and average velocity differ.",m:1,ms:["distance is non-zero but net displacement over a cycle is zero"]}]);
T(6,0,"A pendulum clock is taken from Earth to a location where g is smaller.",[
{q:"Use the period relation to predict the change in period.",m:1,ms:["period increases"]},
{q:"Explain what this does to the clock's rate.",m:1,ms:["it runs slow because each oscillation takes longer"]},
{q:"State how the pendulum length would need to change to restore the original period.",m:1,ms:["length must decrease in proportion to g"]},
{q:"Explain why bob mass cannot be adjusted to correct the rate in the ideal model.",m:1,ms:["period is independent of bob mass"]}]);
T(7,0,"A motion sensor records a sinusoidal displacement-time trace for a mechanical oscillator.",[
{q:"Explain how amplitude is obtained from the trace.",m:1,ms:["maximum displacement from equilibrium"]},
{q:"Explain how period is obtained.",m:1,ms:["time between equivalent points such as successive maxima"]},
{q:"State how frequency follows from period.",m:1,ms:["f=1/T"]},
{q:"Explain how the acceleration-time trace is related to displacement for SHM.",m:2,ms:["a=-ω²x, so same shape scaled and inverted"]}]);
T(8,1,"An SHM particle is described by x=x₀sin(ωt+φ).",[
{q:"Differentiate to obtain velocity.",m:2,ms:["v=ωx₀cos(ωt+φ)"]},
{q:"Differentiate again to obtain acceleration.",m:2,ms:["a=-ω²x₀sin(ωt+φ)=-ω²x"]},
{q:"State the phase difference between x and v.",m:1,ms:["π/2 rad"]},
{q:"State the phase difference between x and a.",m:1,ms:["π rad"]}]);
T(9,1,"An ideal SHM oscillator has mass m, angular frequency ω and amplitude x₀.",[
{q:"Write the total mechanical energy.",m:1,ms:["E=½mω²x₀²"]},
{q:"Write the potential energy at displacement x.",m:1,ms:["Ep=½mω²x²"]},
{q:"Obtain the kinetic energy at displacement x.",m:2,ms:["Ek=½mω²(x₀²−x²)"]},
{q:"Explain why maximum kinetic energy equals total energy.",m:1,ms:["at x=0, Ep=0"]}]);
T(10,1,"An SHM oscillator passes a point where x=0.60x₀.",[
{q:"Determine the fraction of total energy that is potential.",m:1,ms:["x²/x₀²=0.36"]},
{q:"Determine the fraction that is kinetic.",m:1,ms:["0.64"]},
{q:"Use the SHM speed relation to express the speed as a fraction of vmax.",m:2,ms:["v/vmax=√(1−0.36)=0.80"]},
{q:"State whether the oscillator is speeding up or slowing down without additional directional information.",m:1,ms:["cannot be determined from position alone; direction of motion is needed"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("C.1 prompt count "+prompts);
})();