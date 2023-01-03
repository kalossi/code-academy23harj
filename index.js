const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// serve the public directory as a static content here
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send(
    "Number1: " +
      String(Math.round(Math.random() * 2 + 1)) +
      "<br>" +
      "Number2: " +
      String(Math.round(Math.random() * 2 + 1)) +
      "<br>" +
      "Number3: " +
      String(Math.round(Math.random() * 2 + 1)) +
      "<br>"
  );
});

app.get("/locations", (req, res) => {
  let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
  ];
  res.json(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
