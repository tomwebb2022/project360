import VideoCard from "../components/gallery/VideoCard";
import { Link } from "react-router-dom";
// import HeroGallery  from "../components/gallery/HeroGallery"
import Navbar from "../components/gallery/Navbar";
// import dummyData from "../data/dummyData"
import axios from "axios";
import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = ({
  burgerMenuOpen,
  setBurgerMenuOpen,
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
  isLoggedIn,
  logout,
}) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function getVideos() {
      try {
        const videoData = await axios.get(
          "https://project360-1.onrender.com/videos"
        );
        setVideoData(videoData.data);
      } catch (error) {
        console.error(error);
      }
    }

    getVideos();
  }, []);
  // console.log(videoData[0]);

  return (
    <div className="gallery-page">
      <div className="navbar-container">
        <Navbar
          burgerMenuOpen={burgerMenuOpen}
          setBurgerMenuOpen={setBurgerMenuOpen}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
          isLoggedIn={isLoggedIn}
          logout={logout}
        />
      </div>
      <div className="title-container">
        <h1 className="navbar-title">Gallery</h1>
      </div>
      <div className="card-gallery">
        {videoData.map((data) => (
          <VideoCard
            videoName={data.videoName}
            date={data.date}
            videoUrl={data.videoUrl}
            downloadUrl={data.downloadUrl}
            id={data._id}
            key={data._id}
          />
        ))}
        {videoData.map((data) => (
          <VideoCard
            videoName={data.videoName}
            date={data.date}
            videoUrl={data.videoUrl}
            downloadUrl={data.downloadUrl}
            id={data._id}
            key={data._id}
          />
        ))}
        {videoData.map((data) => (
          <VideoCard
            videoName={data.videoName}
            date={data.date}
            videoUrl={data.videoUrl}
            downloadUrl={data.downloadUrl}
            id={data._id}
            key={data._id}
          />
        ))}
        <div className="link-container">
          <Link to="/gallery">
            <button className="submit-button">Next Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
