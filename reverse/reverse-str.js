function reverseStr (str) {
    const reversedStr = [];

    for (let i = str.length; i>= 0; i--) {
        reversedStr.push(str.charAt(i));
    }

    return reversedStr.join('');
}

module.exports = reverseStr