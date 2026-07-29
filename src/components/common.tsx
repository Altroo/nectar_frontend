'use client';

import { useState } from 'react';
import type { SiteContact } from '@/types/site';
import { useTranslation, setLanguage } from '@/i18n/client';
import { localizeContact, type LanguageCode } from '@/i18n/translations';

export const socialLinks = {
	nectarInstagram: 'https://www.instagram.com/nectar.immobiliere/',
	nectarTikTok: 'https://www.tiktok.com/@nectar.immobiliere?lang=fr',
	nectarYoutube: 'https://www.youtube.com/@Nectar.Immobili%C3%A8re',
	purplePearlInstagram: 'https://www.instagram.com/purplepearl.tanger/',
	purplePearlTikTok: 'https://www.tiktok.com/@purplepearl.tanger?lang=fr',
};

const contactEmail = 'contact@nectar.ma';

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

const FloatingWhatsAppButton = ({ contact, variant }: { contact: SiteContact; variant?: 'purple' }) => (
	<a aria-label="WhatsApp" className={`nectar-floating-whatsapp${variant === 'purple' ? ' nectar-floating-whatsapp--purple' : ''}`} href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
		<svg aria-hidden="true" viewBox="0 0 32 32">
			<path d="M16.02 4.8c-6.18 0-11.2 4.94-11.2 11.04 0 2.1.6 4.08 1.66 5.76L4.8 27.2l5.84-1.52a11.35 11.35 0 0 0 5.38 1.36c6.18 0 11.2-4.94 11.2-11.04S22.2 4.8 16.02 4.8Zm0 20.3c-1.8 0-3.5-.5-4.98-1.42l-.36-.22-3.46.9.94-3.3-.24-.38a9.03 9.03 0 0 1-1.48-4.96c0-5.02 4.28-9.1 9.58-9.1 5.28 0 9.58 4.08 9.58 9.1 0 5.02-4.3 9.08-9.58 9.08Zm5.48-6.82c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.62-.94-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.04 1.02-1.04 2.48 0 1.46 1.08 2.88 1.24 3.08.14.2 2.12 3.2 5.14 4.48.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z" />
		</svg>
	</a>
);

const InstagramIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<rect fill="none" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" width="18" x="3" y="3" />
		<circle cx="12" cy="12" fill="none" r="4.2" stroke="currentColor" strokeWidth="1.8" />
		<circle cx="17.4" cy="6.7" fill="currentColor" r="1.1" />
	</svg>
);

const TikTokIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d="M14.5 4v10.1a4.4 4.4 0 1 1-3.8-4.36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
		<path d="M14.5 4c.55 2.9 2.2 4.45 5 4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
	</svg>
);

const YouTubeIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" fill="currentColor" />
	</svg>
);

const WhatsAppIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 32 32">
		<path d="M16.02 4.8c-6.18 0-11.2 4.94-11.2 11.04 0 2.1.6 4.08 1.66 5.76L4.8 27.2l5.84-1.52a11.35 11.35 0 0 0 5.38 1.36c6.18 0 11.2-4.94 11.2-11.04S22.2 4.8 16.02 4.8Zm0 20.3c-1.8 0-3.5-.5-4.98-1.42l-.36-.22-3.46.9.94-3.3-.24-.38a9.03 9.03 0 0 1-1.48-4.96c0-5.02 4.28-9.1 9.58-9.1 5.28 0 9.58 4.08 9.58 9.1 0 5.02-4.3 9.08-9.58 9.08Zm5.48-6.82c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.62-.94-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.04 1.02-1.04 2.48 0 1.46 1.08 2.88 1.24 3.08.14.2 2.12 3.2 5.14 4.48.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z" fill="currentColor" />
	</svg>
);



