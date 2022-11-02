let arr = [
  {
    id: 1,
    amount: 5
  },
  {
    id: 2,
    amount: 15
  },
  {
    id: 3,
    amount: 37
  },
  {
    id: 4,
    amount: 3
  },
  {
    id: 5,
    amount: 9
  }
]

let max_amount = arr.reduce((accum, item) => accum > item.amount ? accum : item.amount, arr[0].amount);

console.log(max_amount);
