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
        formType={'login'}
      />  

      <FormItem 
        title={'Reset password'}
        button={{submit: 'Reset'}}
        infoText={'The temporary password is valid for 24 hours.'}
        formType={'reset_password'}
        infoTextAdditional={'To receive a temporary password, you must enter the email address you provided during registration.'}
      />  

    </div>
  );
}

export default App;