export const MainHeader = () => {
	const { t } = useTranslation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const closeMobileMenu = () => setMobileOpen(false);

	return (
		<>
			<header className={`sunset-nav nectar-fixed-navbar${mobileOpen ? ' is-mobile-open' : ''}`}>
				<a aria-label="Nectar immobilière" className="sunset-logo nectar-fixed-logo" href="/#agence" onClick={closeMobileMenu}>
					<img alt="Logo Nectar immobilière" className="nectar-logo-image" src="/assets/nectar-logo-navbar.png" />
				</a>
				<nav id="nectar-main-menu" aria-label={t('nav.main')} className={`sunset-menu nectar-fixed-menu${mobileOpen ? ' is-open' : ''}`}>
					<a href="/#agence" onClick={closeMobileMenu}>
						{t('nav.home')}
					</a>
					<a href="/#apropos" onClick={closeMobileMenu}>
						{t('nav.about')}
					</a>
					<div className="nectar-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.sale')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/vente-appartement" onClick={closeMobileMenu}>
								{t('nav.apartment')}
							</a>
						</div>
					</div>
					<div className="nectar-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.rent')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/location-appartement" onClick={closeMobileMenu}>
								{t('nav.apartment')}
							</a>
							<a href="/location-local" onClick={closeMobileMenu}>
								{t('nav.commercial')}
							</a>
							<a href="/evenement" onClick={closeMobileMenu}>
								{t('nav.event')}
							</a>
						</div>
					</div>
					<div className="nectar-dropdown nectar-promo-dropdown">
						<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
							{t('nav.promotion')} <span>⌄</span>
						</button>
						<div className="nectar-dropdown-menu">
							<a href="/purple-pearl" onClick={closeMobileMenu}>
								Purple Pearl
							</a>
						</div>
					</div>
					<a href="/guide-tanger" onClick={closeMobileMenu}>
						{t('nav.guide')}
					</a>
					<a href="/#contact" onClick={closeMobileMenu}>
						{t('nav.contact')}
					</a>
					<LanguageSwitcher />
				</nav>
				<button aria-controls="nectar-main-menu" aria-expanded={mobileOpen} aria-label={t('nav.openMenu')} className="nectar-mobile-toggle nectar-fixed-toggle" type="button" onClick={() => setMobileOpen((value) => !value)}>
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
	const [mobileOpen, setMobileOpen] = useState(false);
	const closeMobileMenu = () => setMobileOpen(false);

	return (
		<>
			<header className={`site-header${mobileOpen ? ' is-mobile-open' : ''}`}>
				<div className="container nav-wrap">
					<a className="brand" href="/" onClick={closeMobileMenu}>
						<img src="/assets/nectar-logo-navbar.png" alt="Nectar immobilière" />
					</a>
					<nav id="purple-main-menu" className={`main-nav${mobileOpen ? ' is-open' : ''}`} aria-label={t('nav.main')}>
						<a href="/" onClick={closeMobileMenu}>
							{t('nav.home')}
						</a>
						<a href="/#apropos" onClick={closeMobileMenu}>
							{t('nav.about')}
						</a>
						<div className="nectar-dropdown">
							<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
								{t('nav.sale')} <span>⌄</span>
							</button>
							<div className="nectar-dropdown-menu">
								<a href="/vente-appartement" onClick={closeMobileMenu}>
									{t('nav.apartment')}
								</a>
								<a href="/vente-local" onClick={closeMobileMenu}>
									{t('nav.commercial')}
								</a>
							</div>
						</div>
						<div className="nectar-dropdown">
							<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
								{t('nav.rent')} <span>⌄</span>
							</button>
							<div className="nectar-dropdown-menu">
								<a href="/location-appartement" onClick={closeMobileMenu}>
									{t('nav.apartment')}
								</a>
								<a href="/location-local" onClick={closeMobileMenu}>
									{t('nav.commercial')}
								</a>
								<a href="/evenement" onClick={closeMobileMenu}>
									{t('nav.event')}
								</a>
							</div>
						</div>
						<div className="nectar-dropdown nectar-promo-dropdown">
							<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
								{t('nav.promotion')} <span>⌄</span>
							</button>
							<div className="nectar-dropdown-menu">
								<a href="/purple-pearl" onClick={closeMobileMenu}>
									Purple Pearl
								</a>
							</div>
						</div>
						<a href="/guide-tanger" onClick={closeMobileMenu}>
							{t('nav.guide')}
						</a>
						<a href="/#contact" onClick={closeMobileMenu}>
							{t('nav.contact')}
						</a>
					</nav>
					<LanguageSwitcher className="lang-switch" />
					<button aria-controls="purple-main-menu" aria-expanded={mobileOpen} aria-label={t('nav.openMenu')} className="purple-mobile-toggle" type="button" onClick={() => setMobileOpen((value) => !value)}>
						<span />
						<span />
						<span />
					</button>
				</div>
			</header>
		</>
	);
};

export const LinkedFooter = ({ contact }: { contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const localizedContact = localizeContact(language, contact);

	return (
		<>
			<footer className="nectar-linked-footer">
				<div className="nectar-linked-footer__inner">
					<div className="nectar-linked-footer__grid">
						<div className="nectar-linked-footer__brand">
							<a href="/#agence">
								<strong>Nectar</strong>
								<span>Immobilière</span>
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
							<p>{localizedContact.address}</p>
							<p dir="ltr">{localizedContact.phone_display}</p>
							<a dir="ltr" href={`mailto:${contactEmail}`}>
								{contactEmail}
							</a>
							<div className="nectar-linked-footer__socials">
								<a aria-label="Instagram Nectar immobilière" href={socialLinks.nectarInstagram} rel="noopener" target="_blank">
									<InstagramIcon />
								</a>
								<a aria-label="TikTok Nectar immobilière" href={socialLinks.nectarTikTok} rel="noopener" target="_blank">
									<TikTokIcon />
								</a>
								<a aria-label="YouTube Nectar immobilière" href={socialLinks.nectarYoutube} rel="noopener" target="_blank">
									<YouTubeIcon />
								</a>
								<a aria-label="WhatsApp Nectar immobilière" href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
									<WhatsAppIcon />
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
			<FloatingWhatsAppButton contact={contact} />
		</>
	);
};

export const PurplePearlFooter = ({ contact }: { contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const localizedContact = localizeContact(language, contact);

	return (
		<>
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
							<p>{localizedContact.address}</p>
							<p dir="ltr">{localizedContact.phone_display}</p>
							<a dir="ltr" href={`mailto:${contactEmail}`}>
								{contactEmail}
							</a>
							<div className="nectar-linked-footer__socials">
								<a aria-label="Instagram Purple Pearl" href={socialLinks.purplePearlInstagram} rel="noopener" target="_blank">
									<InstagramIcon />
								</a>
								<a aria-label="TikTok Purple Pearl" href={socialLinks.purplePearlTikTok} rel="noopener" target="_blank">
									<TikTokIcon />
								</a>
								<a aria-label="WhatsApp Purple Pearl" href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
									<WhatsAppIcon />
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
			<FloatingWhatsAppButton contact={contact} variant="purple" />
		</>
	);
};
