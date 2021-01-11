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
  const Poll = require("./commands/Poll");

  const Lucy = new Bot({name: 'Lucy'});

  console.log('Starting telegram bot..');

  // Register new commands like this line: 
  Lucy.registerCommand(Example.keywords, Example.parser);
  Lucy.registerCommand(Common.keywords, Common.parser);
  Lucy.registerCommand(NBAHandler.keywords, NBAHandler.parser);
  Lucy.registerCommand(Poll.keywords, Poll.parser);

  // Inline example
  Lucy.registerCommand(['hey', 'hi', 'hello'], (incomingMessage, bot, keyMatches) => {
    // got "/lucy ...hey/hi/hello..."
    return `${keyMatches[0]} back`;
  });

  console.log('Registered all commands.');

  Lucy.start();
}


module.exports = app;
