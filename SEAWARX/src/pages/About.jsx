import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
        <h1 className="about-title">About</h1>
        <h1 style={{ color: "white", textAlign: "center" }}>Coming Soon</h1>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/videos/AboutBgVideo.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

    </div>
  );
}

export default About;