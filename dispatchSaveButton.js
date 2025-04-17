// dispatchSaveButton.js
console.log("🚀 dispatchSaveButton.js loaded, waiting for footer…");

(function() {
  const BUTTON_ID = 'lw-dispatch-save-btn';

  function addSaveButton() {
    // find the Dispatch Console footer (class may vary slightly)
    const footer = document.querySelector('.dispatch-footer') ||
                   document.querySelector('.dispatchFooter');

    if (!footer) {
      // not there yet? try again in 100ms
      return setTimeout(addSaveButton, 100);
    }

    // don’t add twice
    if (document.getElementById(BUTTON_ID)) return;

    // create the Save button
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.textContent = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding = '4px 8px';
    btn.style.cursor = 'pointer';

    btn.onclick = () => {
      // grab the current order ID
      const orderId = window.linnworks?.dispatchConsole?.getCurrentOrderId() || '(unknown)';
      // TODO: call your save endpoint here…
      // for now just show a toast:
      window.linnworks.dispatchConsole.notifySuccess(`Order ${orderId} saved!`);
    };

    footer.appendChild(btn);
  }

  // start the script
  addSaveButton();
})();
