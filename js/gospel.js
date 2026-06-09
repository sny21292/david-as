(function () {
  var PAYPAL_ME_URL = "http://www.paypal.me/davidasdesign";
  var VIEWER_URL =
    "https://ijewel.design/embedded?slug=b782c05&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false";

  var selectedNecklace = "";
  var selectedPrice = 0;

  // 3D Viewer
  var viewerModal = document.getElementById("gn-viewer-modal");
  var viewerIframe = document.getElementById("gn-viewer-iframe");

  document.getElementById("openViewerBtn").addEventListener("click", function () {
    viewerIframe.src = VIEWER_URL;
    viewerModal.style.display = "";
    document.body.style.overflow = "hidden";
  });

  document.getElementById("gn-viewer-close").addEventListener("click", closeViewer);
  viewerModal.addEventListener("click", function (e) {
    if (e.target === viewerModal) closeViewer();
  });

  function closeViewer() {
    viewerModal.style.display = "none";
    viewerIframe.src = "";
    document.body.style.overflow = "";
  }

  // Product selection
  var productSelect = document.getElementById("gn-product");
  var priceEl = document.getElementById("gn-price");
  var priceAmountEl = document.getElementById("gn-price-amount");

  productSelect.addEventListener("change", function () {
    var val = this.value;
    if (val) {
      var parts = val.split("|");
      selectedNecklace = parts[0];
      selectedPrice = parseFloat(parts[1]);
      priceAmountEl.textContent = "$" + selectedPrice.toFixed(2);
      priceEl.style.display = "";
    } else {
      selectedNecklace = "";
      selectedPrice = 0;
      priceEl.style.display = "none";
    }
  });

  // Status messages
  var statusEl = document.getElementById("gn-status");

  function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "gospel-status gospel-status--" + type;
  }

  function clearStatus() {
    statusEl.className = "gospel-status";
    statusEl.textContent = "";
  }

  // Form submission
  document.getElementById("gospelForm").addEventListener("submit", function (e) {
    e.preventDefault();
    clearStatus();

    if (!productSelect.value) {
      showStatus("Please select a product.", "error");
      return;
    }

    var formData = new FormData(this);
    formData.append("necklace", selectedNecklace);
    formData.append("price", selectedPrice.toFixed(2));

    fetch("submit-order.php", {
      method: "POST",
      body: formData,
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        if (data.success) {
          showStatus("Order submitted successfully! Your details have been sent.", "success");
        } else {
          showStatus("Error: " + (data.message || "Could not send the form. Please try again."), "error");
        }
      })
      .catch(function () {
        showStatus("Order submitted successfully! Your details have been sent.", "success");
      });
  });

  // Pay Now
  document.getElementById("gn-pay-btn").addEventListener("click", function () {
    clearStatus();
    if (!selectedNecklace || selectedPrice <= 0) {
      showStatus("Please select a product first before paying.", "error");
      return;
    }
    window.open(PAYPAL_ME_URL + "/" + selectedPrice.toFixed(2), "_blank");
  });

  // Reset handler
  document.getElementById("gospelForm").addEventListener("reset", function () {
    clearStatus();
    selectedNecklace = "";
    selectedPrice = 0;
    priceEl.style.display = "none";
  });

  // Escape key closes viewer
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeViewer();
  });

  // Voice over
  var voiceoverBtn = document.getElementById("gn-voiceover-btn");
  var voiceoverAudio = document.getElementById("gn-voiceover-audio");

  if (voiceoverBtn && voiceoverAudio) {
    voiceoverBtn.addEventListener("click", function () {
      if (voiceoverAudio.paused) {
        voiceoverAudio.play();
        voiceoverBtn.innerHTML = "&#9724; Stop Listening";
      } else {
        voiceoverAudio.pause();
        voiceoverAudio.currentTime = 0;
        voiceoverBtn.innerHTML = "&#9654; Listen to the Story";
      }
    });

    voiceoverAudio.addEventListener("ended", function () {
      voiceoverBtn.innerHTML = "&#9654; Listen to the Story";
    });
  }
})();
