import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

function shufflesCards(contentCards) {
    let newContentCards = contentCards
    let contentCardsShuffled = []
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.random() * (max - min) + min
    }

    for (let index = 0; index < contentCards.length; index++) {
        let randomCard = newContentCards[getRandomIntInclusive(0, newContentCards.length).toFixed()]
        randomCard != undefined ? contentCardsShuffled.push(randomCard) : index - 1
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
        console.log(count, currentCard)
        count++
        return boardGame(number)
    } else {
        let $boardGameShuffled = shufflesCards($htmlContentBoardGame)
        return '<section class="board-game">' + $boardGameShuffled + "</section>"
    }
}

export default boardGame