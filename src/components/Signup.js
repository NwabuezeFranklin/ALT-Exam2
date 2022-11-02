import React from 'react';
import { useNavigate } from 'react-router-dom'
//import './Sign.css';


class Signup extends React.Component {
  
  state = {
    disabled: true
  }
  enter = (e) => {
    if(e.target.value.length >= 6) {
      this.setState ({
        disabled: false
      });
    }
    else {
      this.setState({
        disabled: true
      })
    }
  }
  render() {
    return <div className='center'>
      <form>
      <label for="username">Username:</label>
  <input type="text" id="username" name="username" required /><br/>
  <label for="username">Email :</label>
  <input type="text" id="email" name="email" required /><br/>
      Password: <input type="text" placeholder="Enter 6 characters or more"  onChange={this.enter}/><br/>

        <button disabled={this.state.disabled}>Sign in</button>
        </form>
        <h3>Login after signing up</h3>
      </div>
  }
}
export  default Signup;