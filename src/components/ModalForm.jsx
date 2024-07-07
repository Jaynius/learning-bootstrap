import React from 'react'

export const ModalForm = () => {
  return (
    <div>
        <form action="#" className=''>
            <div className="row">
                <div className="col-sm-6">
                <div className="form-floating ">
                <input type="email" name="email" id=""  className='form-control'/>
                <label htmlFor="email">Email Adress</label>
            </div>
                </div>
                <div className="col-sm-6">
                <div className="form-floating">
                <select className="form-select" id="">
                    <option >
                        nairobi
                    </option>
                    <option > india</option>
                    <option >bangok</option>
                </select>
                <label htmlFor="select">Select tour</label>
            </div>
                </div>
            
           
            </div>
           
            
        </form>
    </div>
  )
}
