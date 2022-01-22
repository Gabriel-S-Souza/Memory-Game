import cardGame from "../CardGame";

function cardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${cardGame("javascript")}
            ${cardGame("java")}
            ${cardGame("kotlin")}
            ${cardGame("github")}
            ${cardGame("python")}
            ${cardGame("sql")}
            ${cardGame("css")}
            ${cardGame("php")}
        </article>
    `
}

export default cardFrontBack