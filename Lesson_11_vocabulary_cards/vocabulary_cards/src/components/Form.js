import React from 'react'

export default function Form({add}) {
  const inputStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid green',
    width: '200px'
  }

  const btnStyle = {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '7px',
    border: '1px solid green',
    width: '70px'
  }

  const submit = (event) => {
    event.preventDefault();
    const { rus, eng } = event.target;
    console.log(rus.value, eng.value);
    add(eng.value, rus.value);
    rus.value = '';
    eng.value = '';
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' placeholder='Russian' name='rus' style={inputStyle}/>
        <input type='text' placeholder='English' name='eng' style={inputStyle}/>
        <button style={btnStyle}>Add</button>
      </form>
    </div>
  )
}
