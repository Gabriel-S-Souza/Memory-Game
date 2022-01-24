import "./style.css"

function modalOpitionsBoard() {
    return /*html*/`
        <div class="modal-container active">
            <div class="modal">
                <button class="button-options-players" id="one" onclick="handleClick.setMode(event)">
                    <i class="bi bi-person-fill"></i>
                    1 Player
                </button>
                <button class="button-options-players" id="two" onclick="handleClick.setMode(event)">
                    <i class="bi bi-people-fill"></i>
                    2 Players
                </button>
            </div>
        <div>
    `
}

export default modalOpitionsBoard