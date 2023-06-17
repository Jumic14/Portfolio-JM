import Banner from './../components/Banner'
import { Link } from 'react-router-dom' 
import html from './../assets/images/html.svg';
import css from './../assets/images/css.svg';
import js from './../assets/images/js.svg';
import react from './../assets/images/react.svg';
import node from './../assets/images/node.svg';
import mongo from './../assets/images/mongo.png';
import git from './../assets/images/github.png';
import vsc from './../assets/images/vsc.png';
import figma from './../assets/images/figma.svg';
import '../styles/Home.css'

export default function Home() {
  return (
    <section className='home'>
      <aside className='banner-home'>
        <Banner />
      </aside>
      <div className='home-container'>
        <div className='home-introduction'>
          Bienvenue sur mon portfolio !
        </div>
        <div className="home-summary">
                <ul>
                    <li>
                        { <Link to="/Projects">Projets</Link> }
                    </li>
                    <li>
                        { <Link to="/About">A propos de moi</Link> }
                    </li>
                    <li>
                        { <Link to="/Contact">Contact</Link> }
                    </li>
                </ul>
        </div>
        <span className='skills-title'>Compétences</span>
        <div className='home-skills'>  
          <div className='skills'>
            <div className='stack'>
              <img src={html} className="stack-img" alt="stack img" />
              <span className='stack-txt'>HTML 5</span>
            </div>
            <div className='stack'>
              <img src={css} className="stack-img" alt="stack img" />
              <span className='stack-txt'>CSS 3</span>
            </div>
            <div className='stack'>
              <img src={js} className="stack-img" alt="stack img" />
              <span className='stack-txt'>JavaScript</span>
            </div>
            <div className='stack'>
              <img src={react} className="stack-img" alt="stack img" />
              <span className='stack-txt'>React.js</span>
            </div>
            <div className='stack'>
              <img src={node} className="stack-img" alt="stack img" />
              <span className='stack-txt'>Node.js</span>
            </div>
            <div className='stack'>
              <img src={mongo} className="stack-img" alt="stack img" />
              <span className='stack-txt'>MongoDB</span>
            </div>
          </div>
          <span className='tools-title'>Outils</span>
          <div className="tools">
            <div className='tool'>
              <img src={vsc} className="tool-img" alt="stack img" />
              <span className='stack-txt'>VSCode</span>
            </div>
            <div className='tool'>
              <img src={git} className="tool-img" alt="stack img" />
              <span className='stack-txt'>Git/GitHub</span>
            </div>
            <div className='tool'>
              <img src={figma} className="tool-img" alt="stack img" />
              <span className='stack-txt'>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

