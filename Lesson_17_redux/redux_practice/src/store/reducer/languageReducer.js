const defaulteState = [];

const ADD_CARD = 'ADD_CARD';
const CHANGE_CARD = 'CHANGE_CARD';

export const addCard = (payload) => ({type: ADD_CARD, payload});

export const changeCard = (payload) => ({type: CHANGE_CARD, payload})

export const languageReducer = (state = defaulteState, action) => {
  if(action.type === 'ADD_CARD'){
    return [...state, {
      ...action.payload, // ru, en
      id: Date.now(),
      type: 'ru'
    }]
  } else if (action.type === 'CHANGE_CARD') {
    return state.map(el => {
      if(el.id === action.payload){
        el.type = el.type === 'ru' ? 'en' : 'ru'
      }
      return el
    })
  }else {
    return state
  }
}
