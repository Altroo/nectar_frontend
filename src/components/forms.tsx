'use client';

import { type FormEvent, useState, useSyncExternalStore } from 'react';
import { useTranslation } from '@/i18n/client';
import { postWebsiteForm } from '@/utils/api';

type Status = 'idle' | 'sending' | 'success' | 'error';

const formValue = (form: HTMLFormElement, name: string) => String(new FormData(form).get(name) || '');
const dateInputPattern = '[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}';

const normalizeDateValue = (value: string) => {
	const trimmed = value.trim();
	const dateMatch = trimmed.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);

	if (!trimmed) {
		return null;
	}

	if (dateMatch) {
		const [, day, month, year] = dateMatch;
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	}

	return trimmed;
};

const newsletterDismissedCookie = 'nectar_newsletter_dismissed';
const newsletterDismissedMaxAge = 60 * 60 * 24 * 30;
const newsletterDismissedEvent = 'nectar-newsletter-dismissed';

const hasDismissedNewsletter = () => document.cookie.split('; ').some((cookie) => cookie.startsWith(`${newsletterDismissedCookie}=`));

const rememberNewsletterDismissal = () => {
	document.cookie = `${newsletterDismissedCookie}=1; Max-Age=${newsletterDismissedMaxAge}; Path=/; SameSite=Lax`;
	window.dispatchEvent(new Event(newsletterDismissedEvent));
};

const subscribeToNewsletterDismissal = (onStoreChange: () => void) => {
	window.addEventListener(newsletterDismissedEvent, onStoreChange);
	return () => window.removeEventListener(newsletterDismissedEvent, onStoreChange);
};

const getNewsletterVisibilitySnapshot = () => !hasDismissedNewsletter();

const getServerNewsletterVisibilitySnapshot = () => false;

export const ContactForm = () => {
	const [status, setStatus] = useState<Status>('idle');
	const { t } = useTranslation();

	const submit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus('sending');
		try {
			await postWebsiteForm('contact-requests', {
				full_name: formValue(form, 'full_name'),
				phone: formValue(form, 'phone'),
				email: formValue(form, 'email'),
				project: formValue(form, 'project'),
				property_type: formValue(form, 'property_type'),
				budget: formValue(form, 'budget'),
				preferred_date: normalizeDateValue(formValue(form, 'preferred_date')),
				preferred_time: formValue(form, 'preferred_time'),
				appointment_mode: formValue(form, 'appointment_mode'),
				message: formValue(form, 'message'),
			});
			form.reset();
			setStatus('success');
		} catch {
			setStatus('error');
		}
	};

	return (
		<form className="contact-photo-form" onSubmit={submit}>
			<div className="field">
				<label>{t('forms.contact.fullName')}</label>
				<input name="full_name" placeholder={t('forms.contact.namePlaceholder')} type="text" required />
			</div>
			<div className="field">
				<label>{t('forms.contact.phone')}</label>
				<input dir="ltr" inputMode="tel" name="phone" placeholder="06 75 59 92 56 / 07 73 86 35 85" type="tel" required />
			</div>
			<div className="field">
				<label>{t('forms.contact.email')}</label>
				<input dir="ltr" name="email" placeholder={t('forms.contact.emailPlaceholder')} type="email" />
			</div>
			<div className="field">
				<label>{t('forms.contact.project')}</label>
				<select name="project">
					{[0, 1, 2, 3].map((index) => (
						<option key={index}>{t(`forms.contact.projects.${index}`)}</option>
					))}
				</select>
			</div>
			<div className="field">
				<label>{t('forms.contact.propertyType')}</label>
				<select name="property_type">
					{[0, 1, 2, 3, 4].map((index) => (
						<option key={index}>{t(`forms.contact.propertyTypes.${index}`)}</option>
					))}
				</select>
			</div>
			<div className="field">
				<label>{t('forms.contact.budget')}</label>
				<input dir="ltr" inputMode="numeric" name="budget" placeholder={t('forms.contact.budgetPlaceholder')} type="text" />
			</div>
			<div className="form-rdv-title">
				<span>{t('forms.contact.appointment')}</span>
				<strong>{t('forms.contact.bookSlot')}</strong>
			</div>
			<div className="field">
				<label>{t('forms.contact.date')}</label>
				<input dir="ltr" inputMode="numeric" name="preferred_date" pattern={dateInputPattern} placeholder="DD/MM/YYYY" type="text" />
			</div>
			<div className="field">
				<label>{t('forms.contact.time')}</label>
				<select dir="ltr" name="preferred_time">
					<option>10:00</option>
					<option>11:30</option>
					<option>14:00</option>
					<option>15:30</option>
					<option>17:00</option>
				</select>
			</div>
			<div className="field field-full">
				<label>{t('forms.contact.mode')}</label>
				<select name="appointment_mode">
					{[0, 1, 2, 3].map((index) => (
						<option key={index}>{t(`forms.contact.modes.${index}`)}</option>
					))}
				</select>
			</div>
			<div className="field field-full message-field">
				<label>{t('forms.contact.message')}</label>
				<textarea name="message" placeholder={t('forms.contact.messagePlaceholder')} rows={5} />
			</div>
			<button className="contact-photo-btn" disabled={status === 'sending'} type="submit">
				{t('forms.contact.submit')} <span>→</span>
			</button>
			{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{t(`forms.status.${status}`)}</p> : null}
		</form>
	);
};

