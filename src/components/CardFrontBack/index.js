import "./style.css"
import cardGame from "../CardGame"

let icons = [
    "angular", "c", "css", "dart", "flutter", "github", "html",
    "java", "javascript", "kotlin", "node", "php", "python", "react-native",
    "react", "sql", "swift", "typescript", "vue"
]

function getIconNames() {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.random() * (max - min) + min;
        }
        let index = Math.round(getRandomIntInclusive(0, 1) * icons.length)
        let currentIcon = icons[index]
        if(currentIcon == undefined) {
            return getIconNames()
        } else {
            icons.splice(index, 1)
            return currentIcon
        }
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