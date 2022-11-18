
class Account {
  /* 
  write a constructor that takes in the following arguments:
  accountName, accountNumber, accountOwner, password, funds

  the constructor should set properties according to the following specs
    -accountName, accountNumber, accountOwner, password & funds should all be passed directly
    -users should start as an array with the accountOwner at index 0
    -the isActive property should be set to 'true'
  */

  constructor(accountName, accountNumber, accountOwner, password, funds, branchName) {
    this.branchName = branchName
    this.accountName = accountName
    this.accountNumber = accountNumber
    this.accountOwner = accountOwner
    this.password = password
    this.funds = funds
    this.users = [accountOwner]
    this.isActive = true
  }


  //addUser should add a user to the authorized users array
  //there can be a maximum of 10 users per account
  addUser(userName) {
    if (this.users.length >= 10) return 'Error: Authorized users list is full'
    this.users.push(userName)

    return `Success:  ${userName} added to account!`
  }

  //removeUser should remove a user from the authorized users array
  //there must be at least 1 user on an account
  removeUser(userName) {
    if (this.users.length < 2) return "Error: There must be at least one user"

    let userIndex = this.users.indexOf(userName)

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1)
    }

  }

  //depositFunds should deposit funds into the account
  //should return the new total funds
  depositFunds(amount) {
    this.funds += amount
    return this.funds
  }

  //withdrawlFunds should withdrawl funds from the account. 
  //we do not allow overdraft.
  //it should return the new account balance if successful or false if unsuccessful.
  withdrawlFunds(amount) {
    if (amount > this.funds || amount < 0) return false

    this.funds -= amount
    return this.funds
  }
}


const account = new Account('vacation', '11-17-2022-0001', 'drew', '1234', 1000)
console.log(account)
account.addUser('shane')
account.removeUser('shane')
console.log(account.removeUser('drew'))
console.log(account)
account.depositFunds(100)
console.log(account)
account.withdrawlFunds(100)
console.log(account.withdrawlFunds(1100))  // fail
console.log(account)


module.exports = {
  Account
}