export function mySwitch() {
    switch (localStorage.getItem("currentCowLevel")) {
        case "1":
          $("#earn_button").css({
            "background-image": 'url("../image/first_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: Default cow(`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          break;
        case "2": {
          $("#earn_button").css({
            "background-image": 'url("../image/second_cow.png")',
          });
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
        case "3": {
          $("#earn_button").css({
            "background-image": 'url("../image/third_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: radioactive cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          break;
        }
        case "4": {
          $("#earn_button").css({
            "background-image": 'url("../image/firth_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: pig cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          break;
        }
        case "5": {
          $("#earn_button").css({
            "background-image": 'url("../image/fifth_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: pig cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          $("#buy_mushroom_cow_art").css({
            "background-image": 'url("./image/mushroom_cow_sold.png")',
          });
          break;
        }
        case "6": {
          $("#earn_button").css({
            "background-image": 'url("../image/sixth_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: ice cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          $("#buy_mushroom_cow_art").css({
            "background-image": 'url("./image/mushroom_cow_sold.png")',
          });
          $("#buy_ice_cow_art").css({
            "background-image": 'url("./image/ice_cow_sold.png")',
          });
          break;
        }
        case "7": {
          $("#earn_button").css({
            "background-image": 'url("../image/seventh_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: old cow-ban`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          $("#buy_mushroom_cow_art").css({
            "background-image": 'url("./image/mushroom_cow_sold.png")',
          });
          $("#buy_ice_cow_art").css({
            "background-image": 'url("./image/ice_cow_sold.png")',
          });
          $("#buy_kanabis_cow_art").css({
            "background-image": 'url("./image/kanabis_cow_sold.png")',
          });
          break;
        }
        case "8": {
          $("#earn_button").css({
            "background-image": 'url("../image/eigth_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: miku cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          $("#buy_mushroom_cow_art").css({
            "background-image": 'url("./image/mushroom_cow_sold.png")',
          });
          $("#buy_ice_cow_art").css({
            "background-image": 'url("./image/ice_cow_sold.png")',
          });
          $("#buy_kanabis_cow_art").css({
            "background-image": 'url("./image/kanabis_cow_sold.png")',
          });
          $("#buy_miku_cow_art").css({
            "background-image": 'url("./image/miku_cow_sold.png")',
          });
          break;
        }
        case "9": {
          $("#earn_button").css({
            "background-image": 'url("../image/nigth_cow.png")',
          });
          $("#cow_name").text(
            `level ${localStorage.getItem("currentCowLevel")}: hamster-cow`
          );
          $("#buy_default_cow_art").css({
            "background-image": 'url("./image/def_cow_sold.png")',
          });
          $("#udder_cow_buy_art").css({
            "background-image": 'url("./image/udder_cow_sold.png")',
          });
          $("#buy_radioactive_cow_art").css({
            "background-image": 'url("./image/radioactive_cow_sold.png")',
          });
          $("#buy_pig_cow_art").css({
            "background-image": 'url("./image/pig_cow_sold.png")',
          });
          $("#buy_mushroom_cow_art").css({
            "background-image": 'url("./image/mushroom_cow_sold.png")',
          });
          $("#buy_ice_cow_art").css({
            "background-image": 'url("./image/ice_cow_sold.png")',
          });
          $("#buy_miku_cow_art").css({
            "background-image": 'url("./image/miku_cow_sold.png")',
          });
          $("#buy_kanabis_cow_art").css({
            "background-image": 'url("./image/kanabis_cow_sold.png")',
          });
          $("#buy_mustafa_cow_art").css({
            "background-image": 'url("./image/mustafa_cow_sold.png")',
          });
          break;
        }
      }    
}