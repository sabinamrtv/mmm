//Задание 3. Программа, которая высчитывает объем додекаэдра через его ребро
function types_FCN() {
   //Присваиваем переменным значения
   const inputElement = document.getElementById("userInput") as HTMLInputElement;
   const buttonElement = document.getElementById("submitButton") as HTMLButtonElement;
   const outputElement = document.getElementById("outputText") as HTMLParagraphElement;

   //Добавляем кнопку и присваем действие, на которое она будет реагировать(клик)
   buttonElement.addEventListener("click", () => {
      //Читаем введенную длину ребра из input
      let a: number = parseInt(inputElement.value);
      let b: number = 15;
      let c: number = 15.65;
      let d: number = 4;
      let e: number = ((b + c) / d) * (a * a * a);
      //Выводим оъем додекаэдра в теге p
      outputElement.innerText = `Объем додэкаэдра: ${e}`;
   });
}
types_FCN();
