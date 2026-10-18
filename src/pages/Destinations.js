import { DESTINATIONS } from '../data/destinations.js';

export function renderDestinationsPage(selectedRegion = 'all') {
  const regions = ['All Regions', 'Marmara', 'Central Anatolia', 'Aegean', 'Mediterranean', 'Southeastern Anatolia', 'Eastern Anatolia', 'Black Sea'];

  return `
    <main style="padding-top: var(--header-height);">
      <!-- Hero -->
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0.28;">
          <img src="/assets/real/destinations/cappadocia.jpg" alt="Turkey Destinations" style="width:100%; height:100%; object-fit: cover;" />
        </div>
        <div class="container" style="position: relative; z-index: 2; max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">Anatolian Odyssey</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            Destinations in Turkey
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            From the shores of the Bosphorus to the ancient stone heads of Mount Nemrut and the turquoise coves of the Lycian coast. Every destination can be seamlessly linked into your customized itinerary.
          </p>
        </div>
      </section>

      <!-- Region Filter Tabs -->
      <section style="background-color: var(--bg-surface); border-bottom: 1px solid var(--border-light); padding: 1rem 0; position: sticky; top: var(--header-height); z-index: 90;">
        <div class="container filter-tabs-scroll" id="destRegionFilter">
          ${regions.map(r => {
            const val = r === 'All Regions' ? 'all' : r;
            const isActive = selectedRegion === val;
            return `
              <button class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-dark'}" onclick="window.filterDestinations('${val}')" style="font-size: 0.78rem; text-transform: uppercase; white-space: nowrap;">
                ${r}
              </button>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Destinations Grid -->
      <section class="section">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;" id="destinationsGrid">
            ${DESTINATIONS.map(dest => `
              <div class="journey-card" style="cursor: pointer;" onclick="window.openDestinationModal('${dest.id}')">
                <div class="journey-card-media" style="height: 250px;">
                  <img src="${dest.image}" alt="${dest.name}" class="journey-card-img" />
                  <span class="journey-card-duration-badge">${dest.recommendedDays}</span>
                  <div style="position: absolute; bottom: 0.75rem; left: 1rem; color: #FFFFFF; font-weight: 700; font-size: 0.8rem; background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 2px; backdrop-filter: blur(4px);">
                    ${dest.region}
                  </div>
                </div>
                <div class="journey-card-body">
                  <span class="journey-card-style">${dest.tagline}</span>
                  <h3 class="journey-card-title">${dest.name}</h3>
                  <p class="journey-card-desc">${dest.summary}</p>
                  
                  <div style="margin-bottom: 1.25rem;">
                    <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block; margin-bottom: 0.4rem; font-weight: 600;">
                      Top Highlights:
                    </span>
                    <ul style="font-size: 0.82rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem;">
                      ${dest.highlights.slice(0, 3).map(h => `<li style="display:flex; gap:0.4rem;"><span style="color:var(--color-gold);">✦</span> ${h}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="journey-card-footer">
                    <span style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; color: var(--color-terracotta);">
                      Explore Guide &rarr;
                    </span>
                    <button class="btn btn-outline-dark btn-sm" onclick="event.stopPropagation(); window.includeDestinationInPlanner('${dest.name}')">
                      + Include in Trip
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="section section-sand text-center">
        <div class="container" style="max-width: 720px;">
          <h2 style="margin-bottom: 1rem; color: var(--color-navy);">Can't Decide Which Destinations to Pair?</h2>
          <p style="margin-bottom: 2rem;">
            Our Turkey travel specialists understand domestic flight timing and optimal geographic pacing. Tell us how many days you have, and we will formulate the perfect itinerary.
          </p>
          <button class="btn btn-primary btn-lg open-trip-planner-btn">
            Design My Custom Route &rarr;
          </button>
        </div>
      </section>
    </main>
  `;
}
