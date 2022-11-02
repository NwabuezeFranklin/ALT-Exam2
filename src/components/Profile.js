import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { Helmet } from 'react-helmet';


export const Profile = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div className='home'>
       <Helmet>
        <title>Profile </title>
        <meta name="description" content="Your work profile" />
      </Helmet>
      <h1>Welcome {auth.user}</h1><br/>
      <h3>Below is a table of Job offers you have been granted through the help of our Website</h3><br/>
      
      <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Interswitch</td>
    <td>Mary Eze</td>
    <td>Nigeria</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Meta</td>
    <td>Roland Mendel</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>Call of Duty</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>IBM</td>
    <td>Jordan Hemsworth</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

      <h2> A bonus page; you can logout by clicking the button below</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


