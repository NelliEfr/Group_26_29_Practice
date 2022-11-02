import { useState } from 'react'
import '../../style.css'
import Modal from "../Modal";
import { Link } from 'react-router-dom'

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <Link to='/registration_form'>
        <button onClick={() => setModalActive(true)}>Open modal window</button>
      </Link>

      <Modal active={modalActive} setActive={setModalActive} /> 
    </div>
  );
}

export default App;
