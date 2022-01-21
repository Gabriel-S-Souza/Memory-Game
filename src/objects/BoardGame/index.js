import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

function boardGame(cardNumber) {
    const $htmlContentBoardGame = cardFrontBack().repeat(cardNumber)
    return `
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
        ` 
}

export default boardGame