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
  }  else if(action.type === 'DELETE_PRODUCT') {
    return state.filter(el => el.id !== action.payload)
  } else {
    return state
  }
}


