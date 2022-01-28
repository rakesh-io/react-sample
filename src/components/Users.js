import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/users/getUsers').then((result) => {
      console.log(result);
      setData(result.data);
    });
  }, []);

  return (
    <ol>
      {data.map((user) => (
        <li key={user.id}>
          <Link to={'/users/' + user.id}>{user.name}</Link>
        </li>
      ))}
      <Outlet />
    </ol>
  );
}
