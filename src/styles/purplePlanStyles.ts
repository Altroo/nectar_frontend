export const purplePlanStyles = `
.plan-version-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:18px;
  padding:18px;
  background:#fff;
  align-items:start;
}
.plan-version{
  min-width:0;
  overflow:hidden;
  border:1px solid var(--pp-line);
  border-radius:22px;
  background:#fcfaff;
}
.plan-version > span{
  display:flex;
  align-items:center;
  min-height:50px;
  padding:14px 18px;
  color:var(--pp-mid);
  font-size:12px;
  font-weight:800;
  letter-spacing:.14em;
  text-transform:uppercase;
  border-bottom:1px solid var(--pp-line);
  background:#fff;
}
.plan-version img{
  display:block;
  width:100%;
  height:auto;
  background:#fff;
}
.plan-version-media{
  min-width:0;
  background:#f0e4f0;
}
.floor-plan-panel[data-plan-panel="plan-sous-sol"] .plan-version-media,
.floor-plan-panel[data-plan-panel="plan-rdc-bas-magasins"] .plan-version-media{
  position:relative;
  display:grid;
  place-items:start center;
  aspect-ratio:574/690;
  overflow:hidden;
}
.floor-plan-panel[data-plan-panel="plan-sous-sol"] .plan-version-media img,
.floor-plan-panel[data-plan-panel="plan-rdc-bas-magasins"] .plan-version-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:contain;
  object-position:center top;
  background:transparent;
}
.plan-version--empty{
  display:grid;
  grid-template-rows:auto 1fr;
  min-height:260px;
}
.plan-version--empty p{
  display:grid;
  place-items:center;
  min-height:210px;
  margin:0;
  color:var(--pp-muted);
  font-size:16px;
  background:linear-gradient(135deg,#fff,#f4effc);
}
@media (max-width:900px){
  .plan-version-grid{grid-template-columns:1fr;}
}
`;
