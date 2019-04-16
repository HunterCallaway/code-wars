// Sum Numbers
function sum (numbers) {
    //Test to see if the array is undefined or empty.
    if (numbers === undefined || numbers.length === 0) {
    return 0;
    } 
    //If there are numbers in the array, run the following code.
    else {
    return numbers.reduce((a,b) => {
    return a + b
  })
  }
}
