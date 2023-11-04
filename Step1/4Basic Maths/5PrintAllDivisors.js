let n = 36;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    // console.log(i);
  }
}
//  Time Complexity - O(n)

// Another Approach
let list = [];
// O(sqrt(n))
// for (let i = 1; i <= Math.sqrt(n); i++) {
for (let i = 1; i * i <= n; i++) {
  if (n % i === 0) {
    list.push(i);
    if (n / i !== i) {
      list.push(n / i);
    }
  }
}
// O(noOfFactors + log(noOfFactors))
list.sort((a, b) => a - b);
//  Time Complexity - O(sqrt(n)) + O(noOfFactors + log(noOfFactors))
list.forEach((e) => console.log(e));
