function checkValueInArray(array, key) {
  return array.includes(key);
}
function checkTwoDuplicateNumInArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}

//function checkTwoDuplicateNumInArray(array) {
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] === array[i - 1]) {
//      return true;
//    }
//  }
//  return false;
//}

const arr1 = [1, 2, 3, 4, 5];
const key1 = 2;
console.log(checkValueInArray(arr1, key1)); //true

const arr2 = [1, 2, 3, 4, 5];
const key2 = 7;
console.log(checkValueInArray(arr2, key2)); //false(такого ключа немає в масиві)

const arr3 = [9, 8, 7, 6, 5, 5];
console.log(checkTwoDuplicateNumInArray(arr3)); //true

const arr4 = [9, 8, 7, 8, 6, 5]; 
console.log(checkTwoDuplicateNumInArray(arr4)); //false(повторювані числа не задані поспіль)

const arr5= [];
console.log(checkTwoDuplicateNumInArray(arr5)); //false(пустий масив)
