require("dotenv").config();

const { exec } = require("child_process");

const express = require("express");
const callRouter = express.Router();

// TO DO --> PUT THE EXEC INDUCED CHILD PROCESS BELOW IN THE POST ENDPOINT, SO THAT IT
// ONLY GETS RUN WHEN THAT ENDPOINT IS HIT IN FRONT END. QUESTION/ASK HOW TO DO THIS
// exec("node make-call.js", (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Exec node make-call.js cmd result ${stdout}`);
// });

callRouter.post("/call", (req, res) => {});

module.exports = callRouter;
