import '../styles/CollapseAccomodation.css'
import React, { useState } from 'react';

const ratingStar = (rating) => {
  const stars = []           
  for (let i = 0; i < 5; i++) {
      const className = i < rating ? "fullStar" : "emptyStar"
     stars.push(<span className={className} key={i}>&#9733;</span>)
  }
  return stars
}
export default function CollapseAccomodation({props}) {
  const [toggle, setToggle] = React.useState(false);
  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  function toogleDe(description) {
    setToggle({
      ...toggle,
      [description]: !toggle[description],
    });
  }
  return (
  
    <div className="accomodation-container">
      <div className="accomodations-list">
      {props.map((prop) => (
          <li key={prop.id} className="accomodation">
            <img src={prop.cover} className="accomodation-cover" alt="accomodation cover" />
            <div className="accomodations-header">
              <div className="accomodations-header left">
                <span className='accomodation-title'>{prop.title}</span>
                <span className='accomodation-location'>{prop.location}</span>
                <span className='accomodation-tags'>
                  {
                 prop.tags.map((element, index) => {
                    return (
                      <p className='accomodation-tag' key={"tag-"+index.toString()}>{element}</p>
                      )
                  })
                }
                  </span>
              </div>
              <div className="accomodations-header right">
                <div className='accomodation-host'>
                <span className='accomodation-host-name'>{prop.host.name}</span>
                <img src={prop.host.picture} className="accomodation-host-picture" alt="accomodation host" />
                </div>
                <div className="rating">
                        {ratingStar(prop.rating)}
                    </div>
              </div>
            </div>
            <div className="accomodations-toggles">
              <div className="accomodation-description">  
                <button className='accomodations-description btn' onClick={() => toogleDe(prop.description)}>
                  Description
                  <div className={'fa-solid fa-angle-up'} style={{ display: toggle[prop.description] ? 'block' : 'none' }}></div>
                  <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.description  ] ? 'block' : 'none' }}></div>
                </button>
                <span className={'description content'} style={{ display: toggle[prop.description] ? 'block' : 'none' }}>
                  {prop.description}
                </span>
              </div>
              <div className="accomodation-equipments">
                <button className='accomodations-equipment btn' onClick={() => toggleFunction(prop.id)}>
                  Équipements
                  <div className={'fa-solid fa-angle-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
                  <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
                </button>
                <span className={'equipment content'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
                {
                  prop.equipments.map((element, index) => {
                    return (
                      <p className='equipements' key={"equip-"+index.toString()}>{element}</p>
                      )
                  })
                }
                </span>
              </div>
            </div>
          </li>
     ))}
      </div>
    </div>
  );
}