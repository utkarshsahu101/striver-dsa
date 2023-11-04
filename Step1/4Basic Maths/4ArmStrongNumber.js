// Armstrong Number - summation of all digits raised to the power of numofdigits is same as given number
let n = 370;
let duplicateN = n;
let sum = 0;
let digits = Math.floor(Math.log10(n) + 1);
while (n > 0) {
  let lastDigit = n % 10;
  n = Math.floor(n / 10);
  //   sum = sum + Math.pow(lastDigit, digits);
  sum = sum + lastDigit ** digits;
}
if (sum === duplicateN) console.log("Armstrong");
else console.log("Not Armstrong");
