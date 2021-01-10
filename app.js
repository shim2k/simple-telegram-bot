const Bot = require("./bot");
const express = require('express')

const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)

  spawnBot();
})

function spawnBot() {
  const NBAHandler = require("./commands/NBAHandler");
  const Common = require("./commands/Common");
  const Example = require("./commands/Example");

  const Lucy = new Bot();

  console.log('Starting telegram bot..');

  // Register new commands like this line: 
  Lucy.registerCommand(Example.keywords, Example.parser);
  Lucy.registerCommand(Common.keywords, Common.parser);
  Lucy.registerCommand(NBAHandler.keywords, NBAHandler.parser);

  console.log('Registered all commands.');

  Lucy.start();
}


module.exports = app;
