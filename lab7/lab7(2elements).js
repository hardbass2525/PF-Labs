const removeElements = (array, ...items) => {
  for (const item of items) {
   const index = array.indexOf(item);
   if (index !== -1) array.splice(index, 1);
  }
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);
// Результат: [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);
// Результат: ['Beijing', 'Saratov']