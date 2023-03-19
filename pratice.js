let Cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let clickdone = false
let message = ""
let displayMessage = document.getElementById("para")
let displaySum = document.querySelector("#total")
let displayCard = document.getElementById("card")

let player = document.getElementById("Chips")
let newplayer = document.getElementById("chip2")
let chips = {DataType:"Player Name" ,Name: "Aadarsh", Amount: "500"}
player.textContent = chips.DataType + " : " + chips.Name 
newplayer.textContent = " Chips he have : $" + chips.Amount
let chipsamount = Number(chips.Amount)
function amount(){
    if (chipsamount> 0){
        chipsamount = chipsamount - 500
        player.textContent = chips.DataType + " : " + chips.Name 
        newplayer.textContent = " Chips he have : $" + chipsamount
    }
    else if (chipsamount === 0){
        displayMessage.textContent = "Game Over Buy New Chips to play Game"
        isAlive = false
    }
}
function buyChips(){
    if (chipsamount === 0 || chipsamount > 0){
        chipsamount = chipsamount + 500
        player.textContent = chips.DataType + " : " + chips.Name 
        newplayer.textContent = " Chips he have : $" + chipsamount
        isAlive = true
        clickdone = false
    }
}


function getRandomCards(){
    let a = (Math.random() * 13) + 1
    let b = Math.floor(a) 
    if (b === 1){
        return b = 11
    }
    else if (b > 11){
        return b = 10
    }
    else{
    return b
    }
}

function startGame(){
    if(clickdone === false){
    isAlive = true
    clickdone = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    Cards = [firstCard, secondCard]
    sum  = firstCard + secondCard
    amount()
    renderGame()
    }
}

function renderGame(){
    if (isAlive === true){
    displaySum.textContent = "Sum: " + sum
    displayCard.textContent = "Cards: " + Cards[0]+ " , " + Cards[1]
    for (let i = 2; i<Cards.length; i++){
        displayCard.textContent += " , " + Cards[i]
    }
    if (sum < 21){
        message = "Do you want to draw new card? than Click on New Card button"
        displayMessage.textContent = message
        isAlive = true
        clickdone = true
        hasBlackJack = false
    }
    else if(sum === 21){
        message = "Player got Blackjack..!! congratulation You Earned 5000$"
        hasBlackJack = true
        clickdone = true
        displayMessage.textContent = message
        chipsamount = chipsamount + 5000
        player.textContent = chips.DataType + " : " + chips.Name 
        newplayer.textContent = " Chips he have : $" + chipsamount
    }
    else if(sum > 21){
        message = "You are out of the game, Want to Play again than press New Game Button"
        isAlive = false
        clickdone = true
        displayMessage.textContent = message
    }
}
}
function newGame(){
    if (isAlive===false && clickdone === true || hasBlackJack === true){
        clickdone = false
        displayMessage.textContent = "Do you want to play New Round? then click on start the game"
        displaySum.textContent = "Sum: "
        displayCard.textContent = "Cards: "
    }
}


function newCard(){
    if (isAlive===true && hasBlackJack === false){
    let card = getRandomCards()
    sum += card
    Cards.push(card)
    renderGame()
    }
}


