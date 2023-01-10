// Description: Add listener to button, so I know when it's clicked
// we don't need parentheses after the function name,
// because we want to be triggered ONLY by the event (when the 'click' happens), not ass soon the script read this line
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("Clicked!");
// }

// // or rewrite as an anonymous function
// document.querySelector("button").addEventListener("click", function () {
//   alert("Clicked!");
// });

// Detecting button press
// Add listener to all buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    PlayDrum(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
// Listen to the whole document
document.addEventListener("keydown", function (event) {
  var buttonInnerHTML = event.key;
  PlayDrum(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});

function PlayDrum(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      // if something goes wrong
      console.log(buttonInnerHTML);
      break;
  }
}

// add animation
function buttonAnimation(currentButton) {
  var activeButton = document.querySelector("." + currentButton);
  // add class
  activeButton.classList.toggle("pressed");
  // delay 1 sec and remove class
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}
