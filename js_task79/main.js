// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим собственным генератором хештегов!
// Он должен начинаться с хэштега (#).
// Все слова должны начинаться с заглавной буквы.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат - пустая строка, он должен вернуть false.
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "   =>  "#HelloWorld"
// ""  =>  false
function generateHashtag(str) {
    let newStr = []
    let hesh = '#'
    let tr = str.replace(/\s+/g, ' ').trim()
    if(tr.length >= 140 || tr.length <= 0) {
        return false
    } else {
        let bigLetter = tr.split(' ').map((item => item[0].toUpperCase() + item.slice(1))).join('')
        newStr = newStr.concat(hesh,bigLetter)
        return newStr.join('')
    }
}
console.log(generateHashtag(''))