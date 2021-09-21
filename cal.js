var input1 = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var resultData = "";
input1.onkeydown = function () {
  console.log(input1.value);
};

function UserClickButton(input) {
  var oldinput = input1.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input1.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input1.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  historyData.push({ expression: expressionData, result: resultData });
  showLogdata();
  resultData = "";
  expressionData = "";
  input1.value = result;
}
function ClearData() {
  input1.value = "";
}

function showLogdata() {
  var log = document.getElementById("history");
  var string = "";
  for (var key in historyData) {
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<hr>";
  }

  log.innerHTML = string;
}