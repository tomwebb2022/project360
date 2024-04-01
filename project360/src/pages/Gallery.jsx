import VideoCard from "../components/gallery/VideoCard"
import { Hero } from "../components"
import "./Gallery.css"

const dummyData =[ 
  {
  id: 1,
  videoName: "Nao Homies Party Viernes",
  date: "23-09-01",
  videoUrl: "https://giphy.com/embed/U3Djoub6n7HBswsCBx",
  downloadUrl: "https://www.google.com/",
},
{
  id: 2,
  videoName: "Nao Gordo Reve Night",
  date: "23-08-31",
  videoUrl: "https://giphy.com/embed/iDBSSI7bRq0tq",
  downloadUrl: "https://www.google.com/",
}
]

const Gallery = () => {
  return (
    <div>
      <Hero />
      <div className="card-gallery">
       {dummyData.map((data) => (
         <VideoCard videoName={data.videoName} date={data.date} videoUrl={data.videoUrl} downloadUrl={data.downloadUrl} id={data.id} key={data.id} />
       ))}
      </div>
    </div>
  )
}

export default Gallery
