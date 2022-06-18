function hasTargetSum(array, target) {
  // Write your algorithm here
  ///1 step
  const seenNumbers = {}
  for (const number of array) {
    /// n steps
    const complement = target - number
    if(seenNumbers[complement]) {
      /// n steps
      return true
    }
    /// n steps
    seenNumbers[number] = true
  }

  /// 1 step
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(3n + 2) which can be simplified to 0(n)

*/

/* 
  Add your pseudocode here
  Create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (eg. if current number is 2 and target is 5 then complementary number is 3)
    check if any keys in our object is complementary to the current number.
      if so return true
    save current number as the key on our object so we can check it later against other numbers.
  if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");

  //Negative numbers
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3))

  console.log("");

  //Multiple pairs
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5))

  console.log("");

  //Single Numbers
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4))



}

module.exports = hasTargetSum;
