import './Navbar.css';
import React from 'react';


function Navbar() {
  return (
    <nav>
     <h3>LoGo</h3>

      <ul className='nav-links'>         
        <li><a href="/">Home</a></li>
        <li><a href="/singlemeal">Single meal</a></li>
        <li><a href="/searchpage">Search recipes</a></li>
        <li><a href="/mymeals">My meals</a></li>
      </ul>        

    </nav>
  );
}

export default Navbar;
