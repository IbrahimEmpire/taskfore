import { API } from './Api'
import { useState, useEffect } from 'react';
import {users} from './data.js'
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';




export function User() {

  const [user, setUser] = useState([]);
  const getDetail = () => {
      fetch(API,
          { method: "GET" })
          .then((data) => data.json())
          .then((res) => setUser(res));
  }

  const navigate = useNavigate();

  useEffect(() => getDetail(), [])


  
  return (
    <div className='carts'>
      {user.map((user)=>   

      <div className='profile-container'>
        <div className='img-con'>
          <img src={user.image} alt='profile image' />
        </div>
        <div>
          <h4>Name: {user.Name}</h4>
          <h5>Id: {user.id}</h5>
        </div>
        <div>
          <p> Age: {user.age}</p>
          <p>📱 Mobile No: {user.mobile}</p>
          <p>📧 Email: {user.email}</p>
          <p>🏠 Location: {user.location}</p>
        </div>
        <button>info</button>
      </div>
  )}
     </div>
  );
}

