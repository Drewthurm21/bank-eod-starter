
class Account {
  /* 
  write a constructor that takes in the following arguments:
  accountName, accountNumber, accountOwner, password, funds

  the constructor should set properties according to the following specs
    -accountName, accountNumber, accountOwner, password & funds should all be passed directly
    -users should start as an array with the accountOwner at index 0
    -the isActive property should be set to 'true'
  */

  constructor() {

  }


  //addUser should add a user to the authorized users array
  //there can be a maximum of 10 users per account
  addUser() {

  }

  //removeUser should remove a user from the authorized users array
  //there must be at least 1 user on an account
  removeUser() {

  }

  //depositFunds should deposit funds into the account
  //should return the new total funds
  depositFunds() {

  }

  //withdrawlFunds should withdrawl funds from the account. 
  //we do not allow overdraft.
  //it should return the new account balance if successful or false if unsuccessful.
  withdrawlFunds() {

  }
}



module.exports = {
  Account
}