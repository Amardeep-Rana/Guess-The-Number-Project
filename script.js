let userInput;
let randomNo;
let totalTurn = 0;
let title = $(".title")
let checkBtn = $(".checkBtn")
let chance = $(".chances span")
function inputToVar(){
    
    userInput = document.getElementById("userInput").value;
    userInput = Math.floor(userInput);
    check(userInput,randomNo); 
    totalTurn +=1;
    chance.html(totalTurn);
}

checkBtn.on("click",btnAnimation);



function randomNumber() { 
    $(".startBtn").fadeOut();
    title.html("Guess The Number")
    randomNo = Math.floor((Math.random()*100) + 1);
    totalTurn = 0;
    document.getElementById("userInput").value = "";
}
function check(userInput,randomNo) {
    if (userInput!=randomNo && userInput<randomNo) {
        title.html("SMALLER")
        scaleDown()
        
    } else if (userInput!=randomNo && userInput>randomNo) {
        title.html("BIGGER")
        scaleDown()
    } else {
        title.html("CONGRATES"+"<br>"+"You Took "+(totalTurn +1)+" Chances")
        $(".startBtn").html("Start Again")
        $(".startBtn").fadeIn();
    }
}
$(".startBtn").on("click",randomNumber);

console.log(randomNo);


function scaleDown(){
    title.addClass("titleUp")
    setTimeout(() => {
        title.removeClass("titleUp")
    }, 100);
}

function btnAnimation(){
    checkBtn.addClass("clickBtn")
    setTimeout(() => {
        checkBtn.removeClass("clickBtn")
    }, 100);
}

$(".closebtn").on("click", function(){

    $(".closebtn").addClass("closebtnclick");
    setTimeout(() => {
        $(".closebtn").removeClass("closebtnclick");
        
    }, 100);
    $("#instruction").fadeOut();
    $(".startbtn").fadeOut();

})
$(".instruct").on("click", function(){
    $("#instruction").fadeIn();
    $(".startbtn").fadeIn();
})