import User from "./User";
import { data } from "../data/users";

function App() {

  const users_active = data.filter(user => user.active);

  return (
    <div>
      {/* {
        data.map(user => <User id={user.id} firstname={user.firstname} lastname={user.lastname} avatar={user.avatar} />)
      } */}

      {
        users_active.map(user => <User {...user} />)
      }
    </div>
  );
}

export default App;
