import '../../style.css'
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Navbar from "../Navbar";
import Services from '../Services';

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
