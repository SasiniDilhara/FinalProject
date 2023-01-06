import './Register.css';
import React from 'react';
import { useState } from 'react';
import read from './read.svg';


function Register() {
  
   const[showhide,setShowhide]=useState('');

   const handleshowhide=(event)=>{
    const getuser = event.target.value;
    console.log(getuser);
    setShowhide(getuser);
   }

   return (
    <div className="register">

      <div className='reg_image'>
        <img className='r_image' src={read}/>
      </div>

      <div className="reg_form">
          <p className='reg_p'>Get Started with</p> 
            <h1 className='reg_h1'>V4U</h1>

            <div className="reg_form-body">
              
              <div className="username"> 
                  <label className="form__label" for="userName">User Name : </label><span class="required">*</span><br/>
                  <input className="form__input" type="text" id="userName" placeholder="User Name"/>
              </div>
              <br/>

              <div className="firstname"> 
                  <label className="form__label" for="firstName">First Name : </label><br/>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <br/>

              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name : </label><br/>
                  <input className="form__input" type="text" id="lastName" placeholder="Last Name"/>
              </div>
              <br/>
              
              <div className="email"> 
                  <label className="form__label" for="email">Email : </label><span class="required">*</span><br/>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <br/>
              
              <div className="reg_password"> 
                  <label className="form__label" for="password">Password : </label><span class="required">*</span><br/>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <br/>

              <div className="reg_confirm-password"> 
                  <label className="form__label" for="confirmPassword">Confirm Password : </label><span class="required">*</span><br/>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div> 
              <br/>

              <div className="reg_dropdown">
              <label className="form__label" for="dropdown">Select a User : </label><span class="required">*</span>
              <select aria-label="Default select example" onChange={(e)=>(handleshowhide(e))}>
                <option></option>
                <option value="1">Reader</option>
                <option value="2">Author</option>
                <option value="4">Translator</option>
                <option value="5">Editor</option>
              </select>
              </div>
              <br/>

              {
                showhide==="2" &&(
                  <div className='user_info'>
                  <label className='info'>User Qualification:</label><br/><br/>
                  <textarea name="qualifi" className='author_qalifi'></textarea>
                  </div>
                  
                )
              }
              <br/>
              
              <div className='privacy_check'> 
                <input className='reg_checkbox' type="checkbox" id="check" name="check" value="agree"/>
                <label for="check"> I agree to all the terms and conditions.</label><span class="required">*</span>
              </div>
              
              <br/><br/><button className='reg_button' type="button">Sign Up</button>
           </div>
           <br/>
          
           <span class="with-line"> or </span>
          
          <div class="reg_footer">
           <br/> Already have an account? <a className='reg_a' href="url">Login</a>
          </div>

      </div>



    </div>
    
  );
}


export default Register;
