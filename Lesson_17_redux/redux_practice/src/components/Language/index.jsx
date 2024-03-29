import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, changeCard } from '../../store/reducer/languageReducer'
import LanguageCard from '../LanguageCard';

export default function Language() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.language);

  const submit = event => {
    event.preventDefault();
    const { rus, eng } = event.target;
    dispatch(addCard({
      ru: rus.value,
      en: eng.value
    }));
    rus.value = '';
    eng.value = '';
  }

  const change = (id) => dispatch(changeCard(id));

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' name='rus' placeholder='RUS' />
        <input type='text' name='eng' placeholder='ENG' />
        <button>Add word</button>
      </form>

      <div>
        {
          state.map(el => <LanguageCard key={el.id} {...el} change={change} />)
        }
      </div>
    </div>
  )
}
