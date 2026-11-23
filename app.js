/* =========================================================
   LANGUE — FR / EN
   ========================================================= */
let LANG=(()=>{try{return localStorage.getItem("yb-lang")||"fr"}catch(e){return "fr"}})();
const tr=(fr,en)=>LANG==="en"?en:fr;
const L=(o,k)=>LANG==="en"&&o.en&&o.en[k]!=null?o.en[k]:o[k];
const I18N={
 ctaContact:"Contact me",avail:"<b>Available</b> for new projects",
 lead:"Specialised in visual identities, digital communication and interface experiences. Passionate about visual design, I combine <b>creativity, attention to detail</b> and mastery of Adobe tools and Figma to build consistent solutions tailored to brand goals.",
 city:"Tunis, Tunisia",ctaWork:"See my projects",ctaCV:"View my resume",
 tWork:"Work",tExplo:"Explorations",tXp:"Experience",
 workH:"Selected <em class=\"it\">work</em>",workP:"UI/UX, identities, campaigns and imagery — created between 2022 and 2026 for Tunisian institutions, agencies and brands.",
 exploH:"Explorations <em class=\"it\">& side projects</em>",exploP:"Type experiments, photography, competitions and personal projects — the playground where ideas are born.",
 bioK:"About",bioGo:"Discover Designette",
 bioP1:"Trained at the Higher School of Design Sciences and Technologies (ESSTED) in Tunis, I learned the craft in agencies before leading my own freelance projects.",
 bioP2:"Since 2022, I also run <b style=\"color:var(--ink);font-weight:600\">Designette</b>, my custom print/digital design studio.",
 v1:"Creativity",v1p:"A strong idea before form: every project starts from a concept.",v2:"Attention to detail",v2p:"Grids, alignment, typography: precision makes the difference.",
 v3:"Listening to briefs",v3p:"Interpreting a brief while keeping a creative approach.",v4:"Teamwork",v4p:"Used to multidisciplinary teams and agency pace.",
 langsK:"Languages",xpH:"Experience",xpP:"Agencies, freelance and large-scale projects — from print to digital, since 2022.",xpK:"Career",
 eduK:"Education",eduT:"Master's · Digital Design",eduS:"ESSTED — Higher School of Design Sciences and Technologies, Tunis",
 toolsK:"Tools",skDig:"Digital design",cvFull:"View my full resume",nfP:"This page got lost between two layers.",nfB:"Back to projects",
 ctH:"Let's create something <em class=\"it\">memorable.</em>",copy:"Copy",fName:"Your name",fMail:"Your email",fType:"Project type",fMsg:"Your message",fSend:"Send my message",
 sH:"Your message is ready to go.",sP:"Gmail opens with the message already written and addressed to Yasmine: just press “Send”. Nothing opened? Use the button below.",
 sOpen:"Send via Gmail ↗",sWa:"Send via WhatsApp ↗",sCopy:"Copy message",sEdit:"Edit",fMade:"Designed and built in Tunis",fTop:"Back to top ↑",cvPdf:"Open PDF ↗"
};
const I18N_PH={phName:"Full name",phMail:"you@example.com",phMsg:"Tell me about your project, timeline and ideas…"};

/* =========================================================
   DONNÉES
   ========================================================= */
const PROJECTS=[
 {id:"point-de-recharge",title:"Point de Recharge",full:"Point de Recharge",year:"2025",cats:["uiux"],
  tags:["UX Research","UI Design","Prototype"],client:"Projet académique — Master 1 Design Digital, ESSTED",role:"UX/UI Designer",
  deliv:[],tools:"Figma",motif:"signal",custom:"ve",image:"img/ve/cover.webp",pal:{bg:"#0E3B26",a:"#2EC463",b:"#7CF0A8",c:"#F2FFF7"},
  summary:"Une application qui sécurise la recharge des véhicules électriques en Tunisie : bornes en temps réel, trajets planifiés et camion de recharge d'urgence.",context:[],steps:[],
  en:{client:"Academic project — Master 1 Digital Design, ESSTED",summary:"An app that makes EV charging in Tunisia reliable: real-time charging stations, planned trips and an emergency charging truck."}},
 {id:"social-bubbles",title:"Social Bubbles",full:"Social Bubbles",year:"2026",cats:["uiux"],
  tags:["UI Design","App mobile","Prototype"],client:"",role:"UI Designer",deliv:[],tools:"Figma",motif:"bubble",custom:"ui",image:"img/sb/cover.webp",pal:{bg:"#5B16D9",a:"#8B3DFF",b:"#C49BFF",c:"#fff"},
  summary:"Une application de rencontre qui aide à réduire l'isolement : bulles d'activités locales, défis et bien-être social.",context:[],steps:[],
  en:{tags:["UI Design","Mobile app","Prototype"],summary:"A social meet-up app that helps reduce loneliness: local activity bubbles, challenges and social well-being."}},
 {id:"nourane",title:"Association Nourane",full:"Association Nourane",year:"2026",cats:["uiux"],
  tags:["UX Research","UI Design","Refonte web"],client:"Projet académique — Master 1 Design Digital, ESSTED",role:"UX/UI Designer",
  deliv:[],tools:"Figma",motif:"petal",custom:"nr",image:"img/nr/cover.webp",pal:{bg:"#B83FB8",a:"#E8467C",b:"#5B6CF0",c:"#fff"},
  summary:"Refonte du site d'une association tunisienne de lutte contre le cancer : actualités interactives, actions terrain, gamification et dons à l'impact visible.",context:[],steps:[],
  en:{tags:["UX Research","UI Design","Web redesign"],client:"Academic project — Master 1 Digital Design, ESSTED",summary:"Website redesign for a Tunisian anti-cancer association: interactive news, field actions, gamification and donations with visible impact."}},
 {id:"design-droit",title:"Design & Droit",full:"Design & Droit — Intellectuel.tn",year:"2026",cats:["uiux"],
  tags:["UX Research","UI Design","Plateforme web"],client:"Projet académique en équipe",role:"UX/UI Designer",
  deliv:[],tools:"Figma",motif:"grid",custom:"pi",image:"img/pi/cover.webp",pal:{bg:"#9B1B5E",a:"#D3122A",b:"#5B3FD1",c:"#fff"},
  summary:"Intellectuel.tn : la boîte à outils juridique des créatifs tunisiens — droits d'auteur, checklist légale, glossaire et auto-évaluation, sans jargon.",context:[],steps:[],
  en:{tags:["UX Research","UI Design","Web platform"],client:"Academic team project",summary:"Intellectuel.tn: a legal toolkit for Tunisian creatives — copyright, legal checklist, glossary and self-assessment, without jargon."}},
 {id:"monsapo",title:"Monsapo",full:"Monsapo — Landing page",year:"2025",cats:["uiux"],
  tags:["UI Design","Landing page"],client:"",role:"UI Designer",deliv:[],tools:"Figma",motif:"grid",custom:"ui",image:"img/ms/cover.webp",pal:{bg:"#55A630",a:"#FFD23F",b:"#fff",c:"#fff"},
  summary:"La landing page d'une marque tunisienne de produits ménagers écologiques : promesse, produits, économie circulaire et contact.",context:[],steps:[],
  en:{summary:"The landing page of a Tunisian eco-friendly cleaning brand: promise, products, circular economy and contact."}},
 {id:"tunis-2027",title:"Tunis 2027",full:"Tunis, Capitale du Tourisme Arabe 2027",year:"2026",cats:["graphique"],
  tags:["Identité visuelle","Charte graphique"],client:"",role:"",deliv:[],tools:"",motif:"arch",custom:"tn",image:"img/tn/hero.webp",pal:{bg:"#001489",a:"#BE3455",b:"#fff",c:"#fff"},
  summary:"Logo, charte graphique et déclinaisons de la campagne qui fait de Tunis la Capitale du Tourisme Arabe 2027.",context:[],steps:[],
  en:{full:"Tunis, Arab Tourism Capital 2027",tags:["Visual identity","Brand guidelines"],summary:"Logo, brand guidelines and roll-out for the campaign making Tunis the Arab Tourism Capital 2027."}},
 {id:"flexoprint",title:"FlexoPrint",full:"FlexoPrint — Refonte de logo & charte",year:"2026",cats:["graphique"],tags:["Refonte de logo","Charte graphique"],client:"",role:"",deliv:[],tools:"",motif:"petal",custom:"fx",image:"img/fx/facade.webp",pal:{bg:"#001489",a:"#F4C400",b:"#fff",c:"#fff"},
  summary:"Refonte du logo et de la charte graphique de FlexoPrint (Rose Blanche Group), leader tunisien de l'impression flexographique.",context:[],steps:[],
  en:{full:"FlexoPrint — Logo & brand redesign",tags:["Logo redesign","Brand guidelines"],summary:"Logo and brand guidelines redesign for FlexoPrint (Rose Blanche Group), Tunisia's flexographic printing leader."}},
 {id:"funkiz",title:"Funkiz",full:"Funkiz — Campagne 360°",year:"2025",cats:["graphique"],tags:["Campagne 360°","Packaging"],client:"",role:"",deliv:[],tools:"",motif:"grid",custom:"fk",image:"img/fk/affichage.webp",pal:{bg:"#3A2BD8",a:"#E91E8C",b:"#C6F432",c:"#fff"},
  summary:"Campagne 360° street et graffiti pour une marque de chips : packaging, réseaux sociaux, affichage, roll-ups, stand et camion.",context:[],steps:[],
  en:{full:"Funkiz — 360° campaign",tags:["360° campaign","Packaging"],summary:"A street, graffiti-style 360° campaign for a crisps brand: packaging, social media, billboards, roll-ups, stand and truck."}},
 {id:"la-gazelle",title:"La Gazelle Chamia",full:"La Gazelle — Campagne Chamia",year:"2025",cats:["graphique"],tags:["Campagne","Ramadan"],client:"",role:"",deliv:[],tools:"",motif:"arch",custom:"gz",image:"img/gz/billboard.webp",pal:{bg:"#5A2D0C",a:"#B8862B",b:"#fff",c:"#fff"},
  summary:"Campagne Ramadan pour la halwa chamia de La Gazelle : affichage grand format, habillage camion et stand de dégustation.",context:[],steps:[],
  en:{full:"La Gazelle — Chamia campaign",tags:["Campaign","Ramadan"],summary:"A Ramadan campaign for La Gazelle's halwa chamia: large billboard, truck wrap and tasting stand."}},
 {id:"bande-dessinee",title:"التفاح اللي يفوح",full:"Bande dessinée — التفاح اللي يفوح",year:"2024",cats:["graphique"],tags:["Illustration","Bande dessinée"],client:"",role:"",deliv:[],tools:"",motif:"bubble",custom:"bd",image:"img/bd/cover.webp",pal:{bg:"#E39A6B",a:"#C2551F",b:"#fff",c:"#fff"},
  summary:"Une bande dessinée illustrée adaptant un conte d'Abdelaziz El Aroui, en dialecte tunisien.",context:[],steps:[],
  en:{full:"Comic book — التفاح اللي يفوح",tags:["Illustration","Comic book"],summary:"An illustrated comic adapting a tale by Abdelaziz El Aroui, in Tunisian dialect."}},
 {id:"energy-fruits-360",title:"Campagne 360° STIL",full:"Campagne 360° — Trail #Energy Fruits (STIL)",year:"2025",cats:["graphique"],tags:["Campagne 360°","Brand activation","Identité"],client:"STIL",role:"",deliv:[],tools:"",motif:"signal",custom:"ec",image:"img/ec/cover.webp",pal:{bg:"#1C3A10",a:"#5AA02C",b:"#C6F432",c:"#fff"},
  summary:"Campagne promotionnelle 360° pour la marque STIL : un événement de marque, Trail #Energy Fruits, décliné du logo au spot.",context:[],steps:[],
  en:{full:"360° campaign — Trail #Energy Fruits (STIL)",tags:["360° campaign","Brand activation","Identity"],summary:"A 360° promotional campaign for the brand STIL: a brand event, Trail #Energy Fruits, from logo to commercial."}},
 {id:"energy-fruits",title:"Trail #Energy Fruits",full:"Trail #Energy Fruits — Spot animé",year:"2025",cats:["motion"],tags:["Motion design","Spot publicitaire"],client:"",role:"",deliv:[],tools:"",motif:"signal",custom:"ef",image:"img/ef/cover.webp",pal:{bg:"#1C3A10",a:"#5AA02C",b:"#C6F432",c:"#fff"},
  summary:"Spot publicitaire animé pour le jeu Energy Fruits, réalisé sous After Effects et Adobe Animate.",context:[],steps:[],
  en:{full:"Trail #Energy Fruits — Animated spot",tags:["Motion design","Commercial"],summary:"An animated commercial for the Energy Fruits contest, made with After Effects and Adobe Animate."}}
];
const FILTERS=[["all","Tous","All"],["uiux","UI/UX design","UI/UX design"],["graphique","Design graphique","Graphic design"],["photo","Photographie","Photography"],["motion","Motion design","Motion design"]];

const JOBS=[
 {y:"2026",t:"Designer graphique & UI designer",o:"Tunis, Capitale du Tourisme Arabe 2027",en:{t:"Graphic & UI designer",o:"Tunis, Arab Tourism Capital 2027"},p:"tunis-2027"},
 {y:"2026",t:"Designer graphique & UI designer",o:"FlexoPrint — Hackathon FLEXOPRINT",en:{t:"Graphic & UI designer",o:"FlexoPrint — FLEXOPRINT Hackathon"},p:"flexoprint"},
 {y:"2025",t:"Projet de fin d'études en stage",o:"Funkiz — Campagne 360°",en:{t:"Graduation project during an internship",o:"Funkiz — 360° campaign"},p:"funkiz"},
 {y:"2025",t:"Projet de fin d'études en stage",o:"La Gazelle — Campagne Chamia",en:{t:"Graduation project during an internship",o:"La Gazelle — Chamia campaign"},p:"la-gazelle"},
 {y:"2025",t:"Campagne brand activation",o:"STIL — Trail #Energy Fruits",en:{t:"Brand activation campaign",o:"STIL — Trail #Energy Fruits"},p:"energy-fruits-360"},
 {y:"2024",t:"Illustratrice — bande dessinée",o:"التفاح اللي يفوح",en:{t:"Illustrator — comic book",o:"التفاح اللي يفوح"},p:"bande-dessinee"},
 {y:"2022",t:"Fondatrice",o:"Designette — studio de créations personnalisées print/digital",en:{t:"Founder",o:"Designette — custom print/digital design studio"},p:"#explorations"}
];
const TOOLS=[["ai","Illustrator"],["ps","Photoshop"],["ae","After Effects"],["id","InDesign"],["figma","Figma"]];
const LANGS=[["Arabe","Arabic","C2",100],["Français","French","C1",86],["Anglais","English","B1",58],["Turc","Turkish","A2",34]];

/* =========================================================
   GÉNÉRATEUR DE VISUELS (SVG) — couvertures de projets
   ========================================================= */
