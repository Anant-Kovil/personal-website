import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { Profile } from './profile';

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="root">
      <div className="navbarProfile" onClick={()=> (navigate('/'))}>
        <Profile />
      </div>
        <div className="Pages">
          <Link className="link" to="/">home</Link>
          <Link className="link" to="/projects">projects</Link>
        </div>
    </div>
  )
}