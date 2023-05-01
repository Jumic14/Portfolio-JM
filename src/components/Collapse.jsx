import '../styles/Collapse.css'
import React, { useState } from 'react';

export default function Collapse({props}) {
  const [toggle, setToggle] = React.useState(false);
  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  return (
    <div className="abouts-container">
      <div className="abouts-list">
        {props.map((prop) => (
          <li key={prop.id} className="about">
            <button className='about-btn' onClick={() => toggleFunction(prop.id)}>
              {prop.title}
              <div className={'fa-solid fa-angle-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
              <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
            </button>
            <span className={'about-text'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
              {prop.content}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}