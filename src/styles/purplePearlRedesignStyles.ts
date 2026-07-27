export const purplePearlRedesignStyles = `
:root{
  --pp-plum:#32164f;
  --pp-purple:#6d46a0;
  --pp-lavender:#f5f0fb;
  --pp-lavender-2:#eee5f8;
  --pp-gold:#c89b4b;
  --pp-ivory:#fffdf9;
  --pp-text:#2b2038;
  --pp-muted:#746783;
  --pp-border:#eadff3;
  --pp-shadow:0 22px 70px rgba(49,22,79,.12);
  --pp-radius:28px;
  --pp-dark:var(--pp-plum);
  --pp-mid:var(--pp-purple);
  --pp-light:#a98be0;
  --pp-line:var(--pp-border);
  --pp-font-body:Arial,Helvetica,sans-serif;
  --pp-font-display:Georgia,"Times New Roman",serif;
}

.site-header{
  position:fixed!important;
  top:0!important;
  left:0!important;
  right:0!important;
  z-index:1000!important;
  height:92px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  gap:28px!important;
  background:#fff!important;
  border-bottom:1px solid rgba(50,22,79,.10)!important;
  backdrop-filter:none!important;
  box-shadow:0 14px 34px rgba(50,22,79,.08)!important;
  box-sizing:border-box!important;
  color:var(--pp-plum)!important;
  font-family:var(--pp-font-body)!important;
}
.site-header .nav-wrap{
  width:100%!important;
  max-width:none!important;
  min-height:92px!important;
  margin:0 auto!important;
  padding:0 46px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  gap:28px!important;
  border:0!important;
  border-radius:0!important;
  background:transparent!important;
  box-shadow:none!important;
  box-sizing:border-box!important;
}
.site-header .brand{
  display:flex!important;
  align-items:center!important;
  flex:0 0 auto!important;
}
.site-header .brand img{
  width:132px!important;
  height:auto!important;
  max-height:50px!important;
  object-fit:contain!important;
  filter:brightness(0) saturate(100%) invert(13%) sepia(41%) saturate(2586%) hue-rotate(257deg) brightness(88%) contrast(96%)!important;
}
.site-header .main-nav{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:34px!important;
  flex-wrap:nowrap!important;
  flex:1 1 auto!important;
  color:var(--pp-plum)!important;
  font-weight:600!important;
  height:39px!important;
}
.site-header .main-nav a{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  height:39px!important;
  color:var(--pp-plum)!important;
  opacity:1!important;
  font-size:15px!important;
  line-height:15px!important;
  font-weight:600!important;
  padding:12px 4px!important;
  text-decoration:none!important;
  white-space:nowrap!important;
}
.site-header .main-nav a:hover{
  color:var(--pp-purple)!important;
  opacity:1!important;
}
.site-header .nectar-dropdown{
  position:relative!important;
  display:inline-flex!important;
  align-items:center!important;
}
.site-header .nectar-dropdown-btn{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:7px!important;
  height:39px!important;
  margin:0!important;
  padding:12px 4px!important;
  border:0!important;
  background:transparent!important;
  color:var(--pp-plum)!important;
  font:inherit!important;
  font-size:15px!important;
  font-weight:600!important;
  line-height:15px!important;
  cursor:pointer!important;
  white-space:nowrap!important;
}
.site-header .nectar-dropdown-btn span{
  display:inline!important;
}
.site-header .nectar-dropdown-menu{
  position:absolute!important;
  top:calc(100% - 1px)!important;
  left:50%!important;
  min-width:230px!important;
  padding:10px!important;
  border:1px solid rgba(73,52,37,.16)!important;
  background:#F5F1E8!important;
  box-shadow:0 22px 48px rgba(0,0,0,.22)!important;
  opacity:0!important;
  pointer-events:none!important;
  transform:translateX(-50%)!important;
  visibility:hidden!important;
  z-index:10000!important;
}
.site-header .nectar-dropdown:hover .nectar-dropdown-menu,
.site-header .nectar-dropdown:focus-within .nectar-dropdown-menu{
  opacity:1!important;
  pointer-events:auto!important;
  transform:translateX(-50%)!important;
  visibility:visible!important;
}
.site-header .nectar-dropdown-menu a{
  display:block!important;
  height:auto!important;
  padding:13px 18px!important;
  border-bottom:1px solid rgba(73,52,37,.10)!important;
  color:#493425!important;
  font-size:15px!important;
  line-height:1.2!important;
  opacity:1!important;
  white-space:nowrap!important;
}
.site-header .nectar-dropdown-menu a:last-child{
  border-bottom:0!important;
}
.site-header .nectar-dropdown-menu a:hover{
  background:#E5E2DD!important;
  color:#493425!important;
}
.site-header .lang-switch{
  display:flex!important;
  align-items:center!important;
  gap:6px!important;
  flex:0 0 auto!important;
  position:relative!important;
  margin-left:14px!important;
  padding:5px!important;
  border:1px solid rgba(50,22,79,.16)!important;
  border-radius:999px!important;
  background:rgba(50,22,79,.06)!important;
}
.site-header .lang-switch button{
  width:auto!important;
  height:auto!important;
  min-width:0!important;
  min-height:0!important;
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  padding:0!important;
  border-radius:50%!important;
  color:var(--pp-plum)!important;
  background:transparent!important;
  font-family:var(--pp-font-body)!important;
  font-size:11px!important;
  font-weight:700!important;
  line-height:1!important;
  letter-spacing:.08em!important;
  padding:8px 9px!important;
}
.site-header .lang-switch button.is-active,
.site-header .lang-switch button.active{
  background:var(--pp-plum)!important;
  color:#fff!important;
}

.pp-redesign{
  color:var(--pp-text);
  background:linear-gradient(180deg,#fbf8ff 0%,#fff 45%,#f6eefc 100%);
  font-family:var(--pp-font-body);
  line-height:1.65;
  min-height:100vh;
  overflow:hidden;
}
.pp-redesign *{
  box-sizing:border-box;
}
.pp-redesign img{
  display:block;
  max-width:100%;
}
.pp-redesign a{
  color:inherit;
  text-decoration:none;
}
.pp-container{
  width:min(1180px,90%);
  margin:0 auto;
}

.pp-hero{
  position:relative;
  overflow:hidden;
  width:100vw;
  height:100vh;
  min-height:100vh;
  margin-left:calc(50% - 50vw);
  margin-right:calc(50% - 50vw);
  padding:92px 0 0;
  display:flex;
  align-items:stretch;
  background:url('/assets/purple-pearl-hero-section.png') center center/cover no-repeat;
}
.pp-hero:before{
  display:none;
}
.pp-hero:after{
  display:none;
}
.pp-hero-grid{
  position:relative;
  z-index:2;
  display:grid;
  width:100%;
  max-width:none;
  height:100%;
  margin:0;
  padding:0 clamp(72px,7vw,128px);
  grid-template-columns:.42fr .58fr;
  align-items:center;
  gap:24px;
  min-height:0;
}
.pp-hero-copy{
  min-width:0;
  align-self:center;
  padding:0 0 0 clamp(0px,1.4vw,24px);
}
.pp-eyebrow,
.pp-section-kicker{
  margin:0 0 16px;
  color:var(--pp-gold);
  text-transform:uppercase;
  font-size:13px;
  letter-spacing:.18em;
  font-weight:900;
}
.pp-eyebrow{
  display:flex;
  align-items:center;
  gap:24px;
  color:var(--pp-plum);
  margin-bottom:28px;
  font-size:14px;
  letter-spacing:.28em;
  line-height:1;
}
.pp-eyebrow:after{
  content:"";
  width:45px;
  height:2px;
  flex:0 0 auto;
  background:var(--pp-gold);
}
.pp-hero-title{
  margin:0 0 22px;
  color:var(--pp-plum);
  font-family:var(--pp-font-display);
  font-size:clamp(62px,5.6vw,92px);
  line-height:.9;
  font-weight:400;
  letter-spacing:0;
}
.pp-hero-text{
  position:relative;
  max-width:310px;
  margin:0 0 28px;
  padding-top:26px;
  color:#3e314d;
  font-size:clamp(17px,1.08vw,20px);
  line-height:1.55;
  letter-spacing:.10em;
}
.pp-hero-text:before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:72px;
  height:2px;
  background:var(--pp-gold);
}
.pp-actions{
  display:flex;
  flex-wrap:wrap;
  gap:22px;
}
.pp-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  min-height:50px;
  min-width:210px;
  padding:0 26px;
  border-radius:999px;
  font-size:11px;
  line-height:1;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
  transition:transform .22s ease, box-shadow .22s ease, background .22s ease;
}
.pp-btn:hover{
  transform:translateY(-2px);
}
.pp-btn--primary{
  min-width:245px;
  background:var(--pp-plum);
  color:#fff!important;
  box-shadow:0 12px 26px rgba(50,22,79,.16);
}
.pp-btn--primary:hover,
.pp-btn--primary:focus-visible,
.pp-map-btn,
.pp-map-btn:hover,
.pp-map-btn:focus-visible,
.pp-form-card .submit-btn,
.pp-form-card .submit-btn:hover,
.pp-form-card .submit-btn:focus-visible,
.pp-plans-card .floor-btn.active{
  color:#fff!important;
}
.pp-btn--primary span{
  display:inline-block;
  margin-inline-start:2px;
  color:#fff!important;
  line-height:1;
}
.pp-btn--secondary{
  border:1px solid rgba(50,22,79,.25);
  background:rgba(255,255,255,.36);
  color:var(--pp-plum);
}
.pp-building-card{
  display:none;
}
.pp-building-card:before{
  content:"";
  position:absolute;
  inset:0;
  z-index:1;
  pointer-events:none;
  background:linear-gradient(90deg,rgba(249,244,253,.92) 0,rgba(249,244,253,.36) 18%,rgba(249,244,253,0) 36%);
}
.pp-building-card img{
  width:100%;
  height:100%;
  min-height:730px;
  object-fit:cover;
  object-position:center bottom;
}

.pp-section{
  padding:44px 0;
}
.pp-section--compact{
  padding-top:24px;
}
.pp-about-section{
  position:relative;
  z-index:2;
  margin-top:54px;
}
.pp-card{
  background:rgba(255,255,255,.86);
  border:1px solid var(--pp-border);
  border-radius:var(--pp-radius);
  box-shadow:var(--pp-shadow);
}
.pp-about-card{
  padding:38px;
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:34px;
  align-items:center;
}
.pp-card-copy{
  max-width:980px;
}
.pp-card-copy p:last-child{
  margin:0;
  color:#5f526d;
  font-size:16px;
  line-height:1.7;
}
.pp-stats{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,172px));
  justify-content:end;
  gap:12px;
  align-self:center;
  width:max-content;
  max-width:100%;
}
.pp-stat{
  min-width:0;
  min-height:70px;
  padding:11px 13px;
  border:1px solid var(--pp-border);
  border-radius:16px;
  background:linear-gradient(180deg,#fff,#fcf8ff);
}
.pp-stat > span{
  display:block;
  margin-bottom:5px;
  color:var(--pp-gold);
  font-size:13px;
  line-height:1;
}
.pp-stat strong{
  display:block;
  color:var(--pp-plum);
  font-size:16px;
  line-height:1.12;
  white-space:nowrap;
}
.pp-stat small{
  display:block;
  margin-top:4px;
  color:var(--pp-muted);
  font-size:11px;
  font-weight:650;
}

.pp-location-grid{
  display:grid;
  grid-template-columns:minmax(320px,.52fr) minmax(0,1fr);
  gap:28px;
  align-items:stretch;
}
.pp-info-card,
.pp-proximity{
  min-width:0;
  min-height:390px;
}
.pp-info-card{
  display:flex;
  flex-direction:column;
  padding:42px;
  max-width:none;
}
.pp-info-card .pp-section-kicker{
  color:var(--pp-gold);
}
.pp-proximity .pp-section-kicker{
  color:var(--pp-gold);
}
.pp-info-card h2{
  margin:22px 0 6px;
  color:#6f6380;
  font-size:18px;
  line-height:1.24;
  font-weight:900;
}
.pp-info-card > p:not(.pp-section-kicker){
  max-width:360px;
  margin:0;
  color:#6f6380;
  font-size:15px;
  line-height:1.72;
  font-weight:650;
}
.pp-map-preview{
  width:100%;
  max-width:360px;
  height:150px;
  margin:22px 0 24px;
  overflow:hidden;
  border:1px solid var(--pp-border);
  border-radius:18px;
  background:#f7f0fb;
}
.pp-map-preview iframe{
  display:block;
  width:100%;
  height:100%;
  border:0;
  filter:saturate(.9) contrast(.96);
}
.pp-map-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  width:max-content;
  max-width:100%;
  margin-top:0;
  padding:15px 28px;
  border-radius:999px;
  background:var(--pp-plum);
  color:#fff;
  font-size:11px;
  line-height:1;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
}
.pp-proximity{
  padding:42px;
}
.pp-proximity-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:34px;
  margin-top:22px;
}
.pp-near-card{
  height:100%;
  padding:0;
}
.near-col h3{
  margin:0 0 20px;
  color:var(--pp-plum);
  font-size:18px;
  line-height:1.2;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:900;
}
.near-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  min-height:48px;
  padding:9px 0;
  border-bottom:1px solid #eee6f4;
  color:#4d435c;
}
.near-row strong{
  min-width:0;
  font-size:15px;
  line-height:1.35;
  font-weight:700;
}
.near-row span{
  flex:0 0 auto;
  color:#6f5f82;
  font-size:15px;
  font-weight:900;
  white-space:nowrap;
}

.pp-title-line{
  display:flex;
  align-items:center;
  gap:16px;
  margin:0 0 22px;
  color:var(--pp-plum);
  font-size:18px;
  line-height:1.2;
  text-transform:uppercase;
  font-weight:900;
}
.pp-title-line:after{
  content:"";
  width:42px;
  height:2px;
  flex:0 0 auto;
  background:var(--pp-gold);
}
.pp-plans-card{
  overflow:hidden;
}
.pp-plans-card .floor-filter{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:18px;
  margin:0;
  padding:12px;
  border:0;
  border-bottom:1px solid var(--pp-border);
  border-radius:var(--pp-radius) var(--pp-radius) 0 0;
  background:rgba(255,255,255,.72);
  box-shadow:none;
}
.pp-plans-card .floor-btn{
  width:100%;
  min-height:52px;
  padding:14px 16px;
  border:1px solid var(--pp-border);
  border-radius:999px;
  background:#fff;
  color:var(--pp-plum);
  font-size:14px;
  font-weight:900;
  line-height:1.25;
  text-align:center;
  cursor:pointer;
  transition:background .22s ease,color .22s ease,transform .22s ease;
}
.pp-plans-card .floor-btn:hover,
.pp-plans-card .floor-btn.active{
  border-color:transparent;
  background:var(--pp-plum);
  color:#fff;
}
.pp-plans-card .floor-plan-viewer{
  border:0;
  border-radius:0;
  box-shadow:none;
  background:#fff;
}
.pp-plans-card .floor-plan-panel{
  display:none;
  margin:0;
}
.pp-plans-card .floor-plan-panel.active{
  display:block;
}
.pp-plans-card .floor-plan-panel figcaption{
  display:flex;
  justify-content:space-between;
  gap:16px;
  flex-wrap:wrap;
  padding:18px 22px 22px;
  border-top:1px solid var(--pp-border);
  background:#fcfaff;
}
.pp-plans-card .floor-plan-panel figcaption strong{
  color:var(--pp-plum);
  font-size:18px;
}
.pp-plans-card .floor-plan-panel figcaption span{
  color:var(--pp-muted);
}
.pp-plans-card .plan-version-grid{
  background:#fff;
  align-items:start;
}
.pp-plans-card .plan-version{
  border-color:var(--pp-border);
  border-radius:18px;
  background:#fcfaff;
}
.pp-plans-card .plan-version > span{
  color:var(--pp-plum);
  background:#fff;
}
.pp-video-section{
  scroll-margin-top:110px;
}
.pp-video-grid{
  display:grid;
  grid-template-columns:minmax(300px,380px) minmax(0,1fr);
  gap:28px;
  align-items:stretch;
}
.pp-video-card{
  width:100%;
  padding:10px;
  overflow:hidden;
}
.pp-video-card iframe{
  display:block;
  width:100%;
  aspect-ratio:9/16;
  border:0;
  border-radius:20px;
  background:var(--pp-plum);
}
.pp-video-copy{
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:22px;
  padding:clamp(34px,5vw,64px);
}
.pp-video-copy p{
  margin:0;
  color:var(--pp-muted);
  font-size:16px;
  line-height:1.8;
}
.pp-video-copy .pp-video-lead{
  color:var(--pp-plum);
  font-family:var(--pp-font-display);
  font-size:clamp(26px,2.6vw,40px);
  line-height:1.2;
}
.pp-form-card{
  padding:32px;
}
.pp-form-card .visit-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
}
.pp-form-card .field{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.pp-form-card .field.full{
  grid-column:1/-1;
}
.pp-form-card label{
  color:var(--pp-plum);
  font-size:13px;
  font-weight:850;
}
.pp-form-card input,
.pp-form-card select,
.pp-form-card textarea{
  width:100%;
  min-height:54px;
  padding:15px 16px;
  border:1px solid var(--pp-border);
  border-radius:15px;
  background:#fffcff;
  color:#6e6379;
  font:inherit;
  font-size:15px;
  outline:none;
}
.pp-form-card textarea{
  min-height:110px;
  resize:vertical;
}
.pp-form-card input:focus,
.pp-form-card select:focus,
.pp-form-card textarea:focus{
  border-color:rgba(50,22,79,.42);
  box-shadow:0 0 0 3px rgba(109,70,160,.11);
}
.pp-form-card .check-wrap{
  display:flex!important;
  flex-direction:row!important;
  align-items:center!important;
  gap:12px!important;
  color:#4d3c60;
  font-size:14px;
  font-weight:700;
  line-height:1.35;
}
.pp-form-card .check-wrap input[type="checkbox"]{
  width:18px!important;
  height:18px!important;
  min-width:18px!important;
  min-height:18px!important;
  margin:0!important;
  accent-color:var(--pp-plum);
}
.pp-form-card .submit-btn{
  width:100%;
  min-height:56px;
  border:0;
  border-radius:999px;
  background:var(--pp-plum);
  color:#fff;
  font-size:13px;
  text-transform:uppercase;
  font-weight:900;
  cursor:pointer;
  transition:transform .22s ease, box-shadow .22s ease;
}
.pp-form-card .submit-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 14px 28px rgba(50,22,79,.16);
}
.pp-form-card .form-status{
  margin:14px 0 0;
  color:var(--pp-plum);
  font-size:14px;
}
.pp-form-card .form-status.is-error{
  color:#9f3131;
}

.nectar-floating-newsletter--purple{
  position:fixed!important;
  right:18px!important;
  bottom:18px!important;
  width:min(620px,calc(100vw - 24px))!important;
  z-index:2147483640!important;
  overflow:hidden!important;
  border:1px solid rgba(218,197,239,.55)!important;
  border-radius:18px!important;
  background:#28143d!important;
  box-shadow:0 28px 80px rgba(24,8,39,.46)!important;
  color:#f8f2ff!important;
  opacity:0!important;
  visibility:hidden!important;
  transform:translateY(24px)!important;
  pointer-events:none!important;
  transition:opacity .45s ease,transform .45s ease,visibility .45s ease!important;
  isolation:isolate!important;
}
.nectar-floating-newsletter--purple:before{
  content:""!important;
  position:absolute!important;
  inset:0!important;
  z-index:-2!important;
  background:
    linear-gradient(180deg,rgba(37,17,56,.32),rgba(37,16,56,.44)),
    radial-gradient(circle at 70% 18%,rgba(165,113,220,.42),transparent 28%),
    radial-gradient(circle at 57% 72%,rgba(112,66,161,.24),transparent 26%),
    url('/hero-tanger-sunset.png') center/cover no-repeat!important;
  filter:saturate(.82) brightness(.54)!important;
  transform:scale(1.04)!important;
}
.nectar-floating-newsletter--purple:after{
  content:""!important;
  position:absolute!important;
  inset:0!important;
  z-index:-1!important;
  background:linear-gradient(180deg,rgba(44,20,67,.56),rgba(40,18,61,.72))!important;
}
.nectar-floating-newsletter--purple.is-visible{
  opacity:1!important;
  visibility:visible!important;
  transform:translateY(0)!important;
  pointer-events:auto!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__inner{
  position:relative!important;
  padding:24px 32px!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__close{
  position:absolute!important;
  top:18px!important;
  right:22px!important;
  display:flex!important;
  width:28px!important;
  height:28px!important;
  align-items:center!important;
  justify-content:center!important;
  padding:0!important;
  border:0!important;
  background:transparent!important;
  color:#e9dcf7!important;
  font-size:24px!important;
  font-weight:200!important;
  line-height:1!important;
  cursor:pointer!important;
  transition:transform .25s ease,color .25s ease!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__close:hover{
  color:#fff!important;
  transform:rotate(90deg)!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__eyebrow{
  display:block!important;
  margin:0 40px 10px 0!important;
  color:#d7c2ec!important;
  font-family:inherit!important;
  font-size:10px!important;
  letter-spacing:.28em!important;
  text-transform:uppercase!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__title{
  margin:0 40px 10px 0!important;
  color:#fbf7ff!important;
  font-family:Georgia,'Times New Roman',serif!important;
  font-size:42px!important;
  font-weight:400!important;
  line-height:.95!important;
  letter-spacing:-.04em!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__text{
  max-width:470px!important;
  margin:0 0 24px!important;
  color:#dccce9!important;
  font-size:15px!important;
  line-height:1.45!important;
}
#floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__form{
  display:grid!important;
  grid-template-columns:minmax(300px,1fr) 165px!important;
  gap:0!important;
  width:100%!important;
  max-width:100%!important;
  align-items:stretch!important;
  margin:0 0 18px!important;
  overflow:hidden!important;
  border:1px solid rgba(218,197,239,.62)!important;
  border-radius:4px!important;
  background:rgba(35,15,53,.24)!important;
  box-sizing:border-box!important;
}
#floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__input{
  width:100%!important;
  min-width:0!important;
  max-width:100%!important;
  height:56px!important;
  padding:0 18px!important;
  border:0!important;
  border-radius:4px 0 0 4px!important;
  outline:0!important;
  background:transparent!important;
  color:#f8f2ff!important;
  box-sizing:border-box!important;
  font-family:inherit!important;
  font-size:11px!important;
  line-height:56px!important;
  letter-spacing:.10em!important;
  text-transform:uppercase!important;
}
#floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__input::placeholder{
  color:#cfb9e1!important;
  opacity:1!important;
}
#floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__submit{
  grid-column:2!important;
  width:165px!important;
  min-width:165px!important;
  max-width:165px!important;
  height:56px!important;
  margin:0!important;
  padding:0 12px!important;
  border:0!important;
  border-left:1px solid rgba(218,197,239,.62)!important;
  border-radius:0 4px 4px 0!important;
  background:#eee4f8!important;
  color:#3c1b59!important;
  box-sizing:border-box!important;
  font-family:inherit!important;
  font-size:10px!important;
  font-weight:700!important;
  letter-spacing:.14em!important;
  text-transform:uppercase!important;
  cursor:pointer!important;
}
#floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__submit:hover{
  background:#fff!important;
  color:#2a103f!important;
}
.nectar-floating-newsletter--purple .nectar-floating-newsletter__privacy{
  display:flex!important;
  align-items:center!important;
  gap:10px!important;
  margin:0!important;
  color:#d2bfdf!important;
  font-size:12px!important;
  line-height:1.5!important;
}
.nectar-floating-newsletter--purple .form-status{
  grid-column:1/-1!important;
  margin:10px 14px!important;
  color:#fff!important;
}
.nectar-floating-newsletter--purple .form-status.is-error{
  color:#ffd9df!important;
}

.nectar-linked-footer--purple{
  width:100%!important;
  max-width:none!important;
  margin:0!important;
  border:0!important;
  border-radius:0!important;
  background:linear-gradient(135deg,#2b103f,#6f4aaa)!important;
}

html[dir="rtl"] .site-header .nav-wrap,
html[dir="rtl"] .pp-redesign{
  direction:rtl;
}
html[dir="rtl"] .pp-hero-copy,
html[dir="rtl"] .pp-card-copy,
html[dir="rtl"] .pp-info-card,
html[dir="rtl"] .pp-proximity,
html[dir="rtl"] .pp-near-card,
html[dir="rtl"] .pp-form-card{
  text-align:right!important;
}
html[dir="rtl"] .pp-eyebrow:after,
html[dir="rtl"] .pp-title-line:after{
  order:-1;
}
html[dir="rtl"] .pp-btn,
html[dir="rtl"] .pp-map-btn,
html[dir="rtl"] .pp-form-card .submit-btn{
  flex-direction:row!important;
}
html[dir="rtl"] .pp-hero-text:before{
  left:auto;
  right:0;
}

@media(max-width:1050px){
  .site-header .nav-wrap{
    width:100%!important;
    padding:0 22px!important;
  }
  .site-header .main-nav{
    gap:16px!important;
    font-size:14px!important;
  }
  .pp-hero{
    width:100%;
    height:auto;
    min-height:100svh;
    margin-left:0;
    margin-right:0;
    padding:112px 0 56px;
  }
  .pp-hero-grid{
    width:100%;
    height:auto;
    min-height:calc(100svh - 168px);
    padding:0 22px;
  }
  .pp-hero-copy{
    padding:0;
  }
  .pp-hero-title{
    font-size:72px;
  }
  .pp-hero-grid,
  .pp-about-card{
    grid-template-columns:1fr;
  }
  .pp-location-grid{
    grid-template-columns:1fr;
    gap:22px;
  }
  .pp-info-card,
  .pp-proximity{
    min-height:0;
  }
  .pp-building-card,
  .pp-building-card img{
    min-height:500px;
  }
  .pp-building-card{
    margin-right:0;
  }
}
@media(max-width:900px){
  .site-header{
    top:0!important;
  }
  .site-header .nav-wrap{
    width:100%!important;
    min-height:72px!important;
    padding:0 16px!important;
    align-items:center!important;
  }
  .site-header .brand img{
    max-height:32px!important;
  }
  .site-header .main-nav{
    position:absolute!important;
    top:72px!important;
    left:12px!important;
    right:12px!important;
    z-index:1000!important;
    flex-direction:column!important;
    align-items:stretch!important;
    gap:0!important;
    padding:14px!important;
    max-height:calc(100vh - 100px)!important;
    overflow:auto!important;
    border:1px solid rgba(255,255,255,.18)!important;
    background:rgba(47,23,71,.98)!important;
    box-shadow:0 26px 70px rgba(28,10,46,.36)!important;
    opacity:0!important;
    pointer-events:none!important;
    transform:translateY(-8px)!important;
    visibility:hidden!important;
  }
  .site-header .main-nav.is-open{
    display:flex!important;
    opacity:1!important;
    pointer-events:auto!important;
    transform:translateY(0)!important;
    visibility:visible!important;
  }
  .site-header .main-nav a{
    color:#fff!important;
    padding:13px 14px!important;
    border-bottom:1px solid rgba(255,255,255,.12)!important;
  }
  .site-header .main-nav a:last-child{
    border-bottom:0!important;
  }
  .site-header .main-nav .nectar-dropdown{
    width:100%!important;
    display:flex!important;
    flex-direction:column!important;
    align-items:stretch!important;
  }
  .site-header .main-nav .nectar-dropdown-btn{
    width:100%!important;
    justify-content:space-between!important;
    padding:13px 14px!important;
    border-bottom:1px solid rgba(255,255,255,.12)!important;
    color:#fff!important;
  }
  .site-header .main-nav .nectar-dropdown-menu{
    position:static!important;
    display:block!important;
    width:100%!important;
    min-width:0!important;
    padding:0 0 8px 14px!important;
    border:0!important;
    background:transparent!important;
    box-shadow:none!important;
    opacity:1!important;
    pointer-events:auto!important;
    transform:none!important;
    visibility:visible!important;
  }
  .site-header .main-nav .nectar-dropdown-menu a{
    padding:11px 14px!important;
    border-bottom:1px solid rgba(255,255,255,.08)!important;
    background:transparent!important;
    color:rgba(255,255,255,.84)!important;
    font-size:14px!important;
  }
  .site-header .purple-mobile-toggle{
    display:flex!important;
    width:42px!important;
    height:42px!important;
    align-items:center!important;
    justify-content:center!important;
    flex-direction:column!important;
    gap:4px!important;
    border:1px solid rgba(50,22,79,.22)!important;
    border-radius:999px!important;
    background:rgba(50,22,79,.04)!important;
  }
  .site-header .purple-mobile-toggle span{
    display:block!important;
    width:18px!important;
    height:2px!important;
    border-radius:999px!important;
    background:var(--pp-plum)!important;
  }
  .site-header .lang-switch{
    margin-left:auto!important;
    gap:10px!important;
  }
  .site-header .lang-switch:before{
    display:none!important;
  }
  html[dir="rtl"] .site-header .lang-switch{
    margin-left:0!important;
    margin-right:auto!important;
  }
  .pp-hero{
    padding:112px 0 56px;
  }
  .pp-hero-grid{
    min-height:calc(100svh - 168px);
  }
  .pp-stats,
  .pp-form-card .visit-grid{
    grid-template-columns:1fr;
  }
  .pp-plans-card .floor-filter{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  .pp-video-grid{
    grid-template-columns:1fr;
  }
  .pp-video-card{
    width:min(100%,420px);
    justify-self:center;
  }
}
@media(max-width:640px){
  .site-header .brand img{
    width:112px!important;
  }
  .site-header .lang-switch{
    gap:4px!important;
    padding:0!important;
  }
  .site-header .lang-switch button{
    width:32px!important;
    height:32px!important;
    min-width:30px!important;
    padding:0!important;
    font-size:11px!important;
  }
  .pp-container{
    width:calc(100% - 32px);
  }
  .pp-hero-title{
    font-size:58px;
  }
  .pp-hero-text{
    max-width:300px;
    font-size:18px;
    line-height:1.58;
    letter-spacing:.07em;
  }
  .pp-actions{
    width:100%;
  }
  .pp-btn{
    width:100%;
    min-width:0;
  }
  .pp-building-card,
  .pp-building-card img{
    min-height:320px;
  }
  .pp-about-section{
    margin-top:32px;
  }
  .pp-about-card,
  .pp-info-card,
  .pp-proximity,
  .pp-form-card{
    padding:24px;
  }
  .pp-stat{
    padding:11px 13px;
  }
  .pp-stat strong{
    font-size:16px;
  }
  .pp-plans-card .floor-filter{
    grid-template-columns:1fr;
  }
  .pp-proximity-grid{
    grid-template-columns:1fr;
    gap:18px;
  }
  .near-row{
    gap:16px;
  }
  .near-row strong{
    font-size:15px;
  }
  .near-row{
    align-items:flex-start;
  }
  .nectar-floating-newsletter--purple{
    left:12px!important;
    right:12px!important;
    bottom:12px!important;
    width:auto!important;
    max-height:none!important;
    overflow:hidden!important;
  }
  .nectar-floating-newsletter--purple .nectar-floating-newsletter__inner{
    padding:20px 18px 18px!important;
  }
  .nectar-floating-newsletter--purple .nectar-floating-newsletter__title{
    margin-right:26px!important;
    font-size:30px!important;
    line-height:1.02!important;
  }
  .nectar-floating-newsletter--purple .nectar-floating-newsletter__text{
    margin-bottom:18px!important;
    font-size:14px!important;
  }
  #floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__form{
    grid-template-columns:minmax(0,1fr) auto!important;
    margin-bottom:16px!important;
    border-radius:8px!important;
    direction:ltr!important;
  }
  #floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__input{
    height:52px!important;
    min-height:52px!important;
    padding:0 14px!important;
    border-radius:0!important;
    font-size:10px!important;
    line-height:52px!important;
    letter-spacing:.08em!important;
  }
  #floating-newsletter.nectar-floating-newsletter--purple .nectar-floating-newsletter__submit{
    grid-column:2!important;
    justify-self:end!important;
    width:auto!important;
    min-width:126px!important;
    max-width:42vw!important;
    height:52px!important;
    min-height:52px!important;
    padding:0 14px!important;
    border-left:1px solid rgba(218,197,239,.62)!important;
    border-radius:0!important;
    font-size:10px!important;
    letter-spacing:.1em!important;
  }
}
`;
