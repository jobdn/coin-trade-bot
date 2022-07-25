const express = require("express");
const path = require("path");
require("dotenv").config;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  console.log(
    "process.env.REACT_APP_RAPID_API_KEY:",
    process.env.REACT_APP_RAPID_API_KEY
  );
  res.json({ rapidApiKey: process.env.REACT_APP_RAPID_API_KEY });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
