import { Button } from '@mui/material';
import { useParams , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {API} from './Api'

export function UserDetail() {
  const { userId } = useParams();
  // const book = bookList[bookid];
  const navigate = useNavigate()
  const [user , setUser] = useState({})

  useEffect(() =>{
    fetch(`${API}/books/${userId}`,{
      method: "GET"
    } )
        .then((data) => data.json()).then((bkl) => {setUser(bkl)})
  },[])


  return (
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
  </div>
  );
}
