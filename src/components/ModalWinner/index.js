import "./style.css"

function modalWinner() {
    return /*html*/`
        <div class="modal-winner-container">
            <div class="modal-winner">
                <img id="trophy-icon" src="/src/icons/trophy.svg" alt="">
                <h1 id="title-modal-winner">Você venceu!<i class="bi bi-emoji-laughing-fill"></i></h1>
            </div>
        <div>
    `
}

export default modalWinner