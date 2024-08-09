import React, {useState} from 'react'
import './Home.css'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/four.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const images = [
  {src: one, year: '2019', title: 'Modern Residential House'},
  {src: two, year: '2020', title: 'Contemporary Apartment'},
  {src: three, year: '2021', title: 'Eco-Friendly House'}
]

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
}

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
}

const currentImage = images[currentIndex]

  return (
    <div className='home'>
      <div className='left'>
        <div className='left-text'>
          <p className='year'>{currentImage.year} - Architecture</p>
          <h3 className='text-title'>{currentImage.title}</h3>
          <p className='text-link'>See More</p>
        </div>
      </div>
      <div className='right'>
        <div className='right-image'>
          <img src={currentImage.src}/>
        </div>
        <div className='right-below'>
          <div className='buttons'>
          <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevClick} className='chevron'/>
          <FontAwesomeIcon icon={faChevronRight} onClick={handleNextClick} className='chevron'/>
          
            </div> 

            <div className='loader-container'>
            <div className='loader-number'>01</div>

          <div className='loader'>
            <div className='loader-fill' style={{width: `${((currentIndex + 1) / images.length) * 100}%`}}></div>

          </div>
          <div className='loader-number'>03</div>

            </div>


        </div>
      </div>
    </div>
  )
}

export default Home