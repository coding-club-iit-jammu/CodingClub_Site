var glimg=document.getElementsByClassName("galimg");
var content=document.getElementsByClassName("content");
function w5(index){
    for(var i=0;i<glimg.length;i++){
        if(i!=index)
        {
         glimg[i].style.width="5%";
         content[i].style.top="-30%";
        }
        else 
        { glimg[i].style.width="80%";
         content[i].style.top="15%";}
    }}
