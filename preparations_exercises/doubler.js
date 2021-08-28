function doubler(number) {
  return console.log(number * 2);
}


doubler(5);
doubler(10);
doubler(15);


// adding recursion to the code

function doubler1(number) {
  console.log(number);

  if (number <= 50) {
    doubler1(number * 2);
  }
}

doubler1(5);

