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
    let acc = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < arr.length; i++) {
      if (acc !== undefined) {
        acc = callback(acc, arr[i], i, arr)
      } else {
        acc = arr[i]
      }
    }
  return acc
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

const mapFunc = (arr) => {
  return arr.map(item => item * 2)
}

console.log(mapFunc([1, 2, 3, 4, 5]))


const foodItems = [
  {
    name: 'pizza',
    amount: 5
  },
  {
    name: 'burger',
    amount: 10
  },
  {
    name: 'sushi',
    amount: 20
  }
]

const reduceFunc = (arr) => {
  return arr.reduce((acc, item) => acc + item.amount, 0)
}

console.log(reduceFunc(foodItems))

const filterFunc = (arr) => {
  return arr.filter(arr => arr > 10)
}

console.log(filterFunc([1, 7, 8, 9, 10, 14, 19, 22]))





