const express = require("express");

const app = express()

const PORT = 8081

// app.get('/home', (req, res) => {
//     res.send("<h1>GET</h1>");
// })

// app.post("/home", (req, res) => {
//   res.send("<h1>POST</h1>");
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server has started");
});