/* PrepEnroll™ IB Physics Theme A expansion
   Original question generators inspired by IB assessment style.
   A.1-A.3 = SL/HL. A.4-A.5 = HL-only.
*/
(function(){
"use strict";
const PE_EXP_VERSION="A1-A5-2026-10-06";
const peIds=new Set();
function uid(sub,kind,i){const id="PE-"+sub.replace(".","")+"-"+kind+"-"+String(i+1).padStart(3,"0");if(peIds.has(id))throw new Error("duplicate expansion id "+id);peIds.add(id);return id}
function addM(sub,x,i,q,o,a,e){const id=uid(sub,"M",i);MCQ.push({t:"A",s:sub,x:x||0,uid:id,f:()=>ord(q,o,a,e)})}
function addP(sub,x,i,intro,rows,parts){const id=uid(sub,"P",i);P1B.push({t:"A",s:sub,x:x||0,uid:id,f:()=>({intro:intro,fig:tbl(rows[0],rows[1]),parts:parts})})}
function addT(sub,x,i,intro,parts){const id=uid(sub,"T",i);P2.push({t:"A",s:sub,x:x||0,uid:id,f:()=>({intro:intro,parts:parts})})}
function n2(x){return Number(x.toFixed(2))}
function n3(x){return Number(x.toFixed(3))}
function pct(x){return Number(x.toFixed(1))}
function opt4(c,a,b,d){return [c,a,b,d]}

/* ---------- A.1 Kinematics: 60 MCQ + 20 P1B + 20 P2 ---------- */
for(let i=0;i<60;i++){
  const k=i%12, v=4+(i%7), t=2+(i%5), a=1+(i%4)*0.5, g=9.81;
  if(k===0){const vf=v+a*t;addM("A.1",0,i,"A cart has initial velocity "+v+" m s⁻¹ and constant acceleration "+a+" m s⁻² for "+t+" s. What is its final velocity?",opt4(vf+" m s⁻¹",(v+a)+" m s⁻¹",(v*t)+" m s⁻¹",(vf+a*t)+" m s⁻¹"),0,"Use v = u + at.");}
  else if(k===1){const s=v*t+0.5*a*t*t;addM("A.1",0,i,"A particle moves with initial speed "+v+" m s⁻¹ and constant acceleration "+a+" m s⁻² for "+t+" s. What displacement does it cover?",opt4(n2(s)+" m",n2(v*t)+" m",n2(a*t*t)+" m",n2(s+t)+" m"),0,"Use s = ut + ½at².");}
  else if(k===2){const stop=v/a;addM("A.1",0,i,"An object moving at "+v+" m s⁻¹ experiences constant acceleration −"+a+" m s⁻². How long before it first comes to rest?",opt4(n2(stop)+" s",n2(v*a)+" s",n2(a/v)+" s",n2(stop+1)+" s"),0,"At rest v=0, so t=u/a.");}
  else if(k===3){const h=v*v/(2*g);addM("A.1",0,i,"A ball is thrown vertically upward at "+v+" m s⁻¹. Ignore air resistance. What maximum height above the release point does it reach?",opt4(n2(h)+" m",n2(v/g)+" m",n2(v*v/g)+" m",n2(2*v/g)+" m"),0,"At the top v=0 and v²=u²−2gh.");}
  else if(k===4){const th=[30,35,40,45][i%4],ux=n2(v*Math.cos(th*Math.PI/180));addM("A.1",0,i,"A projectile is launched at "+v+" m s⁻¹ at "+th+"° above horizontal. What is the horizontal component of its initial velocity?",opt4(ux+" m s⁻¹",n2(v*Math.sin(th*Math.PI/180))+" m s⁻¹",v+" m s⁻¹",n2(v/2)+" m s⁻¹"),0,"Horizontal component is u cosθ.");}
  else if(k===5){const h=5+(i%6)*2,tf=n2(Math.sqrt(2*h/g));addM("A.1",0,i,"A ball is projected horizontally from a platform "+h+" m high. Ignore drag. What determines its time of flight?",opt4("vertical motion only; t ≈ "+tf+" s","horizontal launch speed only","mass and horizontal speed","the horizontal range only"),0,"Horizontal and vertical motion are independent.");}
  else if(k===6){addM("A.1",0,i,"On a velocity–time graph, what physical quantity is represented by the signed area between the graph and the time axis? ",opt4("displacement","distance only","acceleration","change in acceleration"),0,"The time integral of velocity is displacement.");}
  else if(k===7){addM("A.1",0,i,"On a displacement–time graph, the gradient becomes steadily more negative. Which description is consistent with this?",opt4("negative velocity whose magnitude is increasing","positive velocity with positive acceleration","zero velocity with negative acceleration","constant positive velocity"),0,"A more negative slope means increasingly negative velocity.");}
  else if(k===8){const d1=3+(i%4),d2=4+(i%5),disp=n2(Math.hypot(d1,d2));addM("A.1",0,i,"A walker moves "+d1+" km east then "+d2+" km north. What is the magnitude of the displacement?",opt4(disp+" km",(d1+d2)+" km",Math.abs(d2-d1)+" km",n2(disp/2)+" km"),0,"Use Pythagoras for perpendicular displacements.");}
  else if(k===9){const u=10+(i%6)*2,tt=2+(i%4),vv=n2(u-g*tt);addM("A.1",0,i,"Taking upward as positive, a ball is launched vertically at "+u+" m s⁻¹. What is its velocity after "+tt+" s?",opt4(vv+" m s⁻¹",n2(u+g*tt)+" m s⁻¹",n2(g*tt)+" m s⁻¹",u+" m s⁻¹"),0,"v=u−gt for upward-positive coordinates.");}
  else if(k===10){addM("A.1",0,i,"A motion sensor adds the same +0.15 m offset to every position reading. Which derived quantity is unchanged?",opt4("velocity from the slope of position against time","absolute position","position intercept","distance from the sensor origin"),0,"A constant offset changes position but not a slope.");}
  else {addM("A.1",0,i,"A particle has zero instantaneous velocity at one moment. Which conclusion is always valid?",opt4("none about its acceleration can be made from velocity alone","its acceleration must be zero","its acceleration must be opposite its previous velocity","it will remain at rest"),0,"Zero velocity at an instant does not determine acceleration.");}
}
for(let i=0;i<20;i++){
  const mode=i%5, j=Math.floor(i/5)+1;
  if(mode===0){const vs=[1.2,2.8,4.3,5.9,7.5].map(x=>n2(x+0.03*j));addP("A.1",0,i,"A motion sensor records a trolley's velocity at 1.0 s intervals. Each velocity has uncertainty ±0.05 m s⁻¹.",[["t / s","v / m s⁻¹"],[[0,vs[0]],[1,vs[1]],[2,vs[2]],[3,vs[3]],[4,vs[4]]]],[
{q:"State the graph that tests whether acceleration is constant.",m:1,ms:["plot v against t"]},
{q:"Estimate the acceleration from the full data range.",m:2,ms:["use gradient Δv/Δt over widely separated points","a ≈ "+n2((vs[4]-vs[0])/4)+" m s⁻²"]},
{q:"Explain why widely separated points reduce the fractional effect of reading uncertainty.",m:2,ms:["the same absolute uncertainty is divided by a larger Δv and Δt","gradient uncertainty is relatively smaller"]},
{q:"Estimate displacement using the area under the v–t graph.",m:2,ms:["use trapezia between successive readings","sum of trapezium areas"]},
{q:"Suggest one reason for small scatter about a straight line.",m:1,ms:["sensor resolution / track irregularity / timing noise"]}}]);}
  else if(mode===1){const hs=[0.2,0.4,0.6,0.8,1.0],ts=hs.map(h=>n3(Math.sqrt(2*h/9.81)+0.001*j));addP("A.1",0,i,"A student drops a ball through different vertical heights and measures the fall time. Timing uncertainty is ±0.002 s.",[["h / m","t / s"],hs.map((h,k)=>[h,ts[k]])],[
{q:"State a transformed graph that should be linear if h = ½gt².",m:1,ms:["plot h against t²"]},
{q:"State the physical meaning of the gradient.",m:1,ms:["gradient = g/2"]},
{q:"Explain how a constant trigger delay would appear on an appropriate graph.",m:2,ms:["it produces a systematic departure / non-zero intercept or curvature depending on transformation"]},
{q:"Identify which timing measurement has the largest percentage uncertainty.",m:1,ms:["the shortest time"]},
{q:"Suggest one improvement that reduces percentage timing uncertainty.",m:1,ms:["increase drop height / use electronic timing"]}}]);}
  else if(mode===2){const ang=[25,35,45,55,65],R=ang.map(x=>n2((9+j)**2*Math.sin(2*x*Math.PI/180)/9.81*0.97));addP("A.1",0,i,"A launcher fires a projectile at fixed speed while launch angle is varied. Range uncertainty is ±0.03 m.",[["θ / °","R / m"],ang.map((x,k)=>[x,R[k]])],[
{q:"State the transformed horizontal variable for a linear test of R ∝ sin2θ.",m:1,ms:["sin(2θ)"]},
{q:"Explain why data at complementary angles should have similar ranges.",m:2,ms:["sin2θ has equal values for complementary angles"]},
{q:"Suggest why all measured ranges may be below the ideal model.",m:1,ms:["air resistance / launch speed calibration"]},
{q:"Explain why locating the precise maximum from points near 45° is difficult.",m:2,ms:["curve is shallow near maximum","changes are comparable with uncertainty"]},
{q:"State one control variable in the investigation.",m:1,ms:["launch speed / launch height / same projectile"]}}]);}
  else if(mode===3){const t=[0,1,2,3,4],x=t.map(z=>n2(0.7*z*z+0.2*j));addP("A.1",0,i,"Position data are recorded for an accelerating glider. Position uncertainty is ±0.01 m.",[["t / s","x / m"],t.map((z,k)=>[z,x[k]])],[
{q:"State a graph transformation that can test x ∝ t² after allowing for an offset.",m:1,ms:["plot x against t²"]},
{q:"Explain what a non-zero intercept may represent.",m:1,ms:["initial position / sensor zero offset"]},
{q:"Describe how the gradient relates to acceleration for motion from rest.",m:2,ms:["x=x0+½at²","gradient = a/2"]},
{q:"State why repeated measurements are useful.",m:1,ms:["estimate random uncertainty / mean"]},
{q:"Distinguish random scatter from a constant zero error.",m:2,ms:["random scatter varies reading-to-reading; zero error shifts all readings similarly"]}}]);}
  else {const tt=[0,1,2,3,4],aa=tt.map(z=>n2((0.4+0.05*j)*z));addP("A.1",0,i,"An accelerometer measures acceleration that increases approximately linearly with time.",[["t / s","a / m s⁻²"],tt.map((z,k)=>[z,aa[k]])],[
{q:"State how the change in velocity is found from an acceleration–time graph.",m:1,ms:["area under the graph"]},
{q:"Estimate the change in velocity over the full interval.",m:2,ms:["area of triangle / trapezia"]},
{q:"State how displacement could then be determined.",m:2,ms:["construct/integrate velocity against time and find its area"]},
{q:"Explain why acceleration at one instant does not by itself determine velocity.",m:1,ms:["velocity depends on initial velocity and accumulated change"]},
{q:"Suggest one reason an accelerometer may have a non-zero reading at rest.",m:1,ms:["zero offset / calibration"]}}]);}
}
for(let i=0;i<20;i++){
 const mode=i%5,j=Math.floor(i/5)+1;
 if(mode===0){const u=14+2*j,th=30+3*j,h=10+2*j;addT("A.1",0,i,"A projectile is launched from a platform "+h+" m high at "+u+" m s⁻¹ and "+th+"° above horizontal. Air resistance is negligible.",[
{q:"Resolve the initial velocity into horizontal and vertical components.",m:2,ms:["ux=u cosθ","uy=u sinθ"]},
{q:"Determine the time to reach the ground using vertical motion.",m:3,ms:["choose a sign convention","use y=uyt−½gt² and solve the quadratic"]},
{q:"Determine the horizontal range.",m:2,ms:["x=uxt"]},
{q:"Determine the impact speed.",m:2,ms:["combine horizontal and vertical components / use energy"]},
{q:"Explain qualitatively how drag changes the trajectory.",m:2,ms:["smaller range and maximum height","trajectory becomes asymmetric"]}}]);}
 else if(mode===1){addT("A.1",0,i,"A train undergoes two successive intervals of uniform acceleration before coming to rest.",[
{q:"Sketch a consistent velocity–time graph.",m:2,ms:["two straight segments with appropriate gradients"]},
{q:"Explain how each gradient gives acceleration.",m:1,ms:["a=dv/dt"]},
{q:"Explain how total displacement is obtained from the graph.",m:1,ms:["signed area under v–t"]},
{q:"Determine which interval contributes more displacement from the graph dimensions.",m:2,ms:["compare trapezium areas"]},
{q:"Discuss how a short measurement delay at the stage transition would affect inferred acceleration.",m:2,ms:["timing offset changes Δt and therefore the gradient"]}}]);}
 else if(mode===2){addT("A.1",0,i,"A particle starts from rest with acceleration a = kt for a fixed interval and then continues at constant velocity.",[
{q:"Derive an expression for velocity during the accelerated interval.",m:2,ms:["integrate a=kt to obtain v=½kt²"]},
{q:"Derive an expression for displacement during the accelerated interval.",m:2,ms:["integrate v to obtain s=kt³/6"]},
{q:"Explain what changes when acceleration becomes zero.",m:1,ms:["velocity becomes constant at its current value"]},
{q:"Sketch acceleration, velocity and displacement qualitatively.",m:3,ms:["a linear","v quadratic","s cubic during acceleration, then linear s"]},
{q:"State one experimental measurement that could test the model.",m:1,ms:["position or velocity versus time with a motion sensor"]}}]);}
 else if(mode===3){addT("A.1",0,i,"Two runners move along perpendicular straight paths and their positions are recorded as functions of time.",[
{q:"Define the relative position vector of one runner with respect to the other.",m:1,ms:["subtract position vectors"]},
{q:"Determine relative velocity from the two velocity vectors.",m:2,ms:["vector subtraction"]},
{q:"Explain how the instant of closest approach can be found.",m:2,ms:["minimize separation / set derivative of separation squared to zero"]},
{q:"Distinguish path length from magnitude of displacement.",m:2,ms:["path length follows route; displacement is end-to-end vector"]},
{q:"State a graphical method for displaying the motion.",m:1,ms:["position components against time / trajectory plot"]}}]);}
 else {addT("A.1",0,i,"A student compares free-fall measurements made with a phone video and with a light-gate timer.",[
{q:"Identify one likely random uncertainty in the video method.",m:1,ms:["frame selection / pixel position"]},
{q:"Identify one likely systematic uncertainty.",m:1,ms:["scale calibration / camera perspective"]},
{q:"Explain why plotting h against t² is useful.",m:2,ms:["linearizes h=½gt²; gradient gives g/2"]},
{q:"Explain why using several heights is better than a single calculation of g.",m:2,ms:["reveals scatter and systematic deviations; gradient uses all data"]},
{q:"State how uncertainty bars help judge the model.",m:1,ms:["show whether deviations are significant relative to measurement uncertainty"]}}]);}
}

