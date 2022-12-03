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
    slideToLeftImgBtn: document.querySelector("[data-page=slideToLeftImgBtn]"),
    slideToRightImgBtn: document.querySelector(
      "[data-page=slideToRightImgBtn]"
    ),

    slideToImgBtnFrame: document.querySelector(
      "[data-page=slideToImgBtnFrame]"
    ),
    slideToImgBtns: document.querySelectorAll("[data-page=slideToImgBtn]"),
  },

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
      () => Page.$.navMenuCloseBtn.classList.toggle("navMenu-closeBtn-fade-in"),
      Page.$.navMenuCloseBtn.classList.contains("navMenu-closeBtn-fade-in")
        ? 0
        : 20
    );
  },

  toggleNavMenu() {
    Page.toggleOverlay();
    Page.toggleNavMenuCloseBtn();

    setTimeout(
      () => Page.$.navMenu.classList.toggle("elem-hide"),
      Page.$.navMenu.classList.contains("elem-hide") ? 0 : 276
    );
    setTimeout(
      () => Page.$.navMenuFrame.classList.toggle("navMenu-slide-right"),
      Page.$.navMenuFrame.classList.contains("navMenu-slide-right") ? 0 : 20
    );
  },

  addSliderAnim() {
    Page.$.sliderFrame.classList.add("sliderFrame-slide");
  },
  removeSliderAnim() {
    Page.$.sliderFrame.classList.remove("sliderFrame-slide");
  },

  slideBackToEnd() {
    Page.removeSliderAnim();

    const endImg = document.querySelector("[data-imgindex='5']");
    const startImg = document.querySelector("[data-imgindex='0']");

    endImg.dataset.imgactive = "true";
    startImg.dataset.imgactive = "";

    Slider.currentImgIndex = 5;
    Page.$.sliderFrame.style.marginLeft = `-${
      Slider.imgWidth * Slider.currentImgIndex
    }px`;
  },

  slideBackToStart() {
    Page.removeSliderAnim();

    const startImg = document.querySelector("[data-imgindex='1']");
    const endImg = document.querySelector("[data-imgindex='6']");

    startImg.dataset.imgactive = "true";
    endImg.dataset.imgactive = "";

    Slider.currentImgIndex = 1;
    Page.$.sliderFrame.style.marginLeft = `-${
      Slider.imgWidth * Slider.currentImgIndex
    }px`;

    setTimeout(Page.$.addSliderAnim, 500);
  },

  slideToImgIndex(slideToImgBtn) {
    Page.addSliderAnim();

    Page.$.slideToImgBtns.forEach((btn) => {
      if (btn.classList.contains("imgSlider-slideToImgBtn-active"))
        btn.classList.remove("imgSlider-slideToImgBtn-active");
    });

    slideToImgBtn.classList.add("imgSlider-slideToImgBtn-active");

    const imgIndex = slideToImgBtn.dataset.btnindex;
    Slider.getCurrentImgIndex(Page.$.sliderImgs);
    const currentImg = document.querySelector(
      `[data-imgindex="${Slider.currentImgIndex}"]`
    );
    const indexImg = document.querySelector(`[data-imgindex="${imgIndex}"]`);

    currentImg.dataset.imgactive = "";
    indexImg.dataset.imgactive = "true";

    const newLeftMarginVal = Slider.imgWidth * imgIndex;
    Page.$.sliderFrame.style.marginLeft = `-${newLeftMarginVal}px`;

    Slider.currentLeftMargin = newLeftMarginVal;
    Slider.currentImgIndex = imgIndex;
  },

  slideToLeftImg() {
    Page.addSliderAnim();

    Slider.getCurrentImgIndex(Page.$.sliderImgs);
    const newLeftMarginVal = Slider.imgWidth * (Slider.currentImgIndex - 1);
    Page.$.sliderFrame.style.marginLeft = `-${newLeftMarginVal}px`;

    const currentImg = document.querySelector(
      `[data-imgindex="${Slider.currentImgIndex}"]`
    );
    const prevImg = document.querySelector(
      `[data-imgindex="${Slider.currentImgIndex - 1}"]`
    );

    currentImg.dataset.imgactive = "";
    prevImg.dataset.imgactive = "true";

    Slider.currentLeftMargin = newLeftMarginVal;
    Slider.currentImgIndex -= 1;

    if (Slider.currentImgIndex === 0) {
      setTimeout(Page.slideBackToEnd, 500);
    }
  },

  slideToRightImg() {
    Page.addSliderAnim();

    Slider.getCurrentImgIndex(Page.$.sliderImgs);
    const newLeftMarginVal = Slider.imgWidth * (Slider.currentImgIndex + 1);
    Page.$.sliderFrame.style.marginLeft = `-${newLeftMarginVal}px`;

    const currentImg = document.querySelector(
      `[data-imgindex="${Slider.currentImgIndex}"]`
    );
    const nextImg = document.querySelector(
      `[data-imgindex="${Slider.currentImgIndex + 1}"]`
    );

    currentImg.dataset.imgactive = "";
    nextImg.dataset.imgactive = "true";

    Slider.currentLeftMargin = newLeftMarginVal;
    Slider.currentImgIndex += 1;

    if (Slider.currentImgIndex === 6) {
      setTimeout(Page.slideBackToStart, 500);
    }
  },

  init() {
    delegateEvent(
      "click",
      Page.$.navBtnFrame,
      ".navBar-btn",
      Page.toggleDropdown
    );

    delegateEvent(
      "click",
      Page.$.slideToImgBtnFrame,
      "[data-page=slideToImgBtn]",
      Page.slideToImgIndex
    );

    Page.$.overlay.addEventListener("click", Page.toggleNavMenu);
    Page.$.navMenuOpenBtn.addEventListener("click", Page.toggleNavMenu);
    Page.$.navMenuCloseBtn.addEventListener("click", Page.toggleNavMenu);

    Page.$.navMenuBtnLndscpe.addEventListener("click", (e) => {
      Page.toggleAccrd(e.target, Page.$.accrdLndscpe);
    });
    Page.$.navMenuBtnSeascpe.addEventListener("click", (e) => {
      Page.toggleAccrd(e.target, Page.$.accrdSeascpe);
    });

    Page.$.slideToLeftImgBtn.addEventListener("click", Page.slideToLeftImg);
    Page.$.slideToRightImgBtn.addEventListener("click", Page.slideToRightImg);

    ["resize", "DOMContentLoaded"].forEach((event) => {
      window.addEventListener(event, () => {
        Slider.getTotalImgCount(Page.$.sliderImgs);
        Slider.getTotalImgWidth();
        Slider.getCurrentLeftMargin();
        Page.removeSliderAnim();
        Page.$.sliderFrame.style.width = `${Slider.totalImgWidth}px`;
        Page.$.sliderFrame.style.marginLeft = `-${Slider.currentLeftMargin}px`;
      });
    });
  },
};

Page.init();
