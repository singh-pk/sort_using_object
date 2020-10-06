function sort(arr) {
  let sortResult = {};
  let i = arr.length - 1;
  while (i >= 0) {
    sortResult[arr[i]] = sortResult[arr[i]] + 1 || 1;
    arr.pop();
    i--;
  }
  for (let j in sortResult) {
    while (sortResult[j] > 1) {
      arr.push(parseInt(j));
      sortResult[j]--;
    }
    arr.push(parseInt(j));
    delete sortResult[j];
  }
  return arr;
}

// console.log(sort([1, 18, 2, 200000, 18]));
