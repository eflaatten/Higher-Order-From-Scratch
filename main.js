// .map()
const map = (arr, callback) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], i, arr));
    }
  return newArr;
}

// .reduce()
const reduce = (arr, callback, initialValue) => {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < arr.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback(accumulator, arr[i], i, arr);
      } else {
        accumulator = arr[i];
      }
    }
    return accumulator;
}

// .filter()
const filter = (arr, callback) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}


// Using custom functions

// using custom .map() 

const arr = [1, 2, 3, 4, 5]

const newArr = map(arr, (item) => {
  return item * 2;
})

console.log(newArr) // [2, 4, 6, 8, 10] 

// using custom .reduce()
const arr2 = [1, 2, 3, 4, 5]

const sum = reduce(arr2, (acc, item) => {
  return acc + item;
})

console.log(sum) // 15

// using custom .filter()
const arr3 = [1, 2, 3, 4, 5]

const filteredArr = filter(arr3, (item) => {
  return item > 2;
})

console.log(filteredArr) // [3, 4, 5]