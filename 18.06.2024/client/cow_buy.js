import { setDefaultBuyStatus } from "./reset.js";

export function onClickBuyCow(event) {
  if (event.currentTarget.getAttribute("id") == "buy_default_cow_art") {
    $("html").append(`
      <div id='guide_bg'> 
      </div>
      <div id='guide_content' style="background-color: yellow;">
          <h2>ERROR!<br>You already buy "default cow"!</h2>

          <div id='close_guide'>
              <button id="close_bg_button"></button>
          </div>
      </div>
      `);
    $("#close_bg_button").on("click", () => {
      $("#guide_bg").fadeTo(1000, 0, () => {
        $("#guide_bg").remove();
      });
      $("#guide_content").fadeTo(1000, 0, () => {
        $("#guide_content").remove();
      });
    });
    return;
  }
  if (event.currentTarget.getAttribute("id") == "buy_miku_cow_art") {
    checkBuyingAbility(event, "buy_miku_cow_art", "miku cow", 100000, 100, 8);
  } else if (event.currentTarget.getAttribute("id") == "udder_cow_buy_art") {
    checkBuyingAbility(event, "udder_cow_buy_art", "udder cow", 400, 3, 2);
  } else if (
    event.currentTarget.getAttribute("id") == "buy_radioactive_cow_art"
  ) {
    checkBuyingAbility(
      event,
      "buy_radioactive_cow_art",
      "radioactive cow",
      3000,
      10,
      3
    );
  } else if (event.currentTarget.getAttribute("id") == "buy_pig_cow_art") {
    checkBuyingAbility(event, "buy_pig_cow_art", "pig cow", 8200, 15, 4);
  } else if (event.currentTarget.getAttribute("id") == "buy_mushroom_cow_art") {
    checkBuyingAbility(
      event,
      "buy_mushroom_cow_art",
      "mushroom cow",
      15000,
      30,
      5
    );
  } else if (event.currentTarget.getAttribute("id") == "buy_ice_cow_art") {
    checkBuyingAbility(event, "buy_ice_cow_art", "ice cow", 30000, 50, 6);
  } else if (event.currentTarget.getAttribute("id") == "buy_kanabis_cow_art") {
    checkBuyingAbility(
      event,
      "buy_kanabis_cow_art",
      "old cow-ban",
      50000,
      80,
      7
    );
  } else if (event.currentTarget.getAttribute("id") == "buy_mustafa_cow_art") {
    checkBuyingAbility(
      event,
      "buy_mustafa_cow_art",
      "hamster-cow",
      500000,
      200,
      9
    );
  }
}
function checkBuyingAbility(event, id, name, minus, plus, new_level) {
  if (
    $("#buy_default_cow_art").attr("isBuying") == "undefined" ||
    $("#udder_cow_buy_art").attr("isBuying") == "undefined" ||
    $("#buy_radioactive_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_pig_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_mushroom_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_ice_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_kanabis_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_miku_cow_art").attr("isBuying") == "undefined" ||
    $("#buy_mustafa_cow_art").attr("isBuying") == "undefined"
  ) {
    setDefaultBuyStatus();
  }
  if (
    localStorage.getItem("currentMoney") >= minus &&
    $(`#${id}`).attr("isBuying") == "false" &&
    localStorage.getItem("currentCowLevel") < new_level
  ) {
    $("html").append(`
          <div id='guide_bg'>
      
          </div>
          <div id='guide_content' style="background-color: green;">
              <h2>Congratulation!<br>You buy "${name}"!</h2>
  
              <div id='close_guide'>
                  <button id="close_bg_button"></button>
              </div>
          </div>
          `);
    $("#close_bg_button").on("click", () => {
      $("#guide_bg").fadeTo(1000, 0, () => {
        $("#guide_bg").remove();
      });
      $("#guide_content").fadeTo(1000, 0, () => {
        $("#guide_content").remove();
      });
    });
    $("#current_money_show").text(
      `Current Money: ${localStorage.getItem("currentMoney") - minus}`
    );
    let bust = JSON.parse(localStorage.getItem("busters"));
    localStorage.setItem("currentCowLevel", new_level);
    localStorage.setItem(
      "currentMoney",
      localStorage.getItem("currentMoney") - minus
    );
    localStorage.setItem(
      "currentMoneyPerTap",
      Number(bust[2].bust) * Number(bust[1].bust) * Number(plus)
    );

    $("#button_to_del").text();
    $(`#${id}`).attr("isBuying", "true");
    for (let i = Number(localStorage.getItem("currentCowLevel")); i >= 0; i--) {
      switch (i) {
        case 2:
          $(`#udder_cow_buy_art`).attr("isBuying", "true");
          break;
        case 3:
          $(`#buy_radioactive_cow_art`).attr("isBuying", "true");
          break;
        case 4:
          $(`#buy_pig_cow_art`).attr("isBuying", "true");
          break;
        case 5:
          $(`#buy_mushroom_cow_art`).attr("isBuying", "true");
          break;
        case 6:
          $(`#buy_ice_cow_art`).attr("isBuying", "true");
          break;
        case 7:
          $(`#buy_kanabis_cow_art`).attr("isBuying", "true");
          break;
        case 8:
          $(`#buy_miku_cow_art`).attr("isBuying", "true");
          break;
      }
    }
    $("#money_current_text").text(
      `Current money: ${localStorage.getItem("currentMoney")}`
    );
  } else if (
    $(`#${id}`).attr("isBuying") == "true" ||
    localStorage.getItem("currentCowLevel") == new_level
  ) {
    $("html").append(`
          <div id='guide_bg'>
      
          </div>
          <div id='guide_content' style="background-color: green;">
              <h2>Error!<br>"${name}" already buy!</h2>
  
              <div id='close_guide'>
                  <button id="close_bg_button"></button>
              </div>
          </div>
          `);
    $("#close_bg_button").on("click", () => {
      $("#guide_bg").fadeTo(1000, 0, () => {
        $("#guide_bg").remove();
      });
      $("#guide_content").fadeTo(1000, 0, () => {
        $("#guide_content").remove();
      });
    });
  } else if (localStorage.getItem("currentCowLevel") > new_level) {
    $("html").append(`
      <div id='guide_bg'>
  
      </div>
      <div id='guide_content' style="background-color: green;">
          <h2>Error!<br>You have better cow!</h2>

          <div id='close_guide'>
              <button id="close_bg_button"></button>
          </div>
      </div>
      `);
    $("#close_bg_button").on("click", () => {
      $("#guide_bg").fadeTo(1000, 0, () => {
        $("#guide_bg").remove();
      });
      $("#guide_content").fadeTo(1000, 0, () => {
        $("#guide_content").remove();
      });
    });
  } else {
    $("html").append(`
        <div id='guide_bg'>
    
        </div>
        <div id='guide_content' style="background-color: green;">
            <h2>Error!<br>Not enough money!</h2>

            <div id='close_guide'>
                <button id="close_bg_button"></button>
            </div>
        </div>
        `);
    $("#close_bg_button").on("click", () => {
      $("#guide_bg").fadeTo(1000, 0, () => {
        $("#guide_bg").remove();
      });
      $("#guide_content").fadeTo(1000, 0, () => {
        $("#guide_content").remove();
      });
    });
  }
}

export function timerCheckerBuyingAbility() {
  setInterval(() => {
    setParamColor("udder_cow_buy_art", "ud_p", 400);
    setParamColor("buy_radioactive_cow_art", "rad_p", 3000);
    setParamColor("buy_pig_cow_art", "pig_p", 8200);
    setParamColor("buy_mushroom_cow_art", "mush_p", 15000);
    setParamColor("buy_ice_cow_art", "ice_p", 30000);
    setParamColor("buy_kanabis_cow_art", "kan_p", 50000);
    setParamColor("buy_miku_cow_art", "miku_p", 100000);
    setParamColor("buy_mustafa_cow_art", "must_p", 500000);
  }, 1);
}

function setParamColor(cow, tag, pr) {
  let money = localStorage.getItem("currentMoney");

  if (Number(money) >= pr && $(`#${cow}`).attr("isBuying") == "false") {
    $(`.${tag}`).css({ color: "turquoise" });
  } else if ($(`#${cow}`).attr("isBuying") == "true") {
    $(`.${tag}`).css({ color: "#70ff90" });
  } else {
    $(`.${tag}`).css({ color: "#ee5a8a" });
  }
}
