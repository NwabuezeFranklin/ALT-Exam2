import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export const Navbar = () => {
    const auth = useAuth()
    const navLinkStyles = ({ isActive }) => {  
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
          }
        }
      
  return( <div className="navel">
    <nav className="navel">
      
      <NavLink to= '/'>Home</NavLink> 
      <NavLink to= '/nested'>Nested</NavLink>
      <NavLink to= '/profile'>Profile</NavLink>

      {!auth.user && (
        <NavLink to='/login'>
          Login
        </NavLink>
      )}
      

    </nav>
    </div>
    
  )
}

