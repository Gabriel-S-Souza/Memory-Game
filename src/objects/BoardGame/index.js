import "./style.css"
import cardGame from "../../components/CardGame"

function boardGame(cardNumber) {
    const $htmlContentBoardGame = cardGame().repeat(cardNumber)
    return `
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
        ` 
}

export default boardGame