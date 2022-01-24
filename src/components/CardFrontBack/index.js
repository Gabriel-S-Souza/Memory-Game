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

let id = 0

function cardFrontBack() {
    let $htmlCardsFrontBack = /*html*/`
        <article id=${id} class="card-front-back disabled" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${cardGame("")}
            </div>
            <div class="card -back">
                ${cardGame(getIconNames())}
            </div>
        </article>
    `
    id++
    return $htmlCardsFrontBack
}

export default cardFrontBack