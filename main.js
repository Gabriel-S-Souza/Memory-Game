import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import scoreBoard from "./src/objects/ScoreBoard"
import boardGame from "./src/objects/BoardGame"
import modalOpitionsBoard from "./src/components/ModalOptionsBoard"
import audioGame from "./src/components/AudioGame"
import modalWinner from "./src/components/ModalWinner"

const $root = document.querySelector("#root")
let player1 = {score: 0, html: "", suffix: "one", name: "Player1", victories: 0}
let player2 = {score: 0, html: "", suffix: "two", name: "Player2", victories: 0}
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
                mode == "one" ? HandleSinglePlayer() : handleMultiPlayer()
            }, 280)
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
                if( mode == "two") {
                    let lastPlayer = playerActive
                    lastPlayer == player1 ? playerActive = player2 : playerActive = player1
                    selector(`.wrapper-player.${playerActive.suffix}`).classList.add("select")
                    selector(`.wrapper-player.${lastPlayer.suffix}`).classList.remove("select")
                }
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
            playerDraw == 0 ? playerActive = player1 : playerActive = player2
        }
     }, 600)
}

function HandleSinglePlayer() {
    selector(`#score-one${player1.score += 1}`).classList.add("active")
    selector("#positive-audio-notification").play()
    if(player1.score == 8) {
        selector(".modal-winner-container").classList.add("active")
        selector("#win-audio").play()
        setTimeout(()=>{
            selector(".modal-winner-container").classList.remove("active")
            player1.victories += 1
            selector(".wins-number").textContent = `${player1.victories}`
            player1.score = 0
            restart()
        }, 2500)
    }
}

function handleMultiPlayer() {
    selector(`#score-${playerActive.suffix}${playerActive.score += 1}`).classList.add("active")
    selector("#positive-audio-notification").play()
    if(player1.score + player2.score == 8) {
        let playerWinner
        if(player1.score > player2.score) playerWinner = player1
        else if(player1.score < player2.score) playerWinner = player2
        selector("#title-modal-winner").textContent = `${playerWinner != undefined ? playerWinner.name : "Empatou"} ${playerWinner != undefined ? "venceu!" : ""}`
        selector(".modal-winner-container").classList.add("active")
        selector("#win-audio").play()
        setTimeout(()=>{
            selector(".modal-winner-container").classList.remove("active")
            if(playerWinner != undefined) {
                playerWinner.victories += 1
                selector(`.wins-number.${playerWinner.suffix}`).textContent = `${playerWinner.victories}`
            }
            player1.score = 0
            player2.score = 0
            playerActive == player1 ? playerActive = player2 : playerActive = player1
            selector(`.wrapper-player.${playerActive == player1 ? "two" : "one"}`).classList.add("select")
            selector(`.wrapper-player.${playerActive == player1 ? "one" : "two"}`).classList.remove("select")
            restart()
        }, 2500)
    }
}

function restart() {
    for (let i = 8; i > 0; i--) {
        selector(`#score-one${i}`).classList.remove("active")
    }
    const cards = selector(".card-front-back", "all")
    for (let i = 0; i < cards.length; i++) {
        (function(i) {
            setTimeout(()=>{
                cards[i].className = "card-front-back disabled"
            }, 20*i)
        }) (i)
        setTimeout(()=>{
            insertBoard()
            cards[i].setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
        }, 700)
    }
    if(mode == "two") {
        for (let i = 8; i > 0; i--) {
            selector(`#score-two${i}`).classList.remove("active")
        }
    }
}

function insertBoard() {
    let oldBoardGame = selector(".board-game")
    oldBoardGame.remove()
    selector(".score-board").insertAdjacentHTML(
        "afterend", `${(boardGame(8))}`
    )
}

window.insertBoard = insertBoard