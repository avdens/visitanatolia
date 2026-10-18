import { ARTICLES } from '../data/journal.js';

export function renderJournalPage(articleId = null) {
  if (articleId) {
    const article = ARTICLES.find(a => a.id === articleId) || ARTICLES[0];
    return `
      <main style="padding-top: var(--header-height);">
        <!-- Article Header -->
        <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 6rem 0 4rem; position: relative;">
          <div class="container-narrow text-center">
            <a href="#/journal" style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold); font-weight: 700; display: inline-block; margin-bottom: 1.5rem;">
              &larr; Back to Inspiration Journal
            </a>
            <span class="eyebrow" style="color: var(--color-gold); display: block;">${article.category}</span>
            <h1 style="color: #FFFFFF; font-size: clamp(2.2rem, 4.5vw, 3.5rem); line-height: 1.15; margin-bottom: 1rem;">
              ${article.title}
            </h1>
            <div style="font-size: 0.88rem; color: rgba(255,255,255,0.7);">
              ${article.date} &bull; ${article.readTime}
            </div>
          </div>
        </section>

        <!-- Article Image -->
        <section style="max-width: 1040px; margin: -2.5rem auto 0; padding: 0 1.5rem; position: relative; z-index: 5;">
          <div style="border-radius: var(--radius-xs); overflow: hidden; box-shadow: var(--shadow-xl); height: clamp(240px, 45vh, 480px);">
            <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </section>

        <!-- Article Content -->
        <section class="section">
          <div class="container-narrow">
            <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem;">
              <p class="lead" style="font-size: 1.35rem; color: var(--color-navy); margin-bottom: 1.5rem;">
                ${article.summary}
              </p>
              <div class="gold-divider"></div>
              <div style="margin-top: 2rem;">
                ${article.content.split('\n\n').map(p => {
                  if (p.startsWith('### ')) {
                    return `<h3 style="font-size: 1.6rem; color: var(--color-navy); margin: 2rem 0 0.75rem;">${p.replace('### ', '')}</h3>`;
                  }
                  if (p.startsWith('1. ') || p.startsWith('2. ') || p.startsWith('3. ')) {
                    return `<p style="margin-bottom: 1rem;">${p}</p>`;
                  }
                  return `<p style="margin-bottom: 1.5rem;">${p}</p>`;
                }).join('')}
              </div>
            </div>

            <div style="border-top: 1px solid var(--border-light); padding-top: 2.5rem; margin-top: 3rem; background: var(--color-sand); padding: 2.5rem; border-radius: var(--radius-xs); text-align: center;">
              <h3 style="font-size: 1.6rem; color: var(--color-navy); margin-bottom: 0.75rem;">Inspired to Experience This in Person?</h3>
              <p style="max-width: 600px; margin: 0 auto 1.5rem; color: var(--text-secondary);">
                Every journey is designed around your unique travel style and personal interests. Talk to our Turkey travel designers today.
              </p>
              <button class="btn btn-primary btn-lg open-trip-planner-btn">
                Plan My Turkey Journey &rarr;
              </button>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  // Articles Index
  return `
    <main style="padding-top: var(--header-height);">
      <section style="background-color: var(--color-navy-dark); color: #FFFFFF; padding: 5rem 0 4rem; position: relative;">
        <div class="container" style="max-width: 860px; text-align: center;">
          <span class="eyebrow" style="color: var(--color-gold);">The Anatolian Journal</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.25rem;">
            Travel Inspiration & Insider Guides
          </h1>
          <div class="gold-divider center"></div>
          <p style="font-size: 1.15rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 0;">
            Expert advice, biblical archaeology insights, culinary perspectives, and travel planning wisdom penned by our senior Turkey travel specialists.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
            ${ARTICLES.map(art => `
              <article class="journey-card" onclick="location.hash='#/journal?id=${art.id}'" style="cursor: pointer;">
                <div class="journey-card-media" style="height: 240px;">
                  <img src="${art.image}" alt="${art.title}" class="journey-card-img" />
                  <span class="journey-card-duration-badge">${art.category}</span>
                </div>
                <div class="journey-card-body">
                  <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; display: block;">
                    ${art.date} &bull; ${art.readTime}
                  </span>
                  <h3 class="journey-card-title" style="font-size: 1.35rem;">${art.title}</h3>
                  <p class="journey-card-desc">${art.summary}</p>
                  <div style="margin-top: auto; padding-top: 1.25rem; border-top: 1px solid var(--border-light); display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-terracotta);">
                      Read Guide &rarr;
                    </span>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}
