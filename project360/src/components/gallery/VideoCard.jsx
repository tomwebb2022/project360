import PropTypes from "prop-types";



VideoCard.propTypes = {
    videoName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    downloadUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default function VideoCard(props) {
    
  
    const { videoName, date, videoUrl, downloadUrl, id } = props;
    
    return (
        <div className="gallery-card">
            <a href={downloadUrl}><iframe className="galleryVid " src={videoUrl} width="30%" height="100%" ></iframe></a>
            <p>{videoName}</p>
            <p>{date}</p>
            <p>{id}</p>
        </div>
    )
}

/*
<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/U3Djoub6n7HBswsCBx" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/e4-cgd-celebsgodating-U3Djoub6n7HBswsCBx">via GIPHY</a></p>
<iframe src="https://giphy.com/embed/iDBSSI7bRq0tq" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sexy-man-iDBSSI7bRq0tq">via GIPHY</a></p>
 */