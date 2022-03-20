//A lógica do app vai ficar a princípio no App.js

import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";
import scoreBoard from "./src/objects/ScoreBoard";
import boardGame from "./src/objects/BoardGame";
import modalOpitionsBoard from "./src/components/ModalOptionsBoard";
import audioGame from "./src/components/AudioGame";
import timerGame from "./src/components/TimerGame";
import Modal from "./src/components/ModalWinner";

const $root = document.querySelector("#root");
const modal = new Modal();
let player1 = {
	score: 0,
	html: "",
	suffix: "one",
	name: "Player1",
	victories: 0,
};
let player2 = {
	score: 0,
	html: "",
	suffix: "two",
	name: "Player2",
	victories: 0,
};
let playerActive;
let initPlayer;
let cardActive;
let turn = 1;
let mode;

//O main está fazendo isso de jogar a aplicação em tela
$root.insertAdjacentHTML(
	"beforeend",
	`
    ${scoreBoard()}
    ${boardGame(8)}
    ${audioGame()}
    ${modalOpitionsBoard()}
    `
);
$root.insertAdjacentHTML(
	"beforeend",
	`
    ${modal.build("Você Venceu!")}
    `
);

function initialization() {
	setTimeout(function () {
		player1.html = selector(".wrapper-player.one");
		player2.html = selector(".wrapper-player.two");
	}, 150);
}

initialization();

window.cardFrontBack = {};
window.cardFrontBack.handleClickCards = (event) => {
	let thisCard = event.target.closest(".card-front-back");
	thisCard.className = "card-front-back active";
	thisCard.setAttribute("onclick", "");
	if (turn == 2) {
		selector(".card-front-back", "all").forEach((card) => {
			card.setAttribute("onclick", "");
		});
		if (thisCard.id == cardActive.id) {
			turn = 1;
			setTimeout(function () {
				selector(".card-front-back.disabled", "all").forEach((card) => {
					card.setAttribute(
						"onclick",
						"cardFrontBack.handleClickCards(event)"
					);
				});
				mode == "one" ? HandleSinglePlayer() : handleMultiPlayer();
			}, 280);
		} else {
			setTimeout(function () {
				cardActive.className = "card-front-back disabled";
				thisCard.className = "card-front-back disabled";
				turn = 1;
				thisCard.setAttribute(
					"onclick",
					"cardFrontBack.handleClickCards(event)"
				);
				cardActive.setAttribute(
					"onclick",
					"cardFrontBack.handleClickCards(event)"
				);
				selector(".card-front-back.disabled", "all").forEach((card) => {
					card.setAttribute(
						"onclick",
						"cardFrontBack.handleClickCards(event)"
					);
				});
				if (mode == "two") {
					let lastPlayer = playerActive;
					lastPlayer == player1
						? (playerActive = player2)
						: (playerActive = player1);
					selector(
						`.wrapper-player.${playerActive.suffix}`
					).classList.add("select");
					selector(
						`.wrapper-player.${lastPlayer.suffix}`
					).classList.remove("select");
				}
			}, 950);
		}
	} else {
		cardActive = thisCard;
		turn += 1;
	}
};

const selector = (seletor, all = "") => {
	if (all != "all") return document.querySelector(`${seletor}`);
	else return document.querySelectorAll(`${seletor}`);
};

window.handleClick = {};
window.handleClick.setMode = (event) => {
	const $origin = event.target.closest(".button-options-players");
	mode = $origin.id;
	selector(".modal-container").className = "modal-container active removed";
	setTimeout(() => {
		selector(".modal-container").className = "modal-container";
		if (mode == "one") {
			selector(".wrapper-player.one").classList.add("select");
			insertBoard(".wrapper-player.one", "afterend", timerGame());
			timer.init();
		} else if (mode == "two") {
			selector(".wrapper-player.two").style.display = "flex";
			selector("header span").style.display = "inline";
			let playerDraw = Math.round(Math.random());
			selector(
				`.wrapper-player.${playerDraw == 0 ? "one" : "two"}`
			).classList.add("select");
			playerDraw == 0
				? (playerActive = player1)
				: (playerActive = player2);
			initPlayer = playerActive;
		}
	}, 600);
};
class RunTimer {
	second = 0;
	handleSetInterval;
	record = 1000000;
	formatTime(seconds) {
		let minutes = parseInt(seconds / 60);
		let realSeconds = seconds % 60;
		let minutesFormated = minutes <= 9 ? "0" + minutes : minutes;
		let realSecondsFormated =
			realSeconds <= 9 ? "0" + realSeconds : realSeconds;
		return minutesFormated + ":" + realSecondsFormated;
	}

