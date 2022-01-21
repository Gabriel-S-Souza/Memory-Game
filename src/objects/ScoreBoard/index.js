import "./style.css"
import playerGame from "../../components/PlayerGame"

function scoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${playerGame("Player1")}
            ${playerGame("Player2")}
        </header>
    `
}

export default scoreBoard