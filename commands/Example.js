const keywords = [
    'test',
    'best'
]
async function parser (message) {
    if (message === 'test') {
        return 'best'
    } else if (message === 'best') {
        return 'test';
    }
}

module.exports = {
    keywords,
    parser
}