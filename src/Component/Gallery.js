import React, { useState } from "react";
import "./Gallery.css"; // Import CSS file
import img1 from "../Component/Images/gallery-4.jpeg";
import img2 from "../Component/Images/gallery-3.jpeg";
import img3 from "../Component/Images/gallery-2.jpeg";
import img4 from "../Component/Images/gallery-19.jpeg"; 

import img5 from "../Component/Images/gallery-17.jpeg"; 
import img6 from "../Component/Images/gallery-8.jpeg"; 
import img7 from "../Component/Images/gallery-1.jpeg"; 
import img8 from "../Component/Images/gallery-12.jpeg"; 
import img9 from "../Component/Images/gallery-23.jpeg"; 
import img10 from "../Component/Images/gallery-20.jpeg"; 
import img11 from "../Component/Images/gallery-16.jpeg"; 
import img12 from "../Component/Images/gallery-5.jpeg"; 
import img13 from "../Component/Images/gallery-6.jpeg"; 
import img14 from "../Component/Images/gallery-7.jpeg"; 
import img15 from "../Component/Images/gallery-9.jpeg"; 
import img16 from "../Component/Images/gallery-10.jpeg"; 
import img17 from "../Component/Images/gallery-11.jpeg"; 

import img18 from "../Component/Images/gallery-13.jpeg"; 
import img19 from "../Component/Images/gallery-14.jpeg"; 
import img20 from "../Component/Images/gallery-15.jpeg"; 
import img21 from "../Component/Images/gallery-18.jpeg"; 
import img22 from "../Component/Images/gallery-21.jpeg"; 

import img23 from "../Component/Images/gallery-22.jpeg"; 
import img24 from "../Component/Images/gallery-24.jpeg"; 
import img25 from "../Component/Images/gallery-25.jpeg"; 
import img26 from "../Component/Images/gallery-26.jpeg"; 
import img27 from "../Component/Images/gallery-27.jpeg"; 

import img28 from "../Component/Images/gallery-28.jpeg"; 
import img29 from "../Component/Images/gallery-29.jpeg"; 
import img30 from "../Component/Images/gallery-30.jpeg"; 
import img31 from "../Component/Images/gallery-31.jpeg"; 
import img32 from "../Component/Images/gallery-32.jpeg"; 

import img33 from "../Component/Images/gallery-33.jpeg"; 
import img34 from "../Component/Images/gallery-34.jpeg"; 
import img35 from "../Component/Images/gallery-35.jpeg"; 
import img36 from "../Component/Images/gallery-36.jpeg"; 

import img37 from "../Component/Images/gallery-37.jpeg"; 
import img38 from "../Component/Images/gallery-38.jpeg"; 
import img39 from "../Component/Images/gallery-39.jpeg"; 
import img40 from "../Component/Images/gallery-40.jpeg"; 

import img41 from "../Component/Images/gallery-41.jpeg"; 
import img42 from "../Component/Images/gallery-42.jpeg"; 
import img43 from "../Component/Images/gallery-43.jpeg"; 


const images = [
  { id: 1, src: img1, alt: "Construction Site 1" },
  { id: 2, src: img2, alt: "Construction Site 2" },
  { id: 3, src: img3, alt: "Construction Site 3" },
  { id: 4, src: img4, alt: "Construction Site 4" },
  { id: 5, src: img5, alt: "Construction Site 5" },
  { id: 6, src: img6, alt: "Construction Site 6" },
  { id: 7, src: img7, alt: "Construction Site 7" },
  { id: 8, src: img8, alt: "Construction Site 8" },
  { id: 9, src: img9, alt: "Construction Site 9" },
  { id: 10, src: img10, alt: "Construction Site 10" },
  { id: 11, src: img11, alt: "Construction Site 11" },
  { id: 12, src: img12, alt: "Construction Site 12" },
  { id: 13, src: img13, alt: "Construction Site 13" },
  { id: 14, src: img14, alt: "Construction Site 14" },
  { id: 15, src: img15, alt: "Construction Site 15" },
  { id: 16, src: img16, alt: "Construction Site 16" },
  { id: 17, src: img17, alt: "Construction Site 17" },
  { id: 18, src: img18, alt: "Construction Site 18" },
  { id: 19, src: img19, alt: "Construction Site 19" },
  { id: 20, src: img20, alt: "Construction Site 20" },
  { id: 21, src: img21, alt: "Construction Site 21" },
  { id: 22, src: img22, alt: "Construction Site 22" },
  { id: 23, src: img23, alt: "Construction Site 23" },
  { id: 24, src: img24, alt: "Construction Site 24" },
  { id: 25, src: img25, alt: "Construction Site 25" },
  { id: 26, src: img26, alt: "Construction Site 26" },
  { id: 27, src: img27, alt: "Construction Site 27" },
  { id: 28, src: img28, alt: "Construction Site 28" },
  { id: 29, src: img29, alt: "Construction Site 29" },
  { id: 30, src: img30, alt: "Construction Site 30" },
  { id: 31, src: img31, alt: "Construction Site 31" },
  { id: 32, src: img32, alt: "Construction Site 32" },
  { id: 33, src: img33, alt: "Construction Site 33" },
  { id: 34, src: img34, alt: "Construction Site 34" },
  { id: 35, src: img35, alt: "Construction Site 35" },
  { id: 36, src: img36, alt: "Construction Site 36" },
  { id: 37, src: img37, alt: "Construction Site 37" },
  { id: 38, src: img38, alt: "Construction Site 38" },
  { id: 39, src: img39, alt: "Construction Site 39" },
  { id: 40, src: img40, alt: "Construction Site 40" },
  { id: 41, src: img41, alt: "Construction Site 41" },
  { id: 42, src: img42, alt: "Construction Site 42" },
  { id: 43, src: img43, alt: "Construction Site 43" },
];


const Gallery = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2>Our Projects Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => setZoomedImage(image.src)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Zoomed Image View */}
      {zoomedImage && (
        <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
          <div className="zoomed-content">
            <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
            <button className="close-btn" onClick={() => setZoomedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
