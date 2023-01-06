import './Addbook.css';
import React from 'react';
import { useState } from 'react';


function Addbook() {
  return (


    <div className="add_book">

      <div className='ad_form'>
        <h1>Add your Book</h1>  
        <p>.....</p>

        <div className="ad_form-body"><br/>

              <div className="bookname">
                  <label className="form__label" for="booktName">Book Name : </label><br/>
                  <input className="form__input" type="text" id="bookName" placeholder="Book Name"/>
              </div>
              <br/>
              
              <div className="ISBN">
                  <label className="form__label" for="isbm">Book ISBN : </label><br/>
                  <input className="form__input" type="text" id="isbn" placeholder="Enter Book ISBN"/>
              </div>
              <br/>

              <div className="Au_name">
                  <label className="form__label" for="Au_name">Author's Name : </label><br/>
                  <input  type="text" name="" id="Au_name"  className="form__input"placeholder="Author's Name"/>
              </div>
              <br/>

              <div className="Category">
                 <label className="form__label" for="category">Book Catergory : </label><br/>
                 <input className="form__input" type="text" id="category" placeholder=" "/>
              </div>
              <br/>

              <div className='book_info'>
                  <label className='info'>Book Description:</label><br/><br/>
                  <textarea name="bookdes" className='book_descrip'></textarea>
              </div>
              <br/>

              <div className='ebook'>
                <label for="myfile">Attach e-Copy of Book :</label><br/>
                <input type="file" id="myfile" name="myfile" multiple/>
              </div>
              <br/>

              <div className='copyright'>
                <label for="myfile">Provide copy-right certificate for above book :</label><br/>
                <input type="file" id="myfile" name="myfile" multiple/>
              </div>
              <br/>


              <br/><button className="ad_button" type="button">ADD BOOK</button>
        </div>
      </div>

    </div>
  )
}


export default Addbook; 