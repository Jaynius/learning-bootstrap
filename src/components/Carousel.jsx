import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Carousel.css'
const Carousel = () => {
  return (
    
<div id="heroCaro" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#heroCaro" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#heroCaro" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#heroCaro" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active c-item">
      <img src="https://www.expeditionsalaska.com/wp-content/uploads/2016/09/15-northern-lights-00739-1024x682.jpg" class="d-block w-100 c-image" alt="..."></img>
      <div class="carousel-caption  top-0">
        <p className='mt-5 fs-4'>Discover the wolrd</p>
        <h1 className='fw-bolder text-capitalize'>Aurora tours</h1>
        <button type="button" class="btn btn-primary px-3 mt-5 text-uppercae " data-bs-toggle="modal" data-bs-target="#booking-modal">book a tour</button>
      </div>
    </div>
    <div class="carousel-item c-item">
      <img src="https://images.squarespace-cdn.com/content/v1/58eab551db29d654dc57277a/1634332035812-1M9EAB9E9ZQ78ER965OZ/autumn-schrock_aurora.jpg" class="d-block w-100 c-image" alt="..."></img>
      <div class="carousel-caption  top-0">
        <p className='mt-5 fs-4'>The season has arrived</p>
        <h1 className='fw-bolder text-capitalize'>Aurora tours</h1>
        <button type="button" class="btn btn-primary px-3 mt-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#booking-modal">book a tour</button>
      </div>
    </div>
    <div class="carousel-item c-item">
      <img src="https://media.istockphoto.com/id/2154903641/photo/amazing-aurora.webp?b=1&s=170667a&w=0&k=20&c=VrMD5h7x-OQqHhOKRnuZCKlebiJbeGB-OwObJSsI0ss=" class="d-block w-100 c-image" alt="..."></img>
      <div class="carousel-caption  top-0">
        <p className='mt-5 fs-4'>Discover the wolrd</p>
        <h1 className='fw-bolder text-capitalize'>Aurora tours</h1>
        <button type="button" class="btn btn-primary px-3  mt-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#booking-modal">book a tour</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#heroCaro" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#heroCaro" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  )
}

export default Carousel