let num1 = 52,
  num2 = 10;
let gcd = 1;

// Brute Force Approach
for (let i = Math.min(num1, num2); i >= 1; i--) {
  // i = 10 ; i >=1; i--
  // 52%10 === 0 && 10%10 === 0  false
  // 52%9 === 0 && 10%9 === 0 false
  // 52%8 === 0 && 10%8 === 0 false
  // 52%7 === 0 && 10%7 === 0 false
  // 52%6 === 0 && 10%6 === 0 false
  // 52%5 === 0 && 10%5 === 0 false
  // 52%4 === 0 && 10%4 === 0 false
  // 52%3 === 0 && 10%3 === 0 false
  // 52%2 === 0 && 10%2 === 0 true

  if (num1 % i === 0 && num2 % i === 0) {
    gcd = i;
    break;
  }
}
// console.log(gcd);

// Time Complexity - O(n)

// Optimal Approach
// Euclidean Algo -
// gcd(a, b) = gcd(a-b, b) where a>b
// gcd(52, 10) = gcd(42, 10) = gcd(32, 10) = gcd(22, 10) = gcd(12, 10) = gcd(2, 10)
// gcd(10, 2) = gcd(8, 2) = gcd(6, 2) = gcd(4, 2) = gcd(2, 2) = gcd(0, 2) = 2
// so a-b will happen till its value becomes 0 and it will get swap with b when necessary
// this can be written in other way
// gcd(a, b) = gcd(b, a%b) where a>b
// gcd(52, 10) = gcd(10, 52%10) = gcd(10, 2) = gcd(2, 10%2) = gcd(2, 0) = 2
let a = 40,
  b = 20;
while (a > 0 && b > 0) {
  // 52 > 0 && 10 > 0            2>0 && 10>0
  if (a > b) a = a % b; // 52 > 10  a = 52%10 = 2       2>10
  else b = b % a; //                             b=10%2 = 0
}
if (a === 0) console.log(b);
else console.log(a);

// Time Complexity - O(logɸmin(a,b)), where ɸ is 1.61 (this phi value is varying as the base is dependent on given numbers)
