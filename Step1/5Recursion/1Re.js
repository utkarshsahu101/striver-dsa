// Recursion - A function calling itself until it will met the specified condition

// Base Case - Specified condition by which recursion breaks

// Stack Overflow / Stack Space - till the point of waiting the previous function

// Recursion Tree
//      f()
//     /
//    f()
//   /
// f()

let count = 0;
const f = () => {
  if (count === 3) return;
  console.log(count);
  count++;
  f();
};
f();
