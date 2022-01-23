import "./style.css"
import cardFrontBack from "../../components/CardFrontBack"

let count = 0
let $htmlContentBoardGame = '<section class="board-game">'
function boardGame(number) {
    if(count < number) {
        $htmlContentBoardGame += cardFrontBack()
        count++
        return boardGame(number)
    } else {
        return $htmlContentBoardGame + "</section>"
    }
}

export default boardGame