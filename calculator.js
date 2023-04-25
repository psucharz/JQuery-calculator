$(document).ready(function () {
  let number1 = "";
  let number2 = "";
  let operation = "";
  let lastEqualsFlag = false;

  $(".number").click(function () {
    if(lastEqualsFlag){
      lastEqualsFlag = false;
      number2 = "";
      operation = "";
    }
    number2 += $(this).val();
    $(".display").text(number2);
  });

  $('.sign').click(function () {
    if (number2.charAt(0) === "-") {
      console.log("dupa")
      number2 = number2.slice(1);}
    else
      number2 = "-" + number2;
    $('.display').text(number2);
  });

  $(".decimal").click(function () {
    if (number2.indexOf(".") === -1) {
      number2 += ".";
      $(".display").text(number2);
    }
  });

  $(".clear").click(function () {
    number2 = "";
    operation = "";
    number1 = "";
    $(".display").text(number2);
    $(".memory-display").text(number1 + operation);
  });

  $(".backspace").click(function () {
    number2 = number2.slice(0, -1);
    $(".display").text(number2);
  });

  $(".operator").click(function () {
    var operator = $(this).val();
    if (number1 !== "" && number2 !== "") {
      if(!lastEqualsFlag) {
        number1 = calculate(number1, number2, operation);
        $(".display").text(number1);
      }
    } else if (number2 !== "") {
      number1 = number2;
    }
    else{
      return;
    }
    number2 = "";
    operation = operator;
    $(".memory-display").text(number1 + operation);
    lastEqualsFlag = false;
  });

  $(".equals").click(function () {
    number1 = calculate(number1, number2, operation);
    $(".display").text(number1);
    $(".memory-display").text("");
    lastEqualsFlag = true;
  });

  function calculate(num1, num2, operator) {
    var float1 = parseFloat(num1);
    var float2 = parseFloat(num2);
    switch (operator) {
      case "+":
        return float1 + float2;
      case "-":
        return float1 - float2;
      case "*":
        return float1 * float2;
      case "/":
        return float1 / float2;
      case "%":
        return float1 % float2;
    }
  }
});