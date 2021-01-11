const keywords = [
    'חחח',
    'lol',
    'lul',
    'תצחק',
    "פיגור"
]
const lols = {
    "פיגור" : ["pigur", "פיגור רציני", "יש פיגור", "יש פיגור","לא צחקתי מזה בכלל", "לא מצחיק שלך"],
    "חחח" : ["sdd", 'חחחחחחחחחחחחחחחחחחחחחחחחחח', 'חחחחחחוחוח', 'חיייח', 'חחחח', 'חחחחחחחגכגחח', ],
    "lol" : ["haha","lol", "שברת אותי", "LOLOLOLOL", "חחחחשחדכ"],
    "תצחק" : ["ha", 'חח', 'חחחחחחח', 'שעש', 'שמע זה אחד השוברים', 'חח' ],

}

function smartLaugh(array){
    return array[Math.floor(Math.random() * array.length)];
}

function laughAppropriateToNum(num,lolz,ogNum){
    if (num === 1){
        return smartLaugh(lols.lol);
    }else {
        for (j = 0; j < ogNum * num; j++){
            return lolz + laughAppropriateToNum(num - 1,lolz,num)
        }
    }
}
function lolJudgment(){
    pigurChance = Math.floor(Math.random() * 100)
    return (pigurChance === 69 || pigurChance === 42 || pigurChance === 2)
}

async function parser(message, bot, matches, chatId) {

    try {
        if(lolJudgment()){
            return smartLaugh(lols["פיגור"])
        }

        let thenum = message.match(/\d+/) ? Number(message.match(/\d+/)[0]) : 0

        if(thenum){
            return laughAppropriateToNum(thenum)
        }   

        return smartLaugh(lols.lol)

    } catch (e) {
        return "lol but error";
    }
}

module.exports = {
    keywords,
    parser
}