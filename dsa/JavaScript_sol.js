function secondLargestUnique(nums) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of nums) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second === -Infinity ? -1 : second;
}

// Example run
console.log(secondLargestUnique([3, 5, 2, 5, 6, 6, 1])); // 5
console.log(secondLargestUnique([7, 7, 7]));             // -1
