import React from "react";
import background from "./Contact - background.jpg";

const img_style = {
  width: "100%",
  height: "100%",
  filter: "brightness(70%)",
  objectFit: "cover",
};

const lobby_style = {
  padding: "0",
  margin: "0",
  position: "absolute",
  height: "100vh",
  width: "100vw",
};

const contact_info = {
  display: "flex",
  width: "100%",
  margin: "auto",
};

const card = {
  background: "rgba(54,54,54,0.8)",
  padding: "20px 20px",
  margin: "0 1.5vw",
  width: "20vw",
  height: "30vh",
  display: "flex",
  flexDirection: "column",
  color: "WhiteSmoke",
  cursor: "pointer",
  borderRadius: "5%",
};

const card_icon = {
  color: "#ff6348",
  fontSize: "50px",
  borderRadius: "2%",
};

const p = {
  padding: "0",
  margin: "0",
};

function ContactPage() {
  return (
    <>
      <div id="lobby" className="lobby" style={lobby_style}>
        <img style={img_style} src={background} alt="" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "45vh",
          left: "15vw",
        }}
      >
        <div className="contact-info" style={contact_info}>
          <div className="card" style={card}>
            <i className="card-icon far fa-envelope" style={card_icon}></i>
            <p style={p}>r10724039@ntu.edu.tw</p>
          </div>
          <div className="card" style={card}>
            <i className="card-icon fas fa-phone" style={card_icon}></i>
            <p style={p}>02-0000-0000 #123</p>
          </div>
          <div className="card" style={card}>
            <i
              className="card-icon fas fa-map-marker-alt"
              style={card_icon}
            ></i>
            <p style={p}>No. 1, Sec. 4, Roosevelt Rd., Taipei</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { ContactPage };
