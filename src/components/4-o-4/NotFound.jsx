import React from 'react';

import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <section id="not-found">
        <div id="title"></div>
        <div className="circles">
          <p>
            404
            <br/>
            <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  )
}

export default NotFound
