import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import cardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")

const $htmlCardGame = cardGame()

$root.insertAdjacentHTML("beforeend", $htmlCardGame)