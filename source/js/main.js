import { iosVhFix } from "./utils/ios-vh-fix";

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();

  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});
