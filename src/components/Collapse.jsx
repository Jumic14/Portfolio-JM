import '../styles/Collapse.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom' 
import abouts from '../data/abouts';
import projects from '../data/projects';


export default function Collapse({props}) {
	let currentId = useParams().id;
	const currentLocation = window.location.pathname;

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

  if (currentLocation === "/About") {
	props = Array.from(abouts) 
	return (
	  <div className="abouts-container">
		<div className="abouts-list">
		  {props.map((prop) => (
			<div key={prop.id} className="about-element">
			  <button className='about-btn' onClick={() => toggleFunction(prop.id)}>
				<div className={'fa-solid fa-angles-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
				<div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
				{prop.title}
			  </button>
			  <span className={'about-text'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
				{
					 prop.content.map((element, index) => {
						if (!prop.path) {
						return (
						  <p className='about' key={"about-"+index.toString()}>{element}</p>
						  )}
						  else {
							return (
								<div>
							<p className='about' key={"about-"+index.toString()}>{element}</p>
							<p className='about'>Diplôme enregistré au RCNP niveau 5</p>
							<p className='about'>OpenClassrooms</p>
							<p className='about'>Vous pouvez accéder à la présentation complète de la formation <Link to={prop.path}>ici</Link>.</p> 
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
else if (currentLocation === ("/Projects/"+currentId)){
	props=Array.from(projects)
	return (
		<div className="project-container">
		  <div className="projects-list">
		  {props.filter((prop) => prop.id === currentId).map((prop) => (
					  <div key={prop.id} className="project">
				<div className="projects-header">
				  <div className="projects-header left">
					<span className='project-title'>{prop.title}</span>
					<span className='project-location'>{prop.year}</span>
					<span className='project-recap'>{prop.description}</span>
				  </div>
				  <div className="projects-header right">
				  <span className='project-stacks'>
					  {
					 prop.stack.map((element, index) => {
						return (
						  <p className='project-stack' key={"stack-"+index.toString()}>{element}</p>
						  )
					  })
					}
					  </span>
					  <div className='github'>
					  <Link to={prop.repo}><i className="fa-brands fa-github" /></Link>
					  </div>
				  </div>
				</div>
				<div className="projects-toggles">
				<div className="project-description">
					<button className='projects-description btn' onClick={() => toogleDe(prop.description)}>
					  Description
					  <div className={'fa-solid fa-angles-up'} style={{ display: toggle[prop.description] ? 'block' : 'none' }}></div>
					  <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.description] ? 'block' : 'none' }}></div>
					</button>
					<span className={'description content'} style={{ display: toggle[prop.description] ? 'block' : 'none' }}>
					{
					  prop.competences.map((element, index) => {
						return (
						  <p className='description' key={"equip-"+index.toString()}>{element}</p>
						  )
					  })
					}
					</span>
				  </div>
				  <div className="project-ressources">
					<button className='projects-ressources btn' onClick={() => toggleFunction(prop.id)}>
					  Ressources
					  <div className={'fa-solid fa-angles-up'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}></div>
					  <div className={'fa-solid fa-angle-down'} style={{ display: !toggle[prop.id] ? 'block' : 'none' }}></div>
					</button>
					<span className={'ressources content'} style={{ display: toggle[prop.id] ? 'block' : 'none' }}>
					{
					  prop.ressources.map((element, index) => {
						return (
						  <p className='ressources' key={"equip-"+index.toString()}>{element}</p>
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