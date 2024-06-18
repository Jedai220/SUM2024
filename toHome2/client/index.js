import { getPlus1 } from "./earn-system.js";
import { UseGuide } from "./guide.js";
const ws = new WebSocket("ws://localhost:3047");

let currentArt = null;

function switchPage(event, pageName) {
  let tabLink, tabContent;

  if (currentArt == pageName) {
    return;
  }

  $("#" + currentArt).slideUp(1000);
  tabLink = document.getElementsByClassName("tabLink");
  $(`.tabLink`).addClass(" active");

  currentArt = pageName;

  $("#" + pageName).slideDown(1000);
  event.currentTarget.className += " active";
  document.getElementById(pageName).style.display = "grid";
  $("main").css(
    "background-color",
    $("#" + event.currentTarget.id).css("background-color")
  );
  $("aside").css(
    "background-color",
    $("#" + event.currentTarget.id).css("background-color")
  );
}

ws.onopen = () => {
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}`
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${localStorage.getItem("currentMoneyPerTap")}`
  );
};

$("#buy_cow").on("click", (event) => {
  switchPage(event, "buy");
});
$("#buy_bust").on("click", (event) => {
  switchPage(event, "bust");
});
$("#buy_earn").on("click", (event) => {
  switchPage(event, "earn");
});
$("#earn_button").on("click", (event) => {
  getPlus1(event);
});
$("#guide_button").on("click", (event) => {
  UseGuide();
});

if (localStorage.getItem("currentCowLevel") == 1) {
  $("#cow_name").text(
    `level ${localStorage.getItem("currentCowLevel")}: Default cow(`
  );
}
