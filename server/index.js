const express = require("express");

const port = process.env.PORT || 3000;
const pretty = require("express-prettify");

const opening = require("./routes/opening");
const ending = require("./routes/endings");
const equipment = require("./routes/equipment");

const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.append("Access-Control-Allow-Methods", [
    "GET",
    "OPTIONS",
    "PUT",
    "POST",
    "PATCH",
    "DELETE"
  ]);

  res.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(pretty({ query: "pretty" }));

app.set("json spaces", 4);

app.get("/", (req, res, next) => {
  res.send(`Welcome to the api`);
});

app.use("/api/opening", opening);
app.use("/api/ending", ending);
app.use("/api/equipment", equipment);

const server = require("http").createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));