/* ---------- A.2 Forces and momentum ---------- */
for(let i=0;i<60;i++){
 const k=i%12,m=1+(i%5),F=6+2*(i%6),g=9.81,v=2+(i%6);
 if(k===0){addM("A.2",0,i,"A resultant force of "+F+" N acts on a "+m+" kg object. What is its acceleration?",opt4(n2(F/m)+" m s⁻²",n2(F*m)+" m s⁻²",n2(m/F)+" m s⁻²",F+" m s⁻²"),0,"Use F=ma.");}
 else if(k===1){const dp=m*v;addM("A.2",0,i,"A "+m+" kg object moving at "+v+" m s⁻¹ is brought to rest. What is the magnitude of its change in momentum?",opt4(dp+" kg m s⁻¹",n2(dp/2)+" kg m s⁻¹",n2(m/v)+" kg m s⁻¹",n2(dp*v)+" kg m s⁻¹"),0,"|Δp|=mv.");}
 else if(k===2){const dt=0.1+0.05*(i%4),imp=n2(F*dt);addM("A.2",0,i,"A constant force "+F+" N acts for "+dt.toFixed(2)+" s. What impulse is delivered?",opt4(imp+" N s",n2(F/dt)+" N s",n2(dt/F)+" N s",F+" N s"),0,"Impulse = FΔt.");}
 else if(k===3){addM("A.2",0,i,"A car rounds a level curve at constant speed. Which force can provide the horizontal centripetal force?",opt4("friction between tyres and road","weight","normal reaction alone","engine power"),0,"Static friction can act toward the centre.");}
 else if(k===4){addM("A.2",0,i,"A falling object has reached terminal speed. Which statement is correct?",opt4("drag plus upthrust balances weight","acceleration equals g","drag is zero","momentum is zero"),0,"At terminal speed resultant force is zero.");}
 else if(k===5){addM("A.2",0,i,"Two objects collide in an isolated system. Which quantity is always conserved through the collision?",opt4("total linear momentum","kinetic energy","speed of each object","mechanical energy of each object"),0,"Momentum is conserved when external impulse is negligible.");}
 else if(k===6){addM("A.2",0,i,"A passenger moves forward relative to a car when the car brakes suddenly. Which principle best explains this?",opt4("inertia","action–reaction pair","terminal velocity","centripetal acceleration"),0,"The passenger tends to maintain the previous velocity.");}
 else if(k===7){const mu=0.2+0.1*(i%4);addM("A.2",0,i,"A block rests on a horizontal surface with coefficient of static friction "+mu.toFixed(1)+". Which statement is correct before slipping?",opt4("static friction adjusts up to a limiting value","friction is always μmg","friction is always zero","friction acts in the direction of impending motion"),0,"Static friction is self-adjusting up to its maximum.");}
 else if(k===8){addM("A.2",0,i,"A force acts on an object but does not change its momentum. Which situation can explain this over the stated interval?",opt4("the net impulse is zero","the force is necessarily zero at every instant","the object has zero mass","kinetic energy must increase"),0,"Momentum change equals net impulse.");}
 else if(k===9){addM("A.2",0,i,"A ball strikes a wall and rebounds with the same speed. Compared with being brought to rest, the magnitude of its momentum change is",opt4("larger","smaller","the same","zero"),0,"Reversal produces a larger vector change in momentum.");}
 else if(k===10){addM("A.2",0,i,"A rocket ejects gas backward. The rocket accelerates forward because",opt4("the gas and rocket exchange equal and opposite forces","momentum is created","the rocket experiences no external forces","the gas loses all momentum"),0,"Newton's third law and momentum conservation explain thrust.");}
 else {addM("A.2",0,i,"A force–time graph is triangular. What does the area under the graph represent?",opt4("impulse","work","power","acceleration"),0,"Impulse is the time integral of force.");}
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0) addP("A.2",0,i,"A dynamics trolley is pulled by different known resultant forces. Acceleration is measured with a motion sensor.",[["F / N","a / m s⁻²"],[[0.5,0.42],[1.0,0.84],[1.5,1.25],[2.0,1.69],[2.5,2.08]]],[
{q:"State the graph used to test Newton's second law for constant mass.",m:1,ms:["plot F against a or a against F"]},{q:"State what the gradient represents for a graph of F against a.",m:1,ms:["mass"]},{q:"Explain why a non-zero force intercept may indicate friction.",m:2,ms:["a finite applied force is needed before/while acceleration is measured because resistive force must be overcome"]},{q:"Suggest one control variable.",m:1,ms:["total mass / track angle"]},{q:"State one reason repeated acceleration measurements are useful.",m:1,ms:["reduce random uncertainty / calculate mean"]}]);
 else if(mode===1) addP("A.2",0,i,"A force sensor records the force on a ball during a collision with a padded wall.",[["t / ms","F / N"],[[0,0],[2,120],[4,240],[6,120],[8,0]]],[
{q:"State how impulse is obtained from the data.",m:1,ms:["area under F–t graph"]},{q:"Estimate the impulse.",m:2,ms:["use trapezia / triangle area","convert ms to s"]},{q:"Explain how increasing collision time for the same momentum change affects peak force.",m:2,ms:["reduces peak/average force"]},{q:"State one limitation of coarse time sampling.",m:1,ms:["peak force may be missed"]},{q:"Suggest one improvement.",m:1,ms:["higher sampling rate"]}]);
 else if(mode===2) addP("A.2",0,i,"A sphere falls through oil. Speed is measured as a function of time.",[["t / s","v / m s⁻¹"],[[0,0],[0.5,0.8],[1.0,1.3],[1.5,1.55],[2.0,1.62],[2.5,1.63]]],[
{q:"Describe the trend in acceleration.",m:2,ms:["acceleration decreases toward zero"]},{q:"Explain the approach to terminal speed.",m:2,ms:["drag increases with speed until forces balance"]},{q:"Estimate terminal speed.",m:1,ms:["about 1.63 m s⁻¹"]},{q:"State the resultant force at terminal speed.",m:1,ms:["zero"]},{q:"Suggest how a larger sphere may affect terminal speed.",m:1,ms:["generally larger terminal speed for same material/fluid"]}]);
 else if(mode===3) addP("A.2",0,i,"Two low-friction carts collide and stick. Velocities are measured immediately before and after.",[["cart","m / kg","u / m s⁻¹"],[["A",0.40,2.2],["B",0.60,-0.5]]],[
{q:"Write the momentum-conservation equation for the collision.",m:2,ms:["mAuA+mBuB=(mA+mB)v"]},{q:"Determine the common final velocity.",m:2,ms:["substitute measured values and solve"]},{q:"State whether kinetic energy is conserved.",m:1,ms:["not generally for a sticking collision"]},{q:"Suggest one external effect that can spoil momentum conservation in the experiment.",m:1,ms:["track friction / slope"]},{q:"Explain why velocities should be measured close to the collision.",m:1,ms:["minimize influence of external forces before/after"]}]);
 else addP("A.2",0,i,"A block is pulled along a horizontal surface while the pulling force is slowly increased.",[["pull / N","motion"],[[1,"at rest"],[2,"at rest"],[3,"at rest"],[4,"just moves"],[5,"accelerates"]]],[
{q:"Estimate the limiting static friction.",m:1,ms:["about 4 N"]},{q:"Explain why static friction is not 4 N at every lower applied force.",m:2,ms:["it adjusts to match the applied force until the limiting value"]},{q:"State the horizontal resultant force just before motion.",m:1,ms:["zero"]},{q:"Explain what changes immediately after slipping begins.",m:2,ms:["friction changes to kinetic value; resultant force may become non-zero"]},{q:"Suggest one way to reduce uncertainty in the limiting value.",m:1,ms:["smaller force increments / force sensor"]}]);
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0) addT("A.2",0,i,"Two carts collide on a horizontal track; one approaches at right angles to the other's initial direction.",[
{q:"Represent the initial momenta as perpendicular vectors.",m:2,ms:["draw/resolve momentum vectors"]},{q:"Use vector momentum conservation to determine the direction of the joined carts.",m:3,ms:["add x and y momentum components","tanθ=py/px"]},{q:"Determine the common speed after they stick.",m:2,ms:["magnitude of total momentum divided by combined mass"]},{q:"Explain why kinetic energy decreases.",m:2,ms:["inelastic deformation / thermal and sound energy"]},{q:"State the condition for momentum conservation.",m:1,ms:["external impulse negligible"]}]);
 else if(mode===1) addT("A.2",0,i,"A car brakes on a level road and the tyre–road friction provides the retarding force.",[
{q:"Draw a free-body diagram.",m:2,ms:["weight, normal, friction"]},{q:"Derive an expression for maximum braking deceleration in terms of μ and g.",m:2,ms:["F=μmg","a=F/m=μg"]},{q:"Explain why vehicle mass cancels.",m:1,ms:["both friction limit and inertia scale with mass"]},{q:"Discuss how stopping distance changes if initial speed doubles.",m:2,ms:["for constant deceleration, stopping distance ∝v², so ×4"]},{q:"State one real factor that makes the simple model incomplete.",m:1,ms:["reaction time / changing μ / aerodynamic drag"]}]);
 else if(mode===2) addT("A.2",0,i,"A parachutist falls from rest, opens a parachute, and later reaches a new terminal speed.",[
{q:"Describe the forces before the parachute opens.",m:2,ms:["weight downward; drag upward increasing with speed"]},{q:"Explain why acceleration decreases before terminal speed.",m:2,ms:["drag rises, reducing resultant force"]},{q:"Explain what happens immediately after the parachute opens.",m:2,ms:["drag suddenly exceeds weight; acceleration is upward while velocity remains downward"]},{q:"Explain how a new lower terminal speed is reached.",m:2,ms:["drag decreases as speed falls until balance restored"]},{q:"Sketch qualitative velocity–time behaviour.",m:2,ms:["increase to first terminal, sharp change after opening, approach lower terminal"]}]);
 else if(mode===3) addT("A.2",0,i,"A rocket ejects propellant at high speed relative to the rocket.",[
{q:"Use Newton's third law to explain thrust.",m:2,ms:["rocket pushes gas backward; gas pushes rocket forward equally and oppositely"]},{q:"Use momentum conservation to explain the same effect.",m:2,ms:["backward momentum of gas is balanced by forward momentum change of rocket"]},{q:"Explain why acceleration may increase even if thrust is constant.",m:2,ms:["rocket mass decreases, so a=F/m increases"]},{q:"State why a rocket can accelerate in vacuum.",m:1,ms:["it interacts with expelled propellant, not with air"]},{q:"Identify one assumption in a constant-thrust model.",m:1,ms:["ignore gravity/drag or assume fixed exhaust characteristics"]}]);
 else addT("A.2",0,i,"A student studies impulse by dropping balls onto different cushioning materials.",[
{q:"State the dependent variable that directly indicates collision force.",m:1,ms:["force versus time / peak force"]},{q:"Explain why equal drop conditions approximately give equal momentum change.",m:2,ms:["same mass and impact speed, similar rebound condition"]},{q:"Explain how cushioning reduces peak force.",m:2,ms:["increases stopping/contact time for similar impulse"]},{q:"State one variable that must be controlled.",m:1,ms:["drop height / ball mass / rebound"]},{q:"Explain why measuring rebound speed improves the analysis.",m:2,ms:["momentum change depends on final as well as initial velocity"]}]);
}

