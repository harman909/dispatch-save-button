// dispatchSaveButton.js
console.log("🚀 dispatchSaveButton.js loaded, waiting for footer…");

(function() {
  const BUTTON_ID = 'lw-dispatch-save-btn';

  function addSaveButton() {
    const footer = document.querySelector('.dispatch-footer') ||
                   document.querySelector('.dispatchFooter');
    if (!footer) return setTimeout(addSaveButton, 100);
    if (document.getElementById(BUTTON_ID)) return;

    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.textContent = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding = '4px 8px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => {
      // guard against undefined
      const disp = window.linnworks && window.linnworks.dispatchConsole;
      if (!disp) {
        console.warn("dispatchConsole not available");
        alert("Save not available right now");
        return;
      }
      const orderId = disp.getCurrentOrderId() || '(unknown)';
      disp.notifySuccess(`Order ${orderId} saved!`);
    };

    footer.appendChild(btn);
    console.log("✅ Save button injected");
  }

  addSaveButton();
})();
