import { useState } from "react";
import "./Login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="loginform">
      <div className="input-box">
        <label htmlFor="">
          Email Address&nbsp;<span>*</span>
        </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">
          Password&nbsp;<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <button>Get Guest User Credentials</button>
    </form>
  );
};
