import { COMPANY_INFO } from '../data/company.js';
import { t } from '../i18n/index.js';

export function renderAboutPage() {
  const arrow = t('arrow', '&rarr;');

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/istanbul.jpg" alt="About Visit Anatolia" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">${t('aboutPage.eyebrow')}</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4.25rem); margin-bottom: 1.25rem;">
            ${t('aboutPage.title')}
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 0;">
            ${t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      <!-- The Genuine Origin Story -->
      <section class="section section-sand">
        <div class="container">
          <div class="split-feature-grid" style="align-items: center;">
            <div>
              <span class="eyebrow">${t('aboutPage.originEyebrow')}</span>
              <h2 style="color: var(--color-navy); margin-bottom: 1.25rem;">
                ${t('aboutPage.originTitle')}
              </h2>
              <p class="lead">
                ${COMPANY_INFO.foundingStory.history}
              </p>
              <p>
                ${COMPANY_INFO.foundingStory.summary}
              </p>
              <div class="gold-divider"></div>
              <blockquote style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-navy); font-style: italic; border-left: 3px solid var(--color-terracotta); padding-left: 1.25rem; margin: 1.5rem 0;">
                ${t('aboutPage.quote')}
              </blockquote>
            </div>

            <div>
              <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); height: clamp(260px, 45vh, 460px);">
                <img src="/assets/real/gallery/istanbul_bosphorus.jpg" alt="Bosphorus Istanbul" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us & Company Philosophy -->
      <section class="section">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('aboutPage.valuesEyebrow')}</span>
            <h2 class="section-title">${t('aboutPage.valuesTitle')}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              ${t('aboutPage.valuesSub')}
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('aboutPage.val1Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('aboutPage.val1Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('aboutPage.val2Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('aboutPage.val2Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('aboutPage.val3Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('aboutPage.val3Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('aboutPage.val4Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('aboutPage.val4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Verified Offices Section -->
      <section class="section section-sand">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('footer.officesTitle')}</span>
            <h2 class="section-title">${t('aboutPage.valuesTitle')}</h2>
            <div class="gold-divider center"></div>
          </div>

          <div class="office-two-col-grid">
            <!-- USA Office -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2.5rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-md);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem; gap: 0.5rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.4rem; color: var(--color-navy); margin: 0;">${t('footer.usOffice')}</h3>
                <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold); background: var(--color-navy); padding: 3px 8px; border-radius: 3px;">
                  New Jersey HQ
                </span>
              </div>
              <div style="font-weight: 600; color: var(--color-navy); margin-bottom: 0.5rem;">
                Alexander and Troy LLC
              </div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
                500 Nordhoff Pl<br />
                Englewood, NJ 07631, USA
              </p>
              <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.5rem;">
                <strong>Telephone:</strong> <a href="tel:+12014902212" style="color: var(--color-terracotta); font-weight: 600;">+1 (201) 490-2212</a>
              </div>
            </div>

            <!-- Turkey Office -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2.5rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-md);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem; gap: 0.5rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.4rem; color: var(--color-navy); margin: 0;">${t('footer.trOffice')}</h3>
                <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold); background: var(--color-navy); padding: 3px 8px; border-radius: 3px;">
                  Istanbul DMC
                </span>
              </div>
              <div style="font-weight: 600; color: var(--color-navy); margin-bottom: 0.5rem;">
                Atalante Tours / Visit Anatolia
              </div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
                Şemsettin Günaltay Cad. No: 148/3<br />
                Erenköy, 34738 Kadıköy, İstanbul, Turkey
              </p>
              <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 1.25rem;">
                <strong>Telephone:</strong> <a href="tel:+902163024325" style="color: var(--color-terracotta); font-weight: 600;">+90 (216) 302-4325</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Conversion -->
      <section class="section section-dark text-center">
        <div class="container" style="max-width: 760px;">
          <h2 style="color: #FFFFFF; margin-bottom: 1rem;">${t('aboutPage.ctaTitle')}</h2>
          <button class="btn btn-primary btn-lg open-trip-planner-btn">
            ${t('aboutPage.ctaBtn')}
          </button>
        </div>
      </section>
    </main>
  `;
}
