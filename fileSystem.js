const {readFile} = require('fs');

readFile('./value.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});