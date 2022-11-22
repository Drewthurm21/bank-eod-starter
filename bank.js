//import the necessary tools & data to complete the tasks below


/* 
  Let's use the tools we've learned today to start building a banking app.
  We'll start by creating a bank class that will store unique info like the
  branch location, branch capital and related accounts.

*/


class Bank {

  /* Our constructor should initialize the bank with a:
  -name, location, starting capital and accounts  

  it should set the following properties:
  -branch name should be "FMB " plus the branch city
  -branch location should be the city and state
  -starting capital should be the starting capital (default to $100,000)
  -accounts should be an empty array to start

  */

  constructor(city, state, startingCapital) {

  }

  // openAccount - (pw, name, initialDeposit)
  //   -should create a new account for a customer
  //   -account numbers should be assigned sequentially, starting with 0
  //   -should add the account funds to total bank capital
  //   -should return the new account number
  openAccount(user, password, funds) {
    // example user object
    // const newAccount = {
    //   accountNumber: 9453,
    //   userName: 'John Doe',
    //   accountBalance: 1076.22,
    //   password: 'strongPassword'
    // }

    //your code here
  }

  // closeAccount - (pw, acctNum)
  //   -should close the intended account for a customer
  //   -should remove the funds from bank capital 
  //   -customer password and account number are required
  closeAccount(accountNumber, password) {
    //your code here
  }

  // getAccountInfo - (pw, acctNum)  
  //   -should return the account information for a given account number
  checkAccountInfo(accountNumber, password) {
    //your code here
  }

  // checkBalance - (pw, acctNum)
  //   -should return the balance of the account
  checkBalance(accountNumber, password) {
    //your code here
  }

  // processDeposit - (pw, acctNum, amount)
  //   -should deposit funds into the customer account
  //   -should add the funds to the bank's total capital
  //   -should return the newly updated account with all information
  processDeposit(accountNumber, password, funds) {
    //your code here
  }

  // processWithdraw - (pw, acctNum, amount)
  //   -should allow a customer to withdrawl from an account
  //   -should remove the funds from the account and bank capital if able
  //   -should return the newly updated account with all information if successful
  //   -should return an error message if the customer does not have enough funds
  //   -we do not allow overdrafts
  processWithdrawl(accountNumber, password, funds) {
    //your code here
  }

  // transferFunds - (pw, acctNum, amount, acctNum2)
  //   -should move funds from one account to another, if able
  //   -it should return the newly updated account with all information if successful
  //   -it should return an error message if the customer does not have enough funds
  //   -we do not allow overdrafts
  transferFunds(accountNumber, password, funds, accountNumber2) {
    //your code here
  }


  /* 

  --- REFACTOR INSTRUCTIONS INCOMMING ---

  */


  //addUserToAccount should add a user to an existing account
  addUserToAccount(accountNumber, userName, password) {

  }

  //removeUserFromAccount should remove a user from an existing account
  removeUserFromAccount(accountNumber, userName, Password) {

  }

  //listAccounts should list each account number and balance
  listAccounts() {

  }
}




const myBank = new Bank('Free Money Bank', 'USA', 10000)
console.log(`OPEN NEW BANK`, myBank)



