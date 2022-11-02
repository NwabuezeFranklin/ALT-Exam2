import { Helmet } from 'react-helmet';


export const Nested2 = () => {
    return(
     
      <div className="home">
         <Helmet>
        <title> Second Nested Route</title>
        <meta name="description" content=" Second Nested route" />
      </Helmet>
      <p className="b">I'm the Second  Nested route in another route</p>
  
    </div>
      )
  }