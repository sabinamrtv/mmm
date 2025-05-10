class BankAccount {
    public accountNumber: string;
    #balance: number; 
  
    constructor(accountNumber: string, initialBalance: number = 0) {
      this.accountNumber = accountNumber;
      this.#balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount <= 0) {
        console.log("Сумма пополнения должна быть положительной.");
        return;
      }
      this.#balance += amount;
      console.log(`Счет пополнен на ${amount}. Новый баланс: ${this.#balance}`);
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Сумма снятия должна быть положительной.");
        return;
      }
      if (amount > this.#balance) {
        console.log("Недостаточно средств для снятия.");
        return;
      }
      this.#balance -= amount;
      console.log(`Со счета снято ${amount}. Новый баланс: ${this.#balance}`);
    }
  
    getBalance(): number {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount("123456789", 1000);
  myAccount.deposit(500);     
  myAccount.withdraw(300);       
  console.log(myAccount.getBalance()); 
  