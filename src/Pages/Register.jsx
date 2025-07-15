import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //   event handler for handleregister
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(terms)

    // reset the session 
    setErrorMessage('');
    setSuccess(false);

   if(!terms){
        setErrorMessage('Please Accept the terms & conditions!')
        return
   }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password should have at least one lowercase, uppercase, one number, and a special character'
      );

      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('a user created', result.user);

        setSuccess(true);
      })
      .catch((error) => {
        console.log('Error', error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl mt-6">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset relative">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="input"
              placeholder="Password"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-xl cursor-pointer absolute right-8 top-[108px] z-1"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
            </button>

            <div className="mt-4">
              <label className="label text-sm">
                <input type="checkbox" name="terms"  className="checkbox" />
                Accept our terms & conditions
              </label>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>

            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className=" text-green-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="max-w-96 mx-auto">
        {errorMessage && (
          <p className="text-red-500 text-center my-6">{errorMessage}</p>
        )}
        {success && (
          <p className="text-green-400 text-center my-6">
            You have successfully registered!
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
