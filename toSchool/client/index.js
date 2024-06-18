import { getPlus1 } from "./earn-system.js";
import { UseGuide } from "./guide.js";
import { onClickBuyCow } from "./cow_buy.js";

const ws = new WebSocket("ws://localhost:8080");

let isShowMoney = false;
let currentArt = null;

function switchPage(event, pageName) {
  let tabContent;

  if (currentArt == null) {
    currentArt = pageName;
    $("#" + pageName).slideDown(1000);
    document.getElementById(pageName).style.display = "grid";
    currentArt = pageName;
    $("main").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $("aside").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $(".tabLink").prop("disabled", false);
  }

  if (pageName != "earn" && isShowMoney == false) {
    $("#button_list").append(
      `<li id="button_to_del"><p id="current_money_show">Current Money: ${localStorage.getItem(
        "currentMoney"
      )}</p></li>`
    );
    isShowMoney = true;
  } else if (pageName != "earn") {
  } else {
    isShowMoney = false;
    $("#button_to_del").remove();
  }

  if (currentArt == pageName) {
    return;
  }
  $(".tabLink").prop("disabled", true);
  $("#" + currentArt).slideUp(1000);

  setTimeout(() => {
    $("#" + pageName).slideDown(1000);
    document.getElementById(pageName).style.display = "grid";
    currentArt = pageName;
    $("main").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $("aside").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $(".tabLink").prop("disabled", false);
  }, 1000);
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
  switch (localStorage.getItem("currentCowLevel")) {
    case "1":
      $("#earn_button").css({'background-image': 'url("../image/first_cow.png")'});
      $("#cow_name").text(
        `level ${localStorage.getItem("currentCowLevel")}: Default cow(`
      );    
      $("#buy_default_cow_art").css({
        "background-image": 'url("./image/def_cow_sold.png")',
      });
      break;
    case "2": {
      $("#earn_button").css({'background-image': 'url("../image/second_cow.png")'});
      $("#cow_name").text(
        `level ${localStorage.getItem("currentCowLevel")}: Udder cow`
      );    
      $("#buy_default_cow_art").css({
        "background-image": 'url("./image/def_cow_sold.png")',
      });
      $("#udder_cow_buy_art").css({
        "background-image": 'url("./image/udder_cow_sold.png")',
      });
      break;
    }
  }
};

setInterval(() => {
  if ($("#buy").css("display") == "none") {
    return;
  }

  switch (localStorage.getItem("currentCowLevel")) {
    case "1":
      $("#earn_button").css({'background-image': 'url("../image/first_cow.png")'});
      $("#cow_name").text(
        `level ${localStorage.getItem("currentCowLevel")}: Default cow(`
      );    
      $("#buy_default_cow_art").css({
        "background-image": 'url("./image/def_cow_sold.png")',
      });
      break;
    case "2": {
      $("#earn_button").css({'background-image': 'url("../image/second_cow.png")'});
      $("#cow_name").text(
        `level ${localStorage.getItem("currentCowLevel")}: Udder cow`
      );    
      $("#buy_default_cow_art").css({
        "background-image": 'url("./image/def_cow_sold.png")',
      });
      $("#udder_cow_buy_art").css({
        "background-image": 'url("./image/udder_cow_sold.png")',
      });
      break;
    }
  }
}, 1);

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
$(".buy_cow_uni_class").on("click", (event) => {
  onClickBuyCow(event);
});