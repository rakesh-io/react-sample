import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function () {
  const params = useParams();
  const userId = params.userId;
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/getUserById/' + userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  return user.id ? (
    <div>
      <img src={user.image} width={150} height={150} />
      <h4>Name : {user.name}</h4>
      <h4>email : {user.email}</h4>
    </div>
  ) : (
    <h1>Not found</h1>
  );
}