/* ---------- A.3 Work, energy and power ---------- */
for(let i=0;i<60;i++){
 const k=i%12,F=5+2*(i%6),s=2+(i%5),m=1+(i%4),v=3+(i%6),g=9.81;
 if(k===0){addM("A.3",0,i,"A constant force "+F+" N acts parallel to a displacement of "+s+" m. How much work is done by the force?",opt4((F*s)+" J",F+" J",s+" J",n2(F/s)+" J"),0,"W=Fs for parallel force and displacement.");}
 else if(k===1){const E=0.5*m*v*v;addM("A.3",0,i,"What is the kinetic energy of a "+m+" kg object moving at "+v+" m s⁻¹?",opt4(n2(E)+" J",n2(m*v)+" J",n2(2*m*v*v)+" J",n2(E/m)+" J"),0,"Ek=½mv².");}
 else if(k===2){const h=2+(i%5),E=m*g*h;addM("A.3",0,i,"A "+m+" kg mass is raised vertically by "+h+" m. What is the increase in gravitational potential energy near Earth's surface?",opt4(n2(E)+" J",n2(m*h)+" J",n2(g*h)+" J",n2(E/2)+" J"),0,"ΔEg=mgh.");}
 else if(k===3){addM("A.3",0,i,"A force is always perpendicular to the instantaneous velocity of an object. What is the rate at which this force does work?",opt4("zero","maximum","equal to Fv","equal to mv²"),0,"P=Fv cos90°=0.");}
 else if(k===4){addM("A.3",0,i,"Which quantity is represented by the area under a force–displacement graph?",opt4("work done","power","momentum change","acceleration"),0,"Work is the integral of force with displacement.");}
 else if(k===5){addM("A.3",0,i,"A machine has efficiency 80%. Which statement is correct?",opt4("useful output energy is 0.80 of input energy","80% of input power is destroyed","output energy exceeds input energy","20% of output energy is wasted"),0,"Efficiency = useful output/input.");}
 else if(k===6){addM("A.3",0,i,"A car travels at constant speed on a level road. Engine power is non-zero because",opt4("the engine does work against resistive forces","kinetic energy is increasing","resultant force must be non-zero","gravitational potential energy increases"),0,"At constant speed, useful engine work balances dissipative work.");}
 else if(k===7){addM("A.3",0,i,"If the speed of an object doubles, its kinetic energy becomes",opt4("four times as large","twice as large","half as large","unchanged"),0,"Kinetic energy is proportional to v².");}
 else if(k===8){addM("A.3",0,i,"A non-conservative force does negative work on a system. What happens to total mechanical energy?",opt4("it decreases by the magnitude of that work","it must remain constant","it increases","it becomes zero"),0,"Change in mechanical energy equals work done by non-conservative forces.");}
 else if(k===9){const P=F*v;addM("A.3",0,i,"A driving force "+F+" N acts on a vehicle moving at "+v+" m s⁻¹ in the same direction. What power is transferred?",opt4(P+" W",F+" W",v+" W",n2(F/v)+" W"),0,"P=Fv.");}
 else if(k===10){addM("A.3",0,i,"Two paths raise the same object to the same vertical height without changing its final speed. Ignoring friction, the work done against gravity is",opt4("the same for both paths","larger for the longer path","larger for the steeper path","zero for both"),0,"Gravitational potential energy change depends only on height.");}
 else {addM("A.3",0,i,"Fuel A has greater energy density than fuel B. This means fuel A",opt4("stores more energy per unit mass or volume, depending on the stated definition","always delivers greater power","is always more efficient","has greater momentum"),0,"Energy density is energy stored per specified amount of material.");}
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0) addP("A.3",0,i,"A student pulls a cart with a force sensor while position is recorded.",[["x / m","F / N"],[[0,0],[1,2],[2,4],[3,4],[4,2],[5,0]]],[
{q:"State how work is obtained from the data.",m:1,ms:["area under F–x graph"]},{q:"Estimate the total work.",m:2,ms:["sum triangular/rectangular/trapezoidal areas"]},{q:"Explain why average force times total displacement may be used if the average is correctly defined.",m:2,ms:["it gives the same integral area for the interval"]},{q:"State one source of systematic uncertainty.",m:1,ms:["force sensor zero / position calibration"]},{q:"Explain how a non-zero force at x=0 could be interpreted.",m:1,ms:["preload or sensor offset"]}]);
 else if(mode===1) addP("A.3",0,i,"A motor lifts different loads at constant speed. Electrical input power is measured.",[["load / N","speed / m s⁻¹","Pin / W"],[[10,0.50,7.0],[15,0.50,10.2],[20,0.50,13.5],[25,0.50,16.8]]],[
{q:"Calculate useful mechanical power for each row.",m:2,ms:["Pout=Fv"]},{q:"Determine efficiency for one row.",m:2,ms:["η=Pout/Pin"]},{q:"State whether efficiency appears approximately constant.",m:1,ms:["compare calculated ratios"]},{q:"Suggest one reason input power exceeds output power.",m:1,ms:["heating / friction"]},{q:"State one measurement that should be repeated.",m:1,ms:["speed / input power"]}]);
 else if(mode===2) addP("A.3",0,i,"A ball rolls down a track from different heights and its speed at the bottom is measured.",[["h / m","v / m s⁻¹"],[[0.10,1.32],[0.20,1.88],[0.30,2.28],[0.40,2.63],[0.50,2.94]]],[
{q:"State a linear graph to test mgh = ½mv².",m:1,ms:["plot v² against h"]},{q:"State the expected gradient.",m:1,ms:["2g"]},{q:"Explain why measured speeds may be lower than ideal.",m:1,ms:["energy dissipated / rotational kinetic energy"]},{q:"Explain how a non-zero intercept can reveal a systematic effect.",m:2,ms:["offset in speed or height calibration"]},{q:"State one control variable.",m:1,ms:["same ball / same track"]}]);
 else if(mode===3) addP("A.3",0,i,"A car's fuel consumption and useful mechanical energy output are recorded over several journeys.",[["journey","fuel energy / MJ","useful / MJ"],[["A",120,30],["B",150,39],["C",100,24],["D",180,47]]],[
{q:"Calculate the efficiency for each journey.",m:2,ms:["η=useful/input"]},{q:"Comment on whether efficiency is approximately constant.",m:1,ms:["compare values within scatter"]},{q:"Identify one reason efficiency could vary between journeys.",m:1,ms:["speed / traffic / temperature / engine operating point"]},{q:"Explain why total fuel energy is not itself a measure of power.",m:1,ms:["power requires time"]},{q:"State one additional measurement needed to calculate average input power.",m:1,ms:["journey duration"]}]);
 else addP("A.3",0,i,"A spring is compressed by different amounts and the force is measured.",[["x / cm","F / N"],[[1,1.2],[2,2.4],[3,3.6],[4,4.8],[5,6.0]]],[
{q:"State the relationship supported by the data.",m:1,ms:["F proportional to x"]},{q:"Determine the spring constant.",m:2,ms:["gradient of F against x after converting cm to m"]},{q:"State how elastic energy is obtained graphically.",m:1,ms:["area under F–x graph"]},{q:"Calculate the energy at 5 cm.",m:2,ms:["½kx² / triangular area"]},{q:"Suggest one sign that the elastic limit had been exceeded.",m:1,ms:["non-linear loading / permanent extension"]}]);
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0) addT("A.3",0,i,"A cyclist climbs a hill at steady speed while experiencing air resistance and rolling resistance.",[
{q:"Identify the energy transfers.",m:2,ms:["chemical to gravitational potential plus thermal"]},{q:"Write an expression for useful mechanical power.",m:2,ms:["P = mgv sinθ + Fresv"]},{q:"Explain why kinetic energy is constant.",m:1,ms:["speed is constant"]},{q:"Determine how required power changes if speed increases while resistive force is unchanged.",m:2,ms:["P scales with v for stated forces"]},{q:"State one reason air resistance may not remain unchanged.",m:1,ms:["drag depends on speed"]}]);
 else if(mode===1) addT("A.3",0,i,"A block slides down a rough slope from rest.",[
{q:"State the initial and final mechanical-energy terms.",m:2,ms:["initial gravitational potential; final kinetic plus reduced potential"]},{q:"Write an energy equation including work done by friction.",m:2,ms:["mgh = ½mv² + energy dissipated"]},{q:"Explain the sign of work done by friction.",m:1,ms:["negative relative to displacement / removes mechanical energy"]},{q:"Determine how increasing friction changes final speed.",m:1,ms:["decreases it"]},{q:"Explain why total energy is still conserved.",m:2,ms:["lost mechanical energy becomes internal/thermal energy"]}]);
 else if(mode===2) addT("A.3",0,i,"An electric winch raises a load vertically with changing speed.",[
{q:"State the instantaneous mechanical power in terms of lifting force and speed.",m:1,ms:["P=Fv"]},{q:"Explain why lifting force can exceed mg while the load accelerates upward.",m:2,ms:["resultant force ma requires F−mg=ma"]},{q:"Write an expression for the rate of change of gravitational potential energy.",m:1,ms:["mgv"]},{q:"Explain where additional power goes during acceleration.",m:2,ms:["into increasing kinetic energy"]},{q:"State how efficiency is determined from electrical input power.",m:1,ms:["useful mechanical output/input"]}]);
 else if(mode===3) addT("A.3",0,i,"A car brakes from high speed on a level road.",[
{q:"Calculate the initial kinetic energy symbolically.",m:1,ms:["½mv²"]},{q:"Explain why braking distance grows approximately with v² for constant braking force.",m:2,ms:["work Fd equals kinetic-energy loss"]},{q:"State where the kinetic energy goes.",m:1,ms:["thermal energy in brakes/tyres/road and sound"]},{q:"Explain how regenerative braking changes the energy pathway.",m:2,ms:["some kinetic energy is converted to electrical stored energy"]},{q:"Distinguish energy recovered from braking power.",m:1,ms:["power is energy per unit time"]}]);
 else addT("A.3",0,i,"A compressed spring launches a cart along a horizontal track.",[
{q:"Write the elastic potential energy initially stored.",m:1,ms:["½kx²"]},{q:"Use energy conservation to obtain the ideal launch speed.",m:2,ms:["½kx²=½mv²"]},{q:"Explain why measured speed may be lower.",m:1,ms:["friction / spring internal losses / wheel rotation"]},{q:"State how launch speed depends on compression in the ideal model.",m:1,ms:["v proportional to x"]},{q:"Suggest a graph that tests the model.",m:2,ms:["plot v against x or v² against x²"]}]);
}

