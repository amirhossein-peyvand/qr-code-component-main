import qrCode from "../assets/image-qr-code.png";
import "../sass/Card.scss";

const Card = () => {
  return (
    <section className="card">
      <div className="imageContainer">
        <img src={qrCode} alt="qr-code" />
      </div>
      <div className="contentContainer">
        <h2>Improve your front-end skills by building projects.</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
};

export default Card;
