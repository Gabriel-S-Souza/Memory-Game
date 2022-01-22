import "./style.css"
import cardGame from "../CardGame"

function cardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
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