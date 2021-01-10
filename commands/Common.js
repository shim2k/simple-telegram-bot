const keywords = [
    'שתוק',
]
async function parser (message) {
    const nameIndex = message.indexOf(' ');
    
    return nameIndex !== -1 ? `כה שתוק ${message.slice(nameIndex+1, message.length)}` : 'אמיתי';
}

module.exports = {
    keywords,
    parser
}