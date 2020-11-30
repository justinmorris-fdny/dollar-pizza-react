import React, { Component } from 'react';


function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
         <b></b>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
          <li class="nav-item active">
            <a>Address<span class="sr-only">(current)</span></a>
          <b>555 Time Square, NY, NY 1000</b>
          <br></br>
            <a>Phone Number</a>
            <b>(212) 555 5555.</b>
          </li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
