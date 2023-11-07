// alert("js linked successfully!");

// $(document).on("click", function(){
//     alert("Jquery linked !");
// })

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = []

var userClickedPattern = []

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(1000).fadeIn(1000);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

nextSequence();

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
    
    console.log(userChosenColor);
    console.log(userClickedPattern);
})







// console.log(gamePattern);

// animate({opacity:0.2}, function(){
//     $("#" + nextSequence()).animate({opacity:1});
// });


