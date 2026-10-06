/* PrepEnroll™ IB Physics B.1 Thermal energy transfers — 100 assessable prompts */
(function(){"use strict";
const sub="B.1", x=0;
function M(i,q,o,a,e){MCQ.push({t:"B",s:sub,x,uid:"PE-B1-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"B",s:sub,x,uid:"PE-B1-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"B",s:sub,x,uid:"PE-B1-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A sample has mass 240 g and volume 80 cm³. What is its density?",["3.0 g cm⁻³","0.33 g cm⁻³","19.2 g cm⁻³","160 g cm⁻³"],0,"ρ=m/V.");
M(2,"A temperature rises from 18 °C to 43 °C. What is the temperature increase in kelvin?",["25 K","316 K","61 K","291 K"],0,"A temperature interval has the same numerical value in kelvin and degrees Celsius.");
M(3,"Which statement best describes internal energy? ",["The sum of random kinetic and intermolecular potential energies of the particles","Only the translational kinetic energy of the centre of mass","Only the intermolecular potential energy","The energy transferred as heat during one second"],0,"Internal energy includes random molecular kinetic energy and intermolecular potential energy.");
M(4,"A substance melts at constant temperature while energy is supplied. What happens microscopically?",["Intermolecular potential energy increases while average kinetic energy remains approximately constant","Average molecular kinetic energy increases continuously","Both average kinetic and potential energy remain constant","The molecules stop moving"],0,"During a phase change, supplied energy changes particle arrangement rather than temperature.");
M(5,"A 2.0 kg block with specific heat capacity 450 J kg⁻¹ K⁻¹ warms by 8 K. How much energy is transferred?",["7.2 kJ","3.6 kJ","0.90 kJ","57.6 kJ"],0,"Q=mcΔT.");
M(6,"A 0.40 kg sample requires 80 kJ to melt completely at its melting temperature. What is its specific latent heat of fusion?",["200 kJ kg⁻¹","32 kJ kg⁻¹","80 kJ kg⁻¹","0.005 kJ kg⁻¹"],0,"L=Q/m.");
M(7,"Heat is conducted through a slab. If its thickness doubles while all other factors remain unchanged, the conduction rate becomes",["half as large","twice as large","four times as large","unchanged"],0,"Conduction rate is proportional to 1/Δx.");
M(8,"For conduction through a uniform slab, which change doubles the energy-transfer rate?",["Doubling the cross-sectional area","Doubling the slab thickness","Halving the temperature difference","Halving the thermal conductivity"],0,"Rate = kAΔT/Δx.");
M(9,"Why does convection occur in a fluid heated from below?",["Warmer fluid becomes less dense and rises while cooler denser fluid sinks","Molecules stop colliding near the heater","Radiation pressure pushes the fluid upward","Thermal conductivity becomes zero"],0,"Density differences drive bulk fluid motion.");
M(10,"A black body is at absolute temperature T. If its temperature becomes 2T with area unchanged, its luminosity becomes",["16 times larger","8 times larger","4 times larger","2 times larger"],0,"Stefan–Boltzmann law gives L∝T⁴.");
M(11,"A star has luminosity L. At distance d its apparent brightness is b. At distance 3d, its apparent brightness is",["b/9","b/3","3b","9b"],0,"Apparent brightness follows the inverse-square law.");
M(12,"A black-body spectrum has peak wavelength 580 nm. A hotter black body has a peak wavelength that is",["shorter than 580 nm","longer than 580 nm","always exactly 580 nm","independent of temperature"],0,"Wien’s law gives λmaxT=constant.");
M(13,"Two objects at different temperatures are placed in thermal contact in an insulated container. Net thermal energy transfer stops when",["their temperatures are equal","their internal energies are equal","their masses are equal","both reach 0 °C"],0,"Thermal equilibrium is reached when temperatures become equal.");
M(14,"At the same absolute temperature, which statement about average translational kinetic energy of ideal-gas particles is correct?",["It is the same regardless of particle mass","It is greater for heavier particles","It is zero for monatomic gases","It depends only on pressure"],0,"Average translational kinetic energy is 3kBT/2.");
M(15,"A liquid evaporates below its boiling point. Which molecules are most likely to escape?",["Those near the surface with above-average kinetic energy","Only molecules with zero kinetic energy","Only the most massive molecules","All molecules simultaneously"],0,"Higher-energy surface molecules can overcome intermolecular attraction.");
M(16,"A polished metal surface and a dull black surface are at the same temperature and area. Which is generally the better thermal radiator?",["The dull black surface","The polished metal surface","They must radiate equally","Neither emits thermal radiation"],0,"Dull black surfaces generally have higher emissivity.");
M(17,"A hot object cools in a room. Which statement about net radiative power is most accurate?",["It depends on both the object's emission and radiation absorbed from the surroundings","It equals σAT⁴ regardless of surroundings","It is independent of surface area","It must be constant in time"],0,"Net radiative transfer depends on both object and surroundings.");
M(18,"Which microscopic change most directly raises the temperature of a substance that remains in one phase?",["An increase in average random kinetic energy of its particles","A change in total mass","A decrease in particle number","A decrease in average kinetic energy"],0,"Temperature is related to average molecular kinetic energy.");
M(19,"Two identical masses receive the same energy and remain in the same phase. Sample X warms more than sample Y. Therefore X has",["a smaller specific heat capacity","a larger specific heat capacity","the same specific heat capacity","zero latent heat"],0,"For fixed Q and m, ΔT=Q/(mc).");
M(20,"A metal spoon in hot soup becomes warm mainly because of",["conduction through the metal","convection through the solid","evaporation inside the spoon","nuclear radiation"],0,"Thermal energy is conducted through solids by microscopic interactions.");

/* 10 Paper 1B, 4 parts each */
P(1,"A heater supplies constant power to water in an insulated cup. Temperature is recorded every 60 s.",["t / s","T / °C"],[[0,20.0],[60,23.6],[120,27.1],[180,30.5],[240,33.8]],[
{q:"State the graph used to determine the heating rate.",m:1,ms:["plot temperature against time"]},
{q:"Estimate the mean rate of temperature increase over the full interval.",m:2,ms:["(33.8-20.0)/240 ≈ 0.0575 K s⁻¹"]},
{q:"Explain why the temperature increments become slightly smaller even though heater power is constant.",m:2,ms:["thermal losses increase as temperature difference from surroundings increases"]},
{q:"Suggest one experimental change that would reduce this deviation from linearity.",m:1,ms:["better insulation / lid / shorter run"]}]);
P(2,"A student determines the specific heat capacity of a metal block using an electrical heater. The measured energy input and temperature rise are shown.",["trial","E / kJ","ΔT / K"],[[1,6.0,13.0],[2,8.0,17.1],[3,10.0,21.0],[4,12.0,24.7]],[
{q:"State a graph that should be linear if heat losses are small.",m:1,ms:["E against ΔT"]},
{q:"State what the gradient represents.",m:1,ms:["mc for the block"]},
{q:"Explain why a positive energy-axis intercept could occur.",m:2,ms:["some energy warms the heater/sensor or is lost before a measurable block-temperature rise"]},
{q:"State one reason to use several energy values rather than one measurement.",m:1,ms:["gradient uses multiple data points and reveals scatter/systematic offsets"]}]);
P(3,"A cooling liquid is monitored as it freezes.",["t / min","T / °C"],[[0,12],[2,7],[4,3],[6,1],[8,1],[10,1],[12,-2],[14,-5]],[
{q:"Identify the interval during which a phase change is occurring.",m:1,ms:["approximately 6–10 min"]},
{q:"Explain why temperature is nearly constant during this interval.",m:2,ms:["energy removed changes intermolecular potential energy/structure rather than average kinetic energy"]},
{q:"State the name of the specific latent heat relevant to this phase change.",m:1,ms:["specific latent heat of fusion"]},
{q:"Explain why the plateau may not be perfectly horizontal in a real experiment.",m:1,ms:["non-equilibrium temperature gradients / measurement uncertainty / impurities"]}]);
P(4,"Heat flows steadily through samples of equal thickness and area made from different materials.",["material","ΔT / K","rate / W"],[["A",20,8.0],["B",20,3.2],["C",20,12.4],["D",20,1.6]],[
{q:"Rank the materials by thermal conductivity.",m:1,ms:["C>A>B>D"]},
{q:"Explain why the ranking follows directly from the measured rates.",m:1,ms:["A, ΔT and thickness are identical, so rate is proportional to k"]},
{q:"Predict the rate for material A if its thickness is doubled.",m:1,ms:["4.0 W"]},
{q:"State one quantity that must be measured accurately to compare conductivities quantitatively.",m:1,ms:["thickness / area / temperature difference / heat rate"]}]);
P(5,"A blackened metal sphere is heated to several temperatures. Its total radiated power is measured.",["T / K","P / W"],[[300,4.2],[350,7.8],[400,13.3],[450,21.4],[500,32.4]],[
{q:"State a transformed horizontal variable that should give a straight-line graph.",m:1,ms:["T⁴"]},
{q:"State what the gradient represents for a black body of fixed area.",m:1,ms:["σA"]},
{q:"Explain why plotting P directly against T is strongly curved.",m:1,ms:["P is proportional to T⁴, not T"]},
{q:"Suggest why a real measured surface may give a smaller gradient than σA.",m:1,ms:["emissivity less than 1 / net radiation to surroundings"]}]);
P(6,"The peak wavelength of radiation from four heated sources is measured.",["source","T / K","λmax / μm"],[["A",1000,2.90],["B",1200,2.42],["C",1500,1.94],["D",1800,1.61]],[
{q:"State the product that should be approximately constant.",m:1,ms:["λmaxT"]},
{q:"Use one row to estimate the Wien displacement constant.",m:1,ms:["about 2.9×10⁻³ m K"]},
{q:"Explain why a hotter source appears shifted toward shorter wavelengths.",m:1,ms:["λmax is inversely proportional to T"]},
{q:"State one reason measured peak wavelength might be uncertain.",m:1,ms:["broad spectrum / detector resolution / calibration"]}]);
P(7,"The apparent brightness of the same lamp is measured at different distances in a dark laboratory.",["d / m","b / arbitrary units"],[[1.0,100],[1.5,44],[2.0,25],[2.5,16],[3.0,11]],[
{q:"State the expected dependence of brightness on distance.",m:1,ms:["b proportional to 1/d²"]},
{q:"State a linearizing graph.",m:1,ms:["b against 1/d²"]},
{q:"Explain physically why an inverse-square dependence occurs.",m:2,ms:["the same power spreads over spherical area 4πd²"]},
{q:"Suggest one reason the largest-distance measurement may depart most from the model.",m:1,ms:["background light becomes significant / detector sensitivity"]}]);
P(8,"A sample is heated through a phase change with a constant-power heater.",["t / s","T / °C"],[[0,15],[100,35],[200,55],[300,65],[400,65],[500,65],[600,78]],[
{q:"Identify the approximate phase-change temperature.",m:1,ms:["65 °C"]},
{q:"Explain how the plateau duration can be used to find latent heat.",m:2,ms:["energy during plateau is PΔt; divide by mass"]},
{q:"State one reason using total heater power would overestimate the latent heat.",m:1,ms:["some energy is lost to surroundings/container"]},
{q:"Suggest how the graph can also be used to estimate specific heat capacity outside the plateau.",m:2,ms:["use slope dT/dt with P=mc dT/dt, after accounting for losses"]}]);
P(9,"Two equal-mass samples receive the same constant heating power.",["t / s","T X / °C","T Y / °C"],[[0,20,20],[60,28,24],[120,36,28],[180,44,32],[240,52,36]],[
{q:"Identify which sample has the larger specific heat capacity.",m:1,ms:["Y"]},
{q:"Explain your choice.",m:1,ms:["Y has a smaller temperature rise for the same energy and mass"]},
{q:"Determine the ratio cY/cX from the slopes.",m:2,ms:["temperature-rise rate X is twice Y, so cY/cX≈2"]},
{q:"State one assumption required for this comparison.",m:1,ms:["similar heat-loss fractions / equal heater power / equal masses"]}]);
P(10,"A wall panel is tested with different temperature differences across it.",["ΔT / K","heat-transfer rate / W"],[[5,12],[10,24],[15,36],[20,48],[25,60]],[
{q:"Describe the relationship shown by the data.",m:1,ms:["rate is proportional to ΔT"]},
{q:"State the physical meaning of the gradient of rate against ΔT.",m:1,ms:["thermal conductance kA/Δx"]},
{q:"Predict the effect on the gradient if the panel thickness is doubled.",m:1,ms:["gradient halves"]},
{q:"Explain why measurements should be taken only after steady state is reached.",m:2,ms:["otherwise energy is also changing the panel's internal energy and the input/output rates need not match"]}]);

/* 10 Paper 2, 4 parts each */
T(1,"A 0.60 kg metal block at 180 °C is placed into 0.90 kg of water at 20 °C in an insulated container.",[
{q:"Write an energy-balance equation for the final equilibrium temperature.",m:2,ms:["energy lost by metal = energy gained by water","m_mc_m(Tmi-Tf)=m_wc_w(Tf-Twi)"]},
{q:"Explain why the same final temperature is used for both substances.",m:1,ms:["thermal equilibrium is reached"]},
{q:"State how including the container's heat capacity would alter the equation.",m:1,ms:["add a heat-gain term for the container"]},
{q:"Explain how heat loss to the environment would bias a value of metal specific heat capacity inferred by ignoring losses.",m:2,ms:["some metal energy heats surroundings, so attributing all loss to water can distort/typically underestimate the metal c depending on method"]}]);
T(2,"A student uses an immersion heater of power P to vaporize a liquid already at its boiling point.",[
{q:"Derive an expression for the mass vaporized in time t if losses are neglected.",m:2,ms:["Pt=mL, so m=Pt/L"]},
{q:"Explain why the liquid temperature remains approximately constant while boiling.",m:1,ms:["energy changes intermolecular potential energy rather than average kinetic energy"]},
{q:"State how a plot of vaporized mass against time could determine L.",m:2,ms:["gradient=P/L, so L=P/gradient"]},
{q:"Explain how steady heat loss changes the measured gradient.",m:1,ms:["less than P is available for vaporization, so gradient is smaller"]}]);
T(3,"A house wall consists of one uniform layer of area A, thickness x and thermal conductivity k. Inside and outside temperatures differ by ΔT.",[
{q:"Write the steady conduction rate through the wall.",m:1,ms:["ΔQ/Δt=kAΔT/x"]},
{q:"Explain the effect of doubling wall thickness.",m:1,ms:["halves the conduction rate"]},
{q:"Explain why trapped air layers can reduce heat transfer in insulation.",m:2,ms:["air has low thermal conductivity and small cells suppress bulk convection"]},
{q:"State one limitation of modelling the wall as a single uniform layer.",m:1,ms:["real walls have multiple materials/thermal bridges/non-steady conditions"]}]);
T(4,"A spherical star is modelled as a black body with radius R and surface temperature T.",[
{q:"Write an expression for its luminosity.",m:2,ms:["L=4πR²σT⁴"]},
{q:"Write an expression for apparent brightness at distance d.",m:1,ms:["b=L/(4πd²)"]},
{q:"Show how measured b, d and T could be used to estimate R.",m:2,ms:["combine equations to get R=d sqrt(b/(σT⁴))"]},
{q:"State one reason a real star is not a perfect black body.",m:1,ms:["spectral absorption/emissivity differs from 1"]}]);
T(5,"Two stars have the same radius but surface temperatures T and 2T.",[
{q:"Determine the ratio of their luminosities.",m:1,ms:["16"]},
{q:"Determine the ratio of their peak wavelengths.",m:1,ms:["λmax,2/λmax,1=1/2"]},
{q:"Explain why the hotter star emits much more power.",m:2,ms:["Stefan–Boltzmann law has a fourth-power temperature dependence"]},
{q:"State which star's spectrum peaks at the shorter wavelength.",m:1,ms:["the hotter star"]}]);
T(6,"A cup of hot drink cools in a room by conduction, convection and radiation.",[
{q:"Describe the direction of net thermal energy transfer.",m:1,ms:["from the hotter drink/cup to the cooler surroundings"]},
{q:"Explain why the cooling rate generally decreases with time.",m:2,ms:["temperature difference and net radiative difference decrease as equilibrium is approached"]},
{q:"State how a lid reduces energy loss.",m:2,ms:["reduces evaporation and convection from the surface"]},
{q:"Explain why a shiny outer surface can reduce radiative cooling.",m:1,ms:["low emissivity reduces emitted thermal radiation"]}]);
T(7,"A block of ice at 0 °C is added to water at a higher temperature in an insulated beaker.",[
{q:"Write the energy needed to melt mass m of ice.",m:1,ms:["Q=mLf"]},
{q:"State the additional energy needed if the melted ice then warms to final temperature Tf.",m:1,ms:["Q=mcwTf if starting at 0 °C"]},
{q:"Write the full energy-balance idea for a final temperature above 0 °C.",m:2,ms:["energy lost by warm water = energy to melt ice + energy to warm melted water"]},
{q:"Explain the condition under which some ice remains at equilibrium.",m:1,ms:["available energy is insufficient to melt all ice; equilibrium remains at 0 °C"]}]);
T(8,"A planet receives radiation from its star and radiates energy to space.",[
{q:"State the role of temperature difference in ordinary thermal contact and why radiation is different in vacuum.",m:2,ms:["contact transfer direction follows temperature difference; radiation needs no material medium"]},
{q:"Write the Stefan–Boltzmann dependence of emitted power per unit area for a black body.",m:1,ms:["P/A=σT⁴"]},
{q:"Explain why a small fractional increase in absolute temperature produces a larger fractional increase in emitted power.",m:2,ms:["fourth-power dependence"]},
{q:"State why Celsius temperature cannot be used in T⁴.",m:1,ms:["Stefan–Boltzmann law requires absolute temperature in kelvin"]}]);
T(9,"A student heats equal masses of aluminium and water with identical heaters for the same time.",[
{q:"State which sample is expected to have the larger temperature rise if aluminium has the lower specific heat capacity.",m:1,ms:["aluminium"]},
{q:"Use Q=mcΔT to explain the result.",m:2,ms:["same Q and m gives ΔT inversely proportional to c"]},
{q:"Explain why equal heater ratings do not guarantee equal energy absorbed by the samples.",m:1,ms:["heat losses and container absorption may differ"]},
{q:"Suggest an experimental modification that improves the comparison.",m:1,ms:["insulate equally / use identical containers / measure electrical energy directly"]}]);
T(10,"A thermal camera compares two surfaces at the same measured physical temperature but with different emissivities.",[
{q:"Explain why the camera may report different apparent temperatures.",m:2,ms:["detected radiative intensity depends on emissivity as well as actual temperature"]},
{q:"State which surface emits more radiation if one has the larger emissivity.",m:1,ms:["the higher-emissivity surface"]},
{q:"Explain how a calibrated high-emissivity patch can improve the measurement.",m:2,ms:["provides a surface with known emissivity for more reliable temperature inference"]},
{q:"State one other factor that can affect thermal-camera readings.",m:1,ms:["reflected infrared radiation / viewing angle / atmospheric absorption"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("B.1 prompt count "+prompts);
})();