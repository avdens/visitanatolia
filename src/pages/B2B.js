import { COMPANY_INFO } from '../data/company.js';
import { t } from '../i18n/index.js';

export function renderB2BPage() {
  const arrow = t('arrow', '&rarr;');

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.25;">
          <img src="/assets/real/destinations/istanbul.jpg" alt="Turkey DMC Partner" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 900px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">${t('b2bPage.eyebrow')}</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4.25rem); line-height: 1.1; margin-bottom: 1.25rem;">
            ${t('b2bPage.title')}
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 2rem;">
            ${t('b2bPage.subtitle')}
          </p>
          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="#partner-inquiry" class="btn btn-gold btn-lg">
              ${t('b2bPage.ctaPartner')}
            </a>
            <a href="tel:+12014902212" class="btn btn-outline btn-lg">
              ${t('b2bPage.callDesk')}
            </a>
          </div>
        </div>
      </section>

      <!-- B2B Pillars -->
      <section class="section section-sand">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('b2bPage.advantagesEyebrow')}</span>
            <h2 class="section-title">${t('b2bPage.advantagesTitle')}</h2>
            <div class="gold-divider center"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('b2bPage.adv1Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('b2bPage.adv1Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('b2bPage.adv2Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('b2bPage.adv2Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('b2bPage.adv3Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('b2bPage.adv3Desc')}
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${t('b2bPage.adv4Title')}</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${t('b2bPage.adv4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Partner Inquiry Form -->
      <section class="section" id="partner-inquiry">
        <div class="container" style="max-width: 800px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 3rem clamp(1.5rem, 4vw, 3rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-lg);">
            <div class="text-center" style="margin-bottom: 2rem;">
              <span class="eyebrow">${t('b2bPage.eyebrow')}</span>
              <h2 style="font-size: 2rem; color: var(--color-navy); margin-bottom: 0.5rem;">${t('b2bPage.formTitle')}</h2>
            </div>

            <form id="b2bInquiryForm" onsubmit="window.handleB2BSubmit(event)">
              <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">${t('contactPage.nameLabel')}</label>
                  <input type="text" name="b2bName" required placeholder="Full Name" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Agency / Company Name *</label>
                  <input type="text" name="agencyName" required placeholder="Bespoke Travel Advisors LLC" class="form-input" />
                </div>
              </div>

              <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">${t('contactPage.emailLabel')}</label>
                  <input type="email" name="b2bEmail" required placeholder="advisor@agency.com" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">${t('contactPage.phoneLabel')} *</label>
                  <input type="tel" name="b2bPhone" required placeholder="+1 (555) 000-0000" class="form-input" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${t('contactPage.msgLabel')}</label>
                <textarea name="b2bNotes" placeholder="Share number of travelers, dates, and destinations..." class="form-textarea"></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                ${t('b2bPage.formBtn')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}
