const container = document.getElementById('8');

const inputList = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

const checkButton = document.createElement('button');
const resultText = document.createElement('p');

input1.classList.add('numberInput');
input2.classList.add('numberInput');
input3.classList.add('numberInput');
inputList.classList.add('inputList');
checkButton.classList.add('checkButton');
resultText.classList.add('result');

input1.type = 'number';
input2.type = 'number';
input3.type = 'number';

input1.style.width = '150px';
input2.style.width = '150px';
input3.style.width = '150px';

input1.placeholder = 'Число 1';
input2.placeholder = 'Число 2';
input3.placeholder = 'Число 3';

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.gap = '25px';
container.style.marginTop = '20px';

const title = document.createElement('p');
title.textContent = 'Введіть 3 числа';
title.style.fontSize = '20px';
title.style.fontWeight = '500';
title.style.color = '#333';
container.prepend(title);

inputList.style.listStyle = 'none';
inputList.style.display = 'flex';
inputList.style.gap = '40px';

[item1, item2, item3].forEach(item => {
  item.style.display = 'flex';
});

[input1, input2, input3].forEach(input => {
  input.type = 'number';
  input.placeholder = 'Введіть число';

  input.style.width = '150px';
  input.style.height = '40px';
  input.style.border = 'none';
  input.style.borderRadius = '30px';
  input.style.background = '#e6e6e6';
  input.style.boxShadow = '0px 3px 4px #bfbfbf';
  input.style.textAlign = 'center';
  input.style.fontSize = '15px';
  input.style.outline = 'none';
});

checkButton.textContent = 'Перевірити';
checkButton.style.marginTop = '10px';
checkButton.style.width = '150px';
checkButton.style.height = '45px';
checkButton.style.border = 'none';
checkButton.style.borderRadius = '25px';
checkButton.style.background = '#dcdcdc';
checkButton.style.boxShadow = '0px 3px 4px #bfbfbf';
checkButton.style.fontSize = '16px';
checkButton.style.cursor = 'pointer';

checkButton.addEventListener('mouseover', () => {
  checkButton.style.background = '#cfcfcf';
});
checkButton.addEventListener('mouseout', () => {
  checkButton.style.background = '#dcdcdc';
});

resultText.style.fontSize = '16px';
resultText.style.color = '#333';
resultText.style.marginTop = '10px';
resultText.style.textAlign = 'center';

checkButton.textContent = 'Перевірити';

container.append(inputList);
inputList.append(item1, item2, item3);

item1.append(input1);
item2.append(input2);
item3.append(input3);

container.append(checkButton);
container.append(resultText);

checkButton.addEventListener('click', () => {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const num3 = Number(input3.value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultText.textContent = 'Введи три числа!';
    resultText.style.color = 'red';
    return;
  }

  const max = Math.max(num1, num2, num3);

  resultText.textContent = `Найбільше число: ${max}`;
  resultText.style.color = 'green';
});
