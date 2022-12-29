import React from 'react'
import img1 from './images/img6.jpeg'
import img2 from './images/img5.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import img5 from './images/img9.jpeg'
import img6 from './images/img8.jpeg'

const Body = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner text-center">
          <div className="carousel-item active ">
            <img
              src={img1}
              style={{ height: '550px', width: '100%' }}
              className="d-flex"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              style={{ height: '550px' }}
              className="d-flex w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{ height: '550px' }}
              className="d-flex w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              style={{ height: '550px' }}
              className="d-flex w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img5}
              style={{ height: '550px' }}
              className="d-flex w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img6}
              style={{ height: '550px' }}
              className="d-flex w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Body
