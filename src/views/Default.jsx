import yugi from "../assets/yugi.mp4";


function Default() {

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={yugi} type="video/mp4" />
      </video>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "72px" }}>YugiOh!</h1>
        <p style={{ fontSize: "24px"}}>I summon Pot of Greed!</p>
      </div>
    </div>
  );
}

export default Default;