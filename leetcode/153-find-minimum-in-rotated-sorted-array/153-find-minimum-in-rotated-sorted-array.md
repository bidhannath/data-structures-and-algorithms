# Problem: 153. Find Minimum in Rotated Sorted Array

## Problem Link:

[153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

## Problem Description

Suppose an array of distinct integers `nums` sorted in ascending order is rotated at some pivot unknown to you beforehand. You are given the rotated array, and you must return the minimum element of this array. The algorithm must run in `O(log n)` time.

## Intuition

The array is originally sorted in ascending order but rotated at some pivot.  
In a fully sorted array, the minimum element is at index `0`. After rotation, the minimum becomes the **pivot point** where the sorted order breaks.

Instead of scanning the entire array (which would take O(n)), we can use **binary search** because:
- At least one half of the array is always sorted.
- By comparing `nums[mid]` with `nums[right]`, we can determine which side contains the minimum.

## Approach

We apply a modified binary search:

1. Initialize two pointers:
   - `left = 0`
   - `right = nums.length - 1`

2. While `left < right`:
   - Compute `mid`.
   - If `nums[mid] > nums[right]`, it means the minimum lies in the **right half**, so move `left = mid + 1`.
   - Otherwise, the minimum lies in the **left half (including mid)**, so move `right = mid`.

3. When the loop ends, `left` will point to the minimum element.

This works because we continuously discard the sorted half that cannot contain the pivot.

## Complexity

- Time complexity:  
  $$O(\log n)$$  
  The search space is halved in each iteration.

- Space complexity:  
  $$O(1)$$  
  Only constant extra space is used.

## Code
[View implementation in JavaScript](./153-find-minimum-in-rotated-sorted-array.js)

