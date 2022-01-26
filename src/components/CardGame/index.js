import "./style.css"

let countIcons = 0

function cardGame(icon, alt = "interrogação") {
    let content = icon > "" ? `<img src="/src/images/${icon}.svg" alt="">` : getQuestionIcon()
    let backOfCard = /*html*/`
        <article class="card-game ${icon > "" ? "icon" : ""} " alt="${alt}">
            ${content}
        </article>`
    return backOfCard
}

const getQuestionIcon = () => /*html*/`
    <i class="bi bi-code-slash"></i>
`

export default cardGame