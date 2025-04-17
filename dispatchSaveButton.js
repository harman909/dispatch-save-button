// dispatchSaveButton.js
console.log("🚀 dispatchSaveButton.js loaded, waiting for footer + API…");

(function(){
  const BUTTON_ID = "lw-dispatch-save-btn";

  function tryInject() {
    const footer = document.querySelector(".dispatch-footer") ||
                   document.querySelector(".dispatchFooter");
    // is the Dispatch API object present?
    const api = window.linnworks && window.linnworks.dispatchConsole;

    if (!footer || !api) {
      // not ready yet → retry
      return setTimeout(tryInject, 200);
    }

    // only inject once
    if (document.getElementById(BUTTON_ID)) return;

    // create & style the button
    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.textContent = "💾 Save";
    btn.style.margin = "0 8px";
    btn.style.padding = "4px 8px";
    btn.style.cursor = "pointer";

    // wire up click _after_ api is ready
    btn.addEventListener("click", () => {
      const orderId = api.getCurrentOrderId();
      api.notifySuccess(`Order ${orderId} saved!`);
    });

    footer.appendChild(btn);
    console.log("✅ Save button injected");
  }

  tryInject();
})();
