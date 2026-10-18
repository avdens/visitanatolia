import { COMPANY_INFO } from '../data/company.js';

export function renderContactPage() {
  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative;">
        <div class="container" style="max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">Contact Our Experts</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            Get in Touch with Visit Anatolia
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            We believe in excellence in service, high quality, and taste. We love our destination and take immense pride in sharing it with you. Connect with our teams in the United States or Istanbul.
          </p>
        </div>
      </section>

      <!-- Office Cards & Contact Form -->
      <section class="section">
        <div class="container">
          <div class="split-feature-grid">
            <!-- Left: Offices Details -->
            <div>
              <h2 style="font-size: 2rem; color: var(--color-navy); margin-bottom: 1.5rem;">Our Official Locations</h2>
              
              <!-- USA Office Card -->
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2rem); border-radius: var(--radius-xs); margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem; gap: 0.5rem; flex-wrap: wrap;">
                  <h3 style="font-size: 1.3rem; color: var(--color-navy); margin: 0;">🇺🇸 USA Headquarters</h3>
                  <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold); background: var(--color-navy); padding: 2px 8px; border-radius: 3px;">
                    Englewood, NJ
                  </span>
                </div>
                <div style="font-weight: 700; color: var(--color-navy); font-size: 0.95rem; margin-bottom: 0.35rem;">
                  Alexander and Troy LLC
                </div>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
                  500 Nordhoff Pl<br />
                  Englewood, NJ 07631, USA
                </p>
                <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.95rem;">
                  <div>
                    <strong>Phone 1:</strong> <a href="tel:+12014902212" style="color: var(--color-terracotta); font-weight: 600;">+1 (201) 490-2212</a>
                  </div>
                  <div>
                    <strong>Phone 2:</strong> <a href="tel:+12016365082" style="color: var(--color-terracotta);">+1 (201) 636-5082</a>
                  </div>
                </div>
              </div>

              <!-- Turkey Office Card -->
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: clamp(1.25rem, 3vw, 2rem); border-radius: var(--radius-xs); margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem; gap: 0.5rem; flex-wrap: wrap;">
                  <h3 style="font-size: 1.3rem; color: var(--color-navy); margin: 0;">🇹🇷 Turkey Operations & DMC</h3>
                  <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold); background: var(--color-navy); padding: 2px 8px; border-radius: 3px;">
                    Kadıköy, İstanbul
                  </span>
                </div>
                <div style="font-weight: 700; color: var(--color-navy); font-size: 0.95rem; margin-bottom: 0.35rem;">
                  Atalante Tours / Visit Anatolia
                </div>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
                  Şemsettin Günaltay Cad. No: 148/3<br />
                  Erenköy, 34738 Kadıköy, İstanbul, Turkey
                </p>
                <div style="font-size: 0.95rem;">
                  <strong>Phone:</strong> <a href="tel:+902163024325" style="color: var(--color-terracotta); font-weight: 600;">+90 (216) 302-4325</a>
                </div>
              </div>

              <!-- Direct Email & Hours -->
              <div style="background: var(--color-sand); padding: 1.5rem clamp(1.25rem, 3vw, 2rem); border-radius: var(--radius-xs); border: 1px solid var(--border-medium);">
                <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-navy); margin-bottom: 0.5rem;">
                  Direct Email & Working Hours
                </div>
                <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
                  <strong>Inquiries:</strong> <a href="mailto:contact@visitanatolia.com" style="color: var(--color-terracotta); font-weight: 600;">contact@visitanatolia.com</a>
                </p>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; line-height: 1.5;">
                  ${COMPANY_INFO.operatingHours}
                </p>
              </div>
            </div>

            <!-- Right: Interactive Inquiry Form -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 2.75rem clamp(1.25rem, 3vw, 2.75rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-md);">
              <span class="eyebrow">Direct Message</span>
              <h2 style="font-size: 1.85rem; color: var(--color-navy); margin-bottom: 0.5rem;">Send an Inquiry</h2>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.75rem;">
                Have a question or prefer to describe your ideal Turkey itinerary directly? Fill out the form below and an expert will respond within 24 hours.
              </p>

              <form id="contactForm" onsubmit="window.handleContactSubmit(event)">
                <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                  <div class="form-group">
                    <label class="form-label">Your Name *</label>
                    <input type="text" name="contactName" required placeholder="Full Name" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Email Address *</label>
                    <input type="email" name="contactEmail" required placeholder="email@address.com" class="form-input" />
                  </div>
                </div>

                <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                  <div class="form-group">
                    <label class="form-label">Phone / WhatsApp</label>
                    <input type="tel" name="contactPhone" placeholder="+1 (555) 000-0000" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Inquiry Type</label>
                    <select name="inquiryType" class="form-select">
                      <option value="Tailor-Made Individual Travel">Tailor-Made Individual Travel</option>
                      <option value="Biblical & Christian Heritage Tour">Biblical & Christian Heritage Tour</option>
                      <option value="Private Gulet Charter">Private Gulet Charter</option>
                      <option value="Group / Church / Academic Tour">Group / Church / Academic Tour</option>
                      <option value="Travel Advisor / B2B Partnership">Travel Advisor / B2B Partnership</option>
                      <option value="Other Question">General Question</option>
                    </select>
                  </div>
                <div class="form-group">
                  <label class="form-label">Your Message or Trip Vision *</label>
                  <textarea name="contactMessage" required placeholder="Share your estimated travel dates, destinations of interest, number of travelers, or specific questions..." class="form-textarea" style="min-height: 140px;"></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  Send Message to Visit Anatolia &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
