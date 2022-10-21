const defaulteState = [];
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addProduct = (payload) => ({type: ADD_PRODUCT, payload});
export const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload});

export const productReducer = (state = defaulteState, action) => {
  if(action.type === 'ADD_PRODUCT'){
    return [...state, {
      ...action.payload,
      id: Date.now()
    }]
  }  else {
    return state
  }
}


