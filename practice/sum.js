console.log("hello world");

function sum(n) {
  // TODO:請從 1+2+3+....+param
  // param:6 => 1 + 2 + 3 + 4 + 5 + 6
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += 1;
  }
  return result;
}
console.log(sum(6)); //21
console.log(sum(3)); //6
console.log(sum(10)); //55
