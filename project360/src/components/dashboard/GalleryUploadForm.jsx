import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const GalleryUploadForm = ({
  isOpen,
  onClose,
  formSubmitted,
  setFormSubmitted,
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

  const videoUploadSchema = z.object({
    videoName: z.string().min(1), // Ensure videoName is a non-empty string
    date: z.string().optional(), // Ensure date is a string
    videoUrl: z.string(), // Ensure videoUrl is a valid URL
    downloadUrl: z.string(), // Ensure downloadUrl is a valid URL
    author: z.string().optional(), // Make author optional
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(videoUploadSchema),
  });

  const { errors } = formState;

  const onSubmit = async (formData) => {
    try {
      const videoUpload = {
        videoName: formData.videoName,
        date: formData.date,
        videoUrl: formData.videoUrl,
        downloadUrl: formData.downloadUrl,
        author: formData.author,
      };
      // console.log(videoUpload);
      const response = await axios.post(
        "https://project360-1.onrender.com/gallery/",
        videoUpload
      );

      console.log(response.data);

      reset({
        userName: "",
        date: "",
        videoUrl: "",
        downloadUrl: "",
        author: "",
      });

      setFormSubmitted(true);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        console.log("Duplicate video, treating as successful submission.");
        reset({
          userName: "",
          date: "",
          videoUrl: "",
          downloadUrl: "",
          author: "",
        });
        setFormSubmitted(true);
      } else {
        console.error(err.message);
      }
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
        {!formSubmitted ? (
          <div className="form-content">
            <h2>Upload a New Video</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="videoName" className="form-label">
                  Video Name
                </label>
                <input
                  {...register("videoName", { required: true })}
                  type="text"
                  className="form-control-d"
                  id="name"
                  placeholder="Untitled Video"
                />
                <div className="error-message">
                  {errors?.userVideo?.message}
                </div>
              </div>
   
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Creation Date
                </label>
                <input
                  {...register("date")}
                  type="text" // could also be date if you want to use a date picker, but must change model/schema too
                  className="form-control-d"
                  id="date"
                  placeholder="YY-MM-DD" //  (leave blank for today's date)"
                />
                <div className="error-message">{errors?.date?.message}</div>
              </div>
              

              <div className="form-group">
                <label htmlFor="videoUrl" className="form-label">
                  Video Url
                </label>
                <input
                  {...register("videoUrl", { required: true })}
                  type="string"
                  className="form-control-d"
                  id="videoUrl"
                  placeholder="Video Play Link"
                />
                <div className="error-message">{errors?.videoUrl?.message}</div>
              </div>
              <div className="form-group">
                <label htmlFor="downloadUrl" className="form-label">
                  Download Url
                </label>
                <input
                  {...register("downloadUrl", { required: true })}
                  type="string"
                  className="form-control-d"
                  id="downloadUrl"
                  placeholder="Download Link"
                />
                <div className="error-message">
                  {errors?.downloadUrl?.message}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  {...register("author", { required: false })}
                  type="string"
                  className="form-control-d"
                  id="author"
                  placeholder="James"
                />
                <div className="error-message">{errors?.author?.message}</div>
              </div>
              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  Upload
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-content">
            <h2>Video Uploaded</h2>
            <button
              className="submit-button"
              onClick={() => {
                setFormSubmitted(false);
                onClose();
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default GalleryUploadForm;
