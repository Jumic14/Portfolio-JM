import '../styles/Collapse.css'
import React, { useState } from 'react';
import abouts from '../data/abouts';
import datas from '../data/datas';
import ratingStar from './Ratings';
import { useNavigate, useParams } from 'react-router-dom';


export default function Collapse({props}) {
	let currentId = useParams().id;
	const currentLocation = window.location.href;

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

  if (currentLocation === "http://localhost:3000/About") {
	props = Array.from(abouts) 
  return (
    <div className="abouts-container">
      <div className="abouts-list">
        {props.map((prop) => (
          <div key={prop.id} className="about-element">
            <button className='about-btn' onClick={() => toggleFunction(prop.id)}>
              {prop.title}
              <div className={'fa-solid fa-angle-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
              <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
            </button>
            <span className={'about-text'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
              {prop.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 
else if (currentLocation === ("http://localhost:3000/Accomodation/"+currentId)){
	props=Array.from(datas)
	return (
		<div className="accomodation-container">
		  <div className="accomodations-list">
		  {props.filter((prop) => prop.id === currentId).map((prop) => (
					  <div key={prop.id} className="accomodation">
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
			  </div>
		 ))}
		  </div>
		</div>
	  );
}
}