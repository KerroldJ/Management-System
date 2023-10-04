import React from 'react'
import './login.css';
import {MdEmail} from "react-icons/md";
import {FaLock} from "react-icons/fa6";


const login = () => {
  return (
    <div className='Login-component'>
        <div className='container'>
            <form action=''>
              <div className='form-container'>
                  <MdEmail/>
                  <input type='email' placeholder='Email' />
              </div>
              
              <div lassName='form-container'>
                  <FaLock />
                  <input type='password' placeholder='Password' />
              </div>
              
              <div className='form-container'>
                  <img src='' alt='' />
                  <input type="submit" value="Submit" />
              </div>
            </form>
        </div>
    </div>
  )
}

export default login