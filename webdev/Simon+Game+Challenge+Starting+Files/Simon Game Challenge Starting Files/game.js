var gamePattern=[];
var userClickedPattern=[];
var buttonColours =["red","blue","green","yellow"];
var level =0;

$(".btn").click(handler);
function handler(){
    var userChosenColour = $(this).attr("id");
    // alert(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log("user"+userClickedPattern);
   
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
}


function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour =buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("game"+gamePattern);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   level=level+1;
   $("#level-title").html("level "+ level);
   
}
  

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("sucess");
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}



else{
    console.log("wrong");
    wrong();
    startOver(); 
}

}
function wrong(){
    $("body").addClass('game-over');
    $("h1").html("Game Over, Press Any Key to Restart");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function(){
        $("body").removeClass('game-over');
    },200);
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
},100);
}
document.addEventListener("keypress",function(event){
    if(level===0){
    nextSequence();
    }

});
function startOver(){ 
    gamePattern=[];
    userClickedPattern=[];
    level = 0;
}



