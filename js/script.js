var homeE = document.getElementById("homeElem");
var time = 1;
var caze = false;
var right = 300;
function moveRight() {
    var moveElemRight = setInterval(minus, 10);
    function minus() {
        if (right == 0) {
            clearInterval(moveElemRight);
        } else {
            right--;
            homeE.style.right = right + "px";
        }
    }



}

moveRight();
