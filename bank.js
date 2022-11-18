//import the necessary tools & data to complete the tasks below
const { Account } = require('./account')
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

  openAccount(accountName, accountNumber, accountOwner, password, funds) {
    // const newAccount = {
    //   accountNumber: null,
    //   userName: null,
    //   accountBalance: null,
    //   password: null
    // }

    // newAccount.accountNumber = this.accounts.length
    // newAccount.userName = user
    // newAccount.accountBalance = funds
    // newAccount.password = password

    const newAccount = new Account(accountName, accountNumber, accountOwner, password, funds, this.branchName)

    this.capital += funds
    this.accounts.push(newAccount)
  }

  checkAccountInfo(accountNumber, password) {
    let account = this.accounts.find(account => accountNumber === account.accountNumber && password === account.password)
    if (!account) return false
    return account
  }

  closeAccount(accountNumber, password) {
    let account = this.checkAccountInfo(accountNumber, password)
    if (!account) return 'Error: Invalid credentials'

    this.capital -= account.accountBalance
    account.accountBalance = 0
    return `Succesfully closed account #${account.accountNumber}`
  }

  checkBalance(accountNumber, password) {
    let account = this.checkAccountInfo(accountNumber, password)
    if (account) return account.funds

    return 'Error: Invalid Credentials'
  }

  processDeposit(accountNumber, password, funds) {
    let account = this.checkAccountInfo(accountNumber, password)
    if (account) {
      account.depositFunds(funds)

      this.capital += funds
      return account
    }

    return 'Error: Invalid Credentials'
  }

  processWithdrawl(accountNumber, password, funds) {
    let account = this.checkAccountInfo(accountNumber, password)
    if (!account) return 'Error: Invalid Credentials'

    if (!(account.funds >= funds)) return 'Error: Insufficient funds'

    account.withdrawlFunds(funds)
    this.capital -= funds

    return account
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
const account = new Account('vacation', '11-17-2022-0001', 'drew', '1234', 1000)
console.log(`OPEN NEW BANK`, myBank)

users.forEach(user => {
  myBank.openAccount('savings', user.accountNumber, user.username, user.password, user.funds)
})
console.log(`\n\n\n AFTER ACCOUNTS OPENED`, myBank)

console.log(myBank.checkAccountInfo(account.accountNumber, account.password))

console.log(myBank.closeAccount('125321512346', `7878`))
console.log(myBank.closeAccount('21363241', `1254`))
console.log(myBank.closeAccount('46537457', `7913`))
console.log(myBank.closeAccount('14521566', `7913`))  // should do nothing - bad password

console.log(`\n\n\n AFTER ACCOUNTS CLOSED`, myBank)

myBank.processDeposit('14521566', '1313', 500)
myBank.processDeposit('345764357', '5555', 500)
myBank.processDeposit('1235235', '8569', 500)


console.log(`\n\n\n AFTER FUNDS ARE DEPOSITED`, myBank)


// myBank.processWithdrawl('14521566', '1313', 500)
myBank.processWithdrawl('345764357', '5555', 500)
myBank.processWithdrawl('1235235', '8569', 500)

console.log(myBank.processWithdrawl('1235235', '7878', 500)) //insufficient funds
console.log(myBank.processWithdrawl('1235235', '8569', 500)) //invalid credentials

console.log(`\n\n\n AFTER FUNDS ARE WITHDRAWN`, myBank)