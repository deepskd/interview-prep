const twoSum = require('./twoSum');

test('finds index when numbers preset', () => {
  expect(twoSum([2, 7, 4, 5, 6], 9)).toStrictEqual([1, 0]);
});
