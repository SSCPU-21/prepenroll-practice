/* PrepEnroll™ IB Physics D.2 Electric and magnetic fields — 100 assessable prompts */
(function(){"use strict";
const sub="D.2";
function M(i,x,q,o,a,e){MCQ.push({t:"D",s:sub,x,uid:"PE-D2-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,x,intro,head,rows,parts){P1B.push({t:"D",s:sub,x,uid:"PE-D2-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,x,intro,parts){P2.push({t:"D",s:sub,x,uid:"PE-D2-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,0,"The magnitude of the electrostatic force between point charges Q and q separated by r in vacuum is",["k|Qq|/r²","k|Qq|/r","k(Q+q)/r²","k|Qq|r²"],0,"Coulomb's law has an inverse-square dependence.");
M(2,0,"Electric field strength at a point is defined as",["force per unit positive test charge","energy per unit mass","charge per unit force","work times charge"],0,"E=F/q for a small positive test charge.");
M(3,0,"The electric field around an isolated positive point charge is directed",["radially outward","radially inward","tangentially","clockwise"],0,"A positive test charge is repelled.");
M(4,0,"The electric field around an isolated negative point charge is directed",["radially inward","radially outward","parallel everywhere","zero everywhere"],0,"A positive test charge is attracted.");
M(5,0,"If distance from a point charge doubles, electric field magnitude becomes",["one quarter","one half","twice","four times"],0,"E=kQ/r².");
M(6,0,"At the midpoint between two equal positive point charges, the net electric field is",["zero","toward either charge","maximum","undefined"],0,"Equal and opposite field vectors cancel.");
M(7,0,"At the midpoint between equal and opposite charges, the electric field is directed",["from the positive charge toward the negative charge","from negative to positive","perpendicular to the line joining them","zero"],0,"The two field contributions point the same way between opposite charges.");
M(8,0,"The force on a charge q placed in electric field E is",["qE","E/q","q/E","qE²"],0,"F=qE.");
M(9,0,"A charged particle moves through a magnetic field parallel to the field direction. The magnetic force is",["zero","qvB","maximum","qB/v"],0,"F=qvB sinθ and θ=0.");
M(10,0,"The magnitude of magnetic force on charge q moving with speed v perpendicular to field B is",["|q|vB","|q|B/v","|q|v/B","|q|v²B"],0,"F=|q|vB for perpendicular motion.");
M(11,0,"The magnetic force on a moving charge is always",["perpendicular to both v and B","parallel to v","parallel to B","opposite to v"],0,"Direction follows the cross product qv×B.");
M(12,0,"A straight current-carrying wire in a uniform magnetic field experiences greatest force when the wire is",["perpendicular to the field","parallel to the field","at 0° only","not carrying current"],0,"F=BIL sinθ.");
M(13,1,"Electric potential at distance r from an isolated point charge Q is",["kQ/r","kQ/r²","−kQ/r always","kQr"],0,"V=kQ/r with sign set by Q.");
M(14,1,"The relation between electric field and electric potential in one dimension is",["E=−dV/dx","E=dV/dx","E=Vx","E=V/x²"],0,"Electric field points toward decreasing electric potential.");
M(15,1,"Electric potential energy of charge q at potential V is",["qV","V/q","q/V","qV²"],0,"U=qV.");
M(16,1,"The work done by the electric field when a positive charge moves through a potential drop ΔV is related to",["W=−qΔV","W=qΔV always positive","W=ΔV/q","W=q/ΔV"],0,"ΔU=qΔV and Wfield=−ΔU.");
M(17,1,"Magnetic flux density B can be defined from the force on a perpendicular current-carrying wire by",["B=F/(IL)","B=FIL","B=F I/L","B=L/(FI)"],0,"For θ=90°, F=BIL.");
M(18,1,"Two long parallel wires carrying currents in the same direction",["attract","repel","experience no force","rotate but do not translate"],0,"Parallel currents in the same direction attract.");
M(19,1,"The magnetic field around a long straight current-carrying wire varies with distance r as",["1/r","1/r²","r","r²"],0,"B=μ₀I/(2πr).");
M(20,1,"At a point where electric potential is zero, electric field strength",["need not be zero","must be zero","must be infinite","must be parallel to an equipotential"],0,"Potential is scalar; zero potential does not imply zero gradient.");

/* 10 Paper 1B */
P(1,0,"The force between two small charged spheres is measured as their separation changes.",["r / cm","F / mN"],[[2,9.0],[3,4.0],[4,2.25],[6,1.0]],[
{q:"Identify the relationship between F and r.",m:1,ms:["F is proportional to 1/r²"]},
{q:"Suggest a linearizing graph.",m:1,ms:["F against 1/r²"]},
{q:"Predict F at r=12 cm.",m:1,ms:["about 0.25 mN"]},
{q:"State one assumption in applying Coulomb's law.",m:1,ms:["spheres behave as point charges / separation is large compared with size"]}]);
P(2,0,"A positive test charge is moved along a line between two fixed positive charges of unequal magnitude.",["position","net E direction"],[["near left charge","right"],["between, left side","right"],["balance point","zero"],["between, right side","left"],["near right charge","left"]],[
{q:"Explain why a zero-field point can exist between like charges.",m:1,ms:["their field contributions oppose and can become equal"]},
{q:"State whether the zero-field point is closer to the smaller or larger charge.",m:1,ms:["closer to the smaller charge"]},
{q:"State the principle used to find the net field.",m:1,ms:["vector superposition"]},
{q:"Explain why the potential at the balance point is positive.",m:1,ms:["both positive charges contribute positive scalar potential"]}]);
P(3,0,"A current-carrying wire is placed at different angles to a uniform magnetic field.",["angle θ","F / mN"],[[0,0],[30,5.0],[60,8.7],[90,10.0]],[
{q:"State the expected relationship between F and θ.",m:1,ms:["F is proportional to sinθ"]},
{q:"Identify the maximum-force orientation.",m:1,ms:["90° / perpendicular"]},
{q:"Predict F at 150°.",m:1,ms:["about 5.0 mN"]},
{q:"State one quantity that must remain constant in this test.",m:1,ms:["B / I / wire length"]}]);
P(4,0,"A moving positive ion enters uniform magnetic fields with the same speed but different orientations.",["case","angle v-B","force"],[["A","0°","0"],["B","30°","0.5Fmax"],["C","90°","Fmax"],["D","180°","0"]],[
{q:"State the force law used.",m:1,ms:["F=qvB sinθ"]},
{q:"Explain why no magnetic work is done on the ion.",m:1,ms:["magnetic force is perpendicular to velocity"]},
{q:"Identify the case with maximum curvature.",m:1,ms:["C"]},
{q:"State how the direction of force changes for a negative ion.",m:1,ms:["it reverses"]}]);
P(5,0,"A Hall probe measures magnetic flux density at distances from a long straight wire carrying steady current.",["r / cm","B / μT"],[[1,40],[2,20],[4,10],[5,8]],[
{q:"State the relationship between B and r.",m:1,ms:["B is proportional to 1/r"]},
{q:"Suggest a linearizing graph.",m:1,ms:["B against 1/r"]},
{q:"Predict B at 10 cm.",m:1,ms:["about 4 μT"]},
{q:"State how B changes if current doubles.",m:1,ms:["B doubles"]}]);
P(6,1,"Electric potential is measured along a straight line through a region.",["x / m","V / V"],[[0,12],[1,9],[2,6],[3,3],[4,0]],[
{q:"Determine the electric field magnitude if the gradient is constant.",m:1,ms:["3 V m⁻¹ / 3 N C⁻¹"]},
{q:"State the direction of the electric field.",m:1,ms:["toward increasing x / toward lower potential"]},
{q:"Calculate the change in potential energy of a +2 C charge from x=1 m to x=3 m.",m:2,ms:["ΔU=qΔV=2(3−9)=−12 J"]},
{q:"State whether the field is uniform.",m:1,ms:["yes, constant potential gradient"]}]);
P(7,1,"Potential around an isolated positive charge is sampled at several radii.",["r / m","V / kV"],[[0.10,90],[0.20,45],[0.30,30],[0.50,18]],[
{q:"Identify the V-r relationship.",m:1,ms:["V is proportional to 1/r"]},
{q:"Estimate kQ from the data.",m:1,ms:["about 9.0×10³ V m"]},
{q:"Use k=9.0×10⁹ to estimate Q.",m:1,ms:["about 1.0 μC"]},
{q:"Explain why V remains positive.",m:1,ms:["source charge is positive and zero is defined at infinity"]}]);
P(8,1,"Two long parallel wires carry currents I₁ and I₂ and are separated by distance d.",["I₁ / A","I₂ / A","d / cm"],[[2,3,4],[4,3,4],[4,6,4],[4,6,8]],[
{q:"State how force per unit length depends on I₁ and I₂.",m:1,ms:["proportional to I₁I₂"]},
{q:"State how force per unit length depends on d.",m:1,ms:["inversely proportional to d"]},
{q:"Compare the force per unit length in rows 2 and 3.",m:1,ms:["row 3 is twice row 2"]},
{q:"State the force direction if currents are opposite.",m:1,ms:["repulsive"]}]);
P(9,1,"A map of equipotential lines is obtained between shaped electrodes.",["location","spacing of equipotentials"],[["P","close"],["Q","medium"],["R","wide"],["S","close"]],[
{q:"Identify where electric field magnitude is greatest.",m:1,ms:["P or S"]},
{q:"Explain the reasoning.",m:1,ms:["E is the potential gradient; closer equipotentials mean larger gradient"]},
{q:"State the angle between an electric field line and an equipotential.",m:1,ms:["90°"]},
{q:"Explain why no work is done moving a charge along an equipotential.",m:1,ms:["ΔV=0 so ΔU=qΔV=0"]}]);
P(10,1,"A long straight wire carries different currents while B is measured at fixed radius.",["I / A","B / μT"],[[1,5],[2,10],[3,15],[4,20]],[
{q:"Describe the B-I relationship.",m:1,ms:["directly proportional"]},
{q:"State the graph feature that supports this.",m:1,ms:["straight line through the origin"]},
{q:"Predict B at 6 A.",m:1,ms:["30 μT"]},
{q:"State one experimental precaution.",m:1,ms:["keep probe distance and orientation fixed / subtract background field"]}]);

/* 10 Paper 2 */
T(1,0,"Two small charged spheres are separated in vacuum.",[
{q:"State Coulomb's law in words or symbols.",m:1,ms:["F=k|Qq|/r²"]},
{q:"Explain how the direction of force depends on the signs of the charges.",m:1,ms:["like charges repel; unlike charges attract"]},
{q:"Predict the force change if separation triples.",m:1,ms:["force becomes 1/9 as large"]},
{q:"State one limitation of the point-charge model.",m:1,ms:["finite-size charge distribution may matter"]}]);
T(2,0,"A positive charge enters a region of uniform magnetic field perpendicular to its velocity.",[
{q:"State the magnetic force magnitude.",m:1,ms:["F=qvB"]},
{q:"State the direction rule used to find the force.",m:1,ms:["right-hand rule for qv×B; reverse for negative charge"]},
{q:"Explain why the particle's speed remains constant.",m:1,ms:["magnetic force is perpendicular to motion and does no work"]},
{q:"State the qualitative path.",m:1,ms:["circular arc"]}]);
T(3,0,"A straight wire carrying current I lies in a uniform magnetic field.",[
{q:"Write the force expression.",m:1,ms:["F=BIL sinθ"]},
{q:"State the orientation for zero force.",m:1,ms:["wire/current parallel or antiparallel to B"]},
{q:"State the orientation for maximum force.",m:1,ms:["wire/current perpendicular to B"]},
{q:"Explain microscopically why the wire feels a force.",m:1,ms:["moving charge carriers experience magnetic force and transfer it to the lattice"]}]);
T(4,0,"Two identical positive charges are fixed symmetrically about the origin.",[
{q:"State the net electric field at the origin.",m:1,ms:["zero"]},
{q:"State whether the electric potential at the origin is zero.",m:1,ms:["no; it is positive"]},
{q:"Explain the difference using scalar and vector ideas.",m:2,ms:["field contributions cancel vectorially but positive potentials add scalarly"]},
{q:"State the work needed to move a positive test charge along an equipotential through the origin.",m:1,ms:["zero"]}]);
T(5,0,"A Hall probe is used to map the magnetic field around a long straight wire.",[
{q:"State the expected shape of field lines.",m:1,ms:["concentric circles around the wire"]},
{q:"State how direction is determined.",m:1,ms:["right-hand grip rule"]},
{q:"State how field magnitude depends on current and radius.",m:2,ms:["B is proportional to I and inversely proportional to r"]},
{q:"Suggest one way to reduce background-field error.",m:1,ms:["zero/calibrate probe or reverse current and average"]}]);
T(6,1,"A positive charge moves between two points of different electric potential.",[
{q:"Define electric potential difference.",m:1,ms:["work done / energy transferred per unit charge"]},
{q:"Write the relation between potential energy and potential.",m:1,ms:["ΔU=qΔV"]},
{q:"Explain the sign of work done by the electric field for motion toward lower potential.",m:1,ms:["field does positive work on a positive charge as electric potential energy decreases"]},
{q:"Relate electric field to the spatial potential gradient.",m:1,ms:["E=−dV/dx in one dimension"]}]);
T(7,1,"A positive point charge Q produces a radial electric field.",[
{q:"Write expressions for E and V at radius r.",m:2,ms:["E=kQ/r²; V=kQ/r"]},
{q:"Explain why E falls faster with r than V.",m:1,ms:["E has inverse-square dependence while V has inverse-first-power dependence"]},
{q:"State the direction of E.",m:1,ms:["radially outward"]},
{q:"Explain how E can be obtained from a V-r graph.",m:1,ms:["E equals minus the radial gradient of V"]}]);
T(8,1,"Two long parallel wires are separated by distance d and carry currents in the same direction.",[
{q:"State whether the wires attract or repel.",m:1,ms:["attract"]},
{q:"Explain the interaction in terms of the field from one wire acting on the current in the other.",m:2,ms:["each wire creates B at the other; F=BIL gives force toward the other wire"]},
{q:"State how force per unit length changes if both currents double.",m:1,ms:["it becomes four times larger"]},
{q:"State how force per unit length changes if separation doubles.",m:1,ms:["it halves"]}]);
T(9,1,"A region contains both electric and magnetic fields, but this question concerns the fields themselves rather than particle trajectories.",[
{q:"State one key difference between electric and magnetic force on a stationary charge.",m:1,ms:["electric force can act; magnetic force is zero for a stationary charge"]},
{q:"State whether an isolated magnetic monopole is required in the standard model used here.",m:1,ms:["no"]},
{q:"Describe the magnetic field around a straight current.",m:1,ms:["closed concentric circles"]},
{q:"Explain why magnetic field lines do not begin or end on ordinary charges.",m:1,ms:["magnetic field lines form closed loops / no isolated magnetic monopoles in this model"]}]);
T(10,1,"An electric field is represented by equipotential contours.",[
{q:"Describe how to draw electric field lines from the equipotentials.",m:1,ms:["perpendicular to equipotentials and toward lower potential"]},
{q:"State where the field is strongest.",m:1,ms:["where equipotential spacing is smallest"]},
{q:"Explain why equipotential contours cannot cross.",m:1,ms:["a point cannot have two values of potential"]},
{q:"State the work done moving charge q between two points on the same contour.",m:1,ms:["zero"]}]);
})();