function fibonacci(position) {
  var n1 = 0;
  var n2 = 1;
  var sum;
  for(i = 0; i < position; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum
  }
  console.log(n1)
}

fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3
