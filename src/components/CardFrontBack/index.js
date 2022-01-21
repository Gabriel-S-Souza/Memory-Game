import cardGame from "../CardGame";

function cardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${cardGame()}
            ${cardGame()}
        </article>
    `
}

export default cardFrontBack