export const readFavoriteIds = (key: string): Set<number> => {
	try {
		const stored = JSON.parse(window.sessionStorage.getItem(key) ?? '[]');
		return new Set(Array.isArray(stored) ? stored.filter((id): id is number => typeof id === 'number') : []);
	} catch {
		try {
			window.sessionStorage.removeItem(key);
		} catch {
			// Favorites remain usable until the page is closed if storage is unavailable.
		}
		return new Set();
	}
};

export const writeFavoriteIds = (key: string, ids: Set<number>) => {
	try {
		window.sessionStorage.setItem(key, JSON.stringify(Array.from(ids)));
	} catch {
		// Favorites remain usable until the page is closed if storage is unavailable.
	}
};
