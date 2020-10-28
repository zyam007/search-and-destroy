'use strict';
//no to use slice, should pass indexes as args to function and keep track of start/end
// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1 || array.length === 0) {
    if (array[0] === target) return true;
    return false;
  }
  let halfPoint = Math.floor(array.length / 2);
  let halfNum = array[halfPoint];

  if (halfNum === target) {
    return true;
  } else {
    if (target < halfNum) {
      return binarySearch(array.slice(0, halfPoint), target);
    }
    if (target > halfNum) {
      return binarySearch(array.slice(halfPoint + 1), target);
    }
  }
};

//[1,3,4,5,10,15,20,22,23,98,1000] //11 elemtns
//target 10

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
