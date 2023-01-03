const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// serve the public directory as a static content here
app.use(express.static("public"));

app.get("/test", (req, res) => {
    res.send("Number1: " +  String(Math.round(Math.random() * 2 + 1)) + "<br>" +
            "Number2: " +  String(Math.round(Math.random() * 2 + 1)) + "<br>" +
            "Number3: " +  String(Math.round(Math.random() * 2 + 1)) + "<br>"
    );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
