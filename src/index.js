import "./style.scss";
import SliderTemp from "./slider";

const delegateEvent = (event, elem, slctr, helper) => {
  elem.addEventListener(event, (e) => {
    if (e.target.matches(slctr)) helper(e.target);
  });
};

const Slider = new SliderTemp();

const Page = {
  $: {
    overlay: document.querySelector("[data-page=overlay]"),
    navMenuFrame: document.querySelector("[data-page=navMenuFrame]"),
    navMenu: document.querySelector("[data-page=navMenu]"),
    navMenuOpenBtn: document.querySelector("[data-page=navMenuOpenBtn]"),
    navMenuCloseBtn: document.querySelector("[data-page=navMenuCloseBtn]"),
    navMenuBtnLndscpe: document.querySelector("[data-page=navMenuBtnLndscpe]"),
    navMenuBtnSeascpe: document.querySelector("[data-page=navMenuBtnSeascpe]"),

    accrdLndscpe: document.querySelector("[data-page=accrdLndscpe]"),
    accrdSeascpe: document.querySelector("[data-page=accrdSeascpe]"),

    navBtnFrame: document.querySelector("[data-page=navBtnFrame]"),

    sliderFrame: document.querySelector("[data-page=sliderFrame]"),
    sliderImgs: document.querySelectorAll("[data-page=sliderImg]"),

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

    toggleAccrd(btn, accrd) {
      if (!btn) return;

      const accrdIcon = btn.querySelector(".accrdIcon");
      accrdIcon.classList.toggle("accrdIcon-flip");

      setTimeout(
        () => accrd.classList.toggle("elem-hide"),
        accrd.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () => accrd.classList.toggle("accrd-collapse"),
        accrd.classList.contains("accrd-collapse") ? 0 : 20
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

    toggleNavMenuCloseBtn() {
      setTimeout(
        () => Page.$.navMenuCloseBtn.classList.toggle("elem-hide"),
        Page.$.navMenuCloseBtn.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () =>
          Page.$.navMenuCloseBtn.classList.toggle("navMenu-closeBtn-fade-in"),
        Page.$.navMenuCloseBtn.classList.contains("navMenu-closeBtn-fade-in")
          ? 0
          : 20
      );
    },

    toggleNavMenu() {
      Page.$.toggleOverlay();
      Page.$.toggleNavMenuCloseBtn();

      setTimeout(
        () => Page.$.navMenu.classList.toggle("elem-hide"),
        Page.$.navMenu.classList.contains("elem-hide") ? 0 : 276
      );
      setTimeout(
        () => Page.$.navMenuFrame.classList.toggle("navMenu-slide-right"),
        Page.$.navMenuFrame.classList.contains("navMenu-slide-right") ? 0 : 20
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

    Page.$.navMenuBtnLndscpe.addEventListener("click", (e) => {
      Page.$.toggleAccrd(e.target, Page.$.accrdLndscpe);
    });
    Page.$.navMenuBtnSeascpe.addEventListener("click", (e) => {
      Page.$.toggleAccrd(e.target, Page.$.accrdSeascpe);
    });

    ["resize", "DOMContentLoaded"].forEach((event) => {
      window.addEventListener(event, () => {
        Slider.getTotalImgCount(Page.$.sliderImgs);
        Slider.totalImgWidth = Slider.imgWidth * Slider.totalImgCount;
        Page.$.sliderFrame.style = `width: ${Slider.totalImgWidth}px`;
      });
    });
  },
};

Page.init();
