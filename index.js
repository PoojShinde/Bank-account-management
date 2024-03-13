



// BankAccount constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Assume all accounts are active by default
    
    // Method to deposit money into the account
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    };

    // Method to withdraw money from the account
    this.withdraw = function(amount) {
        if (this.balance >= amount && amount > 0) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    };

    // Method to check the balance of the account
    this.checkBalance = function() {
        console.log(`Balance of account ${this.accountNumber}: ${this.balance}`);
    };

    // Method to check if the account is active
    this.isActive = function() {
        return this.active;
    };
}

// Function to calculate the total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Creating multiple BankAccount objects
const account1 = new BankAccount(1001, "John Doe", "Savings", 500);
const account2 = new BankAccount(1002, "Jane Doe", "Checking", 1000);

// Perform operations on accounts
account1.deposit(200);
account2.withdraw(300);
account1.checkBalance();
account2.checkBalance();

// Test the isActive method
console.log("Is account 1 active?", account1.isActive());
console.log("Is account 2 active?", account2.isActive());

// Test the getTotalBalance function
const accounts = [account1, account2];
console.log("Total balance of all active accounts:", getTotalBalance(accounts));

  