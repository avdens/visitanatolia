import { COMPANY_INFO } from '../data/company.js';

export function renderNavbar(activeRoute = '#/') {
  const isHome = activeRoute === '#/' || activeRoute === '' || activeRoute === '#';

  return `
    <header class="site-header ${isHome ? 'header-transparent' : 'header-solid scrolled'}" id="siteHeader">
      <div class="container header-container">
        <!-- Logo -->
        <a href="#/" class="brand-logo-wrap" aria-label="Visit Anatolia Home">
          <img src="/assets/real/logo.png" alt="Visit Anatolia Logo" class="brand-logo-img" />
          <div class="brand-text">
            <span class="brand-name">Visit Anatolia</span>
            <span class="brand-sub">Tailor-Made Turkey</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="main-nav" aria-label="Main Navigation">
          <a href="#/destinations" class="nav-link ${activeRoute === '#/destinations' ? 'active' : ''}">Destinations</a>
          <a href="#/journeys" class="nav-link ${activeRoute === '#/journeys' ? 'active' : ''}">Journeys</a>
          <a href="#/biblical-tours" class="nav-link ${activeRoute === '#/biblical-tours' ? 'active' : ''}">Biblical Tours</a>
          <a href="#/experiences" class="nav-link ${activeRoute === '#/experiences' ? 'active' : ''}">Experiences</a>
          <a href="#/services" class="nav-link ${activeRoute === '#/services' ? 'active' : ''}">Services</a>
          <a href="#/about" class="nav-link ${activeRoute === '#/about' ? 'active' : ''}">About Us</a>
          <a href="#/journal" class="nav-link ${activeRoute === '#/journal' ? 'active' : ''}">Journal</a>
          <a href="#/contact" class="nav-link ${activeRoute === '#/contact' ? 'active' : ''}">Contact</a>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <a href="tel:+12014902212" class="header-phone-link" title="Call our US office: +1 (201) 490-2212">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span class="phone-text">+1 201 490 2212</span>
          </a>
          <button class="btn btn-primary btn-sm open-trip-planner-btn" id="navPlanTripBtn">
            Plan My Trip
          </button>
          <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle Navigation Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Backdrop & Drawer -->
    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <div class="mobile-drawer" id="mobileDrawer">
      <div class="mobile-drawer-close" id="closeDrawerBtn">&times;</div>
      <nav class="mobile-nav-links">
        <a href="#/" class="mobile-nav-link ${isHome ? 'active' : ''}">Home</a>
        <a href="#/destinations" class="mobile-nav-link ${activeRoute === '#/destinations' ? 'active' : ''}">Destinations</a>
        <a href="#/journeys" class="mobile-nav-link ${activeRoute === '#/journeys' ? 'active' : ''}">Private Journeys</a>
        <a href="#/biblical-tours" class="mobile-nav-link ${activeRoute === '#/biblical-tours' ? 'active' : ''}">Biblical Tours</a>
        <a href="#/experiences" class="mobile-nav-link ${activeRoute === '#/experiences' ? 'active' : ''}">Signature Experiences</a>
        <a href="#/services" class="mobile-nav-link ${activeRoute === '#/services' ? 'active' : ''}">Services & DMC</a>
        <a href="#/about" class="mobile-nav-link ${activeRoute === '#/about' ? 'active' : ''}">About Visit Anatolia</a>
        <a href="#/travel-professionals" class="mobile-nav-link ${activeRoute === '#/travel-professionals' ? 'active' : ''}">For Travel Professionals (B2B)</a>
        <a href="#/journal" class="mobile-nav-link ${activeRoute === '#/journal' ? 'active' : ''}">Travel Inspiration</a>
        <a href="#/contact" class="mobile-nav-link ${activeRoute === '#/contact' ? 'active' : ''}">Contact & Offices</a>
      </nav>
      <div style="margin-top: auto;">
        <button class="btn btn-primary btn-lg open-trip-planner-btn" style="width: 100%; margin-bottom: 1rem;">
          Plan My Trip
        </button>
        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); text-align: center;">
          USA: +1 201 490 2212 | TR: +90 216 302 4325
        </p>
      </div>
    </div>
  `;
}
