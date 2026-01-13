import React, { useState, useEffect } from "react";
import "./Aboutus.css";

const Aboutus = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/company1.jpg",
    "/vite.svg", // placeholder, since only one image is available
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Learn more about our company, our mission, and the team behind our
          success.
        </p>
      </div>

      <div className="carousel">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Company image ${index + 1}`}
              className={index === currentImageIndex ? "active" : ""}
            />
          ))}
        </div>
        <button className="carousel-btn prev" onClick={prevImage}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={nextImage}>
          &#10095;
        </button>
      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses through innovative technology
          solutions. We strive to deliver high-quality products and services
          that drive growth and innovation for our clients worldwide.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> We embrace cutting-edge technologies to
            solve complex problems.
          </li>
          <li>
            <strong>Quality:</strong> We are committed to delivering excellence
            in everything we do.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in the power of teamwork
            and partnership.
          </li>
          <li>
            <strong>Integrity:</strong> We conduct our business with honesty and
            transparency.
          </li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Our diverse team of experts brings together years of experience in
          software development, design, and business strategy. We are passionate
          about creating solutions that make a difference.
        </p>

        <h2>Our History</h2>
        <p>
          Founded in 2010, our company has grown from a small startup to a
          leading provider of tech solutions. Over the years, we have completed
          numerous projects and built lasting relationships with our clients.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
