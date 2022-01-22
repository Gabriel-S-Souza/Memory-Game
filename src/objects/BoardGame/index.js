import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

function boardGame() {
    const $htmlContentBoardGame = cardFrontBack()
    return `
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
        ` 
}

export default boardGame