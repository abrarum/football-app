const express = require("express");
const app = express();
const cors = require("cors");
const footBallRouter = require("./routes/router");

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", footBallRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
