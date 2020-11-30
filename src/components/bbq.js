import React, { Component } from 'react';
import bbq from './images/bbq.jpg';
import './css/slice.css';
function Bbq() {
  return(
    <div className="Bbq col-4">
      <div className="card">
         <img src={ bbq } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">BBQ Slice</h5>
          <p className="card-text">The newest flavour on our menu.
          if you try this once and we swear you'll be hooked on it's savory taste.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
    </div>
    </div>
  )
}

export default Bbq;
