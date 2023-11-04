let n = 7789;
let reversedNum = 0;
while (n > 0) {
  let lastDigit = n % 10; // 9 8 7 7
  n = Math.floor(n / 10); // 778 77 7 0
  reversedNum = reversedNum * 10 + lastDigit; // 9 98 987 9877
}
console.log(reversedNum);
