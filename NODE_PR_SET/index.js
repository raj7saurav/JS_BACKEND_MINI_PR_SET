const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


app.get("/",(req , res )=> {

    req.send("Hello Started")
})
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlstr = `<h1> Welcome to saurav world ${username , id}</h1>`;
  req.send(htmlstr);
});
