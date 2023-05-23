
import { useState, useEffect } from 'react';
import {student} from './data.js'






export function User() {

  const [user, setUser] = useState([]);
 
const navigate = useNavigate()
  const getUser= ()=>{
    fetch(`${student}`,{method:"GET"})
    .then((res)=>res.json())
    .then((res)=> setUser(res))
  }
  useEffect(()=>{
    getUser()
    },[])

  const deleteUser =(id)=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${id}`, {method:"DELETE"})
    .then(()=> getUser())
  }


  
  return (
    <div className='carts'>
      {user.map((user, id)=>   

      <div className='profile-container' key={id}>
        <div >
          <img className='img-con' src={user.image} alt='profile image' />
        </div>
        <div>
          <h4>Name: {user.name}</h4>
          <h5>Id: {user.id}</h5>
        </div>
        <div>
          <p> Age: {user.age}</p>
          <p>📱 Mobile No: {user.mobile}</p>
          <p>📧 Email: {user.email}</p>
          <p>🏠 Location: {user.location}</p>
        </div>
        <button className='button view' onClick={()=> navigate(`/user/${user.id}`)} >View</button>
        <button className='button edit' onClick={()=> navigate(`/user/edit/${user.id}`)} >Edit</button>
        <button className='button del' onClick={()=> deleteUser(user.id)} >Delete</button>
      </div>
  )}
     </div>
  );
}

