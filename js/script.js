var homeE = document.getElementById("homeElem");
var aboutE=document.getElementById("aboutElem");
var workE=document.getElementById("workElem");
var contactE=document.getElementById("contactElem");
var right = 200;
var left = 0;
var define=20;
function moveHome() {
  var moveElemRight = setInterval(minus, 1);
  function minus() {
    if (right == -20) {
      clearInterval(moveElemRight);
      var moveElemLeft = setInterval(function() {
        if (left == 20) {
          clearInterval(moveElemLeft);
          var defineElem=setInterval(function(){
            if(define==0){
                clearInterval(defineElem);
            }else{
                define--;
                homeE.style.right=define+"px";
            }
          },10)
        } else {
          left++;
          homeE.style.right = left + "px";
        }
      }, 10);
    } else {
      right--;
      homeE.style.right = right + "px";
    }
  }
}

function fadeIn(element,speed){
    var fadeInElem=setInterval(function(){
        if(element.style.opacity==1){
            clearInterval(fadeInElem);
        }else{
        element.style.opacity=Number(element.style.opacity)+0.2;
        }
    },speed)
}

function moveUpDown(element,speed,way){
    var x=parseInt(homeE.style.top,10);
    switch(way){
        case "up":
        break;
        case "down":
        var goDown=setInterval(function(){
            if(x==0){
                clearInterval(goDown);
            }else{
                x--;
                element.style.top=x +"px";
            }
        },speed)
        break;
    }
}


moveHome();
fadeIn(homeE,100);
// moveUpDown(aboutE,1,"down");


function test(){
    var a=aboutE.style.top[2];
    console.log(a);
}
test();