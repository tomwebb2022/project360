import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from 'axios';

const EmailCollectionPopUpForm = ({
  isOpen,
  onClose,
  emails,
  updateEmails,
}) => {
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
    userName: z.string().nonempty({ message: "Your name is required" }),
    userEmail: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
  });
  

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;


  const onSubmit = async (formData) => {
    try {
      const newEmail = {
        name: formData.userName,
        email: formData.userEmail
      };
  

      const response = await axios.post("http://localhost:3000/emails", newEmail);

  
      console.log(response.data);
  
      reset({
        userName: "",
        userEmail: "",
      });
  
      onClose();
    } catch (err) {
      console.error(err.message);
    }
  };
  

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
    >
      <div className="form-container">
        <div className="form-content">
            <h2>If you&apos;re interested in this project, please subscribe to our newsletter!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="userName" className="form-label">
                Name
              </label>
              <input
                {...register("userName", { required: true })}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
              <div className="error-message">
                {errors?.userName?.message}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="userEmail" className="form-label">
                Email
              </label>
              <input
                {...register("userEmail", { required: true })}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
              <div className="error-message">
                {errors?.creatorEmail?.message}
              </div>
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EmailCollectionPopUpForm;
