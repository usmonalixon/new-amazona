import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sumbitHandler = (e) => {
    e.preventDefault();
    // TODO: signin action
  };
  return (
    <div>
      <form className="form" onSubmit={sumbitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password Address</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
