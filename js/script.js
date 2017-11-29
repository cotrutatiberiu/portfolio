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

function moveLeft(callback) {
    var moveElemLeft = setInterval(plus, 10);
    function plus() {
        right = 0;
        if (right == 300) {
            clearInterval(moveElemLeft);
        } else {
            right++;
            homeE.style.right = right + "px";
        }
    }
    callback();
}

moveLeft(moveRight);
