const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = expr.replace(/(\*{10})/g, ',space,');

    const words = space.split(',')

    const letters = []

    words.forEach(word => {
        for (let i = 0; i < word.length; i += 10) {
            letters.push(word.slice(i, i + 10));
        }
    })

    const formatted = letters.map(letter => {
        const res = letter.replace(/space/g, 'space').replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
        return res
    })

    const decode = formatted.map(item => {
        return MORSE_TABLE[item] ? MORSE_TABLE[item] : ' '
    })

    return decode.join('')
}


module.exports = {
    decode
}

