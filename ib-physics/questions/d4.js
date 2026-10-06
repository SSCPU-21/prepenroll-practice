/* PrepEnroll™ IB Physics D.4 Induction — 100 assessable prompts; HL only */
(function(){"use strict";
const sub="D.4",x=1;
function M(i,q,o,a,e){MCQ.push({t:"D",s:sub,x,uid:"PE-D4-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"D",s:sub,x,uid:"PE-D4-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"D",s:sub,x,uid:"PE-D4-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"Magnetic flux through a flat area A in uniform field B is",["BA cosθ","BA sinθ","B/A","BA"],0,"Φ=BA cosθ when θ is between B and the area normal.");
M(2,"The SI unit of magnetic flux is",["weber","tesla per metre","volt per ampere","coulomb"],0,"Magnetic flux is measured in webers.");
M(3,"Faraday's law states that induced emf magnitude is proportional to",["rate of change of magnetic flux linkage","magnetic flux only","current only","resistance only"],0,"|ε|=|d(NΦ)/dt|.");
M(4,"Lenz's law determines the",["direction of induced current or emf","magnitude of resistance","number of turns","field strength of the source magnet"],0,"The induced effect opposes the change producing it.");
M(5,"A loop moves at constant velocity entirely inside a uniform magnetic field without changing orientation or area. The induced emf is",["zero","constant and non-zero","increasing","infinite"],0,"Flux linkage is unchanged.");
M(6,"A conducting rod of length L moves with speed v perpendicular to uniform B and to its length. The motional emf is",["BLv","Bv/L","BL/v","B²Lv"],0,"ε=BLv for the perpendicular geometry.");
M(7,"Doubling the speed of a rod moving through uniform B doubles the",["motional emf","resistance automatically","magnetic flux density","rod length"],0,"ε=BLv.");
M(8,"A coil with N turns experiences the same flux change per turn in half the time. The induced emf magnitude becomes",["twice as large","half as large","unchanged","four times as large"],0,"Emf depends on rate of change of flux linkage.");
M(9,"The minus sign in Faraday's law represents",["Lenz's law","Ohm's law","energy creation","charge conservation only"],0,"It encodes opposition to the change in flux linkage.");
M(10,"A magnet approaches a conducting loop. The loop's induced magnetic field acts so as to",["oppose the increase in flux","increase the approaching magnet's speed","remove the original field","always attract the magnet"],0,"Lenz's law opposes the change.");
M(11,"If a loop's area doubles while B, orientation and rate of rotation are otherwise unchanged, the maximum generated emf",["doubles","halves","is unchanged","becomes zero"],0,"Maximum flux linkage and its rate scale with area.");
M(12,"For a coil rotating uniformly in a uniform magnetic field, the induced emf is ideally",["sinusoidal","constant","always zero","a square wave only"],0,"Φ=BA cosωt gives ε∝sinωt.");
M(13,"An ideal transformer operates using",["electromagnetic induction with changing magnetic flux","steady electrostatic fields","direct mechanical contact between coils","a constant flux with no change"],0,"Changing primary current creates changing core flux and secondary emf.");
M(14,"For an ideal transformer, the voltage ratio satisfies",["Vs/Vp=Ns/Np","Vs/Vp=Np/Ns","VsVp=NsNp","Vs/Vp=Ip/Is"],0,"Voltage is proportional to turn number.");
M(15,"For an ideal transformer, if voltage is stepped up, current is",["stepped down","stepped up by the same factor","unchanged","zero"],0,"Ideal power conservation gives VpIp=VsIs.");
M(16,"A transformer does not operate with a perfectly steady DC supply because",["there is no sustained changing flux","DC has too high a frequency","the secondary has too many turns","magnetic fields cannot exist with DC"],0,"A constant primary current gives no continuing change in flux.");
M(17,"Eddy currents in a solid conducting core generally cause",["energy dissipation as heating","perfect efficiency","zero magnetic field","charge accumulation only"],0,"Induced circulating currents dissipate energy.");
M(18,"Laminating a transformer core mainly reduces",["eddy-current losses","the number of turns","Faraday induction","the source frequency"],0,"Laminations interrupt large conducting loops.");
M(19,"A generator converts",["mechanical energy to electrical energy","electrical energy to gravitational energy","thermal energy directly to mass","charge to magnetic flux"],0,"Mechanical rotation changes flux linkage and induces emf.");
M(20,"A conductor moving through a magnetic field experiences magnetic forces on its charges. Charge separation continues until",["electric and magnetic forces balance","all charges leave the conductor","B becomes zero","the conductor stops necessarily"],0,"An internal electric field grows until qE=qvB.");

/* 10 Paper 1B */
P(1,"A coil's flux linkage changes linearly with time.",["t / s","NΦ / Wb-turn"],[[0.0,0.00],[0.2,0.40],[0.4,0.80],[0.6,1.20],[0.8,1.60]],[
{q:"Determine the magnitude of the induced emf.",m:1,ms:["2.0 V"]},
{q:"State the graph feature used.",m:1,ms:["gradient of flux linkage against time"]},
{q:"State whether emf magnitude is constant.",m:1,ms:["yes"]},
{q:"Explain what determines its polarity.",m:1,ms:["Lenz's law / opposition to the change in flux"]}]);
P(2,"A rod moves across uniform magnetic field at several speeds.",["v / m s⁻¹","ε / V"],[[1,0.12],[2,0.24],[3,0.36],[4,0.48]],[
{q:"Describe the ε-v relationship.",m:1,ms:["directly proportional"]},
{q:"State the theoretical gradient.",m:1,ms:["BL"]},
{q:"If L=0.30 m, estimate B.",m:2,ms:["B=0.12/0.30=0.40 T"]},
{q:"Predict ε at 5 m s⁻¹.",m:1,ms:["0.60 V"]}]);
P(3,"The number of turns on a coil is varied while the same flux change occurs in the same time.",["N","ε / V"],[[50,1.0],[100,2.0],[150,3.0],[200,4.0]],[
{q:"State the relationship between ε and N.",m:1,ms:["directly proportional"]},
{q:"State the quantity represented by ε/N.",m:1,ms:["rate of change of flux per turn"]},
{q:"Predict ε for 300 turns.",m:1,ms:["6.0 V"]},
{q:"State one reason real measurements may deviate from exact proportionality.",m:1,ms:["flux may not link every turn equally / speed may vary / measurement uncertainty"]}]);
P(4,"A rotating coil generator is sampled during one cycle.",["phase","flux linkage","emf"],[["0°","maximum","0"],["90°","0","maximum"],["180°","minimum","0"],["270°","0","minimum"],["360°","maximum","0"]],[
{q:"State the phase difference between sinusoidal flux linkage and emf.",m:1,ms:["90° / π/2"]},
{q:"Explain why emf is zero when flux linkage is maximum.",m:1,ms:["instantaneous rate of change of flux linkage is zero"]},
{q:"State where emf magnitude is maximum.",m:1,ms:["when flux linkage passes through zero most rapidly"]},
{q:"State the energy conversion in the generator.",m:1,ms:["mechanical to electrical"]}]);
P(5,"An ideal transformer has primary voltage 240 V.",["Np","Ns","Vs / V"],[[1200,600,120],[1200,1200,240],[1200,2400,480],[1200,3000,600]],[
{q:"State the relationship between Vs/Vp and Ns/Np.",m:1,ms:["Vs/Vp=Ns/Np"]},
{q:"Identify the step-down case.",m:1,ms:["Ns=600, Vs=120 V"]},
{q:"Predict Vs for Ns=1800.",m:1,ms:["360 V"]},
{q:"State one idealizing assumption.",m:1,ms:["no energy loss / all flux links both coils"]}]);
P(6,"An ideal transformer delivers nearly constant output power as secondary voltage changes.",["Vs / V","Is / A"],[[100,4.0],[200,2.0],[400,1.0],[800,0.50]],[
{q:"Show that output power is approximately constant.",m:1,ms:["VsIs≈400 W for each row"]},
{q:"State how current varies with voltage for fixed power.",m:1,ms:["inversely"]},
{q:"Explain why high-voltage transmission reduces I²R losses.",m:2,ms:["for fixed power, higher V means lower I, so resistive loss I²R is much smaller"]},
{q:"State the ideal power relation between primary and secondary.",m:1,ms:["VpIp=VsIs"]}]);
P(7,"A magnet is pushed through a coil at different speeds and the peak induced emf is measured.",["speed / relative","peak ε / relative"],[[1,1.0],[2,2.1],[3,3.0],[4,4.2]],[
{q:"Describe the trend.",m:1,ms:["peak emf increases approximately in proportion to speed"]},
{q:"Explain using Faraday's law.",m:1,ms:["faster motion causes a larger rate of change of flux linkage"]},
{q:"State what happens to the pulse duration as speed increases.",m:1,ms:["it becomes shorter"]},
{q:"State whether the total flux change from far before to far after depends on speed.",m:1,ms:["no, for the same path/orientation"]}]);
P(8,"A loop enters a rectangular region of uniform magnetic field at constant speed.",["stage","flux","induced emf"],[["before entry","0","0"],["entering","increasing","non-zero"],["fully inside","constant","0"],["leaving","decreasing","non-zero"],["after exit","0","0"]],[
{q:"Explain why emf is zero when the loop is fully inside.",m:1,ms:["flux through the loop is constant"]},
{q:"Compare the polarity during entry and exit.",m:1,ms:["opposite"]},
{q:"State the law that determines the polarity.",m:1,ms:["Lenz's law"]},
{q:"State how increasing speed affects the magnitude of entry emf.",m:1,ms:["it increases"]}]);
P(9,"A transformer core is tested with and without laminations.",["core","input power / W","useful output / W"],[["solid",520,400],["laminated",460,400]],[
{q:"Calculate the efficiency for the solid-core case.",m:1,ms:["about 77%"]},
{q:"Calculate the efficiency for the laminated-core case.",m:1,ms:["about 87%"]},
{q:"Explain the improvement.",m:1,ms:["laminations reduce eddy-current heating"]},
{q:"State another possible transformer energy loss.",m:1,ms:["coil resistance / hysteresis / flux leakage"]}]);
P(10,"A conducting rod of length 0.50 m moves on rails through B=0.80 T. Circuit resistance is 2.0 Ω.",["v / m s⁻¹","ε / V"],[[1,0.40],[2,0.80],[3,1.20],[4,1.60]],[
{q:"Determine the induced current at v=3 m s⁻¹.",m:1,ms:["I=1.20/2.0=0.60 A"]},
{q:"Determine the magnetic force opposing the motion at that speed.",m:2,ms:["F=BIL=0.80×0.60×0.50=0.24 N"]},
{q:"State the mechanical power needed to maintain constant speed.",m:1,ms:["P=Fv=0.72 W"]},
{q:"Compare this with electrical heating I²R.",m:1,ms:["I²R=0.72 W, equal ideally"]}]);

/* 10 Paper 2 */
T(1,"A bar magnet is pushed toward a conducting coil connected to a sensitive ammeter.",[
{q:"State why an emf is induced.",m:1,ms:["magnetic flux linkage through the coil changes"]},
{q:"State what determines the emf magnitude.",m:1,ms:["rate of change of flux linkage"]},
{q:"Use Lenz's law to describe the induced field direction qualitatively.",m:1,ms:["it opposes the approaching magnet's increase in flux"]},
{q:"Predict the effect of pushing the magnet faster.",m:1,ms:["larger induced emf/current over a shorter time"]}]);
T(2,"A conducting rod moves on rails through a uniform magnetic field.",[
{q:"Explain the microscopic origin of motional emf.",m:2,ms:["moving charges experience qv×B, causing charge separation and an internal electric field"]},
{q:"Derive ε=BLv for the perpendicular geometry.",m:2,ms:["balance qE=qvB so E=vB; potential difference EL=BLv"]},
{q:"State the polarity rule qualitatively.",m:1,ms:["set by magnetic force direction on positive charges / Lenz's law"]},
{q:"State how emf changes if rod length doubles.",m:1,ms:["it doubles"]}]);
T(3,"A coil with N turns rotates at angular speed ω in a uniform magnetic field B.",[
{q:"Write an expression for flux linkage as a function of time.",m:1,ms:["NΦ=NBA cos(ωt) for a suitable zero of time"]},
{q:"Differentiate to obtain the induced emf.",m:2,ms:["ε=NBAω sin(ωt), up to sign convention"]},
{q:"State the maximum emf.",m:1,ms:["εmax=NBAω"]},
{q:"State how maximum emf changes if angular speed doubles.",m:1,ms:["it doubles"]}]);
T(4,"A rectangular loop moves into and then out of a localized uniform magnetic-field region.",[
{q:"Describe the flux-linkage change during entry.",m:1,ms:["it increases"]},
{q:"State the induced-current direction principle.",m:1,ms:["current creates a field opposing the flux change"]},
{q:"Explain why the current reverses during exit.",m:1,ms:["the sign of dΦ/dt reverses"]},
{q:"Explain why there is no induced current while the loop is fully inside a uniform field.",m:1,ms:["flux is constant"]}]);
T(5,"An ideal transformer has Np turns on the primary and Ns turns on the secondary.",[
{q:"Explain why an alternating primary current is required.",m:1,ms:["it creates changing magnetic flux in the core"]},
{q:"State the ideal voltage ratio.",m:1,ms:["Vs/Vp=Ns/Np"]},
{q:"State the ideal current ratio.",m:1,ms:["Is/Ip=Np/Ns"]},
{q:"Explain why ideal input and output powers are equal.",m:1,ms:["energy conservation with no losses"]}]);
T(6,"Electrical power is transmitted over long cables of fixed resistance.",[
{q:"State the cable power-loss expression.",m:1,ms:["Ploss=I²R"]},
{q:"Explain why stepping voltage up reduces transmission loss for fixed delivered power.",m:2,ms:["I=P/V, so increasing V reduces I and therefore I²R strongly"]},
{q:"State why a transformer is useful in AC power distribution.",m:1,ms:["it efficiently changes voltage/current levels by induction"]},
{q:"State why a conventional transformer cannot provide the same function from steady DC.",m:1,ms:["steady DC does not produce changing flux"]}]);
T(7,"A metal plate swings through the pole gap of a strong magnet and its motion is damped.",[
{q:"Identify the induced currents in the plate.",m:1,ms:["eddy currents"]},
{q:"Use Lenz's law to explain the damping force.",m:2,ms:["eddy-current fields oppose the change/motion that creates them"]},
{q:"State where the mechanical energy goes.",m:1,ms:["mainly thermal energy in the plate"]},
{q:"Predict the effect of cutting slots in the plate.",m:1,ms:["eddy currents and damping decrease"]}]);
T(8,"A coil is connected to a resistor and experiences a changing magnetic flux.",[
{q:"Write Faraday's law including the sign.",m:1,ms:["ε=−d(NΦ)/dt"]},
{q:"Explain the meaning of the negative sign.",m:1,ms:["induced emf opposes the change in flux linkage"]},
{q:"State the induced current magnitude for resistance R.",m:1,ms:["I=|ε|/R"]},
{q:"Explain how electrical energy dissipated in R is consistent with energy conservation.",m:2,ms:["external work is required against the induced effect; that work becomes electrical/thermal energy"]}]);
T(9,"A generator drives a resistive load while its coil is rotated mechanically.",[
{q:"State how the generator emf arises.",m:1,ms:["rotation changes magnetic flux linkage"]},
{q:"Explain why a torque opposing the rotation appears when current flows.",m:2,ms:["Lenz's law: induced current's magnetic effect opposes the motion causing the flux change"]},
{q:"State what must increase if electrical load power increases at the same rotational speed.",m:1,ms:["mechanical driving torque / input power"]},
{q:"State the overall energy conversion.",m:1,ms:["mechanical energy to electrical energy, with losses in real devices"]}]);
T(10,"A real transformer differs from the ideal model.",[
{q:"Name two mechanisms that reduce efficiency.",m:2,ms:["resistive heating; eddy currents; hysteresis; flux leakage"]},
{q:"Explain how laminations reduce one of these losses.",m:1,ms:["they increase resistance of eddy-current paths and break large loops"]},
{q:"Explain why a low-resistance winding is useful.",m:1,ms:["reduces I²R heating"]},
{q:"State why a magnetic core with suitable properties is used.",m:1,ms:["guides/couples changing flux efficiently between windings and reduces magnetic losses"]}]);
})();