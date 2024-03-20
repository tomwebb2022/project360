import dance from "../assets/dance.mp4";

function BackgroundVideo() {
  return (
    <div className="background-image">
      <h1 className="title">ATEDO 360 </h1>
      <video playsinline autoPlay muted>
        <source src={dance} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
