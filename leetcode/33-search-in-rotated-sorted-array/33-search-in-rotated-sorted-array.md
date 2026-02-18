# Problem: 33. Search in Rotated Sorted Array

## Problem Link:

[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)

## Problem Description

Given the array `nums` which is sorted in ascending order and is rotated at an unknown pivot, and a target value, return the index of the target if it exists in the array. If it does not exist, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Solution

### Modified Binary Search Leveraging Sorted Half

#### Approach Explanation

The array is sorted but rotated at some unknown pivot. A normal binary search works only on fully sorted arrays, but here one portion of the array is always sorted.

At any midpoint, either:
- The left half is sorted, or
- The right half is sorted

We can use this property to determine which half is sorted and whether the target lies within that half. This allows us to safely discard the other half and continue the binary search.

The steps are:
1. Initialize two pointers:
   - `left = 0`
   - `right = nums.length - 1`
2. While `left <= right`:
   - Compute `mid`.
   - If `nums[mid]` equals the target, return `mid`.
3. Determine which half is sorted:
   - If `nums[left] <= nums[mid]`, then the left half is sorted:
     - If the target lies between `nums[left]` and `nums[mid]`, search the left half by moving `right`.
     - Otherwise, search the right half by moving `left`.
   - Otherwise, the right half is sorted:
     - If the target lies between `nums[mid]` and `nums[right]`, search the right half by moving `left`.
     - Otherwise, search the left half by moving `right`.
4. If the target is not found, return `-1`.

This works because at least one half is always sorted in a rotated sorted array.

#### Code

[33. Search in Rotated Sorted Array](./33-search-in-rotated-sorted-array.js)

## Complexity Analysis

**Time Complexity:**  $O(\log n)$  – The search space is halved in each iteration.

**Space Complexity:**  $O(1)$  – Only constant extra space is used.
