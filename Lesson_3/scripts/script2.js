// сформировать массив, состоящий только из чисел, кончающихся на 7

let arr = [777, 12, 450, 7, 10000, 40, 17, 5, 978];

// вариант 1 - императивный (как)
let new_arr = [];
for (let i = 0; i < arr.length; i++){
  if (arr[i] % 10 === 7) {
    new_arr.push(arr[i])
  }
}

//вариант 2 - декларативный (что)
let new_arr2 = arr.filter(function(element){
  return element % 10 === 7
})

// console.log(new_arr2);

//вариант 3
let new_arr3 = [];
arr.forEach(function(element){
  if (element % 10 === 7){
    new_arr3.push(element)
  }
})

console.log(new_arr3);

