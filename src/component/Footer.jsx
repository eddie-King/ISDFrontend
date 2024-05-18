import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="row text-center bg-secondary-subtle p-4">
        <div className="col-3">
          <h5>About us</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              Information
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5>Help</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              FAQ
            </li>
            <li className="mb-2">
              Return Policy
            </li>
            <li className="mb-2">
              Privacy Policy
            </li>
            <li className="mb-2">
              Assesibility
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5>Account</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              Profile
            </li>
          </ul>
        </div>
        
        <div className="col-3">
          <h5>Subcribe</h5>
          <ul className='list-unstyled'>
            <li className="d-inline-block">
             Sign up and be the first-in-the know about new arrivals,
             promotions, in-store events and more.
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer