import VideoCard from "../components/gallery/VideoCard"
import { Link } from "react-router-dom"
import HeroGallery  from "../components/gallery/HeroGallery"
import dummyData from "../data/dummyData"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Gallery.css"

const Gallery = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function getVideos() {
      try {
        const videoData = await axios.get("http://localhost:3000/gallery")
        console.log(videoData.data);

        setVideoData(videoData.data);
      } catch (error) {
        console.error(error);
      }
    }

    getVideos();
    
  }, []);
  
  return (
    <div className="gallery-page">
      <HeroGallery />
      <h1 className="gallery-title">Gallery</h1>
      <div className="card-gallery">
       {dummyData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
       {dummyData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
        <div className="link-container">
          <Link to="/">
          <button className="submit-button">Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gallery

