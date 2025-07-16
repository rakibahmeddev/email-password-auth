import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.init';

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [loginError, SetLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset success and error message
    setSuccess(false)
    SetLoginError(false)

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('login successfull', result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log('ERROR', error);
        SetLoginError(true)
      });
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl mt-6">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset relative">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="text-xl cursor-pointer absolute right-8 top-[108px] z-1"></button>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <p className="text-sm">
              New to our website?
              <Link to="/register" className=" text-green-500 ml-1">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="max-w-96 mx-auto">
        {loginError && (
          <p className="text-red-500 text-center my-6">Invalid email or password</p>
        )}
        {success && (
          <p className="text-green-400 text-center my-6">
            You have successfully logged in!
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
