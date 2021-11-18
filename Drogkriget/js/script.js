function buttondown(buttonid) {
  /*document.getElementById(buttonid).style.boxShadow="inset 0px 10px 9px -10px black, 0px 5px 15px -5px black";*/
  document.getElementById(buttonid).style.backgroundColor="#b28c5e";
  document.getElementById(buttonid).style.color="#4d1805";
}
/*inset 0px -10px 6px -10px black*/
function buttonup(buttonid) {
/*document.getElementById(buttonid).style.boxShadow="inset 0px -10px 9px -10px black, 0px 5px 20px -5px black";*/
document.getElementById(buttonid).style.backgroundColor="#f2dfbb";
document.getElementById(buttonid).style.color="#732407";
}
function meny() {
  var menydropdown = document.getElementById("Menydrop");
  var menydropCompStyle = window.getComputedStyle(menydropdown);
  var menydropDisplay = menydropCompStyle.getPropertyValue("display");

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
function menycontent() {

var meny = document.getElementById("meny");
var menyheight = meny.offsetHeight;
var menywidth = meny.offsetWidth;
var windowheight = window.innerHeight;
var linksfontresize = 2/19 * menywidth;
var linkswidthresize = 15/19 * menywidth;
var titelfontresize = 3/19 * menywidth;
document.getElementById("demo").innerHTML = menyheight + " " + menywidth + " " + linksfontresize + " " + windowheight;

  if (menyheight > 130) {
    meny.style.justifyContent="center";
  }
  else if ( (menyheight == 130)&&(menywidth > 180) ) {
    meny.style.justifyContent="space-between";
  }
  if (menywidth <= 380) {
    document.getElementById("links").style.fontSize=linksfontresize + "pt";
    document.getElementById("links").style.width=linkswidthresize + "px";
    document.getElementById("titel").style.fontSize=titelfontresize + "pt";

    document.getElementById("links").style.marginLeft="0px";
    document.getElementById("links").style.marginRight="0px";
    document.getElementById("titel").style.marginLeft="0px";
    document.getElementById("titel").style.marginRight="0px";
  }
  else {
    document.getElementById("links").style.fontSize="40pt";
    document.getElementById("links").style.width="300px";
    document.getElementById("titel").style.fontSize="60pt";

    document.getElementById("links").style.marginLeft="40px";
    document.getElementById("links").style.marginRight="40px";
    document.getElementById("titel").style.marginLeft="40px";
    document.getElementById("titel").style.marginRight="40px";
  }
}
