import cardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")

const $htmlCardGame = cardGame() + cardGame()

$root.insertAdjacentHTML("beforeend", $htmlCardGame)