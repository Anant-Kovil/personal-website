import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = ['projects'];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar sx={{mt:1, mb:1}} color="transparent" position="static" elevation={0} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=> {navigate('/')}}
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              letterSpacing: '-0.05rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {cursor: 'pointer'},
            }}
          >
            Anant Kovil
          </Typography>

          <Box sx={{flexGrow: 1 , display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=> {navigate('/')}}
            sx={{
              alignSelf: 'center',
              display: { xs: 'flex', sm: 'none' },
              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              letterSpacing: '-0.05rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {cursor: 'pointer'},
            }}
          >
            Anant Kovil
          </Typography>
            {/* Show Page Link button (on small displays) */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            {/* Popup Menu Page Links*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography             sx={{
              alignSelf: 'center',
              fontFamily: 'Helvetica Neue',
              fontWeight: 400,
              fontSize:'1rem',
              color: 'inherit',
              textDecoration: 'none',
            }} variant="h6" noWrap component="a" onClick={()=> {navigate('/projects')}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Regular Page Links */}
          <Box sx={{ justifyContent:'flex-end',flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ alignSelf: 'center', color: 'white', display: 'block' }}
              >
                <Button color='primary' variant="outlined" onClick={()=> {navigate('/projects')}}>{page}</Button>
          </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}