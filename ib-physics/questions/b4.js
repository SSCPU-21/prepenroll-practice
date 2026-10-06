/* PrepEnroll™ IB Physics B.4 Thermodynamics — HL only — 100 assessable prompts */
(function(){"use strict";
const sub="B.4", x=1;
function M(i,q,o,a,e){MCQ.push({t:"B",s:sub,x,uid:"PE-B4-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"B",s:sub,x,uid:"PE-B4-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"B",s:sub,x,uid:"PE-B4-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"Using the IB convention Q = ΔU + W, a gas absorbs 500 J and does 180 J of work. What is ΔU?",["320 J","680 J","−320 J","−680 J"],0,"ΔU=Q−W.");
M(2,"A gas expands at constant pressure 2.0×10⁵ Pa by 3.0×10⁻³ m³. Work done by the gas is",["600 J","67 J","6.0×10⁷ J","0 J"],0,"W=PΔV.");
M(3,"For a monatomic ideal gas, a temperature rise at fixed amount causes internal energy to",["increase","decrease","remain constant","become zero"],0,"U=(3/2)nRT.");
M(4,"Which process has constant volume?",["isovolumetric","isobaric","isothermal","adiabatic"],0,"Isovolumetric means constant volume.");
M(5,"Which process has no thermal energy transfer between system and surroundings?",["adiabatic","isothermal","isobaric","isovolumetric"],0,"Adiabatic means Q=0.");
M(6,"For an ideal gas undergoing isothermal expansion, ΔU is",["zero","positive","negative","equal to W"],0,"Ideal-gas internal energy depends only on temperature.");
M(7,"For an isovolumetric heating process, the work done by the gas is",["zero","PΔV with ΔV>0","equal to Q","always negative"],0,"ΔV=0, so boundary work is zero.");
M(8,"A reversible transfer of heat Q occurs at absolute temperature T. The entropy change is",["Q/T","QT","T/Q","Q/T²"],0,"ΔS=ΔQ/T for reversible transfer at temperature T.");
M(9,"Boltzmann's entropy relation is",["S=kB lnΩ","S=kBΩ","S=Ω/kB","S=kBT"],0,"S=kB lnΩ.");
M(10,"For an isolated system undergoing a spontaneous real process, total entropy generally",["increases","decreases","remains exactly zero","must oscillate"],0,"The second law requires non-decreasing entropy; real irreversible processes increase it.");
M(11,"A refrigerator can reduce entropy locally inside its cold compartment because",["it causes a greater entropy increase in the surroundings","the second law does not apply","entropy is not a state function","it creates negative heat"],0,"Local entropy decrease is offset by equal or greater surrounding increase.");
M(12,"For a monatomic ideal gas in an adiabatic process, which relation applies in the syllabus?",["PV^(5/3)=constant","PV=constant","P/T=constant","V/T=constant"],0,"For a monatomic ideal gas γ=5/3.");
M(13,"On a P–V diagram, the net work done by a gas in one complete cycle is",["the enclosed area","the gradient at one point","the maximum pressure","zero for every cycle"],0,"Cyclic work equals the signed area enclosed.");
M(14,"A heat engine absorbs 1000 J from a hot reservoir and rejects 650 J to a cold reservoir. Its useful work is",["350 J","1650 J","650 J","1000 J"],0,"W=Qh−Qc.");
M(15,"The efficiency of the engine in the previous question is",["0.35","0.65","1.54","0.54"],0,"η=W/Qh.");
M(16,"A Carnot engine operates between 600 K and 300 K. Its maximum efficiency is",["0.50","0.25","2.0","0.75"],0,"ηC=1−Tc/Th.");
M(17,"Why can no heat engine operating between fixed reservoirs exceed Carnot efficiency?",["The second law constrains the conversion of heat to work","Energy is not conserved in real engines","All real engines have zero work output","Entropy of the universe must decrease"],0,"Carnot efficiency is the reversible upper limit set by the second law.");
M(18,"If the number of accessible microstates Ω increases, entropy",["increases","decreases","stays fixed","must become negative"],0,"S=kB lnΩ.");
M(19,"During adiabatic expansion of a monatomic ideal gas, its temperature typically",["decreases","increases","stays exactly constant","becomes independent of pressure"],0,"The gas does work with no heat input, so internal energy and temperature decrease.");
M(20,"A complete thermodynamic cycle returns the gas to its initial state. Its net change in internal energy is",["zero","equal to net work","equal to heat rejected","always positive"],0,"Internal energy is a state function.");

/* 10 Paper 1B */
P(1,"A gas is heated at constant volume. Heat added and temperature are recorded.",["Q / J","T / K"],[[0,300],[300,324],[600,348],[900,372],[1200,396]],[
{q:"State the work done by the gas during this process.",m:1,ms:["zero because ΔV=0"]},
{q:"Use the first law to state the relationship between Q and ΔU.",m:1,ms:["Q=ΔU"]},
{q:"Describe the relationship between internal energy and temperature for this monatomic ideal gas.",m:1,ms:["linear / proportional for fixed amount"]},
{q:"State what the gradient of Q against T represents.",m:1,ms:["heat capacity at constant volume for the fixed sample"]}]);
P(2,"A gas expands at constant pressure while its volume is recorded.",["V / L","P / kPa"],[[2.0,150],[2.5,150],[3.0,150],[3.5,150],[4.0,150]],[
{q:"Determine the work done when volume changes from 2.0 L to 4.0 L.",m:2,ms:["W=PΔV=150000×0.002=300 J"]},
{q:"State the geometric interpretation of this work on a P–V diagram.",m:1,ms:["area under the path"]},
{q:"Explain why the work is positive using the stated convention.",m:1,ms:["the gas expands and does work on the surroundings"]},
{q:"State how the first law would be used if Q for the process were also known.",m:1,ms:["ΔU=Q−W"]}]);
P(3,"A monatomic gas undergoes an adiabatic compression. Pressure and volume are measured.",["V / L","P / kPa"],[[4.0,100],[3.5,125],[3.0,162],[2.5,218],[2.0,318]],[
{q:"State a quantity that should remain approximately constant for the ideal model.",m:1,ms:["PV^(5/3)"]},
{q:"Explain why temperature rises during the compression.",m:2,ms:["work is done on the gas with Q≈0, increasing internal energy"]},
{q:"State the sign of work done by the gas during compression.",m:1,ms:["negative"]},
{q:"Suggest one reason experimental data may depart from the ideal adiabatic curve.",m:1,ms:["heat exchange / non-ideal gas / friction"]}]);
P(4,"A reversible heating experiment gives entropy changes for equal heat transfers at different temperatures.",["T / K","Q / J","ΔS / J K⁻¹"],[[250,500,2.00],[300,500,1.67],[400,500,1.25],[500,500,1.00]],[
{q:"State the relationship used to calculate the table.",m:1,ms:["ΔS=Q/T"]},
{q:"Explain why the same heat transfer produces a smaller entropy change at higher temperature.",m:2,ms:["Q is divided by larger absolute T"]},
{q:"State why kelvin must be used.",m:1,ms:["thermodynamic entropy relation uses absolute temperature"]},
{q:"Predict ΔS for Q=500 J at 1000 K.",m:1,ms:["0.50 J K⁻¹"]}]);
P(5,"A model system has different numbers of accessible microstates.",["Ω","ln Ω"],[[10,2.303],[100,4.605],[1000,6.908],[10000,9.210]],[
{q:"State the entropy relation involving Ω.",m:1,ms:["S=kB lnΩ"]},
{q:"Describe how entropy changes when Ω increases by a factor of 10.",m:1,ms:["S increases by kB ln10 each time"]},
{q:"Explain why entropy depends logarithmically rather than directly on Ω.",m:2,ms:["logarithm makes entropy additive for independent multiplicative microstate counts"]},
{q:"State which listed state has greatest entropy.",m:1,ms:["Ω=10000"]}]);
P(6,"A heat engine operates between the same reservoirs under different loads.",["Qh / J","W / J"],[[1000,280],[1200,336],[1500,420],[1800,504]],[
{q:"Calculate the efficiency for any one row.",m:1,ms:["η=W/Qh=0.28"]},
{q:"State whether efficiency is approximately constant.",m:1,ms:["yes"]},
{q:"Calculate the heat rejected for Qh=1500 J.",m:1,ms:["Qc=1080 J"]},
{q:"Explain why efficiency less than 1 does not violate energy conservation.",m:1,ms:["remaining input energy is rejected as heat"]}]);
P(7,"Carnot efficiency is calculated for several hot-reservoir temperatures while Tc=300 K.",["Th / K","ηC"],[[400,0.25],[500,0.40],[600,0.50],[750,0.60],[1000,0.70]],[
{q:"State the Carnot-efficiency equation.",m:1,ms:["ηC=1−Tc/Th"]},
{q:"Describe the trend with Th.",m:1,ms:["efficiency increases as hot-reservoir temperature rises"]},
{q:"Explain why efficiency cannot reach 1 for finite Th when Tc>0.",m:1,ms:["Tc/Th remains greater than zero"]},
{q:"State one reason a real engine operates below these values.",m:1,ms:["irreversibility / friction / finite temperature gradients"]}]);
P(8,"A cyclic process follows four measured corner states on a rectangular P–V diagram.",["state","V / L","P / kPa"],[["A",2,100],["B",4,100],["C",4,250],["D",2,250]],[
{q:"State the magnitude of the rectangular area enclosed.",m:2,ms:["ΔPΔV=150000×0.002=300 J"]},
{q:"State what this area represents.",m:1,ms:["magnitude of net work per cycle"]},
{q:"Explain how the direction around the cycle determines the sign of net work.",m:1,ms:["clockwise is net work by gas; anticlockwise is net work on gas"]},
{q:"State the net change in internal energy over one complete cycle.",m:1,ms:["zero"]}]);
P(9,"A gas cools reversibly while transferring heat to reservoirs at nearly equal temperatures.",["segment","T / K","Qgas / J"],[["1",400,-80],["2",380,-76],["3",360,-72],["4",340,-68]],[
{q:"State the sign of the gas entropy change for each segment.",m:1,ms:["negative"]},
{q:"Calculate ΔS for segment 1.",m:1,ms:["−80/400=−0.20 J K⁻¹"]},
{q:"Explain why the surroundings gain entropy.",m:1,ms:["they receive heat"]},
{q:"State the condition for zero total entropy change in the ideal reversible limit.",m:1,ms:["surroundings gain exactly the entropy lost by the gas"]}]);
P(10,"A gas expands along two different paths between the same initial and final states.",["path","work by gas / J","heat added / J"],[["X",220,500],["Y",360,640]],[
{q:"Calculate ΔU for path X.",m:1,ms:["ΔU=Q−W=280 J"]},
{q:"Calculate ΔU for path Y.",m:1,ms:["280 J"]},
{q:"Explain why the two values of ΔU are equal.",m:2,ms:["internal energy is a state function determined by the end states"]},
{q:"State which quantities are path dependent.",m:1,ms:["heat Q and work W"]}]);

/* 10 Paper 2 */
T(1,"A monatomic ideal gas is heated at constant volume from T1 to T2.",[
{q:"Write the change in internal energy.",m:1,ms:["ΔU=(3/2)nR(T2−T1)"]},
{q:"State the work done by the gas.",m:1,ms:["zero"]},
{q:"Use the first law to obtain the required heat input.",m:1,ms:["Q=ΔU"]},
{q:"Explain microscopically why internal energy rises.",m:1,ms:["average molecular kinetic energy increases"]}]);
T(2,"A gas expands isobarically from V1 to V2 while absorbing heat Q.",[
{q:"Write the work done by the gas.",m:1,ms:["W=P(V2−V1)"]},
{q:"Use the first law to write ΔU.",m:1,ms:["ΔU=Q−W"]},
{q:"State how the temperature changes for a fixed amount of ideal gas if V increases at constant P.",m:1,ms:["temperature increases in proportion to volume"]},
{q:"Explain why Q can exceed ΔU.",m:1,ms:["part of the supplied energy leaves the system as work"]}]);
T(3,"A monatomic ideal gas is compressed adiabatically from (P1,V1) to volume V2.",[
{q:"State the adiabatic relation.",m:1,ms:["P1V1^(5/3)=P2V2^(5/3)"]},
{q:"Use it to express P2 in terms of P1,V1,V2.",m:1,ms:["P2=P1(V1/V2)^(5/3)"]},
{q:"State Q for the process.",m:1,ms:["zero"]},
{q:"Explain why internal energy increases even though no heat enters.",m:2,ms:["work is done on the gas; with W by gas negative, ΔU=−W>0"]}]);
T(4,"A heat engine absorbs Qh from a reservoir at Th and rejects Qc to a reservoir at Tc.",[
{q:"Write the work output per cycle.",m:1,ms:["W=Qh−Qc"]},
{q:"Write the engine efficiency.",m:1,ms:["η=W/Qh"]},
{q:"State the Carnot upper limit.",m:1,ms:["ηC=1−Tc/Th"]},
{q:"Explain why rejecting some heat is required by the second law.",m:2,ms:["complete conversion of heat from a single reservoir into work in a cycle would violate entropy constraints"]}]);
T(5,"A refrigerator transfers heat Qc from a cold region to a warmer room using electrical work.",[
{q:"Explain why the cold region's entropy can decrease.",m:1,ms:["heat is removed from it"]},
{q:"Explain why this does not violate the second law.",m:2,ms:["work input causes a greater entropy increase in the warm surroundings so total entropy does not decrease"]},
{q:"State the energy-conservation relation among heat removed, work input and heat rejected.",m:1,ms:["Qh=Qc+Win"]},
{q:"Identify one source of irreversibility in a real refrigerator.",m:1,ms:["friction / finite temperature differences / electrical resistance"]}]);
T(6,"Two bodies at temperatures Th and Tc are placed in thermal contact inside an isolated enclosure.",[
{q:"State the direction of spontaneous heat transfer.",m:1,ms:["from hot to cold"]},
{q:"Write the entropy changes for a small heat transfer Q if each temperature is approximately constant.",m:2,ms:["ΔShot=−Q/Th and ΔScold=Q/Tc"]},
{q:"Show qualitatively why total entropy increases when Th>Tc.",m:2,ms:["1/Tc > 1/Th, so Q/Tc−Q/Th >0"]},
{q:"State the final condition for thermal equilibrium.",m:1,ms:["common temperature and no net heat flow"]}]);
T(7,"A gas executes a clockwise closed loop on a P–V diagram.",[
{q:"State the net change in internal energy over the loop.",m:1,ms:["zero"]},
{q:"State the sign of net work done by the gas.",m:1,ms:["positive"]},
{q:"Use the first law to relate net heat absorbed to net work.",m:1,ms:["over a cycle ΔU=0, so Qnet=Wnet"]},
{q:"Explain why the enclosed area has units of energy.",m:1,ms:["pressure×volume = N m⁻² × m³ = N m = J"]}]);
T(8,"A macrostate of a model system can be realized by Ω microscopic arrangements.",[
{q:"Write Boltzmann's entropy equation.",m:1,ms:["S=kB lnΩ"]},
{q:"Show that if two independent systems have Ω1 and Ω2 states, total entropy is additive.",m:2,ms:["Ωtotal=Ω1Ω2, so lnΩtotal=lnΩ1+lnΩ2"]},
{q:"Explain why higher-multiplicity macrostates are statistically favoured.",m:1,ms:["they correspond to many more microscopic arrangements"]},
{q:"Connect this statistical argument to the second law.",m:1,ms:["isolated systems overwhelmingly evolve toward macrostates of greater multiplicity/entropy"]}]);
T(9,"A reversible engine is redesigned to operate with a lower cold-reservoir temperature while Th is unchanged.",[
{q:"Use Carnot efficiency to predict the effect.",m:1,ms:["efficiency increases"]},
{q:"Explain mathematically why.",m:1,ms:["Tc/Th decreases, so 1−Tc/Th increases"]},
{q:"State why lowering Tc toward 0 K cannot make a practical engine perfectly efficient.",m:2,ms:["absolute zero is unattainable and real processes are irreversible"]},
{q:"Explain why temperature values must be in kelvin.",m:1,ms:["Carnot relation requires absolute thermodynamic temperature"]}]);
T(10,"The same ideal gas reaches the same final state by an isochoric path followed by an isobaric path, or by a different two-step path.",[
{q:"State which thermodynamic quantity has the same total change for both paths.",m:1,ms:["internal energy"]},
{q:"State which two energy transfers can differ between the paths.",m:1,ms:["heat and work"]},
{q:"Explain why work differs geometrically.",m:2,ms:["work is the path-dependent area under the P–V curve"]},
{q:"Use the first law to explain how differing Q compensates for differing W.",m:2,ms:["same ΔU requires Q−W to be the same"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("B.4 prompt count "+prompts);
if(own.some(q=>q.x!==1))throw new Error("B.4 HL tagging failure");
})();