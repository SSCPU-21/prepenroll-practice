/* PrepEnroll™ IB Physics B.3 Gas laws — 100 assessable prompts */
(function(){"use strict";
const sub="B.3", x=0;
function M(i,q,o,a,e){MCQ.push({t:"B",s:sub,x,uid:"PE-B3-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"B",s:sub,x,uid:"PE-B3-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"B",s:sub,x,uid:"PE-B3-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A force of 240 N acts normally on an area of 0.080 m². What pressure is produced?",["3.0 kPa","19.2 kPa","0.33 kPa","300 kPa"],0,"P=F/A.");
M(2,"One mole contains",["Avogadro's number of particles","one particle","R particles","kB particles"],0,"n=N/NA.");
M(3,"For a fixed amount of ideal gas at constant temperature, if volume doubles the pressure becomes",["half as large","twice as large","four times as large","unchanged"],0,"PV=constant for an isothermal change.");
M(4,"A fixed amount of gas is heated at constant volume from 300 K to 450 K. Its pressure becomes",["1.5 times larger","0.67 times as large","2.25 times larger","unchanged"],0,"At constant volume P∝T.");
M(5,"A fixed amount of gas expands at constant pressure while absolute temperature doubles. Its volume becomes",["twice as large","half as large","four times as large","unchanged"],0,"At constant pressure V∝T.");
M(6,"Which equation applies to an ideal gas containing N molecules?",["PV=NkBT","PV=mcΔT","P=σT⁴","PV=nL"],0,"The microscopic ideal-gas law is PV=NkBT.");
M(7,"At fixed temperature, increasing gas density while maintaining ideal behaviour tends to",["increase pressure","decrease pressure","leave pressure unchanged","make molecular speed zero"],0,"P=(1/3)ρ<v²> and <v²> is set by temperature.");
M(8,"The pressure of an ideal gas arises microscopically from",["momentum changes when molecules collide with container walls","gravitational attraction between molecules and walls only","molecules remaining stationary","thermal radiation pressure only"],0,"Wall collisions transfer momentum and produce force.");
M(9,"At the same temperature, the average translational kinetic energy of molecules of two different ideal gases is",["the same","larger for the heavier gas","larger for the lighter gas","zero for both"],0,"Average translational kinetic energy depends only on absolute temperature.");
M(10,"For an ideal monatomic gas, internal energy is proportional to",["absolute temperature for a fixed amount of gas","pressure only","volume only","molecular diameter only"],0,"U=(3/2)nRT.");
M(11,"Which conditions make a real gas behave most nearly ideally?",["low density and relatively high temperature","high density and low temperature","near condensation","very strong intermolecular attraction"],0,"Ideal behaviour is best when particles are far apart and intermolecular effects are small.");
M(12,"A gas sample has P=2.0×10⁵ Pa, V=0.010 m³, T=400 K. Which expression gives its amount in moles?",["PV/(RT)","RT/(PV)","PVT/R","PR/(VT)"],0,"Rearrange PV=nRT.");
M(13,"On a P–V diagram, an isobaric process is represented by",["a horizontal line","a vertical line","a hyperbola","a line through the origin only"],0,"Constant pressure means P does not change.");
M(14,"On a P–V diagram, an isovolumetric process is represented by",["a vertical line","a horizontal line","a rectangular hyperbola","a circle"],0,"Constant volume means V does not change.");
M(15,"For a fixed amount of ideal gas, which combination remains constant between equilibrium states?",["PV/T","PT/V","VT/P","PVT"],0,"Combined gas law gives PV/T=constant.");
M(16,"If the rms molecular speed doubles while gas density is unchanged, kinetic-theory pressure becomes",["four times as large","twice as large","half as large","unchanged"],0,"P=(1/3)ρv_rms².");
M(17,"A sealed rigid container of ideal gas is warmed. Which quantity definitely increases?",["pressure","volume","number of molecules","density"],0,"At fixed V and N, P∝T.");
M(18,"A gas expands into a larger volume at constant temperature. In the ideal model, average molecular kinetic energy",["remains unchanged","increases","decreases","becomes zero"],0,"Average molecular kinetic energy depends only on T.");
M(19,"Why is absolute temperature required in ideal-gas equations?",["The proportionalities to molecular kinetic energy and gas variables refer to a zero at 0 K","Celsius is dimensionless","kelvin always equals pressure","gas laws apply only above 273 K"],0,"Thermodynamic temperature must be measured from absolute zero.");
M(20,"If the number of molecules in a fixed volume doubles at constant temperature, ideal-gas pressure becomes",["twice as large","half as large","four times as large","unchanged"],0,"P=NkBT/V.");

/* 10 Paper 1B */
P(1,"A fixed amount of gas is compressed slowly at constant temperature.",["V / cm³","P / kPa"],[[100,100],[80,125],[60,167],[50,200],[40,250]],[
{q:"State a transformed graph that should be linear.",m:1,ms:["P against 1/V"]},
{q:"State the relationship supported by the data.",m:1,ms:["P is inversely proportional to V"]},
{q:"Calculate PV for one row and comment on consistency.",m:2,ms:["approximately constant at 10000 kPa cm³"]},
{q:"Suggest why slow compression helps maintain the assumed condition.",m:1,ms:["allows thermal exchange so gas stays near constant temperature"]}]);
P(2,"A sealed rigid flask is heated and its pressure is recorded.",["T / K","P / kPa"],[[280,93],[300,100],[320,107],[340,113],[360,120]],[
{q:"State the expected relationship between P and T.",m:1,ms:["P proportional to T at fixed V and N"]},
{q:"State what a non-zero Celsius intercept would illustrate if Celsius temperature were plotted instead.",m:1,ms:["pressure extrapolates toward zero near -273 °C, showing need for absolute temperature"]},
{q:"Explain why a rigid flask is required.",m:1,ms:["keeps volume constant"]},
{q:"Suggest one reason the highest-temperature point may deviate from ideal proportionality.",m:1,ms:["temperature gradients / sensor lag / real-gas effects"]}]);
P(3,"A gas is heated at constant pressure while volume is measured.",["T / K","V / cm³"],[[250,100],[275,110],[300,120],[325,130],[350,140]],[
{q:"Describe the relationship.",m:1,ms:["V proportional to T"]},
{q:"State the value of V/T from the data.",m:1,ms:["0.40 cm³ K⁻¹"]},
{q:"Explain microscopically why volume must increase to keep pressure constant as T rises.",m:2,ms:["molecules move faster; larger volume reduces collision frequency per area enough to maintain pressure"]},
{q:"State one experimental condition needed to maintain constant pressure.",m:1,ms:["movable piston with fixed load / pressure regulator"]}]);
P(4,"Pressure and volume are measured for a fixed amount of gas during a process.",["state","P / kPa","V / L","T / K"],[["A",100,2.0,300],["B",150,2.0,450],["C",150,3.0,675],["D",90,3.0,405]],[
{q:"Use PV/T to check whether the states are consistent with the same amount of ideal gas.",m:2,ms:["PV/T is approximately constant for all rows"]},
{q:"Identify the A→B process type.",m:1,ms:["constant volume"]},
{q:"Identify the B→C process type.",m:1,ms:["constant pressure"]},
{q:"Explain why the table alone cannot show the exact path between states C and D.",m:1,ms:["end states do not specify the intermediate thermodynamic path"]}]);
P(5,"A student measures pressure at different gas densities while temperature is fixed.",["ρ / kg m⁻³","P / kPa"],[[0.6,52],[0.9,78],[1.2,104],[1.5,130],[1.8,156]],[
{q:"Describe the relationship.",m:1,ms:["P proportional to density"]},
{q:"Use kinetic theory to identify what the gradient is related to.",m:2,ms:["P=(1/3)ρv_rms², so gradient=(1/3)v_rms²"]},
{q:"Explain why v_rms remains approximately constant.",m:1,ms:["temperature is fixed"]},
{q:"State one condition under which this proportionality may fail.",m:1,ms:["high density / low temperature where real-gas interactions matter"]}]);
P(6,"The pressure of the same gas is measured over a wide temperature range at fixed density.",["T / K","P / kPa"],[[100,34],[200,67],[300,101],[400,135],[500,170]],[
{q:"State what the near-linear trend implies.",m:1,ms:["P proportional to T"]},
{q:"Relate the trend to average molecular kinetic energy.",m:2,ms:["higher T means larger average kinetic energy and larger momentum transfers to walls"]},
{q:"State how rms molecular speed scales with absolute temperature.",m:1,ms:["v_rms proportional to sqrt(T)"]},
{q:"Predict the speed factor when temperature rises from 100 K to 400 K.",m:1,ms:["2"]}]);
P(7,"A gas sample is studied at increasingly high pressure. The quantity PV/(nRT) is calculated.",["P / MPa","PV/(nRT)"],[[0.1,1.00],[1,1.01],[5,1.05],[10,1.12],[20,1.25]],[
{q:"State the ideal-gas value of PV/(nRT).",m:1,ms:["1"]},
{q:"Describe how behaviour changes with pressure.",m:1,ms:["deviation from ideality grows"]},
{q:"Suggest a microscopic reason for the deviation.",m:2,ms:["finite molecular volume and intermolecular forces become significant"]},
{q:"State another condition that generally increases real-gas deviation.",m:1,ms:["lower temperature / closer to condensation"]}]);
P(8,"Different numbers of moles of gas occupy the same volume at the same temperature.",["n / mol","P / kPa"],[[0.20,50],[0.40,100],[0.60,150],[0.80,200],[1.00,250]],[
{q:"State the relationship shown.",m:1,ms:["P proportional to n"]},
{q:"Use PV=nRT to explain the trend.",m:1,ms:["with V and T fixed, P=nRT/V"]},
{q:"State what the gradient of P against n represents.",m:1,ms:["RT/V"]},
{q:"Explain why doubling particle number doubles wall-collision rate approximately.",m:1,ms:["twice as many molecules collide while average molecular motion is unchanged"]}]);
P(9,"A monatomic ideal gas is heated at fixed amount. Its internal energy is inferred from measurements.",["T / K","U / kJ"],[[200,2.49],[250,3.12],[300,3.74],[350,4.36],[400,4.99]],[
{q:"Describe the relationship.",m:1,ms:["U proportional to T"]},
{q:"State the expression for U of a monatomic ideal gas.",m:1,ms:["U=(3/2)nRT"]},
{q:"State what the gradient of U against T represents.",m:1,ms:["3nR/2"]},
{q:"Explain why volume does not appear explicitly in this expression.",m:1,ms:["ideal-gas internal energy depends only on temperature for fixed amount"]}]);
P(10,"A piston compresses a gas rapidly and pressure, volume and temperature are recorded before and after.",["state","P / kPa","V / cm³","T / K"],[["initial",100,500,300],["final",240,250,360]],[
{q:"Calculate PV/T for each state and compare.",m:2,ms:["both are about 167 in consistent units"]},
{q:"State whether the end states are consistent with the ideal-gas law for constant N.",m:1,ms:["yes"]},
{q:"Explain why rapid compression need not be isothermal.",m:1,ms:["insufficient time for heat exchange; temperature rises"]},
{q:"State why the end-state consistency does not identify the detailed compression path.",m:1,ms:["the ideal-gas law constrains equilibrium states but not the process between them"]}]);

/* 10 Paper 2 */
T(1,"An ideal gas of amount n changes from state 1 to state 2.",[
{q:"Write the ideal-gas equation for each state.",m:1,ms:["P1V1=nRT1 and P2V2=nRT2"]},
{q:"Derive the combined-state relation.",m:2,ms:["P1V1/T1=P2V2/T2"]},
{q:"State the condition under which n cancels.",m:1,ms:["same sealed amount of gas"]},
{q:"Explain why pressures must be absolute rather than gauge values.",m:1,ms:["ideal-gas pressure is referenced to vacuum"]}]);
T(2,"A gas is contained in a cylinder with a frictionless movable piston carrying a fixed load.",[
{q:"Explain why the gas pressure can remain approximately constant while heating.",m:2,ms:["piston moves so gas pressure balances fixed external pressure"]},
{q:"Use PV=nRT to show that V is proportional to T.",m:1,ms:["V=nRT/P with n and P fixed"]},
{q:"Explain microscopically why the piston rises as temperature increases.",m:2,ms:["faster molecules would raise pressure, so expansion lowers collision rate until balance is restored"]},
{q:"State one real effect that could spoil constant-pressure behaviour.",m:1,ms:["piston friction / changing atmospheric pressure"]}]);
T(3,"An ideal gas is held in a rigid sealed tank and heated.",[
{q:"State which gas variables remain fixed.",m:1,ms:["V and N (or n)"]},
{q:"Derive P2/P1=T2/T1.",m:1,ms:["from PV=nRT"]},
{q:"Explain the pressure rise using molecular collisions.",m:2,ms:["higher molecular speeds give larger and/or more frequent momentum transfers to walls"]},
{q:"State how the internal energy changes for a monatomic ideal gas.",m:1,ms:["increases in proportion to T"]}]);
T(4,"A gas is compressed slowly while maintained in contact with a large thermal reservoir.",[
{q:"Identify the approximately constant variable.",m:1,ms:["temperature"]},
{q:"Derive the pressure-volume relation.",m:1,ms:["PV=constant"]},
{q:"Explain why slow compression helps achieve this condition.",m:2,ms:["heat generated by compression can flow to the reservoir as process proceeds"]},
{q:"Sketch qualitatively the path on a P–V diagram.",m:1,ms:["rectangular hyperbola with P increasing as V decreases"]}]);
T(5,"A laboratory determines Boltzmann's constant using gas pressure, number density and temperature.",[
{q:"Write PV=NkBT in terms of number density N/V.",m:1,ms:["P=(N/V)kBT"]},
{q:"State a graph that could determine kB.",m:2,ms:["P against (N/V)T; gradient is kB"]},
{q:"Explain why the number of molecules rather than moles is used in this form.",m:1,ms:["kB is per particle whereas R is per mole"]},
{q:"State the relation connecting R and kB.",m:1,ms:["R=NAkB"]}]);
T(6,"A cube contains an ideal gas whose molecules collide elastically with its walls.",[
{q:"Explain how one molecule transfers momentum to a wall during a normal collision.",m:2,ms:["normal velocity component reverses, so momentum change magnitude is 2mv_x"]},
{q:"Explain how many collisions produce a steady macroscopic pressure.",m:2,ms:["rapid random impacts give an average force per unit area"]},
{q:"State the kinetic-theory relation linking pressure and density.",m:1,ms:["P=(1/3)ρv_rms²"]},
{q:"Explain the factor 1/3 qualitatively.",m:1,ms:["random motion shares mean-square velocity equally among three spatial directions"]}]);
T(7,"Two ideal gases at the same temperature contain molecules of different masses.",[
{q:"Compare their average translational kinetic energies.",m:1,ms:["equal"]},
{q:"Derive how rms speed depends on molecular mass at fixed T using kinetic energy.",m:2,ms:["½m v_rms²=3kBT/2, so v_rms∝1/sqrt(m)"]},
{q:"State which gas has the larger rms speed.",m:1,ms:["the gas with lighter molecules"]},
{q:"Explain why equal average kinetic energy does not mean equal average speed.",m:1,ms:["kinetic energy contains mass as well as speed squared"]}]);
T(8,"A sample of monatomic ideal gas contains n moles at temperature T.",[
{q:"Write its internal energy.",m:1,ms:["U=(3/2)nRT"]},
{q:"Calculate the change in internal energy for a temperature increase ΔT.",m:1,ms:["ΔU=(3/2)nRΔT"]},
{q:"Explain why the expression contains no intermolecular potential-energy term.",m:1,ms:["ideal-gas model neglects intermolecular forces except during collisions"]},
{q:"State why this model becomes poor near condensation.",m:1,ms:["intermolecular forces and finite molecular volume become important"]}]);
T(9,"A gas at high pressure and low temperature deviates noticeably from PV=nRT.",[
{q:"State two assumptions of the ideal-gas model that become less accurate.",m:2,ms:["molecular volume negligible; intermolecular forces negligible"]},
{q:"Explain why high pressure makes finite molecular size important.",m:1,ms:["molecules occupy a larger fraction of the available volume"]},
{q:"Explain why low temperature makes intermolecular attraction more important.",m:1,ms:["kinetic energy is lower, so attractive interactions affect motion more strongly"]},
{q:"State conditions that would improve ideal behaviour.",m:1,ms:["lower pressure/lower density and higher temperature"]}]);
T(10,"A gas moves through states A, B and C on a P–V diagram.",[
{q:"Explain what each point on the diagram represents.",m:1,ms:["an equilibrium state with specified pressure and volume"]},
{q:"State how an isobaric segment is recognized.",m:1,ms:["horizontal line"]},
{q:"State how an isovolumetric segment is recognized.",m:1,ms:["vertical line"]},
{q:"Explain why temperature at each state can be inferred if n is known.",m:1,ms:["T=PV/(nR)"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("B.3 prompt count "+prompts);
})();