//Задан массив из массивов, вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность). 
//написать filter, который формирует оставляет только активных пользователей. 
//Добавить map, который преобразует вложенные массивы в строки. 


let arr = [
  ['Максим', 'Грибов', true], 
  ['Антон', 'Куликов', true], 
  ['Светлана', 'Иванова', false], 
  ['Ольга', 'Петрова', true], 
  ['Сидр', 'Сидоров', false]
]

// после .filter
let arr_after_filter = [
  ['Максим', 'Грибов', true], 
  ['Антон', 'Куликов', true], 
  ['Ольга', 'Петрова', true], 
]

// после .map
let arr_after_map = ['Максим Грибов', 'Антон Куликов', 'Ольга Петрова']
