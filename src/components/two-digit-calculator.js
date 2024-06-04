// html
const htmlString =`<h2>Калькулятор</h2>
    <form action="">
        <label for="">
        
    <input type="number" id="valueA" placeholder="Введіть число">
</label>
</form>
    
    
<div id="operator-buttons">
    <button onclick="operationName = 'плюс'">+</button>
    <button onclick="operationName = 'мінус'">-</button>
    <button onclick="operationName = 'помножити на'">*</button>
    <button onclick="operationName = 'поділити на'">/</button>
</div>
    
<form action="">
    <label for="">
        
    <input type="number" id="valueB" placeholder="Введіть число">
</label>
</form>
    

    <button onclick="calculate(operationName)">=</button>

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

let operationName;

//3
    const processNumbersAs = function(operationName, valueA, valueB) {
      if(operationName == 'плюс')
        return valueA + valueB;
      else if(operationName == 'мінус')
        return valueA - valueB;
      else if(operationName == 'помножити на')
        return valueA * valueB;
      else if(operationName == 'поділити на')
        return valueA / valueB;
    }
    
//4
    const showOutput = function(whatToShow) {
      document.getElementById(outputId).incertAdjacentHTML = whatToShow;
    }

//Finali
    const calculate = function(operationName) {
      x = getInputs(inputIdFirst);
      y = getInputs(inputIdSecond);

      let output = processNumbersAs(operationName, x, y);
      showOutput(output);
      console.log(x + " " + operationName + " " + y + " = " + output)
    };