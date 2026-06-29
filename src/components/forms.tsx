'use client';

import { type FormEvent, useState } from 'react';
import { postWebsiteForm } from '@/utils/api';

type Status = 'idle' | 'sending' | 'success' | 'error';

const statusText = {
	idle: '',
	sending: 'Envoi en cours...',
	success: 'Votre demande a bien été envoyée.',
	error: 'La demande n’a pas pu être envoyée. Veuillez réessayer.',
};

const formValue = (form: HTMLFormElement, name: string) => String(new FormData(form).get(name) || '');

export const ContactForm = () => {
	const [status, setStatus] = useState<Status>('idle');

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
				preferred_date: formValue(form, 'preferred_date') || null,
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
				<label>Nom complet</label>
				<input name="full_name" placeholder="Votre nom" type="text" required />
			</div>
			<div className="field">
				<label>Téléphone</label>
				<input name="phone" placeholder="06 75 59 92 56 / 07 73 86 35 85" type="tel" required />
			</div>
			<div className="field">
				<label>Email</label>
				<input name="email" placeholder="nom@email.com" type="email" />
			</div>
			<div className="field">
				<label>Projet</label>
				<select name="project">
					<option>Achat</option>
					<option>Vente</option>
					<option>Location</option>
					<option>Finalisation &amp; suivi</option>
				</select>
			</div>
			<div className="field">
				<label>Type de bien</label>
				<select name="property_type">
					<option>Appartement</option>
					<option>Villa</option>
					<option>Bureau de luxe</option>
					<option>Magasin de luxe</option>
					<option>Local commercial</option>
				</select>
			</div>
			<div className="field">
				<label>Budget</label>
				<input name="budget" placeholder="Ex. 3 000 000 MAD" type="text" />
			</div>
			<div className="form-rdv-title">
				<span>Rendez-vous</span>
				<strong>Réserver un créneau</strong>
			</div>
			<div className="field">
				<label>Date souhaitée</label>
				<input name="preferred_date" type="date" />
			</div>
			<div className="field">
				<label>Heure souhaitée</label>
				<select name="preferred_time">
					<option>10:00</option>
					<option>11:30</option>
					<option>14:00</option>
					<option>15:30</option>
					<option>17:00</option>
				</select>
			</div>
			<div className="field field-full">
				<label>Mode de rendez-vous</label>
				<select name="appointment_mode">
					<option>Appel téléphonique</option>
					<option>Visioconférence</option>
					<option>Rendez-vous à l’agence</option>
					<option>Visite du bien</option>
				</select>
			</div>
			<div className="field field-full message-field">
				<label>Message</label>
				<textarea name="message" placeholder="Décrivez votre besoin, le quartier souhaité ou votre bien à vendre/louer." rows={5} />
			</div>
			<button className="contact-photo-btn" disabled={status === 'sending'} type="submit">
				Envoyer ma demande <span>→</span>
			</button>
			{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{statusText[status]}</p> : null}
		</form>
	);
};

export const NewsletterForm = () => {
	const [status, setStatus] = useState<Status>('idle');

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
			<input className="nectar-floating-newsletter__input" name="email" placeholder="VOTRE EMAIL" type="email" required />
			<button className="nectar-floating-newsletter__submit" disabled={status === 'sending'} type="submit">
				S’inscrire
			</button>
			{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{statusText[status]}</p> : null}
		</form>
	);
};

export const PurplePearlVisitForm = () => {
	const [status, setStatus] = useState<Status>('idle');

	const submit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus('sending');
		try {
			await postWebsiteForm('purple-pearl-visits', {
				visit_type: formValue(form, 'visit_type'),
				preferred_date: formValue(form, 'preferred_date') || null,
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
					<label htmlFor="visit_type">Type de visite</label>
					<select id="visit_type" name="visit_type">
						<option>Sélectionner</option>
						<option>Visite du projet</option>
						<option>Rendez-vous conseil</option>
						<option>Demande d’informations</option>
					</select>
				</div>
				<div className="field">
					<label htmlFor="preferred_date">Date</label>
					<input id="preferred_date" name="preferred_date" type="date" />
				</div>
				<div className="field">
					<label htmlFor="preferred_time">Heure</label>
					<select id="preferred_time" name="preferred_time">
						<option>10:00</option>
						<option>12:00</option>
						<option>15:00</option>
						<option>17:00</option>
					</select>
				</div>
				<div className="field">
					<label htmlFor="full_name">Nom complet</label>
					<input id="full_name" name="full_name" placeholder="Entrez votre nom complet" type="text" required />
				</div>
				<div className="field">
					<label htmlFor="phone">Numéro de téléphone</label>
					<input id="phone" name="phone" placeholder="Entrez votre numéro de téléphone" type="tel" required />
				</div>
				<div className="field">
					<label htmlFor="email">E-mail</label>
					<input id="email" name="email" placeholder="Entrez votre adresse e-mail" type="email" />
				</div>
				<div className="field full">
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" placeholder="Précisez le type d’appartement souhaité, votre budget ou votre disponibilité." />
				</div>
				<div className="field full">
					<label className="check-wrap">
						<input name="consent" type="checkbox" /> <span>En soumettant ce formulaire, j’accepte d’être contacté par Nectar immobilier.</span>
					</label>
				</div>
				<div className="field full">
					<button className="submit-btn" disabled={status === 'sending'} type="submit">
						Soumettre une demande de visite
					</button>
					{status !== 'idle' ? <p className={status === 'error' ? 'form-status is-error' : 'form-status'}>{statusText[status]}</p> : null}
				</div>
			</div>
		</form>
	);
};
