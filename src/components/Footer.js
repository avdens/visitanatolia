import { COMPANY_INFO } from '../data/company.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Grid -->
        <div class="footer-top-grid">
          <!-- Col 1: Brand & Philosophy -->
          <div class="footer-col">
            <div class="brand-logo-wrap" style="margin-bottom: 1.25rem;">
              <img src="/assets/real/logo.png" alt="Visit Anatolia Logo" style="height: 48px; width: auto;" />
              <div class="brand-text">
                <span class="brand-name" style="color: #FFFFFF;">Visit Anatolia</span>
                <span class="brand-sub">Tailor-Made Turkey Travel</span>
              </div>
            </div>
            <p class="footer-brand-desc">
              Visit Anatolia designs deeply personalized travel experiences across Turkey and the Eastern Mediterranean. Founded as an initiative uniting U.S.-based Alexander and Troy LLC and Turkey-based Atalante Tours, with over 30 years of premier destination management expertise.
            </p>
            <!-- Accreditations Strip in Footer -->
            <div style="margin-top: 1.5rem;">
              <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-light); display: block; margin-bottom: 0.75rem; font-weight: 600;">
                Certified Accreditations & Memberships
              </span>
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                ${COMPANY_INFO.accreditations.map(acc => `
                  <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 6px;" title="${acc.fullName}: ${acc.description}">
                    <img src="${acc.logo}" alt="${acc.name}" style="height: 22px; width: auto; object-fit: contain;" />
                    <span style="font-size: 0.75rem; font-weight: 700; color: #FFFFFF;">${acc.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Col 2: Destinations -->
          <div class="footer-col">
            <h4 class="footer-col-title">Destinations</h4>
            <div class="footer-link-list">
              <a href="#/destinations?id=istanbul" class="footer-link">Istanbul</a>
              <a href="#/destinations?id=cappadocia" class="footer-link">Cappadocia</a>
              <a href="#/destinations?id=ephesus" class="footer-link">Ephesus & Aegean</a>
              <a href="#/destinations?id=bodrum" class="footer-link">Bodrum & Turquoise Coast</a>
              <a href="#/destinations?id=antalya" class="footer-link">Antalya & Mediterranean</a>
              <a href="#/destinations?id=pamukkale" class="footer-link">Pamukkale & Aphrodisias</a>
              <a href="#/destinations?id=gobeklitepe" class="footer-link">Göbeklitepe & Şanlıurfa</a>
              <a href="#/destinations?id=nemrut" class="footer-link">Mount Nemrut</a>
              <a href="#/destinations?id=iznik-bursa" class="footer-link">İznik & Bursa</a>
            </div>
          </div>

          <!-- Col 3: Journeys & Experiences -->
          <div class="footer-col">
            <h4 class="footer-col-title">Experiences</h4>
            <div class="footer-link-list">
              <a href="#/journeys?id=steps-of-st-paul" class="footer-link">In the Steps of St. Paul</a>
              <a href="#/biblical-tours" class="footer-link">Seven Churches of Revelation</a>
              <a href="#/journeys?id=essential-turkey" class="footer-link">Essential Turkey (10-12 Days)</a>
              <a href="#/journeys?id=gulet-blue-cruise" class="footer-link">Private Gulet Yacht Charters</a>
              <a href="#/journeys?id=anatolian-antiquities" class="footer-link">Anatolian Antiquities</a>
              <a href="#/journeys?id=riches-of-judaism" class="footer-link">Riches of Judaism</a>
              <a href="#/experiences" class="footer-link">Gourmet & Cave Cooking</a>
              <a href="#/experiences" class="footer-link">Whirling Dervishes of Konya</a>
              <a href="#/services" class="footer-link">VIP Airport Fast Track</a>
              <a href="#/travel-professionals" class="footer-link">Travel Professionals (B2B DMC)</a>
            </div>
          </div>

          <!-- Col 4: Verified Offices -->
          <div class="footer-col">
            <h4 class="footer-col-title">Genuine Offices</h4>
            
            <div class="footer-office-card">
              <div class="office-title">🇺🇸 United States Office</div>
              <div class="office-detail">
                Alexander and Troy LLC<br />
                500 Nordhoff Pl<br />
                Englewood, NJ 07631, USA<br />
                <a href="tel:+12014902212" style="color: var(--color-gold-light); font-weight: 600;">+1 (201) 490-2212</a> / <a href="tel:+12016365082" style="color: var(--color-gold-light);">+1 (201) 636-5082</a>
              </div>
            </div>

            <div class="footer-office-card">
              <div class="office-title">🇹🇷 Turkey Operations & DMC</div>
              <div class="office-detail">
                Atalante Tours / Visit Anatolia<br />
                Şemsettin Günaltay Cad. No: 148/3<br />
                Erenköy, 34738 İstanbul, Turkey<br />
                <a href="tel:+902163024325" style="color: var(--color-gold-light); font-weight: 600;">+90 (216) 302-4325</a>
              </div>
            </div>

            <div style="margin-top: 1rem;">
              <span style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">Direct Inquiry:</span><br />
              <a href="mailto:contact@visitanatolia.com" style="color: var(--color-gold-light); font-size: 0.95rem; font-weight: 600;">contact@visitanatolia.com</a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>
            © 2026 Visit Anatolia. All rights reserved. Registered initiative of Alexander and Troy LLC (USA) and Atalante Tours (Turkey).
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#/about" class="footer-link">Our Story</a>
            <a href="#/services" class="footer-link">DMC Services</a>
            <a href="#/travel-professionals" class="footer-link">Travel Advisors</a>
            <a href="#/contact" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
