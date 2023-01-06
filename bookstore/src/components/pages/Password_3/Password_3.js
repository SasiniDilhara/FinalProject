import './Password_3.css';
import React from 'react';

function Password_3() {
  return (
    <div className="pw_3">

      <div className="pw3_form">
       <h1 className='pw3_h1'>CREATE NEW PASSWORD</h1>
       <p className='pw3_p'>Your password must be different from the previous password. <br/> Set a strong password to keep your account secure.</p>

          <br/><br/><br/><br/>
          <div className="pw3_password">
              <label className="form__label" for="password">Password : </label><br/>
              <input className="form__input" type="password"  id="password" placeholder=" "/>
          </div>
          <br/><br/>
          
          <div className="pw3_confirm-password">
              <label className="form__label" for="confirmPassword">Confirm Password : </label><br/>
              <input className="form__input" type="password" id="confirmPassword" placeholder=" "/>
          </div> 

          <br/><br/><br/><br/><br/><button className='pw3_button' type="button" >Reset Password</button>

      </div>
      
    </div>
  );
}

export default Password_3;
