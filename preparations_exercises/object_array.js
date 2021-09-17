let myArray = {
  0: 'adddd',
  1: 'bfgtydfhhh',
  2: 'cdftyuouooo3344',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i].length);
}

// Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.