/* ---------- A.4 Rigid body mechanics, HL-only ---------- */
for(let i=0;i<60;i++){
 const k=i%12,F=4+(i%6),r=0.2+0.05*(i%5),I=0.4+0.1*(i%5),w=2+(i%6);
 if(k===0){const tau=n2(F*r);addM("A.4",1,i,"A tangential force "+F+" N acts at radius "+r.toFixed(2)+" m from an axis. What torque magnitude is produced?",opt4(tau+" N m",n2(F/r)+" N m",n2(F+r)+" N m",F+" N m"),0,"τ=Fr for perpendicular force.");}
 else if(k===1){addM("A.4",1,i,"A rigid body is in rotational equilibrium about an axis. Which condition must hold?",opt4("the resultant torque about the axis is zero","every individual torque is zero","its angular speed is zero","its moment of inertia is zero"),0,"Rotational equilibrium requires zero net torque.");}
 else if(k===2){const al=n2(F*r/I);addM("A.4",1,i,"A rigid body with moment of inertia "+I.toFixed(1)+" kg m² experiences net torque "+n2(F*r)+" N m. What angular acceleration results?",opt4(al+" rad s⁻²",n2(I/(F*r))+" rad s⁻²",n2(F*r*I)+" rad s⁻²",w+" rad s⁻²"),0,"τ=Iα.");}
 else if(k===3){const L=n2(I*w);addM("A.4",1,i,"A body with moment of inertia "+I.toFixed(1)+" kg m² rotates at "+w+" rad s⁻¹. What is its angular momentum magnitude?",opt4(L+" kg m² s⁻¹",n2(0.5*I*w*w)+" kg m² s⁻¹",n2(I/w)+" kg m² s⁻¹",w+" kg m² s⁻¹"),0,"L=Iω.");}
 else if(k===4){const E=n2(0.5*I*w*w);addM("A.4",1,i,"A rigid body of moment of inertia "+I.toFixed(1)+" kg m² rotates at "+w+" rad s⁻¹. What rotational kinetic energy does it have?",opt4(E+" J",n2(I*w)+" J",n2(I*w*w)+" J",n2(0.5*I*w)+" J"),0,"Erot=½Iω².");}
 else if(k===5){addM("A.4",1,i,"A spinning skater pulls her arms inward while external torque is negligible. What happens?",opt4("moment of inertia decreases and angular speed increases","moment of inertia and angular speed both decrease","angular momentum decreases","rotational kinetic energy must stay constant"),0,"Angular momentum Iω is conserved.");}
 else if(k===6){addM("A.4",1,i,"For a system of point masses rotating about a fixed axis, moment of inertia is",opt4("Σmr²","Σmr","Σm/r²","Σmv²"),0,"The IB relation is I=Σmr².");}
 else if(k===7){addM("A.4",1,i,"A wheel rolls without slipping. Which relation connects centre-of-mass speed v and angular speed ω?",opt4("v=ωR","v=ω/R","v=ωR²","v=R/ω"),0,"No-slip rolling gives v=ωR.");}
 else if(k===8){addM("A.4",1,i,"Two equal masses are moved farther from a rotation axis while total angular momentum is conserved. Which quantity increases?",opt4("moment of inertia","angular speed","angular momentum","net external torque"),0,"I increases when mass distribution moves outward.");}
 else if(k===9){addM("A.4",1,i,"Angular impulse is equal to",opt4("change in angular momentum","change in rotational kinetic energy","moment of inertia","angular speed divided by time"),0,"ΔL=τΔt.");}
 else if(k===10){addM("A.4",1,i,"A constant angular acceleration acts on a wheel. Which graph is linear with time?",opt4("angular speed against time","rotational kinetic energy against time","angular momentum squared against time","angle against time in general"),0,"ω=ω0+αt.");}
 else {addM("A.4",1,i,"Two bodies have the same mass and outer radius but different mass distributions. Which may differ?",opt4("moment of inertia","total mass","outer radius","gravitational weight at the same location"),0,"Moment of inertia depends on mass distribution.");}
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0)addP("A.4",1,i,"A wheel is acted on by known tangential forces at different radii. Angular acceleration is measured.",[["τ / N m","α / rad s⁻²"],[[0.4,0.8],[0.8,1.6],[1.2,2.4],[1.6,3.2]]],[
{q:"State the graph that tests τ=Iα.",m:1,ms:["plot τ against α"]},{q:"State what the gradient represents.",m:1,ms:["moment of inertia I"]},{q:"Determine I from the data.",m:1,ms:["I=τ/α=0.50 kg m²"]},{q:"Explain what a non-zero torque intercept may indicate.",m:2,ms:["bearing friction / sensor offset"]},{q:"Suggest one way to reduce bearing-friction effects.",m:1,ms:["low-friction bearings / measure and correct friction torque"]}]);
 else if(mode===1)addP("A.4",1,i,"Masses are attached at different distances from a low-mass rotating hub.",[["r / m","m / kg"],[[0.10,0.20],[0.15,0.20],[0.20,0.20],[0.25,0.20]]],[
{q:"Calculate the moment of inertia for the point masses.",m:2,ms:["I=Σmr²"]},{q:"Predict how I changes if every radius doubles.",m:1,ms:["I becomes four times larger"]},{q:"Explain why the hub's own inertia must be considered if it is not negligible.",m:1,ms:["total I includes all mass distributions"]},{q:"State one measurement uncertainty that strongly affects I.",m:1,ms:["radius, because it is squared"]},{q:"Explain how radius uncertainty propagates qualitatively.",m:1,ms:["fractional uncertainty in r² is about twice that in r"]}]);
 else if(mode===2)addP("A.4",1,i,"A rotating platform's angular speed is measured before and after masses are pulled inward.",[["state","I / kg m²","ω / rad s⁻¹"],[["initial",3.0,2.0],["final",1.5,3.9]]],[
{q:"Calculate angular momentum in each state.",m:2,ms:["L=Iω"]},{q:"Assess whether angular momentum is conserved within the measurements.",m:2,ms:["compare calculated values"]},{q:"Explain why rotational kinetic energy need not be conserved.",m:2,ms:["internal work is done while changing mass distribution"]},{q:"State the condition required for angular momentum conservation.",m:1,ms:["negligible external torque"]},{q:"Suggest one external torque in the apparatus.",m:1,ms:["bearing friction"]}]);
 else if(mode===3)addP("A.4",1,i,"A disc rolls down a slope without slipping. Translational speed is recorded versus vertical drop.",[["h / m","v / m s⁻¹"],[[0.10,1.05],[0.20,1.49],[0.30,1.83],[0.40,2.10]]],[
{q:"State the energy terms in the rolling model.",m:2,ms:["mgh = ½mv² + ½Iω²"]},{q:"Use the no-slip condition to eliminate ω.",m:1,ms:["ω=v/R"]},{q:"Explain why speed is lower than for a sliding point mass with no rotation.",m:2,ms:["some energy is rotational kinetic energy"]},{q:"Suggest a linear graph for testing v² proportional to h.",m:1,ms:["v² against h"]},{q:"State one reason the measured slope may be smaller than ideal.",m:1,ms:["rolling resistance / bearing losses"]}]);
 else addP("A.4",1,i,"A torque sensor records a short pulse applied to a rotating flywheel.",[["t / s","τ / N m"],[[0,0],[0.1,2],[0.2,4],[0.3,2],[0.4,0]]],[
{q:"State what the area under τ–t represents.",m:1,ms:["angular impulse / change in angular momentum"]},{q:"Estimate the angular impulse.",m:2,ms:["area under the graph"]},{q:"Use ΔL=IΔω to describe how angular speed changes.",m:2,ms:["Δω=ΔL/I"]},{q:"Explain how larger I affects Δω for the same pulse.",m:1,ms:["larger I gives smaller Δω"]},{q:"Suggest one way to verify the result experimentally.",m:1,ms:["measure ω before and after"]}]);
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0)addT("A.4",1,i,"A uniform beam is supported at one point and carries several loads.",[
{q:"Choose a sign convention for clockwise and anticlockwise torques.",m:1,ms:["state a consistent convention"]},{q:"Write the condition for rotational equilibrium.",m:1,ms:["Στ=0"]},{q:"Determine an unknown load position from torque balance.",m:3,ms:["sum clockwise moments equals sum anticlockwise moments"]},{q:"Explain why force balance must also hold for complete static equilibrium.",m:2,ms:["resultant linear force must be zero as well"]},{q:"State how moving a load farther from the pivot changes its torque.",m:1,ms:["increases proportional to lever arm"]}]);
 else if(mode===1)addT("A.4",1,i,"A flywheel starts from rest under a constant net torque.",[
{q:"Relate torque to angular acceleration.",m:1,ms:["τ=Iα"]},{q:"Use constant-angular-acceleration equations to find ω after time t.",m:2,ms:["ω=αt from rest"]},{q:"Find angular displacement in the same interval.",m:2,ms:["Δθ=½αt²"]},{q:"Determine rotational kinetic energy.",m:1,ms:["½Iω²"]},{q:"Explain how the work done by torque is consistent with the energy increase.",m:2,ms:["W=τΔθ=ΔErot for constant torque"]}]);
 else if(mode===2)addT("A.4",1,i,"Two rotating discs are coupled and eventually rotate together.",[
{q:"State the conserved quantity if external torque is negligible.",m:1,ms:["angular momentum"]},{q:"Write the angular momentum before coupling.",m:2,ms:["I1ω1+I2ω2 with signs"]},{q:"Determine the common final angular speed.",m:2,ms:["ωf=(I1ω1+I2ω2)/(I1+I2)"]},{q:"State whether rotational kinetic energy is conserved.",m:1,ms:["not generally"]},{q:"Explain where the lost mechanical energy goes.",m:1,ms:["thermal/internal energy during frictional coupling"]}]);
 else if(mode===3)addT("A.4",1,i,"A cylinder rolls without slipping down a ramp.",[
{q:"State the no-slip relation.",m:1,ms:["v=ωR"]},{q:"Write the total kinetic energy.",m:2,ms:["½mv²+½Iω²"]},{q:"Use energy conservation to relate speed to vertical drop.",m:2,ms:["mgh equals total kinetic energy"]},{q:"Explain how mass distribution affects final speed.",m:2,ms:["larger I/(mR²) directs more energy into rotation, reducing v"]},{q:"State one condition under which rolling without slipping fails.",m:1,ms:["insufficient static friction"]}]);
 else addT("A.4",1,i,"A skater changes body configuration while spinning on nearly frictionless ice.",[
{q:"Explain why angular momentum is approximately conserved.",m:2,ms:["external torque about vertical axis is negligible"]},{q:"Predict the change in angular speed when moment of inertia decreases.",m:1,ms:["increases"]},{q:"Show from L=Iω how the two are related.",m:1,ms:["ω=L/I"]},{q:"Explain why kinetic energy can increase.",m:2,ms:["skater does internal work while pulling limbs inward"]},{q:"Identify the source of that additional kinetic energy.",m:1,ms:["chemical/internal energy of muscles"]}]);
}

