const database = require("./database");
const express = require("express");
const client = require("redis").createClient();

const app = express();

client.on("connect", () => console.log("Connected!"));
client.on("error", err => console.log("Redis Client Error", err));

(async () => {
  await client.connect();
})();

app.get("/withcache/index.html", async (req, res) => {
  const value = await client.get("index.html");
  if (value) {
    res.send(value);
    return;
  }

  database.get("index.html", async page => {
    await client.set("index.html", page, { EX: 10 });
    res.send(page);
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
