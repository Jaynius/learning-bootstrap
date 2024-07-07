import React from 'react'
import './Overview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export const Overview = () => {
  return (
    <div className='overview'>
        <div className="container h-100 d-flex align-items-center ">
            <div className="row w-100 text-center fs-4">
            <div className="col-sm-4">
            <i class="bi bi-airplane-fill me-2"></i>
                3 destinations to attend
            </div>
            <div className="col-sm-4">
            <i class="bi bi-arrow-up-right me-2"></i>
                discounts on the destination
            </div>
            <div className="col-sm-4">
            <i class="bi bi-dribbble me-2"></i>
                the whole wordl to explore
            </div>
            </div>
            
            
        </div>
        
    </div>
  )
}
