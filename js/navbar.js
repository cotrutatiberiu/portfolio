var button=document.getElementById("btn-menu");
var mobilelist=document.getElementById("mobilelist");

button.addEventListener("click",togglemenu);


function togglemenu(){
    var check=mobilelist.style.display;
    if(check=="inline"){
        mobilelist.style.display="none";
    }else{
        mobilelist.style.display="inline";
    }
}