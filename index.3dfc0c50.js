const e=document.querySelector(".js-game-list");const t=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}].map((e=>`\n        <li id=${e.id} class = "items-js">\n            <h1 style="\n            ">${e.name}</h1>\n        </li>\n        `)).join("");e.insertAdjacentHTML("beforeend",t);const n=document.getElementById("3"),a=document.createElement("button"),s=document.createElement("button"),o=document.createElement("button"),c=document.createElement("ul"),l=document.createElement("li"),d=document.createElement("li"),i=document.createElement("li"),r=document.createElement("p"),m=document.createElement("ul"),p=document.createElement("p"),u=document.createElement("li"),y=document.createElement("p"),g=document.createElement("li"),L=document.createElement("p"),x=document.createElement("li"),E=document.createElement("p");s.classList.add("scissors"),s.classList.add("rockScissorsPaper-button"),a.classList.add("paper"),a.classList.add("rockScissorsPaper-button"),o.classList.add("rock"),o.classList.add("rockScissorsPaper-button"),c.classList.add("buttonList"),l.classList.add("paperItem"),d.classList.add("rockItem"),i.classList.add("scissorItem"),r.classList.add("answer"),m.classList.add("results"),y.classList.add("win"),g.classList.add("winItem"),L.classList.add("lose"),x.classList.add("loseItem"),p.classList.add("resultsTitle"),u.classList.add("resultsItem"),E.classList.add("computer"),n.append(c),n.append(m),n.append(r),n.append(E),c.append(l),c.append(d),c.append(i),m.append(u),m.append(g),m.append(x),l.append(a),d.append(o),i.append(s),x.append(L),g.append(y),u.append(p);let C=0,f=0;const b=["папір","камінь","ножниці"];function k(e){const t=Math.floor(3*Math.random()+1);return E.textContent=e[t-1],console.log(t-1),console.log(e[2]),e[t]}r.style.marginRight="455px",r.style.marginLeft="455px",r.style.marginTop="36px",r.style.marginBottom="36px",r.style.fontSize="12px",p.textContent="Рахунок:",a.addEventListener("click",(()=>{const e=k(b);console.log(e),function(e){const t="папір";console.log(t===e),t===e?(r.textContent="Нічия",r.style.color="#000"):"папір"===t&&"ножниці"===e?(r.textContent="Ви програли раунд!",r.style.color="#ff0000",f+=1,L.textContent=`Комп'ютер- ${f}`):(r.textContent="Ви виграли раунд!",r.style.color="#039900",C+=1,y.textContent=`Ви - ${C}`)}(e)})),o.addEventListener("click",(()=>{!function(e){const t="камінь";t===e?(r.textContent="Нічия",r.style.color="#000"):"камінь"===t&&"папір"===e?(r.textContent="Ви програли раунд!",r.style.color="#ff0000",f+=1,L.textContent=`Комп'ютер- ${f}`):(r.textContent="Ви виграли раунд!",r.style.color="#039900",C+=1,y.textContent=`Ви - ${C}`)}(k(b))})),s.addEventListener("click",(()=>{!function(e){const t="ножниці";t===e?(r.textContent="Нічия",r.style.color="#000"):"ножниці"===t&&"камінь"===e?(r.textContent="Ви програли раунд!",r.style.color="#ff0000",f+=1,L.textContent=`Комп'ютер- ${f}`):(r.textContent="Ви виграли раунд!",r.style.color="#039900",C+=1,y.textContent=`Ви - ${C}`)}(k(b))}));
//# sourceMappingURL=index.3dfc0c50.js.map
