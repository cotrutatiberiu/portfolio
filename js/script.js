var workE = document.getElementById("workElem");
var contactE = document.getElementById("contactElem");
var homeE = document.getElementById("homeElem");
var aboutE = document.getElementById("aboutElem");

//Move home element
function moveHome() {
  var moveRightHome = parseInt(homeE.style.right, 10);
  var moveLeftHome = 0;
  var definePositionHome = 20;

  var moveElemRight = setInterval(minus, 1);
  function minus() {
    if (moveRightHome == -20) {
      clearInterval(moveElemRight);
      var moveElemLeft = setInterval(function() {
        if (moveLeftHome == 20) {
          clearInterval(moveElemLeft);
          var definePositionHomeElem = setInterval(function() {
            if (definePositionHome == 0) {
              clearInterval(definePositionHomeElem);
            } else {
              definePositionHome--;
              homeE.style.right = definePositionHome + "px";
            }
          }, 10);
        } else {
          moveLeftHome++;
          homeE.style.right = moveLeftHome + "px";
        }
      }, 10);
    } else {
      moveRightHome--;
      homeE.style.right = moveRightHome + "px";
    }
  }
}

//Fade in element
function fadeIn(element, speed) {
  var fadeInElem = setInterval(function() {
    if (element.style.opacity == 1) {
      clearInterval(fadeInElem);
    } else {
      element.style.opacity = Number(element.style.opacity) + 0.2;
    }
  }, speed);
}

//Move up/down elements
function moveUpDown(element, speed, way) {
  var x = parseInt(element.style.top, 10);
  var y= parseInt(element.style.bottom,10)
  switch (way) {
    case "up":
      var goUp = setInterval(function() {
        if (x == 0) {
          clearInterval(goUp);
        } else {
          x--;
          element.style.top = x + "px";
        }
      }, speed);
      break;
    case "down":
      var goDown = setInterval(function() {
        if (y == 0) {
          clearInterval(goDown);
        } else {
          y--;
          element.style.bottom = y + "px";
        }
      }, speed);
      break;
  }
}

//Calls
moveHome();
fadeIn(homeE, 100);
fadeIn(aboutE, 100);
fadeIn(contactE, 100);
moveUpDown(aboutE, 1, "up");
moveUpDown(contactE,1,"down");
