import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import React from 'react';
import './Signup'
import { Helmet } from 'react-helmet';

export const Login = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectPath = location.state?.path ||  '/'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
    <div className="Sign">
       <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to your profile from here" />
      </Helmet>
      <label>
        Username: <input type='text' onChange={e => setUser(e.target.value)} />
      </label>{' '}<br/>
      
      <button onClick={handleLogin}
       classname="login">Login</button>
       <h4>You cannot access your profile without logging in first:</h4>
    </div>
  )
}