import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Nested } from './components/Nested';
import { Navbar } from './components/Navbar';
import { Nested1 } from './components/Nested1';
import { Nested2 } from './components/Nested2';
import ErrorBoundary from './components/ErrorBoundary';
import { Nomatch } from './components/Nomatch';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { Authorize } from './components/Authorize';
import  Signup  from './components/Signup';
import { Helmet } from 'react-helmet';

function App() {
  return (
      
      <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="keywords" content="Home, Nested, Profile, Login, ALT, SEO" />
      </Helmet>
      <AuthProvider>
      <ErrorBoundary>
      <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path='nested' element={<Nested />}>
      <Route path='nested1' element={<Nested1 />} />
      <Route path='nested2' element={<Nested2 />} />
    </Route>
    <Route path='profile' element={<Authorize><Profile /></Authorize>} />
    <Route path='login' element={<Login />} />
    <Route path='*' element={<Nomatch />} />
    <Route path='signup' element={<Signup />} />

    </Routes>
    </ErrorBoundary>
    </AuthProvider>
    </div>
  );
}

export default App;
