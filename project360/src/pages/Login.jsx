import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ updateClick }) => {

  Login.propTypes = {
  updateClick: PropTypes.func.isRequired,
};

  const schema = z.object({
    username: z.string().nonempty({ message: "Username is required" }),
    password: z.string().nonempty({ message: "Password is required" }),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;
  const [validationErrors, setValidationErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (formData) => {
    try {
      const userDetails = {
        username: formData.username,
        password: formData.password,
      };

      console.log(userDetails);

      const response = await axios.post(
        "http://localhost:3000/users/login",
        userDetails
      );
      // console.log("login response", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      updateClick();
      // console.log(response.data);

      reset({
        userName: "",
        userEmail: "",
      });
    } catch (err) {
      if (err.response) {
        // Server responded with a non-2xx status code
        console.error("Server Error:", err.response.data);
        setErrorMessage("An error occurred while processing your request.");
      } else if (err.name === "ValidationError") {
        // Handle validation errors from zod schema
        console.error("Validation Error:", err.message);
        setValidationErrors(err.errors);
      } else if (axios.isAxiosError(err)) {
        // Handle Axios errors (e.g., network issues, server errors)
        console.error("Axios Error:", err.message);
        setErrorMessage("Network error occurred. Please try again later.");
      } else {
        // Handle other types of errors
        console.error("Error:", err.message);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Please enter your admin username and password:</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter the username"
            />
            <div className="error-message">{errors?.username?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter the password"
            />
            <div className="error-message">{errors?.password?.message}</div>
          </div>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Log in
            </button>
          </div>
        </form>
        {validationErrors.length > 0 && (
          <div className="error-message">
            {validationErrors.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
