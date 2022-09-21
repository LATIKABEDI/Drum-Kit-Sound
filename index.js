var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", ClickOfButton);
}

function ClickOfButton() {
    var buttonName = this.innerHTML;
    makeSound(buttonName);
    buttonAnimation(buttonName);
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key); //this tells that which keyboard key was pressed.
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var b1 = new Audio('sounds/crash.mp3');
            b1.play();
            break;

        case "a":
            var b2 = new Audio('sounds/kick-bass.mp3');
            b2.play();
            break;

        case "s":
            var b3 = new Audio('sounds/snare.mp3');
            b3.play();
            break;

        case "d":
            var b4 = new Audio('sounds/tom-1.mp3');
            b4.play();
            break;

        case "j":
            var b5 = new Audio('sounds/tom-2.mp3');
            b5.play();
            break;

        case "k":
            var b6 = new Audio('sounds/tom-3.mp3');
            b6.play();
            break;

        case "l":
            var b7 = new Audio('sounds/tom-4.mp3');
            b7.play();
            break;
    }
}

function buttonAnimation(currentKey)
{
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 200);
}

// document.querySelector("button").addEventListener("click", handleClick);
// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();