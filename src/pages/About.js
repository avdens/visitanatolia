import { COMPANY_INFO } from '../data/company.js';

export function renderAboutPage() {
  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/istanbul.jpg" alt="About Visit Anatolia" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">Our Heritage & Team</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4.25rem); margin-bottom: 1.25rem;">
            About Visit Anatolia
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 0;">
            A premier partnership uniting U.S. executive travel planning with Turkey's most seasoned destination management experts, backed by more than three decades of industry mastery.
          </p>
        </div>
      </section>

      <!-- The Genuine Origin Story -->
      <section class="section section-sand">
        <div class="container">
          <div class="split-feature-grid" style="align-items: center;">
            <div>
              <span class="eyebrow">The Expert Behind The Scene</span>
              <h2 style="color: var(--color-navy); margin-bottom: 1.25rem;">
                Built on Three Decades of Travel Mastery
              </h2>
              <p class="lead">
                ${COMPANY_INFO.foundingStory.history}
              </p>
              <p>
                Both companies and senior experts gathered — each having more than 30 years of expertise in the field — have merged their strengths to serve discerning clients with utmost care, primarily across Turkey and the Eastern Mediterranean region (including Greece, Egypt, and Jordan), offering a comprehensive range of destination management services.
              </p>
              <p>
                Having a profound passion for this magnificent country, we show you the treasures of past civilizations while maintaining our finger on the pulse of the present. All of our programs are products of the expertise, reliability, and value that only an insider with global experience can provide.
              </p>
              <div class="gold-divider"></div>
              <blockquote style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-navy); font-style: italic; border-left: 3px solid var(--color-terracotta); padding-left: 1.25rem; margin: 1.5rem 0;">
                “Let us worry about the details of your trip, while you enjoy it.”
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
            <span class="eyebrow">Core Values</span>
            <h2 class="section-title">Why Choose Visit Anatolia?</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Our strength comes from the wealth of experience of our dynamic, passionate team of experts.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">Deep Local Knowledge</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                We are artsy and know our destination intimately. We know the quietest hours at Ephesus, the finest family lokantas in Kadıköy, and the most secluded anchorages along the Turquoise Coast.
              </p>
            </div>

            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">Time-Optimized Routing</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                Our tours maximize the time spent in destinations by replacing lengthy, exhausting bus rides with convenient short flights whenever possible.
              </p>
            </div>

            <div style="background: var(--bg-surface-alt); padding: 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">Personalized & Flexible</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                We are sincere, caring, flexible, fast, and relentlessly focused on what we do. We aim for meaningful connections and pay attention to every detail behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Verified Offices Section -->
      <section class="section section-sand">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">Dual Presence</span>
            <h2 class="section-title">Our Offices in the USA & Turkey</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Seamless communication from our United States office with direct, on-the-ground execution from our Istanbul headquarters.
            </p>
          </div>

          <div class="office-two-col-grid">
            <!-- USA Office -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2.5rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-md);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem; gap: 0.5rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.4rem; color: var(--color-navy); margin: 0;">🇺🇸 USA Office</h3>
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
              <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 1.25rem;">
                <strong>Direct Line:</strong> <a href="tel:+12016365082" style="color: var(--color-terracotta);">+1 (201) 636-5082</a>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
                Focus: US Client Consultation, Travel Advisor Partnerships, Itinerary Architecture, Currency & Billing.
              </p>
            </div>

            <!-- Turkey Office -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2.5rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-md);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem; gap: 0.5rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.4rem; color: var(--color-navy); margin: 0;">🇹🇷 Turkey Operations & DMC</h3>
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
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
                Focus: On-the-Ground Logistics, VIP Chauffeur Fleet, Licensed Guides, Domestic Flight Ticketing, 24/7 Concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Conversion -->
      <section class="section section-dark text-center">
        <div class="container" style="max-width: 760px;">
          <h2 style="color: #FFFFFF; margin-bottom: 1rem;">Ready to Experience Turkey with True Experts?</h2>
          <p style="font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 2rem;">
            Whether this is your first trip or your fifth return to Anatolia, let our senior team design an unforgettable journey.
          </p>
          <button class="btn btn-primary btn-lg open-trip-planner-btn">
            Plan My Trip With Visit Anatolia &rarr;
          </button>
        </div>
      </section>
    </main>
  `;
}
