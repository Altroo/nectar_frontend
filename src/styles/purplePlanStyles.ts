export const purplePlanStyles = `
.plan-version-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:18px;
  padding:18px;
  background:#fff;
}
.plan-version{
  display:grid;
  grid-template-rows:auto 1fr;
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
.plan-version-media{
  display:flex;
  align-items:center;
  justify-content:center;
  aspect-ratio:1 / 1;
  min-height:0;
  background:#fff;
  overflow:hidden;
}
.plan-version img{
  width:100%;
  height:100%;
  object-fit:contain;
  object-position:center center;
  background:#fff;
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
