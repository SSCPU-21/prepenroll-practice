/* PrepEnroll™ IB Physics B.2 Greenhouse effect — 100 assessable prompts */
(function(){"use strict";
const sub="B.2", x=0;
function M(i,q,o,a,e){MCQ.push({t:"B",s:sub,x,uid:"PE-B2-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,intro,head,rows,parts){P1B.push({t:"B",s:sub,x,uid:"PE-B2-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(head,rows),parts})})}
function T(i,intro,parts){P2.push({t:"B",s:sub,x,uid:"PE-B2-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,"A planet reflects 30% of incident solar power. Its albedo is",["0.30","0.70","30 W m⁻²","3.0"],0,"Albedo is the fraction of incident power scattered/reflected.");
M(2,"A surface radiates 80% as much power per unit area as a black body at the same temperature. Its emissivity is",["0.80","1.25","0.20","80 W m⁻²"],0,"Emissivity is actual radiated power per area divided by σT⁴.");
M(3,"Why is the mean solar intensity intercepted by a spherical planet S/4 rather than S?",["The disc intercepts πR²S but energy is averaged over 4πR²","Half the sunlight is reflected","The planet rotates once per day","Only infrared radiation is absorbed"],0,"Projected area is πR² while total surface area is 4πR².");
M(4,"If planetary albedo increases while all other factors remain fixed, equilibrium temperature tends to",["decrease","increase","remain exactly unchanged","become independent of emissivity"],0,"More incident radiation is reflected, so less is absorbed.");
M(5,"Which process is central to the greenhouse effect?",["Atmospheric absorption of outgoing infrared radiation followed by re-emission","Reflection of all visible sunlight by greenhouse gases","Nuclear heating of the atmosphere","Conduction from space to Earth"],0,"Greenhouse gases absorb and re-emit specific infrared wavelengths.");
M(6,"Which gas is a major greenhouse gas?",["CO₂","N₂ only","O₂ only","Ar only"],0,"CO₂ is among the main greenhouse gases listed in the syllabus.");
M(7,"The enhanced greenhouse effect refers to",["the increase in greenhouse warming associated with human activity","the natural greenhouse effect alone","the ozone hole","daily variation of albedo"],0,"The enhanced greenhouse effect is the human-driven augmentation of the natural effect.");
M(8,"A molecule absorbs infrared radiation most strongly when the radiation frequency",["matches an allowed molecular energy transition or resonant mode","is always in the visible range","is zero","is greater than every molecular frequency"],0,"Absorption is linked to molecular energy levels and resonance.");
M(9,"At equilibrium, a simple planet model requires",["absorbed solar power = emitted thermal power","incident solar power = reflected power only","emitted power = zero","surface temperature = star temperature"],0,"Long-term radiative equilibrium requires energy balance.");
M(10,"A planet has emissivity less than 1. At the same temperature and area, compared with a black body it emits",["less power","more power","the same power","no radiation"],0,"P=εσAT⁴.");
M(11,"If the solar constant at a planet doubles and albedo/emissivity stay fixed, its equilibrium absolute temperature changes by a factor of",["2^(1/4)","2","4","1/2"],0,"Energy balance gives T⁴ proportional to S.");
M(12,"Clouds can affect planetary energy balance because they can",["change both reflected shortwave radiation and outgoing infrared radiation","only increase solar luminosity","stop all convection permanently","change the speed of light"],0,"Clouds influence albedo and infrared exchange.");
M(13,"Why is the greenhouse effect necessary for life as we know it on Earth?",["It raises the mean surface temperature above the no-atmosphere radiative value","It eliminates all temperature variation","It blocks all ultraviolet radiation","It makes Earth's albedo zero"],0,"Natural greenhouse warming keeps the surface warmer than a bare radiative-equilibrium model.");
M(14,"Which quantity is dimensionless?",["albedo","solar constant","radiative flux","luminosity"],0,"Albedo is a ratio.");
M(15,"A planet with zero albedo absorbs what fraction of incident solar radiation in the simple model?",["1","0","1/4","4"],0,"Zero albedo means no reflection.");
M(16,"If emissivity increases while absorbed solar power remains constant, the equilibrium temperature tends to",["decrease","increase","remain fixed","become 0 K"],0,"Greater emissivity allows the same outgoing power at a lower temperature.");
M(17,"Why can greenhouse gases re-emit infrared radiation toward the surface?",["Emission from atmospheric molecules occurs in multiple directions","Infrared photons must travel upward only","Gravity reflects infrared radiation downward","Visible light is converted only at the ground"],0,"Excited molecules emit radiation in many directions.");
M(18,"Which human activity is a major source of enhanced greenhouse forcing?",["Burning fossil fuels","Changing phases of the Moon","Earth's rotation","Tidal locking"],0,"Fossil-fuel combustion is a major anthropogenic source.");
M(19,"Earth's albedo is not constant because it depends on factors including",["cloud cover and latitude","only Earth's mass","only atmospheric pressure","only the Moon's orbit"],0,"The syllabus explicitly notes daily variation and dependence on clouds and latitude.");
M(20,"A resonance-only model of greenhouse absorption is limited because",["real molecular absorption involves quantized energy levels and complex spectra","molecules have no internal motion","infrared light has no frequency","all gases absorb all wavelengths equally"],0,"Real absorption spectra require molecular energy-level structure.");

/* 10 Paper 1B */
P(1,"A planet is modelled with different assumed albedos while solar constant and emissivity are fixed.",["albedo","equilibrium T / K"],[[0.10,272],[0.20,264],[0.30,255],[0.40,245],[0.50,234]],[
{q:"Describe the trend between albedo and equilibrium temperature.",m:1,ms:["temperature decreases as albedo increases"]},
{q:"Explain the trend using absorbed solar power.",m:2,ms:["absorbed fraction is (1-albedo), so larger albedo reduces absorbed power"]},
{q:"State why the relationship is not linear.",m:1,ms:["emitted power depends on T⁴"]},
{q:"Suggest one real planetary factor omitted from this one-layer-free model.",m:1,ms:["atmospheric greenhouse effect / clouds / heat transport"]}]);
P(2,"A surface sample is heated to several temperatures and its thermal-emission flux is measured.",["T / K","flux / W m⁻²"],[[280,278],[300,367],[320,476],[340,607],[360,762]],[
{q:"State a transformed horizontal variable that should give a straight line.",m:1,ms:["T⁴"]},
{q:"For a graph of radiative flux against T⁴, identify what the gradient represents.",m:1,ms:["εσ"]},
{q:"Explain how the gradient can be used to estimate emissivity.",m:2,ms:["ε=gradient/σ"]},
{q:"State why absolute temperature must be used.",m:1,ms:["Stefan–Boltzmann relation requires kelvin"]}]);
P(3,"Satellite measurements compare reflected and incident shortwave power over different regions.",["region","incident / W m⁻²","reflected / W m⁻²"],[["ocean",340,34],["forest",340,51],["desert",340,102],["cloud",340,170]],[
{q:"Calculate the albedo for each region.",m:2,ms:["reflected/incident"]},
{q:"Identify the region with the highest albedo.",m:1,ms:["cloud"]},
{q:"Explain why replacing forest with a brighter surface can alter local energy balance.",m:2,ms:["larger albedo reflects more incoming energy and reduces absorption"]},
{q:"State one limitation of using a single snapshot to infer annual planetary albedo.",m:1,ms:["clouds, seasons, latitude and illumination vary"]}]);
P(4,"Infrared transmission through a gas sample is measured at several wavelengths.",["λ / μm","transmission / %"],[[6,88],[8,62],[10,91],[12,55],[14,28],[16,73]],[
{q:"Identify the wavelength with strongest absorption.",m:1,ms:["14 μm"]},
{q:"Explain the relation between low transmission and absorption.",m:1,ms:["less transmitted intensity means more is absorbed, if reflection/scattering is small"]},
{q:"Explain why absorption occurs only in certain wavelength bands.",m:2,ms:["molecular energy transitions/resonant modes are quantized/selective"]},
{q:"State one reason laboratory absorption strengths cannot alone determine climate impact.",m:1,ms:["atmospheric concentration/path length/overlap/clouds must also be considered"]}]);
P(5,"A simple atmospheric model records downward infrared flux at the surface as greenhouse-gas concentration is changed in a simulation.",["relative concentration","downward IR / W m⁻²"],[[0.5,260],[1.0,300],[1.5,322],[2.0,336],[3.0,354]],[
{q:"Describe the trend in downward infrared flux.",m:1,ms:["increases but with diminishing increments"]},
{q:"Explain why increased downward infrared can raise equilibrium surface temperature.",m:2,ms:["surface receives more energy and must emit more to restore balance, requiring higher T"]},
{q:"State why this table does not prove a unique causal law for the real atmosphere.",m:1,ms:["it is model output and omits interacting variables"]},
{q:"Suggest one additional measured variable needed in a real energy-budget study.",m:1,ms:["outgoing longwave / reflected shortwave / cloud cover / surface temperature"]}]);
P(6,"Four hypothetical planets orbit similar stars. Their solar constants and albedos are listed.",["planet","S / W m⁻²","albedo"],[["A",1400,0.20],["B",1400,0.40],["C",1000,0.20],["D",1800,0.50]],[
{q:"Calculate the mean absorbed solar flux for planet A using (1-a)S/4.",m:2,ms:["(0.8)(1400)/4=280 W m⁻²"]},
{q:"Identify which of A and B absorbs more power per unit surface area.",m:1,ms:["A"]},
{q:"Explain why D cannot be ranked by solar constant alone.",m:1,ms:["its albedo differs substantially"]},
{q:"State the additional parameter needed to estimate equilibrium temperature from outgoing radiation.",m:1,ms:["emissivity"]}]);
P(7,"A climate station records daily mean cloud fraction and planetary shortwave reflection over one week.",["cloud fraction","reflected fraction"],[[0.10,0.23],[0.25,0.27],[0.40,0.31],[0.55,0.35],[0.70,0.39]],[
{q:"Describe the correlation.",m:1,ms:["greater cloud fraction is associated with greater reflected fraction"]},
{q:"Explain why this does not mean clouds have only a cooling effect.",m:2,ms:["clouds can also absorb/re-emit infrared radiation"]},
{q:"State one reason correlation does not establish causation by itself.",m:1,ms:["other variables may co-vary / limited data"]},
{q:"Suggest one additional atmospheric measurement.",m:1,ms:["outgoing longwave radiation / cloud altitude / humidity"]}]);
P(8,"A model planet reaches different equilibrium temperatures when emissivity is varied at fixed absorbed solar flux.",["ε","T / K"],[[0.60,284],[0.70,273],[0.80,264],[0.90,256],[1.00,249]],[
{q:"Describe the effect of increasing emissivity.",m:1,ms:["equilibrium temperature decreases"]},
{q:"Explain this with the emitted-flux expression.",m:2,ms:["for fixed required outgoing flux, εσT⁴ constant, so larger ε needs lower T"]},
{q:"State a transformed relationship that could be tested.",m:1,ms:["T⁴ proportional to 1/ε"]},
{q:"Explain why emissivity cannot be replaced by albedo in the same expression.",m:1,ms:["they describe different wavelength processes: emission versus reflection"]}]);
P(9,"Outgoing longwave radiation is measured as surface temperature changes in a simplified experiment.",["T / K","OLR / W m⁻²"],[[280,290],[285,306],[290,323],[295,341],[300,360]],[
{q:"Describe the trend.",m:1,ms:["outgoing longwave radiation increases with surface temperature"]},
{q:"Explain why a warmer surface tends to radiate more strongly.",m:1,ms:["thermal emission increases strongly with absolute temperature"]},
{q:"State why real atmospheric OLR need not follow εσTsurface⁴ exactly.",m:2,ms:["atmospheric absorption/emission means radiation to space can originate from different levels"]},
{q:"Suggest how these data might be used in an energy-balance model.",m:1,ms:["compare outgoing flux with absorbed solar flux to locate equilibrium"]}]);
P(10,"A laboratory gas cell is tested before and after adding a greenhouse gas. Infrared detector power is recorded.",["condition","incident / mW","transmitted / mW"],[["empty",10.0,9.6],["gas A",10.0,7.1],["gas B",10.0,4.8],["gas mixture",10.0,3.9]],[
{q:"Calculate the transmitted fraction for gas B.",m:1,ms:["0.48"]},
{q:"Identify the condition with greatest infrared attenuation.",m:1,ms:["gas mixture"]},
{q:"Explain why attenuation is not automatically identical to absorption.",m:2,ms:["reflection/scattering and detector geometry can also reduce transmitted signal"]},
{q:"State one control needed for a fair comparison.",m:1,ms:["same path length / pressure / temperature / incident spectrum"]}]);

/* 10 Paper 2 */
T(1,"A spherical planet of radius R receives solar constant S, has albedo a, and radiates as a grey body with emissivity ε.",[
{q:"Show that the absorbed solar power is (1-a)SπR².",m:2,ms:["incident power is S times projected area πR²; multiply by absorbed fraction"]},
{q:"Write the emitted thermal power.",m:1,ms:["4πR² εσT⁴"]},
{q:"Derive an expression for equilibrium temperature.",m:2,ms:["T=[(1-a)S/(4εσ)]^(1/4)"]},
{q:"Explain why planetary radius cancels from this simple equilibrium expression.",m:1,ms:["both absorbed and emitted powers scale with R²"]}]);
T(2,"Earth's atmosphere is represented by a single infrared-absorbing layer that is transparent to incoming visible solar radiation.",[
{q:"Explain why the layer can warm the surface.",m:2,ms:["it absorbs surface infrared and re-emits in all directions, including downward"]},
{q:"State the energy-balance idea for the atmosphere at steady state.",m:1,ms:["absorbed infrared power equals emitted infrared power"]},
{q:"Explain why adding an absorbing layer can raise the surface temperature needed for overall balance.",m:2,ms:["surface must supply both radiation escaping to space and energy supporting atmospheric emission"]},
{q:"State one important limitation of the one-layer model.",m:1,ms:["real atmosphere has many layers, spectral bands, convection, clouds"]}]);
T(3,"A moon with negligible atmosphere has known albedo and solar constant.",[
{q:"Write the mean absorbed solar flux.",m:1,ms:["(1-a)S/4"]},
{q:"Assuming black-body emission, obtain the equilibrium temperature relation.",m:2,ms:["σT⁴=(1-a)S/4"]},
{q:"Explain why actual day-side and night-side temperatures can differ greatly from this mean.",m:2,ms:["limited heat redistribution and thermal inertia"]},
{q:"State why the simple model is more appropriate for long-term global average than local instantaneous temperature.",m:1,ms:["it averages absorbed energy over the whole surface"]}]);
T(4,"A city replaces dark roofs with high-albedo roofs over a large area.",[
{q:"Explain the immediate effect on absorbed solar power.",m:1,ms:["it decreases"]},
{q:"Explain how this can affect surface temperature.",m:1,ms:["lower absorbed energy tends to lower equilibrium temperature"]},
{q:"State why the intervention does not directly remove greenhouse gases.",m:1,ms:["it changes surface reflection, not atmospheric composition"]},
{q:"Discuss one reason the total climate effect may differ from the simple albedo prediction.",m:2,ms:["clouds, heat transport, urban geometry, infrared emissivity and feedbacks"]}]);
T(5,"A greenhouse gas has strong absorption bands in part of Earth's outgoing infrared spectrum.",[
{q:"Explain the absorption using molecular energy levels.",m:2,ms:["photons with matching energy differences excite molecular rotational/vibrational states"]},
{q:"Explain why the gas does not absorb every infrared wavelength equally.",m:1,ms:["only allowed transitions/bands are strong"]},
{q:"Explain how subsequent emission can contribute to surface warming.",m:2,ms:["re-emission occurs in many directions, including downward"]},
{q:"State one limitation of describing the process only as mechanical resonance.",m:1,ms:["quantized transitions and selection rules/spectral structure are required"]}]);
T(6,"Two otherwise identical planets have albedos 0.20 and 0.50 and the same emissivity.",[
{q:"Determine which absorbs the larger fraction of incident solar energy.",m:1,ms:["the 0.20-albedo planet"]},
{q:"Write the ratio of absorbed fluxes in terms of (1-a).",m:1,ms:["0.80/0.50=1.6"]},
{q:"Use radiative equilibrium to state the ratio of their equilibrium temperatures.",m:2,ms:["T1/T2=(1.6)^(1/4)"]},
{q:"Explain why the temperature ratio is much smaller than 1.6.",m:1,ms:["outgoing radiation rises as T⁴"]}]);
T(7,"A satellite measures incoming solar, reflected shortwave, and outgoing longwave radiation for Earth.",[
{q:"State how to calculate net absorbed solar power per unit area from the shortwave measurements.",m:1,ms:["incoming minus reflected, with consistent averaging"]},
{q:"State the condition for global radiative equilibrium.",m:1,ms:["absorbed shortwave equals outgoing longwave"]},
{q:"Explain what a persistent positive imbalance implies for Earth's stored energy.",m:2,ms:["Earth system gains energy, tending to warm/change energy stores"]},
{q:"State one reason short-term imbalance need not imply a permanent trend.",m:1,ms:["seasonal variability / temporary cloud changes / ocean exchange"]}]);
T(8,"A model predicts equilibrium temperature from S, a and ε, but measured surface temperature is higher.",[
{q:"State the simple no-atmosphere equilibrium equation.",m:1,ms:["(1-a)S/4=εσT⁴"]},
{q:"Give the main physical reason a real greenhouse atmosphere can make the surface warmer than this value.",m:2,ms:["atmospheric absorption and downward re-emission of outgoing infrared"]},
{q:"Explain why conservation of energy is not violated.",m:1,ms:["at equilibrium total outgoing energy to space still balances absorbed solar power"]},
{q:"State one process other than radiation that transports energy within the atmosphere.",m:1,ms:["convection / latent heat transport"]}]);
T(9,"Methane concentration increases while other atmospheric conditions are initially unchanged.",[
{q:"State why methane can affect outgoing infrared radiation.",m:1,ms:["it absorbs in infrared bands"]},
{q:"Explain the initial radiative imbalance that may result.",m:2,ms:["more outgoing IR is absorbed/re-emitted, reducing immediate escape to space at previous temperatures"]},
{q:"Explain how the system can move toward a new equilibrium.",m:2,ms:["temperatures adjust until outgoing radiation again balances absorbed solar input"]},
{q:"State why final temperature change cannot be predicted from concentration alone in a full climate system.",m:1,ms:["feedbacks, clouds, water vapour, spectral overlap and circulation matter"]}]);
T(10,"A student's energy-balance calculation mistakenly uses the full solar constant S as the global mean incoming flux.",[
{q:"Explain why this is geometrically incorrect.",m:2,ms:["a sphere intercepts radiation over πR² but the mean is distributed over 4πR²"]},
{q:"State the correct global mean incident flux before albedo.",m:1,ms:["S/4"]},
{q:"Predict qualitatively how the mistake affects calculated equilibrium temperature.",m:1,ms:["it overestimates temperature"]},
{q:"Explain why the temperature error is not a factor of four.",m:1,ms:["temperature depends on the fourth root of radiative flux"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("B.2 prompt count "+prompts);
})();