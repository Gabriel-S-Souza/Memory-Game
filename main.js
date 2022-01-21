import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import boardGame from "./src/objects/BoardGame"


const $root = document.querySelector("#root")
const $htmlBoardGame = boardGame(16)


$root.insertAdjacentHTML("beforeend", $htmlBoardGame)