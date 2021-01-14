const Bot = require('./bot');
const ChatStorage = require('./services/chat-storage');
const express = require('express');

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
  const Lol = require("./commands/Lol")
  const Lucy = require("./commands/Lucy")
  
  const chatStorage = new ChatStorage();
  const bot = new Bot({name: 'Lucy', storage: chatStorage});
  console.log('Starting telegram bot..');

  // Register new commands like this line: 
  bot.registerCommand(Lucy.keywords, Lucy.parser);
  bot.registerCommand(Example.keywords, Example.parser);
  bot.registerCommand(Common.keywords, Common.parser);
  bot.registerCommand(NBAHandler.keywords, NBAHandler.parser);
  bot.registerCommand(Poll.keywords, Poll.parser);
  bot.registerCommand(Lol.keywords, Lol.parser);
  bot.registerCommand(Lucy.keywords, Lucy.parser);

  // Inline example
  bot.registerCommand(['hey', 'hi', 'hello'], (incomingMessage, api, keyMatches) => {
    // got "/lucy ...hey/hi/hello..."
    return `${keyMatches[0]} back`;
  });

  console.log('Registered all commands.');

  bot.start();
}


module.exports = app;
