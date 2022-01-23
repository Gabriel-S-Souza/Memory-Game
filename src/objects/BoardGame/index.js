import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

function shufflesCards(contentCards, number) {
    let newContentCards = contentCards
    let contentCardsShuffled = []
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.random() * (max - min) + min
    }

    for (var i = 0; i < number * 2; i++) {
        let index = [getRandomIntInclusive(0, newContentCards.length).toFixed()]
        let randomCard = newContentCards[index]
        if(randomCard != undefined) {
            contentCardsShuffled.push(randomCard)
            newContentCards.splice(index, 1)
        } else {
            i = i - 1
        }
        console.log(randomCard)
    }
    return contentCardsShuffled.join('')
}

let count = 0
let $htmlContentBoardGame = []
function boardGame(number) {
    if(count < number) {
        let currentCard = cardFrontBack()
        $htmlContentBoardGame.push(currentCard)
        $htmlContentBoardGame.push(currentCard)
        count++
        return boardGame(number)
    } else {
        
        let $boardGameShuffled = shufflesCards($htmlContentBoardGame, number)
        return '<section class="board-game">' + $boardGameShuffled + "</section>"
    }
}

export default boardGame