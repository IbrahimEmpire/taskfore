import Container from 'react-bootstrap/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {User} from './User'
import { Button } from '@mui/material';
import { Home} from './Home'
import { UserDetail } from './userDetails';

import { Routes, Route, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';

export function Dashbord(){
  const navigate = useNavigate();

  return(
    <div>

<AppBar position="static">
    <Toolbar disableGutters>
      <Button color='inherit' onClick={()=>navigate("/")} >Home</Button>
      <Button color='inherit' onClick={()=>navigate("/user")} >Users</Button>
      
     {/*  <Button color='inherit'  >Home</Button>
      <Button color='inherit' onClick={()=>navigate("/user")} >Users</Button> */}

    </Toolbar>
    </AppBar>
{/* 
<Navbar bg="success" variant="light">
        <Container>
        <Button> <Navbar.Brand  onClick={() => navigate("/")} href="#home">Home</Navbar.Brand></Button>
          <Nav className="me-auto">
           <Button> <Nav.Link onClick={() => navigate("/")} href="#home">Dashbord</Nav.Link></Button>
            
          </Nav>
        </Container>
      </Navbar> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User />}/>
      </Routes>
    
        </div>
  )
}