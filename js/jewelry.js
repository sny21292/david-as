(function () {
  if (typeof CATEGORIES === "undefined" || typeof PRODUCTS === "undefined") return;

  const views = {
    categories: document.getElementById("view-categories"),
    grid: document.getElementById("view-grid"),
    detail: document.getElementById("view-detail"),
  };
  const breadcrumb = document.getElementById("breadcrumb");
  const modal = document.getElementById("inquiry-modal");

  if (!views.categories) return;

  let currentCategory = null;
  let currentSubcategory = null;

  // ── Helpers ──

  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      el.style.display = key === name ? "" : "none";
      if (key === name) {
        el.style.animation = "none";
        el.offsetHeight; // reflow
        el.style.animation = "";
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function findCategory(id) {
    return CATEGORIES.find((c) => c.id === id);
  }

  function findSubcategory(catId, subId) {
    const cat = findCategory(catId);
    return cat ? cat.subcategories.find((s) => s.id === subId) : null;
  }

  function getProducts(catId, subId) {
    return PRODUCTS.filter(
      (p) => p.category === catId && p.subcategory === subId
    );
  }

  function getProduct(style) {
    return PRODUCTS.find((p) => p.style === style);
  }

  // ── Breadcrumb ──

  function updateBreadcrumb(parts) {
    breadcrumb.innerHTML = "";
    parts.forEach((part, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "sep";
        breadcrumb.appendChild(sep);
      }
      if (part.href) {
        const a = document.createElement("a");
        a.href = part.href;
        a.textContent = part.label;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          if (part.action) part.action();
        });
        breadcrumb.appendChild(a);
      } else {
        const span = document.createElement("span");
        span.className = "current";
        span.textContent = part.label;
        breadcrumb.appendChild(span);
      }
    });
  }

  // ── View 1: Category Menu ──

  function buildCategoryMenu() {
    const menu = document.getElementById("cat-menu");
    menu.innerHTML = "";

    CATEGORIES.forEach((cat) => {
      const group = document.createElement("div");
      group.className = "cat-group";

      const label = document.createElement("span");
      label.className = "cat-group__label";
      label.textContent = cat.label + ":";
      group.appendChild(label);

      const subs = document.createElement("div");
      subs.className = "cat-group__subs";
      cat.subcategories.forEach((sub) => {
        const a = document.createElement("a");
        a.href = "#" + cat.id + "/" + sub.id;
        a.textContent = sub.label;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          navigateTo(cat.id, sub.id);
        });
        subs.appendChild(a);
      });
      group.appendChild(subs);
      menu.appendChild(group);
    });

    document.getElementById("procurement-text").textContent = PROCUREMENT_TEXT;
  }

  function showCategories() {
    currentCategory = null;
    currentSubcategory = null;
    updateBreadcrumb([{ label: "Jewelry" }]);
    showView("categories");
    history.pushState(null, "", "/jewelry");
  }

  // ── View 2: Product Grid ──

  function showGrid(catId, subId) {
    currentCategory = catId;
    currentSubcategory = subId;

    const cat = findCategory(catId);
    const sub = findSubcategory(catId, subId);
    if (!cat || !sub) return showCategories();

    updateBreadcrumb([
      { label: "Jewelry", href: "#", action: showCategories },
      { label: cat.label, href: "#", action: showCategories },
      { label: sub.label },
    ]);

    const products = getProducts(catId, subId);
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    products.forEach((p) => {
      const card = document.createElement("a");
      card.className = "jewelry-card";
      card.href = "#product/" + p.style;
      card.addEventListener("click", (e) => {
        e.preventDefault();
        showDetail(p.style);
      });

      card.innerHTML =
        '<div class="jewelry-card__image"><img src="' +
        p.image +
        '" alt="' +
        escapeHtml(p.name) +
        '" loading="lazy"></div>' +
        '<div class="jewelry-card__body">' +
        '<span class="jewelry-card__category">Style #' +
        p.style +
        "</span>" +
        '<h3 class="jewelry-card__title">' +
        escapeHtml(p.name) +
        "</h3>" +
        "</div>";

      grid.appendChild(card);
    });

    showView("grid");
    history.pushState(null, "", "#" + catId + "/" + subId);
  }

  // ── View 3: Product Detail ──

  function showDetail(style) {
    const p = getProduct(style);
    if (!p) return;

    const cat = findCategory(p.category);
    const sub = findSubcategory(p.category, p.subcategory);

    updateBreadcrumb([
      { label: "Jewelry", href: "#", action: showCategories },
      {
        label: cat ? cat.label : "",
        href: "#",
        action: function () {
          showGrid(p.category, p.subcategory);
        },
      },
      {
        label: sub ? sub.label : "",
        href: "#",
        action: function () {
          showGrid(p.category, p.subcategory);
        },
      },
      { label: p.name },
    ]);

    const detail = document.getElementById("product-detail");
    let specsHtml = "";

    if (p.metals) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Metals</span><span class="product-detail__spec-value">' +
        escapeHtml(p.metals) +
        "</span></div>";
    }
    if (p.sizes) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Sizes</span><span class="product-detail__spec-value">' +
        escapeHtml(p.sizes) +
        "</span></div>";
    }
    if (p.karats) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Karats</span><span class="product-detail__spec-value">' +
        escapeHtml(p.karats) +
        "</span></div>";
    }

    var imageHtml =
      '<div class="product-detail__image">' +
      '<img src="' + p.image + '" alt="' + escapeHtml(p.name) + '">' +
      (p.video ? '<button class="product-detail__3d-btn" data-video>&#9654; Click to View in 3D</button>' : '') +
      '</div>';

    var pricingHtml =
      '<a href="#inquiry/' + p.style + '" class="btn btn--primary product-detail__pricing-btn" data-inquiry="' + p.style + '">Click For Pricing</a>';

    detail.innerHTML =
      imageHtml +
      '<div class="product-detail__info">' +
      '<h2 class="product-detail__name">' + escapeHtml(p.name) + "</h2>" +
      '<div class="product-detail__style-row">' +
      '<span class="product-detail__style-label">Style #' + p.style + '</span>' +
      "</div>" +
      pricingHtml +
      '<p class="product-detail__desc">' + escapeHtml(p.description) + "</p>" +
      (specsHtml ? '<div class="product-detail__specs">' + specsHtml + "</div>" : "") +
      '<a href="#" class="product-detail__back" data-back>&larr; Return</a>' +
      "</div>";

    detail
      .querySelector("[data-inquiry]")
      .addEventListener("click", function (e) {
        e.preventDefault();
        openInquiry(p.style, p.formHint);
      });

    detail
      .querySelector("[data-back]")
      .addEventListener("click", function (e) {
        e.preventDefault();
        showGrid(p.category, p.subcategory);
      });

    var vidBtn = detail.querySelector("[data-video]");
    if (vidBtn) {
      vidBtn.addEventListener("click", function () {
        open3DViewer(p.video, p.name);
      });
    }

    showView("detail");
    history.pushState(null, "", "#product/" + p.style);
  }

  // ── View 4: Inquiry Modal ──

  function openInquiry(style, customHint) {
    document.getElementById("modal-style").textContent = style;
    document.getElementById("inq-style").value = style;
    document.getElementById("inq-fname").value = "";
    document.getElementById("inq-lname").value = "";
    document.getElementById("inq-email").value = "";
    document.getElementById("inq-message").value = "";
    var hintEl = document.getElementById("inq-hint");
    if (hintEl) {
      hintEl.textContent = customHint || "Metal, Karat & Color, and if you have stones or stone choice";
    }
    modal.style.display = "";
    document.body.style.overflow = "hidden";
  }

  // ── 3D Viewer Modal ──

  function open3DViewer(url, title) {
    var viewer = document.getElementById("viewer-modal");
    var iframe = document.getElementById("viewer-iframe");
    iframe.src = url;
    iframe.title = title || "3D View";
    viewer.style.display = "";
    document.body.style.overflow = "hidden";
  }

  function close3DViewer() {
    var viewer = document.getElementById("viewer-modal");
    var iframe = document.getElementById("viewer-iframe");
    viewer.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "";
  }

  var viewerModal = document.getElementById("viewer-modal");
  if (viewerModal) {
    document.getElementById("viewer-close").addEventListener("click", close3DViewer);
    viewerModal.addEventListener("click", function (e) {
      if (e.target === viewerModal) close3DViewer();
    });
  }

  function closeInquiry() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  document.getElementById("modal-close").addEventListener("click", closeInquiry);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeInquiry();
  });

  document
    .getElementById("inquiry-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      var form = this;
      var btn = form.querySelector(".btn--primary");
      var original = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      fetch("submit-inquiry.php", {
        method: "POST",
        body: new FormData(form),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            btn.textContent = "Message Sent!";
            btn.style.background = "var(--color-green)";
            setTimeout(function () {
              btn.textContent = original;
              btn.style.background = "";
              btn.disabled = false;
              closeInquiry();
            }, 2500);
          } else {
            alert(data.message);
            btn.textContent = original;
            btn.disabled = false;
          }
        })
        .catch(function () {
          alert("Something went wrong. Please call us at (336) 790-8214.");
          btn.textContent = original;
          btn.disabled = false;
        });
    });

  // ── Routing ──

  function navigateTo(catId, subId) {
    if (catId === "religious" && subId === "gospel-necklace") {
      window.location.href = "/gospel-necklace";
      return;
    }
    showGrid(catId, subId);
  }

  function handleHash() {
    const hash = location.hash.replace("#", "");
    if (!hash) {
      showCategories();
      return;
    }

    if (hash.startsWith("product/")) {
      const style = hash.replace("product/", "");
      const p = getProduct(style);
      if (p) {
        currentCategory = p.category;
        currentSubcategory = p.subcategory;
        showDetail(style);
      } else {
        showCategories();
      }
      return;
    }

    if (hash.startsWith("inquiry/")) {
      const style = hash.replace("inquiry/", "");
      const p = getProduct(style);
      if (p) {
        currentCategory = p.category;
        currentSubcategory = p.subcategory;
        showDetail(style);
        openInquiry(style);
      }
      return;
    }

    const parts = hash.split("/");
    if (parts.length === 2) {
      if (parts[0] === "religious" && parts[1] === "gospel-necklace") {
        window.location.href = "/gospel-necklace";
        return;
      }
      showGrid(parts[0], parts[1]);
      return;
    }

    // Handle homepage links like #ladies, #cross, #wedding, #gents, #specialty
    const cat = findCategory(parts[0]);
    if (cat) {
      if (cat.subcategories.length === 1) {
        showGrid(cat.id, cat.subcategories[0].id);
      } else {
        showCategories();
      }
      return;
    }

    showCategories();
  }

  // ── Escape HTML ──

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── Init ──

  buildCategoryMenu();
  handleHash();
  window.addEventListener("popstate", handleHash);
  window.addEventListener("hashchange", handleHash);
})();