const W=1200,H=900;
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const MOTIF={
 arch(x,y,s,c1,c2,c3){const r=s/2;return `<path d="M${x} ${y+s*1.3}V${y+r}a${r} ${r} 0 0 1 ${s} 0V${y+s*1.3}z" fill="${c1}"/><path d="M${x+s*.16} ${y+s*1.3}V${y+r+s*.04}a${r-s*.16} ${r-s*.16} 0 0 1 ${s-s*.32} 0V${y+s*1.3}z" fill="${c2}"/><circle cx="${x+r}" cy="${y+r+s*.08}" r="${s*.13}" fill="${c3}"/>${[...Array(7)].map((_,i)=>{const a=Math.PI+i*Math.PI/6;return `<circle cx="${x+r+Math.cos(a)*(r-s*.08)}" cy="${y+r+Math.sin(a)*(r-s*.08)}" r="${s*.022}" fill="${c3}"/>`}).join("")}`},
 petal(x,y,s,c1,c2,c3){const cx=x+s/2,cy=y+s/2;return [...Array(6)].map((_,i)=>`<ellipse cx="${cx}" cy="${cy-s*.24}" rx="${s*.16}" ry="${s*.27}" fill="${i%2?c2:c1}" opacity=".92" transform="rotate(${i*60} ${cx} ${cy})"/>`).join("")+`<circle cx="${cx}" cy="${cy}" r="${s*.1}" fill="${c3}"/>`},
 grid(x,y,s,c1,c2,c3){const g=s*.06,u=(s-2*g)/3;let o="";for(let i=0;i<9;i++){const cx=x+(i%3)*(u+g),cy=y+Math.floor(i/3)*(u+g);o+=i===4?`<circle cx="${cx+u/2}" cy="${cy+u/2}" r="${u/2}" fill="${c2}"/>`:`<rect x="${cx}" y="${cy}" width="${u}" height="${u}" rx="${u*.22}" fill="${i===2||i===6?c3:c1}"/>`}return o},
 flame(x,y,s,c1,c2,c3){let o="";const cs=[c1,c2,c3,c2];for(let i=0;i<4;i++){const yy=y+i*s*.22,h=s*.18;o+=`<path d="M${x} ${yy+h}c${s*.12} ${-h*1.6} ${s*.25} ${h*1.2} ${s*.38} 0s${s*.25} ${-h*1.4} ${s*.38} 0s${s*.17} ${-h*1.1} ${s*.24} 0V${yy+h*2.2}H${x}z" fill="${cs[i]}" opacity="${1-i*.12}"/>`}return o},
 arrows(x,y,s,c1,c2,c3){let o="";for(let i=0;i<3;i++){const xx=x+i*s*.3;o+=`<path d="M${xx} ${y+s*.1}L${xx+s*.3} ${y+s*.5}L${xx} ${y+s*.9}" fill="none" stroke="${i===2?c2:c1}" stroke-width="${s*.11}" stroke-linejoin="round" stroke-linecap="round"/>`}return o},
 envelope(x,y,s,c1,c2,c3){const h=s*.7,yy=y+s*.15;return `<rect x="${x}" y="${yy}" width="${s}" height="${h}" rx="${s*.04}" fill="${c3}"/><path d="M${x} ${yy}L${x+s/2} ${yy+h*.58}L${x+s} ${yy}" fill="none" stroke="${c2}" stroke-width="${s*.012}"/><circle cx="${x+s/2}" cy="${yy+h*.58}" r="${s*.11}" fill="${c1}"/><path d="M${x+s/2-s*.04} ${yy+h*.58}l${s*.03} ${s*.03} ${s*.05}-${s*.06}" stroke="${c3}" stroke-width="${s*.018}" fill="none" stroke-linecap="round"/>`},
 bubble(x,y,s,c1,c2,c3){return `<rect x="${x}" y="${y}" width="${s}" height="${s*.72}" rx="${s*.18}" fill="${c1}"/><path d="M${x+s*.2} ${y+s*.7}l-${s*.02} ${s*.22} ${s*.2}-${s*.2}z" fill="${c1}"/>${[0,1,2].map(i=>`<rect x="${x+s*.16}" y="${y+s*.18+i*s*.14}" width="${s*(i===2?.4:.68)}" height="${s*.07}" rx="${s*.035}" fill="${i===0?c2:c3}" opacity="${i===0?1:.75}"/>`).join("")}`},
 signal(x,y,s,c1,c2,c3){const cx=x+s/2,cy=y+s*.85;let o=`<circle cx="${cx}" cy="${cy}" r="${s*.08}" fill="${c2}"/>`;for(let i=1;i<=4;i++){const r=s*.12*i+s*.04;o+=`<path d="M${cx-r*.86} ${cy-r*.5}A${r} ${r} 0 0 1 ${cx+r*.86} ${cy-r*.5}" fill="none" stroke="${i%2?c1:c3}" stroke-width="${s*.05}" stroke-linecap="round"/>`}return o}
};
function svgWrap(inner,w=W,h=H){return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`}
function grain(id){return `<filter id="g${id}"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .06 0"/></filter><rect width="100%" height="100%" filter="url(#g${id})"/>`}
let gid=0;
function cover(p,v=0,w=W,h=H){
 const {bg,a,b,c}=p.pal,m=MOTIF[p.motif],id=++gid;let s="";
 if(v===0){ // héro
   const sz=Math.min(w,h)*.62;
   s=`<rect width="${w}" height="${h}" fill="${bg}"/><circle cx="${w*.78}" cy="${h*.2}" r="${h*.42}" fill="${b}" opacity=".18"/>
   <g transform="translate(0,0)">${m(w-sz-w*.08,h*.5-sz*.55,sz,a,b,c)}</g>
   <text x="${w*.06}" y="${h*.13}" font-family="Plus Jakarta Sans,sans-serif" font-weight="600" font-size="${h*.026}" fill="${p.pal.t||c}" opacity=".7" letter-spacing="2">${esc(p.year)} — ${esc(p.tags[0].toUpperCase())}</text>
   <text x="${w*.055}" y="${h*.88}" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="${Math.min(h*.12,(w*.86)/(p.title.length*.6))}" fill="${p.pal.t||c}" letter-spacing="-2">${esc(p.title)}</text>`+grain(id);
 }else if(v===1){ // motif répété
   let t="";const n=5,u=w/n;for(let r=0;r<Math.ceil(h/u)+1;r++)for(let k=0;k<n;k++){const alt=(r+k)%2;t+=m(k*u+u*.16,r*u+u*.12-u*.3,u*.68,alt?a:c,alt?bg:b,alt?c:a)}
   s=`<rect width="${w}" height="${h}" fill="${b}"/><g opacity=".95">${t}</g>`+grain(id);
 }else if(v===2){ // palette & typo
   const cols=[bg,a,b,c];s=`<rect width="${w}" height="${h}" fill="${c}"/>`;
   cols.forEach((col,i)=>{const x=w*.06+i*(w*.22),y=h*.48;s+=`<rect x="${x}" y="${y}" width="${w*.2}" height="${h*.4}" rx="${h*.03}" fill="${col}" stroke="${bg}" stroke-opacity=".15"/><text x="${x+18}" y="${y+h*.4-20}" font-family="Plus Jakarta Sans,sans-serif" font-weight="600" font-size="${h*.024}" fill="${i===3?bg:c}" opacity=".85">${col.toUpperCase()}</text>`});
   s+=`<text x="${w*.06}" y="${h*.38}" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="${h*.3}" fill="${bg}" letter-spacing="-8">Aa</text><text x="${w*.42}" y="${h*.2}" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="${h*.04}" fill="${bg}">${esc(p.title)}</text><text x="${w*.42}" y="${h*.27}" font-family="Plus Jakarta Sans,sans-serif" font-size="${h*.028}" fill="${bg}" opacity=".6">Palette · Typographie · Système</text><g>${m(w*.78,h*.1,h*.24,bg,a,b)}</g>`;
 }else{ // mockup affiche
   const pw=h*.56,ph=pw*1.4,px=w/2-pw/2,py=h/2-ph/2;
   s=`<rect width="${w}" height="${h}" fill="${c}"/><rect width="${w}" height="${h*.55}" y="${h*.45}" fill="${bg}" opacity=".08"/>
   <g transform="rotate(-5 ${w/2} ${h/2})"><rect x="${px+18}" y="${py+26}" width="${pw}" height="${ph}" rx="6" fill="#000" opacity=".18" filter="url(#b${id})"/><rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="6" fill="${bg}"/>${m(px+pw*.18,py+ph*.12,pw*.64,a,b,c)}<text x="${px+pw*.08}" y="${py+ph*.9}" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="${Math.min(pw*.11,(pw*.84)/(p.title.length*.6))}" fill="${p.pal.t||c}">${esc(p.title)}</text></g>
   <g transform="rotate(7 ${w*.8} ${h*.6})"><rect x="${w*.7}" y="${h*.36}" width="${pw*.55}" height="${pw*.55*1.4}" rx="5" fill="${a}"/>${m(w*.7+pw*.1,h*.36+pw*.12,pw*.35,bg,c,b)}</g>
   <g transform="rotate(-12 ${w*.2} ${h*.6})"><rect x="${w*.1}" y="${h*.44}" width="${pw*.5}" height="${pw*.5}" rx="${pw*.25}" fill="${b}"/></g>
   <defs><filter id="b${id}"><feGaussianBlur stdDeviation="14"/></filter></defs>`+grain(id);
 }
 return svgWrap(s,w,h);
}
function media(p,v,w,h){return p.image&&v===0?`<img src="${p.image}" alt="${esc(p.full)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform 1s var(--ease)">`:cover(p,v,w,h)}

/* Explorations */
function exploSVG(d){
 const A="#5764F0";
 const S={
  poster:`<rect width="1200" height="900" fill="#EDE9E1"/><text x="70" y="330" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="260" fill="${A}" letter-spacing="-14">Typo</text><text x="70" y="590" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-style="italic" font-size="260" fill="#121214" letter-spacing="-14">graphie</text><rect x="70" y="650" width="1060" height="2" fill="#121214"/><text x="1130" y="700" text-anchor="end" font-family="Plus Jakarta Sans,sans-serif" font-weight="600" font-size="24" fill="#121214">SÉRIE D'AFFICHES — 01 / 06</text><circle cx="1060" cy="190" r="70" fill="#E3704E"/>`,
  lens:`<rect width="1200" height="900" fill="#141416"/>${[220,170,120,70].map((r,i)=>`<circle cx="600" cy="420" r="${r}" fill="none" stroke="${i%2?'#fff':A}" stroke-width="${i?4:18}" opacity="${1-i*.15}"/>`).join("")}<circle cx="600" cy="420" r="34" fill="${A}"/><circle cx="660" cy="360" r="14" fill="#fff" opacity=".8"/>`,
  award:`<rect width="1200" height="900" fill="${A}"/><text x="600" y="610" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-size="440" fill="#fff">2<tspan font-size="170" dy="-220" font-style="italic">e</tspan></text>`,
  cards:`<rect width="1600" height="800" fill="#F3E3DA"/>${[0,1,2,3].map(i=>`<g transform="rotate(${-12+i*8} ${400+i*260} 420)"><rect x="${280+i*260}" y="220" width="240" height="340" rx="10" fill="${['#FFFDF9','#2E2A26','#B88A4A','#FFFDF9'][i]}"/><text x="${400+i*260}" y="410" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-weight="700" font-style="italic" font-size="40" fill="${['#B88A4A','#F3E3DA','#FFFDF9','#2E2A26'][i]}">${['Merci','Save','the','date'][i]}</text></g>`).join("")}`,
  motion:`<rect width="1200" height="900" fill="#121214"/>${[...Array(9)].map((_,i)=>`<circle cx="${200+i*100}" cy="${450+Math.sin(i*.8)*170}" r="${22+i*3}" fill="${i===8?'#C6F432':A}" opacity="${.25+i*.09}"/>`).join("")}`,
  music:`<rect width="1200" height="900" fill="#E8C26A"/>${[...Array(22)].map((_,i)=>{const h=80+Math.abs(Math.sin(i*1.3))*460;return `<rect x="${110+i*45}" y="${450-h/2}" width="22" height="${h}" rx="11" fill="#1C2A6E"/>`}).join("")}`,
  social:`<rect width="1600" height="800" fill="#DCDFFF"/>${[0,1,2,3,4].map(i=>`<g transform="translate(${130+i*280} ${i%2?170:120})"><rect width="240" height="${i%2?460:520}" rx="28" fill="#fff"/><rect x="16" y="16" width="208" height="208" rx="18" fill="${[A,'#E3704E','#121214','#C6F432','#E8C26A'][i]}"/><rect x="16" y="244" width="150" height="16" rx="8" fill="#121214"/><rect x="16" y="272" width="190" height="12" rx="6" fill="#121214" opacity=".25"/><rect x="16" y="294" width="120" height="12" rx="6" fill="#121214" opacity=".25"/></g>`).join("")}`
 };
 const vb={cards:"0 0 1600 800",social:"0 0 1600 800"}[d]||"0 0 1200 900";
 return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${S[d]}</svg>`;
}

/* =========================================================
   RENDU
   ========================================================= */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const byId=id=>PROJECTS.find(p=>p.id===id);
let curF="all";

function applyStatic(){
 document.documentElement.lang=LANG;
 $$("[data-i18n]").forEach(el=>{if(el.dataset.fr===undefined)el.dataset.fr=el.innerHTML;const k=el.dataset.i18n;el.innerHTML=LANG==="en"&&I18N[k]!=null?I18N[k]:el.dataset.fr});
 $$("[data-i18n-ph]").forEach(el=>{if(el.dataset.frph===undefined)el.dataset.frph=el.placeholder;el.placeholder=LANG==="en"?I18N_PH[el.dataset.i18nPh]:el.dataset.frph});
 $$("#langBtn [data-l]").forEach(s=>s.classList.toggle("on",s.dataset.l===LANG));
 $("#cursor").textContent=tr("Voir","View");
}

function count(f){return f==="all"?PROJECTS.length:PROJECTS.filter(p=>p.cats.includes(f)).length}
function renderAll(){
 // Éventail
 $("#fan").innerHTML=[0,1,2].map(i=>{const p=PROJECTS[i];return `<a class="card" data-i="${i}" href="#projet-${p.id}">${media(p.id==="nourane"?Object.assign({},p,{image:"img/nr/fan.webp"}):p,0,900,1200)}<span class="cap">${esc(p.title)}<span>→</span></span></a>`}).join("")+`<a class="card portrait" data-i="3" href="#experience"><img src="img/portrait.jpg" alt="Yasmine Boumaiza"><span class="cap">Yasmine Boumaiza<span>${tr("Expérience","Experience")} →</span></span></a>`;
 // Bandeau
 const mq=tr(["UI/UX Design","Identité visuelle","Charte graphique","Campagnes","Print","Social media","Direction artistique","Prototypage"],["UI/UX Design","Visual identity","Brand guidelines","Campaigns","Print","Social media","Art direction","Prototyping"]);
 $("#mq").innerHTML=[...mq,...mq].map(w=>`<span>${w}</span>`).join("");
 // Filtres + grille
 $("#filters").innerHTML=FILTERS.map(([k,fr,en])=>`<button class="chip${k===curF?" on":""}" data-f="${k}">${tr(fr,en)}<sup>${count(k)}</sup></button>`).join("");
 $("#grid").innerHTML=`<div class="empty" id="empty"><div><b>${tr("Projets bientôt en ligne","Projects coming soon")}</b><p>${tr("Cette catégorie accueillera prochainement de nouveaux travaux.","New work will be added to this category soon.")}</p></div></div>`+PROJECTS.map(p=>{const g=GROUP[p.id]||"graph";const h=(g!==lastG)?`<div class="ghead" data-g="${g}"><span>${tr(...GH[g][0])}</span><small>${tr(...GH[g][1])}</small></div>`:"";lastG=g;return h+`<a class="proj reveal" data-g="${g}" data-cats="${p.cats.join(" ")}" href="#projet-${p.id}"><div class="thumb"><div class="cv-w">${media(p,0,1600,800)}</div><div class="cv-n">${media(p,0)}</div><div class="tags">${L(p,"tags").map(t=>`<span>${t}</span>`).join("")}</div></div><div class="meta"><div><h3>${esc(p.title)}</h3><p>${esc(L(p,"summary"))}</p></div><span class="yr">${p.year}</span></div></a>`}).join("");lastG="";
 applyFilter();
 renderDsn();
 // Langues
 $("#langs").innerHTML=LANGS.map(([fr,en,l,v])=>`<div class="lang"><span>${tr(fr,en)}</span><div class="track"><div class="fill" data-w="${v}"></div></div><span class="lv">${l}</span></div>`).join("");
 // Expérience
 $$("#timeline .job").forEach(j=>j.remove());
 $("#timeline").insertAdjacentHTML("beforeend",JOBS.map(j=>`<a class="job" href="${j.p[0]==='#'?j.p:'#projet-'+j.p}"><span class="when">${j.y}</span><div><h4>${esc(L(j,"t"))}</h4><div class="org">${esc(L(j,"o"))}</div></div><span class="go" aria-hidden="true">→</span></a>`).join(""));
 $("#kit").innerHTML=TOOLS.map(([f,n])=>`<div class="tool" title="${n}"><img src="img/tools/${f}.svg" alt="${n}" loading="lazy">${n}</div>`).join("");
 // Formulaire
 $("#opts").innerHTML=FILTERS.slice(1).map(([k,fr,en])=>`<button type="button" data-k="${k}"${types.has(k)?' class="on"':""}>${tr(fr,en)}</button>`).join("");
 bindCursor();
}
const GROUP={"energy-fruits":"motion","point-de-recharge":"app","social-bubbles":"app","nourane":"web","design-droit":"web","monsapo":"web"};let lastG="";
const GH={app:[["UI/UX · Applications mobiles","UI/UX · Mobile apps"],["Parcours sur smartphone","Smartphone experiences"]],web:[["UI/UX · Sites web","UI/UX · Websites"],["Refontes, plateformes et landing pages","Redesigns, platforms and landing pages"]],graph:[["Design graphique","Graphic design"],["Identités, campagnes, illustration et print","Identities, campaigns, illustration and print"]],motion:[["Motion design","Motion design"],["Animation et spots publicitaires","Animation and commercials"]]};
function applyFilter(){$$("#grid .proj").forEach(el=>el.classList.toggle("hide",!(curF==="all"||el.dataset.cats.split(" ").includes(curF))));const e=$("#empty");if(e)e.classList.toggle("on",!$$("#grid .proj:not(.hide)").length);layoutGrid()}
function layoutGrid(){const big=innerWidth>=760;let i=0;$$("#grid .proj:not(.hide)").forEach(el=>{const ui=el.dataset.g!=="graph";el.classList.toggle("wide",big&&(ui||i%3===0));if(!ui)i++});
 $$("#grid .ghead").forEach(h=>{const any=$$(`#grid .proj[data-g="${h.dataset.g}"]:not(.hide)`).length;h.style.display=any?"":"none"})}
addEventListener("resize",layoutGrid);
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;curF=b.dataset.f;$$(".chip").forEach(c=>c.classList.toggle("on",c===b));applyFilter();observe()});

/* ---------- Étude de cas générique ---------- */
function nextCards(p){const i=PROJECTS.indexOf(p),n=[PROJECTS[(i+1)%PROJECTS.length],PROJECTS[(i+2)%PROJECTS.length]];
 return `<div class="next"><span class="mono lbl">${tr("Plus de projets","More work")}</span>${n.map(q=>`<a class="proj" href="#projet-${q.id}"><div class="thumb">${media(q,0)}</div><div class="meta"><div><h3>${esc(q.title)}</h3><p>${esc(L(q,"tags").join(" · "))}</p></div><span class="yr">${q.year}</span></div></a>`).join("")}</div>`}
function pnav(p){const el=document.createElement("div");el.className="pnav";el.innerHTML=`<span class="lbl">${tr("Projets","Projects")}</span>`+PROJECTS.map(x=>`<a href="#projet-${x.id}" class="${x.id===p.id?"on":""}" style="--pc:${x.pal?x.pal.a:"#888"}"><i></i>${x.title.replace(/<[^>]+>/g,"")}</a>`).join("");const b=$("#case .back");if(b)b.insertAdjacentElement("afterend",el);const on=el.querySelector("a.on");if(on)el.scrollLeft=Math.max(0,on.offsetLeft-el.clientWidth/2+on.offsetWidth/2)}
function renderCase(p){
 if(p.custom==="ve"){renderVE(p);return}
 if(p.custom==="nr"){renderNR(p);return}
 if(p.custom==="pi"){renderPI(p);return}
 if(p.custom==="ui"){renderUI(p);return}
 if(p.custom==="tn"){renderTN(p);return}
 const GR={fx:renderFX,fk:renderFK,gz:renderGZ,bd:renderBD,ef:renderEF,ec:renderEC};if(GR[p.custom]){GR[p.custom](p);return}
 const GV=[3,1,2],CAPS={3:tr("Mise en situation","Mock-up"),1:tr("Système graphique","Visual system"),2:tr("Palette & typographie","Palette & typography"),0:"Composition"};
 $("#case").innerHTML=`<div class="wrap">
  <div class="case-top"><a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
   <h1>${esc(L(p,"full"))}</h1><p class="sum">${esc(L(p,"summary"))}</p>
   <div class="case-meta"><div><span class="mono">Client</span><b>${esc(L(p,"client"))}</b></div><div><span class="mono">${tr("Rôle","Role")}</span><b>${esc(L(p,"role"))}</b></div><div><span class="mono">${tr("Année","Year")}</span><b>${p.year}</b></div><div><span class="mono">${tr("Outils","Tools")}</span><b>${p.tools}</b></div></div>
   <button class="case-cover" data-g="0" aria-label="Zoom">${media(p,0,1600,850)}</button>
  </div>
  <div class="case-body reveal"><h3>${tr("Contexte","Context")}</h3><div class="txt">${L(p,"context").map(t=>`<p>${esc(t)}</p>`).join("")}</div></div>
  <div class="case-body reveal" style="padding-top:24px"><h3>${tr("Démarche","Approach")}</h3><div class="steps">${L(p,"steps").map((s,k)=>`<div class="step"><div class="n">0${k+1}</div><b>${esc(s[0])}</b><p>${esc(s[1])}</p></div>`).join("")}</div></div>
  <div class="case-body reveal" style="padding-top:24px"><h3>${tr("Livrables","Deliverables")}</h3><div class="deliv">${L(p,"deliv").map(d=>`<span>${d}</span>`).join("")}</div></div>
  <div class="gallery">${GV.map((v,k)=>`<button class="reveal" data-g="${k+1}" aria-label="Zoom">${cover(p,v,k===0?1600:1200,k===0?800:900)}</button>`).join("")}</div>
  ${nextCards(p)}
 </div>`;
 const items=[{svg:cover(p,0,1600,800),wide:true,cap:L(p,"full")},...GV.map((v,k)=>({svg:cover(p,v,k===0?1600:1200,k===0?800:900),wide:k===0,cap:`${p.title} — ${CAPS[v]}`}))];
 $$("#case [data-g]").forEach(b=>b.onclick=()=>openLB(items,+b.dataset.g));
 bindCursor();observe();
}

/* =========================================================
   ÉTUDE DE CAS — POINT DE RECHARGE
   ========================================================= */
const VE_IMG="img/ve/";
function VE_SCREENS(){return {
 prev:[
  ["s1-splash",tr("Lancement","Launch"),tr("Un écran d'accueil simple, dédié à l'énergie du trajet.","A simple welcome screen, focused on powering the trip.")],
  ["s2-carte",tr("Carte des bornes","Station map"),tr("Les bornes autour de soi et leur état en temps réel. Le bouton SOS reste toujours visible.","Nearby stations with their real-time status. The SOS button is always visible.")],
  ["s3-planification",tr("Planification","Trip planning"),tr("L'app compare la distance à l'autonomie du véhicule et prévient si elle ne suffit pas.","The app compares the distance to the car's range and warns when it isn't enough.")],
  ["s4-itineraire",tr("Itinéraire & sécurisation","Route & safety"),tr("Une alerte signale la zone critique et propose de réserver le camion au bon endroit.","An alert flags the critical zone and offers to book the truck at the right spot.")],
  ["s5-ravitaillement",tr("Ravitaillement","Mobile charging"),tr("Heure, puissance et prix sont affichés avant de valider et payer.","Time, power and price are shown before confirming and paying.")]
 ],
 cur:[
  ["s2-carte",tr("Carte & SOS","Map & SOS"),tr("En cas de problème, le bouton SOS déclenche directement l'assistance.","When something goes wrong, the SOS button calls for help right away.")],
  ["s6-navigation",tr("Batterie critique","Critical battery"),tr("En route, l'alerte indique l'assistance mobile la plus proche.","On the road, the alert shows the nearest mobile assistance.")],
  ["s7-suivi",tr("Suivi du camion","Truck tracking"),tr("Temps d'arrivée, étapes et technicien joignable : l'attente devient rassurante.","Arrival time, steps and a reachable technician: waiting becomes reassuring.")]
 ]}}
function VE_STEPS(){return [
 [tr("Scénario 1 — Ravitaillement préventif","Scenario 1 — Preventive charging")],
 [0,1,tr("Lancement de l'app","App launch")],[1,2.6,tr("Carte des bornes","Station map")],[2.6,5.7,tr("Planification du trajet","Trip planning")],[5.7,7.8,tr("Itinéraire & sécurisation","Route & safety")],[7.8,13.8,tr("Réservation du ravitaillement","Booking mobile charging")],
 [tr("Scénario 2 — Secours curatif","Scenario 2 — Emergency rescue")],
 [13.8,15.6,tr("Carte · bouton SOS","Map · SOS button")],[15.6,18.7,tr("Navigation · batterie critique","Navigation · critical battery")],[18.7,24,tr("Suivi du camion de dépannage","Tracking the rescue truck")]
]}
function vePhone(src,alt){return `<div class="phone"><img src="${VE_IMG}${src}.webp" alt="${esc(alt)}" loading="lazy" decoding="async"></div>`}

function renderVE(p){
 const method=(ic,t,m,f)=>`<div class="mcard"><span class="ic">${ic}</span><b>${t}</b><small>${m}</small><p>${f}</p></div>`;
 $("#case").innerHTML=`<div class="ve">
 <div class="wrap">
  <div class="case-top">
   <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
   <div class="chips"><span class="g">UI/UX Design</span><span>${tr("Projet académique","Academic project")}</span><span>${tr("Application mobile","Mobile app")}</span><span>2025</span></div>
   <h1>Point de <em>Recharge</em></h1>
   <p class="sum">${tr("Comment rendre la recharge des véhicules électriques fiable et sereine en Tunisie ? Une application, de la recherche UX jusqu'au prototype.","How can EV charging in Tunisia become reliable and stress-free? A mobile app, from UX research to prototype.")}</p>
   <div class="case-meta">
    <div><span class="mono">${tr("Contexte","Context")}</span><b>${tr("Master 1 Design Digital — ESSTED","Master 1 Digital Design — ESSTED")}</b></div>
    <div><span class="mono">${tr("Rôle","Role")}</span><b>${tr("UX research, UX & UI design, prototype","UX research, UX & UI design, prototype")}</b></div>
    <div><span class="mono">${tr("Encadrement","Supervisor")}</span><b>M. Nadhem Oueslati</b></div>
    <div><span class="mono">${tr("Outils","Tools")}</span><b>Figma · Google Forms</b></div>
   </div>
   ${docBtns("recharge")}
   <div class="ve-hero reveal" id="veHero"><span class="glow"></span>
    <div class="phones">${vePhone("s3-planification","Planification")}${vePhone("s2-carte","Carte")}${vePhone("s7-suivi","Suivi")}</div>
    <span class="badge"><i>⚡</i>${tr("ODD 7 · Énergie propre","SDG 7 · Clean energy")}</span>
   </div>
  </div>
 </div>

 <div class="ve-nav"><nav id="veNav">
  <a href="#" data-go="ve-1"><b>01</b>${tr("Découvrir","Discover")}</a><a href="#" data-go="ve-2"><b>02</b>${tr("Définir","Define")}</a><a href="#" data-go="ve-3"><b>03</b>${tr("Concevoir","Design")}</a><a href="#" data-go="ve-4"><b>04</b>${tr("Prototyper","Prototype")}</a>
 </nav></div>

 <div class="wrap">
 <section class="ve-sec" id="ve-1">
  <div class="ve-phase reveal"><span class="n">01</span><h2>${tr("Découvrir","Discover")}</h2></div>

  <div class="ve-block reveal"><h3><span>${tr("Contexte","Context")}</span>${tr("Le problème","The problem")}</h3><div>
   <p class="ve-lead">${tr("En Tunisie, la voiture électrique intéresse de plus en plus, mais <em>la recharge reste le premier frein</em> : bornes rares, lentes ou en panne, surtout hors des grandes villes.","In Tunisia, interest in electric cars keeps growing, but <em>charging remains the main barrier</em>: stations are rare, slow or out of order, especially outside big cities.")}</p>
   <div class="odd-row"><span><b style="background:#F5B819">7</b>${tr("ODD 7 · Énergie propre et d'un coût abordable","SDG 7 · Affordable and clean energy")}</span><span><b style="background:#3F7E44">13</b>${tr("ODD 13 · Lutte contre le changement climatique","SDG 13 · Climate action")}</span></div>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Recherche","Research")}</span>${tr("Méthodologie","Methods")}</h3><div>
   <div class="methods">
    ${method("🔎","Benchmark",tr("2 apps analysées","2 apps reviewed"),tr("Les apps existantes localisent les bornes, mais leurs données sont limitées ou peu fiables.","Existing apps locate stations, but their data is limited or unreliable."))}
    ${method("👀",tr("Observation terrain","Field observation"),tr("Stations & concessionnaires","Stations & dealerships"),tr("Bornes en panne ou occupées : la recharge publique reste incertaine.","Broken or busy chargers: public charging remains uncertain."))}
    ${method("💬",tr("Entretiens","Interviews"),tr("Conducteurs VE & concessionnaire","EV drivers & a dealer"),tr("Le vrai frein n'est pas l'autonomie, mais le manque de bornes rapides.","The real barrier isn't range, but the lack of fast chargers."))}
    ${method("📊",tr("Sondage","Survey"),tr("21 répondants","21 respondents"),tr("Les problèmes de recharge sur les longs trajets sont quasi universels.","Charging issues on long trips are almost universal."))}
   </div>
  </div></div>

  <div class="ve-block reveal" id="veKpis"><h3><span>${tr("Chiffres clés","Key figures")}</span>${tr("Ce qu'il faut retenir","Takeaways")}</h3><div>
   <div class="kpis">
    <div class="kpi"><div class="v"><span class="cnt" data-n="87">0</span><sup>%</sup></div><p>${tr("rencontrent des problèmes de recharge sur les longs trajets.","face charging issues on long trips.")}</p></div>
    <div class="kpi"><div class="v"><span class="cnt" data-n="83">0</span><sup>%</sup></div><p>${tr("estiment que l'infrastructure publique est insuffisante.","feel public infrastructure is insufficient.")}</p></div>
    <div class="kpi"><div class="v"><span class="cnt" data-n="20">0</span><sup>%</sup></div><p>${tr("des Tunisiens sont prêts à acheter une voiture électrique.","of Tunisians are ready to buy an electric car.")}</p></div>
   </div>
   <blockquote class="vq">${tr("« J'ai hésité à faire un long trajet, car j'étais frustré de ne pas trouver de borne disponible. »","“I hesitated to take a long trip because I was frustrated at not finding an available charger.”")}<cite>${tr("— Utilisateur de voiture électrique","— Electric car driver")}</cite></blockquote>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-2">
  <div class="ve-phase reveal"><span class="n">02</span><h2>${tr("Définir","Define")}</h2></div>

  <div class="ve-block reveal"><h3><span>Persona</span>${tr("Pour qui","Who for")}</h3><div>
   <button class="figure" data-lb="persona" aria-label="Zoom"><img src="${VE_IMG}persona.webp" alt="Persona — Hatem Ben Mansour" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Carte d'empathie","Empathy map")}</span>${tr("Ce que vit Hatem","What Hatem goes through")}</h3><div>
   <button class="figure" data-lb="empathie" aria-label="Zoom"><img src="${VE_IMG}empathie.webp" alt="${tr("Carte d'empathie","Empathy map")}" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Parcours utilisateur","User journey")}</span>${tr("Frustrations & solutions","Pain points & solutions")}</h3><div>
   <button class="figure" data-lb="journey" aria-label="Zoom"><img src="${VE_IMG}journey-illus.webp" alt="${tr("Parcours utilisateur","User journey")}" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Problématique","Problem statement")}</span>${tr("Le point de départ","The starting point")}</h3><div>
   <div class="problem"><p>${tr("Le réseau de recharge publique, insuffisant et instable, crée une forte <em>« angoisse de la panne »</em>. Comment sécuriser et faciliter la recharge des véhicules électriques ?","An insufficient, unstable public charging network creates strong <em>“range anxiety”</em>. How might we make EV charging safe and easy?")}</p></div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-3">
  <div class="ve-phase reveal"><span class="n">03</span><h2>${tr("Concevoir","Design")}</h2></div>

  <div class="ve-block reveal"><h3><span>${tr("Le concept","The concept")}</span>${tr("Deux moments clés","Two key moments")}</h3><div>
   <div class="duo">
    <div><span class="tag" style="background:var(--pc-soft);color:var(--pc)">${tr("Avant","Before")}</span><div class="ic" style="background:var(--pc-soft);color:var(--pc)">🗺️</div><h4>${tr("Ravitaillement préventif","Preventive charging")}</h4><p>${tr("Si l'autonomie ne suffit pas pour le trajet, l'app réserve un ravitaillement mobile au bon endroit.","If the range isn't enough for the trip, the app books mobile charging at the right spot.")}</p></div>
    <div><span class="tag" style="background:rgba(229,83,60,.12);color:#E5533C">${tr("Pendant","During")}</span><div class="ic" style="background:rgba(229,83,60,.12);color:#E5533C">🆘</div><h4>${tr("Secours curatif","Emergency rescue")}</h4><p>${tr("Batterie critique sur la route ? Le bouton SOS envoie le camion de recharge le plus proche, suivi en direct.","Critical battery on the road? The SOS button sends the nearest charging truck, tracked live.")}</p></div>
   </div>
  </div></div>

  <div class="ve-block reveal"><h3><span>User flow</span>${tr("Le chemin dans l'app","The path through the app")}</h3><div>
   <div class="flowbox" data-lb="userflow" role="button" tabindex="0" aria-label="Zoom"><img src="${VE_IMG}userflow.webp" alt="User flow" loading="lazy"><span>${tr("Voir le user flow complet ↗","View full user flow ↗")}</span></div>
  </div></div>

  <div class="ve-block reveal"><h3><span>UI design</span>${tr("Maquettes haute fidélité","High-fidelity screens")}</h3><div>
   <div class="seg" id="veSeg"><button class="on" data-k="prev">${tr("Ravitaillement préventif","Preventive charging")}</button><button data-k="cur">${tr("Secours curatif","Emergency rescue")}</button></div>
   <div class="rail-wrap"><div class="rail" id="veRail"></div>
   <div class="rail-ctrl"><div class="rail-prog"><i id="veProg"></i></div><button id="veL" aria-label="←">←</button><button id="veR" aria-label="→">→</button></div></div>
  </div></div>
 </section>
 </div>

 <section class="proto ve-sec" id="ve-4">
  <div class="wrap">
   <div class="vwrap reveal">
    <div class="phone"><video id="veVid" src="${VE_IMG}prototype.mp4" poster="${VE_IMG}prototype-poster.webp" muted loop playsinline preload="metadata"></video></div>
    <div class="ctl"><button id="vePlay">❚❚ Pause</button><button id="veFull">⤢ ${tr("Plein écran","Fullscreen")}</button></div>
   </div>
   <div class="reveal">
    <span class="eyebrow">04 — ${tr("Prototyper","Prototype")}</span>
    <h2>${tr("Le prototype interactif","The interactive prototype")}</h2>
    <p class="intro">${tr("Les deux scénarios de bout en bout. Cliquez sur une étape pour y aller directement.","Both scenarios end to end. Click a step to jump straight to it.")}</p>
    <div class="vsteps" id="veSteps"></div>
   </div>
  </div>
 </section>

 <div class="wrap">
  <section class="ve-sec">
   <div class="ve-block reveal"><h3><span>${tr("Résultat","Outcome")}</span>${tr("Le parcours optimisé","The improved journey")}</h3><div>
    <div class="outcome">
     <div class="oc"><div class="st"><small>01</small>${tr("Planification","Planning")}</div><span class="ar">→</span><div class="af">${tr("Une <b>carte en temps réel</b> : état, connecteur et puissance des bornes.","A <b>real-time map</b>: status, connector and power of each station.")}</div></div>
     <div class="oc"><div class="st"><small>02</small>${tr("Recherche d'une borne","Finding a charger")}</div><span class="ar">→</span><div class="af">${tr("Un <b>trajet calculé selon l'autonomie</b>, avec les arrêts nécessaires.","A <b>route based on range</b>, with the stops it needs.")}</div></div>
     <div class="oc"><div class="st"><small>03</small>${tr("Risque en route","Risk on the road")}</div><span class="ar">→</span><div class="af">${tr("Un <b>ravitaillement mobile réservé</b> avant la zone critique.","<b>Mobile charging booked</b> before the critical zone.")}</div></div>
     <div class="oc"><div class="st"><small>04</small>${tr("Panne d'autonomie","Out of charge")}</div><span class="ar">→</span><div class="af">${tr("Un <b>bouton SOS</b> et le <b>suivi du camion</b> jusqu'à son arrivée.","An <b>SOS button</b> and <b>live truck tracking</b> until it arrives.")}</div></div>
    </div>
   </div></div>
  </section>
  ${nextCards(p)}
 </div>
 </div>`;
 veBind();bindCursor();observe();
}

let veCleanup=null;
function veBind(){
 if(veCleanup)veCleanup();
 const LBI={persona:["persona","Persona"],empathie:["empathie",tr("Carte d'empathie","Empathy map")],userflow:["userflow","User flow"]};
 $$("#case [data-lb]").forEach(b=>{const open=()=>{const k=b.dataset.lb;
   if(k==="journey")return openLB([{svg:`<img src="${VE_IMG}journey-illus.webp" alt="">`,cap:tr("Parcours utilisateur — frustrations & solutions","User journey — pain points & solutions"),free:true},{svg:`<img src="${VE_IMG}journey.webp" alt="">`,cap:"User journey map",free:true}],0);
   const [f,c]=LBI[k];openLB([{svg:`<img src="${VE_IMG}${f}.webp" alt="${esc(c)}">`,cap:c,free:f!=="userflow",scroll:f==="userflow"}],0)};
  b.onclick=open;b.onkeydown=e=>{if(e.key==="Enter")open()}});

 // Rail
 const rail=$("#veRail"),S=VE_SCREENS();let kind="prev";
 function fill(){const Lst=S[kind];rail.innerHTML=Lst.map((s,k)=>`<div class="scr"><div class="phone" data-k="${k}"><img src="${VE_IMG}${s[0]}.webp" alt="${esc(s[1])}" loading="lazy" decoding="async"></div><div class="cap"><b><i>${k+1}</i>${esc(s[1])}</b><p>${esc(s[2])}</p></div></div>`).join("");rail.scrollLeft=0;prog();
  $$("#veRail .phone").forEach(ph=>ph.onclick=()=>{if(rail.dataset.moved==="1")return;openLB(Lst.map(s=>({svg:`<img src="${VE_IMG}${s[0]}.webp" alt="">`,cap:s[1],free:true,phone:true})),+ph.dataset.k)});bindCursor()}
 function prog(){const m=rail.scrollWidth-rail.clientWidth;$("#veProg").style.width=(m<=0?100:Math.max(8,rail.scrollLeft/m*100))+"%";$("#veL").disabled=rail.scrollLeft<4;$("#veR").disabled=m-rail.scrollLeft<4}
 $$("#veSeg button").forEach(b=>b.onclick=()=>{$$("#veSeg button").forEach(x=>x.classList.toggle("on",x===b));kind=b.dataset.k;fill()});
 rail.addEventListener("scroll",prog,{passive:true});
 const step=()=>{const c=rail.querySelector(".scr");return c?c.offsetWidth+24:300};
 $("#veL").onclick=()=>rail.scrollBy({left:-step(),behavior:"smooth"});$("#veR").onclick=()=>rail.scrollBy({left:step(),behavior:"smooth"});
 let down=false,sx=0,sl0=0;
 rail.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;down=true;sx=e.clientX;sl0=rail.scrollLeft;rail.dataset.moved="0"});
 const mv=e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>5){rail.dataset.moved="1";rail.classList.add("drag")}rail.scrollLeft=sl0-dx};
 const up=()=>{if(!down)return;down=false;rail.classList.remove("drag");setTimeout(()=>rail.dataset.moved="0",50)};
 addEventListener("pointermove",mv);addEventListener("pointerup",up);addEventListener("resize",prog);
 fill();

 // Vidéo synchronisée
 const v=$("#veVid"),box=$("#veSteps");let k=0;
 box.innerHTML=VE_STEPS().map(s=>s.length===1?`<div class="grp">${s[0]}</div>`:`<button class="vstep" data-t="${s[0]}" data-e="${s[1]}"><i>${++k}</i>${s[2]}<span class="bar"></span></button>`).join("");
 const steps=$$("#veSteps .vstep");
 const setPlay=p=>$("#vePlay").textContent=p?"❚❚ Pause":tr("▶ Lecture","▶ Play");
 steps.forEach(b=>b.onclick=()=>{try{v.currentTime=+b.dataset.t+.05;v.play().catch(()=>{});setPlay(true)}catch(e){}});
 v.addEventListener("timeupdate",()=>{const t=v.currentTime;steps.forEach(b=>{const a=+b.dataset.t,e=+b.dataset.e,on=t>=a&&t<e;b.classList.toggle("on",on);b.querySelector(".bar").style.width=on?((t-a)/(e-a)*100)+"%":"0"})});
 $("#vePlay").onclick=()=>{if(v.paused){v.play().catch(()=>{});setPlay(true)}else{v.pause();setPlay(false)}};
 $("#veFull").onclick=()=>{const f=v.requestFullscreen||v.webkitRequestFullscreen||v.webkitEnterFullscreen;if(f)Promise.resolve(f.call(v)).catch(()=>toast(tr("Plein écran indisponible ici","Fullscreen unavailable here")));else toast(tr("Plein écran indisponible ici","Fullscreen unavailable here"))};
 const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().then(()=>setPlay(true)).catch(()=>setPlay(false));else v.pause()}),{threshold:.35});vio.observe(v);

 // Compteurs
 const sio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;sio.unobserve(e.target);e.target.querySelectorAll(".cnt").forEach(countUp)}),{threshold:.3});
 sio.observe($("#veKpis"));

 // Navigation par phases
 const nav=$$("#veNav a");nav.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const secs=["ve-1","ve-2","ve-3","ve-4"].map(id=>document.getElementById(id));
 const spy=()=>{if(!secs[0].isConnected)return;let cur=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)cur=i});nav.forEach((a,i)=>a.classList.toggle("on",i===cur))};
 addEventListener("scroll",spy,{passive:true});spy();

 // Parallaxe du héro
 const hero=$("#veHero");
 if(hero&&matchMedia("(pointer:fine)").matches){hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.querySelector(".phones").style.transform=`translate(${x*-16}px,${y*-10}px)`});hero.addEventListener("mouseleave",()=>hero.querySelector(".phones").style.transform="")}

 veCleanup=()=>{removeEventListener("scroll",spy);removeEventListener("pointermove",mv);removeEventListener("pointerup",up);removeEventListener("resize",prog);vio.disconnect();sio.disconnect();try{v.pause()}catch(e){}};
}


