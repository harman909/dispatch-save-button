// dispatchSaveButton.js
(function() {
  const BUTTON_ID = 'lw-dispatch-save-btn';

  function addSaveButton() {
    // the Dispatch footer container (class name may differ slightly)
    const footer = document.querySelector('.dispatch-footer') ||
                   document.querySelector('.dispatchFooter');

    if (!footer) {
      // try again in 100ms
      return setTimeout(addSaveButton, 100);
    }
    // already added?
    if (document.getElementById(BUTTON_ID)) return;

    // create the button
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.textContent = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding = '4px 8px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => {
      // get the current order ID (adjust selector if needed)
      const orderId = window.linnworks && window.linnworks.dispatchConsole
        ? window.linnworks.dispatchConsole.getCurrentOrderId()
        : '(unknown)';

      // here’s where you’d call the Linnworks API to save…
      // For now we’ll just show a toast:
      window.linnworks.dispatchConsole.notifySuccess(`Order ${orderId} saved!`);
    };

    footer.appendChild(btn);
  }

  // kick it off
  addSaveButton();
})();
