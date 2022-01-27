import "./style.css"

class Modal {
    selector = (seletor, all = "") => {
        if(all != "all") return document.querySelector(`${seletor}`)
        else return document.querySelectorAll(`${seletor}`)
    }

    build(title) {
        return /*html*/`
            <div class="modal-winner-container">
                <div class="modal-winner">
                    <img id="trophy-icon" src="/src/icons/trophy.svg" alt="">
                    <h1 id="title-modal-winner">${title}<i class="bi bi-emoji-laughing-fill"></i></h1>
                </div>
            <div>
        `
    }

    changeTitle(title) {
        this.selector("#title-modal-winner").textContent = title
    }

    changeIcon(iconSrc) {
        this.selector(".modal-winner #trophy-icon").setAttribute("src", iconSrc)
    }

    changeTextColor(color) {
        this.selector("#title-modal-winner").style = "color: "+color+";"
    }

    active() {
        this.selector('.modal-winner-container').classList.add('active')
        setTimeout(() => this.disable(), 2500)
    }

    disable() {
        this.selector('.modal-winner-container').classList.remove('active')
    }
}

export default Modal