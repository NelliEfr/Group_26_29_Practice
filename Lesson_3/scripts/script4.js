// Есть массив из строк. Вывести в консоль только слова, длиннее 10 символов.

let strings = ['hello', 'bye', 'good morning', 'good night', 'hi', 'good evening'];

// .forEach
strings.forEach(function(elem){
  if(elem.length >= 10){
    console.log(elem);
  }
})

//.filter
let new_arr = strings.filter(function(element){
  return (element.length >=10)
})

new_arr.forEach(function(elem){
  console.log(elem);
})

// console.log(new_arr);

//for - императивный способ
for (let i = 0; i < strings.length; i++) {
  if(strings[i].length >= 10){
    console.log(strings[i]);
  }
}
