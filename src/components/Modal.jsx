import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalForm } from './ModalForm'
export const Modal = () => {
  return (
    <div class="modal" id='booking-modal' tabindex="-1">
  <div class="modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ModalForm/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">checkout</button>
      </div>
    </div>
  </div>
</div>
  )
}
