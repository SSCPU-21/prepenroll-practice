/* PrepEnroll™ IB Physics B.5 Current and circuits — 100 assessable prompts */
(function(){"use strict";
const sub="B.5", x=0;
function M(i,q,o,a,e){MCQ.push({t:"B",s:sub,x,uid:"PE-B5-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"B",s:sub,x,uid:"PE-B5-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"B",s:sub,x,uid:"PE-B5-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A charge of 12 C passes a point in 3.0 s. What is the current?",["4.0 A","36 A","0.25 A","9.0 A"],0,"I=Δq/Δt.");
M(2,"A device transfers 24 J of energy when 6.0 C of charge passes through it. The potential difference is",["4.0 V","144 V","0.25 V","18 V"],0,"V=W/q.");
M(3,"A 12 V supply drives 3.0 A through a resistor. Its resistance is",["4.0 Ω","36 Ω","0.25 Ω","9.0 Ω"],0,"R=V/I.");
M(4,"Two resistors 3 Ω and 5 Ω are connected in series. Their equivalent resistance is",["8 Ω","1.875 Ω","15 Ω","2 Ω"],0,"Series resistances add.");
M(5,"Two resistors 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is",["2 Ω","9 Ω","3 Ω","18 Ω"],0,"1/Rp=1/6+1/3.");
M(6,"In a series circuit, which quantity is the same through all components?",["current","potential difference","resistance","power"],0,"Charge has one path, so current is common.");
M(7,"In a parallel circuit, which quantity is the same across each branch?",["potential difference","current","resistance","charge flow rate in every branch"],0,"Branches share the same pair of nodes.");
M(8,"A resistor carries current I at potential difference V. Its electrical power is",["VI","V/I","I/V","V+I"],0,"P=VI.");
M(9,"A resistor has resistance R and current I. The power dissipated is",["I²R","IR","I/R","R/I²"],0,"Using V=IR in P=VI gives P=I²R.");
M(10,"A resistor has resistance R and potential difference V. The power dissipated is",["V²/R","VR","R/V²","V/R²"],0,"Using I=V/R in P=VI gives P=V²/R.");
M(11,"A cell has emf ε and internal resistance r. When current I flows, its terminal potential difference while discharging is",["ε−Ir","ε+Ir","Ir only","ε/I"],0,"Some emf is lost across the internal resistance.");
M(12,"The emf of a source is best described as",["energy supplied per unit charge by the source","current supplied per unit resistance","power dissipated per unit charge","charge stored per unit time"],0,"emf is work/energy supplied per unit charge.");
M(13,"A voltmeter should ideally have",["very large resistance","zero resistance","the same resistance as the load","negative resistance"],0,"A large resistance minimizes current drawn by the voltmeter.");
M(14,"An ammeter should ideally have",["very small resistance","very large resistance","infinite emf","zero current"],0,"A small resistance minimizes disturbance of circuit current.");
M(15,"A wire of fixed material and length has its cross-sectional area doubled. Its resistance becomes",["half as large","twice as large","four times as large","unchanged"],0,"R=ρL/A.");
M(16,"A wire of fixed material and area has its length doubled. Its resistance becomes",["twice as large","half as large","four times as large","unchanged"],0,"R=ρL/A.");
M(17,"For an ohmic conductor at constant temperature, the V–I graph is",["a straight line through the origin","a horizontal line","a vertical line","necessarily curved"],0,"Ohm's law gives V=IR with constant R.");
M(18,"A filament lamp's resistance rises as it gets hotter. Its I–V graph is therefore typically",["non-linear","a straight line with constant gradient","a vertical line","independent of temperature"],0,"Temperature-dependent resistance makes the relation non-ohmic.");
M(19,"A variable resistor used in series can control current by",["changing the total circuit resistance","changing the charge on each electron","changing the emf of the cell itself","removing all internal resistance"],0,"Changing resistance changes current for a given supply emf.");
M(20,"A solar cell in a circuit is primarily an example of",["an energy source converting radiation energy to electrical energy","a passive resistor only","a device that destroys charge","an ideal conductor"],0,"Solar cells are energy sources in circuits.");

/* 10 Paper 1B */
P(1,"A resistor is tested at several potential differences while its temperature is kept approximately constant.",["V / V","I / A"],[[1.0,0.20],[2.0,0.40],[3.0,0.60],[4.0,0.80],[5.0,1.00]],[
{q:"Describe the relationship between V and I.",m:1,ms:["directly proportional"]},
{q:"Use the V–I data to calculate the resistor's resistance.",m:1,ms:["R=V/I=5 Ω"]},
{q:"State what the gradient of a V-against-I graph represents.",m:1,ms:["resistance"]},
{q:"Explain why temperature should be controlled.",m:1,ms:["resistance can change with temperature"]}]);
P(2,"A filament lamp is tested and current is recorded as voltage increases.",["V / V","I / A"],[[0,0],[2,0.50],[4,0.82],[6,1.05],[8,1.22]],[
{q:"State whether the lamp is ohmic over the full range.",m:1,ms:["no"]},
{q:"Explain how the data show its resistance increases.",m:2,ms:["V/I increases as voltage/current rise"]},
{q:"Explain the microscopic reason for the change.",m:2,ms:["higher temperature increases lattice vibrations and electron scattering"]},
{q:"State why using only the first data point cannot establish ohmic behaviour.",m:1,ms:["a relationship requires multiple points / resistance may change at larger current"]}]);
P(3,"The terminal voltage of a cell is measured for different currents while discharging.",["I / A","Vterminal / V"],[[0.0,1.50],[0.5,1.44],[1.0,1.38],[1.5,1.32],[2.0,1.26]],[
{q:"State the expected linear equation.",m:1,ms:["V=ε−Ir"]},
{q:"Determine the emf from the data.",m:1,ms:["about 1.50 V"]},
{q:"Determine the internal resistance.",m:2,ms:["r=−gradient≈0.12 Ω"]},
{q:"Explain why terminal voltage falls as current increases.",m:1,ms:["larger internal voltage drop Ir"]}]);
P(4,"Different lengths of the same uniform wire are measured at constant temperature.",["L / m","R / Ω"],[[0.20,0.80],[0.40,1.60],[0.60,2.40],[0.80,3.20],[1.00,4.00]],[
{q:"Describe the relationship.",m:1,ms:["R proportional to L"]},
{q:"State what the gradient of R against L represents.",m:1,ms:["ρ/A"]},
{q:"Explain why using the same wire controls two important variables.",m:2,ms:["material/resistivity and cross-sectional area remain fixed"]},
{q:"State one method to reduce contact-resistance effects.",m:1,ms:["four-wire method / subtract lead resistance / clean secure contacts"]}]);
P(5,"Wires of the same material and length have different cross-sectional areas.",["A / mm²","R / Ω"],[[0.25,8.0],[0.50,4.0],[1.00,2.0],[1.50,1.33],[2.00,1.00]],[
{q:"State a linearizing graph for these data.",m:1,ms:["R against 1/A"]},
{q:"State the relationship supported.",m:1,ms:["R proportional to 1/A"]},
{q:"Explain physically why a thicker wire has lower resistance.",m:2,ms:["more charge carriers can move in parallel / larger conducting cross section"]},
{q:"State one reason accurate area measurement is difficult for thin wire.",m:1,ms:["diameter uncertainty is amplified because area depends on diameter squared"]}]);
P(6,"Two resistors are connected in parallel and branch currents are measured.",["branch","R / Ω","I / A"],[["1",4,3.0],["2",6,2.0],["3",12,1.0]],[
{q:"Determine the common potential difference across the branches.",m:1,ms:["12 V"]},
{q:"Calculate the total current.",m:1,ms:["6.0 A"]},
{q:"Determine the equivalent resistance.",m:1,ms:["2.0 Ω"]},
{q:"Explain why the lowest-resistance branch carries the largest current.",m:1,ms:["same V across each branch and I=V/R"]}]);
P(7,"A battery powers different external load resistances. The battery has internal resistance.",["Rload / Ω","I / A"],[[1,2.40],[2,1.50],[3,1.09],[5,0.71],[8,0.46]],[
{q:"Explain why current does not simply equal ε/Rload.",m:1,ms:["internal resistance contributes to total resistance"]},
{q:"State the governing relation.",m:1,ms:["I=ε/(R+r)"]},
{q:"Describe the trend as load resistance increases.",m:1,ms:["current decreases"]},
{q:"Suggest a graph transformation that can be used to obtain ε and r.",m:2,ms:["plot 1/I against R: 1/I=(R+r)/ε"]}]);
P(8,"A resistor's power is measured as current changes.",["I / A","P / W"],[[0.5,1.0],[1.0,4.0],[1.5,9.0],[2.0,16.0],[2.5,25.0]],[
{q:"State the relationship between P and I.",m:1,ms:["P proportional to I²"]},
{q:"Specify the axes for a straight-line test of the predicted power–current relation.",m:1,ms:["P against I²"]},
{q:"Use the power–current data to infer the resistor's resistance.",m:1,ms:["R=P/I²=4 Ω"]},
{q:"Explain why heating may eventually invalidate constant-R behaviour.",m:1,ms:["resistance can change as temperature rises"]}]);
P(9,"A circuit uses two series resistors and the potential difference across each is measured.",["R / Ω","V / V"],[[2,2.0],[4,4.0],[6,6.0],[8,8.0]],[
{q:"State what is common to series components in this comparison.",m:1,ms:["current"]},
{q:"Determine the current from the data.",m:1,ms:["I=V/R=1.0 A"]},
{q:"Explain why voltage division is proportional to resistance.",m:1,ms:["V=IR with common I"]},
{q:"State how the total supply voltage is obtained for any two chosen series resistors.",m:1,ms:["add their voltage drops"]}]);
P(10,"The output of a small solar cell is measured at different load currents.",["I / A","V / V"],[[0.0,0.62],[0.2,0.58],[0.4,0.50],[0.6,0.38],[0.8,0.20]],[
{q:"Calculate output power at I=0.4 A.",m:1,ms:["P=IV=0.20 W"]},
{q:"Explain why maximum power does not occur at open circuit.",m:1,ms:["I=0, so P=0"]},
{q:"Explain why maximum power does not occur at short-circuit-like high current where V is near zero.",m:1,ms:["V is small, so P=IV is small"]},
{q:"State how the maximum-power operating point can be found from the table.",m:1,ms:["calculate IV for each row and choose the largest"]}]);

/* 10 Paper 2 */
T(1,"A cell of emf ε and internal resistance r is connected to an external resistor R.",[
{q:"Write the current in the circuit.",m:1,ms:["I=ε/(R+r)"]},
{q:"Write the terminal potential difference.",m:1,ms:["V=IR=ε−Ir"]},
{q:"Explain where energy is dissipated inside the source.",m:1,ms:["in the internal resistance"]},
{q:"State how terminal voltage changes as R becomes very large.",m:1,ms:["I approaches zero, so terminal voltage approaches ε"]}]);
T(2,"Three resistors are connected in series to an ideal supply.",[
{q:"State the current relationship for the resistors.",m:1,ms:["same current through all"]},
{q:"Write the equivalent resistance.",m:1,ms:["Req=R1+R2+R3"]},
{q:"Derive the potential-divider relation for one resistor.",m:2,ms:["Vi=IRi and Vs=IΣR, so Vi/Vs=Ri/ΣR"]},
{q:"Explain what happens to total current if one series resistance increases.",m:1,ms:["total resistance rises, so current falls"]}]);
T(3,"Three resistors are connected in parallel across an ideal supply.",[
{q:"State the potential-difference relationship.",m:1,ms:["same voltage across every branch"]},
{q:"Write the current-conservation relation.",m:1,ms:["Itotal=I1+I2+I3"]},
{q:"Derive the equivalent-resistance relation.",m:2,ms:["using Ii=V/Ri gives 1/Req=Σ1/Ri"]},
{q:"Explain why adding another parallel branch decreases equivalent resistance.",m:1,ms:["it provides an additional current path at the same voltage"]}]);
T(4,"A cylindrical wire has length L, area A and resistivity ρ.",[
{q:"Write the resistance equation.",m:1,ms:["R=ρL/A"]},
{q:"Predict the effect of doubling both L and A.",m:1,ms:["R remains unchanged"]},
{q:"Explain why resistivity is a material property rather than a geometric property.",m:1,ms:["geometry is separated into L/A; ρ characterizes the material at stated conditions"]},
{q:"State one factor besides material that can affect resistivity.",m:1,ms:["temperature"]}]);
T(5,"A resistor converts electrical energy to thermal energy while carrying steady current.",[
{q:"Write the electrical power in terms of V and I.",m:1,ms:["P=VI"]},
{q:"Use Ohm's law to obtain P=I²R.",m:1,ms:["substitute V=IR"]},
{q:"Use Ohm's law to obtain P=V²/R.",m:1,ms:["substitute I=V/R"]},
{q:"Explain why a fuse wire heats strongly when current becomes excessive.",m:1,ms:["power heating increases approximately as I²R"]}]);
T(6,"A student measures the emf and internal resistance of a cell using a variable external resistor.",[
{q:"State the two quantities that should be measured for several settings.",m:1,ms:["current and terminal voltage"]},
{q:"State the graph to plot.",m:1,ms:["terminal voltage V against current I"]},
{q:"State how emf is obtained.",m:1,ms:["y-intercept"]},
{q:"State how internal resistance is obtained.",m:1,ms:["magnitude of negative gradient"]}]);
T(7,"A filament lamp and a fixed resistor are connected separately to variable supplies.",[
{q:"Explain why the fixed resistor may show a straight V–I graph.",m:1,ms:["its resistance remains approximately constant at controlled temperature"]},
{q:"Explain why the lamp graph curves.",m:2,ms:["current heats filament; increased lattice vibration raises resistance"]},
{q:"State how instantaneous resistance is found at a chosen operating point.",m:1,ms:["R=V/I at that point"]},
{q:"Explain why the slope of an I-against-V graph is not simply resistance.",m:1,ms:["its local/overall slope corresponds to conductance-like behaviour; resistance is V/I unless specified differential resistance"]}]);
T(8,"A source delivers current to a load and both useful output power and internal heating are considered.",[
{q:"Write useful load power.",m:1,ms:["Pload=I²R"]},
{q:"Write internal power loss.",m:1,ms:["Pinternal=I²r"]},
{q:"Write total power supplied by the source.",m:1,ms:["Psource=εI"]},
{q:"Show the energy-rate balance.",m:2,ms:["εI=I²R+I²r using ε=I(R+r)"]}]);
T(9,"A solar cell charges a battery through a resistor.",[
{q:"Identify the main energy conversion in the solar cell.",m:1,ms:["radiation energy to electrical energy"]},
{q:"State the role of potential difference in transferring energy to charge.",m:1,ms:["V=W/q gives energy transferred per unit charge"]},
{q:"Explain why some electrical energy is dissipated in the resistor.",m:1,ms:["collisions transfer energy to the lattice as thermal energy"]},
{q:"State one advantage and one limitation of solar cells as an energy source.",m:2,ms:["renewable/no fuel during operation; intermittent/depends on illumination/area/storage"]}]);
T(10,"A potential divider consists of a fixed resistor in series with a variable resistor across a supply.",[
{q:"Write the total current in terms of the two resistances.",m:1,ms:["I=Vs/(Rfixed+Rvar)"]},
{q:"Write the output voltage across the variable resistor.",m:1,ms:["Vout=Vs Rvar/(Rfixed+Rvar)"]},
{q:"Explain how changing Rvar controls Vout.",m:1,ms:["it changes the fraction of the total series voltage across that resistor"]},
{q:"State one effect of connecting a low-resistance load across the output.",m:2,ms:["loading changes the effective resistance and reduces/alters the expected divider voltage"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("B.5 prompt count "+prompts);
})();