/* PrepEnroll™ IB Physics C.3 Wave phenomena — 100 assessable prompts */
(function(){"use strict";
const sub="C.3";
function M(i,x,q,o,a,e){MCQ.push({t:"C",s:sub,x,uid:"PE-C3-M-"+String(i).padStart(3,"0"),f:()=>ord(q,o,a,e)})}
function P(i,x,intro,h,r,parts){P1B.push({t:"C",s:sub,x,uid:"PE-C3-P-"+String(i).padStart(3,"0"),f:()=>({intro,fig:tbl(h,r),parts})})}
function T(i,x,intro,parts){P2.push({t:"C",s:sub,x,uid:"PE-C3-T-"+String(i).padStart(3,"0"),f:()=>({intro,parts})})}

/* 20 Paper 1A */
M(1,0,"A wave reflects from a smooth boundary. The angle of reflection is",["equal to the angle of incidence","twice the angle of incidence","half the angle of incidence","always 90°"],0,"Law of reflection.");
M(2,0,"When a wave enters a medium in which its speed decreases, it bends",["toward the normal","away from the normal","parallel to the boundary in every case","without changing direction in every case"],0,"Refraction follows the speed change.");
M(3,0,"For refraction from medium 1 to medium 2, which relation is correct?",["n₁ sinθ₂ = n₂ sinθ₁","n₁ sinθ₁ = n₂ sinθ₂","n₁θ₁=n₂θ₂","n₁/n₂=θ₁/θ₂"],0,"This is the data-booklet form.");
M(4,0,"Total internal reflection can occur when a wave travels",["from higher refractive index to lower refractive index at sufficiently large incidence angle","from lower index to higher index at any angle","only at normal incidence","only in vacuum"],0,"TIR requires incidence from optically denser to rarer medium and angle above critical.");
M(5,0,"At the critical angle, the refracted ray travels",["along the boundary","along the normal","back along the incident ray","at 45° in every medium"],0,"Refraction angle is 90°.");
M(6,0,"Constructive interference occurs when path difference is",["nλ","(n+1/2)λ","λ/4 only","always zero only"],0,"Constructive path difference is an integer multiple of λ.");
M(7,0,"Destructive interference occurs when path difference is",["(n+1/2)λ","nλ","2nλ","λ only"],0,"Destructive path difference is a half-integer multiple.");
M(8,0,"In Young's double-slit experiment, fringe spacing s is proportional to",["wavelength λ","slit separation d","1/screen distance D","1/λ"],0,"s=λD/d.");
M(9,0,"If the screen distance in a double-slit experiment doubles, fringe spacing becomes",["twice as large","half as large","four times as large","unchanged"],0,"s∝D.");
M(10,0,"If the slit separation doubles with λ and D fixed, fringe spacing becomes",["half as large","twice as large","four times as large","unchanged"],0,"s∝1/d.");
M(11,0,"Diffraction is most noticeable when aperture size is",["comparable to wavelength","much larger than wavelength","independent of wavelength","zero only"],0,"Diffraction is significant when aperture and wavelength are comparable.");
M(12,0,"Two coherent sources have",["a constant phase difference","different frequencies that vary randomly","zero amplitude","different wave speeds in the same medium"],0,"Coherence requires stable relative phase.");
M(13,0,"If two equal-amplitude waves arrive exactly in phase, the resultant amplitude is",["twice the individual amplitude","zero","the same as one wave","half as large"],0,"Displacements add.");
M(14,0,"If two equal-amplitude waves arrive exactly out of phase by π, the resultant amplitude is",["zero","twice one amplitude","one amplitude","four times one amplitude"],0,"Equal opposite displacements cancel.");
M(15,1,"For single-slit diffraction, the angular position of the first minimum is approximately given by",["θ=λ/b","θ=b/λ","θ=λb","θ=2πb/λ"],0,"IB AHL relation θ=λ/b for small-angle treatment.");
M(16,1,"If slit width b is reduced, the central diffraction maximum becomes",["wider","narrower","unchanged","zero width"],0,"θ∝1/b.");
M(17,1,"A diffraction grating satisfies",["nλ=d sinθ","nλ=d cosθ","λ=nd/θ","n=dλ sinθ"],0,"Grating maxima obey nλ=d sinθ.");
M(18,1,"Increasing the number of illuminated slits in a diffraction grating tends to make principal maxima",["narrower and sharper","broader and less defined","disappear","shift independently of wavelength"],0,"More slits sharpen principal maxima.");
M(19,1,"In a real double-slit pattern with finite slit width, the interference fringes are",["modulated by a single-slit diffraction envelope","all equal in intensity forever","unaffected by slit width","replaced by one single bright line"],0,"Single-slit diffraction sets the envelope.");
M(20,1,"A higher diffraction-grating order generally appears at",["larger angle for the same wavelength","smaller angle for the same wavelength","the same angle for every order","zero angle"],0,"sinθ=nλ/d.");

/* 10 Paper 1B */
P(1,0,"A laser passes from air into glass and the refracted angle is measured.",["θair / °","θglass / °"],[[10,6.6],[20,13.1],[30,19.2],[40,25.0],[50,30.7]],[
{q:"State the graph that can test Snell's law.",m:1,ms:["sinθair against sinθglass or vice versa"]},
{q:"State what the gradient represents for sinθair plotted against sinθglass.",m:1,ms:["nglass/nair"]},
{q:"Estimate whether glass has higher or lower refractive index than air.",m:1,ms:["higher"]},
{q:"Suggest one source of angular uncertainty.",m:1,ms:["ray width / protractor resolution / normal alignment"]}]);
P(2,0,"A beam inside glass is incident on a glass-air boundary at increasing angles.",["incidence / °","refracted behaviour"],[[30,"ray emerges"],[35,"ray emerges"],[40,"ray near boundary"],[42,"ray along boundary"],[45,"TIR"],[50,"TIR"]],[
{q:"Estimate the critical angle.",m:1,ms:["about 42°"]},
{q:"State what happens to the refracted angle at the critical angle.",m:1,ms:["90°"]},
{q:"Explain why no transmitted ray appears above the critical angle.",m:2,ms:["Snell's law would require sinθ>1, so total internal reflection occurs"]},
{q:"State one application of total internal reflection.",m:1,ms:["optical fibres / prisms"]}]);
P(3,0,"A double-slit experiment uses different screen distances while λ and d are fixed.",["D / m","s / mm"],[[0.50,1.2],[0.75,1.8],[1.00,2.4],[1.25,3.0],[1.50,3.6]],[
{q:"Describe the relationship between fringe spacing and screen distance.",m:1,ms:["directly proportional"]},
{q:"State what the gradient of s against D represents.",m:1,ms:["λ/d"]},
{q:"Predict s at D=2.0 m.",m:1,ms:["4.8 mm"]},
{q:"State one control variable.",m:1,ms:["wavelength / slit separation"]}]);
P(4,0,"The wavelength is changed in a double-slit experiment while geometry stays fixed.",["λ / nm","s / mm"],[[450,1.80],[500,2.00],[550,2.20],[600,2.40],[650,2.60]],[
{q:"State the relationship between s and λ.",m:1,ms:["directly proportional"]},
{q:"Explain the trend using s=λD/d.",m:1,ms:["D/d is constant"]},
{q:"Determine the constant ratio s/λ in consistent units.",m:2,ms:["D/d from the data"]},
{q:"State why monochromatic light is useful.",m:1,ms:["it gives a single well-defined fringe spacing"]}]);
P(5,0,"Two coherent loudspeakers emit the same tone. Sound intensity is sampled along a line.",["position / m","relative intensity"],[[0.0,10],[0.2,2],[0.4,9],[0.6,1],[0.8,10]],[
{q:"Identify positions of constructive interference.",m:1,ms:["near 0.0,0.4,0.8 m"]},
{q:"Identify positions of destructive interference.",m:1,ms:["near 0.2,0.6 m"]},
{q:"Explain why minima may not reach zero.",m:1,ms:["unequal amplitudes / reflections / incoherent background"]},
{q:"State the condition required of the two sources for a stable pattern.",m:1,ms:["same frequency with constant phase difference"]}]);
P(6,0,"Water waves pass through openings of different widths at fixed wavelength.",["opening / λ","qualitative spreading"],[[0.5,"very strong"],[1.0,"strong"],[2.0,"moderate"],[5.0,"small"],[10.0,"very small"]],[
{q:"Describe the trend.",m:1,ms:["diffraction decreases as opening becomes large compared with wavelength"]},
{q:"State when diffraction is most significant.",m:1,ms:["opening comparable with or smaller than wavelength"]},
{q:"Explain why geometric-ray behaviour is a better approximation for very large openings.",m:1,ms:["diffraction angles become small"]},
{q:"State one way to increase diffraction without changing the opening.",m:1,ms:["increase wavelength"]}]);
P(7,0,"A double-slit experiment varies slit separation.",["d / mm","s / mm"],[[0.20,5.0],[0.25,4.0],[0.40,2.5],[0.50,2.0],[1.00,1.0]],[
{q:"State a linearizing graph.",m:1,ms:["s against 1/d"]},
{q:"Explain why closer slits give wider fringes.",m:1,ms:["s=λD/d"]},
{q:"State what the gradient can be used to determine if D is known.",m:1,ms:["wavelength λ"]},
{q:"Suggest one reason very small slit separation can be difficult experimentally.",m:1,ms:["slits hard to fabricate/resolve; finite slit width effects"]}]);
P(8,1,"A single slit is illuminated with monochromatic light. The first-minimum angle is measured for several slit widths.",["b / μm","θ / mrad"],[[100,6.0],[150,4.0],[200,3.0],[250,2.4],[300,2.0]],[
{q:"State the predicted relationship.",m:1,ms:["θ proportional to 1/b"]},
{q:"State a linearizing graph.",m:1,ms:["θ against 1/b"]},
{q:"Use one row to estimate wavelength.",m:2,ms:["λ≈bθ≈6.0×10⁻7 m"]},
{q:"Explain why small-angle units must be converted consistently.",m:1,ms:["θ in the formula is in radians"]}]);
P(9,1,"A diffraction grating is used with a 600 nm laser.",["order n","angle / °"],[[1,21.1],[2,45.9],[3,"not observed"]],[
{q:"Use first order to estimate grating spacing d.",m:2,ms:["d=nλ/sinθ ≈1.67 μm"]},
{q:"Explain why the third order is absent.",m:2,ms:["nλ/d would exceed 1 for sinθ"]},
{q:"State how angle changes with order.",m:1,ms:["increases"]},
{q:"State one advantage of a grating over two slits for wavelength measurement.",m:1,ms:["sharper/narrower principal maxima"]}]);
P(10,1,"A finite-width double-slit produces fringes under a diffraction envelope.",["fringe number from centre","relative intensity"],[[0,100],[1,82],[2,48],[3,12],[4,0],[5,8]],[
{q:"Explain why fringe intensity changes across the pattern.",m:2,ms:["double-slit interference is modulated by the single-slit diffraction envelope"]},
{q:"Identify what a missing interference order can indicate.",m:1,ms:["an interference maximum coincides with a single-slit minimum"]},
{q:"State which geometric parameters separately control fine fringe spacing and broad envelope width.",m:2,ms:["slit separation controls fringes; slit width controls envelope"]},
{q:"Predict the effect of narrowing each slit while keeping separation fixed.",m:1,ms:["broader diffraction envelope; fringe spacing unchanged"]}]);

/* 10 Paper 2 */
T(1,0,"A ray passes from medium 1 into medium 2.",[
{q:"Write Snell's law in the IB form.",m:1,ms:["n1 sinθ2 = n2 sinθ1"]},
{q:"If n2>n1, state whether the ray bends toward or away from the normal.",m:1,ms:["toward the normal"]},
{q:"Relate refractive index ratio to wave-speed ratio.",m:1,ms:["n1/n2=v2/v1 in the stated relation"]},
{q:"State which wave property remains unchanged at the boundary.",m:1,ms:["frequency"]}]);
T(2,0,"Light travels from glass of refractive index n into air.",[
{q:"Derive the critical-angle relation.",m:2,ms:["set refracted angle to 90°, giving sin c=nair/nglass≈1/n"]},
{q:"State the two conditions for total internal reflection.",m:2,ms:["from higher to lower refractive index; incidence angle greater than critical"]},
{q:"Explain why optical fibres can guide light around bends.",m:1,ms:["repeated total internal reflection at the core-cladding boundary"]},
{q:"State one practical limitation.",m:1,ms:["losses at bends/imperfections/absorption"]}]);
T(3,0,"Two coherent sources produce waves of wavelength λ at point P with path lengths r1 and r2.",[
{q:"Write the condition for constructive interference.",m:1,ms:["|r2-r1|=nλ"]},
{q:"Write the condition for destructive interference.",m:1,ms:["|r2-r1|=(n+1/2)λ"]},
{q:"Explain why equal source frequency is necessary for a stable pattern.",m:1,ms:["otherwise relative phase changes continuously"]},
{q:"State what happens if one source amplitude is much smaller.",m:1,ms:["contrast between maxima and minima decreases"]}]);
T(4,0,"A double-slit experiment has wavelength λ, slit separation d and screen distance D.",[
{q:"Write the fringe-spacing equation.",m:1,ms:["s=λD/d"]},
{q:"Predict the effect of doubling λ.",m:1,ms:["s doubles"]},
{q:"Predict the effect of doubling d.",m:1,ms:["s halves"]},
{q:"Explain why increasing D makes the pattern easier to measure.",m:1,ms:["fringes are more widely separated"]}]);
T(5,0,"A plane wave passes through a narrow opening.",[
{q:"Define diffraction qualitatively.",m:1,ms:["spreading/bending of waves after an aperture or obstacle"]},
{q:"State when diffraction is strongest.",m:1,ms:["aperture size comparable with wavelength"]},
{q:"Predict the effect of increasing wavelength for fixed aperture.",m:1,ms:["more spreading"]},
{q:"Explain why sound diffracts around everyday obstacles more readily than visible light.",m:2,ms:["sound wavelengths are much larger and more comparable to object sizes"]}]);
T(6,0,"Two in-phase sources produce an interference pattern on a screen.",[
{q:"State the path difference at the central maximum.",m:1,ms:["zero"]},
{q:"State the path difference at the first adjacent minimum.",m:1,ms:["λ/2"]},
{q:"State the path difference at the first adjacent maximum.",m:1,ms:["λ"]},
{q:"Explain why phase difference follows from path difference.",m:1,ms:["each wavelength corresponds to 2π phase"]}]);
T(7,0,"A student measures wavelength using Young's double-slit experiment.",[
{q:"Rearrange the fringe-spacing equation for λ.",m:1,ms:["λ=sd/D"]},
{q:"State which length measurements should be repeated or taken over many fringes.",m:1,ms:["measure distance across many fringe spacings and divide"]},
{q:"Explain why measuring many fringes reduces fractional uncertainty.",m:1,ms:["same absolute ruler uncertainty is spread over a larger total distance"]},
{q:"State one systematic error to control.",m:1,ms:["incorrect slit separation / screen not perpendicular / wavelength calibration"]}]);
T(8,1,"Monochromatic light passes through a single slit of width b.",[
{q:"Write the first-minimum relation.",m:1,ms:["θ=λ/b for the small-angle relation used"]},
{q:"Explain why narrowing b broadens the central maximum.",m:1,ms:["θ increases as 1/b"]},
{q:"State the effect of increasing λ.",m:1,ms:["broader diffraction pattern"]},
{q:"Explain why the central maximum is wider than secondary maxima qualitatively.",m:1,ms:["first minima occur symmetrically on each side, spanning a larger angular interval around centre"]}]);
T(9,1,"A diffraction grating has slit spacing d and is illuminated normally by wavelength λ.",[
{q:"Write the principal-maximum condition.",m:1,ms:["nλ=d sinθ"]},
{q:"State the condition for the largest possible order.",m:1,ms:["nλ/d≤1"]},
{q:"Explain why increasing slit number sharpens principal maxima.",m:2,ms:["more-wave interference reinforces only very specific phase-matching angles and cancels nearby angles more strongly"]},
{q:"State how a measured first-order angle can be used to find λ.",m:1,ms:["λ=d sinθ for n=1"]}]);
T(10,1,"A double-slit pattern is formed using slits of finite width b and centre separation d.",[
{q:"State which parameter controls the narrow interference-fringe spacing.",m:1,ms:["d"]},
{q:"State which parameter controls the broad diffraction-envelope width.",m:1,ms:["b"]},
{q:"Explain why some expected interference maxima may be missing.",m:2,ms:["they coincide with angles where the single-slit envelope has minima"]},
{q:"Predict the effect of increasing d while b stays constant.",m:1,ms:["fringes become closer together while envelope remains approximately unchanged"]}]);

const own=[...MCQ,...P1B,...P2].filter(q=>q.uid&&q.s===sub);
const prompts=own.filter(q=>q.uid.includes("-M-")).length+own.filter(q=>q.uid.includes("-P-")||q.uid.includes("-T-")).reduce((n,q)=>n+q.f().parts.length,0);
if(prompts!==100)throw new Error("C.3 prompt count "+prompts);
})();