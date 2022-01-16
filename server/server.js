const express = require("express");
const cors = require("cors");
const profilesRouter = require("./routes/profiles");
const callsRouter = require("./routes/call");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8084;

app.use(cors({}));

app.use(express.json());

app.use(express.static("public"));

app.use("/profiles", profilesRouter);

app.use("/call", callsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
