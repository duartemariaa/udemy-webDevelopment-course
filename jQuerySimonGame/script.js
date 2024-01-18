let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

$(document).keypress(function(){
    if(!started){
        $(".title").text("Level " + level)
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {nextSequence()}, 1000);
        }
    }else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(()=> {$("body").removeClass("game-over")}, 200);

        $(".title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    $(".title").text("Level " + level);

    userClickedPattern = [];
}

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {$("#" + currentColour).removeClass("pressed")}, 100)
}





