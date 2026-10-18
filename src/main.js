import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';

import { initRouter } from './router.js';
import { populateDestinationModal } from './components/DestinationModal.js';
import { DESTINATIONS } from './data/destinations.js';

let currentPlannerStep = 1;
const totalPlannerSteps = 5;

const stepNames = {
  1: 'Destinations',
  2: 'Experiences',
  3: 'Dates & Pace',
  4: 'Travelers & Style',
  5: 'Contact Details'
};

// Global App Event Handlers
window.attachAppListeners = function () {
  // 1. Header scroll listener
  const header = document.getElementById('siteHeader');
  if (header) {
    const isTransparentHeader = header.classList.contains('header-transparent');
    const handleScroll = () => {
      if (!isTransparentHeader) {
        header.classList.add('scrolled');
        return;
      }
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Drawer & Backdrop
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  const openDrawer = () => {
    mobileDrawer?.classList.add('open');
    drawerBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.onclick = openDrawer;
  if (closeDrawerBtn) closeDrawerBtn.onclick = closeDrawer;
  if (drawerBackdrop) drawerBackdrop.onclick = closeDrawer;

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = closeDrawer;
  });

  // 3. Open Trip Planner Buttons
  document.querySelectorAll('.open-trip-planner-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      window.openTripPlanner();
    };
  });

  // 4. Close Trip Planner Buttons
  const closePlannerBtn = document.getElementById('closePlannerModalBtn');
  const plannerModal = document.getElementById('tripPlannerModal');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  if (closePlannerBtn) {
    closePlannerBtn.onclick = () => window.closeTripPlanner();
  }
  if (closeSuccessBtn) {
    closeSuccessBtn.onclick = () => window.closeTripPlanner();
  }
  if (plannerModal) {
    plannerModal.onclick = (e) => {
      if (e.target === plannerModal) window.closeTripPlanner();
    };
  }

  // 5. Trip Planner Navigation (Next / Prev / Form Submit)
  const nextBtn = document.getElementById('plannerNextBtn');
  const prevBtn = document.getElementById('plannerPrevBtn');
  const form = document.getElementById('tripPlannerForm');

  if (nextBtn) {
    nextBtn.onclick = () => window.changePlannerStep(1);
  }
  if (prevBtn) {
    prevBtn.onclick = () => window.changePlannerStep(-1);
  }
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      window.handlePlannerSubmit(form);
    };
  }

  // 6. Option Box Selection Handlers
  document.querySelectorAll('.option-box').forEach(box => {
    const input = box.querySelector('input');
    if (!input) return;

    box.onclick = (e) => {
      if (input.type === 'checkbox') {
        input.checked = !input.checked;
        box.classList.toggle('selected', input.checked);
      } else if (input.type === 'radio') {
        const name = input.name;
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
          r.closest('.option-box')?.classList.remove('selected');
        });
        input.checked = true;
        box.classList.add('selected');
      }
    };
  });

  // 7. Destination Modal Close
  const closeDestBtn = document.getElementById('closeDestModalBtn');
  const destModal = document.getElementById('destinationModal');
  if (closeDestBtn) {
    closeDestBtn.onclick = () => destModal?.classList.remove('open');
  }
  if (destModal) {
    destModal.onclick = (e) => {
      if (e.target === destModal) destModal.classList.remove('open');
    };
  }
};

// Open Trip Planner Modal
window.openTripPlanner = function () {
  const modal = document.getElementById('tripPlannerModal');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  if (drawerBackdrop) drawerBackdrop.classList.remove('open');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    currentPlannerStep = 1;
    window.renderPlannerStepView();
  }
};

