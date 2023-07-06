import { useState } from "react";
import "./SignUp.scss";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pic, setPic] = useState("");

  const postDetails = () => {};
  const submitHandler = () => {};
  return (
    <form className="signupform">
      <div className="input-box">
        <label htmlFor="">
          Name&nbsp;<span>*</span>
        </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">
          Email Address&nbsp;<span>*</span>
        </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">
          Password&nbsp;<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">
          Confirm Password&nbsp;<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
        <label htmlFor="">
          Upload Profile Picture&nbsp;<span>*</span>
        </label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </div>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};
