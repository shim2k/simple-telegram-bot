const keywords = [
    'חחח',
    'lol',
    'lul',
    'תצחק',
    "פיגור"
]
const lols = {
    "פיגור" : ["pigur", "פיגור רציני", "יש פיגור", "יש פיגור"],
    "חחח" : ["sdd", 'חחחחחחחחחחחחחחחחחחחחחחחחחח', 'חחחחחחוחוח', 'חיייח', 'חחחח', 'חחחחחחחגכגחח', ],
    "lol" : ["haha","lol", "שברת אותי", "LOLOLOLOL", "חחחחשחדכ"],
    "תצחק" : ["ha", 'חח', 'חחחחחחח', 'שעש', 'שמע זה אחד השוברים', 'חח' ],

}
function smartLaugh(array){
    return array[Math.floor(Math.random() * array.length)];
}
async function parser(message, bot, matches, chatId) {

    try {
        let thenum = message.match(/\d+/) ? Number(message.match(/\d+/)[0]) : 0

        if(!thenum){
            return smartLaugh(lols.lol)
        }
        let the_lol = smartLaugh(lols["חחח"])
        if(thenum > 0 && thenum < 10){
            for (i = 0; i < thenum; i++){
                for (j = 0; j < i; j++){
                    the_lol = the_lol + smartLaugh(lols["חחח"])
                }
            }
        }
        return the_lol

    } catch (e) {
        return "lol but error";
    }
}

module.exports = {
    keywords,
    parser
}