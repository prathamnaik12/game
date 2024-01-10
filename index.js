
let num = "0"
let suits = "N"
let sum = 0

let compsum = 0

var userPoint = document.getElementById("usr-point")
var compPoint = document.getElementById("comp-point")

var standbtn =document.getElementById("stand-btn")
var restartbtn = document.getElementById("restart-btn")
var drawbtn = document.getElementById("draw-btn")


var Card1 = document.getElementById("Card1")
var Card2 = document.getElementById("Card2")
var Card3 = document.getElementById("Card3")
var compCard1 = document.getElementById("comp-Card1")
var compCard2 = document.getElementById("comp-Card2")

var aceChoiceOverlay = document.getElementById('aceChoiceOverlay');

var winmsg = document.getElementById("message")

var cardsPackH1 = document.querySelector('.cards-pack h1');

standbtn.style.display ="none"
restartbtn.style.display = "none"
Card1.style.display = "none"
Card2.style.display ="none"
Card3.style.display ="none"
compCard1.style.display = "none"
compCard2.style.display ="none"



function check() {
    if (sum === 21) {
        winmsg.innerText = "Wohhooo! You got a black jack";
    } else if (sum < 21) {
        if (compsum === 21) {
            winmsg.innerText = "Oops! Computer got a black jack. You lose!";
        } else if (compsum < 21) {
            if (21 - sum > 21 - compsum) {
                winmsg.innerText = "You're out of the game! Computer wins.";
            } else if (21 - sum < 21 - compsum) {
                winmsg.innerText = "Congratulations! You win!";
            } else {
                winmsg.innerText = "Hehehe! It's a tie";
            }
        } else {
            winmsg.innerText = "Oops! Computer is also out of the game. You win!";
        }
    } else {
        winmsg.innerText = "You're out of the game!";
    }
}


function Drawtwo(){
    restartbtn.style.display = "block"
    draw2()
    var startButton = document.getElementById("Start");
    var drawButton = document.getElementById("draw-btn");
    startButton.style.display = "none";
    drawButton.style.display = "block";
    standbtn.style.display = "block"
    compCard1.style.display = "block"
    compCard2.style.display = "block"
}

function selectAceValue(value) {
    sum += value;
    document.getElementById('aceChoiceOverlay').style.display = 'none';
}

function Points(value){
    switch (value) {
        case "1":
            selectAceValue(value)
            document.getElementById('aceChoiceOverlay').style.display = 'block';
            break;
        case "2":
            sum += 2;
            break;
        case "3":
            sum += 3;
            break;
        case "4":
            sum += 4;
            break;
        case "5":
            sum += 5;
            break;
        case "6":
            sum += 6;
            break;
        case "7":
            sum += 7;
            break;
        case "8":
            sum += 8;
            break;
        case "9":
            sum += 9;
            break;
        case "10":
        case "j":
        case "q":
        case "k":
            sum += 10;
            break;
    }
    return sum;
}

function DrawOneCard(){
    draw1()
    var drawButton = document.getElementById("draw-btn");
    drawButton.style.display = "none"
}

function Stand(){
    let comp1 = getRandomNum() + getRandomLetter()

    let comp2 = getRandomNum() + getRandomLetter()

    compCard1.cid = comp1
    compCard2.cid =comp2
    firstCardIsAce()
    CompPoints(comp1[0],firstCardIsAce())
    CompPoints(comp2[0],firstCardIsAce())
    compPoint.innerText = compsum
    check()
    cardsPackH1.classList.add('pop');
    standbtn.style.display = "none"
    drawbtn.style.display = "none"
}

function restart(){
    var startbutton = document.getElementById("Start");
    var drawButton = document.getElementById("draw-btn");
    startbutton.style.display = "Block"
    drawButton.style.display = "none";
    Card1.style.display = "none"
    Card2.style.display ="none"
    Card3.style.display = "none"
    compCard1.style.display = "none"
    compCard2.style.display ="none"
    restartbtn.style.display = "none"
    standbtn.style.display ="none"
    userPoint.innerText = "0"
    compPoint.innerText = "0"
    compCard1.cid = "00"
    compCard2.cid ="00"
    cardsPackH1.classList.remove('pop');
    winmsg.innerText = "TRY YOUR LUCK HARD"
    sum = 0
    compsum =0
}


function getRandomNum(){
    const array = ["1","2","3","4","5","6","7","8","9","10","j","q","k"]
    const randomIndex = Math.floor(Math.random()* array.length)
    num = array[randomIndex]
    return num
}

function getRandomLetter(){
    const array = ["D","C","S","H"]
    const randomIndex =Math.floor(Math.random()* array.length)
    suits = array[randomIndex]
    return suits
}


function draw2(){
    let rndm1 = getRandomNum() + getRandomLetter()
    Card1.cid = rndm1
    Card1.style.display = "block"
    Points(rndm1[0]);
    let rndm2 = getRandomNum() + getRandomLetter()
    Card2.cid = rndm2
    Card2.style.display ="block"
    Points(rndm2[0]);
    userPoint.innerText = sum;  
}

function draw1(){
    let rndm3 = getRandomNum() + getRandomLetter()
    Card3.cid = rndm3
    Card3.style.display = "block"
    Points(rndm3[0]);
    userPoint.innerText = sum;
}


function CompPoints(value, isFirstCardAce) {
    if (isFirstCardAce) {
        if (compCard2.cid[0] === "1") {
            compsum = 22;
        } else {
            compsum = Points(compCard2.cid[0], true);
        }
    } else {
        switch (value) {
            case "1":
                if (compsum + 11 <= 21) {
                    compsum += 11;
                } else {
                    compsum += 1;
                }
                break;
            case "2":
                compsum += 2;
                break;
            case "3":
                compsum += 3;
                break;
            case "4":
                compsum += 4;
                break;
            case "5":
                compsum += 5;
                break;
            case "6":
                compsum += 6;
                break;
            case "7":
                compsum += 7;
                break;
            case "8":
                compsum += 8;
                break;
            case "9":
                compsum += 9;
                break;
            case "10":
            case "j":
            case "q":
            case "k":
                compsum += 10;
                break;
        }
    }
    return compsum;
}



function firstCardIsAce() {
    if (compCard1.cid[0] === "1") {
        if (compCard2.cid[0] === "1") {
            return 22;
        }
        return Points(compCard2.cid[0], true);
    }
    return false;
}






// imorted from github 
// for use of cardmeister.github.io read github link's readme.md file --> https://github.com/cardmeister/cardmeister.github.io/blob/master/README.md
