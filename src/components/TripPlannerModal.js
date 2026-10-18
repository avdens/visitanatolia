import { DESTINATIONS } from '../data/destinations.js';

export function renderTripPlannerModal() {
  return `
    <div class="modal-overlay" id="tripPlannerModal">
      <div class="planner-modal-card" role="dialog" aria-modal="true" aria-labelledby="plannerTitle">
        <button class="modal-close-btn" id="closePlannerModalBtn" aria-label="Close Trip Planner">&times;</button>
        
        <!-- Header -->
        <div class="planner-header">
          <span class="eyebrow" style="color: var(--color-gold); margin-bottom: 0.25rem;">Tailor-Made Journey Designer</span>
          <h2 id="plannerTitle" style="font-size: clamp(1.6rem, 3vw, 2.25rem); color: #FFFFFF; margin-bottom: 0.5rem;">
            Design Your Turkey Journey
          </h2>
          <p style="color: rgba(255,255,255,0.8); font-size: 0.95rem; margin-bottom: 0;">
            Tell us about your travel style, interests, and dates. Our Turkey specialists will design a custom itinerary crafted entirely around you.
          </p>

          <div class="planner-progress-bar">
            <div class="planner-progress-fill" id="plannerProgressFill" style="width: 20%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.4rem;">
            <span id="stepIndicator">Step 1 of 5</span>
            <span id="stepName">Destinations</span>
          </div>
        </div>

        <!-- Body Form -->
        <form id="tripPlannerForm" class="planner-body">
          <!-- STEP 1: Destinations -->
          <div class="planner-step-panel" id="plannerStep1" data-step="1">
            <h3 class="step-question-title">1. Which destinations would you like to visit?</h3>
            <p class="step-question-sub">Select all destinations you are drawn to (or pick 'Design It for Me' and our experts will advise).</p>
            
            <div class="options-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
              <label class="option-box">
                <input type="checkbox" name="destinations" value="Istanbul" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Istanbul</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Bosphorus & Empires</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Cappadocia" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Cappadocia</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Balloons & Cave Suites</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Ephesus" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Ephesus & Aegean</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Greco-Roman Glory</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Bodrum" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Bodrum</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Turquoise Coast & Marina</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Antalya" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Antalya & Aspendos</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Mediterranean Coast</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Pamukkale" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Pamukkale</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">White Thermal Travertines</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Gobeklitepe" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Göbeklitepe</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">11,500-yr Ancient Temple</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Nemrut" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Mount Nemrut</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Colossal Stone Gods</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Gulet" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Gulet Blue Cruise</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Private Yacht Charter</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Seven Churches" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">Seven Churches</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Biblical Asia Minor</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Expert Advice" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem; color: var(--color-terracotta);">✨ Advise Me</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Design best route for my time</span>
              </label>
            </div>
          </div>

          <!-- STEP 2: Interests -->
          <div class="planner-step-panel" id="plannerStep2" data-step="2" style="display:none;">
            <h3 class="step-question-title">2. What experiences inspire your journey?</h3>
            <p class="step-question-sub">Select the themes that will shape your private custom itinerary.</p>
            
            <div class="options-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
              <label class="option-box">
                <input type="checkbox" name="interests" value="Classical History & Archaeology" style="display:none;" />
                <span style="font-weight: 600;">Classical History & Archaeology</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Roman, Byzantine, Ottoman ruins</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Biblical & Christian Heritage" style="display:none;" />
                <span style="font-weight: 600;">Biblical & Christian Heritage</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">St. Paul, St. Peter, Seven Churches</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Food, Wine & Private Cooking" style="display:none;" />
                <span style="font-weight: 600;">Food, Wine & Private Cooking</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Market visits, cave kitchens, mezes</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Luxury Sailing & Blue Cruise" style="display:none;" />
                <span style="font-weight: 600;">Luxury Sailing & Gulets</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Private wooden yacht & secluded bays</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Family & Multi-Generational" style="display:none;" />
                <span style="font-weight: 600;">Family & Multi-Gen Travel</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Engaging pacing for all ages</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Active Adventure & Hiking" style="display:none;" />
                <span style="font-weight: 600;">Active Nature & Hiking</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Lycian Way, horseback, kayaking</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Jewish Heritage" style="display:none;" />
                <span style="font-weight: 600;">Jewish Heritage</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Historic synagogues & Sephardic roots</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Wellness, Hamam & Spas" style="display:none;" />
                <span style="font-weight: 600;">Hamam & Thermal Wellness</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Ancient baths & mineral waters</span>
              </label>
            </div>
          </div>

          <!-- STEP 3: Dates & Duration -->
          <div class="planner-step-panel" id="plannerStep3" data-step="3" style="display:none;">
            <h3 class="step-question-title">3. When would you like to travel, and for how long?</h3>
            <p class="step-question-sub">Approximate dates are fine. We will optimize the seasonal pacing.</p>
            
            <div class="planner-two-col-grid" style="margin-bottom: 1.5rem;">
              <div class="form-group">
                <label class="form-label">Approximate Travel Month / Season</label>
                <select name="travelMonth" class="form-select" id="travelMonthSelect">
                  <option value="">Select Target Month...</option>
                  <option value="Spring (April – May)">Spring 2026 (April – May)</option>
                  <option value="Summer (June – August)">Summer 2026 (June – August)</option>
                  <option value="Autumn (September – November)">Autumn 2026 (September – November)</option>
                  <option value="Winter (December – February)">Winter (December – February)</option>
                  <option value="Specific Dates">I have exact dates (mention in notes)</option>
                  <option value="Flexible">Completely Flexible</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Approximate Trip Duration</label>
                <select name="duration" class="form-select" id="durationSelect">
                  <option value="7 – 9 Days">7 – 9 Days (Compact Highlights)</option>
                  <option value="10 – 12 Days" selected>10 – 12 Days (Recommended Standard)</option>
                  <option value="14 – 16 Days">14 – 16 Days (In-Depth Exploration)</option>
                  <option value="17+ Days">17+ Days (Comprehensive Grand Tour)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Desired Pace</label>
              <div class="options-grid">
                <label class="option-box">
                  <input type="radio" name="pace" value="Relaxed" style="display:none;" />
                  <span style="font-weight: 600;">Relaxed & Unhurried</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Multiple nights per stop, leisurely mornings</span>
                </label>
                <label class="option-box selected">
                  <input type="radio" name="pace" value="Balanced" checked style="display:none;" />
                  <span style="font-weight: 600;">Balanced</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Optimal mix of highlights & free time</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="pace" value="Comprehensive" style="display:none;" />
                  <span style="font-weight: 600;">Comprehensive</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">See as much as possible with flight routing</span>
                </label>
              </div>
            </div>
          </div>

          <!-- STEP 4: Travelers & Style -->
          <div class="planner-step-panel" id="plannerStep4" data-step="4" style="display:none;">
            <h3 class="step-question-title">4. Who is traveling, and what accommodation style do you prefer?</h3>
            <p class="step-question-sub">Every hotel is hand-vetted for location, authentic character, and service quality.</p>
            
            <div class="planner-three-col-grid" style="margin-bottom: 1.5rem;">
              <div class="form-group">
                <label class="form-label">Adults (18+)</label>
                <input type="number" name="adults" min="1" max="50" value="2" class="form-input" />
              </div>
              <div class="form-group">
                <label class="form-label">Children (<18)</label>
                <input type="number" name="children" min="0" max="20" value="0" class="form-input" />
              </div>
              <div class="form-group">
                <label class="form-label">Number of Rooms</label>
                <input type="number" name="rooms" min="1" max="25" value="1" class="form-input" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Preferred Accommodation Style</label>
              <div class="options-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                <label class="option-box">
                  <input type="radio" name="hotelStyle" value="5-Star Luxury & Palaces" style="display:none;" />
                  <span style="font-weight: 600;">5-Star Luxury & Palaces</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Ottoman waterfronts, premier cave suites</span>
                </label>
                <label class="option-box selected">
                  <input type="radio" name="hotelStyle" value="Boutique Heritage & Charm" checked style="display:none;" />
                  <span style="font-weight: 600;">Boutique Heritage & Charm</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Character-rich mansions, historic ambiance</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="hotelStyle" value="Premium Comfort" style="display:none;" />
                  <span style="font-weight: 600;">Premium Comfort</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Excellent 4-to-5-star high-value properties</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="hotelStyle" value="Ultra-VIP & Private Yacht" style="display:none;" />
                  <span style="font-weight: 600;">Ultra-VIP & Private Gulet</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">Private villas, superyachts, personal chef</span>
                </label>
              </div>
            </div>
          </div>

          <!-- STEP 5: Contact Details -->
          <div class="planner-step-panel" id="plannerStep5" data-step="5" style="display:none;">
            <h3 class="step-question-title">5. Where should we send your custom proposal?</h3>
            <p class="step-question-sub">A senior Turkey travel designer from our US or Istanbul office will contact you within 24–48 business hours with a bespoke proposal.</p>
            
            <div class="planner-two-col-grid" style="margin-bottom: 1.25rem;">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" name="fullName" required placeholder="e.g. Eleanor Vance" class="form-input" id="plannerFullName" />
              </div>
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" name="email" required placeholder="e.g. eleanor@example.com" class="form-input" id="plannerEmail" />
              </div>
            </div>

            <div class="planner-two-col-grid" style="margin-bottom: 1.25rem;">
              <div class="form-group">
                <label class="form-label">Phone / WhatsApp Number *</label>
                <input type="tel" name="phone" required placeholder="e.g. +1 (555) 123-4567" class="form-input" id="plannerPhone" />
              </div>
              <div class="form-group">
                <label class="form-label">Country of Residence</label>
                <input type="text" name="country" placeholder="e.g. United States, Canada, UK..." class="form-input" id="plannerCountry" value="United States" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Tell us about your dream trip or special requests (Optional)</label>
              <textarea name="notes" placeholder="Any specific sights, dietary preferences, special occasion (anniversary, honeymoon, milestone birthday), or church denomination focus?" class="form-textarea"></textarea>
            </div>

            <div style="background-color: var(--color-ivory); border: 1px solid var(--border-medium); padding: 1rem; border-radius: var(--radius-xs); display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.2rem;">🔒</span>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0;">
                <strong>Privacy Guarantee:</strong> We respect your time and privacy. Your contact details are strictly used to coordinate your customized Turkey itinerary proposal. We never sell or share information.
              </p>
            </div>
          </div>

          <!-- STEP 6: Confirmation Screen -->
          <div class="planner-step-panel" id="plannerStepSuccess" data-step="success" style="display:none; text-align: center; padding: 2.5rem 1rem;">
            <div style="width: 72px; height: 72px; background-color: var(--color-sand); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; color: var(--color-terracotta);">
              ✓
            </div>
            <span class="eyebrow">Itinerary Request Received</span>
            <h3 style="font-size: 2rem; color: var(--color-navy); margin-bottom: 1rem;">Your Journey Has Begun.</h3>
            <p style="max-width: 580px; margin: 0 auto 1.75rem; font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary);">
              Thank you, <span id="confirmName" style="font-weight: 700; color: var(--color-navy);">traveler</span>. Our senior Turkey travel designers in Englewood, New Jersey and Istanbul have received your custom requirements. We are preparing a thoughtful, tailor-made itinerary proposal.
            </p>
            
            <div style="max-width: 500px; margin: 0 auto 2rem; background-color: var(--bg-surface-alt); border: 1px solid var(--border-medium); padding: 1.25rem; border-radius: var(--radius-xs); text-align: left;">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">What Happens Next:</div>
              <ul style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; list-style: disc; padding-left: 1.25rem;">
                <li>A travel specialist reviews your selected destinations and pacing.</li>
                <li>We verify domestic flight timing, private guide availability, and boutique room options.</li>
                <li>You receive a comprehensive, itemized draft itinerary within 24–48 business hours.</li>
                <li>You can refine and adjust every detail until it is 100% perfect.</li>
              </ul>
            </div>

            <button type="button" class="btn btn-primary" id="closeSuccessBtn">
              Return to Website
            </button>
          </div>
        </form>

        <!-- Footer Actions -->
        <div class="planner-footer" id="plannerFooterControls">
          <button type="button" class="btn btn-outline-dark btn-sm" id="plannerPrevBtn" style="visibility: hidden;">
            Back
          </button>
          <div style="display: flex; gap: 1rem;">
            <button type="button" class="btn btn-primary btn-sm" id="plannerNextBtn">
              Next Step &rarr;
            </button>
            <button type="submit" form="tripPlannerForm" class="btn btn-gold btn-sm" id="plannerSubmitBtn" style="display: none;">
              Request My Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
