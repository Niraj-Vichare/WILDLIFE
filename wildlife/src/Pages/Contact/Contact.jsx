import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className="main-div-contact">
        <form className='form-style'>
            <h1>Connect With Us</h1>
            <div>
                <label  className="label-style">Username</label><br />
                <input type="text" className="input"/>
            </div>
            <div>
                <label  className="label-style">Email</label><br />
                <input type="email" className="input"/>
            </div>
            <div>
                <label  className="label-style">State</label><br />
                <input type="text" className="input"/>
            </div>
            <div>
                <label  className="label-style">Country</label><br />
                <input type="text" className="input"/>
            </div>
            <div>
                <button className='button-style input-style'>Connect</button>
            </div>
        </form>
    </div>

  )
}

export default Contact