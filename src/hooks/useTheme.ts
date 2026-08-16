import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'theme';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribe(callback: () => void) {
    if (typeof window === 'undefined') return () => {};

    const handleStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY) callback();
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMedia = () => callback();

    window.addEventListener('storage', handleStorage);
    mediaQuery.addEventListener('change', handleMedia);

    return () => {
        window.removeEventListener('storage', handleStorage);
        mediaQuery.removeEventListener('change', handleMedia);
    };
}

function getSnapshot(): Theme {
    return getInitialTheme();
}

function getServerSnapshot(): Theme {
    return 'light';
}

export function useTheme() {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const isDark = theme === 'dark';

    const setTheme = (next: Theme) => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem(STORAGE_KEY, next);
        if (next === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
    };

    const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

    return { theme, isDark, setTheme, toggleTheme };
}
