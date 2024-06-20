import { getPlus1 } from "./earn-system.js";
import { onClickBuyBust } from "./bust_buy.js";
import { UseGuide } from "./guide.js";
import { onClickBuyCow } from "./cow_buy.js";
import { setDefaultBuyStatus } from "./reset.js";
import { mySwitch, mySwitch2 } from "./mySwitch.js";
import { setDefLevelBust } from "./earn-system.js";
import "./cow_buy.js";
import "./audio.js"

import "./story.js";
import { startStory } from "./story.js";

let isShowMoney = false;
let currentArt = "null";
let currentLink = "null";

const ws = new WebSocket("ws://localhost:8080");

let isConf = "null";

ws.onmessage = (msg) => {
  inputChecker(msg);
};

function ResetAll() {
  localStorage.setItem("busters", JSON.stringify(setDefLevelBust()));
  localStorage.setItem("currentMoneyPerTap", 1);
  localStorage.setItem("currentMoney", 0);
  localStorage.setItem("currentInflows", 0);
  localStorage.setItem("currentCowLevel", 1);
  localStorage.setItem("isEnd", "false");

  let buster = JSON.parse(localStorage.getItem("busters"));

  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}`
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${
      localStorage.getItem("currentMoneyPerTap") /
      (Number(buster[1].bust) * Number(buster[2].bust))
    } * ${Number(buster[1].bust) * Number(buster[2].bust)}`
  );
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
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
  startStory();
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
    $(".tabLink").prop("disabled", false);
  }
  if (currentLink == null) {
    currentLink = event.currentTarget.id;
    $("#" + currentLink).css({ animation: "1s 1 alternate toRight" });
  }

  if (pageName != "earn" && isShowMoney == false) {
    $("#first_switch").append(
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
  $("#" + currentLink).css({ animation: "1s 1 alternate toLeft" });
  $("#" + currentLink).css({ transform: "translate(0px)" });

  setTimeout(() => {
    $("#" + pageName).slideDown(1000);
    document.getElementById(pageName).style.display = "grid";
    currentArt = pageName;
    currentLink = event.currentTarget.id;
    $("main").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $("aside").css(
      "background-color",
      $("#" + event.currentTarget.id).css("background-color")
    );
    $(".tabLink").prop("disabled", false);
    $("#" + currentLink).css(
      { animation: "1s 1 alternate toRight" },
      { "animation-fill-mode": "forwards" }
    );
    $("#" + currentLink).css({ transform: "translate(80px)" });
  }, 1000);
}

ws.onopen = () => {
  let buster = JSON.parse(localStorage.getItem("busters"));
  $(".tabContent").css({'transform': 'translate(100000px; 10000px)'});
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
    `Money per tap: ${mySwitch2(
      String(localStorage.getItem("currentCowLevel"))
    )} * ${Number(buster[1].bust) * Number(buster[2].bust)}`
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
  let buster = JSON.parse(localStorage.getItem("busters"));

  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}
    `
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${mySwitch2(
      String(localStorage.getItem("currentCowLevel"))
    )} * ${Number(buster[1].bust) * Number(buster[2].bust)}`
  );
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
}, 200);

setInterval(() => {
  let buster = JSON.parse(localStorage.getItem("busters"));

  if (currentArt == "bust") {
    $("#hay_level").text(
      "Current level: " + (Number(buster[3].currentLevel) - 1)
    );
    $("#bucket_level").text(
      "Current level: " + (Number(buster[1].currentLevel) - 1)
    );
    $("#popularity_level").text(
      "Current level: " + (Number(buster[2].currentLevel) - 1)
    );
    $("#farmer_level").text(
      "Current level: " + (Number(buster[0].currentLevel) - 1)
    );

    $("#hay_type").text(`Current ${buster[3].type}: ${buster[3].bust}`);
    $("#bucket_type").text(`Current ${buster[1].type}: ${buster[1].bust}`);
    $("#popularity_type").text(`Current ${buster[2].type}: ${buster[2].bust}`);
    $("#farmer_type").text(`Current ${buster[0].type}: ${buster[0].bust}`);

    if (Number(buster[3].currentLevel) < 4) {
      $("#hay_price").text(
        `Current price: ${Number(buster[3].currentLevel) * 500}`
      );
    } else {
      $("#hay_price").text(`Current price: no price (max level)`);
      $("#buy_hay_art").css({
        "background-image": 'url("../image/hay_ico_sold.png")',
      });
    }
    if (Number(buster[1].currentLevel) < 4) {
      $("#bucket_price").text(
        `Current price: ${Number(buster[1].currentLevel) * 100}`
      );
    } else {
      $("#bucket_price").text(`Current price: no price (max level)`);
      $("#buy_bucket_art").css({
        "background-image": 'url("../image/bucket_ico_sold.png")',
      });
    }
    if (Number(buster[2].currentLevel) < 4) {
      $("#popularity_price").text(
        `Current price: ${Number(buster[2].currentLevel) * 400}`
      );
    } else {
      $("#popularity_price").text(`Current price: no price (max level)`);
      $("#buy_popularity_art").css({
        "background-image": 'url("../image/popularity_ico_sold.png")',
      });
    }
    if (Number(buster[0].currentLevel) < 4) {
      $("#farmer_price").text(
        `Current price: ${Number(buster[0].currentLevel) * 200}`
      );
    } else {
      $("#farmer_price").text(`Current price: no price (max level)`);
      $("#buy_farmer_art").css({
        "background-image": 'url("../image/farmer_ico_sold.png")',
      });
    }
  }
  mySwitch();
}, 1);

