const n = ["M", "Me", "Mex", "Mexi", "Mexik", "Mexiko", "Mexikos", "Mexikos D", "Mexikos Dr", "Mexikos Dro", "Mexikos Drog", "Mexikos Drogk", "Mexikos Drogkri", "Mexikos Drogkrig"];
let i = 0;
var font = 1;
setInterval(titleupd, 300);

function titleupd(){
  document.title = n[i];
  i += 1;
  if (i > 13) {
    i=0;
  }
}
  /*const test = ["kyckling", "potatis"]
  var test2 = 0;
  document.getElementById("demo").innerHTML=test[test2];
  test2 += 1;*/

/*  switch (font) {
    case 1:
    document.getElementById("body").style.fontFamily="arial";
    font = 2;
    break;
    case 2:
    document.getElementById("body").style.fontFamily="impact";
    font = 1;
  }

}*/
function buttondown(buttonid) {
  /*document.getElementById(buttonid).style.boxShadow="inset 0px 10px 9px -10px black, 0px 5px 15px -5px black";*/
  document.getElementById(buttonid).style.filter="brightness(50%)";
}
/*inset 0px -10px 6px -10px black*/
function buttonup(buttonid) {
/*document.getElementById(buttonid).style.boxShadow="inset 0px -10px 9px -10px black, 0px 5px 20px -5px black";*/
  document.getElementById(buttonid).style.filter="brightness(1)";
}
function buttonhoveron(buttonid) {
  document.getElementById(buttonid).style.filter="brightness(75%)";
}
function meny() {
  var menydropdown = document.getElementById("Menydrop");
  var menydropCompStyle = window.getComputedStyle(menydropdown);
  var menydropDisplay = menydropCompStyle.getPropertyValue("display");
  var menyimage = document.getElementById("menyimg");

  if (menydropDisplay == "none") {
    document.getElementById("Menydrop").style.display="flex";
    document.getElementById("meny").style.borderBottomLeftRadius="0px";
    menyimage.src = "../../bilder/menu_close.svg";
  }
  else {
    document.getElementById("Menydrop").style.display="none";
    document.getElementById("meny").style.borderBottomLeftRadius="6px";
    menyimage.src = "../../bilder/menu_open.svg";
  }
}
function hem(){
  location.href="../home"
}
function menycontent() {

var meny = document.getElementById("meny");
var menyheight = meny.offsetHeight;
var menywidth = meny.offsetWidth;
var menydropwidth = document.getElementById("Menydrop").offsetWidth;
var windowheight = window.innerHeight;
var linksiconresize = 1/7 * menywidth;
var linkswidthresize = 10/21 * menywidth;
var titelfontresize = 1/12 * menywidth;
/*document.getElementById("demo").innerHTML = menyheight + " " + menywidth + " " + linksiconresize + " " + windowheight;*/

  if (menyheight > 130) {
    meny.style.justifyContent="center";
  }
  else if ( (menyheight == 130)&&(menywidth > 180) ) {
    meny.style.justifyContent="space-between";
  }
  if (menywidth <= 420) {
    document.getElementById("menyimg").style.width=linksiconresize + "px";
    document.getElementById("homeimg").style.width=linksiconresize + "px";
    document.getElementById("links").style.width=linkswidthresize + "px";
    document.getElementById("titel").style.fontSize=titelfontresize + "pt";

    document.getElementById("links").style.marginLeft="0px";
    document.getElementById("links").style.marginRight="0px";
    document.getElementById("titel").style.marginLeft="0px";
    document.getElementById("titel").style.marginRight="0px";
  }
  else {
    document.getElementById("menyimg").style.width="60px";
    document.getElementById("homeimg").style.width="60px";
    document.getElementById("links").style.width="200px";
    document.getElementById("titel").style.fontSize="35pt";

    document.getElementById("links").style.marginLeft="40px";
    document.getElementById("links").style.marginRight="40px";
    document.getElementById("titel").style.marginLeft="40px";
    document.getElementById("titel").style.marginRight="40px";
  }
  if (menydropwidth >= menywidth) {
    document.getElementById("meny").style.borderBottomRightRadius="0px";
  }
  else {
    document.getElementById("meny").style.borderBottomRightRadius="6px";
  }
}