/* =========================================================
   ÉTUDE DE CAS — NOURANE
   ========================================================= */
const NR_IMG="img/nr/";
const DOCS={ec:{n:40,fr:"Présentation — Campagne 360° STIL",en:"Presentation — STIL 360° campaign",ar:"1600/900",pdf:"docs/ec-presentation.pdf",sub:"40 pages · Boumaiza Yasmine · 2024-2025"},recharge:{n:32,fr:"Dossier de recherche — Point de Recharge",en:"Research report — Point de Recharge"},nourane:{n:30,fr:"Dossier de recherche — Association Nourane",en:"Research report — Nourane Association"},bdp:{n:42,fr:"Présentation — التفاح اللي يفوح",en:"Presentation — التفاح اللي يفوح",ar:"1404/993",pdf:"docs/bd-presentation.pdf",sub:"42 pages · Conception éditoriale 2023-2024"},bd:{n:14,fr:"التفاح اللي يفوح — Bande dessinée",en:"التفاح اللي يفوح — Comic book",ar:"910/1287",pdf:"docs/bd-livre.pdf",sub:"14 pages · Yasmine Boumaiza"},flexoprint:{n:33,fr:"Charte graphique — FlexoPrint",en:"Brand guidelines — FlexoPrint",ar:"1219/877",pdf:"docs/flexoprint-charte.pdf",sub:"33 pages · Hackathon FLEXOPRINT"},tunis:{n:32,fr:"Charte graphique — Tunis 2027",en:"Brand guidelines — Tunis 2027",ar:"1230/856",pdf:"docs/tunis-charte.pdf",sub:"32 pages · Boumaiza Yasmine · Dhaouadi Yasmine"}};
function docBtns(slug){return `<div class="docs"><button class="docbtn" type="button" data-doc="${slug}"><span class="di">PDF</span><span><b>${tr("Dossier de recherche","Research report")}</b><small>${tr(`Lire en ligne · ${DOCS[slug].n} pages`,`Read online · ${DOCS[slug].n} pages`)}</small></span><i>↗</i></button></div>`}
function NR_PAGES(){return [
 ["accueil",tr("Accueil","Home"),tr("Une promesse claire, les chiffres d'impact et les prochains événements dès l'arrivée.","A clear promise, impact figures and upcoming events right away.")],
 ["actualites",tr("Actualités","News"),tr("Articles, campagnes, quiz et vidéos courtes : chaque lecture rapporte des points.","Articles, campaigns, quizzes and short videos: every read earns points.")],
 ["actions",tr("Nos actions","Our actions"),tr("Les événements terrain, filtrables par ville et par type.","Field events, filterable by city and type.")],
 ["participer",tr("Participation","Sign-up"),tr("S'inscrire à un événement en quelques champs, avec l'impact attendu.","Sign up for an event in a few fields, with the expected impact.")],
 ["missions",tr("Gamification · missions","Gamification · missions"),tr("Des missions simples pour passer de lecteur à acteur.","Simple missions that turn readers into actors.")],
 ["badges",tr("Gamification · badges","Gamification · badges"),tr("Des badges à débloquer pour valoriser chaque engagement.","Badges to unlock that reward every commitment.")],
 ["classement",tr("Classement","Leaderboard"),tr("Un classement mensuel qui motive la communauté.","A monthly leaderboard that motivates the community.")],
 ["don",tr("Faire un don","Donate"),tr("Don unique ou mensuel, avec l'impact concret de chaque montant.","One-off or monthly giving, with the concrete impact of each amount.")],
 ["merci",tr("Confirmation","Confirmation"),tr("Un remerciement, l'impact du don et un badge débloqué.","A thank-you, the donation's impact and an unlocked badge.")]
]}

function renderNR(p){
 const method=(ic,t,m,f)=>`<div class="mcard"><span class="ic">${ic}</span><b>${t}</b><small>${m}</small><p>${f}</p></div>`;
 const pages=NR_PAGES();
 $("#case").innerHTML=`<div class="ve nr">
 <div class="wrap">
  <div class="case-top">
   <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
   <div class="chips"><span class="g">UI/UX Design</span><span>${tr("Refonte de site web","Website redesign")}</span><span>${tr("Projet académique","Academic project")}</span><span>2026</span></div>
   <h1>Association <em>Nourane</em></h1>
   <p class="sum">${tr("Refonte du site d'une association tunisienne de lutte contre le cancer : transformer une sensibilisation passive en engagement actif, surtout chez les jeunes et dans les régions éloignées.","Redesigning the website of a Tunisian anti-cancer association: turning passive awareness into active engagement, especially among young people and remote regions.")}</p>
   <div class="case-meta">
    <div><span class="mono">${tr("Contexte","Context")}</span><b>${tr("Master 1 Design Digital — ESSTED, méthodologie et pratique UX","Master 1 Digital Design — ESSTED, UX methods & practice")}</b></div>
    <div><span class="mono">${tr("Rôle","Role")}</span><b>${tr("UX research, UX & UI design, tests utilisateurs","UX research, UX & UI design, user testing")}</b></div>
    <div><span class="mono">${tr("Encadrement","Supervisor")}</span><b>Mme Aicha Kamoun</b></div>
    <div><span class="mono">${tr("Outils","Tools")}</span><b>Figma</b></div>
   </div>
   ${docBtns("nourane")}
   <div class="mshow nrm reveal"><div class="txt"><small>${tr("UI/UX · Refonte web","UI/UX · Website redesign")}</small><h2>Association <em>Nourane</em></h2><p>${tr("Transformer la sensibilisation au cancer en engagement actif.","Turning cancer awareness into active engagement.")}</p><div class="pills"><span>UX Research</span><span>UI Design</span><span>Gamification</span></div></div><div class="dev"><div class="bw2"><div class="bar"><i></i><i></i><i></i><span>nourane.tn</span></div><div class="vp"><img src="${NR_IMG}accueil.webp" alt="Accueil — Association Nourane"></div></div></div></div>
  </div>
 </div>

 <div class="ve-nav"><nav id="veNav">
  <a href="#" data-go="ve-1"><b>01</b>${tr("Découvrir","Discover")}</a><a href="#" data-go="ve-2"><b>02</b>${tr("Définir","Define")}</a><a href="#" data-go="ve-3"><b>03</b>${tr("Concevoir","Design")}</a><a href="#" data-go="ve-4"><b>04</b>${tr("Tester","Test")}</a>
 </nav></div>

 <div class="wrap">
 <section class="ve-sec" id="ve-1">
  <div class="ve-phase reveal"><span class="n">01</span><h2>${tr("Découvrir","Discover")}</h2></div>

  <div class="ve-block reveal"><h3><span>${tr("Contexte","Context")}</span>${tr("L'association","The association")}</h3><div>
   <p class="ve-lead">${tr("Nourane mène depuis 10 ans des actions de <em>prévention, de dépistage et de sensibilisation</em> au cancer en Tunisie : caravane MamoLife, marathon, congrès scientifique… Mais son site web ne suit plus.","For 10 years, Nourane has led cancer <em>prevention, screening and awareness</em> actions in Tunisia: the MamoLife caravan, a marathon, a scientific congress… But its website no longer keeps up.")}</p>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Recherche","Research")}</span>${tr("Méthodologie","Methods")}</h3><div>
   <div class="methods m3">
    ${method("💬",tr("Entretien","Interview"),tr("Secrétaire générale (depuis 2020)","Secretary General (since 2020)"),tr("L'association peine à toucher la génération connectée et les communautés éloignées.","The association struggles to reach the connected generation and remote communities."))}
    ${method("🧭",tr("Audit UX","UX audit"),tr("Site actuel","Current website"),tr("Navigation dense, surcharge cognitive et appels à l'action invisibles.","Dense navigation, cognitive overload and invisible calls to action."))}
    ${method("🔎","Benchmark",tr("2 nationaux · 2 internationaux","2 national · 2 international"),tr("Des sites crédibles mais informatifs et passifs, peu engageants pour les jeunes.","Credible but informative, passive websites that rarely engage young people."))}
   </div>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Avant","Before")}</span>${tr("Le site actuel","The current site")}</h3><div>
   <div class="before">
    <button class="bw" data-lb="old"><div class="bar"><i></i><i></i><i></i></div><div class="vp" style="height:auto"><img src="${NR_IMG}old-home.webp" alt="${tr("Ancien site","Old website")}" loading="lazy"></div></button>
    <div class="tags3"><span>① ${tr("Navigation dense","Dense navigation")}</span><span>② ${tr("Surcharge cognitive","Cognitive overload")}</span><span>③ ${tr("CTA invisibles","Invisible CTAs")}</span><span>④ ${tr("Site souvent bloqué","Often down")}</span></div>
   </div>
  </div></div>

  <div class="ve-block reveal"><h3><span>${tr("Cadrage","Framing")}</span>${tr("Trois problèmes clés","Three key problems")}</h3><div>
   <div class="kpis">
    <div class="kpi"><div class="v" style="font-size:28px">🧑‍🎓</div><p><b class="kt">${tr("Désengagement des jeunes","Disengaged youth")}</b>${tr("« Ça ne m'intéresse pas » : ils se sentent hors du système.","“It's not for me”: they feel outside the system.")}</p></div>
    <div class="kpi"><div class="v" style="font-size:28px">📍</div><p><b class="kt">${tr("Isolement des régions","Isolated regions")}</b>${tr("L'information n'arrive pas toujours dans les zones reculées.","Information doesn't always reach remote areas.")}</p></div>
    <div class="kpi"><div class="v" style="font-size:28px">⚠️</div><p><b class="kt">${tr("Un site bloqué","A blocked website")}</b>${tr("Peu de visibilité, peu d'interactivité, aucun parcours clair.","Little visibility, little interactivity, no clear path.")}</p></div>
   </div>
   <blockquote class="vq">${tr("Insight : pour toucher le public, le message doit parler sa langue — le dialecte tunisien (derja) plutôt qu'un français trop académique.","Insight: to reach people, the message has to speak their language — Tunisian dialect (Derja) rather than overly academic French.")}</blockquote>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-2">
  <div class="ve-phase reveal"><span class="n">02</span><h2>${tr("Définir","Define")}</h2></div>
  <div class="ve-block reveal"><h3><span>Persona</span>${tr("Pour qui","Who for")}</h3><div>
   <button class="figure" data-lb="persona" aria-label="Zoom"><img src="${NR_IMG}persona-c.webp" alt="Persona — Nesrine Abelkhalek" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Carte d'empathie","Empathy map")}</span>${tr("Ce que vit Nesrine","What Nesrine goes through")}</h3><div>
   <button class="figure" data-lb="empathie" aria-label="Zoom"><img src="${NR_IMG}empathie.webp" alt="${tr("Carte d'empathie","Empathy map")}" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Problématique","Problem statement")}</span>${tr("Le point de départ","The starting point")}</h3><div>
   <div class="problem"><p>${tr("Comment pourrions-nous transformer une <em>sensibilisation passive</em> en un <em>engagement actif</em>, particulièrement chez la génération connectée et les communautés éloignées ?","How might we turn <em>passive awareness</em> into <em>active engagement</em>, especially among the connected generation and remote communities?")}</p></div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-3">
  <div class="ve-phase reveal"><span class="n">03</span><h2>${tr("Concevoir","Design")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("La solution","The solution")}</span>${tr("Quatre piliers","Four pillars")}</h3><div>
   <p class="ve-lead" style="margin-bottom:22px">${tr("Une plateforme <em>participative</em> : on s'informe vite, on agit sur le terrain, on gagne des points, et on voit l'impact de son don.","A <em>participatory</em> platform: get informed quickly, act in the field, earn points and see the impact of your donation.")}</p>
   <div class="pillars">
    <div><span>📰</span><b>${tr("Actualités","News")}</b><p>${tr("Quiz, vidéos courtes, articles","Quizzes, short videos, articles")}</p></div>
    <div><span>🤝</span><b>${tr("Nos actions","Our actions")}</b><p>${tr("Événements & inscription","Events & sign-up")}</p></div>
    <div><span>🏆</span><b>Gamification</b><p>${tr("Missions, badges, classement","Missions, badges, leaderboard")}</p></div>
    <div><span>💗</span><b>${tr("Don & soutien","Donate & support")}</b><p>${tr("Impact visible de chaque don","Visible impact of every gift")}</p></div>
   </div>
  </div></div>
  <div class="ve-block reveal"><h3><span>Sitemap</span>${tr("L'architecture","The architecture")}</h3><div>
   <button class="figure" data-lb="sitemap" aria-label="Zoom"><img src="${NR_IMG}sitemap.webp" alt="Sitemap" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Itération","Iteration")}</span>${tr("De la V1 à la V2","From V1 to V2")}</h3><div>
   <p class="ve-p" style="margin-top:0">${tr("Un test utilisateur modéré avec 5 participants sur la première version a fait ressortir six points, tous corrigés dans la version finale :","A moderated test with 5 participants on the first version raised six issues, all fixed in the final version:")}</p>
   <div class="iter">${[tr("Peu d'impact visuel à l'arrivée","Weak visual impact on arrival"),tr("Hiérarchie visuelle insuffisante","Weak visual hierarchy"),tr("Interface trop institutionnelle","Interface too institutional"),tr("Gamification peu engageante","Unengaging gamification"),tr("Don peu rassurant","Donation not reassuring"),tr("Cohérence limitée entre les pages","Limited consistency across pages")].map(t=>`<span>${t}</span>`).join("")}</div>
  </div></div>
  <div class="ve-block reveal"><h3><span>UI design</span>${tr("Maquettes haute fidélité","High-fidelity screens")}</h3><div>
   <div class="ptabs" id="nrTabs">${pages.map((pg,k)=>`<button data-k="${k}"${k?"":' class="on"'}>${pg[1]}</button>`).join("")}</div>
   <div class="bw shot"><div class="bar"><i></i><i></i><i></i><span id="nrUrl">nourane.tn</span><button id="nrZoom" aria-label="Zoom">⤢</button></div><div class="vp" id="nrVp"><img id="nrImg" src="${NR_IMG}accueil.webp" alt=""></div></div>
   <p class="shotcap" id="nrCap"></p>
  </div></div>
 </section>
 </div>

 <section class="proto nrproto ve-sec" id="ve-4">
  <div class="wrap">
   <div class="reveal">
    <span class="eyebrow">04 — ${tr("Tester","Test")}</span>
    <h2>${tr("Le prototype & les tests","Prototype & testing")}</h2>
    <p class="intro">${tr("Le parcours complet du site, puis un test d'utilisabilité (questionnaire SUS) sur la version finale.","The full site journey, then a usability test (SUS questionnaire) on the final version.")}</p>
   </div>
   <div class="vwrap reveal">
    <div class="bw dark"><div class="bar"><i></i><i></i><i></i><span>${tr("Prototype — site Nourane","Prototype — Nourane website")}</span></div><video id="veVid" src="${NR_IMG}prototype.mp4" poster="${NR_IMG}prototype-poster.webp" muted loop playsinline preload="metadata"></video></div>
    <div class="ctl"><button id="vePlay">❚❚ Pause</button><button id="veFull">⤢ ${tr("Plein écran","Fullscreen")}</button></div>
   </div>
   <div class="sus reveal" id="nrSus">
    ${[[88.43,tr("Score SUS global","Overall SUS score"),tr("Excellente expérience utilisateur","Excellent user experience")],[89.84,tr("Utilisabilité","Usability"),tr("Navigation intuitive et fluide","Intuitive, smooth navigation")],[82.81,tr("Apprentissage","Learnability"),tr("Un léger temps d'adaptation au début","A short learning curve at first")]].map(([v,t,d])=>`<div>${susRing(v)}<p><strong>${t}</strong>${d}</p></div>`).join("")}
   </div>
  </div>
 </section>

 <div class="wrap">
  <section class="ve-sec">
   <div class="ve-block reveal"><h3><span>${tr("Résultat","Outcome")}</span>${tr("Ce qui change","What changes")}</h3><div>
    <div class="outcome">
     <div class="oc"><div class="st"><small>01</small>${tr("Jeunes désengagés","Disengaged youth")}</div><span class="ar">→</span><div class="af">${tr("<b>Missions, badges et classement</b> : chaque action rapporte des points.","<b>Missions, badges and a leaderboard</b>: every action earns points.")}</div></div>
     <div class="oc"><div class="st"><small>02</small>${tr("Régions isolées","Isolated regions")}</div><span class="ar">→</span><div class="af">${tr("Des <b>événements filtrables par ville</b> et une inscription en quelques champs.","<b>Events filterable by city</b> and sign-up in a few fields.")}</div></div>
     <div class="oc"><div class="st"><small>03</small>${tr("Site bloqué","Blocked website")}</div><span class="ar">→</span><div class="af">${tr("<b>4 rubriques claires</b> et un bouton « Faire un don » toujours visible.","<b>4 clear sections</b> and an always-visible “Donate” button.")}</div></div>
     <div class="oc"><div class="st"><small>04</small>${tr("Dons peu rassurants","Unreassuring donations")}</div><span class="ar">→</span><div class="af">${tr("L'<b>impact concret</b> de chaque montant : 20 DT = 1 kit de prévention.","The <b>concrete impact</b> of each amount: 20 DT = 1 prevention kit.")}</div></div>
    </div>
   </div></div>
  </section>
  ${nextCards(p)}
 </div>
 </div>`;
 nrBind();bindShow();bindCursor();observe();
}
function susRing(v){const r=42,c=2*Math.PI*r;return `<div class="ring" data-p="${v}"><svg viewBox="0 0 96 96"><circle class="bg" cx="48" cy="48" r="${r}"/><circle class="fg" cx="48" cy="48" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c}"/></svg><b>${String(v).replace(".",LANG==="en"?".":",")}</b></div>`}

