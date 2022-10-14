export const getProducts = (callbackFunc) => {
  fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callbackFunc(json.products))
}
