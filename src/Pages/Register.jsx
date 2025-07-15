import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.email.value;

    setErrorMessage('')

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('a user created', result.user);

        setSuccess(true)
      })
      .catch((error) => {
        console.log('Error', error);
        setErrorMessage(error.message);
        setSuccess(false)
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl mt-6">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>

      {errorMessage && <p className="text-red-500 text-center my-6">Maybe email already exist</p>} 
      {success && <p className="text-green-400 text-center my-6">You have successfuly registerd</p>}
      
    </div>
  );
};

export default Register;
