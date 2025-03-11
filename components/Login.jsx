import React, { useState } from "react";
import bgImageStyle from "../../public/bgImageStyle";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("virat@gmail.com");
  const [password, setPassword] = useState("Virat@123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        { firstName, emailId, password, confirmPassword },
        { withCredentials: true }
      );
      console.log(res?.data?.data);
      dispatch(addUser(res?.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      
      dispatch(addUser(res?.data?.data));
      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  const resetForm = () => {
    setEmailId("");
    setConfirmPassword("");
    setFirstName("");
    setPassword("");
  };

  return (
    <div style={bgImageStyle}>
      <div className="flex mr-auto ml-48 rounded-lg">
        <div className="card bg-slate-400 bg-opacity-50 bg-base-100 w-96 shadow-sm  ">
          <div className="card-body">
            <h2 className="card-title text-black font-extrabold text-2xl flex justify-center">
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            <div className="p-4">
              {!isLoginForm && (
                <label className="input validator pl-4-2 rounded-lg my-4">
                  <input
                    className="text-black font-medium cursor-pointer "
                    type="text"
                    value={firstName}
                    required
                    placeholder="Enter firstName"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              )}

              <label className="input validator pl-4-2 rounded-lg my-4">
                <input
                  className="text-black font-medium cursor-pointer "
                  type="text"
                  value={emailId}
                  required
                  placeholder="Enter Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>

              <label className="input validator pl-4 rounded-lg my-4 ">
                <input
                  className="text-black font-medium cursor-pointer"
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {!isLoginForm && (
                <label className="input validator pl-4 rounded-lg my-4">
                  <input
                    className="text-black font-medium cursor-pointer"
                    type="password"
                    value={confirmPassword}
                    required
                    placeholder="Confirm Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              )}
            </div>

            <div className="card-actions justify-center rounded-lg p-2">
              <button
                className="btn btn-primary"
                onClick={isLoginForm ? handleLogin : handleSignIn}
              >
                {isLoginForm ? "Login" : "SignUp"}
              </button>
            </div>
            <div>
              <p className="text-red-500 font-bold text-center">{error}</p>
            </div>
            <p
              className="m-auto cursor-pointer py-2 text-black hover:text-blue-900"
              onClick={() => {
                setIsLoginForm((value) => !value);
                resetForm();
              }}
            >
              {isLoginForm
                ? "New User? Signup Here"
                : "Existing User? Login Here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
