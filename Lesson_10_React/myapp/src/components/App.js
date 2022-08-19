import Worker from "./Worker";
import { workers } from '../data/workers'

function App() {
  const in_office_workers = workers.filter(worker => worker.in_office)

  return (
    <div>
     {
      in_office_workers.map(worker => <Worker key={worker.id} {...worker}/> )
     }
    </div>
  );
}

export default App;


// worker.in_office / worker.in_office === true
