import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import scoreBoard from "./src/objects/ScoreBoard"
import boardGame from "./src/objects/BoardGame"
import cardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")
let player1 = {}
let player2 = {}
let cardActive
let turn = 1

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${scoreBoard()}
    ${boardGame(8)}
    `
)

function initialization() {
    setTimeout(function() {
        player1.html = selector('.wrapper-player.one')
        player2.html = selector('.wrapper-player.two')

    }, 150)
}

initialization()

window.cardFrontBack = {}
window.cardFrontBack.handleClick = (event) => {
    let thisCard = event.target.closest(".card-front-back")
    thisCard.classList.add("active")
    if(turn == 2) {
        if(thisCard.id == cardActive.id) {
            playerActive(true)
            turn = 1
            thisCard.setAttribute("onclick", "")
            cardActive.setAttribute("onclick", "")
        } else {
            setTimeout(function() {
                cardActive.classList.remove("active")
                thisCard.classList.remove("active")
                playerActive(false)
                turn = 1
            }, 950)
        }
    } else {
        cardActive = thisCard
        turn += 1
    }
}

function playerActive(bolean) {
    console.log("funcionou")
}

const selector = (seletor) => {
    return document.querySelector(`${seletor}`)
}

