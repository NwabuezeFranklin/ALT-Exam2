import { Helmet } from 'react-helmet';

export const Nested1 = () => {
    return(
     
      <div className="home">
        <Helmet>
        <title> First Nested Route</title>
        <meta name="description" content=" First Nested route" />
      </Helmet>
      <p className="b">I am a  Nested route in another route</p>
  
    </div>
      )
  }