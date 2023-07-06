import { Login } from "../../../components/Authentication/Login/Login";
import { SignUp } from "../../../components/Authentication/SignUp/SignUp";
import "./Home.scss";
import { useState } from "react";

export const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginForm = () => {
    setIsLogin(true);
  };
  const handleSignUpForm = () => {
    setIsLogin(false);
  };
  return (
    <div className="home">
      <div className="heading-box">
        <h1>Chit-O-Chat</h1>
      </div>
      <div className="form-box">
        <div className="btn-box">
          <button onClick={handleLoginForm} className={isLogin ? "active" : ""}>
            Login
          </button>
          <button
            onClick={handleSignUpForm}
            className={isLogin ? "" : "active"}
          >
            Signup
          </button>
        </div>
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};
