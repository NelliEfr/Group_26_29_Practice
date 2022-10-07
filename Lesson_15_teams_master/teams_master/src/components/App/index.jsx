import Nav from '../Nav'
import ConfigurationsPage from '../../pages/ConfigurationsPage'
import TeamsPage from '../../pages/TeamsPage'
import { Routes, Route } from 'react-router-dom'
import { Context } from '../../context'
import { useState } from 'react'

function App() {
  const [ teams, setTeams ] = useState([]);

  const addTeam = (value) => {
    setTeams([...teams, { value, label: value }])
  }

  return (
    <div>
      <Context.Provider value={{ teams, addTeam }}>
        <Nav />
        <Routes>
          <Route path='/configurations' element={ <ConfigurationsPage />} />
          <Route path='/teams' element={ <TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
