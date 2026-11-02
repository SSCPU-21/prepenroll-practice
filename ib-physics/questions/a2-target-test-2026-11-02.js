/* PrepEnroll IB Physics A.2 — 32 concept-aligned, independently worded questions.
   Based on topics and numerical settings of user-supplied Save My Exams Target Test,
   2 Nov 2026 (32 questions, 123 marks). NOT a reproduction of its diagrams.
   Original source remains © Save My Exams Ltd.; do not redistribute source PDF.
   All questions are applicable to IB DP HL (A.2 is also SL content).
*/
(function(){"use strict";
const sub="A.2", src="SME Target Test 2026-11-02";
let count=0;
function M(n,q,o,a,e){MCQ.push({t:"A",s:sub,x:0,uid:"PE-SME26-A2-Q"+String(n).padStart(2,"0"),source:src,f:()=>ord(q,o,a,e)});count++}
function W(n,intro,parts){P2.push({t:"A",s:sub,x:0,uid:"PE-SME26-A2-Q"+String(n).padStart(2,"0"),source:src,f:()=>({intro,parts})});count++}
const p=(q,m,ms)=>({q,m,ms});
M(1,"What gives the impulse delivered by a force over a time interval on a force–time graph?",["The area under the curve","The instantaneous gradient","The vertical intercept","The horizontal intercept"],0,"Impulse equals the integral of force with respect to time.");
M(2,"A ball moves at constant speed in a vertical circle. Compare the magnitude of the resultant force at its highest and lowest points.",["The same at both positions","Greater at the top","Greater at the bottom","Zero at the bottom"],0,"At constant speed and radius, the centripetal resultant mv²/r has constant magnitude; tension itself varies.");
W(3,"A 52 kg skier is initially pulled over snow at steady speed and later comes to rest on grass. The limiting coefficient of static friction on grass is 0.12.",[
p("Name the four forces on the skier while moving over snow.",4,["weight downward","normal reaction upward","pull from the rope forward","resistive/friction force backward"]),
p("Name the form of friction that resists the start of motion on grass.",1,["static friction"]),
p("Assuming a horizontal pull and a level surface, calculate the minimum pull needed to initiate motion. Use g=9.81 m s⁻².",2,["R=mg=52×9.81 N","F=μsR≈61.2 N"])]);
W(4,"A passenger capsule is attached to a giant wheel of radius 68 m rotating clockwise at 3.5×10⁻³ rad s⁻¹. An empty capsule weighs 98.1 kN.",[
p("Calculate the tangential speed of a passenger.",2,["v=ωr","v=0.238 m s⁻¹"]),
p("State the direction of centripetal force at a point on the wheel.",1,["radially towards the wheel centre"]),
p("State the direction of the instantaneous velocity at any point.",1,["tangent to the circle, in the clockwise direction"]),
p("Calculate the centripetal force on the empty capsule.",3,["m=W/g=10000 kg","F=mω²r","F≈8.33 N"]),
p("Use the period of the wheel to decide whether a complete revolution takes less than 40 minutes.",4,["T=2π/ω","T≈1795 s≈29.9 min","29.9 min is less than 40 min","yes, ignoring boarding and queue times"])]);
W(5,"A 2.5 kg block on a rough plane begins to slide down when its inclination reaches 35°. The plane is later raised to 40° and the kinetic friction coefficient is 0.30.",[
p("Describe a microscopic explanation of static friction.",2,["surfaces contain microscopic asperities/contact junctions","interlocking or adhesive contact resists relative sliding"]),
p("Distinguish static friction from kinetic friction.",3,["static friction adjusts up to a limiting value","kinetic friction acts while surfaces slide","limiting static friction is often larger than kinetic friction"]),
p("Calculate the coefficient of static friction at the threshold of sliding.",3,["mg sinθ=μs mg cosθ","μs=tan35°","μs≈0.700"]),
p("Calculate the applied force parallel to the plane needed to move the block upwards at 1.5 m s⁻².",3,["F−mg sin40°−μk mg cos40°=ma","F=m(a+g sin40°+μk g cos40°)","F≈25.1 N"])]);
M(6,"Which relation defines the linear momentum of a particle?",["p=mv","p=Fs","p=½mv²","p=F/Δt"],0,"Momentum is mass multiplied by velocity.");
M(7,"For a ladder leaning against a rough vertical wall on rough ground, which description gives the forces correctly?",["Weight down, normals perpendicular to each contact, and friction along each surface","Only weight and the ground normal","Weight up and two horizontal normals","Friction always perpendicular to each contact"],0,"Normals act perpendicular to contacting surfaces; friction is parallel to them.");
W(8,"A fairground ride performs uniform circular motion. A 35 kg child is 8.0 m from the axis, and the angular speed is 0.30 rad s⁻¹.",[
p("Define angular displacement.",2,["angle swept out by the radius vector","measured in radians and signed by direction"]),
p("Define angular speed.",1,["rate of change of angular displacement with time"]),
p("Calculate the time for an angular displacement of π/2 rad.",4,["θ=ωt","t=(π/2)/0.30","t≈5.24 s","correct units"]),
p("Determine the centripetal force.",2,["F=mω²r","F=25.2 N"]),
p("Find the child's linear speed.",2,["v=ωr","v=2.40 m s⁻¹"]),
p("Find the centripetal acceleration.",2,["a=ω²r","a=0.720 m s⁻²"])]);
M(9,"At fixed speed an aeroplane banks into a level circular turn. How does tan(bank angle) depend on the turn radius r?",["It is proportional to 1/r","It is proportional to r","It is independent of r","It is proportional to r²"],0,"tanθ=v²/(rg).");
M(10,"When a ball moving horizontally in a circle on a cord is released, what happens immediately afterward (neglecting air drag)?",["Its horizontal velocity is tangent to the old circle and it accelerates downward","It keeps circling at larger radius","Its horizontal velocity instantly becomes zero","It moves radially inward"],0,"The centripetal force disappears; gravity still causes vertical acceleration.");
M(11,"A turntable makes 20 revolutions in 300 seconds. What is the magnitude of its mean angular velocity?",["2π/15 rad s⁻¹","π/150 rad s⁻¹","10π rad s⁻¹","1/15 rad s⁻¹"],0,"ω=20×2π/300=2π/15 rad s⁻¹.");
M(12,"Two unequal masses m and nm (n>1) are joined across an ideal pulley. Which pair gives acceleration and tension?",["a=g(n−1)/(n+1), T=2nmg/(n+1)","a=g(n+1)/(n−1), T=mg","a=g(n−1), T=nmg","a=g, T=0"],0,"Apply Newton's second law to both masses and solve simultaneously.");
M(13,"Which inequality applies to the magnitude of static friction on a contact with normal force R?",["fₛ≤μₛR","fₛ=μₖR at all times","fₛ=ma always","fₛ=mg always"],0,"Static friction adjusts from zero to its limiting value.");
W(14,"A helicopter moves horizontally at constant velocity. Air drag is 25 kN horizontally; rotor lift acts with horizontal and vertical components. In a later manoeuvre its mass is 50 000 kg.",[
p("Identify the two forces other than rotor lift acting in straight steady flight.",2,["air resistance/drag","weight/gravitational force"]),
p("Find the horizontal component of rotor lift in steady flight.",1,["25 kN forward to balance drag"]),
p("Calculate the helicopter's weight for g=9.81 m s⁻².",2,["W=mg","W=490500 N≈491 kN"]),
p("Name the law represented by the equation Fnet=ma.",1,["Newton's second law of motion"])]);
W(15,"A rotating astronaut-training centrifuge completes one revolution in 2.30 s. Each astronaut is 6.30 m from the rotation axis.",[
p("Calculate the rotational frequency and state its unit.",3,["f=1/T","f=1/2.30","f≈0.435 Hz"]),
p("Calculate the angular speed.",2,["ω=2π/T","ω≈2.73 rad s⁻¹"]),
p("Calculate centripetal acceleration.",2,["a=ω²r","a≈47.0 m s⁻²"]),
p("Give the direction of each astronaut's centripetal acceleration.",1,["towards the rotation axis"])]);
M(16,"A frictionless spring latch is released from a compressed position. How does the magnitude of its acceleration change as the spring approaches its natural length?",["It decreases linearly to zero","It increases linearly","It increases exponentially","It remains constant"],0,"Hooke's law F=kx, so |a|=kx/m; the remaining compression decreases uniformly with travel.");
M(17,"A pendulum hanging inside a train initially hangs vertically. What happens when the train travels steadily in a straight line at constant velocity?",["It continues to hang vertically","It deflects backwards","It deflects forwards","It must oscillate continuously"],0,"Constant velocity introduces no horizontal acceleration.");
M(18,"A hammer moves round a circular path of radius 2.0 m at angular speed 2.0 rad s⁻¹. Find its centripetal acceleration.",["8.0 m s⁻²","2.0 m s⁻²","4.0 m s⁻²","6.0 m s⁻²"],0,"a=ω²r=4×2=8.");
M(19,"A ball is whirled with constant speed in a vertical circle. How does cord tension vary?",["It is greatest at the bottom and least at the top","It stays constant","It is greatest at the top","It is zero at both positions"],0,"Tbottom=mv²/r+mg and Ttop=mv²/r−mg.");
M(20,"A launcher fires 100 balls per minute, each of mass 0.004 kg, at 20 m s⁻¹ into a wall. They rebound at the same speed. Find the magnitude of average force on the wall.",["0.267 N","0.00267 N","2.67 N","26.7 N"],0,"Each momentum change has magnitude 2mv=0.16 kg m s⁻¹; force=0.16×100/60 N.");
M(21,"For a mass rotating at speed v on an elastic string, the string tension is kΔx and the centripetal requirement is mv²/r. What happens to required mass if the radius doubles at unchanged speed and the same tension?",["The required mass doubles","The required mass halves","The required mass quadruples","It remains unchanged"],0,"With F=mv²/r and fixed F and v, m is proportional to r.");
M(22,"A car's safe cornering speed is 10 m s⁻¹ on a dry road. If maximum available friction is halved on a wet road, what is the new maximum speed?",["5√2 m s⁻¹","5 m s⁻¹","10√2 m s⁻¹","2√2 m s⁻¹"],0,"For fixed m and r, v² is proportional to maximum friction; vwet=10/√2.");
M(23,"Which claim is false for uniform circular motion?",["The velocity vector is constant","The speed is constant","The acceleration points inward","Centripetal force is perpendicular to velocity"],0,"The direction of velocity continually changes.");
M(24,"Which principle matters most in a correctly labelled free-body diagram?",["Include all external forces acting on the chosen object","Draw velocity as a force","Draw action and reaction on the same object","Assume every force has equal magnitude"],0,"A free-body diagram includes only real external forces on the isolated object.");
W(25,"A 0.55 kg metal ball travels on a string in a horizontal circle of radius 1.5 m at 6.2 m s⁻¹. At the breaking threshold its rotational frequency reaches 3.0 Hz.",[
p("Calculate the time to sweep 170° at 6.2 m s⁻¹.",3,["θ=170π/180 rad","ω=v/r","t=θr/v≈0.718 s"]),
p("Calculate the centripetal force supplied by the string at 6.2 m s⁻¹.",2,["F=mv²/r","F≈14.1 N"]),
p("Calculate the breaking-threshold tension at 3.0 revolutions per second.",2,["F=m(2πf)²r","F≈293 N"]),
p("Explain with a Newton law why a body moving at constant speed around a circle is accelerating.",3,["velocity direction changes, so acceleration is nonzero","resultant inward force is required","Newton's second law: Fnet=ma"])]);
M(26,"Which assertion about friction is incorrect?",["Kinetic friction reaches a maximum value on a stationary, non-sliding block","Static friction can exist without relative sliding","Static friction has an upper limiting magnitude","Kinetic friction typically applies during sliding"],0,"Dynamic/kinetic friction describes sliding, not a stationary contact.");
M(27,"A 50 kg motorcycle follows a circular track of radius 500 m at 10 m s⁻¹. What is its centripetal force?",["10 N","50 N","100 N","150 N"],0,"F=mv²/r=50×100/500=10 N.");
W(28,"A proton of mass m moves uniformly around a circular orbit of kinetic energy K and period T. In a second case, the orbit circumference is 1.25 mm and the inward force is 65 fN. Use proton mass 1.67×10⁻²⁷ kg.",[
p("Derive the orbital radius in terms of K, T and m.",2,["K=½mv² and v=2πr/T","r=√(KT²/(2π²m))"]),
p("Determine the proton's speed in the second orbit.",3,["r=C/(2π)=1.99×10⁻⁴ m","F=mv²/r","v≈8.80×10⁴ m s⁻¹"]),
p("Calculate its orbital frequency.",3,["f=v/C","f≈7.04×10⁷ Hz","correct unit"]),
p("State the physical interaction commonly used to bend charged protons into a circular orbit.",1,["magnetic force/Lorentz force"]),
p("Explain the work done by the ideal magnetic force.",2,["magnetic force acts perpendicular to velocity","work done is zero"])]);
W(29,"Rail carriage C1 has mass 1100 kg and approaches stationary carriage C2 of mass 3300 kg at 6.0 m s⁻¹. They couple on impact and then move together along a horizontal track.",[
p("Give momentum as an equation in words and in fundamental SI units.",2,["momentum=mass×velocity","kg m s⁻¹"]),
p("Determine C1's initial momentum.",2,["p=m v","p=6600 kg m s⁻¹"]),
p("Determine C2's initial momentum.",1,["p=0 kg m s⁻¹"]),
p("State the total momentum immediately after the carriages couple, assuming negligible external horizontal impulse.",3,["conservation of momentum","initial total=6600 kg m s⁻¹","final total=6600 kg m s⁻¹"]),
p("Find the shared velocity after impact.",3,["combined mass=4400 kg","v=6600/4400","v=1.50 m s⁻¹ in C1's original direction"])]);
M(30,"A pendulum is released from rest with its string horizontal. At the lowest point, what is the string tension (ignore air resistance)?",["3mg","mg","2mg","4mg"],0,"Energy gives v²=2gL, hence T−mg=mv²/L=2mg.");
M(31,"Define motion to the right as positive. A ball approaches a wall on the right, rebounds and travels left. How do its velocity signs change?",["Positive before, negative after","Negative before, positive after","Positive both times","Negative both times"],0,"Direction reversal reverses the velocity sign.");
W(32,"Two roller skaters begin at rest: Joanna (59 kg) throws a 3.3 kg ball at 6.2 m s⁻¹ towards Lindsay (64 kg), who catches it. Neglect horizontal external forces.",[
p("Calculate Joanna's recoil velocity immediately after the throw.",3,["total momentum initially zero","59v+3.3×6.2=0","v≈−0.347 m s⁻¹"]),
p("State Joanna's direction of motion.",1,["opposite to the thrown ball"]),
p("Calculate Lindsay's speed immediately after catching the ball.",4,["conserve momentum for ball and Lindsay","3.3×6.2=(64+3.3)V","V≈0.304 m s⁻¹","in direction of arriving ball"]),
p("Identify whether the ball-catching event is elastic or inelastic and justify.",3,["inelastic collision","ball and skater move together after impact","kinetic energy is not conserved"]),
p("Explain why padded gloves reduce injury in the catch.",2,["longer impact time for the same momentum change","lower average impact force from F=Δp/Δt"])]);
if(count!==32)throw Error("Expected 32 questions, found "+count);
window.__PE_IB_SME26_QA={source:src,questionCount:count,notes:"Concept-aligned adaptations; source diagrams not reproduced"};
})();