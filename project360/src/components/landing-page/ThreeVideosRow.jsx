import dance from '../../assets/dance.mp4'
import '../../pages/LandingPage.css'

const ThreeVideosRow = () => {
    return (
        <div className="three-videos-container">
        <video autoPlay muted className="video">
          <source src={dance} type="video/mp4" />
        </video>
        <video autoPlay muted className="video">
          <source src={dance} type="video/mp4" />
        </video>
        <video autoPlay muted className="video">
          <source src={dance} type="video/mp4" />
        </video>
      </div>
    )
}

export default ThreeVideosRow;