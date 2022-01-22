import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

function boardGame(number) {
    const $htmlContentBoardGame = cardFrontBack().repeat(number)
    return `
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
        ` 
}

export default boardGame