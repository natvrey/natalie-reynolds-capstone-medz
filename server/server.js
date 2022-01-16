const express = require("express");
const cors = require("cors");
const profilesRouter = require("./routes/profiles");
const outboundCall = require("./app");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8084;

app.use(cors({}));

app.use(express.json());

app.use(express.static("public"));

app.use("/profiles", profilesRouter);

app.use("/app", outboundCall);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const profilesRouter = require("./routes/profiles");

// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 8084;

// app.use(cors({}));

// app.use(express.json());

// app.use(express.static("public"));

// app.use("/profiles", profilesRouter);

// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on ${PORT}`);
// });
