////Задание 1. b) Прочитать из input и вывести в текст тега p, используя document.getElementById
function types_Fcn() {
    var inputElement = document.getElementById("userInput");
    var buttonElement = document.getElementById("submitButton");
    var outputElement = document.getElementById("outputText");
    //Добавляем кнопку и присваем действие, на которое она будет реагировать(клик)
    buttonElement.addEventListener("click", function () {
        //Берем имя пользователя из input
        var userName = inputElement.value;
        //Выводим приветствие в теге p
        outputElement.innerText = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName, "!");
    });
}
types_Fcn();
