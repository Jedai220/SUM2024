import { getPlus1 } from "./earn-system.js";
import { UseGuide } from "./guide.js";
import { onClickBuyCow } from "./cow_buy.js";
import { setDefaultBuyStatus } from "./reset.js";
import { mySwitch } from "./mySwitch.js";
import "./cow_buy.js";

let isShowMoney = false;
let currentArt = "null";

const ws = new WebSocket("ws://localhost:8080");

let isConf = "null";

ws.onmessage = (msg) => {
  inputChecker(msg);
};

function ResetAll() {
  localStorage.setItem("currentMoneyPerTap", 1);
  localStorage.setItem("currentMoney", 0);
  localStorage.setItem("currentInflows", 1);
  localStorage.setItem("currentCowLevel", 1);

  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}`
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${localStorage.getItem("currentMoneyPerTap")}`
  );

  $("#earn_button").css({
    "background-image": 'url("../image/first_cow.png")',
  });
  $("#cow_name").text(
    `level ${localStorage.getItem("currentCowLevel")}: Default cow(`
  );
  $("#current_money_show").text(
    `Current Money: ${localStorage.getItem("currentMoney")}`
  );
  setDefaultImage();
  setDefaultBuyStatus();
}

function checkerReset() {
  $("html").append(`
        <div id='guide_bg'>
    
        </div>
        <div id='guide_content'>
            <pre><h2>Are you sure to reset game?</h2></pre>    
            <div id='close_guide'>
                <button id="close_bg_button"></button>
                <button id="close_bg_button2"></button>
            </div>
        </div>
        `);
  $("#close_bg_button").on("click", () => {
    ws.send("false");
  });
  $("#close_bg_button2").on("click", () => {
    ws.send("true");
  });
}

function inputChecker(answer) {
  isConf = answer.data;
  if (isConf == "false") {
    $("#guide_bg").fadeTo(1000, 0, () => {
      $("#guide_bg").remove();
    });
    $("#guide_content").fadeTo(1000, 0, () => {
      $("#guide_content").remove();
    });
  } else if (isConf == "true") {
    $("#guide_bg").fadeTo(1000, 0, () => {
      $("#guide_bg").remove();
    });
    $("#guide_content").fadeTo(1000, 0, () => {
      $("#guide_content").remove();
    });
    isConf = "null";
    ResetAll();
  }
}

function setDefaultImage() {
  $("#buy_default_cow_art").css({
    "background-image": 'url("./image/def_cow_sold.png")',
  });
  $("#buy_radioactive_cow_art").css({
    "background-image": 'url("../image/radioactive_cow.png")',
  });
  $("#udder_cow_buy_art").css({
    "background-image": 'url("../image/udder_cow.png")',
  });
  $("#buy_pig_cow_art").css({
    "background-image": 'url("../image/pig_cow.png")',
  });
  $("#buy_mushroom_cow_art").css({
    "background-image": 'url("../image/mushroom_cow.png")',
  });
  $("#buy_ice_cow_art").css({
    "background-image": 'url("../image/ice_cow.png")',
  });
  $("#buy_kanabis_cow_art").css({
    "background-image": 'url("../image/kanabis_cow.png")',
  });
  $("#buy_miku_cow_art").css({
    "background-image": 'url("../image/miku_cow.png")',
  });
  $("#buy_mustafa_cow_art").css({
    "background-image": 'url("../image/mustafa_cow.png")',
  });
}

function switchPage(event, pageName) {
  if (currentArt == null) {
    currentArt = pageName;
    $("#" + pageName).slideDown(1000);
    document.getElementById(pageName).style.display = "grid";
    currentArt = pageName;
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
  $(".tabContent").prop("disabled", true);
  $("#" + currentArt).slideUp(1000);
  $('.tabLink').css({'animation': '1s 1 alternate toLeft'});
  $('.tabLink').css({'transform': 'translate(0px)'});
  $("#" + event.currentTarget.id).css({'animation': '1s 1 alternate toRight'}, {'animation-fill-mode': 'forwards'});

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
    $("#" + event.currentTarget.id).css({'transform': 'translate(60px)'});
  }, 1000);
}

ws.onopen = () => {
  $(".tabContent").css({ display: "grid" });
  $(".tabContent").hide();

  setTimeout(() => {
    $("#earn").slideDown(1000);
  }, 100);
  currentArt = "earn";

  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}`
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${localStorage.getItem("currentMoneyPerTap")}`
  );
  mySwitch();
  if ($("#default_cow_buy").attr("isBuying") == undefined) {
    $("#default_cow_buy").attr("isBuying", true);
  }
  if ($("#udder_cow_buy").attr("isBuying") == undefined) {
    $("#udder_cow_buy").attr("isBuying", false);
  }
  if ($("#radioactive_cow_buy").attr("isBuying") == undefined) {
    $("#radioactive_cow_buy").attr("isBuying", false);
  }
  if ($("#pig_cow_buy").attr("isBuying") == undefined) {
    $("#pig_cow_buy").attr("isBuying", false);
  }
  if ($("#mushroom_cow_buy").attr("isBuying") == undefined) {
    $("#mushroom_cow_buy").attr("isBuying", false);
  }
  if ($("#ice_cow_buy").attr("isBuying") == undefined) {
    $("#ice_cow_buy").attr("isBuying", false);
  }
  if ($("#kanabis_cow_buy").attr("isBuying") == undefined) {
    $("#kanabis_cow_buy").attr("isBuying", false);
  }
  if ($("#miku_cow_buy").attr("isBuying") == undefined) {
    $("#miku_cow_buy").attr("isBuying", false);
  }
  if ($("#mustafa_cow_buy").attr("isBuying") == undefined) {
    $("#mustafa_cow_buy").attr("isBuying", false);
  }
};

setInterval(() => {
  mySwitch();
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
$("#reset_button").on("click", () => {
  checkerReset();
});
