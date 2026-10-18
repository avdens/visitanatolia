import { DESTINATIONS } from '../data/destinations.js';

export function renderDestinationModal() {
  return `
    <div class="modal-overlay" id="destinationModal">
      <div class="planner-modal-card" style="max-width: 900px;" role="dialog" aria-modal="true" aria-labelledby="destModalTitle">
        <button class="modal-close-btn" id="closeDestModalBtn" aria-label="Close Destination">&times;</button>
        <div id="destModalContent">
          <!-- Dynamically populated -->
        </div>
      </div>
    </div>
  `;
}

export function populateDestinationModal(destinationId) {
  const dest = DESTINATIONS.find(d => d.id === destinationId) || DESTINATIONS[0];
  const container = document.getElementById('destModalContent');
  if (!container) return;

  container.innerHTML = `
    <div style="position: relative; height: clamp(200px, 32vh, 320px); overflow: hidden;">
      <img src="${dest.image}" alt="${dest.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: clamp(1rem, 3vw, 2rem); background: linear-gradient(180deg, transparent 0%, rgba(13,27,42,0.95) 100%); color: #FFFFFF;">
        <span class="eyebrow" style="color: var(--color-gold); margin-bottom: 0.25rem;">${dest.region} &bull; Recommended Stay: ${dest.recommendedDays}</span>
        <h2 id="destModalTitle" style="font-size: clamp(1.6rem, 5vw, 2.5rem); color: #FFFFFF; line-height: 1.1; margin-bottom: 0.25rem;">${dest.name}</h2>
        <p style="color: var(--color-gold-light); font-size: 0.95rem; margin-bottom: 0;">${dest.tagline}</p>
      </div>
    </div>

    <div style="padding: clamp(1.25rem, 3vw, 2.25rem);">
      <div class="dest-modal-layout-grid">
        <div>
          <h4 style="font-size: 1.25rem; color: var(--color-navy); margin-bottom: 0.75rem;">About ${dest.name}</h4>
          <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">${dest.description}</p>
          
          <h4 style="font-size: 1.15rem; color: var(--color-navy); margin-bottom: 0.75rem;">Signature Highlights</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem;">
            ${dest.highlights.map(h => `
              <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem; color: var(--text-primary);">
                <span style="color: var(--color-gold); font-size: 1.1rem; line-height: 1;">✦</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>

          <div style="background-color: var(--color-ivory); border-left: 3px solid var(--color-terracotta); padding: 1rem 1.25rem; border-radius: 0 4px 4px 0;">
            <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-terracotta); margin-bottom: 0.25rem;">
              Local Insider Tip
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.5;">${dest.insiderTip}</p>
          </div>
        </div>

        <div>
          <div style="background-color: var(--bg-surface-alt); border: 1px solid var(--border-medium); padding: 1.5rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem;">
            <div style="margin-bottom: 1.25rem;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block;">Optimal Pacing</span>
              <span style="font-size: 1.05rem; font-weight: 700; color: var(--color-navy);">${dest.recommendedDays}</span>
            </div>
            <div style="margin-bottom: 1.25rem;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block;">Best Season</span>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--color-navy);">${dest.bestTime}</span>
            </div>
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Featured Experiences</span>
              <ul style="font-size: 0.85rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
                ${dest.experiences.map(e => `<li>&bull; ${e}</li>`).join('')}
              </ul>
            </div>
          </div>

          <button class="btn btn-primary" style="width: 100%;" onclick="window.includeDestinationInPlanner('${dest.name}')">
            Include ${dest.name} in My Journey
          </button>
        </div>
      </div>
    </div>
  `;
}
