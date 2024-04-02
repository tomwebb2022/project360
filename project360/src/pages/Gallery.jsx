import VideoCard from "../components/gallery/VideoCard"
import { Link } from "react-router-dom"
// import HeroGallery  from "../components/gallery/HeroGallery"
import Navbar from "../components/gallery/Navbar"
// import dummyData from "../data/dummyData"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Gallery.css"

const Gallery = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function getVideos() {
      try {
        const videoData = await axios.get("http://localhost:3000/gallery");
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
      <Navbar />
      {/* <div className="hero-container">
      <HeroGallery />
      </div> */}
      <h1>Gallery</h1>
      <div className="card-gallery">
       {videoData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
       {videoData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
       {videoData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
        <div className="link-container">
          <Link to="/">
          <button className="submit-button">Next Page</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gallery

