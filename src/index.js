module.exports = function reverse(n) {
    let regularNumber = n < 0 ? n * -1 : n;
    let revNum = 0;
    let lastDigit;

    while (regularNumber !== 0) {
        lastDigit = regularNumber % 10;
        revNum = revNum * 10 + lastDigit;
        regularNumber = ~~(regularNumber / 10);
    }

    return revNum;
};
