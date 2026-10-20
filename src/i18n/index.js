/**
 * Visit Anatolia Internationalization (i18n) Engine
 */
import { TRANSLATIONS } from './translations.js';
import { DESTINATION_TRANSLATIONS } from './dataTranslations.js';
import { DESTINATIONS } from '../data/destinations.js';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr', label: 'English (US)' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr', label: 'Türkçe' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl', label: 'العربية' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr', label: 'Français' }
];

const STORAGE_KEY = 'visitanatolia_lang';

let currentLang = 'en';

export function initI18n() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
      currentLang = saved;
    } else if (typeof navigator !== 'undefined') {
      const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (navLang.startsWith('tr')) currentLang = 'tr';
      else if (navLang.startsWith('ar')) currentLang = 'ar';
      else if (navLang.startsWith('fr')) currentLang = 'fr';
      else currentLang = 'en';
    }
  }

  applyHtmlAttributes(currentLang);
  return currentLang;
}

export function getLanguage() {
  return currentLang;
}

export function getLanguageMeta() {
  return SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];
}

export function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.some(l => l.code === lang)) return;
  currentLang = lang;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }
  applyHtmlAttributes(lang);

  // Trigger event for application re-rendering
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }
}

function applyHtmlAttributes(lang) {
  if (typeof document === 'undefined') return;
  const isRtl = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  if (document.body) {
    if (isRtl) {
      document.body.classList.add('is-rtl');
    } else {
      document.body.classList.remove('is-rtl');
    }
  }
}

/**
 * Translate a dot-notated key: e.g. t('nav.destinations')
 */
export function t(path, fallback = '') {
  const langObj = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const enObj = TRANSLATIONS.en;

  const getFrom = (obj, p) => {
    if (!obj) return undefined;
    const parts = p.split('.');
    let cur = obj;
    for (const part of parts) {
      if (cur && typeof cur === 'object' && part in cur) {
        cur = cur[part];
      } else {
        return undefined;
      }
    }
    return cur;
  };

  const val = getFrom(langObj, path);
  if (val !== undefined && val !== null) return val;

  const enVal = getFrom(enObj, path);
  if (enVal !== undefined && enVal !== null) return enVal;

  return fallback || path;
}

/**
 * Returns localized destinations list
 */
export function getLocalizedDestinations() {
  const overrides = DESTINATION_TRANSLATIONS[currentLang] || {};
  return DESTINATIONS.map(d => {
    const ov = overrides[d.id];
    if (!ov) return d;
    return {
      ...d,
      tagline: ov.tagline || d.tagline,
      summary: ov.summary || d.summary,
      description: ov.description || d.description,
      highlights: ov.highlights || d.highlights,
      experiences: ov.experiences || d.experiences,
      insiderTip: ov.insiderTip || d.insiderTip
    };
  });
}
