const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Kaushik");
});

app.get("/api/login", (req, res) => {
  console.log(req);
  const responce = { success: true };
  res.send(responce);
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
