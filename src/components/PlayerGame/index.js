import "./style.css"

let classNamePlayer = "one"

function playerGame(player) {
    const $htmlPlayer = /*html*/`
    <div class="wrapper-player ${classNamePlayer}">
        <article id="wrapper-player-and-victories">
            <h1 class="player-name">${player}</h1>
            <div>
                <p id="wins-number"></p>
                <i class="bi bi-trophy"></i>
            <div>
        </article>
        <div class="wrapper-score">
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}1" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}2" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}3" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}4" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}5" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}6" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}7" class="score"></div>
            <div id="score-${classNamePlayer == "one" ? "one" : "two"}8" class="score"></div>
        </div>
    </div>
    `
    classNamePlayer == "one" ? classNamePlayer = "two" : classNamePlayer == "one"
    return $htmlPlayer
}

export default playerGame