const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// serve the public directory as a static content here
app.use(express.static("public"));

app.get("/", (req, res) => {
  for (i = 1; 1 < 4; i++) {
    res.send("Number" + i + ":" + getRandomIntInclusive(1, 3));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
