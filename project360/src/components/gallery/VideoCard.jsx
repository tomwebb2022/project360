import PropTypes from "prop-types";



VideoCard.propTypes = {
    videoName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    downloadUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default function VideoCard(props) {
    
  
    const { videoName, date, videoUrl, downloadUrl } = props;
    
    return (
        <div className="gallery-card">
            <div onClick={() => window.open(downloadUrl, '_blank')} className="galleryVidWrapper">
            <iframe className="galleryVid" src={videoUrl} width="30%" height="100%" ></iframe>
            </div>
            <a href={downloadUrl} target="_blank" ><p>{date} {videoName}</p></a>
            
        </div>
    )
}

