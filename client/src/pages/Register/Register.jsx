import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import './register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login")
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">Connect with friends and the world around you on Social</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onClick={handleClick}>
            <input
              className="loginInput"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              className="loginInput"
              placeholder="Email"
              ref={email}
              required
              type="email"
            />
            <input
              className="loginInput"
              placeholder="Password"
              ref={password}
              required
              type="password"
              minLength="6"
            />
            <input
              className="loginInput"
              placeholder="Password Again"
              ref={passwordAgain}
              required
              type="password"
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