function nrBind(){
 if(veCleanup)veCleanup();
 const LBI={persona:["persona-c","Persona"],empathie:["empathie",tr("Carte d'empathie","Empathy map")],sitemap:["sitemap","Sitemap"],old:["old-home",tr("Ancien site Nourane","Former Nourane website")]};
 $$("#case [data-lb]").forEach(b=>b.onclick=()=>{const [f,c]=LBI[b.dataset.lb];openLB([{svg:`<img src="${NR_IMG}${f}.webp" alt="${esc(c)}">`,cap:c,free:true}],0)});
 // Pages
 const pages=NR_PAGES();let cur=0;
 const show=k=>{cur=k;const pg=pages[k];$$("#nrTabs button").forEach((b,i)=>b.classList.toggle("on",i===k));const img=$("#nrImg");img.style.opacity=0;setTimeout(()=>{img.src=`${NR_IMG}${pg[0]}.webp`;img.alt=pg[1];$("#nrVp").scrollTop=0;img.onload=()=>img.style.opacity=1;if(img.complete)img.style.opacity=1},160);$("#nrUrl").textContent=`nourane.tn/${pg[0]==="accueil"?"":pg[0]}`;$("#nrCap").innerHTML=`<b>${pg[1]}</b> — ${pg[2]}`};
 $$("#nrTabs button").forEach(b=>b.onclick=()=>{show(+b.dataset.k);b.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})});
 const zoom=()=>openLB(pages.map(pg=>({svg:`<img src="${NR_IMG}${pg[0]}.webp" alt="">`,cap:pg[1],scroll:true})),cur);
 $("#nrZoom").onclick=zoom;$("#nrImg").onclick=zoom;
 show(0);
 // Vidéo
 const v=$("#veVid");const setPlay=p=>$("#vePlay").textContent=p?"❚❚ Pause":tr("▶ Lecture","▶ Play");
 $("#vePlay").onclick=()=>{if(v.paused){v.play().catch(()=>{});setPlay(true)}else{v.pause();setPlay(false)}};
 $("#veFull").onclick=()=>{const f=v.requestFullscreen||v.webkitRequestFullscreen||v.webkitEnterFullscreen;if(f)Promise.resolve(f.call(v)).catch(()=>toast(tr("Plein écran indisponible ici","Fullscreen unavailable here")));else toast(tr("Plein écran indisponible ici","Fullscreen unavailable here"))};
 const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().then(()=>setPlay(true)).catch(()=>setPlay(false));else v.pause()}),{threshold:.35});vio.observe(v);
 // Anneaux SUS
 const sio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;sio.unobserve(e.target);e.target.querySelectorAll(".ring").forEach(r=>{r.querySelector(".fg").style.strokeDashoffset=2*Math.PI*42*(1-r.dataset.p/100)})}),{threshold:.3});
 sio.observe($("#nrSus"));
 // Nav phases
 const nav=$$("#veNav a");nav.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const secs=["ve-1","ve-2","ve-3","ve-4"].map(id=>document.getElementById(id));
 const spy=()=>{if(!secs[0].isConnected)return;let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)c=i});nav.forEach((a,i)=>a.classList.toggle("on",i===c))};
 addEventListener("scroll",spy,{passive:true});spy();
 veCleanup=()=>{removeEventListener("scroll",spy);vio.disconnect();sio.disconnect();try{v.pause()}catch(e){}};
}


/* =========================================================
   ÉTUDE DE CAS — DESIGN & DROIT (Intellectuel.tn)
   ========================================================= */
const PI_IMG="img/pi/";
function PI_PAGES(){return [
 ["accueil-long",tr("Accueil","Home"),tr("Une promesse simple et un accès direct à l'auto-évaluation.","A simple promise and direct access to the self-assessment.")],
 ["droits",tr("Droits d'auteur","Copyright"),tr("Création, protection, exploitation : le droit d'auteur en trois étapes.","Creation, protection, exploitation: copyright in three steps.")],
 ["checklist",tr("Checklist légale","Legal checklist"),tr("Les obligations d'un site web, à cocher une par une.","A website's legal obligations, ticked off one by one.")],
 ["glossaire",tr("Glossaire","Glossary"),tr("Les termes juridiques expliqués simplement, sans jargon.","Legal terms explained simply, without jargon.")],
 ["cas",tr("Cas pratiques","Case studies"),tr("Des situations réelles de créatifs, avec la réponse juridique.","Real creative situations, with the legal answer.")],
 ["ressources",tr("Ressources","Resources"),tr("Des modèles et guides prêts à l'emploi.","Ready-to-use templates and guides.")],
 ["autoeval",tr("Auto-évaluation","Self-assessment"),tr("Un quiz rapide qui explique chaque bonne réponse.","A quick quiz that explains each right answer.")]
]}
function PI_STEPS(){return [[0,2,tr("Accueil","Home")],[2,6,tr("Droits d'auteur","Copyright")],[6,15,tr("Checklist légale","Legal checklist")],[15,23,tr("Glossaire","Glossary")],[23,29,tr("Cas pratiques","Case studies")],[29,35,tr("Ressources","Resources")],[35,42,tr("Auto-évaluation","Self-assessment")],[42,46,tr("Retour à l'accueil","Back home")]]}

function renderPI(p){
 const pages=PI_PAGES();
 const quote=(t,s)=>`<div class="quote"><p>${t}</p><span>${s}</span></div>`;
 const per=(img,n,role,goal,tags)=>`<div class="pcard"><div class="ph"><span>${img}</span><div><b>${n}</b><small>${role}</small></div></div><p>${goal}</p><div class="tg">${tags.map(t=>`<em>${t}</em>`).join("")}</div></div>`;
 const feat=(ic,t,d)=>`<div><span>${ic}</span><b>${t}</b><p>${d}</p></div>`;
 $("#case").innerHTML=`<div class="ve nr pi">
 <div class="wrap">
  <div class="case-top">
   <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
   <div class="chips"><span class="g">UI/UX Design</span><span>${tr("Plateforme web","Web platform")}</span><span>${tr("Projet en équipe","Team project")}</span><span>2026</span></div>
   <h1>Design <em>& Droit</em></h1>
   <p class="sum">${tr("Intellectuel.tn, la boîte à outils juridique des créatifs tunisiens : comprendre, protéger et sécuriser ses créations, sans jargon.","Intellectuel.tn, a legal toolkit for Tunisian creatives: understand, protect and secure your work, without jargon.")}</p>
   <div class="case-meta">
    <div><span class="mono">${tr("Contexte","Context")}</span><b>${tr("Projet académique en équipe","Academic team project")}</b></div>
    <div><span class="mono">${tr("Rôle","Role")}</span><b>${tr("UX research, UX & UI design, prototype","UX research, UX & UI design, prototype")}</b></div>
    <div><span class="mono">${tr("Équipe","Team")}</span><b>Yasmine Boumaiza · Israr Karoui · Chaima Ben Rejeb</b></div>
    <div><span class="mono">${tr("Livrable","Deliverable")}</span><b>${tr("Site web responsive","Responsive website")}</b></div>
   </div>
   <div class="mshow pim reveal"><div class="txt"><small>${tr("UI/UX · Plateforme web","UI/UX · Web platform")}</small><h2>Design <em>& Droit</em></h2><p>${tr("Rendre la propriété intellectuelle accessible aux créateurs tunisiens.","Making intellectual property accessible to Tunisian creators.")}</p><div class="pills"><span>intellectuel.tn</span><span>UX Research</span><span>UI Design</span></div></div><div class="dev"><div class="bw2"><div class="bar"><i></i><i></i><i></i><span>intellectuel.tn</span></div><div class="vp"><img src="${PI_IMG}accueil-long.webp" alt="Accueil — intellectuel.tn"></div></div><div class="sub"><img src="${PI_IMG}modal.webp" alt="Auto-évaluation"></div></div></div>
  </div>
 </div>

 <div class="ve-nav"><nav id="veNav">
  <a href="#" data-go="ve-1"><b>01</b>${tr("Découvrir","Discover")}</a><a href="#" data-go="ve-2"><b>02</b>${tr("Définir","Define")}</a><a href="#" data-go="ve-3"><b>03</b>${tr("Concevoir","Design")}</a><a href="#" data-go="ve-4"><b>04</b>${tr("Prototyper","Prototype")}</a>
 </nav></div>

 <div class="wrap">
 <section class="ve-sec" id="ve-1">
  <div class="ve-phase reveal"><span class="n">01</span><h2>${tr("Découvrir","Discover")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("Contexte","Context")}</span>${tr("Le problème","The problem")}</h3><div>
   <p class="ve-lead">${tr("En Tunisie, beaucoup de designers et de freelances créent sans connaître leurs droits. <em>L'incertitude juridique bride la créativité</em> : plagiat, contrats absents, textes de loi illisibles.","In Tunisia, many designers and freelancers create without knowing their rights. <em>Legal uncertainty holds creativity back</em>: plagiarism, missing contracts, unreadable laws.")}</p>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Insights","Insights")}</span>${tr("Le cauchemar silencieux du designer","The designer's silent nightmare")}</h3><div>
   <div class="quotes">
    ${quote(tr("Est-ce que j'ai le droit d'utiliser cette image ?","Am I allowed to use this image?"),tr("Risque constant de plagiat et de violation des droits d'auteur.","Constant risk of plagiarism and copyright infringement."))}
    ${quote(tr("Mon client refuse de payer, mon devis n'a aucune valeur.","My client won't pay, my quote is worthless."),tr("Contrats inexistants, inadaptés ou copiés-collés d'Internet.","Contracts missing, unsuitable or copy-pasted from the Internet."))}
    ${quote(tr("Les textes de loi tunisiens sont impossibles à décrypter.","Tunisian law texts are impossible to decipher."),tr("Un langage juridique inaccessible pour les non-initiés.","Legal language out of reach for non-experts."))}
   </div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-2">
  <div class="ve-phase reveal"><span class="n">02</span><h2>${tr("Définir","Define")}</h2></div>
  <div class="ve-block reveal"><h3><span>Personas</span>${tr("Pour qui","Who for")}</h3><div>
   <div class="pgrid">
    ${per("🧑‍💻","Youssef, 26",tr("Designer freelance (web & graphique)","Freelance designer (web & graphic)"),tr("Sécuriser ses revenus et protéger ses livrables rapidement. Il veut des solutions prêtes à l'emploi.","Secure his income and protect his deliverables quickly. He wants ready-to-use solutions."),["Templates",tr("Rapidité","Speed"),tr("Sécurité financière","Financial security")])}
    ${per("👩‍🎨","Lina, 21",tr("Étudiante en design digital","Digital design student"),tr("Comprendre les bases du droit d'auteur avant de se lancer sur le marché. Elle cherche de la pédagogie.","Understand copyright basics before entering the market. She's looking for clear teaching."),[tr("Pédagogie","Learning"),tr("Cas pratiques","Case studies"),tr("Prévention","Prevention")])}
   </div>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Architecture","Architecture")}</span>${tr("Cartographie de l'expérience","Experience map")}</h3><div>
   <button class="figure framed" data-lb="slide5" aria-label="Zoom"><img src="${PI_IMG}slide5.webp" alt="${tr("Cartographie de l'expérience utilisateur","User experience map")}" loading="lazy"><span class="zoom">⤢</span></button>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Problématique","Problem statement")}</span>${tr("Le point de départ","The starting point")}</h3><div>
   <div class="problem"><p>${tr("Comment transformer la complexité juridique en <em>outils simples du quotidien</em>, pour que les créatifs tunisiens puissent protéger leur travail sans jargon ?","How might we turn legal complexity into <em>simple everyday tools</em>, so Tunisian creatives can protect their work without jargon?")}</p></div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-3">
  <div class="ve-phase reveal"><span class="n">03</span><h2>${tr("Concevoir","Design")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("La solution","The solution")}</span>${tr("Le droit, en fonctionnalités","Law, as features")}</h3><div>
   <p class="ve-lead" style="margin-bottom:22px">${tr("Une plateforme centralisée qui transforme les règles juridiques en <em>outils actionnables</em>, rédigés en français simple et direct.","A central platform that turns legal rules into <em>actionable tools</em>, written in plain, direct French.")}</p>
   <div class="pillars p3">
    ${feat("©️",tr("Droits d'auteur simplifiés","Copyright made simple"),tr("Des icônes et des phrases courtes à la place des longs textes.","Icons and short sentences instead of long texts."))}
    ${feat("✅",tr("Checklist légale","Legal checklist"),tr("Avant, pendant et après le projet : rien n'est oublié.","Before, during and after the project: nothing is missed."))}
    ${feat("📖",tr("Glossaire interactif","Interactive glossary"),tr("Les termes complexes expliqués d'un clic.","Complex terms explained in one click."))}
    ${feat("💡",tr("Cas pratiques","Case studies"),tr("Des scénarios réels pour s'identifier : « Une agence a volé mon logo ? »","Real scenarios to relate to: “An agency stole my logo?”"))}
    ${feat("🎯",tr("Auto-évaluation","Self-assessment"),tr("Un quiz rapide pour tester la santé juridique de son projet.","A quick quiz to check a project's legal health."))}
    ${feat("🕒",tr("Mise à jour visible","Visible updates"),tr("Chaque page indique sa dernière mise à jour, pour inspirer confiance.","Each page shows its last update, to build trust."))}
   </div>
  </div></div>
  <div class="ve-block reveal"><h3><span>UI design</span>${tr("Les interfaces","The interfaces")}</h3><div>
   <div class="ptabs" id="nrTabs">${pages.map((pg,k)=>`<button data-k="${k}"${k?"":' class="on"'}>${pg[1]}</button>`).join("")}</div>
   <div class="bw shot pishot"><div class="bar"><i></i><i></i><i></i><span id="nrUrl">intellectuel.tn</span><button id="nrZoom" aria-label="Zoom">⤢</button></div><div class="vp" id="nrVp"><img id="nrImg" src="${PI_IMG}accueil-long.webp" alt=""></div></div>
   <p class="shotcap" id="nrCap"></p>
  </div></div>
 </section>
 </div>

 <section class="proto nrproto piproto ve-sec" id="ve-4">
  <div class="wrap">
   <div class="reveal">
    <span class="eyebrow">04 — ${tr("Prototyper","Prototype")}</span>
    <h2>${tr("Le prototype interactif","The interactive prototype")}</h2>
    <p class="intro">${tr("Le parcours complet sur le site. Cliquez sur une rubrique pour y aller directement.","The full journey through the site. Click a section to jump straight to it.")}</p>
   </div>
   <div class="vwrap reveal">
    <div class="bw dark"><div class="bar"><i></i><i></i><i></i><span>intellectuel.tn</span></div><video id="veVid" src="${PI_IMG}prototype.mp4" poster="${PI_IMG}prototype-poster.webp" muted loop playsinline preload="metadata"></video></div>
    <div class="chap" id="veSteps"></div>
    <div class="ctl"><button id="vePlay">❚❚ Pause</button><button id="veFull">⤢ ${tr("Plein écran","Fullscreen")}</button></div>
   </div>
  </div>
 </section>

 <div class="wrap">
  <section class="ve-sec">
   <div class="ve-block reveal"><h3><span>${tr("Résultat","Outcome")}</span>${tr("Pourquoi l'adopter","Why adopt it")}</h3><div>
    <div class="outcome">
     <div class="oc"><div class="st"><small>01</small>${tr("Gain de temps","Time saved")}</div><span class="ar">→</span><div class="af">${tr("Des <b>modèles de contrats</b> adaptés au marché tunisien, prêts en quelques clics.","<b>Contract templates</b> suited to the Tunisian market, ready in a few clicks.")}</div></div>
     <div class="oc"><div class="st"><small>02</small>${tr("Réduction des risques","Lower risk")}</div><span class="ar">→</span><div class="af">${tr("Prévenir les impayés et les violations de <b>propriété intellectuelle</b>.","Prevent unpaid invoices and <b>intellectual property</b> violations.")}</div></div>
     <div class="oc"><div class="st"><small>03</small>${tr("Accessibilité","Accessibility")}</div><span class="ar">→</span><div class="af">${tr("Un contenu en <b>français simple</b>, pensé par des designers pour des designers.","Content in <b>plain French</b>, made by designers for designers.")}</div></div>
    </div>
   </div></div>
  </section>
  ${nextCards(p)}
 </div>
 </div>`;
 piBind();bindShow();bindCursor();observe();
}

function piBind(){
 if(veCleanup)veCleanup();
 $$("#case [data-lb]").forEach(b=>b.onclick=()=>openLB([{svg:`<img src="${PI_IMG}${b.dataset.lb}.webp" alt="">`,cap:tr("Cartographie de l'expérience utilisateur","User experience map"),free:true}],0));
 const pages=PI_PAGES();let cur=0;
 const show=k=>{cur=k;const pg=pages[k];$$("#nrTabs button").forEach((b,i)=>b.classList.toggle("on",i===k));const img=$("#nrImg");img.style.opacity=0;setTimeout(()=>{img.src=`${PI_IMG}${pg[0]}.webp`;img.alt=pg[1];$("#nrVp").scrollTop=0;img.onload=()=>img.style.opacity=1;if(img.complete)img.style.opacity=1},160);$("#nrUrl").textContent=`intellectuel.tn/${k?pg[0]:""}`;$("#nrCap").innerHTML=`<b>${pg[1]}</b> — ${pg[2]}`};
 $$("#nrTabs button").forEach(b=>b.onclick=()=>{show(+b.dataset.k);b.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})});
 const zoom=()=>openLB(pages.map(pg=>({svg:`<img src="${PI_IMG}${pg[0]}.webp" alt="">`,cap:pg[1],free:true})),cur);
 $("#nrZoom").onclick=zoom;$("#nrImg").onclick=zoom;show(0);
 const v=$("#veVid");
 $("#veSteps").innerHTML=PI_STEPS().map(s=>`<button data-t="${s[0]}" data-e="${s[1]}">${s[2]}<span class="bar"></span></button>`).join("");
 const steps=$$("#veSteps button");const setPlay=p=>$("#vePlay").textContent=p?"❚❚ Pause":tr("▶ Lecture","▶ Play");
 steps.forEach(b=>b.onclick=()=>{try{v.currentTime=+b.dataset.t+.05;v.play().catch(()=>{});setPlay(true)}catch(e){}});
 v.addEventListener("timeupdate",()=>{const t=v.currentTime;steps.forEach(b=>{const a=+b.dataset.t,e=+b.dataset.e,on=t>=a&&t<e;b.classList.toggle("on",on);b.querySelector(".bar").style.width=on?((t-a)/(e-a)*100)+"%":"0"})});
 $("#vePlay").onclick=()=>{if(v.paused){v.play().catch(()=>{});setPlay(true)}else{v.pause();setPlay(false)}};
 $("#veFull").onclick=()=>{const f=v.requestFullscreen||v.webkitRequestFullscreen||v.webkitEnterFullscreen;if(f)Promise.resolve(f.call(v)).catch(()=>toast(tr("Plein écran indisponible ici","Fullscreen unavailable here")));else toast(tr("Plein écran indisponible ici","Fullscreen unavailable here"))};
 const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().then(()=>setPlay(true)).catch(()=>setPlay(false));else v.pause()}),{threshold:.35});vio.observe(v);
 const nav=$$("#veNav a");nav.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const secs=["ve-1","ve-2","ve-3","ve-4"].map(id=>document.getElementById(id));
 const spy=()=>{if(!secs[0].isConnected)return;let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)c=i});nav.forEach((a,i)=>a.classList.toggle("on",i===c))};
 addEventListener("scroll",spy,{passive:true});spy();
 veCleanup=()=>{removeEventListener("scroll",spy);vio.disconnect();try{v.pause()}catch(e){}};
}


/* =========================================================
   SHOWCASE 3D + PROJETS UI (Social Bubbles, Monsapo)
   ========================================================= */
function showcase(c){return `<div class="show ${c.cls} reveal" data-show><span class="grain"></span><div class="stage">
 <div class="fwin main"><div class="bar"><i></i><i></i><i></i><span>${c.url}</span></div><div class="vp"><img src="${c.main}" alt="" loading="lazy"></div></div>
 <div class="fwin sub"><div class="vp"><img src="${c.sub}" alt="" loading="lazy"></div></div>
 ${c.chip?`<div class="fchip"><i>${c.chip[0]}</i><span>${c.chip[1]}<small>${c.chip[2]}</small></span></div>`:""}
</div></div>`}
function bindShow(){$$("[data-show]").forEach(el=>{if(el.dataset.sb)return;el.dataset.sb=1;if(!matchMedia("(pointer:fine)").matches)return;
 el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty("--ry",(x*10)+"deg");el.style.setProperty("--rx",(-y*8)+"deg")});
 el.addEventListener("mouseleave",()=>{el.style.setProperty("--ry","0deg");el.style.setProperty("--rx","0deg")})})}

const UI_CASES={
 "social-bubbles":{img:"img/sb/",cls:"sb",kind:"app",
  chips:()=>["UI Design",tr("Application mobile","Mobile app"),tr("Projet académique","Academic project")],
  title:'Social <em>Bubbles</em>',
  sum:()=>tr("Une application de rencontre qui aide à réduire l'isolement : rencontrer des gens près de chez soi, rester actif dans son quartier et prendre soin de son bien-être social.","A social meet-up app that helps reduce loneliness: meet people nearby, stay active in your neighbourhood and look after your social well-being."),
  meta:()=>[[tr("Type","Type"),tr("Application mobile (iOS)","Mobile app (iOS)")],[tr("Rôle","Role"),tr("UI design & prototype","UI design & prototype")],[tr("Thème","Theme"),tr("Bien-être social, rencontres locales","Social well-being, local meet-ups")],[tr("Outils","Tools"),"Figma"]],
  hero:["onboarding","accueil","explorer"],badge:()=>tr("Réduire l'isolement","Reducing loneliness"),
  lead:()=>tr("L'idée : transformer la rencontre en <em>petites habitudes positives</em>. Des « bulles » d'activités locales, des défis doux et un suivi de son énergie sociale.","The idea: turn meeting people into <em>small positive habits</em>. Local activity “bubbles”, gentle challenges and a social-energy tracker."),
  feats:()=>[["💜",tr("Score de bien-être social","Social well-being score"),tr("Un indicateur simple qui montre ses progrès semaine après semaine.","A simple indicator showing progress week after week.")],["🫧",tr("Bulles locales","Local bubbles"),tr("Des activités près de chez soi : sport, bien-être, culture, cafés-discussion.","Activities nearby: sport, well-being, culture, discussion cafés.")],["🏆",tr("Défis & points","Challenges & points"),tr("Des défis hebdomadaires pour oser rencontrer, avec des trophées à gagner.","Weekly challenges to dare to meet people, with trophies to earn.")],["⚡",tr("Énergie sociale","Social energy"),tr("Un suivi visuel de ses interactions pour garder l'équilibre.","A visual tracker of interactions to keep a healthy balance.")],["✨",tr("Créer sa bulle","Create a bubble"),tr("Lancer son propre événement et réunir des personnes qui partagent ses envies.","Start your own event and bring like-minded people together.")],["💬",tr("Assistant bienveillant","Caring assistant"),tr("Un compagnon qui écoute et propose un conseil du moment.","A companion that listens and offers a tip of the moment.")]],
  screens:()=>[["onboarding",tr("Bienvenue","Welcome"),tr("Une promesse claire dès le premier écran.","A clear promise from the very first screen.")],["bienvenue",tr("Objectifs","Goals"),tr("On choisit ce qu'on veut : rencontrer, se sentir mieux, rester actif.","Pick what you want: meet people, feel better, stay active.")],["accueil",tr("Accueil","Home"),tr("Le score de bien-être social et les bulles actives.","The social well-being score and active bubbles.")],["defis",tr("Défis","Challenges"),tr("Les points d'énergie et la progression du mois.","Energy points and monthly progress.")],["defi",tr("Défi de la semaine","Weekly challenge"),tr("Un défi concret, récompensé par des points.","A concrete challenge, rewarded with points.")],["energie",tr("Énergie sociale","Social energy"),tr("Un suivi visuel pour garder l'équilibre.","A visual tracker to keep a healthy balance.")],["explorer",tr("Explorer","Explore"),tr("Les bulles autour de soi, filtrées par thème.","Bubbles nearby, filtered by theme.")],["bulle",tr("Créer une bulle","Create a bubble"),tr("Rejoindre une activité ou lancer la sienne.","Join an activity or start your own.")],["assistant",tr("Assistant","Assistant"),tr("Une conversation bienveillante et un conseil du moment.","A caring conversation and a tip of the moment.")]],
  steps:()=>[[0,4,tr("Bienvenue","Welcome")],[4,11,tr("Accueil","Home")],[11,18,tr("Défis","Challenges")],[18,20,tr("Énergie sociale","Social energy")],[20,25,tr("Explorer","Explore")],[25,29,tr("Créer une bulle","Create a bubble")],[29,40,tr("Assistant","Assistant")]],
  out:()=>[[tr("Isolement","Loneliness"),tr("Des <b>bulles locales</b> pour rencontrer près de chez soi.","<b>Local bubbles</b> to meet people nearby.")],[tr("Manque de motivation","Low motivation"),tr("Des <b>défis et des points</b> qui donnent envie d'oser.","<b>Challenges and points</b> that make you want to try.")],[tr("Bien-être","Well-being"),tr("Un <b>score et une énergie sociale</b> pour voir ses progrès.","A <b>score and social energy</b> to see your progress.")]]},
 "monsapo":{img:"img/ms/",cls:"ms",kind:"web",
  chips:()=>["UI Design","Landing page","E-commerce"],
  title:'Mon<em>sapo</em>',
  sum:()=>tr("La landing page d'une marque tunisienne de produits ménagers écologiques : présenter la gamme, valoriser l'économie circulaire et donner envie d'acheter.","The landing page of a Tunisian eco-friendly cleaning brand: present the range, highlight the circular economy and make people want to buy."),
  meta:()=>[[tr("Type","Type"),"Landing page"],[tr("Rôle","Role"),tr("UI design & prototype","UI design & prototype")],[tr("Secteur","Sector"),tr("Produits ménagers écologiques","Eco cleaning products")],[tr("Outils","Tools"),"Figma"]],
  show:{cls:"mss",url:"monsapo.tn",main:"img/ms/landing.webp",sub:"img/ms/produits.webp",chip:["🌿","Efficace · Naturel · Économique",""]},
  lead:()=>tr("Une page claire et lumineuse qui raconte la marque en <em>quatre temps</em> : la promesse, les produits, l'innovation, puis le contact.","A bright, clear page telling the brand's story in <em>four steps</em>: the promise, the products, the innovation, then contact."),
  feats:()=>[["✨",tr("Promesse en 3 mots","A 3-word promise"),tr("Efficace, naturel, économique : chaque valeur avec son bouton « Acheter ».","Effective, natural, affordable: each value with its own “Buy” button.")],["🧴",tr("Meilleures ventes","Best sellers"),tr("Les produits phares, avec prix et ajout au panier.","Flagship products, with prices and add to cart.")],["♻️",tr("Économie circulaire","Circular economy"),tr("Réduction des déchets et huile végétale usagée, expliquées simplement.","Waste reduction and recycled vegetable oil, explained simply.")],["🚚",tr("Réassurance","Reassurance"),tr("Livraison offerte, retours et paiement sécurisé.","Free delivery, returns and secure payment.")],["✉️",tr("Contact & newsletter","Contact & newsletter"),tr("Un formulaire court pour rester en lien avec la marque.","A short form to keep in touch with the brand.")],["🎨",tr("Identité lumineuse","Bright identity"),tr("Blanc, vert et jaune : une interface propre comme les produits.","White, green and yellow: an interface as clean as the products.")]],
  screens:()=>[["landing",tr("Page complète","Full page"),tr("Toute la landing page, de la promesse au pied de page.","The whole landing page, from promise to footer.")],["hero",tr("Promesse","Promise"),tr("Les trois valeurs de la marque, avec un appel à l'achat.","The brand's three values, with a call to buy.")],["produits",tr("Produits","Products"),tr("Les meilleures ventes, prix et panier.","Best sellers, prices and cart.")],["innovation",tr("Innovation","Innovation"),tr("L'économie circulaire et la réassurance.","Circular economy and reassurance.")],["contact",tr("Contact","Contact"),tr("Coordonnées, newsletter et liens utiles.","Contact details, newsletter and useful links.")]],
  steps:()=>[[0,1,tr("Promesse","Promise")],[1,2.2,tr("Produits","Products")],[2.2,2.8,tr("Innovation","Innovation")],[2.8,8.3,"Contact"]],
  out:()=>[[tr("Message","Message"),tr("Une <b>promesse lisible en 3 secondes</b>.","A <b>promise readable in 3 seconds</b>.")],[tr("Conversion","Conversion"),tr("Des <b>boutons d'achat</b> à chaque étape de la lecture.","<b>Buy buttons</b> at every step of the page.")],[tr("Confiance","Trust"),tr("<b>Engagement écologique</b> et garanties mis en avant.","<b>Eco commitment</b> and guarantees front and centre.")]]}
};

