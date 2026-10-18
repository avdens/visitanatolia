import { SERVICES } from '../data/services.js';
import { COMPANY_INFO } from '../data/company.js';

export function renderServicesPage() {
  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/istanbul.jpg" alt="Turkey Travel Services" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">Full-Service Destination Management</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            Services & DMC Capabilities
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            From tailor-made individual FIT journeys to private VIP airport fast-track clearance, luxury Mercedes chauffeur transfers, private gulet charters, and executive corporate event management.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="section">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            ${SERVICES.map(srv => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); padding: clamp(1.5rem, 3vw, 2.25rem); display: flex; flex-direction: column; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='none'; this.style.boxShadow='var(--shadow-sm)'">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                  <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; color: var(--color-terracotta); background: var(--color-terracotta-light); padding: 3px 8px; border-radius: 3px;">
                    ${srv.badge}
                  </span>
                </div>
                <h3 style="font-size: 1.45rem; color: var(--color-navy); margin-bottom: 0.75rem;">${srv.title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.25rem; flex-grow: 1;">
                  ${srv.description}
                </p>
                <div style="margin-bottom: 1.5rem;">
                  <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 0.5rem;">
                    Key Capabilities:
                  </span>
                  <ul style="font-size: 0.85rem; color: var(--text-primary); display: flex; flex-direction: column; gap: 0.4rem;">
                    ${srv.features.map(f => `<li style="display:flex; gap:0.5rem;"><span style="color:var(--color-gold);">✓</span> ${f}</li>`).join('')}
                  </ul>
                </div>
                <button class="btn btn-outline-dark btn-sm" style="width: 100%; margin-top: auto;" onclick="window.prefillPlannerExperience('${srv.title}')">
                  Inquire About This Service &rarr;
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Trust Accreditations Banner -->
      <section class="section section-sand text-center">
        <div class="container" style="max-width: 900px;">
          <span class="eyebrow">Fully Licensed & Certified</span>
          <h2 style="margin-bottom: 1rem; color: var(--color-navy);">Certified Industry Leadership</h2>
          <p style="margin-bottom: 2.5rem; color: var(--text-secondary);">
            Visit Anatolia holds the highest recognized industry licenses both in Turkey and internationally.
          </p>
          <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap;">
            ${COMPANY_INFO.accreditations.map(acc => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 1.25rem 1.75rem; border-radius: var(--radius-xs); display: flex; align-items: center; gap: 1rem; box-shadow: var(--shadow-sm);">
                <img src="${acc.logo}" alt="${acc.name}" style="height: 40px; width: auto; object-fit: contain;" />
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--color-navy);">${acc.name}</div>
                  <div style="font-size: 0.75rem; color: var(--text-secondary); max-width: 180px;">${acc.fullName}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}
