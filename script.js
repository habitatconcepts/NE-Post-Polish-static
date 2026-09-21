/* NE Post & Polish — tiny interactions. No frameworks. */
(function () {
  "use strict";

  var burger = document.querySelector(".nav-burger");
  var nav = document.querySelector(".main-nav");
  var header = document.getElementById("siteHeader");

  /* --- Hamburger toggle: .nav-open on .main-nav, scroll lock on body --- */
  function setMenu(open) {
    nav.classList.toggle("nav-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-lock", open);
  }
  if (burger && nav) {
    burger.addEventListener("click", function () {
      setMenu(!nav.classList.contains("nav-open"));
    });
    // Close the panel when a link inside it is tapped
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("nav-open")) setMenu(false);
    });
  }

  /* --- Header shadow after 24px scroll --- */
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Reveal on scroll: fade-rise, once --- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Multi-unit CTAs: pre-select the matching Package option, then jump --- */
  var packageSelect = document.getElementById("q-package");
  document.querySelectorAll("[data-package]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!packageSelect) return;
      var wanted = link.getAttribute("data-package");
      for (var i = 0; i < packageSelect.options.length; i++) {
        if (packageSelect.options[i].text === wanted) {
          packageSelect.selectedIndex = i;
          break;
        }
      }
    });
  });

  /* --- Photo dropzone: show chosen file name --- */
  var photoInput = document.getElementById("q-photo");
  var photoName = document.getElementById("photoName");
  if (photoInput && photoName) {
    photoInput.addEventListener("change", function () {
      var file = photoInput.files && photoInput.files[0];
      photoName.textContent = file ? "✓ " + file.name : "";
    });
  }
})();
