var homeE = document.getElementById("homeElem");
var time = 1;
var caze=1;


function move(){
    var moveElemRight=setInterval(minus,10);
    var right = 300;
    var value=false;
    function minus(){
        if(right==0){
            clearInterval(moveElem);
            return value=true;
        }else{
            right--;
            homeE.style.right=right +"px";
        }
    }
    if(value==true){
        var moveElemLeft=setInterval(function(){
            if(right==300){
                clearInterval(moveElemLeft);
            }else{
                right++;
                homeE.style.right=right+"px";
            }
        },10);
    }
}

switch(caze){
    case 1:
    
}