window.closeTripPlanner = function () {
  const modal = document.getElementById('tripPlannerModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Change Step
window.changePlannerStep = function (direction) {
  // Validate Step 5 if on step 5 and submitting
  if (direction === 1 && currentPlannerStep === 5) {
    const form = document.getElementById('tripPlannerForm');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    window.handlePlannerSubmit(form);
    return;
  }

  const newStep = currentPlannerStep + direction;
  if (newStep >= 1 && newStep <= totalPlannerSteps) {
    currentPlannerStep = newStep;
    window.renderPlannerStepView();
  }
};

window.renderPlannerStepView = function () {
  // Update step panels visibility
  for (let i = 1; i <= totalPlannerSteps; i++) {
    const panel = document.getElementById(`plannerStep${i}`);
    if (panel) {
      panel.style.display = i === currentPlannerStep ? 'block' : 'none';
    }
  }

  const successPanel = document.getElementById('plannerStepSuccess');
  if (successPanel) successPanel.style.display = 'none';

  // Update header progress & step names
  const progressFill = document.getElementById('plannerProgressFill');
  const stepIndicator = document.getElementById('stepIndicator');
  const stepNameEl = document.getElementById('stepName');

  if (progressFill) progressFill.style.width = `${(currentPlannerStep / totalPlannerSteps) * 100}%`;
  if (stepIndicator) stepIndicator.textContent = `Step ${currentPlannerStep} of ${totalPlannerSteps}`;
  if (stepNameEl) stepNameEl.textContent = stepNames[currentPlannerStep] || '';

  // Controls Visibility
  const prevBtn = document.getElementById('plannerPrevBtn');
  const nextBtn = document.getElementById('plannerNextBtn');
  const submitBtn = document.getElementById('plannerSubmitBtn');
  const footerControls = document.getElementById('plannerFooterControls');

  if (footerControls) footerControls.style.display = 'flex';
  if (prevBtn) prevBtn.style.visibility = currentPlannerStep === 1 ? 'hidden' : 'visible';

  if (currentPlannerStep === totalPlannerSteps) {
    if (nextBtn) nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'inline-flex';
  } else {
    if (nextBtn) nextBtn.style.display = 'inline-flex';
    if (submitBtn) submitBtn.style.display = 'none';
  }

  // Scroll modal to top on step change
  const modalContent = document.querySelector('.planner-modal-card');
  if (modalContent) modalContent.scrollTop = 0;
};

// Handle Planner Submit
window.handlePlannerSubmit = function (form) {
  const formData = new FormData(form);
  const fullName = formData.get('fullName') || 'Valued Guest';

  // Show success screen
  for (let i = 1; i <= totalPlannerSteps; i++) {
    const panel = document.getElementById(`plannerStep${i}`);
    if (panel) panel.style.display = 'none';
  }

  const successPanel = document.getElementById('plannerStepSuccess');
  const confirmName = document.getElementById('confirmName');
  const footerControls = document.getElementById('plannerFooterControls');

  if (confirmName) confirmName.textContent = fullName;
  if (successPanel) successPanel.style.display = 'block';
  if (footerControls) footerControls.style.display = 'none';

  // Update Progress fill to 100%
  const progressFill = document.getElementById('plannerProgressFill');
  if (progressFill) progressFill.style.width = '100%';
  const stepIndicator = document.getElementById('stepIndicator');
  if (stepIndicator) stepIndicator.textContent = 'Completed';
  const stepNameEl = document.getElementById('stepName');
  if (stepNameEl) stepNameEl.textContent = 'Proposal In Progress';
};

// Prefill Actions
window.prefillPlannerJourney = function (journeyId) {
  window.openTripPlanner();
  // Select matching destination or note
  const notesTextarea = document.querySelector('textarea[name="notes"]');
  if (notesTextarea) {
    notesTextarea.value = `Interested in the "${journeyId.replace(/-/g, ' ').toUpperCase()}" tour program. Please customize based on our preferred travel dates.`;
  }
};

window.prefillPlannerBiblical = function () {
  window.openTripPlanner();
  // Select Biblical in Step 2 & Seven Churches in Step 1
  document.querySelectorAll('input[value="Seven Churches"], input[value="Biblical & Christian Heritage"]').forEach(input => {
    input.checked = true;
    input.closest('.option-box')?.classList.add('selected');
  });
  const notesTextarea = document.querySelector('textarea[name="notes"]');
  if (notesTextarea) {
    notesTextarea.value = 'Interested in a Biblical & Christian Heritage / Seven Churches of Revelation tour.';
  }
};

window.prefillPlannerGulet = function () {
  window.openTripPlanner();
  document.querySelectorAll('input[value="Gulet"], input[value="Luxury Sailing & Blue Cruise"]').forEach(input => {
    input.checked = true;
    input.closest('.option-box')?.classList.add('selected');
  });
  const notesTextarea = document.querySelector('textarea[name="notes"]');
  if (notesTextarea) {
    notesTextarea.value = 'Interested in a private Gulet Yacht Charter along the Turquoise Coast.';
  }
};

window.prefillPlannerExperience = function (expName) {
  window.openTripPlanner();
  const notesTextarea = document.querySelector('textarea[name="notes"]');
  if (notesTextarea) {
    notesTextarea.value = `We are specifically interested in experiencing: ${expName}.`;
  }
};

window.includeDestinationInPlanner = function (destName) {
  const destModal = document.getElementById('destinationModal');
  if (destModal) destModal.classList.remove('open');
  window.openTripPlanner();

  // Find destination checkbox
  document.querySelectorAll('input[name="destinations"]').forEach(input => {
    if (input.value.toLowerCase().includes(destName.toLowerCase())) {
      input.checked = true;
      input.closest('.option-box')?.classList.add('selected');
    }
  });
};

// Destination Modal
window.openDestinationModal = function (destinationId) {
  populateDestinationModal(destinationId);
  const modal = document.getElementById('destinationModal');
  if (modal) modal.classList.add('open');
};

// Itinerary Accordions
window.toggleItineraryDay = function (rowElement) {
  const content = rowElement.querySelector('.day-detail-content');
  if (!content) return;
  const isShown = content.style.display === 'block';
  content.style.display = isShown ? 'none' : 'block';
  rowElement.classList.toggle('active', !isShown);
};

window.toggleCatalogDayDetails = function (journeyId) {
  const details = document.getElementById(`details-${journeyId}`);
  const btn = document.getElementById(`btn-toggle-${journeyId}`);
  if (!details) return;

  const isShown = details.style.display === 'block';
  details.style.display = isShown ? 'none' : 'block';
  if (btn) {
    btn.innerHTML = isShown ? 'View Day-by-Day Itinerary &#9662;' : 'Hide Day-by-Day Itinerary &#9652;';
  }
};

// Destination Region Filter
window.filterDestinations = function (region) {
  window.location.hash = `#/destinations?region=${encodeURIComponent(region)}`;
};

// Form Submissions
window.handleContactSubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="contactName"]')?.value || 'Guest';
  
  form.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="font-size: 2.5rem; color: var(--color-terracotta); margin-bottom: 0.5rem;">✓</div>
      <h3 style="font-size: 1.5rem; color: var(--color-navy); margin-bottom: 0.5rem;">Message Received</h3>
      <p style="color: var(--text-secondary); line-height: 1.6;">
        Thank you, <strong>${name}</strong>. Our team in Englewood, New Jersey and Istanbul has received your message and will reply within 24 hours.
      </p>
    </div>
  `;
};

window.handleB2BSubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const agency = form.querySelector('[name="agencyName"]')?.value || 'Partner';
  
  form.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="font-size: 2.5rem; color: var(--color-gold); margin-bottom: 0.5rem;">✓</div>
      <h3 style="font-size: 1.5rem; color: var(--color-navy); margin-bottom: 0.5rem;">Partnership Inquiry Received</h3>
      <p style="color: var(--text-secondary); line-height: 1.6;">
        Thank you. Our US and Istanbul Travel Advisor Desks have received your inquiry for <strong>${agency}</strong>. A senior account manager will reach out with our DMC agency kit and net rates.
      </p>
    </div>
  `;
};

// Initialize Application
initRouter();
