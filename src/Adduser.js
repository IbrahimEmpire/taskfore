import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const Adduser = () => {
    const navigate = useNavigate()
    const [pic, setPic] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [age, setAge] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
  return (
    <div className='user-put'>
        <TextField id="outlined-basic" label="Profile Image" variant="outlined" onChange={(e)=> setPic(e.target.value)}/><br></br>
        <TextField id="outlined-basic" label="Name" variant="outlined"onChange={(e)=> setName(e.target.value)} /><br></br>
        <TextField id="outlined-basic" label="Id" variant="outlined" onChange={(e)=> setId(e.target.value)} /><br></br>
        <TextField id="outlined-basic" label="Age" variant="outlined" onChange={(e)=> setAge(e.target.value)} /><br></br>
        <TextField id="outlined-basic" label="Mobile No" variant="outlined"  onChange={(e)=> setMobile(e.target.value)}/><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setEmail(e.target.value)} /><br></br>
        <TextField id="outlined-basic" label="Location" variant="outlined" onChange={(e)=> setLocation(e.target.value)} /><br></br>
        <Button variant="outlined"
        onClick={()=>{
            const  newUser ={
                pic:pic,
                name:name,
                id:id,
                age:age,
                mobile:mobile,
                email:email,
                location:location
            }
            fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user`,{
                method:"POST",
                body: JSON.stringify(newUser),
                headers:{"Content-Type": "application/json"}
            }, 
            )
            .then((res)=> res.json())
            .then(()=> navigate("/user"))
        }}

        >Add User</Button><br></br>
        <Button variant="outlined" onClick={()=> navigate(-1)}><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/></Button>
    </div>
  )
}
