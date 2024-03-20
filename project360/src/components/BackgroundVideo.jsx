import dance from "../assets/dance.mp4";

function BackgroundVideo() {
  return (
    <div className="background-image">
      <h1 className="title">ATEDO 360 </h1>
      <video playsInline autoPlay muted loop> 
      {/* added 'playsinline' accoring to chatgpt for ios */}
        <source src={dance} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
