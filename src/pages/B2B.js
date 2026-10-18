import { COMPANY_INFO } from '../data/company.js';

export function renderB2BPage() {
  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.25;">
          <img src="/assets/real/destinations/istanbul.jpg" alt="Turkey DMC Partner" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 900px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">For Travel Professionals & Tour Operators</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4.25rem); line-height: 1.1; margin-bottom: 1.25rem;">
            Your Destination Management Partner in Turkey
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 2rem;">
            High-touch, bespoke ground handling for American and international travel advisors, boutique tour operators, luxury consortia, and corporate planners.
          </p>
          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="#partner-inquiry" class="btn btn-gold btn-lg">
              Inquire as Travel Advisor / DMC Partner &rarr;
            </a>
            <a href="tel:+12014902212" class="btn btn-outline btn-lg">
              Call US Advisor Desk
            </a>
          </div>
        </div>
      </section>

      <!-- B2B Pillars -->
      <section class="section section-sand">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">DMC Advantages</span>
            <h2 class="section-title">Why Global Advisors Partner with Visit Anatolia</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              We understand the exacting standards expected by high-net-worth travelers, private family offices, and luxury travel networks.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">Competitive Net Rates</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                Direct contracts with premier Turkish luxury hotels, private gulet fleets, and internal flight blocks ensure your agency maintains strong profit margins while delivering superior client value.
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">White-Label Proposals</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                Receive elegant, unbranded or custom-branded PDF day-by-day itineraries ready to present directly to your private clients within 24–48 hours of initial brief.
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">ASTA & TÜRSAB Trust</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                Operate with absolute peace of mind knowing our operations are backed by official TÜRSAB Group-A licensing, ASTA recognition in the USA, and IATA airline certification.
              </p>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2rem; border-radius: var(--radius-xs);">
              <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">Seamless US Timezone Support</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                No more waiting 24 hours for responses from across the globe. Our New Jersey headquarters collaborates with your agency during standard US business hours.
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
              <span class="eyebrow">DMC Partnership Inquiry</span>
              <h2 style="font-size: 2rem; color: var(--color-navy); margin-bottom: 0.5rem;">Partner With Visit Anatolia</h2>
              <p style="color: var(--text-secondary); margin: 0;">
                Tell us about your agency, client profile, or upcoming Turkey group inquiry.
              </p>
            </div>

            <form id="b2bInquiryForm" onsubmit="window.handleB2BSubmit(event)">
              <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">Advisor / Planner Name *</label>
                  <input type="text" name="b2bName" required placeholder="Your full name" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Agency / Company Name *</label>
                  <input type="text" name="agencyName" required placeholder="e.g. Bespoke Travel Advisors LLC" class="form-input" />
                </div>
              </div>

              <div class="form-two-col-grid" style="margin-bottom: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">Professional Email *</label>
                  <input type="email" name="b2bEmail" required placeholder="advisor@agency.com" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number *</label>
                  <input type="tel" name="b2bPhone" required placeholder="+1 (555) 000-0000" class="form-input" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Affiliation / Network</label>
                <select name="affiliation" class="form-select">
                  <option value="Independent Boutique Agency">Independent Boutique Agency</option>
                  <option value="Virtuoso Member">Virtuoso Member</option>
                  <option value="Signature Travel Network">Signature Travel Network</option>
                  <option value="ASTA Member">ASTA Member</option>
                  <option value="Corporate / MICE Planner">Corporate / MICE Planner</option>
                  <option value="Tour Operator / Wholesaler">Tour Operator / Wholesaler</option>
                  <option value="Church / University Ministry">Church / University Organization</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Details of Inquiry / Client Request</label>
                <textarea name="b2bNotes" placeholder="Share number of travelers, dates, destinations of interest (FIT or Group), and budget tier..." class="form-textarea"></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                Submit Partnership Request &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}
