var stringForBanner="Welcome to the coding club IIT Jammu"
var banner_h1=document.getElementById("banner_h1");
var navigation=document.getElementById("navigation");
var i=0,j=1;
typeWriter();

function typeWriter() {
    
  if (i < stringForBanner.length) {
    banner_h1.innerHTML += stringForBanner.charAt(i);
    
  }
  else {
    return;
  }
  i++;
  setTimeout(typeWriter, 200);
}

function showNav(){
  if(j%2==0)
  navigation.style.transform="translate(0,-50%)";
  else
  navigation.style.transform="translate(-100%,-50%)";

  j++;
}

