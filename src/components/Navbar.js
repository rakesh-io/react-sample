import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';

export default function () {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const signIn = () => {
    localStorage.setItem('token', 'example');
    setIsSignedIn(true);
  };
  const signOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
  };
  return (
    <nav>
      <Link to='/'>Home</Link> | <Link to='/fruits'>Fruits</Link> |<Link to='/vegetables'>Vegetables</Link> |{' '}
      <Link to='/sample-form'>Sample Form</Link> | <Link to='/users'>Users</Link> |{' '}
      <Link to='/buttons-problem'>Buttons Problem</Link>
      {!isSignedIn ? (
        <button type='button' onClick={signIn}>
          Sign In
        </button>
      ) : (
        <button type='button' onClick={signOut}>
          Sign Out
        </button>
      )}
    </nav>
  );
}
