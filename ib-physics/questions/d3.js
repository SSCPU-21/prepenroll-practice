/* PrepEnroll™ IB Physics D.3 Motion in electromagnetic fields — 100 assessable prompts */
(function(){"use strict";
const sub="D.3",x=0;
function M(i,q,o,a,e){MCQ.push({t:"D",s:sub,x,uid:"PE-D3-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"D",s:sub,x,uid:"PE-D3-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"D",s:sub,x,uid:"PE-D3-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A charge q in a uniform electric field E experiences force magnitude",["|q|E","|q|/E","E/|q|","|q|E²"],0,"Electric force magnitude is |q|E.");
M(2,"A positive charge released from rest in a uniform electric field initially accelerates",["in the field direction","opposite the field direction","perpendicular to the field","without acceleration"],0,"F=qE for q>0.");
M(3,"A negative charge released from rest in a uniform electric field initially accelerates",["opposite the field direction","in the field direction","perpendicular to the field","in a random direction"],0,"The force reverses for negative charge.");
M(4,"A charged particle moves perpendicular to a uniform magnetic field. Its path is",["circular","straight at constant acceleration","parabolic","elliptical in every case"],0,"A perpendicular magnetic force supplies centripetal force.");
M(5,"For perpendicular motion in a magnetic field, the circular radius is",["mv/(|q|B)","|q|B/(mv)","mB/(|q|v)","|q|v/(mB)"],0,"Set |q|vB=mv²/r.");
M(6,"If the speed of a charged particle in a uniform magnetic field doubles, its circular radius becomes",["twice as large","half as large","four times as large","unchanged"],0,"r=mv/(|q|B).");
M(7,"If magnetic flux density doubles with particle momentum unchanged, the circular radius becomes",["half as large","twice as large","four times as large","unchanged"],0,"r=p/(|q|B).");
M(8,"A magnetic field can change a charged particle's",["direction of velocity without changing its speed","kinetic energy directly","rest mass","charge magnitude"],0,"Magnetic force is perpendicular to velocity.");
M(9,"The period of circular motion of a non-relativistic charged particle in a uniform magnetic field is",["2πm/(|q|B)","2π|q|B/m","2πmv/(|q|B)","2πrB"],0,"T=2πr/v and r=mv/(|q|B).");
M(10,"The cyclotron frequency of a non-relativistic ion in fixed B depends directly on",["|q|/m","speed only","orbit radius only","kinetic energy only"],0,"f=|q|B/(2πm).");
M(11,"A charged particle enters a uniform electric field perpendicular to its initial velocity. Neglecting gravity, its path is",["parabolic","circular","straight","sinusoidal"],0,"Uniform transverse electric force gives constant transverse acceleration.");
M(12,"A charged particle moves through crossed E and B fields without deflection. Its speed is",["E/B","B/E","EB","√(E/B)"],0,"For a velocity selector qE=qvB.");
M(13,"In a velocity selector, reversing the sign of the particle charge while keeping v, E and B unchanged will",["leave the no-deflection speed condition unchanged","double the selected speed","make selection impossible","halve the selected speed"],0,"Both electric and magnetic forces reverse, so q cancels.");
M(14,"A positive ion accelerated from rest through potential difference V gains kinetic energy",["qV","q/V","V/q","qV²"],0,"Electrical work qV becomes kinetic energy.");
M(15,"An electron and proton are accelerated through the same potential difference from rest. The particle with greater kinetic energy magnitude is",["neither; they gain equal magnitudes","the proton","the electron","the one with greater mass"],0,"Each has charge magnitude e, so K=eV.");
M(16,"After acceleration through the same potential difference, the proton has",["smaller speed than the electron","greater speed than the electron","the same speed as the electron","zero speed"],0,"For equal K, v∝1/√m.");
M(17,"A beam of ions with the same charge and speed enters uniform B. The ion with larger mass follows",["a larger-radius path","a smaller-radius path","the same path","a straight path"],0,"r=mv/(|q|B).");
M(18,"In a mass spectrometer using a velocity selector followed by a magnetic analyzer, the analyzer separates ions primarily by",["mass-to-charge ratio","electric potential only","charge sign only","temperature"],0,"r=mv/(|q|B) and selected v is known.");
M(19,"A charged particle moves with velocity having components parallel and perpendicular to uniform B. Its path is",["helical","purely circular","parabolic","straight only"],0,"Parallel velocity remains unchanged while perpendicular velocity gives circular motion.");
M(20,"For helical motion in uniform B, increasing only the component of velocity parallel to B increases the",["pitch of the helix","radius of the helix","cyclotron frequency","magnetic force magnitude from the parallel component"],0,"Pitch=v_parallel T, while radius depends on v_perpendicular.");

/* 10 Paper 1B */
P(1,"A beam of singly charged ions travels perpendicular to a uniform magnetic field.",["v / 10⁵ m s⁻¹","r / cm"],[[1.0,2.1],[1.5,3.2],[2.0,4.2],[2.5,5.3]],[
{q:"Describe the relationship between r and v.",m:1,ms:["r is directly proportional to v"]},
{q:"State a graph that should be linear.",m:1,ms:["r against v"]},
{q:"State the physical quantity obtainable from the gradient if q and B are known.",m:1,ms:["particle mass"]},
{q:"Explain why magnetic force does not change the speed.",m:1,ms:["force is perpendicular to velocity"]}]);
P(2,"Identical ions enter fields of different magnetic flux density with the same perpendicular speed.",["B / T","r / cm"],[[0.20,8.0],[0.40,4.0],[0.80,2.0],[1.00,1.6]],[
{q:"State the r-B relationship.",m:1,ms:["r is proportional to 1/B"]},
{q:"Suggest a linearizing graph.",m:1,ms:["r against 1/B"]},
{q:"Predict r at 0.50 T.",m:1,ms:["about 3.2 cm"]},
{q:"State one condition needed for this model.",m:1,ms:["velocity must be perpendicular to B / non-relativistic motion"]}]);
P(3,"A charged particle is accelerated from rest through different potential differences before entering fixed B.",["V / V","r² / cm²"],[[100,4.0],[200,8.0],[300,12.0],[500,20.0]],[
{q:"State the relationship between r² and V.",m:1,ms:["r² is proportional to V"]},
{q:"Explain the relationship using qV=½mv² and r=mv/(qB).",m:2,ms:["v²∝V and r²∝v², so r²∝V"]},
{q:"Predict r² at 400 V.",m:1,ms:["16 cm²"]},
{q:"State one use of this relationship.",m:1,ms:["determine q/m or identify ions"]}]);
P(4,"A velocity selector uses perpendicular electric and magnetic fields.",["E / kV m⁻¹","B / mT","selected v / 10⁵ m s⁻¹"],[[20,100,2.0],[30,100,3.0],[30,150,2.0],[40,200,2.0]],[
{q:"State the no-deflection condition.",m:1,ms:["qE=qvB"]},
{q:"Use one row to verify v=E/B.",m:1,ms:["for row 1, 20000/0.100=2.0×10⁵ m s⁻¹"]},
{q:"State the effect of doubling both E and B.",m:1,ms:["selected speed is unchanged"]},
{q:"Explain why the selected speed is independent of charge magnitude.",m:1,ms:["q cancels from the balance equation"]}]);
P(5,"A positive particle enters a region of uniform electric field perpendicular to its horizontal velocity. Its vertical displacement is measured.",["x / m","y / mm"],[[0.10,1.0],[0.20,4.0],[0.30,9.0],[0.40,16.0]],[
{q:"Describe the relationship between y and x.",m:1,ms:["y is proportional to x²"]},
{q:"State the shape of the trajectory.",m:1,ms:["parabolic"]},
{q:"Explain the origin of this trajectory.",m:2,ms:["constant horizontal velocity plus constant vertical acceleration from electric force"]},
{q:"Predict y at x=0.50 m.",m:1,ms:["25 mm"]}]);
P(6,"Two ion species pass through the same velocity selector and then enter the same analyzing magnetic field.",["species","m / u","q / e","r / cm"],[["A",20,1,5.0],["B",40,1,10.0],["C",20,2,2.5],["D",30,1,7.5]],[
{q:"State the quantity to which analyzer radius is proportional for fixed v and B.",m:1,ms:["m/|q|"]},
{q:"Identify the pair with the same mass-to-charge ratio if present.",m:1,ms:["none in the table"]},
{q:"Explain why species C has half the radius of A.",m:1,ms:["same mass but double charge"]},
{q:"Predict the radius for m=40u, q=2e.",m:1,ms:["5.0 cm"]}]);
P(7,"A charged particle undergoes circular motion in uniform B and its period is measured for different speeds.",["v / 10⁵ m s⁻¹","T / μs"],[[1,6.3],[2,6.3],[3,6.3],[4,6.3]],[
{q:"State what the data show about T and v.",m:1,ms:["period is independent of speed"]},
{q:"Explain using T=2πm/(|q|B).",m:1,ms:["v does not appear in the non-relativistic expression"]},
{q:"State what changes as v increases.",m:1,ms:["orbit radius increases"]},
{q:"State one regime where the constant-period model begins to fail.",m:1,ms:["relativistic speeds"]}]);
P(8,"A particle enters B with a fixed total speed but varying angle θ to the field.",["θ","r / arbitrary","pitch / arbitrary"],[["0°",0,6],["30°",1,5.2],["60°",1.7,3],["90°",2,0]],[
{q:"Identify the component that determines the circular radius.",m:1,ms:["v perpendicular to B"]},
{q:"Identify the component that determines helix pitch.",m:1,ms:["v parallel to B"]},
{q:"State the path at θ=90°.",m:1,ms:["circle"]},
{q:"State the path at θ=0°.",m:1,ms:["straight line along B"]}]);
P(9,"A positive ion is accelerated from rest through a potential difference before entering uniform B.",["V / kV","v / 10⁵ m s⁻¹"],[[1,1.0],[4,2.0],[9,3.0],[16,4.0]],[
{q:"Describe the relationship between v and V.",m:1,ms:["v is proportional to √V"]},
{q:"Suggest a linearizing graph.",m:1,ms:["v² against V"]},
{q:"State the physical basis for the relation.",m:1,ms:["qV=½mv²"]},
{q:"Predict v at 25 kV.",m:1,ms:["5.0×10⁵ m s⁻¹"]}]);
P(10,"A mass spectrometer records analyzer radius for ions selected to the same speed.",["m/q / arbitrary units","r / cm"],[[1,2.0],[2,4.0],[3,6.0],[4,8.0]],[
{q:"Describe the r versus m/q trend.",m:1,ms:["directly proportional"]},
{q:"State what the gradient depends on.",m:1,ms:["selected speed divided by magnetic field, v/B"]},
{q:"Explain how an unknown ion's m/q can be inferred.",m:1,ms:["measure r and use the calibrated linear relationship"]},
{q:"State one reason ions with different speeds would blur the result.",m:1,ms:["r depends on v as well as m/q"]}]);

/* 10 Paper 2 */
T(1,"A positive ion enters a uniform magnetic field perpendicular to its velocity.",[
{q:"State the magnitude and direction character of the magnetic force.",m:1,ms:["F=qvB, perpendicular to v and B"]},
{q:"Derive r=mv/(qB).",m:2,ms:["equate qvB=mv²/r"]},
{q:"Explain why kinetic energy stays constant.",m:1,ms:["magnetic force does no work"]},
{q:"State how the path changes if q is negative.",m:1,ms:["curvature reverses direction"]}]);
T(2,"A charged particle enters a uniform electric field with initial velocity perpendicular to the field.",[
{q:"State the acceleration magnitude.",m:1,ms:["a=|q|E/m"]},
{q:"Explain why the trajectory is parabolic.",m:2,ms:["uniform motion in one direction combines with constant acceleration perpendicular to it"]},
{q:"State how deflection changes if speed is increased.",m:1,ms:["deflection decreases for a fixed field region"]},
{q:"State how deflection direction changes for opposite charge.",m:1,ms:["it reverses"]}]);
T(3,"A velocity selector contains mutually perpendicular E and B fields.",[
{q:"Draw or describe the directions of electric and magnetic forces for a selected positive ion.",m:1,ms:["forces are opposite"]},
{q:"Derive v=E/B.",m:1,ms:["set qE=qvB"]},
{q:"Explain what happens to ions moving faster than the selected speed.",m:1,ms:["magnetic force exceeds electric force, causing deflection one way"]},
{q:"Explain what happens to ions moving slower than the selected speed.",m:1,ms:["electric force exceeds magnetic force, causing opposite deflection"]}]);
T(4,"A singly charged ion is accelerated from rest through potential difference V and then enters uniform B.",[
{q:"Write the energy relation after acceleration.",m:1,ms:["qV=½mv²"]},
{q:"Combine with circular motion to obtain a relation for r² in terms of m, V, q and B.",m:2,ms:["r²=2mV/(qB²) for q>0 in magnitude form"]},
{q:"State how r changes if V is quadrupled.",m:1,ms:["r doubles"]},
{q:"State how r changes if B doubles.",m:1,ms:["r halves"]}]);
T(5,"A beam contains two isotopes with the same charge and the same selected speed.",[
{q:"Explain why the isotopes follow different radii in the analyzer.",m:1,ms:["r∝m/q and their masses differ"]},
{q:"State which isotope has the larger radius.",m:1,ms:["the heavier isotope"]},
{q:"Explain how detector position can be used to identify isotope abundance.",m:1,ms:["separate impact positions correspond to different m/q; counts/intensity give relative abundance"]},
{q:"State why a velocity selector improves mass resolution.",m:1,ms:["it removes radius variation caused by different speeds"]}]);
T(6,"A charged particle enters uniform B at an angle between 0° and 90°.",[
{q:"Resolve the velocity into components relative to B.",m:1,ms:["v_parallel and v_perpendicular"]},
{q:"Explain the role of v_perpendicular.",m:1,ms:["it produces circular motion with r=mv_perp/(qB)"]},
{q:"Explain the role of v_parallel.",m:1,ms:["it remains constant and translates the circle along the field"]},
{q:"Name the resulting trajectory.",m:1,ms:["helix"]}]);
T(7,"An electron and a proton enter the same uniform magnetic field with equal speeds perpendicular to B.",[
{q:"Compare the magnitudes of their magnetic forces.",m:1,ms:["equal because |q| is the same"]},
{q:"Compare their radii.",m:1,ms:["proton radius is much larger in proportion to its larger mass"]},
{q:"Compare their directions of curvature.",m:1,ms:["opposite because charges have opposite signs"]},
{q:"Compare their cyclotron periods.",m:1,ms:["proton period is much larger in proportion to mass"]}]);
T(8,"A particle passes undeflected through crossed E and B fields and then enters a second magnetic field.",[
{q:"State how the first region determines the speed.",m:1,ms:["v=E/B₁"]},
{q:"State how the second region determines m/q.",m:1,ms:["r=mv/(qB₂), so m/q=rB₂/v"]},
{q:"Combine the two expressions for m/q.",m:1,ms:["m/q=rB₁B₂/E"]},
{q:"State one measured quantity whose uncertainty directly affects the inferred m/q.",m:1,ms:["r / E / B₁ / B₂"]}]);
T(9,"A positive particle moves through a finite region of uniform transverse electric field and then drifts in a field-free region.",[
{q:"Describe the motion inside the electric field.",m:1,ms:["constant horizontal velocity with uniform transverse acceleration"]},
{q:"Describe the motion after leaving the field.",m:1,ms:["straight-line motion at constant resultant velocity"]},
{q:"Explain why the downstream displacement can be larger than the displacement inside the plates.",m:1,ms:["the acquired transverse velocity continues during the drift"]},
{q:"State how reversing E affects the trace.",m:1,ms:["deflection reverses"]}]);
T(10,"A non-relativistic cyclotron-like motion is considered in uniform B.",[
{q:"Derive the period T=2πm/(|q|B).",m:2,ms:["use T=2πr/v with r=mv/(|q|B)"]},
{q:"Explain why T is independent of orbit radius in the non-relativistic model.",m:1,ms:["v increases in direct proportion to r for fixed q, B and m"]},
{q:"State why the simple model fails at very high speed.",m:1,ms:["relativistic momentum no longer equals mv with constant m"]},
{q:"State one practical consequence of this limitation.",m:1,ms:["driving frequency must be adjusted / phase synchronism can be lost"]}]);
})();