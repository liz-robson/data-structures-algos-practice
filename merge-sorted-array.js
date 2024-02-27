// Leetcode Challenge 88: Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Two pointers
// Arrays
// Sort

var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort(function (a, b) {
    return a - b;
  });

  // Remove 0s - find index of 0 and remove it
  let zeroIndex = nums1.indexOf(0);
  while (zeroIndex !== -1) {
    nums1.splice(zeroIndex, 1);
    zeroIndex = nums1.indexOf(0);
  }
  return nums1;
};
