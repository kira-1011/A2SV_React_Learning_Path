const _ = require("lodash");
let arr: number[] = [1,2,3,4];

// chunk
const chunk = _.chunk(arr, 2);
console.log(chunk)

// compact
arr = [0, 1, 2]
const compact = _.compact(arr)
console.log(compact)

// sort
arr = [4, 2, 1, 0]
const sorted = _.sortBy(arr)
console.log(sorted)

// filter
arr = [0,1,2,3,4]
const filtered = _.filter(arr, (e: number) => e % 2 == 0);
console.log(filtered)

// find max
arr = [0,1,2,3,4]
const max_: number = _.max(arr);
console.log(max_)
