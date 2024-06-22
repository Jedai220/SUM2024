let mtInter,
  mtInter2,
  mtInter3,
  mtInter4,
  mtInter5,
  mtInter6,
  mtInter7,
  mtInter8,
  mtInter9,
  mtInter10,
  mtInter11;
let chatCounter = 0;

//! First dialog
export function startStory() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Hello!<br>Welcome to my COW-STOW!<br>A year ago, my owner died of lung cancer while feeding a radioactive cow.<br> Please help my cow-stow return to its original state.<br>
For this you will need money. To get them, push me.</h2>
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
  mtInter4 = setInterval(() => {
    if (chatCounter == 3) {
      nineChat();
    }
  }, 1);
  mtInter = setInterval(() => {
    if (Number(localStorage.getItem("currentMoney")) > 0) {
      secondChat();
    }
  }, 1);
}

//! First click
export function secondChat() {
  clearInterval(mtInter);
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  $("html").append(`
        <div id='guide_bg'> 
        </div>
        <div id='guide_content' style="background-color: yellow;">
            <h2>Oh yeah!<br>You received your first coin! Keep up the good work and buy new cows to get more money for pushing</h2>
            <div id='close_guide'>
                <button id="close_bg_button"></button>
            </div>
        </div>
        `);
  $("#close_bg_button").on("click", () => {
    $("#header_img_art").css(
      { animation: "2s 1 alternate toLogo" },
      { "animation-fill-mode": "forwards" }
    );
    $("#header_img_art").css({ transform: "translate(0px, 0px)" });
    $("#guide_bg").fadeTo(1000, 0, () => {
      $("#guide_bg").remove();
    });
    $("#guide_content").fadeTo(1000, 0, () => {
      $("#guide_content").remove();
    });
  });
  mtInter = setInterval(() => {
    if (Number(localStorage.getItem("currentMoney")) >= 100) {
      thirdChat();
    }
  }, 1);
  mtInter2 = setInterval(() => {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(localStorage.getItem("currentMoney")) >= 200) {
      fifthChat();
    }
  }, 1);
  mtInter3 = setInterval(() => {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(localStorage.getItem("currentMoney")) >= 400) {
      firstCowChat();
    }
  }, 1);
  mtInter5 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 3) {
      tenChat();
    }
  }, 1);
  mtInter6 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 4) {
      elevenChat();
    }
  }, 1);
  mtInter7 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 5) {
      twelveChat();
    }
  }, 1);
  mtInter8 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 6) {
      thirteenChat();
    }
  }, 1);
  mtInter9 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 7) {
      fourteenChat();
    }
  }, 1);
  mtInter10 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 8) {
      fifteenChat();
    }
  }, 1);
  mtInter11 = setInterval(() => {
    if (Number(localStorage.getItem("currentCowLevel")) == 9) {
      sixteenChat();
    }
  }, 1);
}

//! 100 money
export function thirdChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter);
  $("html").append(`
        <div id='guide_bg'> 
        </div>
        <div id='guide_content' style="background-color: yellow;">
            <h2>Hey bro!<br>Сan't you see that your bucket is too small?<br> Buy new in the "buy buster" tab</h2>
            <div id='close_guide'>
                <button id="close_bg_button"></button>
            </div>
        </div>
        `);
  $("#close_bg_button").on("click", () => {
    $("#header_img_art").css(
      { animation: "2s 1 alternate toLogo" },
      { "animation-fill-mode": "forwards" }
    );
    $("#header_img_art").css({ transform: "translate(0px, 0px)" });
    $("#guide_bg").fadeTo(1000, 0, () => {
      $("#guide_bg").remove();
    });
    $("#guide_content").fadeTo(1000, 0, () => {
      $("#guide_content").remove();
    });
  });
  mtInter = setInterval(() => {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(busters[1].currentLevel) != 1) {
      firthChat();
    }
  }, 1);
}

//! Buy milk
export function firthChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter);
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Yeah, that's better!</h2>
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
      chatCounter++;
      $("#_guide_bg").remove();
    });
    $("#_guide_content").fadeTo(1000, 0, () => {
      $("#_guide_content").remove();
    });
  });
}

//! 200 Coins
export function fifthChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter2);
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>I see<br> that it’s hard for you alone. Maybe you can buy yourself an assistant in the "buy busters" tab?</h2>
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
  mtInter2 = setInterval(() => {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(busters[0].currentLevel) != 1) {
      sixChat();
    }
  }, 1);
}

