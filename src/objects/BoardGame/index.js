import "./style.css"
import cardGame from "../../components/CardGame"

function boardGame(cards) {
    const $htmlContentBoardGame = cardGame().repeat(cards)
    return `
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
        ` 
}

export default boardGame