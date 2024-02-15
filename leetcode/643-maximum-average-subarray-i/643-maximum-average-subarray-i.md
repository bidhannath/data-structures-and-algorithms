## Problem Link:
[643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i)

## Solution Link:
[643. Maximum Average Subarray I Solution](./643-maximum-average-subarray-i.js)


## Discussion

### Approach Explanation
The problem "Maximum Average Subarray I" can be solved efficiently using a sliding window technique. Here's a brief explanation of the approach:

1. **Sliding Window Technique**: We can solve this problem efficiently by using a sliding window approach. We'll maintain a window of fixed size `k` and slide it through the array to calculate the maximum average of subarrays of length `k`.

2. **Initialization**: Initialize two variables `maxSum` and `currentSum` to store the maximum sum of subarrays and the sum of the current window, respectively.

3. **Sliding Window**: Iterate through the array from index `0` to `n - k`, where `n` is the length of the array. At each iteration:
    - Add the current element to the `currentSum`.
    - If the size of the window is greater than `k`, subtract the element at the beginning of the window from `currentSum`.
    - Update `maxSum` if `currentSum` is greater than `maxSum`.

4. **Average Calculation**: After iterating through the array, return `maxSum / k` as the maximum average of subarrays of length `k`.

### Optimization
The average calculation is done at the end in the return statement. This reduces the extra calculations at each iteration and only `maxSum` is considered while comparison.

By employing this approach, we can efficiently solve the problem with a time complexity of O(n), where n is the length of the input array.