function renderUI(p){
 const c=UI_CASES[p.id],I=c.img;
 const hero=c.kind==="app"
  ?`<div class="ve-hero sbh reveal" id="veHero"><span class="glow"></span><div class="phones">${c.hero.map(n=>`<div class="phone"><img src="${I}${n}.webp" alt="" loading="lazy"></div>`).join("")}</div><span class="badge"><i>🫧</i>${c.badge()}</span></div>`
  :showcase(c.show);
 const sc=c.screens();
 const screensUI=c.kind==="app"
  ?`<div class="rail-wrap"><div class="rail" id="veRail">${sc.map((s,k)=>`<div class="scr"><div class="phone" data-k="${k}"><img src="${I}${s[0]}.webp" alt="${esc(s[1])}" loading="lazy" decoding="async"></div><div class="cap"><b><i>${k+1}</i>${esc(s[1])}</b><p>${esc(s[2])}</p></div></div>`).join("")}</div><div class="rail-ctrl"><div class="rail-prog"><i id="veProg"></i></div><button id="veL" aria-label="←">←</button><button id="veR" aria-label="→">→</button></div></div>`
  :`<div class="ptabs" id="nrTabs">${sc.map((s,k)=>`<button data-k="${k}"${k?"":' class="on"'}>${s[1]}</button>`).join("")}</div><div class="bw shot"><div class="bar"><i></i><i></i><i></i><span>monsapo.tn</span><button id="nrZoom" aria-label="Zoom">⤢</button></div><div class="vp" id="nrVp"><img id="nrImg" src="${I}${sc[0][0]}.webp" alt=""></div></div><p class="shotcap" id="nrCap"></p>`;
 const video=c.kind==="app"
  ?`<section class="proto ve-sec" id="ve-3"><div class="wrap"><div class="vwrap reveal"><div class="phone"><video id="veVid" src="${I}prototype.mp4" poster="${I}accueil.webp" muted loop playsinline preload="metadata"></video></div><div class="ctl"><button id="vePlay">❚❚ Pause</button><button id="veFull">⤢ ${tr("Plein écran","Fullscreen")}</button></div></div><div class="reveal"><span class="eyebrow">03 — ${tr("Prototyper","Prototype")}</span><h2>${tr("Le prototype interactif","The interactive prototype")}</h2><p class="intro">${tr("Le parcours complet dans l'application. Cliquez sur une étape pour y aller directement.","The full journey through the app. Click a step to jump straight to it.")}</p><div class="vsteps" id="veSteps"></div></div></div></section>`
  :`<section class="proto nrproto piproto ve-sec" id="ve-3"><div class="wrap"><div class="reveal"><span class="eyebrow">03 — ${tr("Prototyper","Prototype")}</span><h2>${tr("Le prototype interactif","The interactive prototype")}</h2><p class="intro">${tr("Le défilement complet de la page.","The full page scroll.")}</p></div><div class="vwrap reveal"><div class="bw dark"><div class="bar"><i></i><i></i><i></i><span>monsapo.tn</span></div><video id="veVid" src="${I}prototype.mp4" poster="${I}prototype-poster.webp" muted loop playsinline preload="metadata"></video></div><div class="chap" id="veSteps"></div><div class="ctl"><button id="vePlay">❚❚ Pause</button><button id="veFull">⤢ ${tr("Plein écran","Fullscreen")}</button></div></div></div></section>`;
 $("#case").innerHTML=`<div class="ve ${c.cls}">
 <div class="wrap"><div class="case-top">
  <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
  <div class="chips">${c.chips().map((t,i)=>`<span${i?"":' class="g"'}>${t}</span>`).join("")}</div>
  <h1>${c.title}</h1><p class="sum">${c.sum()}</p>
  <div class="case-meta">${c.meta().map(m=>`<div><span class="mono">${m[0]}</span><b>${m[1]}</b></div>`).join("")}</div>
  ${hero}
 </div></div>
 <div class="ve-nav"><nav id="veNav"><a href="#" data-go="ve-1"><b>01</b>${tr("Concept","Concept")}</a><a href="#" data-go="ve-2"><b>02</b>${tr("Interfaces","Interfaces")}</a><a href="#" data-go="ve-3"><b>03</b>${tr("Prototype","Prototype")}</a></nav></div>
 <div class="wrap">
  <section class="ve-sec" id="ve-1"><div class="ve-phase reveal"><span class="n">01</span><h2>${tr("Le concept","The concept")}</h2></div>
   <div class="ve-block reveal"><h3><span>${tr("L'idée","The idea")}</span>${tr("En une phrase","In one sentence")}</h3><div><p class="ve-lead">${c.lead()}</p></div></div>
   <div class="ve-block reveal"><h3><span>${tr("Fonctionnalités","Features")}</span>${tr("Ce que propose le design","What the design offers")}</h3><div><div class="pillars feat3">${c.feats().map(f=>`<div><span>${f[0]}</span><b>${f[1]}</b><p>${f[2]}</p></div>`).join("")}</div></div></div>
  </section>
  <section class="ve-sec" id="ve-2"><div class="ve-phase reveal"><span class="n">02</span><h2>${tr("Les interfaces","The interfaces")}</h2></div>
   <div class="ve-block reveal"><h3><span>UI design</span>${tr("Écrans clés","Key screens")}</h3><div>${screensUI}</div></div>
  </section>
 </div>
 ${video}
 <div class="wrap"><section class="ve-sec">
  <div class="ve-block reveal"><h3><span>${tr("Résultat","Outcome")}</span>${tr("Ce que ça change","What it changes")}</h3><div><div class="outcome">${c.out().map((o,k)=>`<div class="oc"><div class="st"><small>0${k+1}</small>${o[0]}</div><span class="ar">→</span><div class="af">${o[1]}</div></div>`).join("")}</div></div></div>
 </section>${nextCards(p)}</div>
 </div>`;
 uiBind(c);bindShow();bindCursor();observe();
}

function uiBind(c){
 if(veCleanup)veCleanup();
 const I=c.img,sc=c.screens();let offs=[];
 if(c.kind==="app"){
  const rail=$("#veRail");
  const prog=()=>{const m=rail.scrollWidth-rail.clientWidth;$("#veProg").style.width=(m<=0?100:Math.max(8,rail.scrollLeft/m*100))+"%";$("#veL").disabled=rail.scrollLeft<4;$("#veR").disabled=m-rail.scrollLeft<4};
  rail.addEventListener("scroll",prog,{passive:true});prog();
  const step=()=>{const x=rail.querySelector(".scr");return x?x.offsetWidth+24:300};
  $("#veL").onclick=()=>rail.scrollBy({left:-step(),behavior:"smooth"});$("#veR").onclick=()=>rail.scrollBy({left:step(),behavior:"smooth"});
  let down=false,sx=0,s0=0;rail.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;down=true;sx=e.clientX;s0=rail.scrollLeft;rail.dataset.moved="0"});
  const mv=e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>5){rail.dataset.moved="1";rail.classList.add("drag")}rail.scrollLeft=s0-dx};
  const up=()=>{if(!down)return;down=false;rail.classList.remove("drag");setTimeout(()=>rail.dataset.moved="0",50)};
  addEventListener("pointermove",mv);addEventListener("pointerup",up);offs.push(()=>{removeEventListener("pointermove",mv);removeEventListener("pointerup",up)});
  $$("#veRail .phone").forEach(ph=>ph.onclick=()=>{if(rail.dataset.moved==="1")return;openLB(sc.map(s=>({svg:`<img src="${I}${s[0]}.webp" alt="">`,cap:s[1],free:true,phone:true})),+ph.dataset.k)});
 }else{
  let cur=0;const show=k=>{cur=k;const s=sc[k];$$("#nrTabs button").forEach((b,i)=>b.classList.toggle("on",i===k));const img=$("#nrImg");img.style.opacity=0;setTimeout(()=>{img.src=`${I}${s[0]}.webp`;$("#nrVp").scrollTop=0;img.onload=()=>img.style.opacity=1;if(img.complete)img.style.opacity=1},160);$("#nrCap").innerHTML=`<b>${s[1]}</b> — ${s[2]}`};
  $$("#nrTabs button").forEach(b=>b.onclick=()=>show(+b.dataset.k));
  const zoom=()=>openLB(sc.map(s=>({svg:`<img src="${I}${s[0]}.webp" alt="">`,cap:s[1],scroll:s[0]==="landing",free:s[0]!=="landing"})),cur);
  $("#nrZoom").onclick=zoom;$("#nrImg").onclick=zoom;show(0);
 }
 const v=$("#veVid"),steps0=c.steps();const setPlay=p=>$("#vePlay").textContent=p?"❚❚ Pause":tr("▶ Lecture","▶ Play");
 $("#veSteps").innerHTML=c.kind==="app"?steps0.map((s,k)=>`<button class="vstep" data-t="${s[0]}" data-e="${s[1]}"><i>${k+1}</i>${s[2]}<span class="bar"></span></button>`).join(""):steps0.map(s=>`<button data-t="${s[0]}" data-e="${s[1]}">${s[2]}<span class="bar"></span></button>`).join("");
 const steps=$$("#veSteps button");
 steps.forEach(b=>b.onclick=()=>{try{v.currentTime=+b.dataset.t+.05;v.play().catch(()=>{});setPlay(true)}catch(e){}});
 v.addEventListener("timeupdate",()=>{const t=v.currentTime;steps.forEach(b=>{const a=+b.dataset.t,e=+b.dataset.e,on=t>=a&&t<e;b.classList.toggle("on",on);b.querySelector(".bar").style.width=on?((t-a)/(e-a)*100)+"%":"0"})});
 $("#vePlay").onclick=()=>{if(v.paused){v.play().catch(()=>{});setPlay(true)}else{v.pause();setPlay(false)}};
 $("#veFull").onclick=()=>{const f=v.requestFullscreen||v.webkitRequestFullscreen||v.webkitEnterFullscreen;if(f)Promise.resolve(f.call(v)).catch(()=>toast(tr("Plein écran indisponible ici","Fullscreen unavailable here")));else toast(tr("Plein écran indisponible ici","Fullscreen unavailable here"))};
 const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().then(()=>setPlay(true)).catch(()=>setPlay(false));else v.pause()}),{threshold:.35});vio.observe(v);
 const nav=$$("#veNav a");nav.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const secs=["ve-1","ve-2","ve-3"].map(id=>document.getElementById(id));
 const spy=()=>{if(!secs[0].isConnected)return;let k=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)k=i});nav.forEach((a,i)=>a.classList.toggle("on",i===k))};
 addEventListener("scroll",spy,{passive:true});spy();
 const hero=$("#veHero");if(hero&&matchMedia("(pointer:fine)").matches){hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.querySelector(".phones").style.transform=`translate(${x*-16}px,${y*-10}px)`});hero.addEventListener("mouseleave",()=>hero.querySelector(".phones").style.transform="")}
 veCleanup=()=>{removeEventListener("scroll",spy);vio.disconnect();offs.forEach(f=>f());try{v.pause()}catch(e){}};
}


/* =========================================================
   ÉTUDE DE CAS — TUNIS, CAPITALE DU TOURISME ARABE 2027
   ========================================================= */
const TN_IMG="img/tn/";
function TN_GAL(){return [
 ["sign",tr("Signalétique","Signage"),[["totem",tr("Totem directionnel","Directional totem")],["plan",tr("Plan touristique","Tourist map")],["fleches",tr("Panneaux directionnels","Direction signs")],["kakemono",tr("Kakémono urbain","Street banner")],["accueil",tr("Espace d'accueil","Welcome desk")]]],
 ["transport",tr("Transports","Transport"),[["avion",tr("Avion","Aircraft")],["train",tr("Train","Train")],["bus",tr("Bus","Bus")],["metro",tr("Métro","Metro")]]],
 ["event",tr("Événementiel","Events"),[["scene",tr("Scène de conférence","Conference stage")],["arche",tr("Arche d'entrée","Entrance arch")],["kit",tr("Kit organisateur","Organiser kit")],["tote",tr("Tote bag","Tote bag")]]],
 ["print",tr("Imprimés","Print"),[["carte-c",tr("Carte de visite","Business card")],["rollup-c",tr("Roll-up","Roll-up")]]],
 ["digital",tr("Digital","Digital"),[["siteweb-c",tr("Site web","Website")],["linkedin-c",tr("Habillage LinkedIn","LinkedIn branding")],["facebook-c",tr("Habillage Facebook","Facebook branding")]]]
]}
function renderTN(p){
 const G=TN_GAL();
 $("#case").innerHTML=`<div class="ve tn">
 <div class="wrap"><div class="case-top">
  <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
  <div class="chips"><span class="g">${tr("Design graphique","Graphic design")}</span><span>${tr("Identité visuelle","Visual identity")}</span><span>${tr("Charte graphique","Brand guidelines")}</span><span>2026</span></div>
  <h1>Tunis, <em>${tr("Capitale du Tourisme Arabe","Arab Tourism Capital")}</em> 2027</h1>
  <p class="sum">${tr("Logo, charte graphique et déclinaisons pour la campagne qui fait de Tunis la vitrine du tourisme arabe en 2027.","Logo, brand guidelines and roll-out for the campaign making Tunis the showcase of Arab tourism in 2027.")}</p>
  <div class="case-meta">
   <div><span class="mono">${tr("Projet","Project")}</span><b>${tr("Identité visuelle institutionnelle","Institutional visual identity")}</b></div>
   <div><span class="mono">${tr("Rôle","Role")}</span><b>${tr("Logo, charte, visuel de campagne","Logo, guidelines, campaign visual")}</b></div>
   <div><span class="mono">${tr("Réalisé par","Created by")}</span><b>Yasmine Boumaiza · Yasmine Dhaouadi</b></div>
   <div><span class="mono">${tr("Outils","Tools")}</span><b>Illustrator · Photoshop · InDesign</b></div>
  </div>
  <div class="docs"><button class="docbtn" type="button" data-doc="tunis"><span class="di">PDF</span><span><b>${tr("Charte graphique complète","Full brand guidelines")}</b><small>${tr("Lire en ligne · 32 pages","Read online · 32 pages")}</small></span><i>↗</i></button></div>
  <div class="tn-hero reveal" id="tnHero"><img src="${TN_IMG}hero.webp" alt="${tr("Logo Tunis 2027 sur une façade","Tunis 2027 logo on a façade")}"><span class="badge"><img src="${TN_IMG}logo.png" alt="">${tr("Tunis 2027 · Organisation arabe du tourisme","Tunis 2027 · Arab Tourism Organization")}</span></div>
 </div></div>

 <div class="ve-nav"><nav id="veNav"><a href="#" data-go="ve-1"><b>01</b>${tr("Contexte","Context")}</a><a href="#" data-go="ve-2"><b>02</b>${tr("Le logo","The logo")}</a><a href="#" data-go="ve-3"><b>03</b>${tr("Système","System")}</a><a href="#" data-go="ve-4"><b>04</b>${tr("Applications","Applications")}</a></nav></div>

 <div class="wrap">
 <section class="ve-sec" id="ve-1"><div class="ve-phase reveal"><span class="n">01</span><h2>${tr("Contexte","Context")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("Le projet","The project")}</span>${tr("Pourquoi une identité","Why an identity")}</h3><div>
   <p class="ve-lead">${tr("Tunis a été désignée <em>Capitale du Tourisme Arabe 2027</em> par l'Organisation arabe du tourisme. Pour porter cette campagne, il fallait une identité forte, reconnaissable et bilingue.","Tunis has been named <em>Arab Tourism Capital 2027</em> by the Arab Tourism Organization. Carrying this campaign called for a strong, recognisable, bilingual identity.")}</p>
   <div class="iter">${[tr("Représenter l'identité de Tunis","Represent Tunis' identity"),tr("Valoriser le patrimoine culturel et architectural","Showcase cultural and architectural heritage"),tr("Créer une image institutionnelle forte","Build a strong institutional image"),tr("Allier tradition et modernité","Combine tradition and modernity"),tr("Renforcer l'attractivité touristique","Boost tourist appeal")].map(t=>`<span>${t}</span>`).join("")}</div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-2"><div class="ve-phase reveal"><span class="n">02</span><h2>${tr("Le logo","The logo")}</h2></div>
  <div class="ve-block reveal"><h3><span>Concept</span>${tr("Arches + calligraphie","Arches + calligraphy")}</h3><div>
   <p class="ve-lead" style="margin-bottom:24px">${tr("Le logo réunit <em>les arches de la Grande Mosquée de Kairouan</em> et la calligraphie du mot <em>تونس</em> : un pont entre héritage arabo-islamique et ambition internationale.","The logo brings together <em>the arches of the Great Mosque of Kairouan</em> and the calligraphy of the word <em>تونس</em> (Tunis): a bridge between Arab-Islamic heritage and international ambition.")}</p>
   ${gStage(TN_IMG+"concept-c.webp",{cap:tr("Les arches de Kairouan + le mot تونس = le logo","Kairouan arches + the word تونس = the logo"),showCap:false,cls:"white",zoom:false,style:"cursor:default"})}
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Logotype","Logotype")}</span>${tr("Sur fond clair & foncé","On light & dark")}</h3><div>
   <div class="logos2 tnl">
    <div class="logo-tile plain main zoomable" data-z="${TN_IMG}logo.png|${tr("Version principale","Main version")}"><img src="${TN_IMG}logo.png" alt="Logo"><b>تونس عاصمة للسياحة العربية</b><small>Tunis, Arab Tourism Capital</small><span class="tag">${tr("Version principale","Main version")}</span></div>
    <div class="logo-tile plain neg" style="--nb:#001489"><img src="${TN_IMG}logo.png" alt="Logo"><b>تونس عاصمة للسياحة العربية</b><small>Tunis, Arab Tourism Capital</small><span class="tag">${tr("Version négative · fond Bleu Reflex","Reversed version · Reflex Blue")}</span></div>
   </div>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Versions","Versions")}</span>${tr("Arabe · Français · Anglais","Arabic · French · English")}</h3><div>
   <div class="icards" style="margin-top:0">
    <div><div class="fstage white" style="aspect-ratio:1/1;height:auto;width:100%;padding:clamp(20px,3vw,44px)" data-z="${TN_IMG}lang-3.webp|${tr("Version arabe","Arabic version")}"><img src="${TN_IMG}lang-3.webp" alt="" loading="lazy" style="box-shadow:none;border-radius:0"></div><span class="cap" style="display:block;font-size:13.5px;color:var(--muted);margin-top:8px"><b style="color:var(--ink)">${tr("Version arabe","Arabic version")}</b></span></div>
    <div><div class="fstage white" style="aspect-ratio:1/1;height:auto;width:100%;padding:clamp(20px,3vw,44px)" data-z="${TN_IMG}lang-1.webp|${tr("Version française","French version")}"><img src="${TN_IMG}lang-1.webp" alt="" loading="lazy" style="box-shadow:none;border-radius:0"></div><span class="cap" style="display:block;font-size:13.5px;color:var(--muted);margin-top:8px"><b style="color:var(--ink)">${tr("Version française","French version")}</b></span></div>
    <div><div class="logo-tile plain main" style="aspect-ratio:1/1;min-height:0;padding:clamp(20px,3vw,44px);align-content:center;justify-items:center;gap:4px"><img src="${TN_IMG}logo.png" alt="" style="width:auto;height:46%;max-height:220px;margin-bottom:12px"><b style="font-size:clamp(15px,1.5vw,20px);color:#001489;font-weight:700;text-align:center">تونس عاصمة للسياحة العربية</b><small style="font-size:clamp(11px,1vw,14px);color:#BE3455;font-weight:700">Tunis, Arab Tourism Capital</small></div><span class="cap" style="display:block;font-size:13.5px;color:var(--muted);margin-top:8px"><b style="color:var(--ink)">${tr("Version anglaise","English version")}</b></span></div>
   </div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-3"><div class="ve-phase reveal"><span class="n">03</span><h2>${tr("Le système graphique","The visual system")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("Couleurs","Colours")}</span>${tr("Palette principale","Main palette")}</h3><div>
   <div class="circles">${circ("#001489","Bleu Reflex",[["HEX","#001489"],[tr("RVB","RGB"),"0 · 20 · 137"],[tr("CMJN","CMYK"),"100 · 91 · 24 · 7"]],tr("La Méditerranée, la confiance","The Mediterranean, trust"))}${circ("#BE3455","Viva Magenta",[["HEX","#BE3455"],[tr("RVB","RGB"),"190 · 52 · 85"]],tr("La chaleur de l'hospitalité","Warm hospitality"))}</div>
   <p class="ve-p" style="margin-top:14px">${tr("Le bleu évoque la Méditerranée et la confiance institutionnelle ; le magenta apporte la chaleur de l'hospitalité tunisienne. Cliquez sur un cercle pour copier son code.","Blue evokes the Mediterranean and institutional trust; magenta brings the warmth of Tunisian hospitality. Click a circle to copy its code.")}</p>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Typographie","Typography")}</span>${tr("Police de texte","Text typeface")}</h3><div>
   <div class="typo"><div><small>${tr("Police principale","Main typeface")}</small><b>Madani Arabic</b><span>SemiBold</span><p>Aa Bb Cc 123 — تونس عاصمة</p></div><div><small>${tr("Signature mail","Email signature")}</small><b style="font-weight:600">Berlin Sans FB</b><span>Regular</span><p>Aa Bb Cc 123</p></div></div>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Règles d'usage","Usage rules")}</span>${tr("Fonds & interdits","Backgrounds & don'ts")}</h3><div>
   <p class="ve-p" style="margin:0 0 14px">${tr("Sur fond clair, le logo garde ses couleurs ; sur fond foncé ou coloré, il passe en blanc ou en noir.","On light backgrounds the logo keeps its colours; on dark or coloured ones it switches to white or black.")}</p>
   <div class="fonds6">${[["#DDE7F7",""],["#001489","w"],["#F4F1EA",""],["#E9E58A","k"],["#BE3455","w"],["#F2C200","w"]].map(([bg,c])=>`<div class="${c}" style="background:${bg}"><span class="ok">✓</span><img src="${TN_IMG}logo.png" alt=""><b>تونس عاصمة للسياحة العربية</b><small>Tunis, Arab Tourism Capital</small></div>`).join("")}</div>
   <p class="ve-p" style="margin:34px 0 14px"><b style="color:var(--ink)">${tr("Les interdits","Don'ts")}</b> — ${tr("pour garder un logo toujours lisible et cohérent.","to keep the logo legible and consistent.")}</p>
   <div class="dont">${[tr("Modifier les couleurs","Change the colours"),tr("Modifier les proportions","Change proportions"),tr("Effacer des éléments","Remove elements"),tr("Pivoter","Rotate"),tr("Ignorer la zone de sécurité","Ignore clear space"),tr("Ajouter une ombre portée","Add a drop shadow"),tr("Élargir ou étroitiser","Stretch or squeeze"),tr("Incliner","Skew"),tr("Changer la typographie","Change the typeface"),tr("Changer la grille","Change the grid"),tr("Atténuer la teinte","Fade the colour"),tr("Graisser la typographie","Embolden the type")].map((t,i)=>`<div><span class="im"><img src="${TN_IMG}x${String(i+1).padStart(2,"0")}.webp" alt="" loading="lazy"></span><p><i>${String(i+1).padStart(2,"0")}</i>${tr("Ne pas","Don't")} ${LANG==="en"?t.toLowerCase():t.toLowerCase()}</p></div>`).join("")}</div>
  </div></div>
 </section>

 <section class="ve-sec" id="ve-4"><div class="ve-phase reveal"><span class="n">04</span><h2>${tr("Applications","Applications")}</h2></div>
  <div class="ve-block reveal"><h3><span>${tr("Déclinaisons","Roll-out")}</span>${tr("La marque dans la ville","The brand in the city")}</h3><div>
   <div class="ptabs" id="tnTabs">${G.map((g,k)=>`<button data-k="${k}"${k?"":' class="on"'}>${g[1]}</button>`).join("")}</div>
   <div class="tn-gal" id="tnGal"></div>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Site web","Website")}</span>${tr("Tunis Arab Tourism Capital","Tunis Arab Tourism Capital")}</h3><div>
   <div class="bw shot"><div class="bar"><i></i><i></i><i></i><span>tunis2027.tn</span><button id="tnZoom" aria-label="Zoom">⤢</button></div><div class="vp" id="tnVp"><img src="${TN_IMG}web.webp" alt="Site web" loading="lazy" id="tnWeb"></div></div>
   <p class="shotcap">${tr("Faites défiler la page : découvrir la région, expériences, calendrier officiel, mobilité et vision durable.","Scroll the page: the region, experiences, official calendar, mobility and green vision.")}</p>
  </div></div>
  <div class="ve-block reveal"><h3><span>${tr("Document","Document")}</span>${tr("La charte complète","The full guidelines")}</h3><div>
   <div class="docs"><button class="docbtn" type="button" data-doc="tunis"><span class="di">PDF</span><span><b>${tr("Charte graphique complète","Full brand guidelines")}</b><small>${tr("Logo, couleurs, typographie, imprimés, digital · 32 pages","Logo, colours, typography, print, digital · 32 pages")}</small></span><i>↗</i></button></div>
  </div></div>
 </section>
 ${nextCards(p)}
 </div></div>`;
 tnBind();bindCursor();observe();$$("#case [data-z]").forEach(el=>el.onclick=()=>{const [s,c]=el.dataset.z.split("|");openLB([{svg:`<img src="${s}" alt="">`,cap:c,free:true}],0)});$$("#case [data-copy-hex]").forEach(b=>b.onclick=()=>copy(b.dataset.copyHex));
}
function tnBind(){
 if(veCleanup)veCleanup();
 const cap={concept:tr("Concept du logo","Logo concept"),langues:tr("Versions linguistiques","Language versions"),fonds:tr("Application sur fond","On backgrounds"),interdits:tr("Les interdits","Don'ts")};
 $$("#case [data-lb]").forEach(b=>b.onclick=()=>openLB([{svg:`<img src="${TN_IMG}${b.dataset.lb}.webp" alt="">`,cap:cap[b.dataset.lb],free:true}],0));
 $$("[data-copy-hex]").forEach(b=>b.onclick=()=>copy(b.dataset.copyHex));
 const G=TN_GAL();
 const fill=k=>{const items=G[k][2];$("#tnGal").innerHTML=items.map((it,i)=>`<button class="tile2" data-i="${i}" style="animation-delay:${i*.06}s"><img src="${TN_IMG}${it[0]}.webp" alt="${esc(it[1])}" loading="lazy"><span>${it[1]}</span></button>`).join("");$("#tnGal").dataset.k=G[k][0];
  $$("#tnGal .tile2").forEach(t=>t.onclick=()=>openLB(items.map(it=>({svg:`<img src="${TN_IMG}${it[0]}.webp" alt="">`,cap:it[1],free:true})),+t.dataset.i));bindCursor()};
 $$("#tnTabs button").forEach(b=>b.onclick=()=>{$$("#tnTabs button").forEach(x=>x.classList.toggle("on",x===b));fill(+b.dataset.k)});fill(0);
 const zw=()=>openLB([{svg:`<img src="${TN_IMG}web.webp" alt="">`,cap:tr("Site web — Tunis 2027","Website — Tunis 2027"),scroll:true}],0);$("#tnZoom").onclick=zw;$("#tnWeb").onclick=zw;
 const hero=$("#tnHero");const par=()=>{if(!hero.isConnected)return;const r=hero.getBoundingClientRect();hero.querySelector("img").style.transform=`scale(1.08) translateY(${Math.max(-30,Math.min(30,r.top*-.06))}px)`};addEventListener("scroll",par,{passive:true});par();
 const nav=$$("#veNav a");nav.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const secs=["ve-1","ve-2","ve-3","ve-4"].map(id=>document.getElementById(id));
 const spy=()=>{if(!secs[0].isConnected)return;let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)c=i});nav.forEach((a,i)=>a.classList.toggle("on",i===c))};
 addEventListener("scroll",spy,{passive:true});spy();
 veCleanup=()=>{removeEventListener("scroll",spy);removeEventListener("scroll",par)};
}


