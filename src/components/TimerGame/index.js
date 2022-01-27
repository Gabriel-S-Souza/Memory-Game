import "./style.css"

function timerGame() {
    return /*html*/`
    <output id="timer">
        <div class="wrapper-info-time">
            <p class="label record">record:</p>
            <p class="info-time record">00:00</p>
        </div>
        <div class="wrapper-info-time">
            <p class="label timer">tempo:</p>
            <p class="info-time time">00:00</p>
        </div>
        </output>
    `
}

export default timerGame