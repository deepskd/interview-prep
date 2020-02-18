const twoSum = (nums, target) => {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    //Given the target and a selected integer, find the complement
    let complement = target - nums[i];
    //check if the complement is already in the map
    if (numsMap.get(complement) >= -1) {
      return [i, numsMap.get(complement)];
    }
    //store the number and the index where it was found in a map
    numsMap.set(nums[i], i);
  }
};

module.exports = twoSum;
