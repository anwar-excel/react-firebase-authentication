import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function App() {
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })

  }
  const handleRegistration = event => {
    console.log('clicked');
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="" />
        <br />
        <br />
        <input type="submit" value="Registration" />
      </form>
      <br /><br /><br />
      <div>---------------------------</div>
      <br /><br /><br />
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
