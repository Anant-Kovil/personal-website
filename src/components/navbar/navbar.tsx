import { Link, useNavigate } from 'react-router-dom';
// import './navbar.scss';
import { Profile } from './profile';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResponsiveAppBar from "./navbarResponsive";

export const Navbar = () => {

  // const navigate = useNavigate();

  return (
    
    <div className="root">
      {/* <ButtonAppBar /> */}
      <ResponsiveAppBar />
      {/* <div className="navbarProfile" onClick={()=> (navigate('/'))}>
        <Profile />
      </div>
        <div className="Pages">
          <Link className="link" to="/">home</Link>
          <Link className="link" to="/projects">projects</Link>
        </div> */}
    </div>
  )
}

 function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Testing
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}