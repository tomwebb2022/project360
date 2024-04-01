import VideoCard from "../components/gallery/VideoCard"
import { Link } from "react-router-dom"
import HeroGallery  from "../components/gallery/HeroGallery"
import "./Gallery.css"

const dummyData =[ 
  {
  id: 1,
  videoName: "Nao Homies Party Viernes",
  date: "23-09-01",
  videoUrl: "https://giphy.com/embed/U3Djoub6n7HBswsCBx",
  downloadUrl: "https://drive.google.com/drive/folders/1PkvAg4id-A3r83YwFw9hldN0YL_epbEC",
},
{
  id: 2,
  videoName: "Nao Gordo Reve Night",
  date: "23-08-31",
  videoUrl: "https://giphy.com/embed/iDBSSI7bRq0tq",
  // videoUrl: "https://drive.google.com/file/d/1xN5qUYSawPdNBwpOsCq0UF44EYOkq1y5/view?usp=drive_link",
  downloadUrl: "https://drive.google.com/drive/folders/1PkvAg4id-A3r83YwFw9hldN0YL_epbEC",
},
{
  id: 3,
  videoName: "Nao Guilty Lunes",
  date: "23-08-29",
  videoUrl: "https://giphy.com/embed/kp0n1mfC73XEc",
  downloadUrl: "https://drive.google.com/drive/folders/1PkvAg4id-A3r83YwFw9hldN0YL_epbEC",
},
{
  id: 4,
  videoName: "Nao Guilty Lunes",
  date: "23-08-28",
  videoUrl: "https://giphy.com/embed/ano4sUdpQc0Ax6WtEM" ,
  downloadUrl: "https://drive.google.com/drive/folders/1PkvAg4id-A3r83YwFw9hldN0YL_epbEC",
}
]

const Gallery = () => {
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

/*
<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/U3Djoub6n7HBswsCBx" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/e4-cgd-celebsgodating-U3Djoub6n7HBswsCBx">via GIPHY</a></p>
<iframe src="https://giphy.com/embed/iDBSSI7bRq0tq" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sexy-man-iDBSSI7bRq0tq">via GIPHY</a></p>
<iframe src="https://giphy.com/embed/kp0n1mfC73XEc" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sexy-girl-kp0n1mfC73XEc">via GIPHY</a></p>
<iframe src="https://giphy.com/embed/ano4sUdpQc0Ax6WtEM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Yandy-com-model-yandy-yandyswim-ano4sUdpQc0Ax6WtEM">via GIPHY</a></p>
 */