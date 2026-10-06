/* PrepEnroll™ IB Physics C.2 Wave model — 100 assessable prompts */
(function(){"use strict";
const sub="C.2",x=0;
function M(i,q,o,a,e){MCQ.push({t:"C",s:sub,x,uid:"PE-C2-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,h,r,parts){P1B.push({t:"C",s:sub,x,uid:"PE-C2-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(h,r),parts})})}
function T(i,intro,parts){P2.push({t:"C",s:sub,x,uid:"PE-C2-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}
M(1,"A wave has frequency 12 Hz and wavelength 0.50 m. Its speed is",["6.0 m s⁻¹","24 m s⁻¹","0.042 m s⁻¹","12.5 m s⁻¹"],0,"v=fλ.");
M(2,"A wave travels at 340 m s⁻¹ with frequency 680 Hz. Its wavelength is",["0.50 m","2.0 m","1020 m","0.0020 m"],0,"λ=v/f.");
M(3,"If wave speed remains constant while frequency doubles, wavelength becomes",["half as large","twice as large","four times as large","unchanged"],0,"v=fλ.");
M(4,"In a transverse wave, particle oscillation is",["perpendicular to the direction of wave propagation","parallel to the direction of propagation","always circular","zero"],0,"This defines transverse motion.");
M(5,"In a longitudinal wave, particle oscillation is",["parallel to the direction of wave propagation","perpendicular to the direction of propagation","always vertical","absent"],0,"This defines longitudinal motion.");
M(6,"Which wave can travel through vacuum?",["electromagnetic radiation","sound in air","water surface waves only","a slinky compression wave only"],0,"Electromagnetic waves do not require a material medium.");
M(7,"A wave transports energy from one place to another while the medium's particles",["oscillate about equilibrium positions","move permanently with the wave speed","are destroyed","all move in one direction continuously"],0,"Waves transfer energy without net bulk transport of matter.");
M(8,"Two points separated by one wavelength on a sinusoidal wave are",["in phase","180° out of phase","90° out of phase","always at zero displacement"],0,"A separation of λ corresponds to 2π phase.");
M(9,"Two points separated by half a wavelength on a sinusoidal wave are",["180° out of phase","in phase","90° out of phase","unrelated"],0,"λ/2 corresponds to π rad.");
M(10,"A wave has period 0.020 s. Its frequency is",["50 Hz","20 Hz","0.020 Hz","500 Hz"],0,"f=1/T.");
M(11,"For a sinusoidal wave, amplitude is the",["maximum displacement from equilibrium","distance between adjacent crests","time for one cycle","speed of propagation"],0,"Amplitude is maximum particle displacement.");
M(12,"Which quantity has units of metres?",["wavelength","frequency","period","phase angle"],0,"Wavelength is a distance.");
M(13,"A pulse reflects from a fixed end of a string. The reflected pulse is",["inverted","not inverted","always amplified","converted to longitudinal motion"],0,"A fixed-end reflection introduces inversion.");
M(14,"A pulse reflects from a free end of a string. The reflected pulse is",["not inverted","inverted","absorbed completely","converted to light"],0,"A free-end reflection does not invert the pulse.");
M(15,"For a sound wave in air, compressions are regions of",["higher pressure and density","lower pressure and density","zero molecular motion","maximum wavelength"],0,"Longitudinal sound has alternating compressions and rarefactions.");
M(16,"When a wave crosses into another medium, which quantity is normally fixed by the source?",["frequency","speed","wavelength","refractive index"],0,"Frequency is set by the source and stays continuous across the boundary.");
M(17,"If a wave slows when entering a new medium while frequency is unchanged, its wavelength",["decreases","increases","remains constant","becomes zero"],0,"λ=v/f.");
M(18,"The phase difference corresponding to a path difference of λ/4 is",["π/2 rad","π rad","2π rad","π/4 rad"],0,"Phase difference=2πΔx/λ.");
M(19,"A graph of displacement against position at one instant is a",["wave profile","time history of one particle","frequency spectrum","power graph"],0,"It is a spatial snapshot.");
M(20,"A graph of displacement against time for one fixed position is a",["time history of one point in the medium","spatial wave profile","wavelength graph only","ray diagram"],0,"It shows local oscillation versus time.");

P(1,"A wave generator drives a string at different frequencies. Wave speed stays approximately constant.",["f / Hz","λ / m"],[[10,1.20],[15,0.80],[20,0.60],[25,0.48],[30,0.40]],[
{q:"Calculate wave speed using one row.",m:1,ms:["v=fλ≈12 m s⁻¹"]},{q:"State a graph that tests λ∝1/f.",m:1,ms:["λ against 1/f"]},{q:"Explain why frequency is controlled by the source.",m:1,ms:["the driver sets the oscillation rate"]},{q:"State one reason speed may not be perfectly constant.",m:1,ms:["string tension/linear density may vary"]}]);
P(2,"The period of a wave is measured from an oscilloscope trace.",["cycle","time / ms"],[[0,0],[1,4.0],[2,8.1],[3,12.0],[4,16.1]],[
{q:"Estimate the mean period.",m:1,ms:["about 4.0 ms"]},{q:"Determine the frequency.",m:1,ms:["about 250 Hz"]},{q:"Explain why timing several cycles improves precision.",m:1,ms:["same reading uncertainty is divided over a longer interval"]},{q:"State one source of uncertainty in reading the trace.",m:1,ms:["cursor/grid resolution"]}]);
P(3,"A pulse travels along a string and its position is recorded.",["t / s","x / m"],[[0.0,0.0],[0.2,0.8],[0.4,1.6],[0.6,2.4],[0.8,3.2]],[
{q:"Determine the pulse speed.",m:1,ms:["4.0 m s⁻¹"]},{q:"State the graph feature used.",m:1,ms:["gradient of x against t"]},{q:"Predict the distance after 1.5 s if speed stays constant.",m:1,ms:["6.0 m"]},{q:"State one reason a real pulse might change shape.",m:1,ms:["dispersion/damping"]}]);
P(4,"Two points on a sinusoidal wave are separated by different distances.",["separation / λ","phase difference / rad"],[[0,0],[0.25,1.57],[0.50,3.14],[0.75,4.71],[1.00,6.28]],[
{q:"State the relationship between separation and phase difference.",m:1,ms:["Δφ=2πΔx/λ"]},{q:"Determine the phase difference at 0.125λ.",m:1,ms:["π/4 rad"]},{q:"Identify a separation where points are in antiphase.",m:1,ms:["0.5λ"]},{q:"State a separation where points are again in phase.",m:1,ms:["1λ or integer multiples"]}]);
P(5,"A sound wave moves from warm air into colder air. The source frequency remains fixed.",["region","speed / m s⁻¹","f / Hz"],[["warm",350,700],["cold",330,700]],[
{q:"Calculate the wavelength in warm air.",m:1,ms:["0.50 m"]},{q:"Calculate the wavelength in cold air.",m:1,ms:["about 0.471 m"]},{q:"State why frequency does not change at the boundary.",m:1,ms:["source sets frequency and oscillations must remain continuous"]},{q:"Explain why wavelength changes.",m:1,ms:["wave speed changes while frequency stays fixed"]}]);
P(6,"A wave profile is sampled at one instant.",["x / m","y / cm"],[[0,0],[0.25,3],[0.50,0],[0.75,-3],[1.00,0],[1.25,3]],[
{q:"Determine the wavelength.",m:1,ms:["1.0 m"]},{q:"Determine the amplitude.",m:1,ms:["3 cm"]},{q:"State the phase difference between x=0.25 m and x=0.75 m.",m:1,ms:["π rad"]},{q:"State whether the graph alone determines propagation direction.",m:1,ms:["no; time information is needed"]}]);
P(7,"A transverse wave is filmed at equal time intervals.",["frame time / s","crest x / m"],[[0.0,0.5],[0.1,0.9],[0.2,1.3],[0.3,1.7],[0.4,2.1]],[
{q:"Determine the wave speed.",m:1,ms:["4.0 m s⁻¹"]},{q:"Explain why tracking a crest is a valid speed method.",m:1,ms:["a fixed phase point propagates with the wave"]},{q:"State one camera-related uncertainty.",m:1,ms:["frame rate / position calibration"]},{q:"Explain why particle transverse speed is not equal to wave speed.",m:1,ms:["particles oscillate locally while phase propagates along the medium"]}]);
P(8,"A loudspeaker emits tones in air at constant sound speed.",["f / Hz","λ / m"],[[170,2.0],[340,1.0],[510,0.667],[680,0.50]],[
{q:"State the approximate sound speed.",m:1,ms:["340 m s⁻¹"]},{q:"Describe the f–λ relationship.",m:1,ms:["inverse"]},{q:"Predict wavelength at 850 Hz.",m:1,ms:["0.40 m"]},{q:"State one environmental variable that can change sound speed.",m:1,ms:["temperature"]}]);
P(9,"The amplitude of a wave pulse is measured as it travels along a lossy medium.",["distance / m","amplitude / cm"],[[0,5.0],[2,4.2],[4,3.6],[6,3.0],[8,2.5]],[
{q:"Describe the amplitude trend.",m:1,ms:["decreases with distance"]},{q:"State the term for this behaviour.",m:1,ms:["attenuation/damping"]},{q:"Explain what happens to transported wave energy.",m:1,ms:["some is transferred to internal/thermal energy of the medium"]},{q:"State whether frequency must decrease as amplitude decreases.",m:1,ms:["no"]}]);
P(10,"A source generates periodic pulses on a rope.",["pulse number","launch time / s"],[[1,0.0],[2,0.25],[3,0.50],[4,0.75],[5,1.00]],[
{q:"Determine the source period.",m:1,ms:["0.25 s"]},{q:"Determine source frequency.",m:1,ms:["4.0 Hz"]},{q:"If wave speed is 2.0 m s⁻¹, determine pulse spacing.",m:1,ms:["0.50 m"]},{q:"Explain why pulse spacing equals wavelength for a periodic train.",m:1,ms:["successive identical phase points are emitted one period apart and travel vT"]}]);

T(1,"A sinusoidal transverse wave travels along a stretched string.",[
{q:"Define wavelength.",m:1,ms:["shortest distance between points in phase"]},{q:"Define period.",m:1,ms:["time for one complete oscillation"]},{q:"Use these definitions to derive v=λ/T.",m:2,ms:["in one period a crest advances one wavelength"]},{q:"Hence state v=fλ.",m:1,ms:["using f=1/T"]}]);
T(2,"A sound wave propagates through air.",[
{q:"Describe particle motion relative to propagation direction.",m:1,ms:["parallel"]},{q:"Explain compressions and rarefactions.",m:2,ms:["regions of above/below equilibrium pressure/density caused by oscillating molecules"]},{q:"State what determines pitch.",m:1,ms:["frequency"]},{q:"State what increasing amplitude generally changes perceptually.",m:1,ms:["loudness/intensity"]}]);
T(3,"A wave crosses from medium 1 into medium 2 and slows down.",[
{q:"State what happens to frequency.",m:1,ms:["unchanged"]},{q:"State the wavelength outcome for this specific change.",m:1,ms:["decreases"]},{q:"Use v=fλ to justify the wavelength change.",m:1,ms:["with f constant, lower v requires lower λ"]},{q:"Explain why frequency continuity is physically necessary.",m:1,ms:["boundary points cannot oscillate at two different frequencies simultaneously in steady transmission"]}]);
T(4,"A pulse on a string reaches a fixed boundary.",[
{q:"State what happens to the reflected pulse orientation.",m:1,ms:["it is inverted"]},{q:"Explain qualitatively why the boundary exerts a reaction on the string.",m:1,ms:["the fixed end cannot move and applies a force that reverses the disturbance"]},{q:"State one quantity that may be reduced on reflection in a real system.",m:1,ms:["amplitude/energy"]},{q:"Contrast reflection from a free end.",m:1,ms:["free-end reflection is not inverted"]}]);
T(5,"Two points A and B on a travelling sinusoidal wave are separated by Δx.",[
{q:"Write the phase difference in terms of Δx and λ.",m:1,ms:["Δφ=2πΔx/λ"]},{q:"Find the phase difference for Δx=λ/3.",m:1,ms:["2π/3"]},{q:"State whether the points are in phase for Δx=2λ.",m:1,ms:["yes"]},{q:"Explain why phase is useful for comparing oscillations.",m:1,ms:["it specifies relative position within the cycle independent of amplitude"]}]);
T(6,"A radar pulse travels from a transmitter to an object and back.",[
{q:"If round-trip time is Δt and wave speed is c, write the object distance.",m:1,ms:["d=cΔt/2"]},{q:"Explain the factor of 2.",m:1,ms:["measured time includes outward and return paths"]},{q:"State why electromagnetic waves are suitable for this in vacuum.",m:1,ms:["they propagate without a material medium"]},{q:"State one cause of distance uncertainty.",m:1,ms:["timing resolution / uncertain propagation speed in medium"]}]);
T(7,"A wave generator makes 15 oscillations in 6.0 s and produces wavelength 0.80 m.",[
{q:"Determine frequency.",m:1,ms:["2.5 Hz"]},{q:"Determine period.",m:1,ms:["0.40 s"]},{q:"Determine wave speed.",m:1,ms:["2.0 m s⁻¹"]},{q:"State how speed changes if frequency is doubled but the same non-dispersive medium is used.",m:1,ms:["approximately unchanged; wavelength halves"]}]);
T(8,"A travelling wave is represented by displacement profiles at two nearby times.",[
{q:"Explain how propagation direction can be inferred.",m:1,ms:["track movement of a fixed phase point such as a crest"]},{q:"Explain how wave speed can be inferred.",m:1,ms:["distance shifted divided by time interval"]},{q:"State how amplitude is read.",m:1,ms:["maximum displacement from equilibrium"]},{q:"State how wavelength is read.",m:1,ms:["distance between adjacent equal-phase points"]}]);
T(9,"A source emits a wave whose amplitude is doubled while frequency and medium stay fixed.",[
{q:"State the wavelength outcome for this specific change.",m:1,ms:["unchanged"]},{q:"State what happens to wave speed.",m:1,ms:["unchanged in the ideal linear medium"]},{q:"State what happens to particle maximum displacement.",m:1,ms:["doubles"]},{q:"Explain why changing amplitude alone does not set the source frequency.",m:1,ms:["amplitude and oscillation rate are independent source parameters in the linear model"]}]);
T(10,"A student compares a displacement–position graph with a displacement–time graph for the same wave.",[
{q:"State which graph gives wavelength directly.",m:1,ms:["displacement-position graph"]},{q:"State which graph gives period directly.",m:1,ms:["displacement-time graph at a fixed point"]},{q:"Explain how both can be combined to determine wave speed.",m:1,ms:["measure λ and T then use v=λ/T"]},{q:"State one reason the two graphs must refer to consistent conditions.",m:1,ms:["frequency/speed must not change between measurements"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("C.2 prompt count "+prompts);
})();