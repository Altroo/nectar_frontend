'use client';

import type { SiteContact } from '@/types/site';
import { useTranslation, setLanguage } from '@/i18n/client';
import type { LanguageCode } from '@/i18n/translations';

export const StyleBlock = ({ css }: { css: string }) => <style dangerouslySetInnerHTML={{ __html: css }} />;

export const socialLinks = {
	nectarInstagram: 'https://www.instagram.com/nectar.immobiliere/',
	nectarTikTok: 'https://www.tiktok.com/@nectar.immobiliere?lang=fr',
	purplePearlInstagram: 'https://www.instagram.com/purplepearl.tanger/',
	purplePearlTikTok: 'https://www.tiktok.com/@purplepearl.tanger?lang=fr',
};

export const LanguageSwitcher = ({ className = 'nectar-lang-switcher' }: { className?: string }) => {
	const { language, languages, t } = useTranslation();

	return (
		<div aria-label={t('nav.language')} className={className}>
			{languages.map((item) => (
				<button aria-pressed={item.code === language} className={item.code === language ? 'is-active active' : ''} data-lang={item.code} key={item.code} type="button" onClick={() => setLanguage(item.code as LanguageCode)}>
					{item.short}
				</button>
			))}
		</div>
	);
};

const mainHeaderStyles = `
header.nectar-fixed-navbar.sunset-nav{
  position:fixed!important;
  top:0!important;
  left:0!important;
  right:0!important;
  z-index:9999!important;
  height:92px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  gap:28px!important;
  padding:0 46px!important;
  background:rgba(47,32,23,.88)!important;
  border-bottom:1px solid rgba(245,245,243,.12)!important;
  backdrop-filter:blur(14px)!important;
  box-sizing:border-box!important;
  color:#fff!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-logo{
  position:relative!important;
  inset:auto!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  flex:0 0 auto!important;
  min-width:132px!important;
  width:132px!important;
  height:auto!important;
  margin:0!important;
  padding:0!important;
  transform:none!important;
  color:#fff!important;
  text-decoration:none!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-logo-image{
  display:block!important;
  width:132px!important;
  max-width:100%!important;
  height:auto!important;
  max-height:50px!important;
  object-fit:contain!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu{
  position:static!important;
  inset:auto!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  flex-direction:row!important;
  flex-wrap:nowrap!important;
  flex:1 1 auto!important;
  gap:34px!important;
  min-width:0!important;
  width:auto!important;
  max-width:none!important;
  height:39px!important;
  margin:0!important;
  padding:0!important;
  transform:none!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu > a,
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu > .nectar-dropdown,
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu > .nectar-lang-switcher{
  flex:0 0 auto!important;
  width:auto!important;
  max-width:none!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu a,
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown-btn{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  box-sizing:border-box!important;
  height:39px!important;
  width:auto!important;
  max-width:none!important;
  margin:0!important;
  color:#F5F5F3!important;
  text-decoration:none!important;
  background:transparent!important;
  border:0!important;
  font-family:Manrope,Arial,sans-serif!important;
  font-size:15px!important;
  font-weight:600!important;
  line-height:15px!important;
  cursor:pointer!important;
  white-space:nowrap!important;
  padding:12px 4px!important;
  gap:7px!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown{
  position:relative!important;
  inset:auto!important;
  display:inline-flex!important;
  align-items:center!important;
  flex-direction:row!important;
  transform:none!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown-menu{
  position:absolute!important;
  top:calc(100% - 1px)!important;
  left:50%!important;
  min-width:220px!important;
  padding:10px!important;
  background:#F5F1E8!important;
  border:1px solid rgba(73,52,37,.16)!important;
  box-shadow:0 22px 48px rgba(0,0,0,.22)!important;
  opacity:0!important;
  pointer-events:none!important;
  transform:translateX(-50%)!important;
  visibility:hidden!important;
  z-index:10000!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown:hover .nectar-dropdown-menu,
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown:focus-within .nectar-dropdown-menu{
  opacity:1!important;
  pointer-events:auto!important;
  transform:translateX(-50%)!important;
  visibility:visible!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown-menu a{
  display:block!important;
  height:auto!important;
  padding:13px 18px!important;
  border-bottom:1px solid rgba(73,52,37,.10)!important;
  color:#493425!important;
  font-size:15px!important;
  line-height:1.2!important;
  white-space:nowrap!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown-menu a:last-child{
  border-bottom:0!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-dropdown-menu a:hover{
  background:#E5E2DD!important;
  color:#493425!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-lang-switcher{
  position:static!important;
  inset:auto!important;
  z-index:auto!important;
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  box-sizing:border-box!important;
  gap:6px!important;
  flex:0 0 auto!important;
  margin-left:14px!important;
  margin-right:0!important;
  padding:5px!important;
  border:1px solid rgba(255,255,255,.18)!important;
  border-radius:999px!important;
  background:rgba(73,52,37,.88)!important;
  box-shadow:none!important;
  transform:none!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-lang-switcher button{
  border:0!important;
  border-radius:999px!important;
  background:transparent!important;
  color:#F5F0EA!important;
  cursor:pointer!important;
  font:700 11px/1 Arial,sans-serif!important;
  letter-spacing:.08em!important;
  padding:8px 9px!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-lang-switcher button.is-active{
  background:#F5F0EA!important;
  color:#493425!important;
}
.lang-switch button{
  width:38px!important;
  height:38px!important;
  border:0!important;
  border-radius:50%!important;
  display:grid!important;
  place-items:center!important;
  background:transparent!important;
  color:#fff!important;
  font-size:14px!important;
  font-weight:700!important;
  cursor:pointer!important;
}
.lang-switch button.is-active,
.lang-switch button.active{
  background:#fff!important;
  color:var(--pp-mid)!important;
}
header.nectar-fixed-navbar.sunset-nav .nectar-mobile-toggle{
  display:none!important;
}
@media(max-width:900px){
  header.nectar-fixed-navbar.sunset-nav{
    padding:0 22px!important;
  }
  header.nectar-fixed-navbar.sunset-nav .nectar-fixed-logo{
    min-width:118px!important;
    width:118px!important;
  }
  header.nectar-fixed-navbar.sunset-nav .nectar-logo-image{
    width:118px!important;
    max-height:44px!important;
  }
}
@media(max-width:720px){
  header.nectar-fixed-navbar.sunset-nav{
    height:auto!important;
    padding:18px 22px!important;
    flex-wrap:wrap!important;
  }
  header.nectar-fixed-navbar.sunset-nav .nectar-fixed-menu{
    position:static!important;
    inset:auto!important;
    order:3!important;
    flex:0 0 100%!important;
    justify-content:flex-start!important;
    flex-direction:row!important;
    flex-wrap:nowrap!important;
    overflow:auto!important;
    width:100%!important;
    max-width:100%!important;
    height:auto!important;
    margin:0!important;
    padding:12px 0 0!important;
    transform:none!important;
  }
}
`;

