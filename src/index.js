import "./style.scss";

const delegateEvent = (event, elem, slctr, helper) => {
  elem.addEventListener(event, (e) => {
    if (e.target.matches(slctr)) helper(e.target);
  });
};

const Page = {
  $: {
    overlay: document.querySelector("[data-page=overlay]"),
    navMenu: document.querySelector("[data-page=navMenu]"),
    navMenuOpenBtn: document.querySelector("[data-page=navMenuOpenBtn]"),
    navMenuCloseBtn: document.querySelector("[data-page=navMenuCloseBtn]"),

    navBtnFrame: document.querySelector("[data-page=navBtnFrame]"),

    toggleDropdown(elem) {
      const dropdown = elem.querySelector(".drpdwn");
      if (!dropdown) return;

      const dropdownIcon = elem.querySelector(".drpdwnIcon");
      dropdownIcon.classList.toggle("drpdwnIcon-flip");

      setTimeout(
        () => dropdown.classList.toggle("elem-hide"),
        dropdown.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () => dropdown.classList.toggle("drpdwn-collapse"),
        dropdown.classList.contains("drpdwn-collapse") ? 0 : 20
      );
    },

    toggleOverlay() {
      setTimeout(
        () => Page.$.overlay.classList.toggle("elem-hide"),
        Page.$.overlay.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () => Page.$.overlay.classList.toggle("overlay-fade-in"),
        Page.$.overlay.classList.contains("overlay-fade-in") ? 0 : 20
      );
    },

    toggleNavMenu() {
      Page.$.toggleOverlay();
      setTimeout(
        () => Page.$.navMenu.classList.toggle("elem-hide"),
        Page.$.navMenu.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () => Page.$.navMenu.classList.toggle("navMenu-slide-right"),
        Page.$.navMenu.classList.contains("navMenu-slide-right") ? 0 : 20
      );
    },
  },

  init() {
    delegateEvent(
      "click",
      Page.$.navBtnFrame,
      ".navBar-btn",
      Page.$.toggleDropdown
    );

    Page.$.overlay.addEventListener("click", Page.$.toggleNavMenu);
    Page.$.navMenuOpenBtn.addEventListener("click", Page.$.toggleNavMenu);
    Page.$.navMenuCloseBtn.addEventListener("click", Page.$.toggleNavMenu);
  },
};

Page.init();
