import React, { useState } from "react";

// images
import img from "../../../scss/images/avatar.png";

const Profile = () => {
  const [image, setImage] = useState(img);
  const [btnColor, setBtnColor] = useState("#007CFE");
  const toggleImage = () => {
    setImage("https://api.adorable.io/avatars/285/name@gmail.com");
    setBtnColor("#13a2b7");
  };

  return (
    <div className="profile">
      <img className="profile__image" src={image} alt="slika" />
      <div style={{ padding: "7rem 0 0 0" }} className="profile__holder">
        <span className="profile__span">Name:</span>
        <p className="profile__p">Dejan</p>
      </div>
      <div className="profile__holder">
        <span className="profile__span">Lastname:</span>
        <p className="profile__p">Markovic</p>
      </div>
      <div className="profile__holder">
        <span className="profile__span">Email:</span>
        <p className="profile__p">xypnotica@gmail.com</p>
      </div>

      <button
        style={{ background: btnColor }}
        className="profile__btn"
        onClick={toggleImage}
      >
        Toggle avatar
      </button>
    </div>
  );
};

export default Profile;
