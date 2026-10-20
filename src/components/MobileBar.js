import { t } from '../i18n/index.js';

export function renderMobileBar() {
  const arrow = t('arrow', '&rarr;');

  return `
    <div class="mobile-sticky-bar">
      <a href="tel:+12014902212" class="btn btn-outline btn-sm" style="flex: 1; justify-content: center; font-size: 0.78rem; padding: 0.7rem 0.5rem;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        ${t('mobileBar.call', 'Call Expert')}
      </a>
      <button class="btn btn-primary btn-sm open-trip-planner-btn" style="flex: 2; justify-content: center; font-size: 0.82rem; padding: 0.7rem 1rem;">
        ${t('mobileBar.planTrip', 'Plan My Trip')} ${arrow}
      </button>
    </div>
  `;
}
