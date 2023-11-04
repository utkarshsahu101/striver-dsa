let n = 13;

// O(sqrt(n))
let counter = 0;
for (let i = 1; i * i <= n; i++) {
  if (n % i === 0) {
    counter++;
    if (n / i !== i) {
      counter++;
    }
  }
}
if (counter === 2) console.log("Prime");
else console.log("not prime");
