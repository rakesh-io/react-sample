import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function () {
  const params = useParams();
  const userId = params.userId;
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/users/getUserById/' + userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  const goToHome = () => {
    navigate("/")
  }

  return user.id ? (
    <>
    <div>
      <img src={user.image} width={150} height={150} />
      <h4>Name : {user.name}</h4>
      <h4>email : {user.email}</h4>
    </div>
    <button onClick={goToHome}>Home</button></>
  ) : (
    <h1>Not found</h1>
  );
}
