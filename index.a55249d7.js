!function(){var e=document.querySelector(".js-game-list");var t=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}].map((function(e){return"\n        <li id=".concat(e.id,' class = "items-js">\n            <h1 style="\n            ">').concat(e.name,"</h1>\n        </li>\n        ")})).join("");e.insertAdjacentHTML("beforeend",t);var n=document.getElementById("3"),a=document.createElement("button"),c=document.createElement("button"),s=document.createElement("button"),o=document.createElement("ul"),d=document.createElement("li"),r=document.createElement("li"),l=document.createElement("li"),i=document.createElement("p"),m=document.createElement("ul"),p=document.createElement("p"),u=document.createElement("li"),y=document.createElement("p"),L=document.createElement("li"),g=document.createElement("p"),E=document.createElement("li");c.classList.add("scissors"),c.classList.add("rockScissorsPaper-button"),a.classList.add("paper"),a.classList.add("rockScissorsPaper-button"),s.classList.add("rock"),s.classList.add("rockScissorsPaper-button"),o.classList.add("buttonList"),d.classList.add("paperItem"),r.classList.add("rockItem"),l.classList.add("scissorItem"),i.classList.add("answer"),m.classList.add("results"),y.classList.add("win"),L.classList.add("winItem"),g.classList.add("lose"),E.classList.add("loseItem"),p.classList.add("resultsTitle"),u.classList.add("resultsItem"),n.append(o),n.append(m),n.append(i),o.append(d),o.append(r),o.append(l),m.append(u),m.append(L),m.append(E),d.append(a),r.append(s),l.append(c),L.append(y),E.append(g),u.append(p);var x=0,f=0;function C(e){return e[Math.floor(3*Math.random()+1)]}i.style.marginRight="455px",i.style.marginLeft="455px",i.style.marginTop="36px",i.style.marginBottom="36px",i.style.fontSize="12px",p.textContent="Рахунок:",y.textContent="Ви виграли - ".concat(x),g.textContent="Ви програли - ".concat(f),a.addEventListener("click",(function(e){var t="папір";return t===C?i.textContent="Нічия":"папір"===C?(i.textContent="Ви програли раунд!",i.style.color="#ff0000",f+=1):(i.textContent="Ви виграли раунд!",i.style.color="#039900",x+=1)})),s.addEventListener("click",(function(e){var t="камінь";return t===e?i.textContent="Нічия":"камінь"===e?(i.textContent="Ви програли раунд!",i.style.color="#ff0000",f+=1):(i.textContent="Ви виграли раунд!",i.style.color="#039900",x+=1)})),c.addEventListener("click",(function(e){var t="ножниці";return t===e?i.textContent="Нічия":"ножниці"===e?(i.textContent="Ви програли раунд!",i.style.color="#ff0000",f+=1):(i.textContent="Ви виграли раунд!",i.style.color="#039900",x+=1)}))}();
//# sourceMappingURL=index.a55249d7.js.map