	init() {
		this.handleSetInterval = setInterval(() => {
			this.second += 1;
			selector(".info-time.time").textContent = this.formatTime(
				this.second
			);
		}, 1000);
	}
	pause() {
		clearInterval(this.handleSetInterval);
		let lastTime = this.second;
		if (lastTime <= this.record) {
			this.record = lastTime;
			//Colocar aqui um som de RECORD
		}
		selector(".info-time.record").textContent =
			this.record > 0 && this.record < 1000000
				? this.formatTime(this.record)
				: "00:00";
		selector(".info-time.time").textContent = "00:00";
		this.second = 0;
	}
}

let timer = new RunTimer();

function HandleSinglePlayer() {
	selector(`#score-one${(player1.score += 1)}`).classList.add("active");
	selector("#positive-audio-notification").play();
	if (player1.score == 8) {
		timer.pause();
		modal.active();
		selector("#win-audio").play();
		setTimeout(() => {
			player1.victories += 1;
			selector(".wins-number").textContent = `${player1.victories}`;
			player1.score = 0;
			restart();
			timer.init();
		}, 2500);
	}
}

function handleMultiPlayer() {
	selector(
		`#score-${playerActive.suffix}${(playerActive.score += 1)}`
	).classList.add("active");
	selector("#positive-audio-notification").play();
	if (player1.score + player2.score == 8) {
		let playerWinner;
		if (player1.score > player2.score) playerWinner = player1;
		else if (player1.score < player2.score) playerWinner = player2;
		if (playerWinner == undefined) {
			//TODO: Regra de adicionar icone no modal
			modal.changeIcon("/src/icons/balanced.svg");
			modal.changeTitle("Empatou");
			modal.changeTextColor("#000");
			modal.active();
		}
		modal.changeTitle(
			playerWinner != undefined
				? playerWinner.name + " venceu!"
				: "Empatou"
		);
		modal.active();
		selector("#win-audio").play();
		setTimeout(() => {
			if (playerWinner != undefined) {
				playerWinner.victories += 1;
				selector(
					`.wins-number.${playerWinner.suffix}`
				).textContent = `${playerWinner.victories}`;
			} else {
				modal.changeIcon("/src/icons/trophy.svg");
				modal.changeTextColor("");
			}
			player1.score = 0;
			player2.score = 0;
			restart();
		}, 2500);
	}
}

window.restartss = restart;

function restart() {
	for (let i = 8; i > 0; i--) {
		selector(`#score-one${i}`).classList.remove("active");
	}
	const cards = selector(".card-front-back", "all");
	for (let i = 0; i < cards.length; i++) {
		(function (i) {
			setTimeout(() => {
				cards[i].className = "card-front-back disabled";
			}, 20 * i);
		})(i);
		setTimeout(() => {
			insertBoard(
				".score-board",
				"afterend",
				boardGame(8),
				".board-game"
			);
			cards[i].setAttribute(
				"onclick",
				"cardFrontBack.handleClickCards(event)"
			);
		}, 700);
	}
	if (mode == "two") {
		for (let i = 8; i > 0; i--) {
			selector(`#score-two${i}`).classList.remove("active");
		}
		let lastPlayer = playerActive;
		// TODO: initPlayer incia a rodada
		initPlayer == player1 ? (initPlayer = player2) : (initPlayer = player1);
		playerActive = initPlayer;
		selector(`.wrapper-player.${lastPlayer.suffix}`).classList.remove(
			"select"
		);
		selector(`.wrapper-player.${initPlayer.suffix}`).classList.add(
			"select"
		);
		setTimeout(function () {
			modal.changeTitle(playerActive.name + " inicia o jogo");
			modal.changeTextColor("#000");
			modal.changeIcon("/src/icons/info.svg");
			modal.active();
		}, 1000);
	}
}

function insertBoard(
	referenceNode,
	position,
	insertObject,
	replaceObject = ""
) {
	if (replaceObject != "") {
		let replaceObj = selector(replaceObject);
		replaceObj.remove();
	}
	selector(referenceNode).insertAdjacentHTML(position, `${insertObject}`);
}

window.insertBoard = insertBoard;
