class busters {
  constructor(level, _name, type, bust) {
    this.currentLevel = level;
    this.name = _name;
    this.type = type;
    this.bust = bust;
  }
}

export function onClickBuyBust(event) {
  let bust = JSON.parse(localStorage.getItem("busters"));

  //! farmer description
  if (event.currentTarget.getAttribute("id") == "buy_farmer_art") {
    if (
      localStorage.getItem("currentMoney") >=
        200 * Number(bust[0].currentLevel) &&
      bust[0].currentLevel < 4
    ) {
      let newBust = new busters(
        Number(bust[0].currentLevel) + 1,
        bust[0].name,
        bust[0].type,
        Number(bust[0].currentLevel) * 30
      );
      bust[0] = newBust;
      $("#current_money_show").text(
        `Current Money: ${
          localStorage.getItem("currentMoney") -
          (Number(bust[0].currentLevel) - 1) * 200
        }`
      );
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Congratulations!<br>You bought "farmer" level ${
                      Number(bust[0].currentLevel) - 1
                    }!</h2>
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
      localStorage.setItem("busters", JSON.stringify(bust));
      localStorage.setItem(
        "currentMoney",
        Number(localStorage.getItem("currentMoney")) -
          (Number(bust[0].currentLevel) - 1) * 200
      );
      localStorage.setItem(
        "currentInflows",
        `${
          Number(localStorage.getItem("currentInflows")) + Number(newBust.bust)
        }`
      );
    } else if (Number(bust[0].currentLevel) >= 4) {
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Error!<br>Your "farmer" have max level!</h2>
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
    } else if (
      localStorage.getItem("currentMoney") <
      200 * Number(bust[0].currentLevel)
    ) {
      $("html").append(`
            <div id='guide_bg'> 
            </div>
            <div id='guide_content' style="background-color: yellow;">
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
  //! bucket description
  else if (event.currentTarget.getAttribute("id") == "buy_bucket_art") {
    if (
      localStorage.getItem("currentMoney") >=
        100 * Number(bust[1].currentLevel) &&
      bust[1].currentLevel < 4
    ) {
      let newBust = new busters(
        Number(bust[1].currentLevel) + 1,
        bust[1].name,
        bust[1].type,
        Number(bust[1].currentLevel) + 1
      );
      bust[1] = newBust;
      $("#current_money_show").text(
        `Current Money: ${
          localStorage.getItem("currentMoney") -
          (Number(bust[1].currentLevel) - 1) * 100
        }`
      );
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Congratulations!<br>You bought "bucket" level ${
                      Number(bust[1].currentLevel) - 1
                    }!</h2>
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
      localStorage.setItem("busters", JSON.stringify(bust));
      localStorage.setItem(
        "currentMoney",
        Number(localStorage.getItem("currentMoney")) -
          (Number(bust[1].currentLevel) - 1) * 100
      );
      localStorage.setItem(
        "currentMoneyPerTap",
        `${Number(bust[2].bust) * Number(bust[1].bust) * Number(localStorage.getItem("currentCowLevel"))}`  
      );
    } else if (Number(bust[1].currentLevel) >= 4) {
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Error!<br>Your "bucket" have max level!</h2>
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
    } else if (
      localStorage.getItem("currentMoney") <
      100 * Number(bust[1].currentLevel)
    ) {
      $("html").append(`
            <div id='guide_bg'> 
            </div>
            <div id='guide_content' style="background-color: yellow;">
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
  //! popularity description
  else if (event.currentTarget.getAttribute("id") == "buy_popularity_art") {
    if (
      localStorage.getItem("currentMoney") >=
        400 * Number(bust[2].currentLevel) &&
      bust[2].currentLevel < 4
    ) {
      let newBust = new busters(
        Number(bust[2].currentLevel) + 1,
        bust[2].name,
        bust[2].type,
        Number(bust[2].currentLevel) + 2
      );
      bust[2] = newBust;
      $("#current_money_show").text(
        `Current Money: ${
          localStorage.getItem("currentMoney") -
          (Number(bust[2].currentLevel) - 1) * 400
        }`
      );
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Congratulations!<br>You bought "popularity" level ${
                      Number(bust[2].currentLevel) - 1
                    }!</h2>
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
      localStorage.setItem("busters", JSON.stringify(bust));
      localStorage.setItem(
        "currentMoney",
        Number(localStorage.getItem("currentMoney")) -
          (Number(bust[2].currentLevel) - 1) * 400
      );
      localStorage.setItem(
        "currentMoneyPerTap",
        `${Number(bust[2].bust) * Number(bust[1].bust) * Number(localStorage.getItem("currentCowLevel"))}`
      );
    } else if (Number(bust[2].currentLevel) >= 4) {
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Error!<br>Your "popularity" have max level!</h2>
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
    } else if (
      localStorage.getItem("currentMoney") <
      400 * Number(bust[2].currentLevel)
    ) {
      $("html").append(`
            <div id='guide_bg'> 
            </div>
            <div id='guide_content' style="background-color: yellow;">
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
  } else if (event.currentTarget.getAttribute("id") == "buy_hay_art") {
    if (
      localStorage.getItem("currentMoney") >=
        500 * Number(bust[3].currentLevel) &&
      bust[3].currentLevel < 4
    ) {
      let newBust = new busters(
        Number(bust[3].currentLevel) + 1,
        bust[3].name,
        bust[3].type,
        Number(bust[3].currentLevel) * 50
      );
      bust[3] = newBust;
      $("#current_money_show").text(
        `Current Money: ${
          localStorage.getItem("currentMoney") -
          (Number(bust[3].currentLevel) - 1) * 500
        }`
      );
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Congratulations!<br>You bought "hay" level ${
                      Number(bust[3].currentLevel) - 1
                    }!</h2>
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
      localStorage.setItem("busters", JSON.stringify(bust));
      localStorage.setItem(
        "currentMoney",
        Number(localStorage.getItem("currentMoney")) -
          (Number(bust[3].currentLevel) - 1) * 500
      );
      localStorage.setItem(
        "currentInflows",
        `${
          Number(localStorage.getItem("currentInflows")) + Number(newBust.bust)
        }`
      );
    } else if (Number(bust[3].currentLevel) >= 4) {
      $("html").append(`
                <div id='guide_bg'> 
                </div>
                <div id='guide_content' style="background-color: yellow;">
                    <h2>Error!<br>Your "hay" have max level!</h2>
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
    } else if (
      localStorage.getItem("currentMoney") <
      500 * Number(bust[3].currentLevel)
    ) {
      $("html").append(`
            <div id='guide_bg'> 
            </div>
            <div id='guide_content' style="background-color: yellow;">
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
}
