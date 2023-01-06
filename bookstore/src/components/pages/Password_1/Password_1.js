import './Password_1.css';
import React from 'react';


function Password_1() {
  return (
    <div className="pw_1">
      <div className='pw1_form'>
        <h1 className='pw1_h1'><small>FORGOT YOUR </small><big> &#160;&#160;PASSWORD?</big></h1>  {/*&#160; is notation for leaving a space*/}
        <p className='pw1_p'>Resetting your password is easy. Just type your e-mail that you registered in V4U. <br/>We will send a code for resetting your password. <br/>Don't worry and be relaxed. </p>

        <div className="pw1_form-body"><br/><br/><br/>
              <div className="email">
                  <label className="form__label" for="email">Email : </label><br/>
                  <input  type="email" id="email" className="form__input" placeholder=" "/>
              </div>

              <br/><br/><button className="pw1_button" type="button" >Send Code</button>

              <br/><br/><br/><br/><br/>
              <span class="with-line"> or </span>
        </div>

        <div class="pw1_footer">
          <br/> Did you remember your password ? <a class="pw1_a" href="url">Login</a>
        </div>

      </div>

    </div>
  );
}

export default Password_1;
