//write a function that takes two array as integers and returns a new array containing the common elements
//between the two arrays

//using object
function commonEle(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      obj[arr1[i]] = obj[arr1[i]] + 1;
    } else {
      obj[arr1[i]] = 1;
    }
  }
  let commonEle = [];
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      commonEle.push(arr2[i]);
    }
  }
  return commonEle;
}

console.log(commonEle([3, 2, 4, 1, 5], [10, 19, 5, 2]));


//step by step explanation of above approach
//1)Declare a function with two arrays in arguments
//2)iterate over the first or the second array and store the elements of the array in the object
//3)iterate over the next array check weather the next array has its elements stored in that
   //particular object if present rpush the particular elements inside the array
//4)return the commonEle arr