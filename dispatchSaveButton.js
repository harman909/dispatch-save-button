// dispatchSaveButton.js
(function() {
  const BUTTON_ID = 'lw-dispatch-save-btn';

  function addSaveButton() {
    // try all possible footer selectors:
    const footer =
         document.querySelector('.dispatch-footer')
      || document.querySelector('.dispatchFooter')
      || document.querySelector('.buttons');

    if (!footer) {
      console.log('⏳ SaveInjector: footer not found, retrying…');
      return setTimeout(addSaveButton, 100);
    }

    console.log('🎯 SaveInjector: footer found!', footer);

    if (document.getElementById(BUTTON_ID)) return;
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.textContent = '💾 Save';
    btn.style.marginLeft = '8px';
    btn.style.padding    = '4px 8px';
    btn.style.cursor     = 'pointer';
    btn.onclick = () => {
      const orderId = window.linnworks
        && window.linnworks.dispatchConsole
          ? window.linnworks.dispatchConsole.getCurrentOrderId()
          : '(unknown)';
      window.linnworks.dispatchConsole
        .notifySuccess(`Order ${orderId} saved!`);
    };

    footer.appendChild(btn);
    console.log('✅ SaveInjector: Save button injected');
  }

  console.log('🚀 SaveInjector loaded, waiting for footer…');
  addSaveButton();
})();
