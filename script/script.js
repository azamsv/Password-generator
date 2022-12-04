
const lengthTag = document.querySelector("#length")
const letterTag = document.querySelector("#letters_yes")
const numbersTag = document.querySelector("#numbers")
const symbolTag = document.querySelector("#symbols")
const generateBtn = document.querySelector(".generator__generate")
const passwordTag = document.querySelector(".generator__password")
const errorTag = document.querySelector(".generator__error")
const copyBtn = document.querySelector(".generator__copy")

const randomizer = (max) => {
    let rand = Math.random() * max;
    return Math.floor(rand);
}
let result = ""
generateBtn.addEventListener("click", () => {
    passwordTag.innerText = ""
    result = ""
    copyBtn.style.display = "none"

//  ""  0 null undefined NaN  всегда false
    if ( lengthTag.value && +lengthTag.value > 7 && +lengthTag.value < 128) {
        const length = +lengthTag.value
        const isLettersChecked = letterTag.checked
        const isSymbolsChecked = symbolTag.checked
        const isNumbersChecked = numbersTag.checked
        const symbolsString = "!\"#$%&\'()*+-./:;<=>?^_{}~"
        const numbersString = "0123456789"
        const lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        let symbolsForUse = ''
         symbolsForUse = (isNumbersChecked ? numbersString : "")
        +(isSymbolsChecked ? symbolsString : "")
        +(isLettersChecked ? lettersString : "")

        if (symbolsForUse) {
            for (let i = 0; i < length; i++) {
                const random = randomizer(symbolsForUse.length)
                result = `${result}${symbolsForUse[random]}`
            }
            passwordTag.innerText = result
            lengthTag.style.border = "1px solid #000"
            errorTag.innerText = ""
            copyBtn.style.display = "inline"
        }else {
            passwordTag.innerText = ""
            errorTag.innerText = "You should select something"
            copyBtn.style.display = "none"
        }
    }else {
        passwordTag.innerText = ""
        lengthTag.style.border = "1px solid red"
        errorTag.innerText = "Please check input length"
        copyBtn.style.display = "none"
    }
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(result)
})

