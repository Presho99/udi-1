import React, {useState} from "react";
import "./Project.css";
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const images = [one, two, three, four, five, six]

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project">
      <div className="project-left">
        <div className="left-top">
          <h2>Our Works</h2>
          <p>View All</p>
        </div>
        <div className="left-bottom">
          <div className="left-buttons">
            <button className="carousel-button" onClick={handlePrev}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <button className="carousel-button" onClick={handleNext}>
              <FontAwesomeIcon icon={faAngleRight}/>
            </button>
          </div>
        </div>
      </div>

      <div className="project-right">
        <div className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 710}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image}/>


            </div>
          ))}
           </div>


      </div>
    </div>
  );
}

export default Project;
