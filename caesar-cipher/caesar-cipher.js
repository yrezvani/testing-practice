function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    shift = shift % 26;
    if (shift < 0) {
      shift += 26; 
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
  
      if (index === -1) {
        result += char;
      } else {
        let newIndex = (index + shift) % 26;
        const newChar = alphabet[newIndex];
        result += isUpperCase ? newChar.toUpperCase() : newChar;
      }
    }
  
    return result;
  }

module.exports = caesarCipher