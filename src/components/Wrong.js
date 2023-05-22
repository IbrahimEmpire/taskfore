import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Wrong = () => {
    const navigate = useNavigate()
  return (
    <div className="hed">
        <Button color='primary' onClick={()=> navigate("/")}>Home</Button><Button  onClick={()=> navigate("/user")}>Users</Button>
<img className='wrong-img' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000'/>
    </div>
  )
}
