import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from 'axios';

const Login = () => {
  const closeIcon = (
    <svg fill="#000000" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="#000000"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const schema = z.object({
    username: z.string().nonempty({ message: "Username is required" }),
    password: z.string().nonempty({ message: "Password is required" }),
  });
  

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;


  const onSubmit = async (formData) => {
    try {
      const userDetails = {
        username: formData.username,
        password: formData.password
      };
  
      const response = await axios.post("http://localhost:3000/users/login", userDetails);
  
      console.log(response.data);
  
      reset({
        userName: "",
        userEmail: "",
      });
  
    } catch (err) {
      console.error(err.message);
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
                {...register("userName", { required: true })}
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter the username"
              />
              <div className="error-message">
                {errors?.username?.message}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="string"
                className="form-control"
                id="password"
                placeholder="Enter the password"
              />
              <div className="error-message">
                {errors?.password?.message}
              </div>
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;
