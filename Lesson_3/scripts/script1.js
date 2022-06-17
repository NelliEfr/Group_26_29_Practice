//array.map - возвращает новый массив с результатом вызова функции для каждого элемента массива

//array.forEach - применяет функцию один раз к каждому элементу массива

//array.filter - возвращает новый массив cо всеми элементами, прошедшими проверку



//  вывести в консоль числа больше 50

let arr = [12, 450, 10000, 40, 5, 978];

// вариант 1
for (let i = 0; i < arr.length; i++){
  if (arr[i] > 50){
    console.log(arr[i])
  }
}

// вариант 2
arr.forEach(function(element){
  if(element > 50){
    console.log(element)
  }
})

// вариант 3
let new_arr = arr.filter(function(element){
  return (element > 50)
}) //отсортировали все числа больше 50

new_arr.forEach(function(element){
  console.log(element);
})