//! Farmer buy
export function sixChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter2);
  $("html").append(`
          <div id='_guide_bg'> 
          </div>
          <div id='_guide_content' style="background-color: yellow;">
              <h2>Yeah bro!<br>Now you have helper!</h2>
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
      chatCounter++;
    });
    $("#_guide_content").fadeTo(1000, 0, () => {
      $("#_guide_content").remove();
    });
  });
}

//! 400 Coins
export function firstCowChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter3);
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Let's go!<br>Now you 400 coins! Buy friend for me in "buy cow" tab.</h2>
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
  mtInter3 = setInterval(() => {
    let busters = JSON.parse(localStorage.getItem("busters"));
    if (Number(localStorage.getItem("currentCowLevel")) > 1) {
      eightChat();
    }
  }, 1);
}

//! Cow buy
export function eightChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter3);
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Thanks for friend, bro!<br></h2>
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
      chatCounter++;
    });
    $("#_guide_content").fadeTo(1000, 0, () => {
      $("#_guide_content").remove();
    });
  });
}

//! 500 gold
export function nineChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter4);
  $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Good job!<br>Now you can buy busters and new cows!<br>I found 500 coins for you, take it. Good luck my "owner".</h2>
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
    localStorage.setItem(
      "currentMoney",
      Number(localStorage.getItem("currentMoney")) + 500
    );
    $("current_money_show").text(
      `Current Money: ${Number(localStorage.getItem("currentMoney")) + 500}`
    );
    $("#_guide_bg").fadeTo(1000, 0, () => {
      $("#_guide_bg").remove();
    });
    $("#_guide_content").fadeTo(1000, 0, () => {
      $("#_guide_content").remove();
    });
  });
  chatCounter = 0;
}

//! Radioactive buy
export function tenChat() {
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  clearInterval(mtInter5);
  let bust = JSON.parse(localStorage.getItem("busters"));
  if (Number(bust[0].currentLevel) > 1) {
    bust[0].currentLevel = Number(bust[0].currentLevel) - 1;
    bust[0].bust = Number(bust[0].bust) - 30;
    $("#money_per_min_text").text(
      `Inflows per min: ${Number(bust[0].bust) + Number(bust[3].bust)}`
    );
    localStorage.setItem(
      "currentInflows",
      Number(bust[0].bust) + Number(bust[3].bust)
    );
    localStorage.setItem("busters", JSON.stringify(bust));
    $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Wow, you bought a radioactive cow! In case you forgot, the previous owner died precisely because of her. One of you farmer died(.</h2>
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
  } else {
    $("html").append(`
        <div id='_guide_bg'> 
        </div>
        <div id='_guide_content' style="background-color: yellow;">
            <h2>Wow, you bought a radioactive cow! In case you forgot, the previous owner died precisely because of her. For this I will take 3000 coins from you(((.</h2>
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
        chatCounter++;
      });
      $("#_guide_content").fadeTo(1000, 0, () => {
        $("#_guide_content").remove();
      });
    });
    $("#current_money_show").text(
      `Current Money: ${Number(localStorage.getItem("currentMoney")) - 3000}`
    );
    localStorage.setItem(
      "currentMoney",
      Number(localStorage.getItem("currentMoney")) - 3000
    );
  }
}

//! Pig buy
export function elevenChat() {
  clearInterval(mtInter6);
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  $("html").append(`
          <div id='_guide_bg'> 
          </div>
          <div id='_guide_content' style="background-color: yellow;">
              <h2>Yes!<br> You buy a pig-cow! He is my best friend! Take 1000 coins for this purchase!</h2>
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
      chatCounter++;
    });
    $("#_guide_content").fadeTo(1000, 0, () => {
      $("#_guide_content").remove();
    });
  });
  localStorage.setItem(
    "currentMoney",
    Number(localStorage.getItem("currentMoney")) + 1000
  );
  $("current_money_show").text(
    `Current Money: ${Number(localStorage.getItem("currentMoney")) + 1000}`
  );
}

//! Mushroom buy
export function twelveChat() {
  clearInterval(mtInter7);
}

//! Ice buy
export function thirteenChat() {
  clearInterval(mtInter8);
}

//! Old buy
export function fourteenChat() {
  clearInterval(mtInter9);
  $("#header_img_art").css(
    { animation: "2s 1 alternate toDialog" },
    { "animation-fill-mode": "forwards" }
  );
  $("#header_img_art").css({ transform: "translate(498px, 170px)" });
  $("html").append(`
          <div id='_guide_bg'> 
          </div>
          <div id='_guide_content' style="background-color: yellow;">
              <h2>Ooooops...!<br> You buy a old cow-buy... He is my grandpa. Rumor has it that he eats twice as much hay as other cows.<br> (hay level dropped by 1)</h2>
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
  let bust = JSON.parse(localStorage.getItem("busters"));
  bust[3].currentLevel = Number(bust[3].currentLevel) - 1;
  bust[3].bust = Number(bust[3].bust) - 50;
  $("#money_per_min_text").text(
    `Inflows per min: ${Number(bust[0].bust) + Number(bust[3].bust)}`
  );
  localStorage.setItem(
    "currentInflows",
    Number(bust[0].bust) + Number(bust[3].bust)
  );
  localStorage.setItem("busters", JSON.stringify(bust));
}

//! Miku buy
export function fifteenChat() {
  clearInterval(mtInter10);
}

//! Hamster buy
export function sixteenChat() {
  clearInterval(mtInter11);
}
