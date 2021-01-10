const { signedCookie } = require('cookie-parser');
const TelegramBot = require('node-telegram-bot-api');

class Bot {

  constructor() {
    this.token = '1548371127:AAGaIl90Jkjq-zozvujT2GEMlTr5BU-BPvw';
    this.bot = new TelegramBot(this.token, { polling: true });

    this.commands = [];
  }

  registerCommand = (keywords, messageHandler) => {
    this.commands.push({keywords, handler: messageHandler});
  }

  start = async () => {

    this.bot.on('polling_error', (msg) => console.log(msg));

    this.bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      if (!msg || !msg.text) return;

      // TODO: Do this better
      const messageWithoutBotName = msg.text.slice(msg.text.indexOf(' ')+1, msg.text.length);

      const command = this.commands
      .filter(c => c.keywords && c.handler)
      .find(c => c.keywords.find(keyword => msg.text.indexOf(keyword) > -1));

      if (!command) return;

      const response = await command.handler(messageWithoutBotName);

      this.bot.sendMessage(chatId, response);
    });
  }
}

module.exports = Bot;
