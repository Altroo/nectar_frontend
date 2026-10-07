'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

type GtagCommand = 'js' | 'config' | 'event';

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (command: GtagCommand, target: Date | string, parameters?: Record<string, unknown>) => void;
	}
}

interface GoogleAnalyticsProps {
	measurementId?: string;
}

const GoogleAnalyticsPageView = ({ measurementId, ready }: { measurementId: string; ready: boolean }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const lastTrackedPageRef = useRef<string | null>(null);

	useEffect(() => {
		if (!ready || !window.gtag || !pathname) return;

		const queryString = searchParams.toString();
		const pagePath = queryString ? `${pathname}?${queryString}` : pathname;
		const pageKey = `${measurementId}:${pagePath}`;
		if (lastTrackedPageRef.current === pageKey) return;

		lastTrackedPageRef.current = pageKey;
		window.gtag('event', 'page_view', {
			send_to: measurementId,
			page_path: pagePath,
			page_location: window.location.href,
			page_title: document.title,
		});
	}, [measurementId, pathname, ready, searchParams]);

	return null;
};

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
	const [ready, setReady] = useState(false);

	// Keep the integration inactive until Nectar's real GA4 measurement ID is supplied.
	if (!measurementId || measurementId === 'G-XXXXXXXXXX' || !/^G-[A-Z0-9]+$/.test(measurementId)) return null;

	return (
		<>
			<Script id="google-analytics" strategy="afterInteractive" onReady={() => setReady(true)}>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					window.gtag = gtag;
					gtag('js', new Date());
					gtag('config', '${measurementId}', { send_page_view: false });
				`}
			</Script>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
			<Suspense fallback={null}>
				<GoogleAnalyticsPageView measurementId={measurementId} ready={ready} />
			</Suspense>
		</>
	);
};

export default GoogleAnalytics;
