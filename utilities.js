const fs = require("fs")

const writeToDatabase = (text) => {
  // use fs node module to write a db record to our text file
  fs.appendFile('dbRecords.txt', text + `\n`, (err) => {
    if (err) return console.error(err);
  });
  console.log("Data written successfully!");
}

const readFromDatabase = () => {
  console.log("Let's read newly written data");
  // Read the newly written file and print all of its content on the console
  fs.readFile('dbRecords.txt', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
}



const user1 = {
  'username': 'Drew Thurman',
  'funds': 100,
  'password': '7878',
}

const user2 = {
  'username': 'Shane Wilkey',
  'funds': 100,
  'password': '1254',
}

const user3 = {
  'username': 'Anabel Villalobos',
  'funds': 100,
  'password': '7913',
}

const user4 = {
  'username': 'Nick Esqueda',
  'funds': 100,
  'password': '1313',
}
const user5 = {
  'username': 'Briana Robinson',
  'funds': 100,
  'password': '5555',
}
const user6 = {
  'username': 'Roger Camps',
  'funds': 100,
  'password': '8569',
}


module.exports = {
  dbFuncs: {
    writeToDatabase,
    readFromDatabase,
  },

  users: [user1, user2, user3, user4, user5, user6]
}
