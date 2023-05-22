import Container from 'react-bootstrap/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {User} from './User'
import { Button } from '@mui/material';
import { Home} from './Home'


import { Routes, Route, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';
import { UserView } from './UserView';
import { EditUser } from './EditUser';
import { Adduser } from './Adduser';

export function Dashbord(){
  const navigate = useNavigate();

  return(
    <div>

<AppBar position="static">
    <Toolbar disableGutters>
      <Button color='inherit' onClick={()=>navigate("/")} >Home</Button>
      <Button color='inherit' onClick={()=>navigate("/user")} >Users</Button>
      <Button color='inherit' onClick={()=>navigate("/Adduser")} >Add User</Button>
      
     {/*  <Button color='inherit'  >Home</Button>
      <Button color='inherit' onClick={()=>navigate("/user")} >Users</Button> */}

    </Toolbar>
    </AppBar>

      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User />}/>
      <Route path='/user/:id' element={<UserView/>}/>
      <Route path='/user/edit/:id' element={<EditUser/>}/>
      <Route path="/Adduser" element={<Adduser />}/>
      
      </Routes>
    
        </div>
  )
}