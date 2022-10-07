import Nav from '../Nav'
import ConfigurationsPage from '../../pages/ConfigurationsPage'
import TeamsPage from '../../pages/TeamsPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/configurations' element={ <ConfigurationsPage />} />
        <Route path='/teams' element={ <TeamsPage />} />
      </Routes>
    </div>
  );
}

export default App;
