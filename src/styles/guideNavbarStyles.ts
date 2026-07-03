export const guideNavbarStyles = `
.nav{
  display:grid!important;
  grid-template-columns:auto minmax(0,1fr)!important;
  column-gap:clamp(24px,4vw,48px)!important;
  align-items:center!important;
}
.nav .menu{
  min-width:0!important;
  display:flex!important;
  align-items:center!important;
  justify-content:flex-end!important;
  gap:clamp(12px,1.35vw,24px)!important;
  flex-wrap:nowrap!important;
}
.nav .menu > a,
.nav .drop,
.nav .nectar-lang-switcher{
  flex:0 0 auto!important;
}
.nav .menu a,
.nav .drop-btn{
  color:#F5F5F3!important;
  font-size:clamp(12px,.82vw,14px)!important;
  font-weight:600!important;
  line-height:1.1!important;
  white-space:nowrap!important;
}
.nav .drop{
  position:relative!important;
  display:inline-flex!important;
  align-items:center!important;
}
.nav .drop-btn{
  display:inline-flex!important;
  align-items:center!important;
  gap:4px!important;
  padding:10px 2px!important;
  border:0!important;
  background:transparent!important;
  cursor:pointer!important;
}
.nav .drop-panel{
  position:absolute!important;
  top:calc(100% - 1px)!important;
  left:50%!important;
  min-width:190px!important;
  padding:10px!important;
  background:#F5F1E8!important;
  border:1px solid rgba(73,52,37,.16)!important;
  box-shadow:0 22px 48px rgba(0,0,0,.22)!important;
  opacity:0!important;
  pointer-events:none!important;
  transform:translateX(-50%)!important;
  visibility:hidden!important;
  z-index:1000!important;
}
.nav .drop:hover .drop-panel,
.nav .drop:focus-within .drop-panel{
  opacity:1!important;
  pointer-events:auto!important;
  transform:translateX(-50%)!important;
  visibility:visible!important;
}
.nav .drop-panel a{
  display:block!important;
  padding:13px 14px!important;
  border-bottom:1px solid rgba(73,52,37,.08)!important;
  color:#493425!important;
  font-size:14px!important;
  line-height:1.2!important;
  white-space:nowrap!important;
}
.nav .drop-panel a:last-child{
  border-bottom:0!important;
}
.nav .drop-panel a:hover{
  background:#E5E2DD!important;
  color:#493425!important;
}
.nav .nectar-lang-switcher{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:4px!important;
  margin:0!important;
  padding:4px!important;
  border:1px solid rgba(255,255,255,.18)!important;
  border-radius:999px!important;
  background:rgba(73,52,37,.88)!important;
  box-shadow:none!important;
}
.nav .nectar-lang-switcher button{
  border:0!important;
  border-radius:999px!important;
  background:transparent!important;
  color:#F5F0EA!important;
  cursor:pointer!important;
  font-family:Arial,sans-serif!important;
  font-weight:700!important;
  line-height:1!important;
  padding:7px 8px!important;
  font-size:10px!important;
}
.nav .nectar-lang-switcher button.is-active{
  background:#F5F0EA!important;
  color:#493425!important;
}
@media(max-width:1120px){
  .nav{height:auto!important;padding:18px 22px!important;}
  .nav .menu{gap:10px!important;}
  .nav .menu a,.nav .drop-btn{font-size:12px!important;}
}
@media(max-width:950px){
  .nav .menu{display:none!important;}
}
`;
