import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import scoreBoard from "./src/objects/ScoreBoard"
import boardGame from "./src/objects/BoardGame"

const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${scoreBoard()}
    ${boardGame()}
    `
)