import "./style.css"

let classNamePlayer = "one"

function playerGame(player) {
    const $htmlPlayer = /*html*/`
    <div class="wrapper-player ${classNamePlayer}">
        <p class="player-name">${player}</p>
        <div class="wrapper-score">
            <div id="score1" class="score"></div>
            <div id="score2" class="score"></div>
            <div id="score3" class="score"></div>
            <div id="score4" class="score"></div>
            <div id="score5" class="score"></div>
            <div id="score6" class="score"></div>
            <div id="score7" class="score"></div>
            <div id="score8" class="score"></div>
        </div>
    </div>
    `
    classNamePlayer == "one" ? classNamePlayer = "two" : classNamePlayer == "one"
    return $htmlPlayer
}

export default playerGame