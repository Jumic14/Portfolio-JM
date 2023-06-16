import '../styles/Collapse.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom' 
import abouts from '../data/abouts';
import projects from '../data/projects';


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
				{
					 prop.content.map((element, index) => {
						if (!prop.path) {
						return (
						  <p className='equipements' key={"equip-"+index.toString()}>{element}</p>
						  )}
						  else {
							return (
								<div>
							<p className='equipements' key={"equip-"+index.toString()}>{element}</p>
							<Link to={prop.path}>Retrouvez le détail de la formation ici !</Link> 
							</div>

						  )}
					  })
				}
				
				            

			  </span>
			</div>
		  ))}
		</div>
	  </div>
	);
} 
else if (currentLocation === ("http://localhost:3000/Projects/"+currentId)){
	props=Array.from(projects)
	return (
		<div className="accomodation-container">
		  <div className="accomodations-list">
		  {props.filter((prop) => prop.id === currentId).map((prop) => (
					  <div key={prop.id} className="accomodation">
				<div className="accomodations-header">
				  <div className="accomodations-header left">
					<span className='accomodation-title'>{prop.title}</span>
					<span className='accomodation-location'>{prop.year}</span>
					<span className='accomodation-location'>{prop.description}</span>
				  </div>
				  <div className="accomodations-header right">
				  <span className='accomodation-tags'>
					  {
					 prop.stack.map((element, index) => {
						return (
						  <p className='accomodation-tag' key={"tag-"+index.toString()}>{element}</p>
						  )
					  })
					}
					  </span>
					  <div>
					  <Link to={prop.repo}><i class="fa-brands fa-github" /></Link>
					  </div>
				  </div>
				</div>
				<div className="accomodations-toggles">
				<div className="accomodation-equipments">
					<button className='accomodations-equipment btn' onClick={() => toggleFunction(prop.id)}>
					  Équipements
					  <div className={'fa-solid fa-angle-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
					  <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
					</button>
					<span className={'equipment content'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
					{
					  prop.competences.map((element, index) => {
						return (
						  <p className='equipements' key={"equip-"+index.toString()}>{element}</p>
						  )
					  })
					}
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
					  prop.ressources.map((element, index) => {
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