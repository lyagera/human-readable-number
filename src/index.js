let numberText = {
    ones: [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ],
    tens: [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ],
    hundreds: [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ],
};
module.exports = function toReadable(number) {
    //     };
    // function numbersToWords(number) {
    let x = Math.floor(number / 100),
        y = Math.floor(number / 10) % 10,
        z = number % 10;
    console.log(y);
    console.log(z);
    return x > 0 && z === 0 && y === 0
        ? `${numberText.hundreds[x]}`
        : (x > 0 ? `${numberText.hundreds[x]} ` : "") +
              (y >= 2
                  ? z === 0
                      ? `${numberText.tens[y]}`
                      : `${numberText.tens[y]} ${numberText.ones[z]}`
                  : numberText.ones[10 * y + z]);
};

// console.log(numbersToWords(20));
