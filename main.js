import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import boardGame from "./src/objects/BoardGame"
import playerGame from "./src/components/PlayerGame"

const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${playerGame("Player1")}
    ${playerGame("Player2")}
    ${boardGame(16)}
    `
)