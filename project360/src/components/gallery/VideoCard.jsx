import PropTypes from "prop-types";
import  { useEffect } from 'react';

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
            <div className="galleryVidWrapper">
                <a href={downloadUrl} target="_blank" >
                <iframe className="galleryVid" src={videoUrl} width="100%" height="100%" ></iframe> </a>
            </div>
            <a href={downloadUrl} target="_blank" ><p>{date} {videoName}</p></a>
            
        </div>
    )
}


