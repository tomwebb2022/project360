import { video1, video2, video3 } from '../../assets'
import '../../pages/LandingPage.css'

const ThreeVideosRow = () => {
    return (
        <div className="three-videos-container">
        <video autoPlay muted className="video">
          <source src={video1} type="video/mp4" />
        </video>
        <video autoPlay muted className="video">
          <source src={video2} type="video/mp4" />
        </video>
        <video autoPlay muted className="video">
          <source src={video3} type="video/mp4" />
        </video>
      </div>
    )
}

export default ThreeVideosRow;