export const getAllProducts = (callback) => {
  fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callback(json.products))
}

export const addProduct = (body, callback) => 
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(resp => resp.json())
  .then(json => callback(json))
