import { Button, TextField, useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { student } from './data'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const EditUser = () => {
const [user, setUser] = useState(null)
const {id} = useParams()

useEffect(()=>{
fetch(`${student}/${id}`,{method:"GET"})
.then((res)=> res.json())
.then((res)=> setUser(res))
},[])
  return (
    <div>
        {user? <Editform user= {user}/> : "User Detail is loading"}
    </div>
  )
}


export const Editform = ({user})=>{
    const [pic, setPic] = useState(user.image)
    const [name, serName] = useState(user.name)
    const [id, setId] = useState(user.id)
    const [age, setAge] = useState(user.age)
    const [mobile, setMobile] = useState(user.mobile)
    const [email, setEmail] = useState(user.email)
    const [location, setLocation] = useState(user.location)
    const navigate = useNavigate()
    return(
        <div className='Edit-container' >
            <div>
<img className='edit-img' src='https://media.istockphoto.com/id/1302958092/photo/change-arrow-with-smaller-but-many-obstacles.jpg?s=612x612&w=0&k=20&c=rNJcPII0tvmX2bFS-hZPSPmeirHGiDMgJqLe6UDUhjM='/>
            </div>
<div className='user-put'>
<TextField id="outlined-basic" label="Profile Pic" variant="outlined" value={pic} 
onChange={(e)=>setPic(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
             onChange={(e)=>serName(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="Id" variant="outlined" value={id} 
            onChange={(e)=>setId(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Age" variant="outlined" value={age}  
            onChange={(e)=>setAge(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="Mobile No" variant="outlined" value={mobile} 
            onChange={(e)=>setMobile(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} 
             onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="Location" variant="outlined" value={location}
              onChange={(e)=>setLocation(e.target.value)}/><br></br>
            <Button  variant="outlined"  size="large"
            onClick={()=>{navigate("/user")
             const updateUser = {
                pic:pic,
                name:name,
                age: age,
                id:id,
                mobile:mobile,
                email:email,
                location:location
             }
             fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${user.id}`,{method: "PUT",
     body: JSON.stringify(updateUser),
     headers:{"Content-Type": "application/json"}
  })
  .then((data)=>data.json())
navigate("/user")
            }}
            >Save</Button><br></br>
            <Button color='success' variant="outlined" onClick={()=> navigate(-1)}><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/></Button>
</div>
        </div>
    )
}