const fs = require("fs")

//  fs.writeFile('message22.txt', "Hello from Arthur", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 


fs.readFile('message22.txt', 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
});