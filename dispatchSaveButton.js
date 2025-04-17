// dispatchSaveButton.js
console.log("🚀 dispatchSaveButton.js loaded");

(function() {
  const BUTTON_ID = 'lw-dispatch-save-btn';

  function addSaveButton() {
    // Try the standard Dispatch footer, then your test harness
    const footer =
      document.querySelector('.dispatch-footer') ||
      document.querySelector('.buttons');

    if (!footer) {
      // retry in 200ms until it appears
      return setTimeout(addSaveButton, 200);
    }

    if (document.getElementById(BUTTON_ID)) {
      // already added
      return;
    }

    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.textContent = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding = '4px 8px';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      const disp = window.linnworks?.dispatchConsole;
      if (!disp) {
        console.warn("dispatchConsole not available");
        alert("Save not available right now");
        return;
      }
      const orderId = disp.getCurrentOrderId() ?? '(unknown)';
      disp.notifySuccess(`Order ${orderId} saved!`);
      console.log(`✅ Save clicked for order ${orderId}`);
    });

    footer.appendChild(btn);
    console.log("✅ Save button injected into:", footer);
  }

  // start looking for the footer
  addSaveButton();
})();
