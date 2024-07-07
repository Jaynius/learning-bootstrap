import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export const CardCustom = () => {
  return (
    <div>
          <div className="card" style={{ width: "18rem" }}>
      <img src="https://marketplace.canva.com/iqg0U/MAEEuniqg0U/1/tl/canva-nature-photography-of-the-mountains-MAEEuniqg0U.jpg" className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  )
}
