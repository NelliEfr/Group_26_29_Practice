const defaulteState = [];

const ADD_CARD = 'ADD_CARD';
const CHANGE_CARD = 'CHANGE_CARD';

export const addCard = (payload) => ({type: ADD_CARD, payload});

export const languageReducer = (state = defaulteState, action) => {
  if(action.type === 'ADD_CARD'){
    return [...state, {
      ...action.payload, // ru, en
      id: Date.now(),
      type: 'en'
    }]
  } else {
    return state
  }
}
