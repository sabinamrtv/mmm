class BankAccount {
    public accountNumber: string;
    #balance: number;
  
    constructor(accountNumber: string, initialBalance: number = 0) {
      this.accountNumber = accountNumber;
      this.#balance = initialBalance;
    }
  
    deposit(amount: number){
      if (amount <= 0) {
        display("Сумма должна быть положительной.");
        return;
      }
      this.#balance += amount;
      display(`Счет пополнен на ${amount}. Новый баланс: ${this.#balance}₽`);
    }
  
    withdraw(amount: number){
      if (amount <= 0) {
        display("Сумма должна быть положительной.");
        return;
      }
      if (amount > this.#balance) {
        display("Недостаточно средств.");
        return;
      }
      this.#balance -= amount;
      display(`Со счета снято ${amount}₽. Новый баланс: ${this.#balance}₽`);
    }
  
    getBalance(): number {
      return this.#balance;
    }
  }
  
  let currentAccount: BankAccount | null = null;
  
  function createAccount(){
    const accNumber = (document.getElementById("accountNumber") as HTMLInputElement).value;
    const initial = parseFloat((document.getElementById("initialBalance") as HTMLInputElement).value);
  
    if (!accNumber || isNaN(initial)) {
      display("Введите корректные данные.");
      return;
    }
  
    currentAccount = new BankAccount(accNumber, initial);
    display("Счёт успешно создан.");
    (document.getElementById("actions") as HTMLDivElement).style.display = "block";
  }
  
  function deposit(){
    if (!currentAccount) return;
    const amount = parseFloat((document.getElementById("amount") as HTMLInputElement).value);
    currentAccount.deposit(amount);
  }
  
  function withdraw(){
    if (!currentAccount) return;
    const amount = parseFloat((document.getElementById("amount") as HTMLInputElement).value);
    currentAccount.withdraw(amount);
  }
  
  function showBalance(){
    if (!currentAccount) return;
    const balance = currentAccount.getBalance();
    display(`Текущий баланс: ${balance.toFixed(2)}₽`);
  }
  
  function display(message: string){
    const result = document.getElementById("result") as HTMLDivElement;
    result.innerText = message;
  }
  
 
  (window as any).createAccount = createAccount;
  (window as any).deposit = deposit;
  (window as any).withdraw = withdraw;
  (window as any).showBalance = showBalance;
  