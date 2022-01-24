import "./src/styles/settings/colors.css"
import "./src/styles/generic/generic.css"
import "./src/styles/elements/base.css"
import scoreBoard from "./src/objects/ScoreBoard"
import boardGame from "./src/objects/BoardGame"
import cardGame from "./src/components/CardGame"
import modalOpitionsBoard from "./src/components/ModalOptionsBoard"

const $root = document.querySelector("#root")
let player1 = {}
let player2 = {}
let cardActive
let turn = 1
let mode

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${scoreBoard()}
    ${boardGame(8)}
    ${modalOpitionsBoard()}
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
                card.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
            })
        } else { 
            setTimeout(function() {
                cardActive.className = "card-front-back disabled"
                thisCard.className = "card-front-back disabled"
                playerActive(false)
                turn = 1
                thisCard.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
                cardActive.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
                selector(".card-front-back.disabled", "all").forEach(card => {
                    console.log("iterei para COLOCAR o onclick")
                    card.setAttribute("onclick", "cardFrontBack.handleClickCards(event)")
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

window.handleClick = {}
window.handleClick.setMode = (event) => {
    const $origin = event.target.closest('.button-options-players')
    mode = $origin.id
    
    selector(".modal-container").className = ("modal-container active removed")
    setTimeout(()=>{
        selector(".modal-container").className = ("modal-container")
        if(mode == "one") {
            
        } else {
            selector(".wrapper-player.two").style.display = "flex";
            selector("header span").style.display = "inline";
        }
     }, 600)
}