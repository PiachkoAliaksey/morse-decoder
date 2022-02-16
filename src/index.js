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
    const decItem = item => {
        let morsI = '';
        for (let i = 0; i < item.length; i += 2) {
            const elem = item.slice(i, i + 2);
            if (elem == '00') continue;
          if(elem=='10'){
            morsI +='.';
          }else{
            morsI +='-';
          }
          
        }
        return MORSE_TABLE[morsI];
    };

    let strConvers = '';
    for (let i = 0; i < expr.length; i += 10) {
        let item  =  expr.slice(i, i + 10);
      if(item=='**********'){
        strConvers +=' ';
      }else{
        strConvers += decItem(item);
      }

        
    }
    return strConvers;
}

module.exports = {
    decode
}