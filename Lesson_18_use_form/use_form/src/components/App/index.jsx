import FormItem from "../FormItem";
import '../../style.css'

function App() {
  return (
    <div>
      <FormItem 
        title={'Registration'}
        button={{submit: 'Registration', redirect: 'Login'}}
        infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
        formType={'registration'}
      />

      <FormItem 
        title={'Login'}
        button={{submit: 'Login', redirect: 'Registration'}}
        infoText={'Restore password'}
        formType={'registration'}
      />  

    </div>
  );
}

export default App;
