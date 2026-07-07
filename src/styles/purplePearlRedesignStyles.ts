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
}

.site-header{
  position:fixed!important;
  top:24px!important;
  left:0!important;
  right:0!important;
  z-index:1000!important;
  background:transparent!important;
  border-bottom:0!important;
  backdrop-filter:none!important;
  font-family:Arial,Helvetica,sans-serif!important;
  pointer-events:none!important;
}
.site-header .nav-wrap{
  width:min(1548px,calc(100% - 128px))!important;
  min-height:104px!important;
  margin:0 auto!important;
  padding:0 34px 0 54px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  gap:34px!important;
  border:1px solid rgba(50,22,79,.06)!important;
  border-radius:14px!important;
  background:#fff!important;
  box-shadow:0 26px 80px rgba(50,22,79,.12)!important;
  backdrop-filter:none!important;
  pointer-events:auto!important;
}
.site-header .brand{
  display:flex!important;
  align-items:center!important;
  flex:0 0 auto!important;
}
.site-header .brand img{
  width:auto!important;
  height:auto!important;
  max-height:42px!important;
  object-fit:contain!important;
  filter:brightness(0) saturate(100%) invert(13%) sepia(41%) saturate(2586%) hue-rotate(257deg) brightness(88%) contrast(96%)!important;
}
.site-header .main-nav{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:40px!important;
  flex-wrap:wrap!important;
  flex:1 1 auto!important;
  color:var(--pp-plum)!important;
  font-weight:700!important;
}
.site-header .main-nav a{
  color:var(--pp-plum)!important;
  opacity:1!important;
  font-size:16px!important;
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
  height:auto!important;
  margin:0!important;
  padding:0!important;
  border:0!important;
  background:transparent!important;
  color:var(--pp-plum)!important;
  font:inherit!important;
  font-size:16px!important;
  font-weight:700!important;
  line-height:1!important;
  cursor:pointer!important;
  white-space:nowrap!important;
}
.site-header .nectar-dropdown-btn span{
  display:none!important;
}
.site-header .nectar-dropdown-menu{
  position:absolute!important;
  top:calc(100% + 35px)!important;
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
  gap:24px!important;
  flex:0 0 auto!important;
  position:relative!important;
  padding:0!important;
  border:0!important;
  border-radius:0!important;
  background:transparent!important;
}
.site-header .lang-switch:before{
  content:""!important;
  width:1px!important;
  height:28px!important;
  margin-right:18px!important;
  background:rgba(50,22,79,.16)!important;
}
.site-header .lang-switch button{
  width:46px!important;
  height:46px!important;
  min-width:46px!important;
  padding:0!important;
  border-radius:50%!important;
  color:var(--pp-plum)!important;
  background:transparent!important;
  font-size:14px!important;
  font-weight:800!important;
}
.site-header .lang-switch button.is-active,
.site-header .lang-switch button.active{
  background:var(--pp-plum)!important;
  color:#fff!important;
}

.pp-redesign{
  color:var(--pp-text);
  background:linear-gradient(180deg,#fbf8ff 0%,#fff 45%,#f6eefc 100%);
  font-family:Arial,Helvetica,sans-serif;
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
  min-height:920px;
  padding:152px 0 0;
  background:
    radial-gradient(circle at 13% 18%,rgba(255,255,255,.88) 0,rgba(255,255,255,.60) 30%,rgba(255,255,255,0) 54%),
    linear-gradient(115deg,#fbf7ff 0%,#f2eaf9 43%,#efe7f5 100%);
}
.pp-hero:before{
  content:"";
  position:absolute;
  inset:0;
  z-index:0;
  pointer-events:none;
  background:linear-gradient(90deg,rgba(255,255,255,.72) 0%,rgba(255,255,255,.56) 34%,rgba(255,255,255,0) 58%);
}
.pp-hero:after{
  content:"";
  position:absolute;
  left:-70px;
  bottom:-82px;
  z-index:1;
  width:280px;
  height:210px;
  border:1px solid rgba(255,255,255,.40);
  border-radius:55% 45% 60% 40%;
  opacity:.55;
  transform:rotate(18deg);
}
.pp-hero-grid{
  position:relative;
  z-index:2;
  display:grid;
  width:min(1548px,calc(100% - 128px));
  grid-template-columns:.42fr .58fr;
  align-items:end;
  gap:24px;
  min-height:768px;
}
.pp-hero-copy{
  min-width:0;
  align-self:center;
  padding:56px 0 90px 54px;
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
  gap:32px;
  color:var(--pp-plum);
  margin-bottom:36px;
  font-size:18px;
  letter-spacing:.34em;
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
  margin:0 0 28px;
  color:var(--pp-plum);
  font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(98px,8.4vw,152px);
  line-height:.86;
  font-weight:400;
  letter-spacing:0;
}
.pp-hero-text{
  position:relative;
  max-width:360px;
  margin:0 0 34px;
  padding-top:34px;
  color:#3e314d;
  font-size:clamp(23px,1.7vw,29px);
  line-height:1.55;
  letter-spacing:.13em;
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
  min-height:60px;
  min-width:255px;
  padding:0 32px;
  border-radius:999px;
  font-size:13px;
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
  min-width:292px;
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
  position:relative;
  align-self:end;
  min-height:730px;
  overflow:hidden;
  margin-right:-76px;
  border:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
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
  margin-top:-72px;
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
  grid-template-columns:.9fr 1.1fr;
  gap:34px;
  align-items:stretch;
}
.pp-card-copy{
  max-width:520px;
}
.pp-card-copy p:last-child{
  margin:0;
  color:#5f526d;
  font-size:16px;
  line-height:1.7;
}
.pp-stats{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,260px));
  justify-content:end;
  gap:16px;
  align-self:start;
  width:100%;
}
.pp-stat{
  min-width:0;
  min-height:92px;
  padding:14px 16px;
  border:1px solid var(--pp-border);
  border-radius:20px;
  background:linear-gradient(180deg,#fff,#fbf7ff);
}
.pp-stat > span{
  display:block;
  margin-bottom:7px;
  color:var(--pp-gold);
  font-size:16px;
  line-height:1;
}
.pp-stat strong{
  display:block;
  color:var(--pp-plum);
  font-size:18px;
  line-height:1.12;
  white-space:nowrap;
}
.pp-stat small{
  display:block;
  margin-top:5px;
  color:var(--pp-muted);
  font-size:12px;
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
  color:var(--pp-plum);
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
    width:calc(100% - 44px)!important;
    padding:0 24px!important;
  }
  .site-header .main-nav{
    gap:16px!important;
    font-size:14px!important;
  }
  .pp-hero{
    min-height:auto;
    padding:126px 0 64px;
  }
  .pp-hero-grid{
    width:calc(100% - 44px);
  }
  .pp-hero-copy{
    padding-left:0;
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
    top:14px!important;
  }
  .site-header .nav-wrap{
    width:calc(100% - 28px)!important;
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
    min-height:0;
  }
  .pp-stats,
  .pp-form-card .visit-grid{
    grid-template-columns:1fr;
  }
  .pp-plans-card .floor-filter{
    grid-template-columns:repeat(2,minmax(0,1fr));
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
    margin-top:-40px;
  }
  .pp-about-card,
  .pp-info-card,
  .pp-proximity,
  .pp-form-card{
    padding:24px;
  }
  .pp-stat{
    padding:14px 16px;
  }
  .pp-stat strong{
    font-size:18px;
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
}
`;
