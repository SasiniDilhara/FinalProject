import './Home.css';
import React from 'react';
import{Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link className='linklist' to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Addbook">
            Addbook
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Register">
            Register
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Password_1">
          Password_1
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Password_2">
          Password_2
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Password_3">
          Password_3
          </Link>
        </li>

        <li>
          <Link className='linklist' to="/Password_4">
          Password_4
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Home;
