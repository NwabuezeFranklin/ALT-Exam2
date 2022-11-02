import { NavLink, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet';



export const Nested = () => {
  return <>
   <Helmet>
        <title>Nested Routes</title>
        <meta name="description" content="Nested routes" />
      </Helmet>
    <p className="home">Nested Routes</p>
    <div className="home">
  <nav>
      <NavLink to= 'Nested1'>Nested Route 1</NavLink> 
      <NavLink to= 'Nested2'>Nested Route 2</NavLink>  
      
    </nav>
    <Outlet />
    </div>
  </>
    
}