const linkedFooterStyles = `
.nectar-linked-footer{
  background:#241813!important;
  color:#F5F1E8!important;
  padding:62px clamp(24px,5vw,76px) 28px!important;
  margin:0!important;
  width:100%!important;
  box-sizing:border-box!important;
  font-family:Manrope,Arial,sans-serif!important;
}
.nectar-linked-footer a{
  color:inherit!important;
  text-decoration:none!important;
}
.nectar-linked-footer__inner{
  max-width:1240px!important;
  margin:0 auto!important;
}
.nectar-linked-footer__grid{
  display:grid!important;
  grid-template-columns:1.25fr .9fr .95fr .95fr 1.05fr!important;
  gap:38px!important;
  align-items:start!important;
}
.nectar-linked-footer__brand strong{
  display:block!important;
  font-family:Georgia,'Times New Roman',serif!important;
  font-size:42px!important;
  letter-spacing:.12em!important;
  line-height:1!important;
  text-transform:uppercase!important;
  color:#fff!important;
}
.nectar-linked-footer__brand span{
  display:block!important;
  margin-top:8px!important;
  font-size:10px!important;
  letter-spacing:.24em!important;
  text-transform:uppercase!important;
  color:#C7A982!important;
}
.nectar-linked-footer__brand p{
  margin:24px 0 0!important;
  max-width:330px!important;
  color:#BBA793!important;
  line-height:1.7!important;
  font-size:14px!important;
}
.nectar-linked-footer__col{
  display:flex!important;
  flex-direction:column!important;
  gap:12px!important;
}
.nectar-linked-footer__col h4{
  margin:0 0 10px!important;
  color:#F5F1E8!important;
  font-size:11px!important;
  letter-spacing:.18em!important;
  text-transform:uppercase!important;
  font-weight:700!important;
}
.nectar-linked-footer__col a,
.nectar-linked-footer__col p{
  margin:0!important;
  color:#BBA793!important;
  font-size:14px!important;
  line-height:1.55!important;
}
.nectar-linked-footer__col a:hover{
  color:#fff!important;
}
.nectar-linked-footer__socials{
  display:flex!important;
  flex-wrap:wrap!important;
  gap:10px!important;
  margin-top:6px!important;
}
.nectar-linked-footer__socials a{
  border:1px solid rgba(245,241,232,.22)!important;
  border-radius:999px!important;
  padding:9px 12px!important;
  font-size:11px!important;
  letter-spacing:.12em!important;
  text-transform:uppercase!important;
  color:#F5F1E8!important;
}
.nectar-linked-footer__bottom{
  border-top:1px solid rgba(245,241,232,.14)!important;
  margin-top:44px!important;
  padding-top:22px!important;
  display:flex!important;
  justify-content:space-between!important;
  gap:18px!important;
  color:#BBA793!important;
  font-size:12px!important;
}
.nectar-linked-footer--purple{
  background:linear-gradient(135deg,#2f1747 0%,#4f2e79 52%,#7f61b7 100%)!important;
}
.nectar-linked-footer--purple .nectar-linked-footer__brand span{
  color:#efe5ff!important;
}
.nectar-linked-footer--purple .nectar-linked-footer__brand p,
.nectar-linked-footer--purple .nectar-linked-footer__col a,
.nectar-linked-footer--purple .nectar-linked-footer__col p,
.nectar-linked-footer--purple .nectar-linked-footer__bottom{
  color:#d8c9ee!important;
}
.nectar-linked-footer--purple .nectar-linked-footer__socials a:hover{
  background:#fff!important;
  color:#4f2e79!important;
}
@media(max-width:980px){
  .nectar-linked-footer__grid{
    grid-template-columns:1fr 1fr!important;
    gap:32px!important;
  }
  .nectar-linked-footer__brand{
    grid-column:1/-1!important;
  }
}
@media(max-width:620px){
  .nectar-linked-footer__grid{
    grid-template-columns:1fr!important;
  }
  .nectar-linked-footer__bottom{
    flex-direction:column!important;
  }
  .nectar-linked-footer{
    padding:46px 22px 26px!important;
  }
}
`;

