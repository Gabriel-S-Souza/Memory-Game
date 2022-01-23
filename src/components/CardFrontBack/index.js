import "./style.css"
import cardGame from "../CardGame"

function getIconNames() {
    const icons = [
        "angular", "c", "css", "dart", "flutter", "github", "html",
        "java", "javascript", "kotlin", "node", "php", "python", "react-native",
        "react", "sql", "swift", "typescript", "vue"]
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.random() * (max - min) + min;
        }
        let index = Math.round(getRandomIntInclusive(0, 1) * 19)
        return icons[index]
}

window.cardFrontBack = {}
window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target.closest(".card-front-back").classList.toggle("active")
}

function cardFrontBack() {
    let $htmlCardsFrontBack = /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${cardGame("")}
            </div>
            <div class="card -back">
                ${cardGame(getIconNames())}
            </div>
        </article>
    `
    return $htmlCardsFrontBack
}

export default cardFrontBack