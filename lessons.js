// const info = require('./additiona')
// const Calc = require("calc-js").Calc;
const path = require("path");
// const fs = require('fs')
const fs = require("fs").promises;
// const http = require('http');

// info.getDirAndFile()
// console.log(process.env)
// console.log(process.argv);
// const [,, a, b] = process.argv
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish())

// const pathFile = path.resolve('additiona.js')
// console.log(pathFile);

// fs.readFile('./package.json', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// })

(async () => {
  try {
    const data = await fs.readFile(path.resolve("./package.json"), "utf8");
    await fs.writeFile("./test.txt", data, "utf8");
    //   await fs.rename('./test.txt', 'renameTest.txt')
    //   await fs.unlink('./renameTest.txt')
    //   await fs.appendFile('./test.txt', Date(), 'utf8')
  } catch (error) {
    console.log(error);
  }
})();

// const PORT = 8081

// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.writeHead(200, { 'Content-type': 'text/html' })
//   response.write('<h1>Ass</h1>');
//   response.end()
// }

// const server = http.createServer(requestHandler)

// server.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('server has started');
// })
