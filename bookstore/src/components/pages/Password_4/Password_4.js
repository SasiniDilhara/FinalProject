import './Password_4.css';
import React from 'react';
import pwd from './pwd.svg';


function Password_4() {
  return (
    <div className="pw_4">
      <div className="pw4_form">

      <div className='pw4_image'>
        <img className='pw4_img' src={pwd}/>
      </div>

        <h1 className='pw4_h1'>PASSWORD UPDATED<br/> SUCCESSFULLY</h1>
        <p className='pw4_p'>Your new password was updated successfully.<br/> Now try to login with your new password.</p>

        <div className='setButton'>
        <br/><button className='pw4_button' type="button" >Sign In</button>
        </div>

      </div>
      
    </div>
  );
}

export default Password_4;
