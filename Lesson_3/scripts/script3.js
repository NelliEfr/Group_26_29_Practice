function a(num){
  if(num >= 10) {
    return (`число ${num} больше 10`)
  } else {
    return (`число ${num} меньше 10`)
  }
}

function a2(num){
  return (num >= 10 ? `число ${num} больше 10` : `число ${num} меньше 10`)
}

// 1 ? 2 : 3

// 1 - условие
// 2 - что произойдет, если условие верно
// 3 - что произойдет, если условие неверно

console.log(a2(3));
console.log(a2(23));



//вариант 1
function calculate(sum) {
    sum(10, 2)
}

function sum(a, b){
  return a + b
}






function num(a){
  return a ** 2
}

num(5);



