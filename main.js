import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import scoreBoard from "./src/objects/ScoreBoard"
import boardGame from "./src/objects/BoardGame"
import modalOpitionsBoard from "./src/components/ModalOptionsBoard"
import audioGame from "./src/components/AudioGame"
import modalWinner from "./src/components/ModalWinner"

const $root = document.querySelector("#root")
let player1 = {score: 0, html: ""}
let player2 = {score: 0, html: ""}
let playerActive
let cardActive
let turn = 1
let mode

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${scoreBoard()}
    ${boardGame(8)}
    ${audioGame()}
    ${modalOpitionsBoard()}
    `
)
$root.insertAdjacentHTML(
    "beforeend",
    `
    ${modalWinner()}
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
window.cardFrontBack.handleClickCards = (event) => {
    let thisCard = event.target.closest(".card-front-back")
    thisCard.className = "card-front-back active"
    thisCard.setAttribute("onclick", "")
    if(turn == 2) {
        selector(".card-front-back", "all").forEach(card => {
            card.setAttribute("onclick", "")
        })
        if(thisCard.id == cardActive.id) {
            turn = 1
            selector(".card-front-back.disabled", "all").forEach(card => {
                card.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
            })
            setTimeout(function() {
                mode == "one" ? HandleSinglePlayer(true) : handleMultiPlayer()
            }, 400)
        } else {
            setTimeout(function() {
                cardActive.className = "card-front-back disabled"
                thisCard.className = "card-front-back disabled"
                turn = 1
                thisCard.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
                cardActive.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
                selector(".card-front-back.disabled", "all").forEach(card => {
                    card.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
                })
            }, 950)
        }
    } else {
        cardActive = thisCard
        turn += 1
    }
}

const selector = (seletor, all = "") => {
    if(all != "all") return document.querySelector(`${seletor}`)
    else return document.querySelectorAll(`${seletor}`)
}

window.handleClick = {}
window.handleClick.setMode = (event) => {
    const $origin = event.target.closest('.button-options-players')
    mode = $origin.id
    selector(".modal-container").className = ("modal-container active removed")
    setTimeout(()=>{
        selector(".modal-container").className = ("modal-container")
        if(mode == "one") {
            selector(".wrapper-player.one").classList.add("select")
        } else if(mode == "two") {
            selector(".wrapper-player.two").style.display = "flex"
            selector("header span").style.display = "inline"
            let playerDraw  = Math.round(Math.random())
            selector(`.wrapper-player.${playerDraw == 0 ? "one" : "two"}`).classList.add("select")
        }
     }, 600)
}

function HandleSinglePlayer(boolean) {
    if(boolean == true) {
        selector(`#score${player1.score += 1}`).classList.add("active")
        selector("#positive-audio-notification").play()
        if(player1.score == 8) {
            console.log("score igual a 8")
            selector(".modal-winner-container").classList.add("active")
            selector("#win-audio").play()
            setTimeout(()=>{
                selector(".modal-winner-container").classList.remove("active")
            }, 2600)
        }
    }
}

function handleMultiPlayer(boolean) {

}