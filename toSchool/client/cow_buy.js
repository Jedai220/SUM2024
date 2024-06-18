export function onClickBuyCow(event) {
  switch (localStorage.getItem("currentCowLevel")) {
    case "1": {
      if (event.currentTarget.getAttribute("id") == "udder_cow_buy_art") {
        if (localStorage.getItem("currentMoney") > 200) {
          $("html").append(`
            <div id='guide_bg'>
       
            </div>
            <div id='guide_content' style="background-color: green;">
                <h2>Congratulation!<br>You buy "under cow"!</h2>
    
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
          localStorage.setItem('currentMoneyPerTap', 3);
          $("#money_per_tap_text").text(
            `Money per tap: ${localStorage.getItem("currentMoneyPerTap")}`
          );        
          localStorage.setItem('currentCowLevel', 2);
        }
        else {
          $("html").append(`
            <div id='guide_bg'>
       
            </div>
            <div id='guide_content' style="background-color: green;">
                <h2>Error!<br>Enought money!</h2>
    
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
      break;
    }
  }
}
