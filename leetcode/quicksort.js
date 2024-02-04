const partition = (arr, low, high) => {
  let pivot = arr[high];
  let prev = low - 1;
  for (let index = low; index < high; index++) {
    if (arr[index] < pivot) {
      prev++;
      [arr[index], arr[prev]] = [arr[prev], arr[index]];
    }
  }
  prev++;
  [arr[high], arr[prev]] = [arr[prev], arr[high]];
  return prev;
};

const quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let pi = partition(arr, low, high);
  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
};

const arr = [2, 7, 4, 3, 1, 6, 7, 8, 6];

quickSort(arr, 0, arr.length - 1);
console.log(arr.join(' '));
