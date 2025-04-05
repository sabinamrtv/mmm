////Задание 1. b) Прочитать из input и вывести в текст тега p, используя document.getElementById
function types_Fcn() {
  const inputElement = document.getElementById("userInput") as HTMLInputElement;
  const buttonElement = document.getElementById("submitButton") as HTMLButtonElement;
  const outputElement = document.getElementById("outputText") as HTMLParagraphElement;

  //Добавляем кнопку и присваем действие, на которое она будет реагировать(клик)
  buttonElement.addEventListener("click", () => {
    //Берем имя пользователя из input
    const userName = inputElement.value;

    //Выводим приветствие в теге p
    outputElement.innerText = `Привет, ${userName}!`;
  });
}
types_Fcn();
