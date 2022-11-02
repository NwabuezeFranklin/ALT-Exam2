import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
export const Home = () => {
    const navigate = useNavigate()
    return <div className="home">
        <Helmet>
        <title>Home</title>
        <meta name="description" content="Explore my app from the starting point" />
      </Helmet>
        <h1>Home Page</h1>
        <h3>If you have logged in, Click on the button below:</h3><button onClick={() => navigate('profile')}>Login</button>
        </div>
}

