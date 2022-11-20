import "./style.scss";

const delegateEvent = (event, elem, slctr, helper) => {
  elem.addEventListener(event, (e) => {
    if (e.target.matches(slctr)) helper(e.target);
  });
};

const Page = {
  $: {
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
  },

  init() {
    delegateEvent(
      "click",
      Page.$.navBtnFrame,
      ".navBar-btn",
      Page.$.toggleDropdown
    );
  },
};

Page.init();
