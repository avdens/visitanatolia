import { t } from '../i18n/index.js';

export function renderTripPlannerModal() {
  const arrow = t('arrow', '&rarr;');

  return `
    <div class="modal-overlay" id="tripPlannerModal">
      <div class="planner-modal-card" role="dialog" aria-modal="true" aria-labelledby="plannerTitle">
        <button class="modal-close-btn" id="closePlannerModalBtn" aria-label="${t('common.close', 'Close')}">&times;</button>
        
        <!-- Header -->
        <div class="planner-header">
          <span class="eyebrow" style="color: var(--color-gold); margin-bottom: 0.25rem;">${t('planner.eyebrow')}</span>
          <h2 id="plannerTitle" style="font-size: clamp(1.6rem, 3vw, 2.25rem); color: #FFFFFF; margin-bottom: 0.5rem;">
            ${t('planner.title')}
          </h2>
          <p style="color: rgba(255,255,255,0.8); font-size: 0.95rem; margin-bottom: 0;">
            ${t('planner.subtitle')}
          </p>

          <div class="planner-progress-bar">
            <div class="planner-progress-fill" id="plannerProgressFill" style="width: 20%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.4rem;">
            <span id="stepIndicator">Step 1 of 5</span>
            <span id="stepName">${t('planner.stepNames.1', 'Destinations')}</span>
          </div>
        </div>

        <!-- Body Form -->
        <form id="tripPlannerForm" class="planner-body">
          <!-- STEP 1: Destinations -->
          <div class="planner-step-panel" id="plannerStep1" data-step="1">
            <h3 class="step-question-title">${t('planner.step1Title')}</h3>
            <p class="step-question-sub">${t('planner.step1Sub')}</p>
            
            <div class="options-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
              <label class="option-box">
                <input type="checkbox" name="destinations" value="Istanbul" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destIstanbul')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destIstanbulSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Cappadocia" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destCappadocia')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destCappadociaSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Ephesus" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destEphesus')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destEphesusSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Bodrum" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destBodrum')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destBodrumSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Antalya" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destAntalya')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destAntalyaSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Pamukkale" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destPamukkale')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destPamukkaleSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Gobeklitepe" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destGobekli')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destGobekliSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Nemrut" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destNemrut')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destNemrutSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Gulet" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destGulet')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destGuletSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Seven Churches" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem;">${t('planner.destBiblical')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destBiblicalSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="destinations" value="Expert Advice" style="display:none;" />
                <span style="font-weight: 600; font-size: 1rem; color: var(--color-terracotta);">${t('planner.destAdvise')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.destAdviseSub')}</span>
              </label>
            </div>
          </div>

          <!-- STEP 2: Interests -->
          <div class="planner-step-panel" id="plannerStep2" data-step="2" style="display:none;">
            <h3 class="step-question-title">${t('planner.step2Title')}</h3>
            <p class="step-question-sub">${t('planner.step2Sub')}</p>
            
            <div class="options-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
              <label class="option-box">
                <input type="checkbox" name="interests" value="Classical History & Archaeology" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expHistory')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expHistorySub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Biblical & Christian Heritage" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expBiblical')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expBiblicalSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Food, Wine & Private Cooking" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expCulinary')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expCulinarySub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Luxury Sailing & Blue Cruise" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expGulet')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expGuletSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Hot Air Ballooning" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expBalloon')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expBalloonSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Hamam & Wellness" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expHamam')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expHamamSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Artisan Carpets & Silk" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expArt')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expArtSub')}</span>
              </label>

              <label class="option-box">
                <input type="checkbox" name="interests" value="Active Adventure & Hiking" style="display:none;" />
                <span style="font-weight: 600;">${t('planner.expHiking')}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${t('planner.expHikingSub')}</span>
              </label>
            </div>
          </div>

          <!-- STEP 3: Dates & Duration -->
          <div class="planner-step-panel" id="plannerStep3" data-step="3" style="display:none;">
            <h3 class="step-question-title">${t('planner.step3Title')}</h3>
            <p class="step-question-sub">${t('planner.step3Sub')}</p>
            
            <div class="planner-two-col-grid" style="margin-bottom: 1.5rem;">
              <div class="form-group">
                <label class="form-label">${t('planner.whenTitle')}</label>
                <select name="travelMonth" class="form-select" id="travelMonthSelect">
                  <option value="">${t('planner.undecided')}</option>
                  <option value="Spring">${t('planner.spring')}</option>
                  <option value="Summer">${t('planner.summer')}</option>
                  <option value="Autumn">${t('planner.autumn')}</option>
                  <option value="Winter">${t('planner.winter')}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">${t('planner.durationTitle')}</label>
                <select name="duration" class="form-select" id="durationSelect">
                  <option value="7 – 9 Days">${t('planner.days7_9')}</option>
                  <option value="10 – 13 Days" selected>${t('planner.days10_13')}</option>
                  <option value="14+ Days">${t('planner.days14_plus')}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${t('planner.paceTitle')}</label>
              <div class="options-grid">
                <label class="option-box">
                  <input type="radio" name="pace" value="Relaxed" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.paceRelaxed')}</span>
                </label>
                <label class="option-box selected">
                  <input type="radio" name="pace" value="Balanced" checked style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.paceActive')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="pace" value="Comprehensive" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.paceEnergetic')}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- STEP 4: Travelers & Style -->
          <div class="planner-step-panel" id="plannerStep4" data-step="4" style="display:none;">
            <h3 class="step-question-title">${t('planner.step4Title')}</h3>
            <p class="step-question-sub">${t('planner.step4Sub')}</p>
            
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label class="form-label">${t('planner.travelersTitle')}</label>
              <div class="options-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
                <label class="option-box selected">
                  <input type="radio" name="partyType" value="Couple" checked style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.partyCouple')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="partyType" value="Family" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.partyFamily')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="partyType" value="Friends" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.partyFriends')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="partyType" value="Solo" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.partySolo')}</span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${t('planner.hotelTitle')}</label>
              <div class="options-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                <label class="option-box selected">
                  <input type="radio" name="hotelStyle" value="Boutique Heritage" checked style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.hotelBoutique')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="hotelStyle" value="5-Star Luxury" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.hotelLuxury')}</span>
                </label>
                <label class="option-box">
                  <input type="radio" name="hotelStyle" value="Curated Mix" style="display:none;" />
                  <span style="font-weight: 600;">${t('planner.hotelMix')}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- STEP 5: Contact Details -->
          <div class="planner-step-panel" id="plannerStep5" data-step="5" style="display:none;">
            <h3 class="step-question-title">${t('planner.step5Title')}</h3>
            <p class="step-question-sub">${t('planner.step5Sub')}</p>
            
            <div class="planner-two-col-grid" style="margin-bottom: 1.25rem;">
              <div class="form-group">
                <label class="form-label">${t('planner.nameLabel')}</label>
                <input type="text" name="fullName" required placeholder="${t('planner.namePlaceholder')}" class="form-input" id="plannerFullName" />
              </div>
              <div class="form-group">
                <label class="form-label">${t('planner.emailLabel')}</label>
                <input type="email" name="email" required placeholder="${t('planner.emailPlaceholder')}" class="form-input" id="plannerEmail" />
              </div>
            </div>

            <div class="planner-two-col-grid" style="margin-bottom: 1.25rem;">
              <div class="form-group">
                <label class="form-label">${t('planner.phoneLabel')}</label>
                <input type="tel" name="phone" required placeholder="${t('planner.phonePlaceholder')}" class="form-input" id="plannerPhone" />
              </div>
              <div class="form-group">
                <label class="form-label">${t('planner.countryLabel')}</label>
                <input type="text" name="country" placeholder="${t('planner.countryPlaceholder')}" class="form-input" id="plannerCountry" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${t('planner.notesLabel')}</label>
              <textarea name="notes" placeholder="${t('planner.notesPlaceholder')}" class="form-textarea"></textarea>
            </div>

            <div style="background-color: var(--color-ivory); border: 1px solid var(--border-medium); padding: 1rem; border-radius: var(--radius-xs); display: flex; align-items: flex-start; gap: 0.75rem;">
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0;">
                ${t('planner.privacyNote')}
              </p>
            </div>
          </div>

          <!-- Confirmation Screen -->
          <div class="planner-step-panel" id="plannerStepSuccess" data-step="success" style="display:none; text-align: center; padding: 2.5rem 1rem;">
            <div style="width: 72px; height: 72px; background-color: var(--color-sand); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; color: var(--color-terracotta);">
              ✓
            </div>
            <h3 style="font-size: 2rem; color: var(--color-navy); margin-bottom: 1rem;">${t('planner.successTitle')}</h3>
            <p style="max-width: 580px; margin: 0 auto 1.75rem; font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary);">
              ${t('planner.successMsg')}
            </p>
            
            <div style="max-width: 500px; margin: 0 auto 2rem; background-color: var(--bg-surface-alt); border: 1px solid var(--border-medium); padding: 1.25rem; border-radius: var(--radius-xs); text-align: center;">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem;">
                ${t('planner.successImmediate')}
              </div>
              <div style="font-size: 0.95rem; color: var(--color-navy); font-weight: 600;">
                USA: +1 (201) 490-2212 &bull; TR: +90 (216) 302-4325
              </div>
            </div>

            <button type="button" class="btn btn-primary" id="closeSuccessBtn">
              ${t('planner.successClose')}
            </button>
          </div>
        </form>

        <!-- Footer Actions -->
        <div class="planner-footer" id="plannerFooterControls">
          <button type="button" class="btn btn-outline-dark btn-sm" id="plannerPrevBtn" style="visibility: hidden;">
            ${t('common.back')}
          </button>
          <div style="display: flex; gap: 1rem;">
            <button type="button" class="btn btn-primary btn-sm" id="plannerNextBtn">
              ${t('common.continue')} ${arrow}
            </button>
            <button type="submit" form="tripPlannerForm" class="btn btn-gold btn-sm" id="plannerSubmitBtn" style="display: none;">
              ${t('planner.submitBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
