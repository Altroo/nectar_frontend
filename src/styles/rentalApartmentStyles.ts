export const rentalApartmentStyles = `
.rental-card-image{position:relative}
.rental-card-status{
  position:absolute;
  top:16px;
  left:16px;
  z-index:1;
  padding:10px 18px;
  border-radius:999px;
  background:rgba(151,96,53,.95);
  color:#fff;
  font-size:15px;
  font-weight:700;
  line-height:1;
  box-shadow:0 5px 16px rgba(55,36,23,.14);
}
.rental-card-favorite{
  position:absolute;
  top:14px;
  right:14px;
  z-index:1;
  width:48px;
  height:48px;
  display:grid;
  place-items:center;
  padding:0;
  border:0;
  border-radius:50%;
  background:rgba(71,49,34,.62);
  color:#fff;
  cursor:pointer;
  backdrop-filter:blur(6px);
  box-shadow:0 5px 16px rgba(55,36,23,.14);
  transition:transform .2s ease,background .2s ease,color .2s ease;
}
.rental-card-favorite:hover{transform:scale(1.05);background:rgba(71,49,34,.82)}
.rental-card-favorite:focus-visible{outline:3px solid #fff;outline-offset:2px}
.rental-card-favorite.is-favorite{background:#fff;color:#9b563f}
.rental-card-favorite svg{width:29px;height:29px;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
html[dir='rtl'] .rental-card-status{left:auto;right:16px}
html[dir='rtl'] .rental-card-favorite{right:auto;left:14px}
@media(max-width:640px){
  .rental-card-status{top:13px;left:13px;padding:9px 15px;font-size:13px}
  .rental-card-favorite{top:11px;right:11px;width:44px;height:44px}
  .rental-card-favorite svg{width:26px;height:26px}
  html[dir='rtl'] .rental-card-status{left:auto;right:13px}
  html[dir='rtl'] .rental-card-favorite{right:auto;left:11px}
}
`;
