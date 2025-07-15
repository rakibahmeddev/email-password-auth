import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl mt-6">
        <div className="card-body">
          <form className="fieldset relative">
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

      <div className="max-w-96 mx-auto"></div>
    </div>
  );
};

export default Login;
