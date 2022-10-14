export const getProducts = (callbackFunc) => {
  fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callbackFunc(json.products))
}

export const addProduct = (body, callbackFunc) => {
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then(json => callbackFunc(json))
}
