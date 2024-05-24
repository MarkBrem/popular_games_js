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
    const calculation = function(operationName){
      x = getInputs(inputIdFirst);
      y = getInputs(inputIdSecond);

      let output = processNumbersAs(operationName, x, y);
      showOutput(output);
      console.log(x + " " + operationName + " " + y + " = " + output)
    };