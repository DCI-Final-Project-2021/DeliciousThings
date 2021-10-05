import React, {useState} from "react";

function Login() {
  const [checked, setChecked] = useState(false);
  const changeFunc = () => {
    setChecked(!checked);
  }
  return (
    <div className="mainLogin">
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>

        <div className="remember">
          <label>Remember me:</label>
          <input type="checkbox" defaultChecked={checked} name="remember" onChange={() => changeFunc()} />
        </div>
      </div>

      {/* <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button> */}
      {/* <span class="psw">Forgot <a href="#">password?</a></span> */}
      {/* </div> */}
    </div>
  );
}

export default Login;
