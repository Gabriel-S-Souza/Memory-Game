import "./style.css"
import cardGame from "../CardGame"

window.cardFrontBack = {}
window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target.closest(".card-front-back").classList.toggle("active")
    console.log($origin)
}

function cardFrontBack() {
    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${cardGame("")}
            </div>
            <div class="card -back">
                ${cardGame("java")}
            </div>
        </article>
    `
}

export default cardFrontBack