export const NewsletterForm = () => {
	const [status, setStatus] = useState<Status>('idle');
	const { t } = useTranslation();

	const submit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus('sending');
		try {
			await postWebsiteForm('newsletter', {
				email: formValue(form, 'email'),
				source: 'home-floating',
			});
			form.reset();
			setStatus('success');
		} catch {
			setStatus('error');
		}
	};

	return (
		<form className="nectar-floating-newsletter__form" onSubmit={submit}>
			<input className="nectar-floating-newsletter__input" name="email" placeholder={t('forms.newsletter.placeholder')} type="email" required />
			<button className="nectar-floating-newsletter__submit" disabled={status === 'sending'} type="submit">
				{t('forms.newsletter.submit')}
			</button>
			{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{t(`forms.status.${status}`)}</p> : null}
		</form>
	);
};

export const FloatingNewsletter = () => {
	const isVisible = useSyncExternalStore(subscribeToNewsletterDismissal, getNewsletterVisibilitySnapshot, getServerNewsletterVisibilitySnapshot);
	const { t } = useTranslation();

	if (!isVisible) {
		return null;
	}

	return (
		<div aria-live="polite" className="nectar-floating-newsletter is-visible" id="floating-newsletter">
			<div className="nectar-floating-newsletter__inner">
				<button aria-label={t('forms.newsletter.close')} className="nectar-floating-newsletter__close" type="button" onClick={rememberNewsletterDismissal}>
					×
				</button>
				<span className="nectar-floating-newsletter__eyebrow">{t('forms.newsletter.eyebrow')}</span>
				<h3 className="nectar-floating-newsletter__title">{t('forms.newsletter.title')}</h3>
				<p className="nectar-floating-newsletter__text">{t('forms.newsletter.copy')}</p>
				<NewsletterForm />
				<p className="nectar-floating-newsletter__privacy">
					<span>{t('forms.newsletter.privacy')}</span>
				</p>
			</div>
		</div>
	);
};

export const PurplePearlVisitForm = () => {
	const [status, setStatus] = useState<Status>('idle');
	const { t } = useTranslation();

	const submit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus('sending');
		try {
			await postWebsiteForm('purple-pearl-visits', {
				visit_type: formValue(form, 'visit_type'),
				preferred_date: normalizeDateValue(formValue(form, 'preferred_date')),
				preferred_time: formValue(form, 'preferred_time'),
				full_name: formValue(form, 'full_name'),
				phone: formValue(form, 'phone'),
				email: formValue(form, 'email'),
				message: formValue(form, 'message'),
				consent: new FormData(form).get('consent') === 'on',
			});
			form.reset();
			setStatus('success');
		} catch {
			setStatus('error');
		}
	};

	return (
		<form onSubmit={submit}>
			<div className="visit-grid">
				<div className="field">
					<label htmlFor="visit_type">{t('forms.visit.type')}</label>
					<select id="visit_type" name="visit_type">
						<option>{t('forms.visit.select')}</option>
						<option>{t('forms.visit.projectVisit')}</option>
						<option>{t('forms.visit.consultation')}</option>
						<option>{t('forms.visit.infoRequest')}</option>
					</select>
				</div>
				<div className="field">
					<label htmlFor="preferred_date">{t('forms.visit.date')}</label>
					<input dir="ltr" id="preferred_date" inputMode="numeric" name="preferred_date" pattern={dateInputPattern} placeholder="DD/MM/YYYY" type="text" />
				</div>
				<div className="field">
					<label htmlFor="preferred_time">{t('forms.visit.time')}</label>
					<select dir="ltr" id="preferred_time" name="preferred_time">
						<option>10:00</option>
						<option>12:00</option>
						<option>15:00</option>
						<option>17:00</option>
					</select>
				</div>
				<div className="field">
					<label htmlFor="full_name">{t('forms.visit.fullName')}</label>
					<input id="full_name" name="full_name" placeholder={t('forms.visit.namePlaceholder')} type="text" required />
				</div>
				<div className="field">
					<label htmlFor="phone">{t('forms.visit.phone')}</label>
					<input dir="ltr" id="phone" inputMode="tel" name="phone" placeholder={t('forms.visit.phonePlaceholder')} type="tel" required />
				</div>
				<div className="field">
					<label htmlFor="email">{t('forms.visit.email')}</label>
					<input dir="ltr" id="email" name="email" placeholder={t('forms.visit.emailPlaceholder')} type="email" />
				</div>
				<div className="field full">
					<label htmlFor="message">{t('forms.visit.message')}</label>
					<textarea id="message" name="message" placeholder={t('forms.visit.messagePlaceholder')} />
				</div>
				<div className="field full">
					<label className="check-wrap">
						<input name="consent" type="checkbox" /> <span>{t('forms.visit.consent')}</span>
					</label>
				</div>
				<div className="field full">
					<button className="submit-btn" disabled={status === 'sending'} type="submit">
						{t('forms.visit.submit')}
					</button>
					{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{t(`forms.status.${status}`)}</p> : null}
				</div>
			</div>
		</form>
	);
};
