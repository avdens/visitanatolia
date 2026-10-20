import { JOURNEYS } from '../data/journeys.js';
import { t } from '../i18n/index.js';

export function renderJourneysPage(selectedJourneyId = null) {
  const arrow = t('arrow', '&rarr;');

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/seven_churches.jpg" alt="Turkey Private Tours" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">${t('journeysPage.eyebrow')}</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            ${t('journeysPage.title')}
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            ${t('journeysPage.subtitle')}
          </p>
        </div>
      </section>

      <!-- Journeys Catalog -->
      <section class="section">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 4rem;">
            ${JOURNEYS.map((journey) => `
              <div class="journey-catalog-item" id="${journey.id}" style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-md);">
                <div class="journey-catalog-card-grid">
                  <div style="position: relative; min-height: 280px;">
                    <img src="${journey.heroImage}" alt="${journey.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                    <div style="position: absolute; top: 1.25rem; left: 1.25rem; background: var(--color-navy); color: var(--color-gold-light); font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 3px; text-transform: uppercase;">
                      ${journey.duration}
                    </div>
                  </div>

                  <div style="padding: clamp(1.25rem, 3vw, 2.5rem); display: flex; flex-direction: column;">
                    <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-terracotta); font-weight: 700; margin-bottom: 0.4rem;">
                      ${journey.style}
                    </span>
                    <h2 style="font-size: clamp(1.6rem, 2.5vw, 2.1rem); color: var(--color-navy); margin-bottom: 0.5rem; line-height: 1.2;">
                      ${journey.title}
                    </h2>
                    <p style="font-size: 0.95rem; color: var(--color-gold-muted); font-weight: 600; margin-bottom: 1rem;">
                      ${journey.subtitle}
                    </p>
                    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.25rem;">
                      ${journey.overview}
                    </p>

                    <!-- Route Pills -->
                    <div style="margin-bottom: 1.25rem;">
                      <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 0.4rem;">
                        ${t('journeysPage.routeHighlights')}
                      </span>
                      <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                        ${journey.destinations.map(d => `<span class="dest-pill">${d}</span>`).join('')}
                      </div>
                    </div>

                    <div style="background-color: var(--color-ivory); border-left: 2px solid var(--color-gold); padding: 0.75rem 1rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--color-navy);">
                      <strong>${t('common.customizable')}:</strong> ${journey.customizableNote}
                    </div>

                    <!-- Actions -->
                    <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid var(--border-light);">
                      <button class="btn btn-primary" onclick="window.prefillPlannerJourney('${journey.id}')">
                        ${t('journeysPage.customizeBtn')}
                      </button>
                      <button class="btn btn-outline-dark btn-sm" onclick="window.toggleCatalogDayDetails('${journey.id}')" id="btn-toggle-${journey.id}">
                        ${t('journeysPage.viewDaysBtn')}
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Collapsible Day-by-Day Section -->
                <div id="details-${journey.id}" style="display: none; background: var(--bg-surface-alt); border-top: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2.5rem);">
                  <h4 style="font-size: 1.25rem; color: var(--color-navy); margin-bottom: 1rem;">
                    ${t('journeysPage.dayByDayTitle')} ${journey.title}
                  </h4>
                  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${journey.itinerary.map(item => `
                      <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 1.25rem; border-radius: var(--radius-xs);">
                        <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.4rem;">
                          <span style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700; color: var(--color-terracotta);">${t('journeysPage.dayLabel')} ${item.day}</span>
                          <span style="font-weight: 700; color: var(--color-navy); font-size: 1rem;">${item.title}</span>
                        </div>
                        <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">${item.description}</p>
                      </div>
                    `).join('')}
                  </div>

                  <div style="margin-top: 2rem; text-align: center;">
                    <button class="btn btn-gold btn-lg" onclick="window.prefillPlannerJourney('${journey.id}')">
                      ${t('journeysPage.planCustomBtn')} ${arrow}
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Bottom Trust Section -->
      <section class="section section-sand text-center">
        <div class="container" style="max-width: 760px;">
          <h2 style="margin-bottom: 1rem; color: var(--color-navy);">${t('destinationsPage.bottomTitle')}</h2>
          <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
            ${t('destinationsPage.bottomDesc')}
          </p>
          <button class="btn btn-primary btn-lg open-trip-planner-btn">
            ${t('common.planMyTrip')} ${arrow}
          </button>
        </div>
      </section>
    </main>
  `;
}
