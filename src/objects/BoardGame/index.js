import cardGame from "../../components/CardGame"

function boardGame(cards) {
    const $htmlBoardGame = cardGame().repeat(cards)
    return $htmlBoardGame
}

export default boardGame