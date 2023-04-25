const fs = require("fs")

// #------ reading file -------#
// if (fs.existsSync("./docs/blog3.txt")) {
//   fs.readFile("./docs/blog3.txt", (err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(data.toString())
//   })
// } else {
//   console.log('file not found');
// }

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// })


// #------ writing file -------#
// fs.writeFile('./docs/blog2.txt', 'hi, marouf', () => {
//   console.log('file was written!');
// })

// #------ directories -------#
if (!fs.existsSync('./assets')) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err)
    }
    console.log("folder created")
  })
}
