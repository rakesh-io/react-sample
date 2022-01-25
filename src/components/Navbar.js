import { Link } from 'react-router-dom';

export default function () {
  return (
    <nav>
      <Link to='/'>Home</Link> | <Link to='/fruits'>Fruits</Link> |<Link to='/vegetables'>Vegetables</Link> |{' '}
      <Link to='/sample-form'>Sample Form</Link> | <Link to='/users'>Users</Link> |{' '}
      <Link to='/buttons-problem'>Buttons Problem</Link>
    </nav>
  );
}
