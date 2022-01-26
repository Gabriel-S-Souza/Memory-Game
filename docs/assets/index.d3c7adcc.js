const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};P();let s="one";function g(e){const t=`
    <div class="wrapper-player ${s}">
        <article id="wrapper-player-and-victories">
            <h1 class="player-name">${e}</h1>
            <div>
                <p class="wins-number ${e=="Player1"?"one":"two"}"></p>
                <i class="bi bi-trophy"></i>
            <div>
        </article>
        <div class="wrapper-score">
            <div id="score-${s=="one"?"one":"two"}1" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}2" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}3" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}4" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}5" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}6" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}7" class="score"></div>
            <div id="score-${s=="one"?"one":"two"}8" class="score"></div>
        </div>
    </div>
    `;return s=="one"?s="two":s=="one",t}function x(){return`
        <header class="score-board">
            ${g("Player1")}
            <span>VS</span>
            ${g("Player2")}
        </header>
    `}function C(e,t="interroga\xE7\xE3o"){let o=e>""?`<img src="/src/images/${e}.svg" alt="">`:F();return`
        <article class="card-game ${e>""?"icon":""} " alt="${t}">
            ${o}
        </article>`}const F=()=>`
    <i class="bi bi-code-slash"></i>
`;let m=["angular","bootstrap","c","csharp","c++","css","dart","flutter","github","html","java","javascript","linux","kotlin","next","node","php","python","react-native","react","sql","swift","typescript","vue"];function L(){function e(c,a){return c=Math.ceil(c),a=Math.floor(a),Math.random()*(a-c)+c}let t=Math.round(e(0,1)*m.length),o=m[t];return o==null?L():(m.splice(t,1),o)}let y=0;function N(){y>7&&(y=0,m=["angular","bootstrap","c","csharp","c++","css","dart","flutter","github","html","java","javascript","linux","kotlin","next","node","php","python","react-native","react","sql","swift","typescript","vue"]);let e=`
        <article id=${y} class="card-front-back disabled" onclick="cardFrontBack.handleClickCards(event)">
            <div class="card -front">
                ${C("")}
            </div>
            <div class="card -back">
                ${C(L())}
            </div>
        </article>
    `;return y++,e}function T(e,t){let o=e,c=[];function a(l,f){return l=Math.ceil(l),f=Math.floor(f),Math.random()*(f-l)+l}for(var i=0;i<t*2;i++){let l=[a(0,o.length).toFixed()],f=o[l];f!=null?(c.push(f),o.splice(l,1)):i=i-1}return c.join("")}let b=0,$=[];function k(e){if(b<e){let t=N();return $.push(t),$.push(t),b++,k(e)}else{b=0;let t=T($,e);return'<section class="board-game">'+t+"</section>"}}function j(){return`
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
    `}function I(){return`
    <audio id="positive-audio-notification" src="/src/audio/notific-simple.wav"></audio>
    <audio id="win-audio" src="/src/audio/notific-win.wav"></audio>
    `}function G(){return`
        <div class="modal-winner-container">
            <div class="modal-winner">
                <img id="trophy-icon" src="/src/icons/trophy.svg" alt="">
                <h1 id="title-modal-winner">Voc\xEA venceu!<i class="bi bi-emoji-laughing-fill"></i></h1>
            </div>
        <div>
    `}const B=document.querySelector("#root");let n={score:0,html:"",suffix:"one",name:"Player1",victories:0},u={score:0,html:"",suffix:"two",name:"Player2",victories:0},d,p,h,w=1,v;B.insertAdjacentHTML("beforeend",`
    ${x()}
    ${k(8)}
    ${I()}
    ${j()}
    `);B.insertAdjacentHTML("beforeend",`
    ${G()}
    `);function S(){setTimeout(function(){n.html=r(".wrapper-player.one"),u.html=r(".wrapper-player.two")},150)}S();window.cardFrontBack={};window.cardFrontBack.handleClickCards=e=>{let t=e.target.closest(".card-front-back");t.className="card-front-back active",t.setAttribute("onclick",""),w==2?(r(".card-front-back","all").forEach(o=>{o.setAttribute("onclick","")}),t.id==h.id?(w=1,setTimeout(function(){r(".card-front-back.disabled","all").forEach(o=>{o.setAttribute("onclick","cardFrontBack.handleClickCards(event)")}),v=="one"?O():q()},280)):setTimeout(function(){if(h.className="card-front-back disabled",t.className="card-front-back disabled",w=1,t.setAttribute("onclick","cardFrontBack.handleClickCards(event)"),h.setAttribute("onclick","cardFrontBack.handleClickCards(event)"),r(".card-front-back.disabled","all").forEach(o=>{o.setAttribute("onclick","cardFrontBack.handleClickCards(event)")}),v=="two"){let o=d;o==n?d=u:d=n,r(`.wrapper-player.${d.suffix}`).classList.add("select"),r(`.wrapper-player.${o.suffix}`).classList.remove("select")}},950)):(h=t,w+=1)};const r=(e,t="")=>t!="all"?document.querySelector(`${e}`):document.querySelectorAll(`${e}`);window.handleClick={};window.handleClick.setMode=e=>{v=e.target.closest(".button-options-players").id,r(".modal-container").className="modal-container active removed",setTimeout(()=>{if(r(".modal-container").className="modal-container",v=="one")r(".wrapper-player.one").classList.add("select");else if(v=="two"){r(".wrapper-player.two").style.display="flex",r("header span").style.display="inline";let o=Math.round(Math.random());r(`.wrapper-player.${o==0?"one":"two"}`).classList.add("select"),o==0?d=n:d=u,p=d}},600)};function O(){r(`#score-one${n.score+=1}`).classList.add("active"),r("#positive-audio-notification").play(),n.score==8&&(r(".modal-winner-container").classList.add("active"),r("#win-audio").play(),setTimeout(()=>{r(".modal-winner-container").classList.remove("active"),n.victories+=1,r(".wins-number").textContent=`${n.victories}`,n.score=0,M()},2500))}function q(){if(r(`#score-${d.suffix}${d.score+=1}`).classList.add("active"),r("#positive-audio-notification").play(),n.score+u.score==8){let e;n.score>u.score?e=n:n.score<u.score&&(e=u),e==null&&(r(".modal-winner #trophy-icon").setAttribute("src","/src/icons/balanced.svg"),r("#title-modal-winner").style="color: #000;"),r("#title-modal-winner").textContent=`${e!=null?e.name:"Empatou"} ${e!=null?"venceu!":""}`,r(".modal-winner-container").classList.add("active"),r("#win-audio").play(),setTimeout(()=>{r(".modal-winner-container").classList.remove("active"),e!=null?(e.victories+=1,r(`.wins-number.${e.suffix}`).textContent=`${e.victories}`):(r(".modal-winner #trophy-icon").setAttribute("src","/src/icons/trophy.svg"),r("#title-modal-winner").style="color: '';"),n.score=0,u.score=0,M()},2500)}}function M(){for(let t=8;t>0;t--)r(`#score-one${t}`).classList.remove("active");const e=r(".card-front-back","all");for(let t=0;t<e.length;t++)(function(o){setTimeout(()=>{e[o].className="card-front-back disabled"},20*o)})(t),setTimeout(()=>{A(),e[t].setAttribute("onclick","cardFrontBack.handleClickCards(event)")},700);if(v=="two"){for(let o=8;o>0;o--)r(`#score-two${o}`).classList.remove("active");let t=d;p==n?p=u:p=n,d=p,r(`.wrapper-player.${t.suffix}`).classList.remove("select"),r(`.wrapper-player.${p.suffix}`).classList.add("select")}}function A(){r(".board-game").remove(),r(".score-board").insertAdjacentHTML("afterend",`${k(8)}`)}window.insertBoard=A;
