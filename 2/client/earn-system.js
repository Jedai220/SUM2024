if (
  localStorage.getItem("currentMoneyPerTap") == "undefined" ||
  localStorage.getItem("currentMoney") == "undefined" ||
  localStorage.getItem("currentCowLevel") == "undefined" ||
  localStorage.getItem("currentInflows") == "undefined"
) {
  localStorage.setItem("currentMoneyPerTap", 1);
  localStorage.setItem("currentMoney", 0);
  localStorage.setItem("currentInflows", 0);
  localStorage.setItem("currentCowLevel", 1);
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
  let coord = getPosition(e);
  localStorage.setItem(
    "currentMoney",
    Number(localStorage.getItem("currentMoney")) +
      Number(localStorage.getItem("currentMoneyPerTap"))
  );
  $("#delete_it").append(
    `<p class="v_text" style="position:absolute;color:red;left:${
      coord.x
    }px;top:${coord.y - 15}px;">+1<p>`
  );
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
  $("#money_per_tap_text").text(
    `Money per tap: ${localStorage.getItem("currentMoneyPerTap")}`
  );
  $("#money_per_min_text").text(
    `Inflows per min: ${localStorage.getItem("currentInflows")}`
  );

  localStorage.setItem("currentInflows", 1);
}

setInterval(() => {
  localStorage.setItem(
    "currentMoney",
    Number(localStorage.getItem("currentMoney")) +
      Number(localStorage.getItem("currentInflows"))
  );
  $("#money_current_text").text(
    `Current money: ${localStorage.getItem("currentMoney")}`
  );
}, 1000 * 60);
