export function setDefaultBuyStatus() {
  $("#buy_default_cow_art").attr("isBuying", true);
  $("#udder_cow_buy_art").attr("isBuying", false);
  $("#buy_radioactive_cow_art").attr("isBuying", false);
  $("#buy_pig_cow_art").attr("isBuying", false);
  $("#buy_mushroom_cow_art").attr("isBuying", false);
  $("#buy_ice_cow_art").attr("isBuying", false);
  $("#buy_kanabis_cow_art").attr("isBuying", false);
  $("#buy_miku_cow_art").attr("isBuying", false);
  $("#buy_mustafa_cow_art").attr("isBuying", false);

  $("#buy_hay_art").css({
    "background-image": 'url("../image/hay_ico.gif")',
  });
  $("#buy_bucket_art").css({
    "background-image": 'url("../image/bucket_ico.gif")',
  });
  $("#buy_popularity_art").css({
    "background-image": 'url("../image/popularity_ico.gif")',
  });
  $("#buy_farmer_art").css({
    "background-image": 'url("../image/farmer_ico.gif")',
  });
}
