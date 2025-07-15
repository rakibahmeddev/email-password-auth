import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase.init';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.email.value;
        

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log('a user created', result.user)
        })
        .catch(error => {
            console.log('Error', error)
        })
    }
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl mt-6">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
