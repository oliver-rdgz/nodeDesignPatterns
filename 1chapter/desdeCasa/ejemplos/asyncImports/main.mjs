// main.js
const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl'] // (1)
const selectedLanguage = process.argv[2] // (2)
if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) { // (3)
    console.error('The specified language is not supported')
    process.exit(1)
}

const translationModule = `./strings-${selectedLanguage}.mjs` // (4)
import(translationModule) // (5)
.then((strings) => { // (6)
console.log(strings.HELLO)
})