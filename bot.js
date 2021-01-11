const { signedCookie } = require('cookie-parser');
const TelegramBot = require('node-telegram-bot-api');

class Bot {

  constructor({name}) {
    if (!name) {
      throw new Error('Please provide name');
    }

    this.token = '1548371127:AAGaIl90Jkjq-zozvujT2GEMlTr5BU-BPvw';
    this.bot = new TelegramBot(this.token, { polling: true });

    this.commands = [];
    this.name = `/${name}`;
  }

  registerCommand = (keywords, messageHandler) => {
    this.commands.push({ keywords, handler: messageHandler });
  }

  start = async () => {

    this.bot.on('polling_error', (msg) => console.log(msg));

    this.bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      if (!msg || !msg.text) return;

      msg.text = msg.text.toLowerCase();
      
      // Maintainer protection
      if (msg.text.indexOf('shimi') > -1 || msg.text.indexOf('שימי') > -1) {
        this.bot.sendMessage(chatId, 'nice try bro');
        return;
      }

      // Empty message
      if (msg.text === this.name.toLowerCase()) {
        const myCommands = await this.bot.getMyCommands();
        this.bot.sendMessage(chatId, `Hello Mr. ${msg.from.last_name || msg.from.first_name}.`);
        return;
      }

      // TODO: Do this better
      const messageWithoutBotName = msg.text.slice(msg.text.indexOf(' ') + 1, msg.text.length);

      let keywordMatches = [];

      const command = this.commands
        .filter(c => c.keywords && c.handler)
        .find(c => {
          const matches = c.keywords.filter(keyword => msg.text.indexOf(keyword) > -1);
          if (matches.length > 0) {
            keywordMatches = matches;
          }
          return matches.length > 0;
        });

      if (!command) return;

      const response = await command.handler(messageWithoutBotName, this.bot, keywordMatches, chatId);
      if (!response) return;

      this.bot.sendMessage(chatId, response);
    });
  }
}

module.exports = Bot;
