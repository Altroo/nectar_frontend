import type { SiteContact } from '@/types/site';

export const StyleBlock = ({ css }: { css: string }) => <style dangerouslySetInnerHTML={{ __html: css }} />;

export const LanguageSwitcher = ({ className = 'nectar-lang-switcher' }: { className?: string }) => (
	<div aria-label="Language selector" className={className}>
		<button className="is-active" data-lang="fr" type="button">
			FR
		</button>
		<button data-lang="ar" type="button">
			AR
		</button>
		<button data-lang="en" type="button">
			EN
		</button>
		<button data-lang="es" type="button">
			ES
		</button>
	</div>
);

export const MainHeader = () => (
	<header className="sunset-nav nectar-fixed-navbar">
		<a aria-label="Nectar immobilier" className="sunset-logo nectar-fixed-logo" href="/#agence">
			<img alt="Logo Nectar immobilier" className="nectar-logo-image" src="/assets/nectar-logo-navbar.png" />
		</a>
		<nav aria-label="Navigation principale" className="sunset-menu nectar-fixed-menu">
			<a href="/#agence">Accueil</a>
			<a href="/#apropos">À propos</a>
			<div className="nectar-dropdown">
				<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
					Vente <span>⌄</span>
				</button>
				<div className="nectar-dropdown-menu">
					<a href="/vente-appartement">Appartement</a>
				</div>
			</div>
			<div className="nectar-dropdown">
				<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
					Location <span>⌄</span>
				</button>
				<div className="nectar-dropdown-menu">
					<a href="/location-appartement">Appartement</a>
					<a href="/location-local">Local</a>
					<a href="/evenement">Événement</a>
				</div>
			</div>
			<div className="nectar-dropdown nectar-promo-dropdown">
				<button aria-expanded="false" className="nectar-dropdown-btn" type="button">
					Promotion immobilière <span>⌄</span>
				</button>
				<div className="nectar-dropdown-menu">
					<a href="/purple-pearl">Purple Pearl</a>
				</div>
			</div>
			<a href="/guide-tanger">Guide</a>
			<a href="/#contact">Contact</a>
			<LanguageSwitcher />
		</nav>
		<button aria-expanded="false" aria-label="Ouvrir le menu" className="nectar-mobile-toggle nectar-fixed-toggle" type="button">
			<span />
			<span />
			<span />
		</button>
	</header>
);

export const SimpleHeader = () => (
	<header className="nav">
		<a aria-label="Nectar immobilier" className="logo" href="/">
			<img alt="Logo Nectar immobilier" className="nectar-logo-image" src="/assets/nectar-logo-navbar.png" />
		</a>
		<nav className="menu">
			<a href="/#agence">Accueil</a>
			<a href="/#apropos">À propos</a>
			<div className="drop">
				<button className="drop-btn" type="button">
					Vente⌄
				</button>
				<div className="drop-panel">
					<a href="/vente-appartement">Appartement</a>
				</div>
			</div>
			<div className="drop">
				<button className="drop-btn" type="button">
					Location⌄
				</button>
				<div className="drop-panel">
					<a href="/location-appartement">Appartement</a>
					<a href="/location-local">Local</a>
					<a href="/evenement">Événement</a>
				</div>
			</div>
			<a href="/guide-tanger">Guide</a>
			<a href="/#contact">Contact</a>
			<LanguageSwitcher />
		</nav>
	</header>
);

export const PurpleHeader = () => (
	<header className="site-header">
		<div className="container nav-wrap">
			<a className="brand" href="/">
				<img src="/assets/nectar-logo-navbar.png" alt="Nectar immobilier" />
			</a>
			<nav className="main-nav" aria-label="Navigation principale">
				<a href="/">Accueil</a>
				<a href="/#apropos">À propos</a>
				<a href="/vente-appartement">Vente</a>
				<a href="/location-appartement">Location</a>
				<a href="/purple-pearl">Promotion immobilière</a>
				<a href="/guide-tanger">Guide</a>
				<a href="/#contact">Contact</a>
			</nav>
			<div className="lang-switch" aria-label="Sélecteur de langue">
				<span className="active">FR</span>
				<span>AR</span>
				<span>EN</span>
				<span>ES</span>
			</div>
		</div>
	</header>
);

export const SimpleFooter = ({ contact }: { contact: SiteContact }) => (
	<footer className="footer">
		<strong>Nectar</strong>
		<span>
			{contact.address} · {contact.phone_display} · {contact.email_display}
		</span>
	</footer>
);

export const LinkedFooter = ({ contact }: { contact: SiteContact }) => (
	<footer className="nectar-linked-footer">
		<div className="nectar-linked-footer__inner">
			<div className="nectar-linked-footer__grid">
				<div className="nectar-linked-footer__brand">
					<a href="/#agence">
						<strong>Nectar</strong>
						<span>Immobilier</span>
					</a>
					<p>Agence immobilière à Tanger spécialisée dans la vente, la location et la promotion immobilière.</p>
				</div>
				<div className="nectar-linked-footer__col">
					<h4>Navigation</h4>
					<a href="/#agence">Accueil</a>
					<a href="/#apropos">À propos</a>
					<a href="/#processus">Notre processus</a>
					<a href="/guide-tanger">Guide</a>
					<a href="/#contact">Contact</a>
				</div>
				<div className="nectar-linked-footer__col">
					<h4>Vente &amp; location</h4>
					<a href="/vente-appartement">Vente appartements</a>
					<a href="/location-appartement">Location appartements</a>
					<a href="/location-local">Location locaux</a>
				</div>
				<div className="nectar-linked-footer__col">
					<h4>Promotion immobilière</h4>
					<a href="/purple-pearl">Purple Pearl</a>
					<a href="/#contact">Demander les informations</a>
				</div>
				<div className="nectar-linked-footer__col">
					<h4>Contact</h4>
					<p>{contact.address}</p>
					<p>{contact.phone_display}</p>
					<p>{contact.email_display}</p>
					<div className="nectar-linked-footer__socials">
						<a href="#">Instagram</a>
						<a href="#">TikTok</a>
						<a href={`https://wa.me/${contact.whatsapp_number}`} rel="noopener" target="_blank">
							WhatsApp
						</a>
					</div>
				</div>
			</div>
			<div className="nectar-linked-footer__bottom">
				<span>© 2026 Nectar immobilier. Tous droits réservés.</span>
				<span>
						<a href="/purple-pearl">Promotion immobilière</a> · <a href="/#contact">Contactez-nous</a>
				</span>
			</div>
		</div>
	</footer>
);
