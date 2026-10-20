import { COMPANY_INFO } from '../data/company.js';
import { JOURNEYS } from '../data/journeys.js';
import { EXPERIENCES } from '../data/experiences.js';
import { ARTICLES } from '../data/journal.js';
import { t, getLocalizedDestinations } from '../i18n/index.js';

export function renderHomePage() {
  const featuredJourney = JOURNEYS.find(j => j.id === 'steps-of-st-paul') || JOURNEYS[0];
  const editorialDests = getLocalizedDestinations().slice(0, 7);
  const arrow = t('arrow', '&rarr;');

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
              <span>${t('home.heroBadge')}</span>
            </div>

            <h1 class="hero-title">
              ${t('home.heroTitle')}
            </h1>

            <p class="hero-desc">
              ${t('home.heroDesc')}
            </p>

            <div class="hero-cta-group">
              <button class="btn btn-primary btn-lg open-trip-planner-btn">
                ${t('common.planMyTrip')}
              </button>
              <a href="#/destinations" class="btn btn-outline btn-lg">
                ${t('common.exploreDestinations')} ${arrow}
              </a>
            </div>
          </div>

          <!-- Trust & Accreditations Strip -->
          <div class="trust-strip">
            <div class="trust-stats">
              <div class="stat-item">
                <span class="stat-num">${t('home.stat1Num')}</span>
                <span class="stat-label">${t('home.stat1Label')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">${t('home.stat2Num')}</span>
                <span class="stat-label">${t('home.stat2Label')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">${t('home.stat3Num')}</span>
                <span class="stat-label">${t('home.stat3Label')}</span>
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
              <span class="eyebrow">${t('home.philosophyEyebrow')}</span>
              <h2 style="margin-bottom: 1.5rem; color: var(--color-navy);">
                ${t('home.philosophyTitle')}
              </h2>
              <p class="lead">
                ${t('home.philosophyLead')}
              </p>
              <p>
                ${t('home.philosophyP')}
              </p>
              <div class="gold-divider"></div>
              <div class="form-two-col-grid" style="margin-top: 1.5rem;">
                <div>
                  <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 0.25rem;">${t('home.directUsTitle')}</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${t('home.directUsDesc')}</p>
                </div>
                <div>
                  <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 0.25rem;">${t('home.istanbulDmcTitle')}</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${t('home.istanbulDmcDesc')}</p>
                </div>
              </div>
            </div>

            <!-- Visual Art Composition -->
            <div style="position: relative;">
              <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); position: relative; max-height: 480px; height: 100%;">
                <img src="/assets/real/destinations/cappadocia.jpg" alt="Sunrise hot air balloon over Cappadocia valleys" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="background: var(--color-navy); color: #FFFFFF; padding: 1.25rem 1.5rem; border-radius: var(--radius-xs); box-shadow: var(--shadow-lg); max-width: 280px; border-left: 3px solid var(--color-gold); margin-top: -1.5rem; margin-left: 1rem; position: relative; z-index: 3;">
                <div style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-gold); margin-bottom: 0.35rem;">Visit Anatolia</div>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.85); line-height: 1.5; margin: 0;">
                  ${t('nav.brandSub', 'Turkey Travel Experts for Tailor-Made Journeys')}
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
            <span class="eyebrow">${t('nav.destinations')}</span>
            <h2 class="section-title">${t('home.destinationsTitle')}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              ${t('home.destinationsSub')}
            </p>
          </div>

          <!-- Editorial Mosaic Layout -->
          <div class="editorial-destination-grid">
            ${editorialDests.map((dest, idx) => {
              let gridClass = 'destination-card-third';
              if (idx === 0) gridClass = 'destination-card-hero';
              else if (idx === 1) gridClass = 'destination-card-tall';
              else if (idx === 5) gridClass = 'destination-card-wide';

              return `
                <div class="dest-card ${gridClass}" onclick="window.openDestinationModal('${dest.id}')">
                  <div class="dest-card-img-wrap">
                    <img src="${dest.image}" alt="${dest.name}" class="dest-card-img" />
                  </div>
                  <div class="dest-card-overlay"></div>
                  <div class="dest-card-badge">${dest.region} &bull; ${dest.recommendedDays}</div>
                  <div class="dest-card-content">
                    <h3 class="dest-card-name">${dest.name}</h3>
                    <div class="dest-card-tagline">${dest.tagline}</div>
                    <p class="dest-card-desc">${dest.summary}</p>
                    <span class="dest-card-cta">${t('common.exploreGuide')} ${arrow}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/destinations" class="btn btn-outline-dark btn-lg">
              ${t('home.viewAllDest')}
            </a>
          </div>
        </div>
      </section>

      <!-- SIGNATURE EXPERIENCES SECTION -->
      <section class="section section-sand" id="experiences">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('nav.experiences')}</span>
            <h2 class="section-title">${t('home.experiencesTitle')}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              ${t('home.experiencesSub')}
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
                  <div class="journey-card-footer">
                    <button class="btn btn-outline-dark btn-sm open-trip-planner-btn" style="width: 100%;">
                      ${t('common.planMyTrip')} ${arrow}
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="#/experiences" class="btn btn-outline-dark">
              ${t('home.viewAllExp')}
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURED JOURNEY DEEP DIVE -->
      <section class="section section-dark" id="featured-journey">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('home.featuredTitle')}</span>
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
                    ${featuredJourney.title}
                  </h3>
                  <p style="font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.85); max-width: 800px; margin: 0;">
                    ${featuredJourney.overview}
                  </p>
                </div>
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <button class="btn btn-gold open-trip-planner-btn" onclick="window.prefillPlannerJourney('${featuredJourney.id}')">
                    ${t('common.customizeJourney')} ${arrow}
                  </button>
                </div>
              </div>
            </div>

            <!-- Day-by-Day Accordion -->
            <div class="itinerary-day-list">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-light); font-weight: 700;">
                  ${t('journeysPage.dayByDayTitle')}
                </span>
              </div>

              ${featuredJourney.itinerary.slice(0, 5).map((day, idx) => `
                <div class="itinerary-day-row ${idx === 0 ? 'active' : ''}" onclick="window.toggleItineraryDay(this)">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                      <span class="day-num-badge">${t('journeysPage.dayLabel')} ${day.day.toString().padStart(2, '0')}</span>
                      <span class="day-title-text">${day.title}</span>
                    </div>
                    <span style="color: var(--color-gold); font-size: 1.1rem;">&#9662;</span>
                  </div>
                  <div class="day-detail-content" style="${idx === 0 ? 'display:block;' : 'display:none;'}">
                    ${day.description}
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="padding: 2rem clamp(1.5rem, 3vw, 2.5rem); background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <button class="btn btn-gold btn-sm open-trip-planner-btn" onclick="window.prefillPlannerJourney('${featuredJourney.id}')">
                ${t('common.planMyTrip')} ${arrow}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY VISIT ANATOLIA (TRUST SECTION) -->
      <section class="section section-sand" id="why-us">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('home.whyUsEyebrow')}</span>
            <h2 class="section-title">${t('home.whyUsTitle')}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              ${t('home.whyUsSub')}
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

      <!-- TRAVEL INSPIRATION / JOURNAL -->
      <section class="section" id="journal">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">${t('nav.journal')}</span>
            <h2 class="section-title">${t('journalPage.title')}</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              ${t('journalPage.subtitle')}
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
                    <span style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; color: var(--color-terracotta);">${t('common.readArticle')} ${arrow}</span>
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
          <span class="eyebrow" style="color: var(--color-gold);">${t('common.planMyTrip')}</span>
          <h2 style="color: #FFFFFF; font-size: clamp(2.25rem, 4vw, 3.5rem); margin-bottom: 1.25rem;">
            ${t('home.ctaBannerTitle')}
          </h2>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 2.5rem;">
            ${t('home.ctaBannerSub')}
          </p>

          <div style="display: flex; justify-content: center; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg open-trip-planner-btn">
              ${t('home.ctaBannerBtn')}
            </button>
            <a href="tel:+12014902212" class="btn btn-outline btn-lg">
              ${t('nav.callUs')}
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
