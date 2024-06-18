import { currentArt } from "./index.js";

export function switchPage(event, pageName) {
  let tabContent;

  if (currentArt == pageName) {
    return;
  }

  $("#" + currentArt).slideUp(1000);
  setTimeout(() => {
    $("main").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $("aside").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );

  }, 1);

  $("#" + pageName).slideToggle(1000);
  event.currentTarget.className += " active";
  document.getElementById(pageName).style.display = "grid";
  currentArt = pageName;
}
