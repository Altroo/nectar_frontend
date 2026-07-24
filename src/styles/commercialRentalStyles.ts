export const commercialRentalStyles = `
.cr-page{
  --cr-brown:#3e2d22;
  --cr-dark:#2b1d15;
  --cr-copper:#9b6d48;
  --cr-paper:#fbf8f4;
  --cr-card:#fffdfa;
  --cr-muted:#72675f;
  --cr-border:#e8ddd2;
  background:
    radial-gradient(circle at 90% 21%,rgba(255,255,255,.95),transparent 31%),
    var(--cr-paper);
  color:var(--cr-brown);
  font-family:Manrope,Arial,sans-serif;
}
.cr-page *{box-sizing:border-box}
.cr-container{width:min(1216px,calc(100% - 48px));margin:0 auto}
.cr-hero{
  min-height:500px;
  display:flex;
  align-items:center;
  padding:154px 0 64px;
  color:#fff;
  background:
    linear-gradient(90deg,rgba(38,25,17,.88) 0%,rgba(48,32,22,.68) 42%,rgba(48,32,22,.16) 78%),
    url('/assets/erasmus/erasmus-locaux-cover.png') center 60%/cover no-repeat;
}
.cr-hero__content{position:relative;z-index:1}
.cr-hero__breadcrumb{margin:0 0 22px;color:rgba(255,255,255,.75);font-size:12px;letter-spacing:.04em}
.cr-hero h1{max-width:660px;margin:0;font:400 clamp(48px,5.4vw,78px)/.98 Georgia,'Times New Roman',serif;letter-spacing:-.045em}
.cr-hero__description{max-width:560px;margin:22px 0 0;color:rgba(255,255,255,.9);font-size:17px;line-height:1.55}
.cr-hero__actions{display:flex;flex-wrap:wrap;gap:16px;margin-top:31px}
.cr-button{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:13px 24px;border:1px solid rgba(255,255,255,.62);color:#fff;text-decoration:none;font-size:13px;font-weight:600;transition:background .2s,color .2s,border-color .2s}
.cr-button svg,.cr-details-button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.cr-button--solid{background:rgba(43,29,21,.92);border-color:rgba(43,29,21,.92)}
.cr-button--outline{background:rgba(255,255,255,.05);backdrop-filter:blur(5px)}
.cr-button:hover{background:#fff;border-color:#fff;color:var(--cr-brown)}
.cr-intro{padding:42px 0 34px;border-top:3px solid #4c4037}
.cr-intro__grid{display:grid;grid-template-columns:minmax(330px,440px) 1fr;gap:42px;align-items:start}
.cr-intro__image{display:block;width:100%;height:340px;object-fit:cover;object-position:center 58%;border-radius:8px;box-shadow:0 8px 24px rgba(73,53,39,.06)}
.cr-intro__content{padding-top:5px}
.cr-eyebrow{margin:0 0 10px;color:#9a785e;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.cr-intro h2{margin:0;font:400 clamp(38px,4vw,51px)/1.05 Georgia,'Times New Roman',serif;letter-spacing:-.03em;color:#332820}
.cr-divider{display:block;width:38px;height:2px;margin:16px 0 18px;background:var(--cr-copper)}
.cr-intro__description{max-width:710px;margin:0;color:#5f554f;font-size:14px;line-height:1.55}
.cr-features{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}
.cr-feature{min-height:126px;display:flex;align-items:flex-start;gap:14px;padding:20px 16px;background:rgba(255,253,250,.84);border:1px solid var(--cr-border);border-radius:7px;box-shadow:0 8px 24px rgba(73,53,39,.035)}
.cr-feature__icon{width:34px;height:34px;flex:0 0 34px;fill:none;stroke:var(--cr-copper);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.cr-feature h3{margin:1px 0 7px;color:#332c27;font-size:14px;line-height:1.25}
.cr-feature p{margin:0;color:#837a73;font-size:11px;line-height:1.45}
.cr-main{padding:0 0 76px}
.cr-filters{display:grid;grid-template-columns:1.25fr 1fr 1fr 1fr auto;gap:13px;margin:0 0 26px;padding:16px 18px;background:rgba(255,253,250,.92);border:1px solid var(--cr-border);border-radius:8px;box-shadow:0 12px 34px rgba(73,53,39,.04)}
.cr-filter{min-width:0;display:flex;flex-direction:column;gap:7px;padding:0 12px;border:1px solid var(--cr-border);border-radius:5px;background:#fffdfa}
.cr-filter>span{padding-top:10px;color:#5f554f;font-size:10px;font-weight:600}
.cr-filter select,.cr-filter input{min-width:0;width:100%;height:31px;padding:0 27px 8px 0;border:0;background:transparent;color:#4b413a;font:500 12px/1.2 Manrope,Arial,sans-serif;outline:none}
.cr-filter select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235f554f' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-position:right 4px center;background-repeat:no-repeat}
.cr-filter--search>div{display:flex;align-items:center;gap:8px}
.cr-filter--search svg{width:17px;height:17px;flex:0 0 17px;margin-top:-7px;fill:none;stroke:#776d65;stroke-width:1.8;stroke-linecap:round}
.cr-filter--search input{padding-right:0}
.cr-filter-button{align-self:stretch;min-width:132px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 22px;border:1px solid var(--cr-brown);border-radius:5px;background:var(--cr-brown);color:#fff;cursor:pointer;font:600 12px/1 Manrope,Arial,sans-serif;transition:background .2s,color .2s}
.cr-filter-button:hover{background:#fff;color:var(--cr-brown)}
.cr-filter-button svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}
.cr-section-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:15px}
.cr-section-heading h2,.cr-activities h2{margin:0;font:400 clamp(28px,3vw,38px)/1.1 Georgia,'Times New Roman',serif;letter-spacing:-.025em;color:#332820}
.cr-carousel-shell{position:relative}
.cr-carousel-arrow{position:absolute;z-index:4;top:50%;width:64px;height:64px;display:grid;place-items:center;padding:0;border:1px solid var(--cr-border);border-radius:50%;background:rgba(255,253,250,.96);color:var(--cr-brown);box-shadow:0 12px 30px rgba(47,32,23,.18);cursor:pointer;transform:translateY(-50%);transition:background .2s,color .2s,box-shadow .2s}
.cr-carousel-arrow--left{left:-18px}
.cr-carousel-arrow--right{right:-18px}
.cr-carousel-arrow:hover{background:var(--cr-brown);color:#fff;box-shadow:0 14px 34px rgba(47,32,23,.24)}
.cr-carousel-arrow svg{width:27px;height:27px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.cr-gallery__footer>div:last-child button{width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--cr-border);border-radius:50%;background:#fffdfa;color:var(--cr-brown);cursor:pointer;transition:background .2s,color .2s}
.cr-gallery__footer>div:last-child button:hover{background:var(--cr-brown);color:#fff}
.cr-gallery__footer svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.cr-carousel{display:flex;gap:16px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;padding:1px 1px 8px}
.cr-carousel::-webkit-scrollbar{display:none}
.cr-property-card{flex:0 0 calc((100% - 32px)/3);min-width:0;overflow:hidden;scroll-snap-align:start;background:var(--cr-card);border:1px solid var(--cr-border);border-radius:8px;box-shadow:0 5px 18px rgba(73,53,39,.035)}
.cr-property-card__image-wrap{position:relative;height:224px;overflow:hidden;background:#d8cec3}
.cr-property-card__image{display:block;width:100%;height:100%;object-fit:cover;object-position:center 18%;transform:scale(1.002);transition:transform .45s ease}
.cr-property-card:hover .cr-property-card__image{transform:scale(1.035)}
.cr-property-card__status{position:absolute;top:15px;left:15px;padding:9px 16px;border-radius:999px;background:rgba(139,91,53,.94);color:#fff;font-size:11px;font-weight:600}
.cr-favorite{position:absolute;top:13px;right:13px;width:42px;height:42px;display:grid;place-items:center;padding:0;border:0;border-radius:50%;background:rgba(35,27,23,.36);color:#fff;cursor:pointer;backdrop-filter:blur(5px)}
.cr-favorite svg{width:25px;height:25px;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.cr-favorite.is-favorite{background:#fff;color:#9b563f}
.cr-property-card__body{padding:20px 16px 15px}
.cr-property-card h3{margin:0 0 9px;font:400 29px/1 Georgia,'Times New Roman',serif;letter-spacing:-.025em;color:#362a22}
.cr-property-card__location{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin:0 0 15px;color:#84766d;font-size:10px;text-transform:none}
.cr-property-card__location strong{color:#936b4e;font-size:10px;letter-spacing:.06em;text-transform:uppercase}
.cr-property-card__meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding:14px 0;border-top:1px solid var(--cr-border);border-bottom:1px solid var(--cr-border)}
.cr-property-card__meta>div{min-width:0;padding:0 11px;border-right:1px solid var(--cr-border)}
.cr-property-card__meta>div:first-child{padding-left:0}
.cr-property-card__meta>div:last-child{padding-right:0;border-right:0}
.cr-property-card__meta small{display:block;min-height:26px;margin-bottom:4px;color:#81766e;font-size:10px;line-height:1.3}
.cr-property-card__meta strong{display:block;overflow:hidden;color:#3b312b;font-size:15px;line-height:1.2;white-space:nowrap;text-align:center;text-overflow:ellipsis;unicode-bidi:isolate}
.cr-property-card__actions{display:grid;grid-template-columns:.88fr 1.45fr;gap:9px;margin-top:14px}
.cr-details-button,.cr-whatsapp-button{min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:4px;font:600 10px/1.15 Manrope,Arial,sans-serif;text-align:center;text-decoration:none}
.cr-details-button{padding:0 13px;border:1px solid var(--cr-brown);background:var(--cr-brown);color:#fff;cursor:pointer}
.cr-details-button:hover{background:#fff;color:var(--cr-brown)}
.cr-whatsapp-button{padding:0 10px;border:1px solid var(--cr-border);background:#fffdfa;color:#43372f}
.cr-whatsapp-button:hover{border-color:#8a725f}
.cr-whatsapp-button svg{width:22px;height:22px;flex:0 0 22px;fill:currentColor}
.cr-no-results{margin:0;padding:38px;border:1px solid var(--cr-border);background:#fffdfa;color:var(--cr-muted);text-align:center}
.cr-activities{margin-top:28px}
.cr-activities__heading{margin-bottom:14px}
.cr-activities__heading p{margin:7px 0 0;color:var(--cr-muted);font-size:13px}
.cr-activity-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.cr-activity-card{overflow:hidden;border:1px solid var(--cr-border);border-radius:7px;background:#fffdfa}
.cr-activity-card>img{display:block;width:100%;height:132px;object-fit:cover}
.cr-activity-card>img.cr-activity-card__image--top{object-position:center 8%}
.cr-activity-card>div{display:flex;align-items:center;gap:12px;min-height:95px;padding:13px 14px}
.cr-activity-card__icon{width:42px;height:42px;flex:0 0 42px;display:grid;place-items:center;border:1px solid var(--cr-border);border-radius:50%;background:#fff;color:#9a704f}
.cr-activity-card__icon svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.cr-activity-card h3{margin:0 0 5px;color:#40352e;font-size:13px}
.cr-activity-card p{margin:0;color:#81766e;font-size:10px;line-height:1.45}
.cr-gallery{position:fixed;inset:0;z-index:20000;display:grid;place-items:center;padding:24px}
.cr-gallery__backdrop{position:absolute;inset:0;border:0;background:rgba(29,20,15,.8);cursor:pointer}
.cr-gallery__window{position:relative;z-index:1;width:min(980px,100%);overflow:hidden;background:#fffdfa;border:1px solid rgba(255,255,255,.3);box-shadow:0 32px 90px rgba(0,0,0,.35)}
.cr-gallery__window>img{display:block;width:100%;height:min(72vh,720px);object-fit:contain;background:#241a14}
.cr-gallery__close{position:absolute;top:13px;right:13px;z-index:2;width:42px;height:42px;border:1px solid var(--cr-border);border-radius:50%;background:rgba(255,253,250,.95);color:var(--cr-brown);cursor:pointer;font:400 27px/1 Arial,sans-serif}
.cr-gallery__footer{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:15px 18px}
.cr-gallery__footer strong{display:block;font:400 24px/1.1 Georgia,'Times New Roman',serif}
.cr-gallery__footer span{display:block;margin-top:5px;color:var(--cr-muted);font-size:12px}
.cr-gallery__footer>div:last-child{display:flex;gap:8px}
html[dir='rtl'] .cr-property-card__status{left:auto;right:15px}
html[dir='rtl'] .cr-favorite{right:auto;left:13px}
html[dir='rtl'] .cr-property-card__meta>div{border-right:0;border-left:1px solid var(--cr-border)}
html[dir='rtl'] .cr-property-card__meta>div:first-child{padding-left:11px;padding-right:0}
html[dir='rtl'] .cr-property-card__meta>div:last-child{padding-right:11px;padding-left:0;border-left:0}
html[dir='rtl'] .cr-filter select{background-position:left 4px center;padding-left:27px;padding-right:0}
@media(max-width:1050px){
  .cr-intro__grid{grid-template-columns:minmax(300px,380px) 1fr;gap:28px}
  .cr-features{gap:10px}.cr-feature{padding:17px 12px;gap:10px}
  .cr-filters{grid-template-columns:1.2fr 1fr 1fr 1fr}.cr-filter-button{min-height:48px;grid-column:1/-1}
  .cr-property-card{flex-basis:calc((100% - 16px)/2)}
  .cr-activity-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:800px){
  .cr-container{width:min(100% - 36px,720px)}
  .cr-hero{min-height:500px;padding-top:126px;background-position:center 54%}
  .cr-intro__grid{grid-template-columns:1fr}.cr-intro__image{height:380px}
  .cr-filters{grid-template-columns:1fr 1fr}
}
@media(max-width:620px){
  .cr-container{width:calc(100% - 28px)}
  .cr-hero{min-height:560px;padding:112px 0 44px;background-position:center 54%}
  .cr-hero h1{font-size:46px}.cr-hero__description{font-size:15px}.cr-hero__actions{display:grid}
  .cr-button{width:100%}
  .cr-intro{padding-top:28px}.cr-intro__image{height:300px}.cr-intro h2{font-size:39px}
  .cr-features{grid-template-columns:1fr}.cr-feature{min-height:auto}
  .cr-filters{grid-template-columns:1fr;padding:13px}.cr-filter-button{grid-column:auto;min-height:50px}
  .cr-section-heading{align-items:flex-end}.cr-section-heading h2{font-size:29px}
  .cr-carousel-arrow{width:56px;height:56px}
  .cr-carousel-arrow--left{left:-7px}.cr-carousel-arrow--right{right:-7px}
  .cr-property-card{flex-basis:88%}.cr-property-card__image-wrap{height:210px}
  .cr-property-card__actions{grid-template-columns:1fr}.cr-details-button,.cr-whatsapp-button{min-height:46px}
  .cr-activity-grid{grid-template-columns:1fr}.cr-activity-card>img{height:160px}
  .cr-gallery{padding:12px}.cr-gallery__window>img{height:62vh}.cr-gallery__footer{align-items:flex-start}
}
`;