/* =========================================================
   PROJETS GRAPHIQUES & MOTION (V9)
   ========================================================= */
function gTop(o){return `<div class="wrap"><div class="case-top">
 <a class="back" href="#travaux">← ${tr("Tous les projets","All work")}</a>
 <div class="chips">${o.chips.map((t,i)=>`<span${i?"":' class="g"'}>${t}</span>`).join("")}</div>
 <h1>${o.title}</h1><p class="sum">${o.sum}</p>
 <div class="case-meta">${o.meta.map(m=>`<div><span class="mono">${m[0]}</span><b>${m[1]}</b></div>`).join("")}</div>
 ${o.doc?`<div class="docs"><button class="docbtn" type="button" data-doc="${o.doc[0]}"><span class="di">PDF</span><span><b>${o.doc[1]}</b><small>${o.doc[2]}</small></span><i>↗</i></button>${o.doc2?`<button class="docbtn" type="button" data-doc="${o.doc2[0]}"><span class="di">PDF</span><span><b>${o.doc2[1]}</b><small>${o.doc2[2]}</small></span><i>↗</i></button>`:""}</div>`:""}
 ${o.hero||""}
</div></div>`}
function gSec(n,t,sub,body){return `<section class="sec reveal"><div class="sh"><span class="n">${n}</span><h2>${t}</h2>${sub?`<p>${sub}</p>`:""}</div>${body}</section>`}
function gStage(src,o={}){return `<div class="stage ${o.cls||""} ${o.zoom===false?"":"zoomable"}" ${o.zoom===false?"":`data-z="${src}|${esc(o.cap||"")}"`} style="${o.style||""}"><img src="${src}" alt="${esc(o.cap||"")}" loading="lazy"></div>${o.cap&&o.showCap!==false?`<span class="cap">${o.cap}</span>`:""}`}
function gTile(src,lbl,ar){return `<button class="gal-tile" data-z="${src}|${esc(lbl)}" style="aspect-ratio:${ar||"4/3"}"><img src="${src}" alt="${esc(lbl)}" loading="lazy"><span class="lbl">${lbl}</span></button>`}
function gNav(){
 const secs=$$("#case section.sec");if(secs.length<2)return;
 secs.forEach((sc,i)=>sc.id="gs-"+(i+1));
 const wrap=secs[0].closest(".wrap");const nav=document.createElement("div");nav.className="ve-nav";const _pj=(typeof PROJECTS!=="undefined"&&PROJECTS.find(x=>"#projet-"+x.id===location.hash));nav.style.setProperty("--pc",(_pj&&_pj.pal&&_pj.pal.a)||"#111");
 nav.innerHTML=`<nav id="veNav">${secs.map((sc,i)=>`<a href="#" data-go="gs-${i+1}"><b>${sc.querySelector(".sh .n").textContent}</b>${sc.querySelector(".sh h2").textContent}</a>`).join("")}</nav>`;
 wrap.parentElement.insertBefore(nav,wrap);
 const as=[...nav.querySelectorAll("a")];as.forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.go);window.scrollTo({top:t.getBoundingClientRect().top+scrollY-128,behavior:"smooth"})});
 const spy=()=>{if(!secs[0].isConnected)return;let c=0;secs.forEach((sc,i)=>{if(sc.getBoundingClientRect().top<innerHeight*.45)c=i});as.forEach((a,i)=>a.classList.toggle("on",i===c))};
 addEventListener("scroll",spy,{passive:true});spy();
 return ()=>removeEventListener("scroll",spy);
}
function gBind(){
 if(veCleanup)veCleanup();
 const items=$$("#case [data-z]");const list=items.map(el=>{const [s,c]=el.dataset.z.split("|");return {svg:`<img src="${s}" alt="">`,cap:c,free:true}});
 items.forEach((el,i)=>el.onclick=()=>openLB(list,i));
 $$("#case [data-copy-hex]").forEach(b=>b.onclick=e=>{e.stopPropagation();copy(b.dataset.copyHex)});
 bindCursor();observe();veCleanup=gNav()||null;
}
function circ(c,name,rows,note){return `<button class="circ" style="--c:${c}" data-copy-hex="${c}"><span class="dot"></span><span><b>${name}</b><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("")}</dl>${note?`<small>${note}</small>`:""}</span></button>`}

/* ---------- FLEXOPRINT ---------- */
function renderFX(p){
 const I="img/fx/";
 $("#case").innerHTML=`<div class="ve gx fxp style="--pc:#2A307D">${gTop({
  chips:[tr("Design graphique","Graphic design"),tr("Refonte de logo","Logo redesign"),tr("Charte graphique","Brand guidelines"),"2026"],
  title:`Flexo<em style="color:#D9A800">Print</em>`,
  sum:tr("Refonte du logo et de la charte graphique de FlexoPrint, filiale de Rose Blanche Group spécialisée dans l'impression d'emballages souples — un challenge du Hackathon FLEXOPRINT.","Logo and brand guidelines redesign for FlexoPrint, the Rose Blanche Group subsidiary specialised in flexible packaging printing — a FLEXOPRINT Hackathon challenge."),
  meta:[[tr("Client","Client"),"FlexoPrint · Rose Blanche Group"],[tr("Contexte","Context"),tr("Challenge — Hackathon FLEXOPRINT","Challenge — FLEXOPRINT Hackathon")],[tr("Équipe","Team"),"Karoui Issrar · Boumaiza Yasmine · Dhaouadi Yasmine · Slama Mohamed · Krouf Safe"],[tr("Outils","Tools"),"Illustrator · Photoshop · Figma"]],
  doc:["flexoprint",tr("Charte graphique complète","Full brand guidelines"),tr("Lire en ligne · 33 pages","Read online · 33 pages")],
  hero:`<div class="stage photo reveal" data-z="${I}facade.webp|${tr("Enseigne FlexoPrint","FlexoPrint signage")}" style="border-radius:30px;cursor:zoom-in"><img src="${I}facade.webp" alt="FlexoPrint"></div>`})}
 <div class="wrap">
 ${gSec("01",tr("Le brief","The brief"),"",`<p class="ve-lead">${tr("Leader tunisien de la flexographie depuis 1994, FlexoPrint voulait une identité <em>plus moderne et plus captivante</em> : cohérente avec Rose Blanche Group sans en être une simple déclinaison, lisible sur tous les supports et fidèle à son bleu historique.","Tunisia's flexography leader since 1994, FlexoPrint wanted a <em>more modern, more engaging</em> identity: consistent with Rose Blanche Group without being a mere spin-off, legible everywhere and true to its historic blue.")}</p>
  <div class="iter">${[tr("Représenter l'identité FlexoPrint","Represent FlexoPrint's identity"),tr("Illustrer le procédé flexographique","Illustrate the flexographic process"),tr("Exprimer la rotation et la continuité","Express rotation and continuity"),tr("Valoriser la précision et la qualité","Highlight precision and quality"),tr("Affirmer modernité et professionnalisme","Assert modernity and professionalism")].map(t=>`<span>${t}</span>`).join("")}</div>`)}
 ${gSec("02",tr("Le logo","The logo"),tr("Les initiales F et P réunies autour de la bobine d'impression : rotation, continuité et précision.","The initials F and P around the printing reel: rotation, continuity and precision."),`
  <div style="margin-bottom:18px">${gStage(I+"concept2.webp",{cap:tr("<b>Concept</b> — lettre F + lettre P + symbole de la bobine","<b>Concept</b> — letter F + letter P + reel symbol"),cls:"white",style:"padding:clamp(24px,5vw,70px)"})}</div>
  <div class="logos2">
   <div class="logo-tile plain main zoomable" data-z="${I}logo.png|${tr("Version principale","Main version")}"><img src="${I}logo.png" alt="FlexoPrint"><span class="tag">${tr("Version principale","Main version")}</span></div>
   <div class="logo-tile plain neg raw zoomable" style="--nb:#011589" data-z="${I}logo-neg.webp|${tr("Version négative","Reversed version")}"><img src="${I}logo-neg.webp" alt="FlexoPrint"><span class="tag">${tr("Version négative · fond Bleu Reflex","Reversed version · Reflex Blue")}</span></div>
  </div>`)}
 ${gSec("03",tr("Couleurs & typographie","Colours & typography"),"",`
  <div class="circles">${circ("#2A307D","Bleu Reflex",[["Pantone","Reflex Blue C"],[tr("CMJN","CMYK"),"66 · 62 · 0 · 51"],[tr("RVB","RGB"),"42 · 48 · 125"],["Web","#2A307D"]],tr("Fiabilité, stabilité, professionnalisme","Reliability, stability, professionalism"))}${circ("#F4C400",tr("Jaune","Yellow"),[["Pantone","116 C"],[tr("CMJN","CMYK"),"0 · 20 · 100 · 4"],[tr("RVB","RGB"),"244 · 196 · 0"],["Web","#F4C400"]],tr("Énergie, optimisme, créativité","Energy, optimism, creativity"))}</div>
  <div class="types" style="margin-top:28px"><div><small>${tr("Police du logo","Logo typeface")}</small><b style="font-family:Alexandria,sans-serif;font-weight:600">Alexandria</b><span>Regular</span><p style="font-family:Alexandria,sans-serif">Aa Bb Cc 123</p></div><div><small>${tr("Police de texte","Text typeface")}</small><b style="font-family:'Futura LT',Futura,Jost,sans-serif">Futura LT</b><span>Regular · Bold</span><p style="font-family:'Futura LT',Futura,Jost,sans-serif">Aa Bb Cc 123</p></div><div><small>${tr("Signature mail","Email signature")}</small><b>Berlin Sans FB</b><span>Regular</span><p>Aa Bb Cc 123</p></div></div>`)}
 ${gSec("04","Mockup",tr("Papeterie, signalétique et présence digitale.","Stationery, signage and digital presence."),`
  <div class="bento2">
   <div class="w6"><div class="photo2" data-z="${I}stat.webp|${tr("Papeterie","Stationery")}"><img src="${I}stat.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Papeterie","Stationery")}</b> — ${tr("en-tête, enveloppe, carte de visite, mug","letterhead, envelope, business card, mug")}</span></div>
   <div><div class="cardmock"><img class="cb" src="${I}carte-back.webp" alt="" loading="lazy" data-z="${I}carte-back.webp|${tr("Carte de visite — verso","Business card — back")}"><img class="cf" src="${I}carte-front.webp" alt="" loading="lazy" data-z="${I}carte-front.webp|${tr("Carte de visite — recto","Business card — front")}"></div><span class="cap"><b>${tr("Carte de visite","Business card")}</b> — ${tr("recto / verso","front / back")}</span></div>
   <div><div class="rumock white" data-z="${I}ru.webp|Roll-up"><img src="${I}ru.webp" alt="Roll-up" loading="lazy"></div><span class="cap"><b>Roll-up</b></span></div>
   <div class="w6"><div class="photo2" data-z="${I}web.webp|${tr("Site web — homepage B2B","Website — B2B homepage")}"><img src="${I}web.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Site web","Website")}</b> — ${tr("homepage B2B, version desktop et mobile","B2B homepage, desktop and mobile")}</span></div>
   <div class="w6"><div class="soc fxs"><button class="winx l" type="button" data-z="${I}li.webp|LinkedIn"><span class="bar"><i></i><i></i><i></i><u>linkedin.com/company/flexoprint</u></span><span class="vp"><img src="${I}li.webp" alt="LinkedIn" loading="lazy"></span></button><button class="winx r" type="button" data-z="${I}fb.webp|Facebook"><span class="bar"><i></i><i></i><i></i><u>facebook.com/flexoprint</u></span><span class="vp"><img src="${I}fb.webp" alt="Facebook" loading="lazy"></span></button><button class="winx c" type="button" data-z="${I}yt.webp|YouTube"><span class="bar"><i></i><i></i><i></i><u>youtube.com/@flexoprint</u></span><span class="vp"><img src="${I}yt.webp" alt="YouTube" loading="lazy"></span></button></div><span class="cap"><b>${tr("Habillage des réseaux","Social media branding")}</b> — YouTube · LinkedIn · Facebook</span></div>
  </div>`)}
 ${nextCards(p)}</div></div>`;
 gBind();
}

/* ---------- FUNKIZ ---------- */
function renderFK(p){
 const I="img/fk/";
 const post=(f,l)=>`<div class="post" data-z="${I}${f}.webp|${esc(l)}"><div class="ph"><span class="av">F</span><span><b>funkiz.tn</b><small>${tr("Sponsorisé","Sponsored")}</small></span></div><img src="${I}${f}.webp" alt="${esc(l)}" loading="lazy"><div class="pf"><span>♡</span><span>💬</span><span>↗</span><span>🔖</span></div></div>`;
 $("#case").innerHTML=`<div class="ve gx fk style="--pc:#3A2BD8">${gTop({
  chips:[tr("Design graphique","Graphic design"),tr("Campagne 360°","360° campaign"),tr("Projet de fin d'études","Graduation project"),"2025"],
  title:`Funkiz <em style="color:#3A2BD8">Yes Please !</em>`,
  sum:tr("Une campagne 360° pour une marque de chips au ton street et graffiti : packaging, réseaux sociaux, affichage, roll-ups, stand et habillage de véhicule.","A 360° campaign for a street- and graffiti-styled crisps brand: packaging, social media, billboards, roll-ups, in-store stand and vehicle wrap."),
  meta:[[tr("Contexte","Context"),tr("Projet de fin d'études — réalisé en stage","Graduation project — completed during an internship")],[tr("Rôle","Role"),tr("Direction artistique & création","Art direction & design")],[tr("Supports","Media"),tr("Social, affichage, PLV, véhicule","Social, OOH, POS, vehicle")],[tr("Outils","Tools"),"Photoshop · Illustrator"]],
  hero:`<div class="stage photo reveal" data-z="${I}affichage.webp|Funkiz — Yes Please" style="border-radius:30px;cursor:zoom-in"><img src="${I}affichage.webp" alt="Funkiz"></div>`})}
 <div class="wrap">
 ${gSec("01",tr("Le concept","The concept"),"",`<p class="ve-lead">${tr("Funkiz parle la langue de la rue : <em>graffitis, tags et couleurs néon</em>. Trois saveurs — Fromage, Paprika et Sel — portées par trois figures urbaines : le skateur, le danseur et le basketteur. Une signature : <em>Yes Please !</em>","Funkiz speaks the language of the street: <em>graffiti, tags and neon colours</em>. Three flavours — Cheese, Paprika and Salt — carried by three urban figures: the skater, the dancer and the basketball player. One signature: <em>Yes Please!</em>")}</p>
  <div class="iter">${["Packaging",tr("Réseaux sociaux","Social media"),tr("Affichage","Billboards"),"Roll-ups",tr("Stand en magasin","In-store stand"),tr("Habillage camion","Truck wrap")].map(t=>`<span>${t}</span>`).join("")}</div>`)}
 ${gSec("02",tr("Réseaux sociaux","Social media"),tr("Une série Ramadan en dialecte tunisien, pensée pour Instagram et Facebook.","A Ramadan series in Tunisian dialect, designed for Instagram and Facebook."),`<div class="posts">${post("post-ramadan",tr("Après le ftour","After iftar"))}${post("post-joker",tr("La carte gagnante","The winning card"))}${post("post-uno",tr("Soirées de Ramadan","Ramadan nights"))}</div>`)}
 ${gSec("03",tr("Affichage & PLV","Out-of-home & POS"),tr("Le même univers, décliné dans la rue, en magasin et sur la route.","One universe, rolled out in the street, in store and on the road."),`<div class="bento2">
   <div class="w6"><div class="fstage white tight" data-z="${I}metro.webp|${tr("Affichage métro","Metro posters")}"><img src="${I}metro.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Affiche — affichage métro","Poster — metro display")}</b></span></div>
   <div class="w6"><div class="fstage white" style="padding:clamp(16px,3vw,40px)" data-z="${I}rollups.webp|${tr("Roll-ups — une accroche par saveur","Roll-ups — one hook per flavour")}"><img src="${I}rollups.webp" alt="" loading="lazy" style="box-shadow:none;border-radius:0"></div><span class="cap"><b>Roll-ups</b> — ${tr("une accroche par saveur : Fromage, Paprika et Sel","one hook per flavour: Cheese, Paprika and Salt")}</span></div>
   <div class="w6"><div class="fstage white tight" data-z="${I}stand.webp|${tr("Stand en grande surface","Supermarket stand")}"><img src="${I}stand.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Stand en grande surface","Supermarket stand")}</b></span></div>
   <div class="w6"><div class="street" data-z="${I}camion-c.webp|${tr("Habillage camion","Truck wrap")}"><span class="bld"></span><span class="road"></span><img src="${I}camion-s.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Habillage camion","Truck wrap")}</b> — ${tr("en situation dans la rue","on the street")}</span></div>
  </div>`)}
 ${nextCards(p)}</div></div>`;
 gBind();
}

/* ---------- LA GAZELLE ---------- */
function renderGZ(p){
 const I="img/gz/";
 $("#case").innerHTML=`<div class="ve gx gz style="--pc:#B8862B">${gTop({
  chips:[tr("Design graphique","Graphic design"),tr("Campagne publicitaire","Ad campaign"),tr("Projet de fin d'études","Graduation project"),"2025"],
  title:`La Gazelle <em style="color:#B8862B">Chamia</em>`,
  sum:tr("Une campagne Ramadan pour la halwa chamia de La Gazelle (marque depuis 1938) autour d'une accroche chaleureuse : « ملا شامية يا غزالة ».","A Ramadan campaign for La Gazelle's halwa chamia (a brand since 1938) built around a warm tagline: “ملا شامية يا غزالة”."),
  meta:[[tr("Marque","Brand"),"La Gazelle · الغزالة"],[tr("Rôle","Role"),tr("Création des visuels de campagne","Campaign visuals")],[tr("Contexte","Context"),tr("Projet de fin d'études — réalisé en stage","Graduation project — completed during an internship")],[tr("Outils","Tools"),"Photoshop · Illustrator"]],
  hero:`<div class="stage photo reveal" data-z="${I}billboard.webp|${tr("Affichage grand format","Large-format billboard")}" style="border-radius:30px;cursor:zoom-in"><img src="${I}billboard.webp" alt="La Gazelle"></div>`})}
 <div class="wrap">
 ${gSec("01",tr("Le concept","The concept"),"",`<p class="ve-lead">${tr("Une marque patrimoniale, une émotion de partage : la campagne joue sur <em>la complicité familiale du Ramadan</em>, avec des tons chauds caramel et or, le croissant de lune et l'emblème de la gazelle.","A heritage brand, a feeling of sharing: the campaign plays on <em>the family warmth of Ramadan</em>, with warm caramel and gold tones, the crescent moon and the gazelle emblem.")}</p>`)}
 ${gSec("02",tr("Déclinaisons","Roll-out"),tr("La promesse de la campagne portée sur la route et en point de vente.","The campaign promise carried on the road and in store."),`<div class="bento2">
   <div class="w6"><div class="street" data-z="${I}camion-c.webp|${tr("Habillage camion","Truck wrap")}"><span class="bld"></span><span class="road"></span><img src="${I}camion-s.webp" alt="" loading="lazy"></div><span class="cap"><b>${tr("Habillage camion","Truck wrap")}</b> — ${tr("l'accroche en grand sur les deux faces","the tagline in large type on both sides")}</span></div>
   <div class="w6"><div class="fstage gzc fill" style="--ar:16/10" data-z="${I}stand.webp|${tr("Stand de dégustation","Tasting stand")}"><img src="${I}stand.webp" alt="" loading="lazy" style="object-fit:contain"></div><span class="cap"><b>${tr("Stand de dégustation","Tasting stand")}</b> — ${tr("amandes et pistaches en motif","almond & pistachio pattern")}</span></div>
  </div>`)}
 ${nextCards(p)}</div></div>`;
 gBind();
}

