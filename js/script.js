var homeE = document.getElementById("homeElem");
var right = 300;
var left=0;
function moveRight() {
    var moveElemRight = setInterval(minus, 10);
    function minus() {
        if (right == 0) {
            clearInterval(moveElemRight);
            setInterval(function(){
                left++;
                homeE.style.right=left+"px";
            },10)
        } else {
            right--;
            homeE.style.right = right + "px";
        }
    }
}

moveRight();