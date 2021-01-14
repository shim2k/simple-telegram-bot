module.exports =  class ChatAnalyzer {

    constructor ({name, chatId}) {
        this.name = name;
        this.chatId = chatId;
        this.messages = [];
    }

    addMessage = ({content, user}) => {
        this.messages.push({
            user,
            content,
            timestamp: Date.now()
        })
    }

    getLastMessages = (limit = 20) => {
        return this.messages.slice(-Math.abs(limit));
    }
}