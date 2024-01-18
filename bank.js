//import the necessary tools & data to complete the tasks below.
//We'll need our users from the utilities file and account class 
//from the account file to get started


/* 

  Let's use the tools we've learned today to start building a banking app.
  We'll start by creating a bank class that will store unique info like the
  branch location, branch capital and related accounts.

  It will be up to you to decide what arguments to pass into the constructor
  and each method. You will also need to decide what properties to set and
  how to set them.

  We'll start by building out the basic functionality of the bank. Once we
  have that working we'll build the account class and, finally, we'll
  add some more advanced features.

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


  constructor() {

  }

  // openAccount - 
  //   -should create a new account for a customer
  //   -account numbers should be assigned sequentially, starting with 0
  //   -should add the account funds to total bank capital
  //   -should return the new account number
  openAccount() {
    // example user objects are located in the utilities file.
    //your code here

  }

  // closeAccount -
  //   -should close the intended account for a customer
  //   -should remove the funds from bank capital 
  //   -customer password and account number are required
  closeAccount() {
    //your code here
  }

  // getAccountInfo -  
  //   -should return the account information for a given account number
  checkAccountInfo() {
    //your code here
  }

  closeAccount() {
    //your code here
  }

  // checkBalance -
  //   -should return the balance of the account
  checkBalance() {
    //your code here
  }

  // processDeposit -
  //   -should deposit funds into the customer account
  //   -should add the funds to the bank's total capital
  //   -should return the newly updated account with all information
  processDeposit() {
    //your code here
  }

  // processWithdraw -
  //   -should allow a customer to withdrawl from an account
  //   -should remove the funds from the account and bank capital if able
  //   -should return the newly updated account with all information if successful
  //   -should return an error message if the customer does not have enough funds
  //   -we do not allow overdrafts
  processWithdrawl() {
    //your code here
  }

  // transferFunds -
  //   -should move funds from one account to another, if able
  //   -it should return the newly updated account with all information if successful
  //   -it should return an error message if the customer does not have enough funds
  //   -we do not allow overdrafts
  transferFunds() {
    //your code here
  }

  //addUserToAccount should add a user to an existing account
  addUserToAccount() {

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
  removeUserFromAccount() {

  }

  //listAccounts should list each account number and balance
  listAccounts() {

  }
}
