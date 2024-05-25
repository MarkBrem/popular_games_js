// html
const htmlString =`<h2>Калькулятор</h2>
    <form action="">
        <label for="">
        Введіть число
    <input type="number" id="valueA">
</label>
</form>
    
    
<div>
    <button onclick="calculate('add')">+</button>
    <button onclick="calculate('sub')">-</button>
    <button onclick="calculate('mul')">*</button>
    <button onclick="calculate('div')">/</button>
</div>
    
<form action="">
    <label for="">
        Введіть число
    <input type="number" id="valueB">
</label>
</form>
    

    <button onclick="calculate('div')">=</button>

    <form action="">
        <label>
            Результат
        <input id="resultHere" disabled></input>
    </label>
    </form>`;
   document.getElementById('4').insertAdjacentHTML('beforeend', htmlString);

// js
const inputIdFirst = "valueA";
const inputIdSecond = "valueB";
const outputId = "resultHere";

//1
    const getInputs = function(id) {
      return parseInt(document.getElementById(id).value);
    }

//2
    const showOutput = function(whatToShow) {
      document.getElementById(outputId).incertAdjacentHTML = whatToShow;
    }

//3
    const processNumbersAs = function(operationName, valueA, valueB) {
      if(operationName == 'add')
        return valueA + valueB;
      else if(operationName == 'sub')
        return valueA - valueB;
      else if(operationName == 'mul')
        return valueA * valueB;
      else if(operationName == 'div')
        return valueA / valueB;
    }

//4
    const calculate = function(operationName){
      x = getInputs(inputIdFirst);
      y = getInputs(inputIdSecond);

      let output = processNumbersAs(operationName, x, y);
      showOutput(output);
      console.log(x + " " + operationName + " " + y + " = " + output)
    };