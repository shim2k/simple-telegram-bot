const keywords = [
    'poll',
    'הצבעה',
    'מה עדיף',
    '?'
]
async function parser(message, bot, matches, chatId) {
    message = message.slice(matches[0].length, message.length);

    if (message.indexOf('?') === -1) return 'Poll command: /lucy poll [QUESTION+?] [OPTION,OPTION,OPTION]';

    try {
    let options = message
        .slice(message.indexOf('?') + 1, message.length)
        .split(',')
        .map(c => c.trim());

        bot.sendPoll(chatId, message.slice(0, message.indexOf('?') + 1), options || ['כן', 'וואלה לא']);

    } catch (e) {
        return;
    }
}

module.exports = {
    keywords,
    parser
}