// dispatchSaveButton.js
(function() {
  const BUTTON_ID  = 'lw-dispatch-save-btn';
  // ← your new footer selector:
  const FOOTER_SEL = 'body > div.legacy-windows-container > div.lwDialogWrapper.ready > div > div > div > div.buttons';

  function addSaveButton() {
    const footer = document.querySelector(FOOTER_SEL);
    if (!footer) {
      return setTimeout(addSaveButton, 100);
    }
    if (document.getElementById(BUTTON_ID)) return;

    const btn = document.createElement('button');
    btn.id           = BUTTON_ID;
    btn.textContent  = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding    = '4px 8px';
    btn.style.cursor     = 'pointer';

    btn.onclick = () => {
      const orderId = window.linnworks?.dispatchConsole?.getCurrentOrderId() || '(unknown)';
      window.linnworks.dispatchConsole.notifySuccess(`Order ${orderId} saved!`);
    };

    footer.appendChild(btn);
    console.log('✅ Save button injected');
  }

  console.log('🚀 dispatchSaveButton.js loaded, waiting for footer…');
  addSaveButton();
})();
