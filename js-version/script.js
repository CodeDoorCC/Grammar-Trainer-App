


function Card(noun, article){
    this.noun = noun;
    this.article = article;
}

var card1 = new Card("Jahr", "das")
var card2 = new Card("Beispiel", "das")
var card3 = new Card("Zeit", "die")
var card4 = new Card("Frau", "die")
var card5 = new Card("Mensch", "der")
var card6 = new Card("Kind", "das")
var card7 = new Card("Tag", "der")
var card8 = new Card("Mann", "der")
var card9 = new Card("Land", "das")
var card10 = new Card("Frage", "die")
var card11 = new Card("Haus", "das")
var card12 = new Card("Fall", "der")
var card13 = new Card("Leute", "die")
var card14 = new Card("Arbeit", "die")
var card15 = new Card("Prozent", "das")
var card16 = new Card("Stadt", "die")
var card17 = new Card("Herr", "der")
var card18 = new Card("Teil", "der")
var card19 = new Card("Problem", "das")
var card20 = new Card("Welt", "die")


var myCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20];

var cardIndex = 0;

var buttonDer = document.getElementById("buttonDer")
var buttonDie = document.getElementById("buttonDie")
var buttonDas = document.getElementById("buttonDas")

front.innerHTML = card1.noun;

// Navigation

function nextCard(){
    cardIndex = (cardIndex + 1) % myCards.length;
    front.innerHTML = myCards[cardIndex].noun;
}

function previousCard(){
    if (cardIndex > 0)
        cardIndex = (cardIndex - 1);
    else if (cardIndex == 0) cardIndex = myCards.length-1;
    front.innerHTML = myCards[cardIndex].noun;
}















// @BenRamins: there has to be an easier way to do this, but my JavaScript skills are still very low. This is what I figured out so far

// master branch code so far:

// var correctButton3 = document.getElementById("correct3")

// correctButton3.addEventListener("click", function(){
//     correctButton3.textContent = "Correct!";
//     correctButton3.style.backgroundColor = "green";
// })

// var wrongButton1 = document.getElementById("wrong1")

// wrongButton1.addEventListener("click", function(){
//     wrongButton1.textContent = "Wrong!";
//     wrongButton1.style.backgroundColor = "red";
// })

// var wrongButton2 = document.getElementById("wrong2")

// wrongButton2.addEventListener("click", function(){
//     wrongButton2.textContent = "Wrong!";
//     wrongButton2.style.backgroundColor = "red";
// })

// //

// var correctButton6 = document.getElementById("correct6")

// correctButton6.addEventListener("click", function(){
//     correctButton6.textContent = "Correct!";
//     correctButton6.style.backgroundColor = "green";
// })

// var wrongButton4 = document.getElementById("wrong4")

// wrongButton4.addEventListener("click", function(){
//     wrongButton4.textContent = "Wrong!";
//     wrongButton4.style.backgroundColor = "red";
// })

// var wrongButton5 = document.getElementById("wrong5")

// wrongButton5.addEventListener("click", function(){
//     wrongButton5.textContent = "Wrong!";
//     wrongButton5.style.backgroundColor = "red";
// })

// //

// var correctButton9 = document.getElementById("correct9")

// correctButton9.addEventListener("click", function(){
//     correctButton9.textContent = "Correct!";
//     correctButton9.style.backgroundColor = "green";
// })

// var wrongButton7 = document.getElementById("wrong7")

// wrongButton7.addEventListener("click", function(){
//     wrongButton7.textContent = "Wrong!";
//     wrongButton7.style.backgroundColor = "red";
// })

// var wrongButton8 = document.getElementById("wrong8")

// wrongButton8.addEventListener("click", function(){
//     wrongButton8.textContent = "Wrong!";
//     wrongButton8.style.backgroundColor = "red";
// })

// //

// var correctButton12 = document.getElementById("correct12")

// correctButton12.addEventListener("click", function(){
//     correctButton12.textContent = "Correct!";
//     correctButton12.style.backgroundColor = "green";
// })

// var wrongButton10 = document.getElementById("wrong10")

// wrongButton10.addEventListener("click", function(){
//     wrongButton10.textContent = "Wrong!";
//     wrongButton10.style.backgroundColor = "red";
// })

// var wrongButton11 = document.getElementById("wrong11")

// wrongButton11.addEventListener("click", function(){
//     wrongButton11.textContent = "Wrong!";
//     wrongButton11.style.backgroundColor = "red";
// })

// //

// var correctButton15 = document.getElementById("correct15")

// correctButton15.addEventListener("click", function(){
//     correctButton15.textContent = "Correct!";
//     correctButton15.style.backgroundColor = "green";
// })

// var wrongButton13 = document.getElementById("wrong13")

// wrongButton13.addEventListener("click", function(){
//     wrongButton13.textContent = "Wrong!";
//     wrongButton13.style.backgroundColor = "red";
// })

// var wrongButton14 = document.getElementById("wrong14")

// wrongButton14.addEventListener("click", function(){
//     wrongButton14.textContent = "Wrong!";
//     wrongButton14.style.backgroundColor = "red";
// })

// //

// var correctButton18 = document.getElementById("correct18")

// correctButton18.addEventListener("click", function(){
//     correctButton18.textContent = "Correct!";
//     correctButton18.style.backgroundColor = "green";
// })

// var wrongButton16 = document.getElementById("wrong16")

// wrongButton16.addEventListener("click", function(){
//     wrongButton16.textContent = "Wrong!";
//     wrongButton16.style.backgroundColor = "red";
// })

// var wrongButton17 = document.getElementById("wrong17")

// wrongButton17.addEventListener("click", function(){
//     wrongButton17.textContent = "Wrong!";
//     wrongButton17.style.backgroundColor = "red";
// })

// //

// var correctButton21 = document.getElementById("correct21")

// correctButton21.addEventListener("click", function(){
//     correctButton21.textContent = "Correct!";
//     correctButton21.style.backgroundColor = "green";
// })

// var wrongButton19 = document.getElementById("wrong19")

// wrongButton19.addEventListener("click", function(){
//     wrongButton19.textContent = "Wrong!";
//     wrongButton19.style.backgroundColor = "red";
// })

// var wrongButton20 = document.getElementById("wrong20")

// wrongButton20.addEventListener("click", function(){
//     wrongButton20.textContent = "Wrong!";
//     wrongButton20.style.backgroundColor = "red";
// })

// To have all words functional in hard-coding mode, need to add all the new buttons.