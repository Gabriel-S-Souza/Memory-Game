import "./style.css"

let classNamePlayer = "one"

function playerGame(player) {
    const $htmlPlayer = /*html*/`
    <div class="wrapper-player ${classNamePlayer}">
        <p class="player-name">${player}</p>
        <div class="wrapper-score">
            <div id="score-one" class="score"></div>
            <div id="score-two" class="score"></div>
            <div id="score-three" class="score"></div>
        </div>
    </div>
    `
    classNamePlayer == "one" ? classNamePlayer = "two" : classNamePlayer == "one"
    return $htmlPlayer
}

export default playerGame