export const MainHeader = () => {
	const { t } = useTranslation();

	return (
		<>
			<StyleBlock css={mainHeaderStyles} />
			<header className="sunset-nav nectar-fixed-navbar">
				<a aria-label="Nectar immobilier" className="sunset-logo nectar-fixed-logo" href="/#agence">
					<img alt="Logo Nectar immobilier" className="nectar-logo-image" src="/assets/nectar-logo-navbar.png" />
				</a>
				<nav aria-label={t('nav.main')} className="sunset-menu nectar-fixed-menu">
					<a href="/#agence">{t('nav.home')}</a>
					<a href="/#apropos">{t('nav.about')}</a>
					<div className="nectar-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.sale')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/vente-appartement">{t('nav.apartment')}</a>
						</div>
					</div>
					<div className="nectar-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.rent')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/location-appartement">{t('nav.apartment')}</a>
							<a href="/location-local">{t('nav.commercial')}</a>
							<a href="/evenement">{t('nav.event')}</a>
						</div>
					</div>
					<div className="nectar-dropdown nectar-promo-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.promotion')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/purple-pearl">Purple Pearl</a>
						</div>
					</div>
					<a href="/guide-tanger">{t('nav.guide')}</a>
					<a href="/#contact">{t('nav.contact')}</a>
					<LanguageSwitcher />
				</nav>
				<button aria-expanded="false" aria-label={t('nav.openMenu')} className="nectar-mobile-toggle nectar-fixed-toggle" type="button">
					<span />
					<span />
					<span />
				</button>
			</header>
		</>
	);
};

export const PurpleHeader = () => {
	const { t } = useTranslation();

	return (
		<>
			<StyleBlock css={mainHeaderStyles} />
			<header className="site-header">
				<div className="container nav-wrap">
					<a className="brand" href="/">
						<img src="/assets/nectar-logo-navbar.png" alt="Nectar immobilier" />
					</a>
					<nav className="main-nav" aria-label={t('nav.main')}>
						<a href="/">{t('nav.home')}</a>
						<a href="/#apropos">{t('nav.about')}</a>
						<a href="/vente-appartement">{t('nav.sale')}</a>
						<a href="/location-appartement">{t('nav.rent')}</a>
						<a href="/purple-pearl">{t('nav.promotion')}</a>
						<a href="/guide-tanger">{t('nav.guide')}</a>
						<a href="/#contact">{t('nav.contact')}</a>
					</nav>
					<LanguageSwitcher className="lang-switch" />
				</div>
			</header>
		</>
	);
};

