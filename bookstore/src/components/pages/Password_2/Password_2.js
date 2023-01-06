import './Password_2.css';
import React from 'react';
import PinInput from "react-pin-input";

function Password_2() {
  return (
    <div className="pw_2">
      <div className='pw2_form'>
        <br/><br/><h1 className='pw2_h1'>CHECK YOUR INBOX</h1>
        <p className='pw2_p'>We have sent a recovery code to your e-mail <br/> Please enter the code that you received.</p>
        
        <br/><br/><br/>
        <div className='pw2_PIN'>
        <PinInput className="pin" length={6} focus type="numeric" inputMode="numeric" 
        style={{padding: '10px'}}  
        inputStyle={{borderColor: 'white'}}
        inputFocusStyle={{borderColor: 'yellow'}} />
        </div>

        <div className='pw2_BUTTON'>
        <br/><button className='pw2_button' type="button">Submit</button>
        </div>

        <br/><br/><br/><br/>
              <span class="with-line"> or </span>

      

      <div class="pw2_footer">
          <br/><br/> Didn't receive the e-mail? Please check your spam folder. <br/><a className='pw2_a' href="url">Send Again</a>
      </div>

      </div>

    </div>
  );
}

export default Password_2;
