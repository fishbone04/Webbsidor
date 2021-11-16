function myFunction() {
    document.getElementById("demo").style.display="none";
}

function buttondown(buttonid) {
  document.getElementById(buttonid).style.boxShadow="inset 0px 10px 9px -10px black, 0px 5px 15px -5px black";
}
/*inset 0px -10px 6px -10px black*/
function buttonup(buttonid) {
document.getElementById(buttonid).style.boxShadow="inset 0px -10px 9px -10px black, 0px 5px 20px -5px black";
}
function meny() {
  var menydropdown = document.getElementById("Menydrop");
  var menydropCompStyle = window.getComputedStyle(menydropdown);
  var menydropDisplay = menydropCompStyle.getPropertyValue("display");


/*document.getElementById("demo").innerHTML = menydropDisplay;*/

  if (menydropDisplay == "none") {
    document.getElementById("Menydrop").style.display="flex";
    document.getElementById("meny").style.borderBottomLeftRadius="0px";
    document.getElementById("meny").style.borderBottomRightRadius="0px";
  }
  else {
    document.getElementById("Menydrop").style.display="none";
    document.getElementById("meny").style.borderBottomLeftRadius="6px";
    document.getElementById("meny").style.borderBottomRightRadius="6px";
  }
}
