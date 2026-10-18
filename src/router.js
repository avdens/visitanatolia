import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderMobileBar } from './components/MobileBar.js';
import { renderTripPlannerModal } from './components/TripPlannerModal.js';
import { renderDestinationModal } from './components/DestinationModal.js';

import { renderHomePage } from './pages/Home.js';
import { renderDestinationsPage } from './pages/Destinations.js';
import { renderJourneysPage } from './pages/Journeys.js';
import { renderBiblicalToursPage } from './pages/BiblicalTours.js';
import { renderExperiencesPage } from './pages/Experiences.js';
import { renderServicesPage } from './pages/Services.js';
import { renderAboutPage } from './pages/About.js';
import { renderB2BPage } from './pages/B2B.js';
import { renderJournalPage } from './pages/Journal.js';
import { renderContactPage } from './pages/Contact.js';

const ROUTE_TITLES = {
  '#/': 'Visit Anatolia | Tailor-Made Turkey Travel & Private Journeys',
  '#/destinations': 'Destinations in Turkey | Istanbul, Cappadocia, Ephesus & Riviera | Visit Anatolia',
  '#/journeys': 'Private Turkey Journeys & Custom Itineraries | Visit Anatolia',
  '#/biblical-tours': 'Biblical Tours in Turkey & Seven Churches of Revelation | Visit Anatolia',
  '#/experiences': 'Signature Experiences & Special Interest Turkey Travel | Visit Anatolia',
  '#/services': 'DMC & Boutique Travel Services in Turkey | Visit Anatolia',
  '#/about': 'About Us | 30+ Years Turkey Destination Management | Visit Anatolia',
  '#/travel-professionals': 'For Travel Advisors & Tour Operators (Turkey DMC) | Visit Anatolia',
  '#/journal': 'Travel Inspiration & Turkey Travel Guide | Visit Anatolia',
  '#/contact': 'Contact Visit Anatolia | USA & Istanbul Offices'
};

export function initRouter() {
  const app = document.getElementById('app');

  function parseHash() {
    const raw = window.location.hash || '#/';
    const [path, queryStr] = raw.split('?');
    const params = new URLSearchParams(queryStr || '');
    return { path, params };
  }

  function handleRoute() {
    const { path, params } = parseHash();
    
    // Set Page Title
    document.title = ROUTE_TITLES[path] || ROUTE_TITLES['#/'];

    // Render Page Component
    let pageHtml = '';
    switch (path) {
      case '#/destinations':
        pageHtml = renderDestinationsPage(params.get('region') || 'all');
        break;
      case '#/journeys':
        pageHtml = renderJourneysPage(params.get('id'));
        break;
      case '#/biblical-tours':
        pageHtml = renderBiblicalToursPage();
        break;
      case '#/experiences':
        pageHtml = renderExperiencesPage();
        break;
      case '#/services':
        pageHtml = renderServicesPage();
        break;
      case '#/about':
        pageHtml = renderAboutPage();
        break;
      case '#/travel-professionals':
        pageHtml = renderB2BPage();
        break;
      case '#/journal':
        pageHtml = renderJournalPage(params.get('id'));
        break;
      case '#/contact':
        pageHtml = renderContactPage();
        break;
      case '#/':
      default:
        pageHtml = renderHomePage();
        break;
    }

    // Assemble Shell
    app.innerHTML = `
      ${renderNavbar(path)}
      ${pageHtml}
      ${renderFooter()}
      ${renderMobileBar()}
      ${renderTripPlannerModal()}
      ${renderDestinationModal()}
    `;

    // Reset Scroll
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Reattach global event listeners
    window.attachAppListeners?.();

    // Check if url asked to open a specific destination modal
    if (params.get('id') && path === '#/destinations') {
      setTimeout(() => {
        window.openDestinationModal?.(params.get('id'));
      }, 100);
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