/* ---------- BANDE DESSINÉE ---------- */
const BD_N=14;
function renderBD(p){
 const I="img/bd/",S="docs/bdp/";
 const slide=(n,cap)=>`<button class="slidec" type="button" data-z="${S}p-${String(n).padStart(2,"0")}.webp|${esc(cap)}"><img src="${S}p-${String(n).padStart(2,"0")}.webp" alt="${esc(cap)}" loading="lazy"><span>${cap}</span></button>`;
 const fs=(cls,src,cap,extra="")=>`<div class="fstage ${cls}" ${extra} data-z="${src}|${esc(cap)}"><img src="${src}" alt="${esc(cap)}" loading="lazy"></div>`;
 const info=(k,t)=>`<div class="icard"><small>${k}</small><p>${t}</p></div>`;
 $("#case").innerHTML=`<div class="ve gx bdx style="--pc:#C2551F">${gTop({
  chips:[tr("Illustration","Illustration"),tr("Bande dessinée","Comic book"),tr("Édition","Publishing"),"2024"],
  title:`${tr("L'histoire","The story")} <em style="color:#C2551F;font-family:Lalezar,Alexandria,sans-serif;font-style:normal;font-weight:400">التفاح اللي يفوح</em>`,
  sum:tr("Une bande dessinée illustrée qui revisite un conte d'Abdelaziz Laroui sous forme d'histoire humoristique et moderne, en dialecte tunisien — de la recherche à la campagne de lancement.","An illustrated comic book retelling a tale by Abdelaziz Laroui as a modern, humorous story in Tunisian dialect — from research to launch campaign."),
  meta:[[tr("Contexte","Context"),tr("Méthodologie de projet — Conception éditoriale, ESSTED · 2023-2024","Project methodology — Editorial design, ESSTED · 2023-2024")],[tr("Rôle","Role"),tr("Direction artistique, illustration, mise en page, lettrage","Art direction, illustration, layout, lettering")],[tr("Encadrement","Supervisors"),"Mme Nawel Khaddouma · Mme Hajer Machta"],[tr("Outils","Tools"),"Illustrator · Photoshop"]],
  doc:["bd",tr("Lire le livre en entier","Read the full book"),tr("Lecture en ligne · 14 pages","Read online · 14 pages")],
  doc2:["bdp",tr("Présentation complète du projet","Full project presentation"),tr("Lire en ligne · 42 pages","Read online · 42 pages")],
  hero:`<div class="bookstage reveal"><div class="book3d" data-z="${I}cover-page.webp|${tr("Couverture","Cover")}"><div class="back"></div><div class="pages"></div><div class="front"><img src="${I}cover-page.webp" alt="Couverture"></div><div class="shadow"></div></div><div class="bt"><small>${tr("Bande dessinée · Dar El Janoub","Comic book · Dar El Janoub")}</small><h2 dir="rtl">التفاح اللي يفوح</h2><p>${tr("Un conte populaire tunisien raconté en planches colorées : le sultan, le vizir, la pomme parfumée… et une bonne dose d'humour.","A Tunisian folk tale told in colourful plates: the sultan, the vizier, the fragrant apple… and plenty of humour.")}</p></div></div>`})}
 <div class="wrap">
 ${gSec("01",tr("Le projet","The project"),"",`<blockquote class="bdq">${tr("Comment retranscrire un récit en images tout en offrant une nouvelle expérience de lecture ?","How can a story be retold in images while offering a new reading experience?")}</blockquote>
  <p class="ve-lead">${tr("Adapter <em>un conte d'Abdelaziz Laroui</em> en bande dessinée : personnages costumés, décors inspirés des palais et des zelliges tunisiens, bulles en dialecte pour un ton proche et drôle — puis imaginer toute la communication qui accompagne la sortie du livre.","Adapting <em>a tale by Abdelaziz Laroui</em> into a comic: costumed characters, settings inspired by Tunisian palaces and zellige tiles, speech bubbles in dialect for a close, funny tone — then designing the whole communication around the book's release.")}</p>
  <div class="iter">${[tr("Recherche & immersion","Research & immersion"),tr("Brief créatif","Creative brief"),tr("Personnages & décors","Characters & settings"),tr("Maquette finale","Final layout"),tr("Plan de communication","Communication plan")].map(t=>`<span>${t}</span>`).join("")}</div>`)}
 ${gSec("02",tr("Recherche & immersion","Research & immersion"),tr("Choisir l'histoire : quatre contes comparés, un seul resté inexploité.","Choosing the story: four tales compared, only one left unexplored."),`<div class="slides2">${slide(5,tr("Mind map — 4 histoires comparées","Mind map — 4 stories compared"))}${slide(7,tr("Étude de l'existant","Existing work"))}</div><div class="icards" style="grid-template-columns:1fr"><div class="icard" style="display:grid;align-content:center"><small>${tr("Mind map","Mind map")}</small><p>${tr("Quatre contes populaires ont été comparés — notoriété, style graphique existant, potentiel d'adaptation — avant de retenir <b>التفاح اللي يفوح</b>.","Four folk tales were compared — popularity, existing graphic style, adaptation potential — before choosing <b>التفاح اللي يفوح</b>.")}</p></div></div>
  <div class="icards">${info(tr("Les contes comparés","Tales compared"),tr("Cendrillon, Pinocchio, Le Petit Chaperon rouge et La Petite Sirène : très consommés, sans style graphique propre ou déjà bien exploités.","Cinderella, Pinocchio, Little Red Riding Hood and The Little Mermaid: heavily consumed, with no distinct graphic style or already well exploited."))}${info(tr("Le choix","The choice"),tr("<b>التفاح اللي يفوح</b> : une histoire restée inexploitée, riche en idées et en possibilités graphiques.","<b>التفاح اللي يفوح</b>: an unexploited story, rich in ideas and graphic possibilities."))}${info(tr("L'existant","Existing versions"),tr("Seulement deux versions : une version audio et une pièce de théâtre. Aucun concurrent en bande dessinée.","Only two versions: an audio version and a stage play. No comic-book competitor."))}</div>`)}
 ${gSec("03",tr("Définition & idéation","Definition & ideation"),tr("Le récit devient bande dessinée : lecteurs, ton, format et valeur ajoutée.","The tale becomes a comic: readers, tone, format and added value."),`<div class="icards four">${info(tr("Pourquoi","Why"),tr("Revisiter le conte avec des illustrations modernes, sensibiliser aux enjeux sociaux et inspirer la réflexion : amitié, tolérance, honnêteté.","Retell the tale with modern illustrations, raise awareness of social issues and inspire reflection: friendship, tolerance, honesty."))}${info(tr("Pour qui","For whom"),tr("Cœur de cible : pré-adolescents amateurs de BD (11-17 ans). Puis amateurs de récits traditionnels et lecteurs occasionnels.","Core target: pre-teen comic readers (11–17). Then fans of traditional tales and occasional readers."))}${info(tr("Où & quand","Where & when"),tr("Un village tunisien, sans époque précise : un récit intemporel, adapté à tous les âges.","A Tunisian village, no specific era: a timeless tale for all ages."))}${info(tr("Comment","How"),tr("Arabe simple et accessible. Format A4, 14 pages, couverture cartonnée. Ton chaleureux, ludique et familial — éditeur : Dar El Janoub.","Simple, accessible Arabic. A4 format, 14 pages, hardcover. Warm, playful, family-friendly tone — publisher: Dar El Janoub."))}</div>
  <div style="margin-top:18px;display:flex;justify-content:center"><div style="width:min(100%,760px)">${slide(10,tr("Brief créatif","Creative brief"))}</div></div>
  <div class="icards">${info(tr("Valeur ajoutée","Added value"),tr("Un <b>jeu de cartes</b> accompagne la BD : cartes quiz sur l'histoire et défis créatifs pour répondre aux questions et réinventer la fin.","A <b>card game</b> comes with the comic: quiz cards about the story and creative challenges to answer questions and reinvent the ending."))}${info(tr("Les personnages","Characters"),tr("Le sultan, le vieux (الشايب) et le vizir, dans un cadre villageois.","The sultan, the old man (الشايب) and the vizier, in a village setting."))}${info(tr("Découpage technique","Shot breakdown"),tr("Chaque scène est découpée en plans : échelle, axe et mouvement de caméra, action, son.","Every scene is broken into shots: scale, camera angle and movement, action, sound."))}</div>`)}
 ${gSec("04",tr("Création","Creation"),tr("Ambiance, maquette, personnages : la fabrique de l'univers.","Mood, layout, characters: building the universe."),`<div class="slides2">${slide(14,tr("Découpage technique","Shot breakdown"))}${slide(15,tr("Mood-board","Mood board"))}${slide(16,tr("Pré-maquette A4","A4 rough layout"))}${slide(17,tr("Création des personnages","Character design"))}</div>
  <div class="swatches2">${[["#254AA2",tr("Bleu","Blue")],["#BA1818",tr("Rouge","Red")],["#FFC800",tr("Jaune","Yellow")],["#138C42",tr("Vert","Green")]].map(([c,n])=>`<button type="button" style="--c:${c}" data-copy-hex="${c}"><i></i><b>${n}</b><small>${c}</small></button>`).join("")}</div>`)}
 ${gSec("05",tr("Feuilleter le livre","Flip through the book"),tr("Lecture de droite à gauche, comme un livre en arabe. Agrandissez une page, puis cliquez à gauche pour avancer ou à droite pour revenir.","Read right to left, like an Arabic book. Enlarge a page, then click left to go forward or right to go back."),`<div class="flip" id="bdFlip"><div class="spread" id="bdSpread"></div><div class="fctl"><button id="bdNext" aria-label="${tr("Page suivante","Next page")}">←</button><span id="bdInfo"></span><button id="bdPrev" aria-label="${tr("Page précédente","Previous page")}">→</button></div></div>`)}
 ${gSec("06",tr("Communication & lancement","Communication & launch"),tr("Stratégie, planning des réseaux et supports : une campagne pour faire connaître la BD.","Strategy, social planning and media: a campaign to make the comic known."),`<div class="slides2">${slide(34,tr("Stratégie de communication","Communication strategy"))}${slide(35,tr("Media planning — 1ʳᵉ semaine de mai 2024","Media planning — first week of May 2024"))}</div>
  <h3 style="margin:22px 0 4px;font-size:clamp(18px,2vw,24px);letter-spacing:-.02em">${tr("Réseaux sociaux","Social media")}</h3>
  <div class="posts4">${[["m-fb1","Facebook",tr("Post de lancement — annonce de la sortie de la BD","Launch post — announcing the comic's release")],["m-ig1","Instagram",tr("Post de lancement — la couverture en avant","Launch post — the cover up front")],["m-fb2",tr("Facebook — teaser","Facebook — teaser"),tr("Extrait d'une planche pour susciter la curiosité","A panel excerpt to spark curiosity")],["m-ig2",tr("Instagram — teaser","Instagram — teaser"),tr("Extrait d'une planche pour susciter la curiosité","A panel excerpt to spark curiosity")]].map(([f,c,d])=>`<div><button type="button" data-z="${I}${f}.webp|${c}"><img src="${I}${f}.webp" alt="${c}" loading="lazy"></button><span class="cap"><b>${c}</b> — ${d}</span></div>`).join("")}</div>
  <div class="bento2" style="margin-top:18px">
   <div class="w6">${fs("white tight",I+"m-cartes.webp",tr("Jeu de cartes","Card game"),'style="aspect-ratio:16/8"')}<span class="cap"><b>${tr("Jeu de cartes","Card game")}</b> — ${tr("quiz et défis créatifs","quiz and creative challenges")}</span></div>
  </div>`)}
 ${gSec("07",tr("Documents","Documents"),"",`<div class="docs"><button class="docbtn" type="button" data-doc="bdp"><span class="di">PDF</span><span><b>${tr("Présentation complète du projet","Full project presentation")}</b><small>${tr("De la recherche à la communication · 42 pages","From research to communication · 42 pages")}</small></span><i>↗</i></button><button class="docbtn" type="button" data-doc="bd"><span class="di">PDF</span><span><b>${tr("Le livre en entier","The full book")}</b><small>${tr("14 pages","14 pages")}</small></span><i>↗</i></button></div>`)}
 ${nextCards(p)}</div></div>`;
 gBind();bdFlip();$(".book3d").onclick=()=>openLB(bdItems(),0);
}
const bdItems=()=>Array.from({length:BD_N},(_,i)=>({svg:`<img src="docs/bd/p-${String(i+1).padStart(2,"0")}.webp" alt="">`,cap:`${i?tr("Page","Page")+" "+i:tr("Couverture","Cover")} — ${tr("clic à gauche : page suivante · clic à droite : page précédente","click left: next page · click right: previous page")}`,free:true,flip:true}));
function bdFlip(){
 const S=$("#bdSpread");const src=i=>`docs/bd/p-${String(i).padStart(2,"0")}.webp`;
 // vues : [1] puis [2,3] [4,5] ... [14,15]  (droite = page impaire en lecture arabe)
 const views=[[1,null]];for(let i=2;i<=BD_N;i+=2)views.push([i,i+1<=BD_N?i+1:null]);
 let v=0,busy=false;
 const pg=(n,side)=>n?`<div class="pg ${side}" data-z="${src(n)}|${tr("Page","Page")} ${n}"><img src="${src(n)}" alt="${n}" loading="lazy"></div>`:`<div class="pg ${side} empty"></div>`;
 const draw=()=>{const [r,l]=views[v];S.innerHTML=pg(r,"r")+(v===0?`<div class="pg l empty"></div>`:pg(l,"l"));
  $("#bdInfo").textContent=v===0?tr("Couverture","Cover"):`${tr("Pages","Pages")} ${r}–${l||r} / ${BD_N}`;$("#bdPrev").disabled=v===0;$("#bdNext").disabled=v===views.length-1;
  $$("#bdSpread [data-z]").forEach(el=>el.onclick=()=>openLB(bdItems(),+el.dataset.z.split(" ").pop()-1));bindCursor()};
 const go=d=>{if(busy)return;const nv=v+d;if(nv<0||nv>=views.length)return;busy=true;
  const cur=views[v],nx=views[nv];
  if(v===0||nv===0||matchMedia("(prefers-reduced-motion:reduce)").matches){S.style.transition="opacity .3s";S.style.opacity=0;setTimeout(()=>{v=nv;draw();S.style.opacity=1;busy=false},300);return}
  const t=document.createElement("div");t.className="turn";
  if(d>0){ // la page de gauche se tourne vers la droite (lecture arabe)
   t.style.left="0";t.style.transformOrigin="right center";
   t.innerHTML=`<div class="f"><img src="${src(cur[1])}"></div><div class="b"><img src="${src(nx[0])}"></div>`;
   S.appendChild(t);const lp=S.querySelector(".pg.l");if(lp)lp.innerHTML=nx[1]?`<img src="${src(nx[1])}">`:"";
   requestAnimationFrame(()=>requestAnimationFrame(()=>t.style.transform="rotateY(180deg)"));
  }else{ // la page de droite revient vers la gauche
   t.style.right="0";t.style.transformOrigin="left center";
   t.innerHTML=`<div class="f"><img src="${src(cur[0])}"></div><div class="b"><img src="${src(nx[1])}"></div>`;
   S.appendChild(t);const rp=S.querySelector(".pg.r");if(rp)rp.innerHTML=`<img src="${src(nx[0])}">`;
   requestAnimationFrame(()=>requestAnimationFrame(()=>t.style.transform="rotateY(-180deg)"));}
  setTimeout(()=>{v=nv;draw();busy=false},820)};
 $("#bdNext").onclick=()=>go(1);$("#bdPrev").onclick=()=>go(-1);
 let tx=null;S.addEventListener("touchstart",e=>tx=e.touches[0].clientX,{passive:true});S.addEventListener("touchend",e=>{if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40)go(dx>0?1:-1);tx=null});
 draw();
}