setInterval(() => {
  if (Number(localStorage.getItem("currentCowLevel")) == 9 && localStorage.getItem("isEnd") == "false") {
    localStorage.setItem("isEnd", "true");
    $("#header_img_art").css(
      { animation: "2s 1 alternate toDialog" },
      { "animation-fill-mode": "forwards" }
    );
    $("#header_img_art").css({ transform: "translate(498px, 170px)" });
    $("html").append(`
          <div id='_guide_bg'> 
          </div>
          <div id='_guide_content' style="background-color: yellow;">
              <h2>Congratulations!<br>You buy most expansive cow!<br>Thanks for playing in "COW-STOW" game!
              <div id='close_guide'>
                  <button id="_close_bg_button"></button>
              </div>
          </div>
          `);
    $("#_close_bg_button").on("click", () => {
      $("#header_img_art").css(
        { animation: "2s 1 alternate toLogo" },
        { "animation-fill-mode": "forwards" }
      );
      $("#header_img_art").css({ transform: "translate(0px, 0px)" });
      $("#_guide_bg").fadeTo(1000, 0, () => {
        $("#_guide_bg").remove();
      });
      $("#_guide_content").fadeTo(1000, 0, () => {
        $("#_guide_content").remove();
      });
    });
  }

  if (currentArt == "earn") {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(busters[0].currentLevel) > 1) {
      $("#farmer_earn").css({
        display: "block",
      });
      $("#farmer_earn").css({
        "background-image": "url(./image/farmer_ico.png)",
      });
      $("#farm_level").text(
        `Current "farmer" level: ${Number(busters[0].currentLevel) - 1}`
      );
    } else {
      $("#farmer_earn").css({
        display: "none",
      });
    }
    if (Number(busters[1].currentLevel) > 1) {
      $("#bucket_earn").css({
        display: "block",
      });
      $("#bucket_earn").css({
        "background-image": "url(./image/bucket_ico.png)",
      });
      $("#buck_level").text(
        `Current "bucket" level: ${Number(busters[1].currentLevel) - 1}`
      );
    } else {
      $("#bucket_earn").css({
        display: "none",
      });
    }
    if (Number(busters[2].currentLevel) > 1) {
      $("#popularity_earn").css({
        display: "block",
      });
      $("#popularity_earn").css({
        "background-image": "url(./image/popularity_ico.png)",
      });
      $("#pop_level").text(
        `Current "popularity" level: ${Number(busters[2].currentLevel) - 1}`
      );
    } else {
      $("#popularity_earn").css({
        display: "none",
      });
    }
    if (Number(busters[3].currentLevel) > 1) {
      $("#hay_earn").css({ display: "block" });
      $("#hay_earn").css({ "background-image": "url(./image/hay_ico.png)" });
      $("#hay_level").text(
        `Current "hay" level: ${Number(busters[3].currentLevel) - 1}`
      );
    } else {
      $("#hay_earn").css({ display: "none" });
    }
  }
}, 1);

$("#buy_cow").on("click", (event) => {
  switchPage(event, "buy");
});
$("#buy_music").on("click", (event) => {
  switchPage(event, "audi");
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
$(".buy_bust_uni_class").on("click", (event) => {
  onClickBuyBust(event);
});
$("#reset_button").on("click", () => {
  checkerReset();
});
