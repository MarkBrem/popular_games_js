const e=document.querySelector(".js-game-list");const t=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}].map((e=>`\n        <li id=${e.id} class = "items-js">\n            <h1 style="\n            ">${e.name}</h1>\n        </li>\n        `)).join("");e.insertAdjacentHTML("beforeend",t);const n=document.getElementById("2");console.log(n);const o=document.createElement("input");o.type="number",o.id="userGuess",o.classList.add("number"),o.placeholder="Введіть число";const s=document.createElement("button");s.type="submit",s.classList.add("checkGuess");const c=document.createElement("form");c.append(o,s),n.append(c),c.addEventListener("submit",(function(e){e.preventDefault();!function(e){console.log(e);const t=document.createElement("p");t.id="result",t.classList.add("result");const s=Math.floor(9e3*Math.random())+1,c=parseInt(o.value);console.log(s,c),c===s?(console.log(`Вітаю, ви вгадали число ${s}!`),t.textContent=`Вітаю, ви вгадали число ${s}!`):t.textContent=`Ви програли, комп'ютер загадав число ${s}.`,n.append(t)}(o.value)}));const a=document.getElementById("3"),l=document.createElement("button"),d=document.createElement("button"),i=document.createElement("button"),r=document.createElement("ul"),m=document.createElement("li"),u=document.createElement("li"),p=document.createElement("li"),y=document.createElement("p"),g=document.createElement("ul"),L=document.createElement("p"),x=document.createElement("li"),E=document.createElement("p"),f=document.createElement("li"),b=document.createElement("p"),C=document.createElement("li"),h=document.createElement("p");d.classList.add("scissors"),d.classList.add("rockScissorsPaper-button"),l.classList.add("paper"),l.classList.add("rockScissorsPaper-button"),i.classList.add("rock"),i.classList.add("rockScissorsPaper-button"),r.classList.add("buttonList"),m.classList.add("paperItem"),u.classList.add("rockItem"),p.classList.add("scissorItem"),y.classList.add("answer"),g.classList.add("results"),E.classList.add("win"),f.classList.add("winItem"),b.classList.add("lose"),C.classList.add("loseItem"),L.classList.add("resultsTitle"),x.classList.add("resultsItem"),h.classList.add("computer"),a.append(r),a.append(g),a.append(y),a.append(h),r.append(m),r.append(u),r.append(p),g.append(x),g.append(f),g.append(C),m.append(l),u.append(i),p.append(d),C.append(b),f.append(E),x.append(L);let k=0,$=0;const S=["папір","камінь","ножниці"];function q(e){const t=Math.floor(3*Math.random()+1);return h.textContent=`Комп'ютер вибрав: ${e[t-1]}`,e[t-1]}y.style.marginRight="455px",y.style.marginLeft="455px",y.style.marginTop="36px",y.style.marginBottom="36px",y.style.fontSize="12px",L.textContent="Рахунок:",l.addEventListener("click",(()=>{const e=q(S);console.log(e),function(e){const t="папір";console.log(t===e),t===e?(y.textContent="Нічия",y.style.color="#000"):"папір"===t&&"ножниці"===e?(y.textContent="Ви програли раунд!",y.style.color="#ff0000",$+=1,b.textContent=`Комп'ютер- ${$}`):(y.textContent="Ви виграли раунд!",y.style.color="#039900",k+=1,E.textContent=`Ви - ${k}`)}(e)})),i.addEventListener("click",(()=>{!function(e){const t="камінь";t===e?(y.textContent="Нічия",y.style.color="#000"):"камінь"===t&&"папір"===e?(y.textContent="Ви програли раунд!",y.style.color="#ff0000",$+=1,b.textContent=`Комп'ютер- ${$}`):(y.textContent="Ви виграли раунд!",y.style.color="#039900",k+=1,E.textContent=`Ви - ${k}`)}(q(S))})),d.addEventListener("click",(()=>{!function(e){const t="ножниці";t===e?(y.textContent="Нічия",y.style.color="#000"):"ножниці"===t&&"камінь"===e?(y.textContent="Ви програли раунд!",y.style.color="#ff0000",$+=1,b.textContent=`Комп'ютер- ${$}`):(y.textContent="Ви виграли раунд!",y.style.color="#039900",k+=1,E.textContent=`Ви - ${k}`)}(q(S))}));const v=document.querySelector("body"),I=document.querySelector(".dropdown-btn"),w=document.querySelector(".dropdown-content"),M=document.querySelector(".button-theme"),j=document.querySelector(".moon-icon"),A=document.querySelector(".sun-icon");I.addEventListener("click",(function(e){w.classList.toggle("is-open")})),M.addEventListener("click",(function(e){v.classList.toggle("night-theme"),I.classList.toggle("night-theme-btn"),v.classList.contains("night-theme")?(j.style.display="none",A.style.display="inline",M.style.border="1px solid white",A.style.textAlign="center"):(j.style.display="inline",A.style.display="none",M.style.border="1px solid black",j.style.textAlign="center")}));
//# sourceMappingURL=index.3b4165ae.js.map