/* ---------- ENERGY FRUITS (motion) ---------- */
function renderEF(p){
 const I="img/ef/";
 $("#case").innerHTML=`<div class="ve gx ef style="--pc:#5AA02C">${gTop({
  chips:["Motion design",tr("Spot publicitaire","Commercial"),tr("Animation 2D","2D animation")],
  title:`Trail <em style="color:#5AA02C">#Energy Fruits</em>`,
  sum:tr("Un spot publicitaire animé pour la campagne Energy Fruits : un jeu-concours qui invite à quitter le quotidien pressé pour courir en pleine nature.","An animated commercial for the Energy Fruits campaign: a contest inviting people to leave their hectic routine and run in the great outdoors."),
  meta:[[tr("Format","Format"),tr("Spot publicitaire · 27 s","Commercial · 27 s")],[tr("Rôle","Role"),tr("Illustration & animation","Illustration & animation")],[tr("Campagne","Campaign"),tr("Jeu Energy Fruits","Energy Fruits contest")],[tr("Outils","Tools"),"After Effects · Adobe Animate"]],
  hero:`<div class="reel reveal"><video id="efVid" src="${I}spot.mp4" poster="${I}frame2.webp" playsinline preload="metadata"></video><div class="rbar"><button id="efPlay">▶ ${tr("Lecture","Play")}</button><button id="efMute">🔇 ${tr("Son","Sound")}</button><div class="tl" id="efTl"><i id="efBar"></i></div><time id="efTime">0:00 / 0:27</time><button id="efFull">⤢</button></div></div>`})}
 <div class="wrap">
 ${gSec("01",tr("L'histoire","The story"),"",`<p class="ve-lead">${tr("Un employé quitte son bureau, traverse la ville et les embouteillages… puis la route se change en sentier forestier. <em>Le trail commence</em> et le logo #Energy Fruits se dévoile.","An office worker leaves the building, crosses the city and its traffic… then the road turns into a forest trail. <em>The trail begins</em> and the #Energy Fruits logo is revealed.")}</p>`)}
 ${gSec("02",tr("Outils","Tools"),"",`<div class="toolchips"><span><img src="img/tools/ae.svg" alt="">After Effects</span><span><i class="anim">An</i>Adobe Animate</span></div>
  <div class="bento2" style="margin-top:22px"><div>${gTile(I+"frame2.webp",tr("La ville","The city"),"16/9")}</div><div>${gTile(I+"poster.webp",tr("Révélation du logo","Logo reveal"),"16/9")}</div></div>`)}
 ${gSec("03",tr("La campagne complète","The full campaign"),"",`<p class="ve-lead">${tr("Ce spot est l'aboutissement d'une campagne 360° pour la marque STIL : analyse, concept, identité, affiches, application et mises en situation.","This commercial is the outcome of a 360° campaign for the brand STIL: analysis, concept, identity, posters, app and in-situ mockups.")}</p><a class="btn" href="#projet-energy-fruits-360">${tr("Voir la campagne 360° — de A à Z","See the 360° campaign — A to Z")} →</a>`)}
 ${nextCards(p)}</div></div>`;
 gBind();
 const v=$("#efVid"),fmt=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
 const upd=()=>{$("#efBar").style.width=(v.currentTime/(v.duration||27)*100)+"%";$("#efTime").textContent=`${fmt(v.currentTime)} / ${fmt(v.duration||27)}`};
 v.addEventListener("timeupdate",upd);v.addEventListener("ended",()=>$("#efPlay").textContent="▶ "+tr("Lecture","Play"));
 $("#efPlay").onclick=()=>{if(v.paused){v.play().catch(()=>{});$("#efPlay").textContent="❚❚ Pause"}else{v.pause();$("#efPlay").textContent="▶ "+tr("Lecture","Play")}};
 $("#efMute").onclick=()=>{v.muted=!v.muted;$("#efMute").textContent=(v.muted?"🔇 ":"🔊 ")+tr("Son","Sound")};v.muted=true;
 $("#efTl").onclick=e=>{const r=e.currentTarget.getBoundingClientRect();v.currentTime=(e.clientX-r.left)/r.width*(v.duration||27)};
 $("#efFull").onclick=()=>{const f=v.requestFullscreen||v.webkitRequestFullscreen||v.webkitEnterFullscreen;if(f)Promise.resolve(f.call(v)).catch(()=>{})};
 v.onclick=()=>$("#efPlay").click();
}

function renderEC(p){
 const I="img/ec/",S="docs/ec/";
 const pg=n=>S+"p-"+String(n).padStart(2,"0")+".webp";
 const slide=(n,cap)=>`<button class="slidec" type="button" data-z="${pg(n)}|${esc(cap)}"><img src="${pg(n)}" alt="${esc(cap)}" loading="lazy"><span>${cap}</span></button>`;
 const fs=(cls,f,cap,ar,mw)=>`<div class="fstage ${cls}" data-z="${I}${f}|${esc(cap)}" style="${ar?"aspect-ratio:"+ar+";":""}${mw?"--mw:"+mw+";":""}"><img src="${I}${f}" alt="${esc(cap)}" loading="lazy"></div>`;
 const info=(k,t)=>`<div class="icard"><small>${k}</small><p>${t}</p></div>`;
 $("#case").innerHTML=`<div class="ve gx ecx style="--pc:#5AA02C">${gTop({
  chips:[tr("Campagne 360°","360° campaign"),tr("Brand activation","Brand activation"),tr("Identité visuelle","Visual identity"),"2025"],
  title:`${tr("Campagne 360°","360° campaign")} <em style="color:#5AA02C">Trail #Energy Fruits</em>`,
  sum:tr("Une campagne promotionnelle complète pour la marque tunisienne STIL : un événement de marque en pleine nature, de l'analyse du marché au logo, à l'affiche, au spot, à l'application et aux supports sur le terrain.","A complete promotional campaign for the Tunisian brand STIL: a brand event in the great outdoors, from market analysis to logo, poster, commercial, app and on-site materials."),
  meta:[[tr("Marque","Brand"),"STIL — #Energy Fruits"],[tr("Contexte","Context"),tr("Projet de 3e année, ESSTED · 2024-2025","3rd-year project, ESSTED · 2024-2025")],[tr("Rôle","Role"),tr("Stratégie, direction artistique, identité, motion","Strategy, art direction, identity, motion")],[tr("Encadrant","Supervisor"),"M. Seif Mestiri"],[tr("Outils","Tools"),"Illustrator · Photoshop · After Effects · Adobe Animate"]],
  doc:["ec",tr("Présentation complète du projet","Full project presentation"),tr("Lire en ligne · 40 pages","Read online · 40 pages")],
  hero:`<div class="reveal" style="margin-top:34px">${fs("flat",'cover.webp',tr("Campagne 360° STIL","STIL 360° campaign"),"16/10")}</div>`})}
 <div class="wrap">
 ${gSec("01",tr("Le projet","The project"),"",`<p class="bdq" style="border-color:#5AA02C">${tr("Comment renforcer la notoriété du jus #Energy Fruits en l'associant à un mode de vie actif et sain ?","How can we boost the awareness of the #Energy Fruits juice by tying it to an active, healthy lifestyle?")}</p>
  <p class="ve-lead">${tr("STIL est une marque tunisienne de boissons naturelles, sans conservateurs. Le projet : concevoir une <em>stratégie de brand activation</em> — un événement de marque — qui fait vivre l'énergie du jus plutôt que de simplement la raconter.","STIL is a Tunisian brand of natural, preservative-free drinks. The brief: design a <em>brand activation strategy</em> — a brand event — that lets people experience the juice's energy instead of just telling it.")}</p>
  <div class="icards">${info(tr("Identité","Identity"),tr("Valeurs : énergie, fraîcheur, naturalité. Une marque tunisienne de qualité, sans conservateurs.","Values: energy, freshness, naturalness. A quality Tunisian brand, no preservatives."))}${info(tr("Objectifs","Goals"),tr("Accroître la notoriété, valoriser les propriétés énergisantes, créer un lien émotionnel durable.","Raise awareness, highlight the energising qualities, build a lasting emotional bond."))}${info(tr("Message","Message"),tr("« Revitalisez votre énergie avec #Energy Fruits, naturellement sans conservateurs. »","“Revitalise your energy with #Energy Fruits, naturally preservative-free.”"))}</div>`)}
 ${gSec("02",tr("Analyse & benchmark","Analysis & benchmark"),tr("Enquête, observation et étude de deux campagnes concurrentes.","Survey, observation and a study of two competing campaigns."),`<div class="slides2">${slide(8,tr("Danao — « Danao fi dabbouza »","Danao — “Danao fi dabbouza”"))}${slide(13,tr("Tropicana — Pulp Prenup","Tropicana — Pulp Prenup"))}</div>
  <div class="icards">${info(tr("Constat","Finding"),tr("Enquête et observations : notoriété limitée du jus auprès des jeunes soucieux de leur santé et de leur énergie.","Survey and observation: limited awareness of the juice among young, health- and energy-conscious people."))}${info(tr("Concurrent national — Danao","National competitor — Danao"),tr("Ton ludique et jeune, nouveau format bouteille, spot TV / YouTube, réseaux et affichage urbain.","Playful, young tone, new bottle format, TV / YouTube spot, social and urban billboards."))}${info(tr("Concurrent international — Tropicana","International competitor — Tropicana"),tr("Humour, visuels frais évoquant la nature, concours en ligne et contenu interactif avec hashtags.","Humour, fresh nature-inspired visuals, online contests and interactive hashtag content."))}</div>`)}
 ${gSec("03",tr("Conceptualisation","Concept"),tr("Brief, cible et concept de l'événement.","Brief, target and event concept."),`<div class="slides2">${slide(17,tr("Brief — qui & quoi","Brief — who & what"))}${slide(18,tr("Brief — pour qui & comment","Brief — for whom & how"))}${slide(19,tr("Personas","Personas"))}</div>
  <div class="icards four" style="margin-top:14px">${info(tr("Événement","Event"),tr("Trail Energy Fruits : une course d'orientation dynamique et immersive en forêt.","Trail Energy Fruits: a dynamic, immersive orienteering race in the forest."))}${info(tr("Cible","Target"),tr("Adultes de 18 à 35 ans, groupes d'amis, familles et amateurs de sport en plein air.","Adults aged 18–35, friend groups, families and outdoor-sport fans."))}${info(tr("Lieu & date","Place & date"),tr("En forêt, au printemps — le 6 avril 2025, forêt d'Aïn Draham.","In the forest, in spring — 6 April 2025, Aïn Draham forest."))}${info(tr("Planning média","Media planning"),tr("Teasing, lancement, événement puis suivi sur les réseaux sociaux.","Teasing, launch, event, then follow-up on social media."))}</div>
  <div class="slides2" style="margin-top:14px">${slide(23,tr("Planche de media planning","Media planning board"))}${slide(25,tr("Choix du concept : énergie → dynamisme","Concept: energy → dynamism"))}</div>`)}
 ${gSec("04",tr("Direction artistique","Art direction"),tr("Moodboard : flat design, nature et énergie.","Moodboard: flat design, nature and energy."),`<div class="slides2">${slide(26,tr("Moodboard","Moodboard"))}<div>${fs("white",'logo.webp',tr("Logo Trail #Energy Fruits","Trail #Energy Fruits logo"),"1/1","520px")}</div></div>
  <div class="swatches2" style="margin-top:14px">${[["#1F6B35",tr("Vert forêt","Forest green")],["#EDE72C",tr("Jaune énergie","Energy yellow")],["#EE8421","Orange"],["#9DD3DA",tr("Bleu ciel","Sky blue")]].map(([c,n])=>`<button type="button" style="--c:${c}" data-copy-hex="${c}"><i></i><b>${n}</b><small>${c}</small></button>`).join("")}</div>`)}
 ${gSec("05",tr("Affiches","Posters"),tr("Affiche statique et version dynamique.","Static poster and dynamic version."),`<div class="ecgrid"><div class="s6">${fs("white pad",'affiche.webp',tr("Affiche statique","Static poster"),"4/5",'')}<span class="cap"><b>${tr("Affiche statique","Static poster")}</b> — ${tr("6 avril 2025, forêt d'Aïn Draham","6 April 2025, Aïn Draham forest")}</span></div><div class="s6"><div class="vidstage port" style="aspect-ratio:4/5"><video src="${I}affiche-anim.mp4" poster="${I}affiche-anim-poster.webp" autoplay muted loop playsinline preload="metadata"></video><span class="vtag">${tr("Animée","Animated")}</span></div><span class="cap"><b>${tr("Affiche dynamique","Dynamic poster")}</b> — ${tr("le visuel se construit élément par élément","the visual builds up element by element")}</span></div></div>`)}
 ${gSec("06",tr("Le spot publicitaire","The commercial"),tr("Du synopsis à l'animation : la suite du projet est en motion design.","From synopsis to animation: the rest of the project lives in motion design."),`<a class="ecspot" href="#projet-energy-fruits"><img src="${I}spot.webp" alt="${tr("Spot Trail #Energy Fruits","Trail #Energy Fruits commercial")}" loading="lazy"><span class="pl">▶</span><span class="lb2"><span><strong style="font-size:clamp(16px,2vw,22px);letter-spacing:-.02em;background:none;padding:0;color:#fff">${tr("Voir le spot animé","Watch the animated commercial")}</strong><br><span>${tr("Projet motion design — After Effects & Adobe Animate","Motion design project — After Effects & Adobe Animate")}</span></span><span>${tr("Ouvrir le projet","Open project")} →</span></span></a>
  <div class="icards" style="margin-top:14px">${info(tr("Synopsis","Synopsis"),tr("Une personne court dans une rue urbaine et, à chaque pas, la ville se transforme en paysage naturel. La course culmine dans une forêt majestueuse où une carte symbolise l'aventure.","A person runs down an urban street and, with every step, the city turns into a natural landscape. The run ends in a majestic forest where a map symbolises adventure."))}${info(tr("Spot radio","Radio spot"),tr("Version audio du spot, portée par le logo animé et le slogan de la campagne.","Audio version of the spot, carried by the animated logo and the campaign slogan."))}${info(tr("Démarche A→Z","A→Z process"),tr("Le projet motion détaille la réalisation du spot : illustration, animation et révélation du logo.","The motion project details how the commercial was made: illustration, animation and logo reveal."))}</div>
  <div style="margin-top:18px"><a class="btn" href="#projet-energy-fruits">${tr("Voir le projet motion design","See the motion design project")} →</a></div>`)}
 ${gSec("07",tr("Réseaux sociaux & application","Social media & app"),tr("Publications Instagram / Facebook et prototype de l'application mobile.","Instagram / Facebook posts and the mobile app prototype."),`<div class="ecgrid" style="justify-content:center"><div class="s6">${fs("white",'social-1.webp',"Instagram","","380px")}<span class="cap"><b>Instagram</b></span></div><div class="s6">${fs("white",'social-2.webp',"Facebook","","380px")}<span class="cap"><b>Facebook</b></span></div></div>
  <div class="fstage white" style="margin-top:14px;height:auto;padding:clamp(28px,4vw,60px);cursor:default"><div class="phone" style="width:min(300px,78vw);cursor:default"><video src="${I}app-proto.mp4" poster="${I}app-proto-poster.webp" autoplay muted loop playsinline preload="metadata" style="aspect-ratio:362/794;object-fit:cover"></video></div></div><span class="cap" style="display:block;font-size:13.5px;color:var(--muted);margin-top:10px"><b style="color:var(--ink)">${tr("Application mobile","Mobile app")}</b> — ${tr("prototype interactif : produits, programme, parcours, météo et inscription","interactive prototype: products, schedule, trail, weather and sign-up")}</span>`)}
 ${gSec("08",tr("Mises en situation","In situ"),tr("Goodies, signalétique forêt et affichage urbain.","Merchandise, forest signage and urban display."),`<div class="ecgrid">
  <div class="s6">${fs("white",'tshirt-1.webp',"T-shirt","","300px")}</div><div class="s6">${fs("white",'tshirt-2.webp',"T-shirt","","300px")}</div>
  <div class="s6">${fs("white tight",'sign-1.webp',tr("Panneau d'orientation","Orientation sign"),"4/3")}</div><div class="s6">${fs("white tight",'sign-2.webp',tr("Balises & sac","Markers & bag"),"4/3")}</div>
  <div class="s4">${fs("white",'busstop.webp',tr("Abribus","Bus shelter"),"","240px")}</div><div class="s4"><div class="vidstage" style="aspect-ratio:1;height:100%"><video src="${I}colonne-anim.mp4" poster="${I}colonne-anim-poster.webp" autoplay muted loop playsinline preload="metadata" style="height:100%;width:100%;object-fit:cover"></video><span class="vtag">${tr("Animé","Animated")}</span></div></div><div class="s4">${fs("white",'cap.webp',tr("Casquette","Cap"),"","")}</div></div>`)}
 ${gSec("09",tr("Document complet","Full document"),"",`<div class="docs"><button class="docbtn" type="button" data-doc="ec"><span class="di">PDF</span><span><b>${tr("Présentation complète — Campagne 360° STIL","Full presentation — STIL 360° campaign")}</b><small>${tr("Lire en ligne · 40 pages","Read online · 40 pages")}</small></span><i>↗</i></button></div>`)}
 ${nextCards(p)}</div></div>`;
 gBind();
}

function renderDsn(){
 const fb='<svg viewBox="0 0 24 24"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.7H7.7v3.3h2.7V22z"/></svg>';
 const ig='<svg viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>';
 const steps=[["01",tr("Démarche","Approach"),tr("Comprendre l'événement, ses invités et l'ambiance voulue à travers un brief détaillé.","Understanding the event, its guests and the atmosphere wanted through a detailed brief.")],["02",tr("Identité","Identity"),tr("Une direction artistique propre à chaque événement : palette, typographies, univers visuel.","An art direction unique to each event: palette, typography, visual universe.")],["03",tr("Création","Creation"),tr("Digital et print.","Digital and print.")],["04",tr("Communication","Communication"),tr("Contenus pour les réseaux sociaux, afin de faire vivre l'événement avant et après le jour J.","Social media content to bring the event to life before and after the big day.")]];
 $("#dsn").innerHTML=`<div class="dhead reveal"><span class="tag">${tr("Mon studio · depuis 2022","My studio · since 2022")}</span><h2>Designette<em>.</em></h2><p>${tr("Mon propre studio de design digital et print, personnalisé pour vos événements.","My own studio for personalised digital and print design, made for your events.")}</p></div>
 <div class="dgrid reveal"><div class="dlogos"><div class="dl a"><img src="img/ds/logo-light.webp" alt="Designette" loading="lazy"><small>${tr("Version claire","Light version")}</small></div><div class="dl b"><img src="img/ds/logo-dark.webp" alt="Designette" loading="lazy"><small>${tr("Version sombre","Dark version")}</small></div></div>
 <div class="dcard"><div><p><b>${tr("Fondatrice · depuis 2022","Founder · since 2022")}</b></p><p style="margin-top:10px">${tr("Designette est né d'une envie d'offrir à chaque événement une identité qui lui ressemble dans les moindres détails. Je gère le projet de bout en bout : brief, direction artistique, production et contenu pour les réseaux sociaux.","Designette was born from the wish to give every event an identity that fits it down to the smallest detail. I run each project end to end: brief, art direction, production and social media content.")}</p></div>
 <div><span class="mono" style="font-size:11.5px;letter-spacing:.1em;color:var(--muted)">${tr("OUTILS","TOOLS")}</span><div class="dtools" style="margin-top:10px"><span>Illustrator</span><span>Photoshop</span><span>Figma</span></div></div>
 <div class="dsoc"><a href="https://www.facebook.com/designelles" target="_blank" rel="noopener">${fb}Facebook</a><a href="https://www.instagram.com/designette.tn/" target="_blank" rel="noopener">${ig}Instagram</a></div></div></div>
 <div class="dsteps reveal">${steps.map(x=>`<div class="ds"><i>${x[0]}</i><b>${x[1]}</b><p>${x[2]}</p></div>`).join("")}</div>`;
}

/* =========================================================
   ROUTEUR
   ========================================================= */
const TABS=["travaux","explorations","experience"];
const TAB_T={travaux:["Travaux","Work"],explorations:["Explorations","Explorations"],experience:["Expérience","Experience"]};
let firstRoute=true;
function route(keep){
 let h=(location.hash||"#travaux").slice(1);if(h==="profil"||h==="parcours"){history.replaceState(null,"","#experience");h="experience"}
 closeLB();closeCV();
 if(TABS.includes(h)){
  if(veCleanup){veCleanup();veCleanup=null}
  $("#home").style.display="";$("#case").classList.remove("on");$("#nf").classList.remove("on");
  $$("[data-view]").forEach(v=>v.classList.toggle("on",v.dataset.view===h));
  setTab(h);
  if(!firstRoute&&!keep){const y=$("#tabbar").getBoundingClientRect().top+scrollY-$("header.top").offsetHeight;window.scrollTo({top:Math.max(0,y),behavior:"smooth"})}
  document.title="Yasmine Boumaiza — Portfolio";
 }else if(h.startsWith("projet-")&&byId(h.slice(7))){
  const p=byId(h.slice(7));$("#home").style.display="none";$("#nf").classList.remove("on");renderCase(p);$("#case").classList.add("on");if(!keep)window.scrollTo(0,0);document.title=`${p.title} — Yasmine Boumaiza`;
 }else if(h==="contact"||h==="top"){}
 else{$("#home").style.display="none";$("#case").classList.remove("on");$("#nf").classList.add("on");window.scrollTo(0,0)}
 firstRoute=false;requestAnimationFrame(()=>{observe();animateLangs();timelineFill()});
}
function setTab(t){const pill=$("#pill");let on=null;$$("#tabs a").forEach(a=>{const m=a.dataset.tab===t;a.classList.toggle("on",m);if(m)on=a});
 if(on){pill.style.opacity=1;pill.style.left=on.offsetLeft+"px";pill.style.width=on.offsetWidth+"px"}else pill.style.opacity=0}
addEventListener("hashchange",()=>route());addEventListener("resize",()=>setTab(($$("#tabs a.on")[0]||{}).dataset?.tab));
document.addEventListener("click",e=>{const a=e.target.closest("[data-scroll]");if(!a)return;e.preventDefault();const id=a.dataset.scroll;
 if(id==="views"){if($("#home").style.display==="none"||(location.hash&&location.hash.slice(1)!=="travaux")){location.hash="travaux";return}const y=$("#tabbar").getBoundingClientRect().top+scrollY-$("header.top").offsetHeight;window.scrollTo({top:y,behavior:"smooth"});return}
 const el=id==="top"?document.body:document.getElementById(id);window.scrollTo({top:id==="top"?0:el.getBoundingClientRect().top+scrollY-70,behavior:"smooth"})});

/* =========================================================
   INTERACTIONS
   ========================================================= */
const root=document.documentElement;
function getTheme(){try{return localStorage.getItem("yb-theme")}catch(e){return null}}
root.dataset.theme=getTheme()||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
$("#theme").onclick=()=>{const t=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=t;try{localStorage.setItem("yb-theme",t)}catch(e){}};
$("#langBtn").onclick=()=>{LANG=LANG==="fr"?"en":"fr";try{localStorage.setItem("yb-lang",LANG)}catch(e){};applyStatic();renderAll();route(true);timelineFill();animateLangs();toast(tr("Langue : Français","Language: English"))};

function tick(){try{const t=new Intl.DateTimeFormat("fr-FR",{timeZone:"Africa/Tunis",hour:"2-digit",minute:"2-digit"}).format(new Date());$("#clock").textContent=`Tunis ${t}`;$("#clock2").textContent=`${t} · GMT+1`}catch(e){}}
tick();setInterval(tick,15000);
addEventListener("scroll",()=>{$("header.top").classList.toggle("scrolled",scrollY>10);timelineFill()},{passive:true});

let io;function observe(){if(!io)io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});$$(".reveal:not(.in)").forEach(el=>io.observe(el))}
function countUp(el){const n=+el.dataset.n,t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1200);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}
function animateLangs(){if(!$('[data-view="experience"]').classList.contains("on"))return;setTimeout(()=>$$(".lang .fill").forEach(f=>f.style.width=f.dataset.w+"%"),200)}
function timelineFill(){const tl=$("#timeline");if(!tl||!tl.offsetParent||!$("#railFill"))return;const r=tl.getBoundingClientRect(),vh=innerHeight;
 const p=Math.max(0,Math.min(1,(vh*.6-r.top)/r.height));$("#railFill").style.height=(p*100)+"%";
 $$(".job").forEach(j=>{const jr=j.getBoundingClientRect();j.classList.toggle("lit",jr.top<vh*.6)})}

const cur=$("#cursor");let cx=0,cy=0,tx2=0,ty2=0;
addEventListener("mousemove",e=>{tx2=e.clientX;ty2=e.clientY});
(function loop(){cx+=(tx2-cx)*.2;cy+=(ty2-cy)*.2;cur.style.left=cx+"px";cur.style.top=cy+"px";requestAnimationFrame(loop)})();
function bindCursor(){$$(".proj .thumb,.fan .card,.tile,.case-cover,.gallery button,.figure,.scr .phone").forEach(el=>{if(el.dataset.cb)return;el.dataset.cb=1;
 el.addEventListener("mouseenter",()=>{cur.textContent=el.matches(".proj .thumb,.fan .card")?tr("Voir","View"):"Zoom";cur.classList.add("on")});
 el.addEventListener("mouseleave",()=>cur.classList.remove("on"))})}

// Lightbox
let LB=[],li=0;
function openLB(items,i){LB=items;li=i;showLB();$("#lb").classList.add("on");document.body.style.overflow="hidden";cur.classList.remove("on")}
function showLB(){const it=LB[li],s=$("#lbS");s.innerHTML=it.svg;s.classList.toggle("wide",!!it.wide);s.classList.toggle("free",!!it.free);s.classList.toggle("scroll",!!it.scroll);s.classList.toggle("ph",!!it.phone);s.classList.toggle("flipper",!!it.flip);s.classList.toggle("fprev",!!it.flip&&flipDir==="prev");s.scrollTop=0;$("#lbC").textContent=LB.length>1?`${it.cap}  ·  ${li+1} / ${LB.length}`:it.cap;$("#lbP").style.display=$("#lbN").style.display=LB.length>1?"":"none"}
function closeLB(){if(!$("#lb").classList.contains("on"))return;$("#lb").classList.remove("on");document.body.style.overflow=""}
$("#lbX").onclick=closeLB;$("#lbP").onclick=()=>{li=(li-1+LB.length)%LB.length;showLB()};$("#lbN").onclick=()=>{li=(li+1)%LB.length;showLB()};
$("#lb").addEventListener("click",e=>{if(e.target.id==="lb")closeLB()});
$("#lbS").addEventListener("click",e=>{const im=e.target.closest("img");if(LB[li]&&LB[li].flip&&LB.length>1&&im){const r=im.getBoundingClientRect();const right=(e.clientX-r.left)>r.width/2;if(right){if(li===0)return;li--;flipDir="prev"}else{if(li===LB.length-1)return;li++;flipDir="next"}showLB()}});
let flipDir="next";
addEventListener("keydown",e=>{if(!$("#lb").classList.contains("on"))return;if(e.key==="Escape")closeLB();if(e.key==="ArrowRight")$("#lbN").click();if(e.key==="ArrowLeft")$("#lbP").click()});

function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),2200)}
async function copy(txt){try{await navigator.clipboard.writeText(txt);toast(tr("Copié ✓","Copied ✓"))}catch(e){toast(tr("Copie impossible — sélectionnez le texte","Copy failed — please select the text"))}}
$$("[data-copy]").forEach(b=>b.onclick=()=>copy(b.dataset.copy));

// Formulaire
const types=new Set();
$("#opts").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;b.classList.toggle("on");types.has(b.dataset.k)?types.delete(b.dataset.k):types.add(b.dataset.k)});
let composed="";
const MAIL_TO="yasmineboumaiza92@gmail.com";
/* Envoi direct : renseigner ici l'adresse d'un service de formulaire (ex. https://formspree.io/f/xxxxxxx) une fois le site hébergé. Vide = ouverture automatique de la messagerie du visiteur. */
const FORM_ENDPOINT="";
/* Web3Forms (gratuit) : coller ici la clé d'accès reçue par e-mail sur web3forms.com. Les messages arrivent alors directement dans la boîte de Yasmine. */
const W3F_KEY="";
$("#cf").addEventListener("submit",e=>{e.preventDefault();const n=$("#fn").value.trim(),m=$("#fe").value.trim(),msg=$("#fm").value.trim();
 const err=!n?tr("Indiquez votre nom.","Please enter your name."):!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)?tr("Indiquez une adresse e-mail valide.","Please enter a valid email."):msg.length<10?tr("Votre message est un peu court (10 caractères minimum).","Your message is a bit short (10 characters minimum)."):"";
 $("#err").textContent=err;if(err)return;
 const tl=[...types].map(k=>{const f=FILTERS.find(x=>x[0]===k);return tr(f[1],f[2])});
 const subj=`${tr("Projet","Project")}${tl.length?" — "+tl.join(", "):""} · ${n}`;
 const body=`${tr("Bonjour Yasmine,","Hi Yasmine,")}\n\n${msg}\n\n${n}\n${m}`;
 composed=`${tr("Objet","Subject")} : ${subj}\n\n${body}`;
 $("#preview").textContent=composed;
 const mt=`mailto:${MAIL_TO}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
 const href=`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(MAIL_TO)}&su=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
 $("#mailto").href=href;$("#mailto").target="_blank";$("#mailto").rel="noopener";
 const isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
 const appUrl=`googlegmail:///co?to=${encodeURIComponent(MAIL_TO)}&subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
 $("#mailto").onclick=ev=>{if(!isIOS)return;ev.preventDefault();let left=false;const vis=()=>{if(document.hidden)left=true};document.addEventListener("visibilitychange",vis);
  const a=document.createElement("a");a.href=appUrl;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>{document.removeEventListener("visibilitychange",vis);if(!left)window.open(href,"_blank","noopener")},1800)};
 const touchy=matchMedia("(max-width:1100px)").matches||matchMedia("(pointer:coarse)").matches;
 $("#wa").href="https://wa.me/21692755973?text="+encodeURIComponent(body);
 const stepsHTML=(n)=>[tr("Message rédigé","Message written"),tr("Choisir comment l'envoyer","Choose how to send it"),tr("Appuyer sur « Envoyer » dans l'application","Press “Send” in the app")].map((t,i)=>`<li class="${i<n?"done":i===n?"now":""}"><b>${i<n?"✓":i+1}</b>${t}</li>`).join("");
 const show=(h,p)=>{$("#cf").style.display="none";$("#sent").classList.add("on");
  $("#sSteps").innerHTML=stepsHTML(1);
  if(touchy){$("#sBadge").className="sbadge";$("#sBadge").textContent=tr("⏳ Pas encore envoyé — dernière étape","⏳ Not sent yet — last step");$("#sHead").textContent=tr("Choisissez comment envoyer votre message.","Choose how to send your message.");$("#sPar").textContent=tr("Touchez un bouton ci-dessous : l'application s'ouvre avec votre message déjà écrit et adressé à Yasmine. Appuyez ensuite sur « Envoyer » dans l'application. Tant que vous ne l'avez pas fait, Yasmine ne reçoit rien.","Tap a button below: the app opens with your message already written and addressed to Yasmine. Then press “Send” in that app. Until you do, Yasmine receives nothing.")}
  else{$("#sBadge").className="sbadge";$("#sBadge").textContent=tr("⏳ Pas encore envoyé — terminez dans Gmail","⏳ Not sent yet — finish in Gmail");if(h){$("#sHead").textContent=h;$("#sPar").textContent=p}}
  if(h&&/✓/.test(h)){$("#sBadge").className="sbadge ok";$("#sBadge").textContent=tr("✓ Message envoyé","✓ Message sent");$("#sSteps").innerHTML=stepsHTML(3)}
  setTimeout(()=>$("#sent").scrollIntoView({behavior:"smooth",block:"center"}),80)};
 const openMail=()=>{show();try{navigator.clipboard.writeText(composed)}catch(_){}if(touchy)return;const a=document.createElement("a");a.href=href;a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove()};
 if(FORM_ENDPOINT||W3F_KEY){ // envoi direct (Formspree, EmailJS…) quand le site est hébergé hors de cet aperçu
  const btn=$("#cf button[type=submit]");btn.disabled=true;
  fetch(W3F_KEY?"https://api.web3forms.com/submit":FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:W3F_KEY,name:n,email:m,type:tl.join(", "),message:msg,subject:subj,_subject:subj,from_name:"Portfolio — "+n,replyto:m})})
   .then(r=>r.json().catch(()=>({success:r.ok})).then(j=>{if(!r.ok||j.success===false)throw 0;return j})).then(()=>{show(tr("Message envoyé ✓","Message sent ✓"),tr("Merci ! Yasmine vous répondra très vite.","Thank you! Yasmine will reply very soon."));$("#mailto").style.display="none"})
   .catch(openMail).finally(()=>btn.disabled=false);
 }else openMail()});
$("#copyMsg").onclick=()=>copy(composed);
$("#reset").onclick=()=>{$("#sent").classList.remove("on");$("#cf").style.display="";$("#mailto").style.display="";applyStatic()};

// CV
function openViewer(title,sub,imgs,pdf,ar){closeLB();$("#cvTitle").textContent=title;$("#cvSub").textContent=sub;
 $("#cvBody").innerHTML=imgs.map((u,i)=>`<img src="${u}" alt="${esc(title)} — ${i+1}" loading="${i<2?"eager":"lazy"}" decoding="async"${ar?` style="aspect-ratio:${ar}"`:""}>`).join("");$("#cvBody").scrollTop=0;
 $("#cvLang").classList.remove("show");$("#cvPdf").href=pdf;$("#cvZoom").textContent="＋ Zoom";$("#cvBody").classList.remove("zoom");$("#cvv").classList.add("on");document.body.style.overflow="hidden";cur.classList.remove("on")}
function openCV(l){l=l==="en"?"en":"fr";cvLang=l;const W=597.447,H=841.021,R={fr:[[60,87,112,98,"https://www.linkedin.com/in/yasmine-boumaiza-65b783282/","LinkedIn"],[124,87,178,98,"https://www.behance.net/yasmineboumaiza","Behance"]],en:[[60,87,120,98,"https://www.linkedin.com/in/yasmine-boumaiza-65b783282/","LinkedIn"],[132,87,194,98,"https://www.behance.net/yasmineboumaiza","Behance"]]}[l];
 const img=l==="fr"?"img/cv-1.jpg":"img/cv-en-1.jpg",pdf=l==="fr"?"cv.pdf":"cv-en.pdf";
 openViewer("CV — Yasmine Boumaiza",l==="fr"?"Graphic Designer | UI/UX Designer · FR":"Graphic Designer | UI/UX Designer · EN",[img],pdf);
 const im=$("#cvBody img");const w=document.createElement("div");w.className="cvpage";im.replaceWith(w);w.appendChild(im);
 R.forEach(([x1,y1,x2,y2,u,n])=>{const a=document.createElement("a");a.className="hs";a.href=u;a.target="_blank";a.rel="noopener";a.setAttribute("aria-label",n);a.style.cssText=`left:${(x1-2)/W*100}%;top:${(y1-2)/H*100}%;width:${(x2-x1+4)/W*100}%;height:${(y2-y1+4)/H*100}%`;w.appendChild(a)});
 const g=$("#cvLang");g.classList.add("show");g.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.l===l))}
let cvLang="fr";
function openDoc(slug){const d=DOCS[slug];openViewer(tr(d.fr,d.en),d.sub||`${d.n} pages · ESSTED`,Array.from({length:d.n},(_,i)=>`docs/${slug}/p-${String(i+1).padStart(2,"0")}.webp`),d.pdf||`docs/${slug}-dossier.pdf`,d.ar)}
function closeCV(){if(!$("#cvv").classList.contains("on"))return;$("#cvv").classList.remove("on");$("#cvLang").classList.remove("show");$("#cvBody").classList.remove("zoom");document.body.style.overflow=""}
$("#openCV").onclick=()=>openCV("fr");$$("[data-cv]").forEach(b=>b.onclick=()=>openCV("fr"));$("#cvLang").addEventListener("click",e=>{const b=e.target.closest("button");if(b)openCV(b.dataset.l)});$("#cvClose").onclick=closeCV;
document.addEventListener("click",e=>{const b=e.target.closest("[data-doc]");if(b){e.preventDefault();openDoc(b.dataset.doc)}});
function cvZoom(){const b=$("#cvBody");b.classList.toggle("zoom");$("#cvZoom").textContent=b.classList.contains("zoom")?tr("－ Réduire","－ Zoom out"):"＋ Zoom"}
$("#cvZoom").onclick=cvZoom;$("#cvBody").addEventListener("click",e=>{if(e.target.tagName==="IMG"&&!$("#cvBody").classList.contains("scrolling"))cvZoom()});
addEventListener("keydown",e=>{if(e.key==="Escape")closeCV()});

applyStatic();renderAll();route();

