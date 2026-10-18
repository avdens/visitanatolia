import { EXPERIENCES } from '../data/experiences.js';

export function renderExperiencesPage() {
  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/ephesus.jpg" alt="Turkish Experiences" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">Curated Special Interests</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            Signature Experiences in Turkey
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            Beyond conventional sightseeing. We create deep encounters with Turkey's living culinary masters, ancient architectural feats, Sufi mystics, private vineyard cellars, and turquoise waters.
          </p>
        </div>
      </section>

      <!-- Experiences Grid -->
      <section class="section">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 4.5rem;">
            ${EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 1;
              return `
                <div class="split-feature-grid" style="align-items: center;">
                  <div class="split-feature-content" style="${isEven ? 'order: 2;' : 'order: 1;'}">
                    <span class="eyebrow">${exp.category}</span>
                    <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); color: var(--color-navy); margin-bottom: 0.5rem; line-height: 1.2;">
                      ${exp.title}
                    </h2>
                    <p style="font-size: 1rem; color: var(--color-gold-muted); font-weight: 600; margin-bottom: 1.25rem;">
                      ${exp.tagline}
                    </p>
                    <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 1.5rem;">
                      ${exp.description}
                    </p>
                    
                    <h4 style="font-size: 1.05rem; color: var(--color-navy); margin-bottom: 0.75rem;">Highlights of this Experience:</h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;">
                      ${exp.highlights.map(h => `
                        <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem; color: var(--text-primary);">
                          <span style="color: var(--color-terracotta);">✦</span>
                          <span>${h}</span>
                        </li>
                      `).join('')}
                    </ul>

                    <button class="btn btn-primary" onclick="window.prefillPlannerExperience('${exp.title}')">
                      Add to My Custom Itinerary &rarr;
                    </button>
                  </div>

                  <div class="split-feature-media" style="${isEven ? 'order: 1;' : 'order: 2;'}">
                    <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); height: clamp(260px, 45vh, 440px);">
                      <img src="${exp.image}" alt="${exp.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Bottom Conversion -->
      <section class="section section-sand text-center">
        <div class="container" style="max-width: 760px;">
          <h2 style="margin-bottom: 1rem; color: var(--color-navy);">Have a Specific Passion in Mind?</h2>
          <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
            From high-altitude botanical treks in the Pontic Alps to private classical archaeology archives in Ankara, we can weave any personal interest into your Turkey journey.
          </p>
          <button class="btn btn-primary btn-lg open-trip-planner-btn">
            Inquire About a Custom Experience &rarr;
          </button>
        </div>
      </section>
    </main>
  `;
}
