import { COMPANY_INFO } from '../data/company.js';
import { t } from '../i18n/index.js';

export function renderFITPage() {
  const arrow = t('arrow', '&rarr;');

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5.5rem 0 4.5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/cappadocia.jpg" alt="FIT Independent Travel" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 880px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">${t('fitPage.eyebrow')}</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            ${t('fitPage.title')}
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.88); margin-bottom: 0;">
            ${t('fitPage.subtitle')}
          </p>
        </div>
      </section>

      <!-- Status Notice & Pillars -->
      <section class="section" style="padding: 4.5rem 0 3.5rem;">
        <div class="container" style="max-width: 960px;">
          <!-- Under Preparation Notice Card -->
          <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-left: 4px solid var(--color-gold); border-radius: var(--radius-xs); padding: clamp(1.75rem, 4vw, 2.75rem); box-shadow: var(--shadow-md); margin-bottom: 3.5rem; text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(197, 160, 89, 0.12); color: var(--color-gold-dark, #8a6a24); border: 1px solid rgba(197, 160, 89, 0.35); padding: 6px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.25rem;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-gold); animation: pulseDot 2s infinite;"></span>
              ${t('fitPage.statusBadge')}
            </div>

            <h2 style="font-size: clamp(1.6rem, 3.5vw, 2.2rem); color: var(--color-navy); margin-bottom: 1rem;">
              ${t('fitPage.heading')}
            </h2>

            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); max-width: 760px; margin: 0 auto 1.25rem;">
              ${t('fitPage.description')}
            </p>

            <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); max-width: 680px; margin: 0 auto;">
              ${t('fitPage.subnote')}
            </p>
          </div>

          <!-- Preview Pillars -->
          <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; color: var(--color-navy); margin-bottom: 0.5rem;">
              ${t('fitPage.pillarsTitle')}
            </h3>
            <div class="gold-divider center" style="margin-bottom: 2rem;"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem; margin-bottom: 3.5rem;">
            <!-- Pillar 1 -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); padding: 2rem 1.5rem; text-align: center; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='none'; this.style.boxShadow='var(--shadow-sm)'">
              <div style="width: 52px; height: 52px; margin: 0 auto 1.25rem; border-radius: 50%; background: var(--color-sand); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                🧭
              </div>
              <h4 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">
                ${t('fitPage.pillar1Title')}
              </h4>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('fitPage.pillar1Desc')}
              </p>
            </div>

            <!-- Pillar 2 -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); padding: 2rem 1.5rem; text-align: center; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='none'; this.style.boxShadow='var(--shadow-sm)'">
              <div style="width: 52px; height: 52px; margin: 0 auto 1.25rem; border-radius: 50%; background: var(--color-sand); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                🚗
              </div>
              <h4 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">
                ${t('fitPage.pillar2Title')}
              </h4>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('fitPage.pillar2Desc')}
              </p>
            </div>

            <!-- Pillar 3 -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); padding: 2rem 1.5rem; text-align: center; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='none'; this.style.boxShadow='var(--shadow-sm)'">
              <div style="width: 52px; height: 52px; margin: 0 auto 1.25rem; border-radius: 50%; background: var(--color-sand); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                🏛️
              </div>
              <h4 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">
                ${t('fitPage.pillar3Title')}
              </h4>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('fitPage.pillar3Desc')}
              </p>
            </div>
          </div>

          <!-- Direct CTA Box -->
          <div style="background: linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%); color: #FFFFFF; border-radius: var(--radius-xs); padding: clamp(2rem, 5vw, 3rem); text-align: center; box-shadow: var(--shadow-lg);">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 0.75rem;">
              VISIT ANATOLIA BESPOKE
            </span>
            <h3 style="color: #FFFFFF; font-size: clamp(1.5rem, 3.5vw, 2.1rem); margin-bottom: 0.75rem;">
              ${t('fitPage.ctaBoxTitle')}
            </h3>
            <p style="color: rgba(255,255,255,0.85); font-size: 1.05rem; max-width: 620px; margin: 0 auto 1.75rem; line-height: 1.6;">
              ${t('fitPage.ctaBoxDesc')}
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-primary open-trip-planner-btn">
                ${t('fitPage.startPlanningBtn')} ${arrow}
              </button>
              <a href="#/contact" class="btn btn-outline-light">
                ${t('fitPage.contactBtn')}
              </a>
              <a href="#/journeys" class="btn btn-outline-light">
                ${t('fitPage.exploreJourneysBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Accreditations Banner -->
      <section class="section section-sand text-center" style="padding: 3.5rem 0;">
        <div class="container" style="max-width: 900px;">
          <span class="eyebrow">${t('footer.accreditationsTitle')}</span>
          <p style="margin-bottom: 2rem; color: var(--text-secondary); font-size: 0.95rem;">
            ${COMPANY_INFO.legalName} &middot; ${COMPANY_INFO.brandPromise}
          </p>
          <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
            ${COMPANY_INFO.accreditations.map(acc => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 1rem 1.5rem; border-radius: var(--radius-xs); display: flex; align-items: center; gap: 0.85rem; box-shadow: var(--shadow-sm);">
                <img src="${acc.logo}" alt="${acc.name}" style="height: 36px; width: auto; object-fit: contain;" />
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-navy);">${acc.name}</div>
                  <div style="font-size: 0.72rem; color: var(--text-secondary); max-width: 170px;">${acc.fullName}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}

