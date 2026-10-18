import { COMPANY_INFO } from '../data/company.js';
import { DESTINATIONS } from '../data/destinations.js';
import { JOURNEYS } from '../data/journeys.js';
import { EXPERIENCES } from '../data/experiences.js';
import { ARTICLES } from '../data/journal.js';

export function renderHomePage() {
  const featuredJourney = JOURNEYS.find(j => j.id === 'steps-of-st-paul') || JOURNEYS[0];
  const editorialDests = DESTINATIONS.slice(0, 7);

  return `
    <main>
      <!-- HERO SECTION -->
      <section class="hero-section" id="hero">
        <div class="hero-background-media">
          <img src="/assets/real/destinations/istanbul.jpg" alt="Cinematic Istanbul Bosphorus at Sunset" class="hero-bg-img" />
          <div class="hero-overlay"></div>
        </div>

        <div class="container" style="position: relative; z-index: 5;">
          <div class="hero-content">
            <div class="hero-badge">
              <span>✦</span>
              <span>Boutique Turkey Travel Designers & DMC</span>
            </div>

            <h1 class="hero-title">
              Your Journey Through Turkey,<br />
              <span>Designed Around You.</span>
            </h1>

            <p class="hero-desc">
              Discover Turkey through tailor-made journeys crafted by local experts — from Istanbul and Cappadocia to ancient Greco-Roman cities, Mediterranean shores, and experiences far beyond the ordinary.
            </p>

            <div class="hero-cta-group">
              <button class="btn btn-primary btn-lg open-trip-planner-btn">
                Plan My Trip
              </button>
              <a href="#/destinations" class="btn btn-outline btn-lg">
                Explore Destinations &rarr;
              </a>
            </div>
          </div>

          <!-- Trust & Accreditations Strip -->
          <div class="trust-strip">
            <div class="trust-stats">
              <div class="stat-item">
                <span class="stat-num">30+</span>
                <span class="stat-label">Years of Travel Expertise</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">100%</span>
                <span class="stat-label">Tailor-Made Itineraries</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">USA & TR</span>
                <span class="stat-label">Dual Presence & Concierge</span>
              </div>
            </div>

            <!-- Official Accreditations -->
            <div class="accreditation-badges">
              ${COMPANY_INFO.accreditations.map(acc => `
                <div class="accreditation-badge-item" title="${acc.fullName}">
                  <img src="${acc.logo}" alt="${acc.name}" class="accreditation-logo-img" />
                  <div class="accreditation-text">
                    <span class="accreditation-name">${acc.name}</span>
                    <span class="accreditation-sub">${acc.fullName.split(' ')[0]}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- TRUST & POSITIONING SECTION -->
      <section class="section section-sand" id="positioning">
        <div class="container">
          <div class="split-feature-grid">
            <div>
              <span class="eyebrow">The Visit Anatolia Philosophy</span>
              <h2 style="margin-bottom: 1.5rem; color: var(--color-navy);">
                Turkey, Your Way.<br />
                <span style="font-style: italic; font-weight: 400; color: var(--color-terracotta);">Crafted by True Destination Insiders.</span>
              </h2>
              <p class="lead">
                Visit Anatolia does not simply sell package tours. We design personalized, private travel experiences that reflect how you love to explore.
              </p>
              <p>
                Whether you seek the quiet spiritual resonance of early Christian sanctuaries, the refined seclusion of a private wooden gulet yacht along the Turquoise Coast, an intimate culinary masterclass in a cave hotel, or a deep architectural exploration of Istanbul, our team shapes every hour around your desires, pace, and comfort.
              </p>
              <div class="gold-divider"></div>
              <div class="form-two-col-grid" style="margin-top: 1.5rem;">
                <div>
                  <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 0.25rem;">Direct US Advisory</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Plan smoothly in English in your timezone with our Englewood, NJ headquarters.</p>
                </div>
                <div>
                  <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 0.25rem;">24/7 Istanbul Concierge</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Rest easy with round-the-clock local care from our Istanbul operations team.</p>
                </div>
              </div>
            </div>

            <!-- Visual Art Composition -->
            <div style="position: relative;">
              <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); position: relative; max-height: 480px; height: 100%;">
                <img src="/assets/real/destinations/cappadocia.jpg" alt="Sunrise hot air balloon over Cappadocia valleys" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="background: var(--color-navy); color: #FFFFFF; padding: 1.25rem 1.5rem; border-radius: var(--radius-xs); box-shadow: var(--shadow-lg); max-width: 280px; border-left: 3px solid var(--color-gold); margin-top: -1.5rem; margin-left: 1rem; position: relative; z-index: 3;">
                <div style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-gold); margin-bottom: 0.35rem;">“An Insider's View”</div>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.85); line-height: 1.5; margin: 0;">
                  Replacing tedious long bus rides with short domestic flights, so you spend your time experiencing Turkey, not driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED DESTINATIONS SHOWCASE -->
      <section class="section" id="destinations">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">Explore Anatolia</span>
            <h2 class="section-title">Iconic Destinations of Turkey</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              From the imperial crossroads of Istanbul and the subterranean cave sanctuaries of Cappadocia to ancient Greco-Roman amphitheaters and azure Mediterranean bays.
            </p>
          </div>

          <!-- Editorial Mosaic Layout -->
          <div class="editorial-destination-grid">
            <!-- Istanbul (Hero Card) -->
            <div class="dest-card destination-card-hero" onclick="window.openDestinationModal('istanbul')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/istanbul.jpg" alt="Istanbul Bosphorus and Sultanahmet" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">Imperial Capital &bull; 3–5 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Istanbul</h3>
                <div class="dest-card-tagline">Crossroads of Continents & Empires</div>
                <p class="dest-card-desc">Where East meets West across the Bosphorus. Domes of Hagia Sophia, private yacht sunset cruises, Roman cisterns, and sensory spice bazaars.</p>
                <span class="dest-card-cta">Explore Istanbul &rarr;</span>
              </div>
            </div>

            <!-- Cappadocia (Tall Card) -->
            <div class="dest-card destination-card-tall" onclick="window.openDestinationModal('cappadocia')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/cappadocia.jpg" alt="Cappadocia Fairy Chimneys" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">Volcanic Wonderland &bull; 3–4 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Cappadocia</h3>
                <div class="dest-card-tagline">Fairy Chimneys & Cave Sanctuaries</div>
                <p class="dest-card-desc">Sunrise hot air ballooning, underground cities carved 8 stories deep, and 7th-century Byzantine frescoed churches.</p>
                <span class="dest-card-cta">Explore Cappadocia &rarr;</span>
              </div>
            </div>

            <!-- Ephesus (Third) -->
            <div class="dest-card destination-card-third" onclick="window.openDestinationModal('ephesus')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/ephesus.jpg" alt="Ephesus Library of Celsus" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">Greco-Roman &bull; 2–3 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Ephesus</h3>
                <div class="dest-card-tagline">Classical Roman Metropolis</div>
                <p class="dest-card-desc">Stroll Curetes marble way, stand where St. Paul preached, and visit the serene House of the Virgin Mary.</p>
                <span class="dest-card-cta">Explore Ephesus &rarr;</span>
              </div>
            </div>

            <!-- Bodrum & Turquoise Coast (Third) -->
            <div class="dest-card destination-card-third" onclick="window.openDestinationModal('bodrum')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/bodrum.jpg" alt="Bodrum Harbor and Castle" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">Aegean Riviera &bull; 3–5 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Bodrum</h3>
                <div class="dest-card-tagline">Halicarnassus & Superyachts</div>
                <p class="dest-card-desc">Chic whitewashed Aegean villas, private gulet charters, and the ruins of the ancient Halicarnassus Mausoleum.</p>
                <span class="dest-card-cta">Explore Bodrum &rarr;</span>
              </div>
            </div>

            <!-- Antalya & Mediterranean (Third) -->
            <div class="dest-card destination-card-third" onclick="window.openDestinationModal('antalya')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/antalya.jpg" alt="Antalya Old Town Harbor" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">Pamphylian Shore &bull; 3–4 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Antalya</h3>
                <div class="dest-card-tagline">Where Mountains Meet Sea</div>
                <p class="dest-card-desc">Cobblestone lanes of Kaleiçi, thunderous waterfalls, and the intact 15,000-seat Roman amphitheater of Aspendos.</p>
                <span class="dest-card-cta">Explore Antalya &rarr;</span>
              </div>
            </div>

            <!-- Göbeklitepe & Southeastern Turkey (Wide Card) -->
            <div class="dest-card destination-card-wide" onclick="window.openDestinationModal('gobeklitepe')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/gobeklitepe.jpg" alt="Gobeklitepe megalithic pillars" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">11,500 BC &bull; Zero Point in Time</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Göbeklitepe & Şanlıurfa</h3>
                <div class="dest-card-tagline">The Dawn of Human Civilization</div>
                <p class="dest-card-desc">Older than Stonehenge and the Pyramids. Monumental T-shaped megaliths carved with wildlife, paired with Harran beehive adobe homes and the sacred Abraham pools.</p>
                <span class="dest-card-cta">Explore Göbeklitepe &rarr;</span>
              </div>
            </div>

            <!-- Mount Nemrut (Tall Card) -->
            <div class="dest-card destination-card-third" onclick="window.openDestinationModal('nemrut')">
              <div class="dest-card-img-wrap">
                <img src="/assets/real/destinations/nemrut.jpg" alt="Mount Nemrut stone heads" class="dest-card-img" />
              </div>
              <div class="dest-card-overlay"></div>
              <div class="dest-card-badge">UNESCO Peak &bull; 1–2 Days</div>
              <div class="dest-card-content">
                <h3 class="dest-card-name">Mount Nemrut</h3>
                <div class="dest-card-tagline">Sanctuary of the Mountain Gods</div>
                <p class="dest-card-desc">Colossal 30-foot stone heads watching over the Mesopotamian valleys at sunrise and sunset.</p>
                <span class="dest-card-cta">Explore Nemrut &rarr;</span>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/destinations" class="btn btn-outline-dark btn-lg">
              View All 15+ Anatolian Destinations &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- HOW YOUR JOURNEY COMES TO LIFE (4-STEP PROCESS) -->
      <section class="section section-sand" id="how-it-works">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">The Bespoke Process</span>
            <h2 class="section-title">How Your Journey Comes to Life</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Planning a complex international journey should be as effortless and enjoyable as the trip itself. Here is how our boutique destination specialists bring your dream Turkey itinerary to reality.
            </p>
          </div>

          <div class="process-grid">
            <div class="process-step-card">
              <div class="step-num">01</div>
              <h3 class="step-title">Tell Us About Your Trip</h3>
              <p class="step-desc">
                Share where you wish to go, who is traveling, your approximate dates, travel style, and special passions — whether biblical history, private culinary arts, or Aegean sailing.
              </p>
            </div>

            <div class="process-step-card">
              <div class="step-num">02</div>
              <h3 class="step-title">We Design Your Journey</h3>
              <p class="step-desc">
                Our Turkey specialists in New Jersey and Istanbul craft an itemized, seamless itinerary draft, optimizing domestic flights, private guides, and boutique luxury stays.
              </p>
            </div>

            <div class="process-step-card">
              <div class="step-num">03</div>
              <h3 class="step-title">Refine It With Our Experts</h3>
              <p class="step-desc">
                Collaborate with your dedicated trip designer over phone, email, or video call. Adjust pacing, add private cooking masterclasses, or reserve special suite categories.
              </p>
            </div>

            <div class="process-step-card">
              <div class="step-num">04</div>
              <h3 class="step-title">Experience Turkey</h3>
              <p class="step-desc">
                Step off the aircraft into VIP fast-track airport care and private Mercedes transfers. Explore with your private licensed scholar guide backed by our 24/7 on-the-ground concierge.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <button class="btn btn-primary btn-lg open-trip-planner-btn">
              Start Planning My Journey
            </button>
          </div>
        </div>
      </section>

      <!-- SIGNATURE EXPERIENCES SECTION -->
      <section class="section" id="experiences">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">Curated Passions</span>
            <h2 class="section-title">Signature Travel Experiences</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Travel experiences designed around unique interests rather than generic tourist trails.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
            ${EXPERIENCES.slice(0, 6).map(exp => `
              <div class="journey-card">
                <div class="journey-card-media">
                  <img src="${exp.image}" alt="${exp.title}" class="journey-card-img" />
                  <span class="journey-card-duration-badge">${exp.category}</span>
                </div>
                <div class="journey-card-body">
                  <span class="journey-card-style">${exp.tagline}</span>
                  <h3 class="journey-card-title">${exp.title}</h3>
                  <p class="journey-card-desc">${exp.summary}</p>
                  <ul style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem;">
                    ${exp.highlights.slice(0, 2).map(h => `<li>&bull; ${h}</li>`).join('')}
                  </ul>
                  <div class="journey-card-footer">
                    <button class="btn btn-outline-dark btn-sm open-trip-planner-btn" style="width: 100%;">
                      Add Experience to Trip
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="#/experiences" class="btn btn-outline-dark">
              View All Special Interest Experiences &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURED JOURNEY DEEP DIVE: IN THE STEPS OF ST. PAUL -->
      <section class="section section-dark" id="featured-journey">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">Signature Itinerary Showcase</span>
            <h2 class="section-title" style="color: #FFFFFF;">${featuredJourney.title}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.85); max-width: 800px; margin: 0 auto;">
              ${featuredJourney.subtitle} &bull; <strong>${featuredJourney.duration}</strong>
            </p>
          </div>

          <div class="featured-itinerary-box">
            <div class="featured-itinerary-header">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1.5rem;">
                <div>
                  <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold); font-weight: 600;">
                    ${featuredJourney.style}
                  </span>
                  <h3 style="font-size: 1.75rem; color: #FFFFFF; margin-top: 0.25rem; margin-bottom: 0.75rem;">
                    From Antioch's First Christians to the Seven Churches & Nicaea
                  </h3>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.85); max-width: 800px; margin: 0;">
                    ${featuredJourney.overview}
                  </p>
                </div>
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <button class="btn btn-gold open-trip-planner-btn" onclick="window.prefillPlannerJourney('${featuredJourney.id}')">
                    Customize This Journey &rarr;
                  </button>
                </div>
              </div>

              <!-- Route Destinations List -->
              <div style="margin-top: 1rem;">
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.6); display: block; margin-bottom: 0.4rem;">
                  Route Encompasses:
                </span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  ${featuredJourney.destinations.map(d => `
                    <span style="font-size: 0.75rem; background: rgba(255,255,255,0.1); padding: 3px 8px; border-radius: 3px; color: var(--color-gold-light);">
                      ${d}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Day-by-Day Accordion -->
            <div class="itinerary-day-list">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-light); font-weight: 700;">
                  Complete 15-Day Itinerary Outline
                </span>
                <span style="font-size: 0.78rem; color: rgba(255,255,255,0.6);">Click any day to expand</span>
              </div>

              ${featuredJourney.itinerary.map((day, idx) => `
                <div class="itinerary-day-row ${idx === 0 ? 'active' : ''}" onclick="window.toggleItineraryDay(this)">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                      <span class="day-num-badge">Day ${day.day.toString().padStart(2, '0')}</span>
                      <span class="day-title-text">${day.title}</span>
                    </div>
                    <span style="color: var(--color-gold); font-size: 1.1rem; transition: transform 0.2s;">&#9662;</span>
                  </div>
                  <div class="day-detail-content" style="${idx === 0 ? 'display:block;' : 'display:none;'}">
                    ${day.description}
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="padding: 2rem clamp(1.5rem, 3vw, 2.5rem); background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div style="font-size: 0.88rem; color: rgba(255,255,255,0.75);">
                <em>* Note: Every day can be tailored to your group's theological study interests or paired with private communion services.</em>
              </div>
              <button class="btn btn-gold btn-sm open-trip-planner-btn" onclick="window.prefillPlannerJourney('${featuredJourney.id}')">
                Plan This Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- BLUE VOYAGE & MEDITERRANEAN SECTION -->
      <section class="section section-ivory" id="blue-cruise">
        <div class="container">
          <div class="split-feature-grid">
            <div style="position: relative; border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); max-height: 480px; height: 100%;">
              <img src="/assets/real/destinations/gulet.jpg" alt="Luxury Turkish Gulet Sailing on Turquoise Coast" style="width: 100%; height: 100%; object-fit: cover;" />
              <div style="position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(13,27,42,0.8); backdrop-filter: blur(8px); padding: 0.4rem 0.8rem; border-radius: var(--radius-xs); color: var(--color-gold-light); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">
                Private Gulet Charters
              </div>
            </div>

            <div>
              <span class="eyebrow">The Turquoise Coast</span>
              <h2 style="margin-bottom: 1.25rem; color: var(--color-navy);">
                Sail the Turquoise Coast<br />
                <span style="font-style: italic; font-weight: 400; color: var(--color-aegean);">Private Luxury Gulet Charters.</span>
              </h2>
              <p class="lead">
                Gulet voyages are a once-in-a-lifetime experience. The crystalline turquoise waters of the Aegean and Mediterranean create the finest swimming atmosphere in the world.
              </p>
              <p>
                Have the entire handcrafted wooden vessel reserved exclusively for your family, friends, or private couple's retreat. Accompanied by an experienced captain, deck crew, and private chef, choose from Super Luxury, Luxury, or Deluxe gulets featuring air-conditioned en-suite staterooms, full board dining, and access to untouched secret bays in the Gulf of Gökova, Göcek, and Kekova.
              </p>
              <div class="gold-divider"></div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;">
                <li style="display: flex; gap: 0.5rem; font-size: 0.95rem; color: var(--text-primary);">
                  <span style="color: var(--color-terracotta);">✓</span> Entire private vessel reserved exclusively for your group (no strangers onboard)
                </li>
                <li style="display: flex; gap: 0.5rem; font-size: 0.95rem; color: var(--text-primary);">
                  <span style="color: var(--color-terracotta);">✓</span> Full Board gourmet dining prepared fresh daily by your private chef
                </li>
                <li style="display: flex; gap: 0.5rem; font-size: 0.95rem; color: var(--text-primary);">
                  <span style="color: var(--color-terracotta);">✓</span> Custom gulet proposal delivered within 3 business days
                </li>
              </ul>
              <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary open-trip-planner-btn" onclick="window.prefillPlannerGulet()">
                  Request Gulet Proposal
                </button>
                <a href="#/journeys?id=gulet-blue-cruise" class="btn btn-outline-dark">
                  Discover Blue Voyages &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY VISIT ANATOLIA (TRUST SECTION) -->
      <section class="section section-sand" id="why-us">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">The Visit Anatolia Standard</span>
            <h2 class="section-title">More Than a Trip. A Journey Designed Personally for You.</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Drawing upon more than 30 years of premier destination management expertise across Turkey and the Eastern Mediterranean.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
            ${COMPANY_INFO.pillars.map(pillar => `
              <div style="background-color: var(--bg-surface); padding: 2.25rem 2rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='none'">
                <div style="width: 44px; height: 44px; background-color: var(--color-sand); border-radius: var(--radius-xs); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; color: var(--color-terracotta); font-size: 1.25rem;">
                  ✦
                </div>
                <h3 style="font-size: 1.3rem; color: var(--color-navy); margin-bottom: 0.75rem;">${pillar.title}</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${pillar.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- GROUPS & ORGANIZATIONS SECTION -->
      <section class="section" id="groups">
        <div class="container">
          <div style="background-color: var(--color-navy); border-radius: var(--radius-xs); color: #FFFFFF; padding: clamp(2.5rem, 5vw, 4.5rem); position: relative; overflow: hidden;">
            <div style="max-width: 720px; position: relative; z-index: 2;">
              <span class="eyebrow" style="color: var(--color-gold);">Turnkey Organization</span>
              <h2 style="color: #FFFFFF; font-size: clamp(2rem, 3.5vw, 2.75rem); margin-bottom: 1.25rem;">
                Private Groups, Churches & Academic Travel
              </h2>
              <p style="font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 2rem;">
                Visit Anatolia specializes in orchestrating large-scale and boutique private groups: Church congregations, university study abroad programs, alumni associations, choir tours, and corporate incentive gatherings. We coordinate all logistics seamlessly: private motor coaches, airport group VIP handling, banquet reservations, and customized academic lectures.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-primary open-trip-planner-btn">
                  Plan a Group Journey &rarr;
                </button>
                <a href="#/travel-professionals" class="btn btn-outline">
                  For Travel Professionals & DMC &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRAVEL INSPIRATION / EDITORIAL JOURNAL -->
      <section class="section section-sand" id="journal">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">The Anatolian Journal</span>
            <h2 class="section-title">Travel Inspiration & Insider Guides</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Essays, historical perspectives, and practical travel wisdom curated by our Turkey specialists.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            ${ARTICLES.slice(0, 3).map(art => `
              <article class="journey-card" onclick="location.hash='#/journal?id=${art.id}'" style="cursor: pointer;">
                <div class="journey-card-media" style="height: 220px;">
                  <img src="${art.image}" alt="${art.title}" class="journey-card-img" />
                  <span class="journey-card-duration-badge">${art.category}</span>
                </div>
                <div class="journey-card-body">
                  <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; display: block;">
                    ${art.date} &bull; ${art.readTime}
                  </span>
                  <h3 class="journey-card-title" style="font-size: 1.25rem;">${art.title}</h3>
                  <p class="journey-card-desc">${art.summary}</p>
                  <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-light); display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; color: var(--color-terracotta);">Read Essay &rarr;</span>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FINAL HIGH-IMPACT CONVERSION CTA -->
      <section class="section section-dark" style="text-align: center; position: relative; overflow: hidden;">
        <div class="container" style="position: relative; z-index: 2; max-width: 800px;">
          <span class="eyebrow" style="color: var(--color-gold);">Begin Your Journey</span>
          <h2 style="color: #FFFFFF; font-size: clamp(2.25rem, 4vw, 3.5rem); margin-bottom: 1.25rem;">
            Your Turkey Journey Starts Here.
          </h2>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 2.5rem;">
            Tell us where you want to go, what inspires you, and how you like to travel. Our Turkey specialists will design an itinerary crafted around you.
          </p>

          <div style="display: flex; justify-content: center; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg open-trip-planner-btn">
              Plan My Trip
            </button>
            <a href="tel:+12014902212" class="btn btn-outline btn-lg">
              Talk to a Turkey Expert
            </a>
          </div>

          <div style="margin-top: 2rem; font-size: 0.82rem; color: rgba(255,255,255,0.65);">
            🇺🇸 USA: +1 (201) 490-2212 &bull; 🇹🇷 Istanbul: +90 (216) 302-4325 &bull; contact@visitanatolia.com
          </div>
        </div>
      </section>
    </main>
  `;
}
