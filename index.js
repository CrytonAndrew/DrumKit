
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=  0; i  < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeAnimation(buttonInnerHTML);
        playSound(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event) {
    makeAnimation(event.key);
    setplaySound(event.key);
});

function playSound(letter) {
    switch (letter) {
        case "w":
            var crack = new Audio("sounds/crash.mp3");
            crack.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2  = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        default:
            console.log(buttonInnerHTML);

    }
}

function makeAnimation(buttonKey) {

    var activeButton = document.querySelector("." + buttonKey);
    activeButton.classList.add("pressed");
    
    //After some time remove the class
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 500);
}