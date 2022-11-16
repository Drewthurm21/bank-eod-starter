//import the necessary tools & data to complete the tasks below
const { users } = require('./utilities')

/* 
  Let's use the tools we've learned today to start building a banking app.
  We'll start by creating a bank class that will store unique info like the
  branch location, branch capital and related accounts.

  Create a bank app that has the following functionality:

  openAccount - (pw, name, initialDeposit)
    -should create a new account for a customer
    -account numbers should be assigned sequentially, starting with 0
    -should add the account funds to total bank capital
    -should return the new account number

  closeAccount - (pw, acctNum)
    -should close the intended account for a customer
    -should remove the funds from bank capital 
    -customer password and account number are required
    
  getAccountInfo - (pw, acctNum)  
    -should return the account information for a given account number

  checkBalance - (pw, acctNum)
    -should return the balance of the account
    
  processDeposit - (pw, acctNum, amount)
    -should deposit funds into the customer account
    -should add the funds to the bank's total capital
    -should return the newly updated account with all information

  processWithdraw - (pw, acctNum, amount)
    -should allow a customer to withdrawl from an account
    -should remove the funds from the account and bank capital if able
    -should return the newly updated account with all information if successful
    -should return an error message if the customer does not have enough funds
    -we do not allow overdrafts

  transferFunds - (pw, acctNum, amount, acctNum2)
    -should move funds from one account to another, if able
    -it should return the newly updated account with all information if successful
    -it should return an error message if the customer does not have enough funds
    -we do not allow overdrafts

*/


class Bank {

  /* 
  Our constructor should initialize the bank with a:
    -name, location, starting capital and accounts

  it should set the following properties:
    -branch name should be "FMB " plus the branch city
    -branch location should be the city and state
    -starting capital should be the starting capital (default to $100,000)
    -accounts should be an empty array to start
  */

  constructor(city, state, startingCapital = 100000) {
    this.location = city + ', ' + state
    this.capital = startingCapital
    this.branchName = `FMB ${city}`
    this.accounts = []
  }

  openAccount(user, password, funds) {
    const newAccount = {
      accountNumber: null,
      userName: null,
      accountBalance: null,
      password: null
    }

    newAccount.accountNumber = this.accounts.length
    newAccount.userName = user
    newAccount.accountBalance = funds
    newAccount.password = password

    this.capital += funds
    this.accounts.push(newAccount)
  }

  closeAccount(accountNumber, password) {
    let account = this.accounts[accountNumber]
    if (account.password !== password) return console.log('Error: Invalid credentials')

    this.capital -= account.accountBalance
    account.accountBalance = 0
    return console.log(`Succesfully closed account #${account.accountNumber}`)
  }

  checkAccountInfo(accountNumber, password) {
    //your code here
  }

  checkBalance(accountNumber, password) {
    //your code here
  }

  processDeposit(accountNumber, password, funds) {
    //your code here
  }

  processWithdrawl(accountNumber, password, funds) {
    //your code here
  }

  transferFunds(accountNumber, password, funds, accountNumber2) {
    //your code here
  }

  //addUserToAccount should add a user to an existing account
  addUserToAccount(accountNumber, userName, password) {

  }

  /* 

  Wait a sec... what? Our current account setup doesn't have the requirements for us to 
  add multiple users to an account. In fact there are a lot of things we're not
  offering with our accounts...

  What happens if a user wants to:
    - add or remove an authorized user
    - to consolidate accounts?
    - to change their password?
    - take out a loan?
    - the list goes on and on...

  */



  //removeUserFromAccount should remove a user from an existing account
  removeUserFromAccount(accountNumber, userName, Password) {

  }

  //listAccounts should list each account number and balance
  listAccounts() {
    for (const account of this.accounts) {
      console.log(account)
    }
  }
}


const myBank = new Bank('Overland Park', 'Kansas', 10000)
console.log(`OPEN NEW BANK`, myBank)

users.forEach(user => {
  myBank.openAccount(user.username, user.password, user.funds)
})
console.log(`\n\n\n AFTER ACCOUNTS OPENED`, myBank)

myBank.closeAccount(0, `7878`)
myBank.closeAccount(1, `1254`)
myBank.closeAccount(2, `7913`)
myBank.closeAccount(3, `7913`)

console.log(`\n\n\n AFTER ACCOUNTS CLOSED`, myBank)