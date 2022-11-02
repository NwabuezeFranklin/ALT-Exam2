import { Helmet } from 'react-helmet';

export const Nomatch = () => {
    return(
     
      <div>
         <Helmet>
        <title> Error page</title>
        <meta name="description" content=" An Error occured" />
      </Helmet>
      <>Error 404 page not found</>
  
    </div>
      )
  }