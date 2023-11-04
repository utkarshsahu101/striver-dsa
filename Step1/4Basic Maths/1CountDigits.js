let n = 7789;

// Approach 1
let counter = 0;
while (n > 0) {
  let lastDigit = n % 10;
  counter++;
  n = Math.floor(n / 10);
}
console.log("counter", counter);
// Time Complexity - O(n)

// count number of digits
// Approach 2
let n1 = 7789;
let digits = Math.floor(Math.log10(n1) + 1);
console.log(digits);
// Time Complexity - O(log n)
