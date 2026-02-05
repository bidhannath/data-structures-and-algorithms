# Problem: 373. Find K Pairs with Smallest Sums

## Problem Link:

[373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums)

## Problem Description

You are given two integer arrays `nums1` and `nums2` sorted in non-decreasing order, and an integer `k`.

Define a pair `(u, v)` which consists of one element from `nums1` and one element from `nums2`.

Return the `k` pairs `(nums1[i], nums2[j])` with the smallest sums. Return the answer in any order.

## Solution

### Solution Using Min Heap with BFS-style Traversal

#### Approach Explanation

Both `nums1` and `nums2` are sorted in ascending order. If we imagine a matrix where each cell `(i, j)` represents the pair `(nums1[i], nums2[j])`, then:
- Each row and column is sorted by sum.
- The smallest sum starts at `(0, 0)`.

This structure suggests a **best-first search** approach:
- Always pick the smallest available pair.
- Gradually explore neighboring pairs with slightly larger sums.

A **min heap** allows us to efficiently retrieve the next smallest sum at each step.

We combine a **min heap** with **BFS-style traversal**:

1. Create a custom min heap where each entry stores `[sum, i, j]`
2. Push the initial pair `(0, 0)` into the heap.
3. Use a `visited` set to avoid pushing the same index pair multiple times.
4. While we still need more pairs and the heap is not empty:
   - Pop the smallest sum from the heap.
   - Add the corresponding pair to the result.
   - Push the right neighbor `(i, j + 1)` if valid and not visited.
   - Push the down neighbor `(i + 1, j)` if valid and not visited.
5. Stop when we collect `k` pairs.

This ensures we always expand the next smallest possible sum.

#### Code

[373. Find K Pairs with Smallest Sums](./373-find-k-pairs-with-smallest-sums.js)

## Complexity Analysis

**Time Complexity:** $O(k log k)$ - Each heap operation takes $O(log k)$ and we perform at most $k$ insertions and removals.

**Space Complexity:** $O(k)$ - The heap, visited set, and result array store at most $k$ elements.