/* ---------- A.5 Galilean and special relativity, HL-only ---------- */
for(let i=0;i<60;i++){
 const k=i%12,b=[0.2,0.3,0.4,0.5,0.6][i%5],gam=1/Math.sqrt(1-b*b);
 if(k===0){addM("A.5",1,i,"Which statement is part of special relativity?",opt4("the speed of light in vacuum is the same for all inertial observers","time is absolute for all observers","velocities always add linearly","simultaneous events are simultaneous in all frames"),0,"One postulate is invariance of c in inertial frames.");}
 else if(k===1){addM("A.5",1,i,"For relative speed "+b.toFixed(1)+"c, the Lorentz factor γ is closest to",opt4(n3(gam).toString(),n3(1-b).toString(),n3(1+b).toString(),n3(b*b).toString()),0,"γ=1/sqrt(1−β²).");}
 else if(k===2){addM("A.5",1,i,"A proper time interval is measured by a clock that",opt4("is present at both events in its own frame","moves between two spatially separated clocks","must be at rest relative to Earth","always measures the longest interval"),0,"Proper time is measured where the two events occur at the same place in that frame.");}
 else if(k===3){addM("A.5",1,i,"A moving rod is measured along its direction of motion. Compared with its proper length, an observer sees",opt4("a shorter length","a longer length","the same length","zero length at any non-zero speed"),0,"Length contraction: L=L0/γ.");}
 else if(k===4){addM("A.5",1,i,"Which quantity is invariant between inertial frames in special relativity?",opt4("space–time interval","time interval alone","spatial separation alone","kinetic energy"),0,"The space–time interval is invariant.");}
 else if(k===5){addM("A.5",1,i,"In Galilean relativity, two inertial frames in relative motion agree on",opt4("time intervals","the speed of light","all measured velocities","positions of moving objects"),0,"Galilean transformations assume absolute time.");}
 else if(k===6){addM("A.5",1,i,"Why does ordinary velocity addition fail for speeds close to c?",opt4("it can predict speeds exceeding c","it predicts zero time dilation","it makes mass negative","it violates Newton's third law"),0,"Relativistic addition preserves the invariant speed c.");}
 else if(k===7){addM("A.5",1,i,"Two events simultaneous in one inertial frame may not be simultaneous in another because",opt4("simultaneity is relative and depends on the frame","light travels at different speeds in the two frames","clocks cannot be synchronized in any frame","time stops for moving observers"),0,"Lorentz transformations mix space and time coordinates.");}
 else if(k===8){addM("A.5",1,i,"On a ct–x diagram, a light ray in vacuum is represented by a line at",opt4("45° when equal scales are used","0°","90°","an angle that depends on the source speed"),0,"For light, x=ct, giving 45° on equal scales.");}
 else if(k===9){addM("A.5",1,i,"Muon-decay observations in the atmosphere support relativity because moving muons",opt4("survive longer in the Earth frame due to time dilation","move faster than light","have zero proper lifetime","experience stronger gravity"),0,"Time dilation explains the increased observed lifetime.");}
 else if(k===10){addM("A.5",1,i,"The proper length of an object is measured in the frame in which",opt4("the object is at rest","the observer moves fastest","the object is shortest","light from both ends arrives simultaneously"),0,"Proper length is the rest-frame length.");}
 else {addM("A.5",1,i,"If two events have zero space–time interval, their separation is described as",opt4("light-like","time-like only","space-like only","Galilean"),0,"A null interval corresponds to possible connection by light.");}
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0)addP("A.5",1,i,"A set of unstable particles is observed at different speeds. Their rest-frame mean lifetime is known.",[["v/c","observed lifetime / μs"],[[0.2,2.25],[0.4,2.40],[0.6,2.75],[0.8,3.67]]],[
{q:"State the relativistic effect tested by the data.",m:1,ms:["time dilation"]},{q:"State the expected relationship between observed lifetime and γ.",m:1,ms:["Δt=γΔt0"]},{q:"Explain why the lifetime rises non-linearly with speed.",m:2,ms:["γ increases non-linearly as v approaches c"]},{q:"Suggest a graph that should be linear.",m:1,ms:["observed lifetime against γ"]},{q:"State one reason low-speed points are less sensitive tests.",m:1,ms:["γ is close to 1 at low speed"]}]);
 else if(mode===1)addP("A.5",1,i,"A spacecraft passes measuring stations that determine its contracted length at different speeds.",[["v/c","L/L0"],[[0.2,0.980],[0.4,0.917],[0.6,0.800],[0.8,0.600]]],[
{q:"State the equation tested by the data.",m:1,ms:["L=L0/γ"]},{q:"Identify the proper length ratio.",m:1,ms:["L0/L0=1 in the rest frame"]},{q:"Explain why simultaneous endpoint measurements are required in the observer frame.",m:2,ms:["length is spatial separation of endpoints at the same time in that frame"]},{q:"State how L/L0 behaves as v approaches c.",m:1,ms:["approaches zero"]},{q:"Explain why this does not mean the object is physically compressed in its own frame.",m:2,ms:["proper length remains L0; length is frame-dependent"]}]);
 else if(mode===2)addP("A.5",1,i,"Two frames compare coordinates of a set of events using synchronized clocks and rulers.",[["event","ct / m","x / m"],[["P",10,2],["Q",14,6],["R",18,10],["S",22,14]]],[
{q:"State the quantity that combines Δct and Δx into an invariant interval.",m:1,ms:["(Δs)²=(cΔt)²−(Δx)²"]},{q:"Calculate the interval squared between two selected events.",m:2,ms:["substitute coordinate differences"]},{q:"Classify a zero interval.",m:1,ms:["light-like / null"]},{q:"Explain why separate values of Δt and Δx may differ between frames.",m:2,ms:["Lorentz transformations mix space and time"]},{q:"State what remains the same.",m:1,ms:["space–time interval"]}]);
 else if(mode===3)addP("A.5",1,i,"The apparent speeds of probes launched from a moving spacecraft are compared with classical and relativistic predictions.",[["spacecraft v/c","probe relative u'/c"],[[0.3,0.4],[0.5,0.4],[0.7,0.4],[0.8,0.4]]],[
{q:"State the Galilean prediction for the probe speed relative to Earth.",m:1,ms:["u=u'+v"]},{q:"Explain why this can exceed c for sufficiently large values.",m:1,ms:["ordinary addition has no invariant speed limit"]},{q:"State the need for the relativistic velocity-addition formula.",m:1,ms:["preserves speeds below/equal to c"]},{q:"Predict qualitatively how relativistic and Galilean results differ at low speed.",m:1,ms:["they are nearly the same"]},{q:"Explain why the difference grows at high speed.",m:2,ms:["relativistic denominator becomes significant"]}]);
 else addP("A.5",1,i,"World lines are plotted on a ct–x diagram for several particles moving at constant speed.",[["particle","x / m after ct=10 m"],[["A",2],["B",5],["C",8],["light",10]]],[
{q:"Identify which world line corresponds to the fastest material particle.",m:1,ms:["C"]},{q:"Explain why the light line has x=ct.",m:1,ms:["light travels at c"]},{q:"State how the angle of a material world line changes as speed approaches c.",m:1,ms:["approaches the light line"]},{q:"Explain why no material world line can cross outside the light cone.",m:2,ms:["that would require speed greater than c"]},{q:"State one advantage of a space–time diagram.",m:1,ms:["visualizes causal/temporal/spatial relationships between events"]}]);
}
for(let i=0;i<20;i++){
 const mode=i%5;
 if(mode===0)addT("A.5",1,i,"A spacecraft travels at relativistic speed between Earth and a distant station.",[
{q:"Identify which frame measures the proper distance between Earth and the station.",m:1,ms:["Earth/station rest frame"]},{q:"Identify which clock measures the proper travel time between departure and arrival on the spacecraft.",m:1,ms:["spacecraft clock"]},{q:"Use time dilation to relate Earth-frame and spacecraft-frame travel times.",m:2,ms:["Δt=γΔt0"]},{q:"Use length contraction to relate the distance measured on the spacecraft.",m:2,ms:["L=L0/γ"]},{q:"Explain why both descriptions give the same physical arrival event.",m:2,ms:["Lorentz transformations preserve event relationships / interval"]}]);
 else if(mode===1)addT("A.5",1,i,"A fast-moving spacecraft launches a probe forward relative to itself.",[
{q:"State the Galilean velocity-addition result.",m:1,ms:["u=u'+v"]},{q:"Explain why Galilean addition becomes inconsistent near c.",m:2,ms:["can predict u>c, conflicting with invariance of c"]},{q:"Write the relativistic velocity-addition structure.",m:2,ms:["u=(u'+v)/(1+u'v/c²) with consistent sign convention"]},{q:"Show qualitatively that the relativistic result is below c for subluminal inputs.",m:2,ms:["denominator increases the classical sum enough to keep u<c"]},{q:"State the low-speed limit.",m:1,ms:["reduces approximately to Galilean addition"]}]);
 else if(mode===2)addT("A.5",1,i,"Two events occur at different positions and times in frame S.",[
{q:"Write the invariant interval between the events.",m:1,ms:["(Δs)²=(cΔt)²−(Δx)²"]},{q:"Explain the meaning of a time-like separation.",m:2,ms:["there exists a frame where events occur at same position; causal connection slower than/equal to light is possible"]},{q:"Explain the meaning of a space-like separation.",m:2,ms:["there exists a frame where events are simultaneous; no causal signal at ≤c connects them"]},{q:"State what a null separation means.",m:1,ms:["connected by light"]},{q:"Explain why all inertial frames agree on the interval classification.",m:1,ms:["interval is invariant"]}]);
 else if(mode===3)addT("A.5",1,i,"A cosmic-ray muon is created high in Earth's atmosphere and travels toward the ground.",[
{q:"Explain the observation in the Earth frame.",m:2,ms:["moving muon's lifetime is time-dilated"]},{q:"Explain the same observation in the muon frame.",m:2,ms:["atmospheric thickness is length-contracted"]},{q:"State the proper lifetime.",m:1,ms:["lifetime measured in muon rest frame"]},{q:"State the proper atmospheric thickness.",m:1,ms:["distance measured in Earth/atmosphere rest frame"]},{q:"Explain why the two explanations are consistent rather than contradictory.",m:2,ms:["they describe the same events in different inertial frames related by Lorentz transformations"]}]);
 else addT("A.5",1,i,"Two inertial observers analyze a pair of distant events that are simultaneous in one frame.",[
{q:"State whether they must be simultaneous in the other frame.",m:1,ms:["no"]},{q:"Use the Lorentz time transformation qualitatively to explain the difference.",m:2,ms:["Δt' depends on both Δt and vΔx/c²"]},{q:"State the special case in which simultaneous events remain simultaneous for both frames.",m:1,ms:["same position Δx=0 or zero relative speed for the stated transformation"]},{q:"Explain how this illustrates relativity of simultaneity.",m:2,ms:["time ordering/separation of space-like events depends on frame"]},{q:"State which invariant remains unchanged.",m:1,ms:["space–time interval"]}]);
}

/* ---------- Runtime QA summary ---------- */
const subList=["A.1","A.2","A.3","A.4","A.5"];
const counts={};
for(const sub of subList){
 counts[sub]={M:MCQ.filter(q=>q.uid&&q.s===sub).length,P:P1B.filter(q=>q.uid&&q.s===sub).length,T:P2.filter(q=>q.uid&&q.s===sub).length};
 counts[sub].total=counts[sub].M+counts[sub].P+counts[sub].T;
 if(counts[sub].total<100)throw new Error(sub+" expansion below 100 items");
}
if(MCQ.filter(q=>q.uid&&["A.4","A.5"].includes(q.s)&&!q.x).length)throw new Error("HL tagging failure in A.4/A.5");
window.__PE_IB_A_EXPANSION_QA={version:PE_EXP_VERSION,counts:counts,ids:[...peIds],uniqueIds:peIds.size};
})();