export const LinkedFooter = ({ contact }: { contact: SiteContact }) => {
	const { t } = useTranslation();

	return (
		<>
			<StyleBlock css={linkedFooterStyles} />
			<footer className="nectar-linked-footer">
				<div className="nectar-linked-footer__inner">
					<div className="nectar-linked-footer__grid">
						<div className="nectar-linked-footer__brand">
							<a href="/#agence">
								<strong>Nectar</strong>
								<span>Immobilier</span>
							</a>
							<p>{t('footer.brandLine')}</p>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.navigation')}</h4>
							<a href="/#agence">{t('nav.home')}</a>
							<a href="/#apropos">{t('nav.about')}</a>
							<a href="/#processus">{t('footer.process')}</a>
							<a href="/guide-tanger">{t('nav.guide')}</a>
							<a href="/#contact">{t('nav.contact')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.saleRent')}</h4>
							<a href="/vente-appartement">{t('footer.saleApartments')}</a>
							<a href="/location-appartement">{t('footer.rentApartments')}</a>
							<a href="/location-local">{t('footer.rentCommercial')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.promotion')}</h4>
							<a href="/purple-pearl">Purple Pearl</a>
							<a href="/#contact">{t('footer.requestInfo')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.contact')}</h4>
							<p>{contact.address}</p>
							<p>{contact.phone_display}</p>
							<p>{contact.email_display}</p>
							<div className="nectar-linked-footer__socials">
								<a aria-label="Instagram Nectar immobilier" href={socialLinks.nectarInstagram} rel="noopener" target="_blank">
									Instagram
								</a>
								<a aria-label="TikTok Nectar immobilier" href={socialLinks.nectarTikTok} rel="noopener" target="_blank">
									TikTok
								</a>
								<a href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
									WhatsApp
								</a>
							</div>
						</div>
					</div>
					<div className="nectar-linked-footer__bottom">
						<span>{t('footer.rights')}</span>
						<span>
							<a href="/purple-pearl">{t('footer.promotionLink')}</a> · <a href="/#contact">{t('footer.contactUs')}</a>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export const PurplePearlFooter = ({ contact }: { contact: SiteContact }) => {
	const { t } = useTranslation();

	return (
		<>
			<StyleBlock css={linkedFooterStyles} />
			<footer className="nectar-linked-footer nectar-linked-footer--purple">
				<div className="nectar-linked-footer__inner">
					<div className="nectar-linked-footer__grid">
						<div className="nectar-linked-footer__brand">
							<a href="/purple-pearl">
								<strong>Purple Pearl</strong>
								<span>Tanger</span>
							</a>
							<p>{t('footer.purpleLine')}</p>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.navigation')}</h4>
							<a href="/">{t('nav.home')}</a>
							<a href="/#apropos">{t('nav.about')}</a>
							<a href="/guide-tanger">{t('nav.guide')}</a>
							<a href="/#contact">{t('nav.contact')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>Purple Pearl</h4>
							<a href="/purple-pearl#voir-projet">{t('footer.description')}</a>
							<a href="/purple-pearl#adresse">{t('footer.address')}</a>
							<a href="/purple-pearl#proximite">{t('footer.proximities')}</a>
							<a href="/purple-pearl#plans">{t('footer.plans')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.saleRent')}</h4>
							<a href="/vente-appartement">{t('footer.saleApartments')}</a>
							<a href="/location-appartement">{t('footer.rentApartments')}</a>
							<a href="/location-local">{t('footer.rentCommercial')}</a>
						</div>
						<div className="nectar-linked-footer__col">
							<h4>{t('footer.contact')}</h4>
							<p>{contact.address}</p>
							<p>{contact.phone_display}</p>
							<p>{contact.email_display}</p>
							<div className="nectar-linked-footer__socials">
								<a aria-label="Instagram Purple Pearl" href={socialLinks.purplePearlInstagram} rel="noopener" target="_blank">
									Instagram
								</a>
								<a aria-label="TikTok Purple Pearl" href={socialLinks.purplePearlTikTok} rel="noopener" target="_blank">
									TikTok
								</a>
								<a href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
									WhatsApp
								</a>
							</div>
						</div>
					</div>
					<div className="nectar-linked-footer__bottom">
						<span>{t('footer.purpleRights')}</span>
						<span>
							<a href="/purple-pearl#visite">{t('footer.visit')}</a> · <a href="/#contact">{t('footer.contactUs')}</a>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};
