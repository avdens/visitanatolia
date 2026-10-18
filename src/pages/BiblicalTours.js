import { BIBLICAL_DATA } from '../data/biblicalData.js';
import { JOURNEYS } from '../data/journeys.js';

export function renderBiblicalToursPage() {
  const stPaulTour = JOURNEYS.find(j => j.id === 'steps-of-st-paul') || JOURNEYS[0];

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 5rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.32;">
          <img src="/assets/real/destinations/seven_churches.jpg" alt="Ancient Ruins of Biblical Asia Minor" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 900px; text-align: center;">
          <div class="hero-badge" style="margin-bottom: 1.25rem;">
            <span>✦</span>
            <span>Spiritual Pilgrimage & Biblical Archaeology</span>
          </div>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4.25rem); line-height: 1.1; margin-bottom: 1.25rem;">
            Biblical Tours in Turkey & Asia Minor
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 2rem;">
            Walk the sacred soil where the Apostle Paul was born and embarked on his missionary journeys, visit the cave grotto of Antioch where believers were first called Christians, explore the Seven Churches of Revelation, and stand where the early Church councils shaped the Christian creed.
          </p>
          <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
            <button class="btn btn-gold btn-lg open-trip-planner-btn" onclick="window.prefillPlannerBiblical()">
              Plan a Biblical Journey &rarr;
            </button>
            <a href="#itinerary-st-paul" class="btn btn-outline btn-lg">
              View 15-Day St. Paul Itinerary &darr;
            </a>
          </div>
        </div>
      </section>

      <!-- The Significance of Asia Minor in the New Testament -->
      <section class="section section-sand">
        <div class="container">
          <div class="split-feature-grid" style="align-items: center;">
            <div>
              <span class="eyebrow">Apostolic Heritage</span>
              <h2 style="color: var(--color-navy); margin-bottom: 1.25rem;">
                Two-Thirds of the New Testament Unfolded in Turkey
              </h2>
              <p class="lead">
                While many travelers instinctively think of Jerusalem when planning a pilgrimage, Turkey was the crucible where Christianity transitioned from a local movement into a world faith.
              </p>
              <p>
                From Paul's birthplace in <strong>Tarsus</strong> and the cave sanctuary in <strong>Antioch on the Orontes</strong> to his sermons at the synagogues of <strong>Pisidian Antioch</strong> and the Great Theatre of <strong>Ephesus</strong>, modern Turkey preserves the most intact Roman and early Christian archaeological sites in the world.
              </p>
              <p>
                Visit Anatolia has designed Christian heritage journeys for over 30 years. We partner directly with pastors, university seminaries, Bible study groups, and church congregations to craft spiritually reverent, archaeologically rigorous, and time-optimized pilgrimages.
              </p>
              <div class="gold-divider"></div>
              <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <div>
                  <div style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-terracotta); font-weight: 700;">7</div>
                  <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Churches of Revelation</div>
                </div>
                <div>
                  <div style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-terracotta); font-weight: 700;">3</div>
                  <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Missionary Journeys of Paul</div>
                </div>
                <div>
                  <div style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-terracotta); font-weight: 700;">7</div>
                  <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Ecumenical Councils</div>
                </div>
              </div>
            </div>

            <div style="position: relative;">
              <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); height: clamp(260px, 45vh, 460px);">
                <img src="/assets/real/gallery/bergama_theatre.jpg" alt="Ancient Pergamum Theatre in Turkey" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="position: absolute; bottom: 12px; right: 12px; background: var(--color-navy); color: #FFFFFF; padding: 1rem 1.25rem; border-radius: var(--radius-xs); box-shadow: var(--shadow-lg); border-left: 3px solid var(--color-gold); max-width: calc(100% - 24px);">
                <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold); font-weight: 700;">Acts 11:26</span>
                <p style="font-size: 0.88rem; font-style: italic; margin-top: 0.35rem; margin-bottom: 0; line-height: 1.45;">
                  “And the disciples were called Christians first in Antioch.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- THE SEVEN CHURCHES OF REVELATION DIRECTORY -->
      <section class="section" id="seven-churches">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">The Johannine Vision</span>
            <h2 class="section-title">The Seven Churches of Revelation</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Ponder the messages penned by the Apostle John from the island of Patmos to the historic Christian congregations of first-century Roman Asia.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
            ${BIBLICAL_DATA.sevenChurches.map(ch => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 1.75rem; border-radius: var(--radius-xs); border-top: 3px solid var(--color-gold); box-shadow: var(--shadow-sm); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='none'">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; gap: 0.5rem; flex-wrap: wrap;">
                  <h3 style="font-size: 1.35rem; color: var(--color-navy); margin: 0;">${ch.name}</h3>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-terracotta); background: var(--color-terracotta-light); padding: 2px 8px; border-radius: 3px;">
                    ${ch.scripture}
                  </span>
                </div>
                <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-gold-muted); margin-bottom: 0.75rem;">
                  ${ch.message}
                </div>
                <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary); margin: 0;">
                  ${ch.significance}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- KEY APOSTOLIC SITES IN ANATOLIA -->
      <section class="section section-sand">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow">Sacred Geography</span>
            <h2 class="section-title">Key Apostolic & Early Church Sites</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle">
              Explore the critical milestones of the Apostle Paul, Peter, John, and the early Church Fathers.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${BIBLICAL_DATA.apostolicSites.map(site => `
              <div style="background: var(--bg-surface); padding: 1.75rem; border-radius: var(--radius-xs); border: 1px solid var(--border-light);">
                <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-terracotta); font-weight: 700; display: block; margin-bottom: 0.25rem;">
                  ${site.biblicalReference}
                </span>
                <h4 style="font-size: 1.25rem; color: var(--color-navy); margin-bottom: 0.5rem;">${site.site}</h4>
                <p style="font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); margin: 0;">${site.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 15-DAY IN THE STEPS OF ST. PAUL TOUR EMBED -->
      <section class="section section-dark" id="itinerary-st-paul">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow" style="color: var(--color-gold);">Flagship Pilgrimage Itinerary</span>
            <h2 class="section-title" style="color: #FFFFFF;">In the Steps of St. Paul & The Seven Churches</h2>
            <div class="gold-divider center"></div>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.85); max-width: 800px; margin: 0 auto;">
              15 Days / 14 Nights &bull; Ankara, Cappadocia, Antioch, Tarsus, Konya, Perge, Pamukkale, Seven Churches, Ephesus, Pergamum, Nicaea & Istanbul
            </p>
          </div>

          <div class="featured-itinerary-box">
            <div class="featured-itinerary-header">
              <p style="font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin-bottom: 1.5rem;">
                Starting from Ankara or Istanbul, follow the exact missionary routes of Paul and Barnabas. Breathe the air of the magical historical sites where the Gospel first transformed ancient civilization, while resting in comfortable luxury hotels and premier cave suites.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-gold btn-lg open-trip-planner-btn" onclick="window.prefillPlannerJourney('steps-of-st-paul')">
                  Customize This 15-Day Pilgrimage &rarr;
                </button>
              </div>
            </div>

            <div class="itinerary-day-list">
              ${stPaulTour.itinerary.map(day => `
                <div class="itinerary-day-row" onclick="window.toggleItineraryDay(this)">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                      <span class="day-num-badge">Day ${day.day.toString().padStart(2, '0')}</span>
                      <span class="day-title-text">${day.title}</span>
                    </div>
                    <span style="color: var(--color-gold); font-size: 1.1rem;">&#9662;</span>
                  </div>
                  <div class="day-detail-content" style="display:none;">
                    ${day.description}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- DEDICATED PASTOR & CHURCH GROUP PLANNING -->
      <section class="section section-sand">
        <div class="container" style="max-width: 900px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 3rem clamp(1.5rem, 4vw, 3.5rem); border-radius: var(--radius-xs); box-shadow: var(--shadow-lg);">
            <span class="eyebrow">${BIBLICAL_DATA.pastorResources.title}</span>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); color: var(--color-navy); margin-bottom: 1.25rem;">
              Partnering with Churches, Pastors & Seminaries
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.75rem;">
              Organizing a church or seminary study tour requires meticulous care, theological alignment, and seamless execution. We assist pastors and ministry coordinators every step of the way:
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
              ${BIBLICAL_DATA.pastorResources.points.map(pt => `
                <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.95rem; color: var(--text-primary); line-height: 1.5;">
                  <span style="color: var(--color-terracotta); font-size: 1.2rem; line-height: 1;">✦</span>
                  <span>${pt}</span>
                </li>
              `).join('')}
            </ul>

            <div style="border-top: 1px solid var(--border-light); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div>
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy); display: block;">Speak with our Biblical Tour Specialist:</span>
                <span style="font-size: 0.95rem; color: var(--color-terracotta); font-weight: 700;">+1 (201) 490-2212 &bull; contact@visitanatolia.com</span>
              </div>
              <button class="btn btn-primary" onclick="window.prefillPlannerBiblical()">
                Request Church Group Proposal &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
