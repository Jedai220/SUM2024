import { startStory } from "./story.js";

function mySwitch2(lvl) {
  switch (lvl) {
    case "1": {
      return Number($("#def_cl").text());
    }
    case "2": {
      return Number($("#ud_cl").text());
    }
    case "3": {
      return Number($("#rad_cl").text());
    }
    case "4": {
      return Number($("#pig_cl").text());
    }
    case "5": {
      return Number($("#mus_cl").text());
    }
    case "6": {
      return Number($("#ice_cl").text());
    }
    case "7": {
      return Number($("#kan_cl").text());
    }
    case "8": {
      return Number($("#mik_cl").text());
    }
    case "9": {
      return Number($("#mus2_cl").text());
    }
  }
}

if (
  localStorage.getItem("currentMoneyPerTap") == "undefined" ||
  localStorage.getItem("currentMoney") == "undefined" ||
  localStorage.getItem("currentCowLevel") == "undefined" ||
  localStorage.getItem("currentInflows") == "undefined" ||
  localStorage.getItem("currentMoneyPerTap") == "null" ||
  localStorage.getItem("currentMoney") == "null" ||
  localStorage.getItem("currentCowLevel") == "null" ||
  localStorage.getItem("currentInflows") == "null"
) {
  localStorage.setItem("currentMoneyPerTap", 1);
  localStorage.setItem("currentMoney", 0);
  localStorage.setItem("currentInflows", 0);
  localStorage.setItem("currentCowLevel", 1);
  localStorage.setItem("busters", JSON.stringify(setDefLevelBust()));
  localStorage.setItem("isEnd", "false");
  startStory();
}

class busters {
  constructor(level, _name, type, bust) {
    this.currentLevel = level;
    this.name = _name;
    this.type = type;
    this.bust = bust;
  }
}

export function setDefLevelBust() {
  let buster = new Array();

  buster[0] = new busters("1", "farmer", "inflows", "0");
  buster[1] = new busters("1", "bucket", "multiple", "1");
  buster[2] = new busters("1", "popularity", "multiple", "1");
  buster[3] = new busters("1", "hay", "inflows", "0");

  return buster;
}

function getPosition(e) {
  var y;
  var x = (y = 0);

  if (!e) {
    var e = window.event;
  }

  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else if (e.clientX || e.clientY) {
    x =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    y =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: x, y: y };
}

setInterval(() => {
  $(`.v_text`).empty();
}, 1000);

export function getPlus1(e) {
  let buster = JSON.parse(localStorage.getItem("busters"));

  e.preventDefault();
  let coord = getPosition(e);
  // localStorage.setItem('currentMoneyPerTap', );
  localStorage.setItem(
    "currentMoney",
    Number(localStorage.getItem("currentMoney")) +
      Number(localStorage.getItem("currentMoneyPerTap"))
  );

  if (e.code == "Space") {
    coord = getPosition(document.getElementById('earn_button'));
    $("#earn_wrapper").append(
      `<p class="v_text" style="position:absolute;color:red;left:150
        px;top:350px;">+${localStorage.getItem("currentMoneyPerTap")}<p>`
    );
  } else if (e.button == 0 || e.button == 1) {
    $("#delete_it").append(
      `<p class="v_text" style="position:absolute;color:red;left:${
        coord.x
      }px;top:${coord.y - 15}px;">+${localStorage.getItem(
        "currentMoneyPerTap"
      )}<p>`
    );
  } else if (e.button == 2) {
    $("#delete_it").append(
      `<p class="v_text" style="position:absolute;color:red;left:${
        coord.x
      }px;top:${coord.y - 15}px;">+${localStorage.getItem(
        "currentMoneyPerTap"
      )}<p>`
    );
  } else {
    return;
  }
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

  $("#earn_button").css(
    { animation: "0.05s 1 alternate toUp" },
    { transform: "translate(0px, -50px)" }
  );
  setTimeout(() => {
    $("#earn_button").css(
      { animation: "0.1s 1 alternate toDown" },
      { transform: "translate(0px, 0px)" }
    );
  }, 50);
}

export function getPlus1Key(e) {
  if (e.code == "Space") {
    getPlus1(e);
  }
}

setInterval(() => {
  localStorage.setItem(
    "currentMoney",
    `${
      Number(localStorage.getItem("currentMoney")) +
      Number(localStorage.getItem("currentInflows"))
    }`
  );
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
}, 1000 * 60);
