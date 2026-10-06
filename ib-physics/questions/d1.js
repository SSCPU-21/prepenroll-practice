/* PrepEnroll™ IB Physics D.1 Gravitational fields — 100 assessable prompts */
(function(){"use strict";
const sub="D.1";
function M(i,x,q,o,a,e){MCQ.push({t:"D",s:sub,x,uid:"PE-D1-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,x,intro,head,rows,parts){P1B.push({t:"D",s:sub,x,uid:"PE-D1-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,x,intro,parts){P2.push({t:"D",s:sub,x,uid:"PE-D1-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,0,"Two point masses m and M are separated by distance r. The gravitational force magnitude is",["GMm/r²","GMm/r","G(M+m)/r²","GMm r²"],0,"Newton's law of gravitation gives F=GMm/r².");
M(2,0,"The gravitational field strength at distance r from an isolated spherical mass M is",["GM/r²","GM/r","GMr","GM²/r²"],0,"g=GM/r² outside a spherically symmetric mass.");
M(3,0,"Gravitational field strength is defined as",["force per unit test mass","work per unit charge","energy per unit mass squared","force times distance"],0,"g=F/m for a small test mass.");
M(4,0,"The direction of the gravitational field around an isolated mass is",["radially inward","radially outward","tangential to circles","random"],0,"Gravity is attractive.");
M(5,0,"If distance from a point mass doubles, gravitational field strength becomes",["one quarter","one half","twice","four times"],0,"g is proportional to 1/r².");
M(6,0,"At the midpoint between two identical isolated masses, the net gravitational field is",["zero","toward the left mass","toward the right mass","infinite"],0,"Equal and opposite field vectors cancel.");
M(7,0,"A satellite moves in a circular orbit of radius r around mass M. Its orbital speed is",["√(GM/r)","√(GMr)","GM/r²","2π√(r/GM)"],0,"Set GMm/r²=mv²/r.");
M(8,0,"For a circular orbit around a fixed central mass, increasing orbital radius causes orbital speed to",["decrease","increase","remain constant","become zero immediately"],0,"v=√(GM/r).");
M(9,0,"The period T of a circular orbit satisfies",["T² proportional to r³","T proportional to r³","T² proportional to r","T proportional to 1/r"],0,"Kepler's third-law form is T²=4π²r³/(GM).");
M(10,0,"An astronaut in orbit feels weightless mainly because the astronaut and spacecraft are",["in continuous free fall","outside Earth's gravitational field","at a point where g=0","moving faster than light"],0,"Both accelerate together under gravity.");
M(11,0,"A planet has the same mass as Earth but twice Earth's radius. Its surface field strength is",["one quarter of Earth's","half Earth's","twice Earth's","four times Earth's"],0,"g=GM/R².");
M(12,0,"Two masses are both doubled while their separation is unchanged. Their gravitational force becomes",["four times larger","twice as large","unchanged","half as large"],0,"F is proportional to the product Mm.");
M(13,1,"Gravitational potential at distance r from an isolated mass M, taking zero at infinity, is",["−GM/r","+GM/r","−GM/r²","+GM/r²"],0,"Vg=−GM/r.");
M(14,1,"The negative sign of gravitational potential indicates that",["work must be supplied to remove a mass to infinity","gravity is repulsive","field strength is negative everywhere","mass is negative"],0,"A bound mass has lower potential energy than at infinity.");
M(15,1,"For a mass m in a circular orbit of radius r, total mechanical energy is",["−GMm/(2r)","−GMm/r","+GMm/(2r)","+GMm/r"],0,"For a circular orbit K=GMm/(2r), U=−GMm/r.");
M(16,1,"For a circular orbit, kinetic energy K and gravitational potential energy U satisfy",["K=−U/2","K=U","K=−2U","K=0"],0,"K=GMm/(2r) and U=−GMm/r.");
M(17,1,"The escape speed from the surface of a spherical body of mass M and radius R is",["√(2GM/R)","√(GM/R)","2GM/R","√(GMR)"],0,"Set total energy at launch equal to zero at infinity.");
M(18,1,"The relation between radial field strength g and gravitational potential V is",["g=−dV/dr","g=dV/dr","g=Vr","g=V/r²"],0,"Field points in the direction of decreasing potential.");
M(19,1,"A satellite is transferred from a low circular orbit to a higher circular orbit. Its total mechanical energy",["increases, becoming less negative","decreases, becoming more negative","remains unchanged","becomes positive"],0,"E=−GMm/(2r), so larger r gives a less negative energy.");
M(20,1,"At a point where gravitational potential is zero, the gravitational field strength",["need not be zero","must be zero","must be infinite","must point outward"],0,"Potential is scalar; its zero value does not imply zero gradient.");

/* 10 Paper 1B */
P(1,0,"A small satellite orbits a planet in circular paths of different radii.",["r / 10⁶ m","v / km s⁻¹"],[[7.0,7.55],[9.0,6.66],[12.0,5.77],[16.0,5.00]],[
{q:"State the expected relationship between v² and 1/r.",m:1,ms:["v² is proportional to 1/r"]},
{q:"Identify a linear graph that can determine GM.",m:1,ms:["v² against 1/r"]},
{q:"State the physical meaning of the gradient of v² against 1/r.",m:1,ms:["GM"]},
{q:"Explain why the satellite acceleration is non-zero although its speed can be constant.",m:1,ms:["velocity changes direction / centripetal acceleration exists"]}]);
P(2,0,"A probe measures gravitational field strength at several distances from a nearly spherical asteroid.",["r / km","g / m s⁻²"],[[2.0,0.80],[3.0,0.36],[4.0,0.20],[5.0,0.13]],[
{q:"State a transformed graph that should be linear for an inverse-square field.",m:1,ms:["g against 1/r²"]},
{q:"Use the data to estimate g at r=6.0 km.",m:1,ms:["about 0.089 m s⁻²"]},
{q:"Explain why the point-mass model is reasonable outside a spherical asteroid.",m:1,ms:["external field of a spherically symmetric mass acts as if mass were concentrated at its centre"]},
{q:"State one likely source of deviation from the model.",m:1,ms:["non-spherical mass distribution / measurement uncertainty"]}]);
P(3,0,"Two equal masses are fixed on a line at x=−4 m and x=+4 m. A test mass is moved along the line.",["x / m","net field direction"],[[-8,"right"],[-2,"left"],[0,"zero"],[2,"right"],[8,"left"]],[
{q:"Explain why the field is zero at x=0.",m:1,ms:["equal field magnitudes act in opposite directions"]},
{q:"State why gravitational potential is not zero at x=0.",m:1,ms:["potentials add as scalars and each contribution is negative"]},
{q:"Predict the direction of force on a test mass at x=2 m.",m:1,ms:["to the right"]},
{q:"State the principle used to combine the two fields.",m:1,ms:["vector superposition"]}]);
P(4,0,"The orbital periods of four moons around the same planet are measured.",["r / 10⁸ m","T / 10⁵ s"],[[1.0,0.70],[1.5,1.29],[2.0,1.98],[2.5,2.77]],[
{q:"State the power-law relationship predicted by Newtonian gravity.",m:1,ms:["T² proportional to r³"]},
{q:"Suggest a linearizing graph.",m:1,ms:["T² against r³"]},
{q:"State what can be determined from the gradient.",m:1,ms:["the planet mass via gradient=4π²/(GM)"]},
{q:"Explain why the moon masses do not appear in the ideal relation.",m:1,ms:["satellite mass cancels when gravitational force provides centripetal force"]}]);
P(5,0,"A student estimates the surface field strength of a planet from its mass and radius.",["quantity","value"],[["M",6.4e23],["R / m",3.2e6],["G",6.67e-11]],[
{q:"Calculate the surface gravitational field strength.",m:2,ms:["g=GM/R²≈4.17 m s⁻²"]},
{q:"Calculate the weight of a 12 kg object at the surface.",m:1,ms:["about 50 N"]},
{q:"State the main assumption used in applying g=GM/R².",m:1,ms:["planet is approximately spherical"]},
{q:"Predict the surface g if radius stayed fixed but mass doubled.",m:1,ms:["it would double"]}]);
P(6,1,"A numerical model gives gravitational potential around an isolated planet.",["r / 10⁷ m","V / MJ kg⁻¹"],[[1.0,-4.0],[2.0,-2.0],[4.0,-1.0],[8.0,-0.50]],[
{q:"State the relationship between V and r shown by the data.",m:1,ms:["V is proportional to −1/r"]},
{q:"Estimate GM from any row.",m:1,ms:["GM≈4.0×10¹³ m³ s⁻²"]},
{q:"State what the gradient of a V-versus-r curve represents locally.",m:1,ms:["−g in the radial direction / g=−dV/dr"]},
{q:"Explain why V approaches zero as r becomes very large.",m:1,ms:["zero potential is defined at infinity"]}]);
P(7,1,"A satellite of mass 500 kg occupies circular orbits around a planet with GM=4.0×10¹⁴ m³ s⁻².",["r / 10⁷ m","orbit"],[[1.0,"A"],[2.0,"B"],[4.0,"C"],[8.0,"D"]],[
{q:"Calculate the total energy in orbit A.",m:2,ms:["E=−GMm/(2r)=−1.0×10¹⁰ J"]},
{q:"State which orbit has the greatest total mechanical energy.",m:1,ms:["D"]},
{q:"Explain why moving from A to B requires external energy.",m:1,ms:["total orbital energy must increase / become less negative"]},
{q:"State how orbital speed changes from A to B.",m:1,ms:["it decreases"]}]);
P(8,1,"A small spacecraft is launched radially from a moon. Air resistance is negligible.",["quantity","value"],[["moon mass / kg",7.4e22],["moon radius / m",1.74e6],["G",6.67e-11]],[
{q:"Write the energy condition for minimum escape speed.",m:1,ms:["½mv²−GMm/R=0"]},
{q:"Calculate the escape speed.",m:2,ms:["about 2.38×10³ m s⁻¹"]},
{q:"Explain why spacecraft mass cancels from the result.",m:1,ms:["both kinetic and gravitational potential energies are proportional to m"]},
{q:"State one reason the real launch speed may need to be larger.",m:1,ms:["atmospheric drag / rotation or trajectory constraints / engine losses"]}]);
P(9,1,"Gravitational potential is sampled along a line through a two-body system.",["x","V / arbitrary units"],[[-3,-5],[-2,-7],[-1,-12],[0,-9],[1,-12],[2,-7],[3,-5]],[
{q:"Identify where the potential gradient is approximately zero from the symmetric data.",m:1,ms:["near x=0"]},
{q:"State what this implies about the net field there.",m:1,ms:["net field is approximately zero"]},
{q:"Explain why the potential remains negative.",m:1,ms:["gravitational potential contributions from positive masses are negative with zero at infinity"]},
{q:"State whether zero field necessarily means zero potential.",m:1,ms:["no"]}]);
P(10,1,"A satellite's speed is measured after it is moved to a sequence of circular orbits.",["r / 10⁷ m","v² / 10⁷ m² s⁻²"],[[1,4.0],[2,2.0],[4,1.0],[5,0.80]],[
{q:"Use the data to verify v²r is approximately constant.",m:1,ms:["v²r≈4.0×10¹⁴ m³ s⁻²"]},
{q:"Identify the constant physically.",m:1,ms:["GM"]},
{q:"Estimate the central mass using G=6.67×10⁻¹¹ SI.",m:2,ms:["M≈6.0×10²⁴ kg"]},
{q:"State why the model assumes circular rather than elliptical motion.",m:1,ms:["the simple v²=GM/r relation applies directly to circular orbit"]}]);

/* 10 Paper 2 */
T(1,0,"A communications satellite moves in a circular orbit around Earth.",[
{q:"Draw or describe the force acting on the satellite and its direction.",m:1,ms:["gravitational force directed toward Earth's centre"]},
{q:"Derive v=√(GM/r) from Newton's law and circular motion.",m:2,ms:["equate GMm/r²=mv²/r and solve for v"]},
{q:"Explain why the satellite is accelerating even at constant speed.",m:1,ms:["its velocity direction changes continuously"]},
{q:"Predict how the period changes if orbital radius is increased.",m:1,ms:["period increases"]}]);
T(2,0,"A spacecraft travels from Earth toward the Moon along the line joining their centres.",[
{q:"Explain why there can be a point where the net gravitational field is zero.",m:1,ms:["Earth and Moon fields can be equal in magnitude and opposite in direction"]},
{q:"State whether gravitational potential is zero at that point.",m:1,ms:["not necessarily / generally no"]},
{q:"Explain why the zero-field point is closer to the Moon than Earth.",m:2,ms:["Moon has much smaller mass so equal field requires being closer to it"]},
{q:"State the principle used to find the net field.",m:1,ms:["superposition"]}]);
T(3,0,"A planet is modelled as a uniform sphere for motion outside its surface.",[
{q:"State the form of the external gravitational field.",m:1,ms:["same as a point mass M at the centre"]},
{q:"Explain how surface g depends on mass and radius.",m:2,ms:["g=GM/R², proportional to M and inversely proportional to R²"]},
{q:"Compare surface g for a planet with twice the mass and twice the radius.",m:1,ms:["half the original g"]},
{q:"State one limitation of the uniform-sphere model.",m:1,ms:["real planets can be non-spherical / non-uniform / rotating"]}]);
T(4,0,"Astronauts inside an orbiting spacecraft appear weightless.",[
{q:"Explain why this does not mean gravitational field strength is zero.",m:1,ms:["gravity supplies centripetal acceleration in orbit"]},
{q:"Explain apparent weightlessness in terms of normal contact force.",m:1,ms:["astronaut and spacecraft free-fall together, so supporting normal force is near zero"]},
{q:"State how orbital acceleration compares with local g.",m:1,ms:["it is the local gravitational acceleration for an ideal circular orbit"]},
{q:"Explain why a small object released inside remains near the astronaut.",m:1,ms:["both share nearly the same orbital acceleration"]}]);
T(5,0,"A newly discovered moon is observed in circular orbit around a planet.",[
{q:"Identify two measurements needed to estimate the planet's mass.",m:1,ms:["orbital radius and period"]},
{q:"Derive M=4π²r³/(GT²).",m:2,ms:["combine GMm/r²=mv²/r with v=2πr/T"]},
{q:"State why the moon mass cancels.",m:1,ms:["inertial and gravitational mass factors cancel"]},
{q:"Suggest one observational uncertainty.",m:1,ms:["radius / period / inclination uncertainty"]}]);
T(6,1,"A probe moves slowly outward from a planet and its gravitational potential energy changes.",[
{q:"State the expression U=−GMm/r.",m:1,ms:["U=−GMm/r"]},
{q:"Explain why U increases as the probe moves outward.",m:1,ms:["it becomes less negative as r increases"]},
{q:"State the work done by an external agent in a quasistatic outward move.",m:1,ms:["equal to the increase in gravitational potential energy"]},
{q:"Relate the radial field to potential.",m:1,ms:["g=−dV/dr"]}]);
T(7,1,"A satellite is moved from circular orbit r to circular orbit 2r.",[
{q:"Compare the initial and final orbital speeds.",m:1,ms:["v₂=v₁/√2"]},
{q:"Compare the initial and final kinetic energies.",m:1,ms:["K₂=K₁/2"]},
{q:"Compare the total mechanical energies.",m:1,ms:["E₂=E₁/2 in magnitude; final is less negative"]},
{q:"Explain why the transfer requires a positive energy input overall.",m:1,ms:["the final total energy is greater / less negative"]}]);
T(8,1,"A spacecraft is launched from the surface of a small airless planet.",[
{q:"Define escape speed.",m:1,ms:["minimum launch speed to reach infinity with zero final speed without further propulsion"]},
{q:"Derive vesc=√(2GM/R) using energy conservation.",m:2,ms:["set ½mv²−GMm/R=0"]},
{q:"Compare escape speed with circular orbital speed at the same radius.",m:1,ms:["vesc=√2 vcirc"]},
{q:"State why the result is independent of spacecraft mass.",m:1,ms:["mass cancels from the energy equation"]}]);
T(9,1,"A graph of gravitational potential V against distance r is available for a planet.",[
{q:"Explain how field strength can be obtained from the graph.",m:1,ms:["magnitude is the negative gradient, g=−dV/dr"]},
{q:"State where the field is strongest on the plotted curve.",m:1,ms:["where the magnitude of the slope is greatest"]},
{q:"Explain why equipotential surfaces never intersect.",m:1,ms:["a point cannot have two different scalar potential values"]},
{q:"State the angle between field lines and equipotential surfaces.",m:1,ms:["90°"]}]);
T(10,1,"Two stars form a widely separated binary system and may be treated as point masses.",[
{q:"Write an expression for gravitational potential at a point due to both stars.",m:1,ms:["V=−GM₁/r₁−GM₂/r₂"]},
{q:"Explain why potentials add algebraically but fields add vectorially.",m:1,ms:["potential is scalar while field has direction"]},
{q:"State a condition for a zero-field point on the line between the stars.",m:1,ms:["GM₁/r₁²=GM₂/r₂² with opposite directions"]},
{q:"Explain why the potential at that zero-field point is generally not zero.",m:1,ms:["both negative scalar contributions remain"]}]);
})();