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
let cards = document.querySelectorAll(".card-front-back")

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
        $root.insertAdjacentHTML(
            "beforeend",
            `
            ${modalBoard()}
            `
        )
    }, 150)
}

initialization()

window.cardFrontBack = {}
window.cardFrontBack.handleClick = (event) => {
    let thisCard = event.target.closest(".card-front-back")
    thisCard.className = "card-front-back active"
    thisCard.setAttribute("onclick", "")
    console.log(turn)
    if(turn == 2) {
        selector(".card-front-back", "all").forEach(card => {
            console.log("iterei para retirar o onclick")
            card.setAttribute("onclick", "")
        })
        if(thisCard.id == cardActive.id) {
            playerActive(true)
            turn = 1
            selector(".card-front-back.disabled", "all").forEach(card => {
                console.log("iterei para COLOCAR o onclick")
                card.setAttribute("onclick", "cardFrontBack.handleClick(event)")
            })
        } else { 
            setTimeout(function() {
                cardActive.className = "card-front-back disabled"
                thisCard.className = "card-front-back disabled"
                playerActive(false)
                turn = 1
                thisCard.setAttribute("onclick", "cardFrontBack.handleClick(event)")
                cardActive.setAttribute("onclick", "cardFrontBack.handleClick(event)")
                selector(".card-front-back.disabled", "all").forEach(card => {
                    console.log("iterei para COLOCAR o onclick")
                    card.setAttribute("onclick", "cardFrontBack.handleClick(event)")
                })
            }, 950)
        }
    } else {
        cardActive = thisCard
        turn += 1
    }
}

function playerActive(bolean) {

}

const selector = (seletor, all = "") => {
    if(all != "all") return document.querySelector(`${seletor}`)
    else return document.querySelectorAll(`${seletor}`)
}

