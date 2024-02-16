# Problem: 104. Maximum Depth of Binary Tree

## Problem Link:

[104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

## Problem Description

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Solutions

There can be two approaches to solve this problem which as listed below.

### 1. Solution Using Recursion

#### Approach Explanation

- We use recursion to traverse the binary tree.
- At each step, we find the depth of the left and right subtrees.
- The maximum depth of the current node is the maximum of the depths of its left and right subtrees, plus one (for the current node itself).

#### Code

[104. Maximum Depth of Binary Tree](./104-maximum-depth-of-binary-tree-using-recursion.js)

### 2. Solution Using BFS

#### Approach Explanation

- We use a queue to perform a level-order traversal of the binary tree.
- We start by adding the root node to the queue.
- At each level, we remove all nodes from the queue and add their children to the queue.
- The maximum depth is equal to the number of levels in the tree.

#### Code

Coming soon
<!-- [104. Maximum Depth of Binary Tree](./104-maximum-depth-of-binary-tree-using-bfs.js) -->

## Complexity Analysis

Both solutions have a time complexity of O(n), where n is the number of nodes in the binary tree. The space complexity is O(h), where h is the height of the binary tree, for the recursive solution and O(n) for the BFS solution, considering the worst-case scenario where the tree is completely unbalanced.