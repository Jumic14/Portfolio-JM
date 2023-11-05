import "../styles/Collapse.css";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import certifications from "../data/certifications";
import projects from "../data/works";
import stack from "../data/stack";
import openclassrooms from "./../assets/images/openclassrooms.jpg";

export default function Collapse({ props }) {
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
  function toogleSk(skills) {
    setToggle({
      ...toggle,
      [skills]: !toggle[skills],
    });
  }
  function toogleRe(ressources) {
    setToggle({
      ...toggle,
      [ressources]: !toggle[ressources],
    });
  }

  if (currentLocation === "/Certifications") {
    let certificates = Array.from(certifications);
    props = Array.from(stack);

    return (
      <div className="certifications-container">
        <img src={openclassrooms} className="website-img" alt="website img" />
        <div className="certifications-list">
          {props.map((prop) => (
            <div key={"content" + prop.id} className="certificate-element">
              <button
                className="certificate-btn"
                onClick={() => toggleFunction(prop.id)}
              >
                <div
                  className={"fa-solid fa-angles-up"}
                  style={{ display: toggle[prop.id] ? "block" : "none" }}
                ></div>
                <div
                  className={"fa-solid fa-angle-down"}
                  style={{ display: !toggle[prop.id] ? "block" : "none" }}
                ></div>
                {prop.content}
              </button>
              <span
                className={"certificate-text"}
                style={{ display: toggle[prop.id] ? "block" : "none" }}
              >
                {certificates
                  .filter((certificate) => certificate.category === prop.title)
                  .map((certificate) => (
                    <div
                      key={"certificate" + certificate.id}
                      className="certificate"
                    >
                      {
                        <Link to={"/Certifications/" + certificate.id}>
                          <span>{certificate.title}</span>
                        </Link>
                      }
                    </div>
                  ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (currentLocation === "/Works/" + currentId) {
    props = Array.from(projects);
    return (
      <div className="project-container">
        <div className="projects-list">
          {props
            .filter((prop) => prop.id === currentId)
            .map((prop) => (
              <div key={"project" + prop.id} className="project">
                <span className="project-title">{prop.title}</span>
                <span className="project-date">{prop.year}</span>
                <div className="projects-header">
                  <div className="projects-header left">
                    <span className="project-intro">{prop.intro}</span>
                    <span className="project-context">{prop.context}</span>
                  </div>
                  <div className="projects-header right">
                    <span className="project-stacks">
                      {prop.stack.map((element, index) => {
                        return (
                          <p
                            className="project-stack"
                            key={"stack-" + index.toString()}
                          >
                            {element}
                          </p>
                        );
                      })}
                    </span>
                    <div className="github">
                      <Link to={prop.repo}>
                        <i className="fa-brands fa-github" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="project-description">
                  <button
                    className="projects-description btn"
                    onClick={() => toogleDe(prop.description)}
                  >
                    <div
                      className={"fa-solid fa-angles-up"}
                      style={{
                        display: toggle[prop.description] ? "block" : "none",
                      }}
                    ></div>
                    <div
                      className={"fa-solid fa-angle-down"}
                      style={{
                        display: !toggle[prop.description] ? "block" : "none",
                      }}
                    ></div>
                    Description
                  </button>
                  <span
                    className={"description content"}
                    style={{
                      display: toggle[prop.description] ? "block" : "none",
                    }}
                  >
                    {prop.description.map((element, index) => {
                      return (
                        <p
                          className="description"
                          key={"desc-" + index.toString()}
                        >
                          {element}
                        </p>
                      );
                    })}
                  </span>
                </div>
                <div className="projects-toggles">
                  <div className="project-skills">
                    <button
                      className="projects-skills btn"
                      onClick={() => toogleSk(prop.skills)}
                    >
                      <div
                        className={"fa-solid fa-angles-up"}
                        style={{
                          display: toggle[prop.skills] ? "block" : "none",
                        }}
                      ></div>
                      <div
                        className={"fa-solid fa-angle-down"}
                        style={{
                          display: !toggle[prop.skills] ? "block" : "none",
                        }}
                      ></div>
                      Compétences
                    </button>
                    <span
                      className={"skill content"}
                      style={{
                        display: toggle[prop.skills] ? "block" : "none",
                      }}
                    >
                      {prop.skills.map((element, index) => {
                        return (
                          <p
                            className="skill"
                            key={"skill-" + index.toString()}
                          >
                            {element}
                          </p>
                        );
                      })}
                    </span>
                  </div>
                  <div className="project-ressources">
                    <button
                      className="projects-ressources btn"
                      onClick={() => toogleRe(prop.ressources)}
                    >
                      <div
                        className={"fa-solid fa-angles-up"}
                        style={{
                          display: toggle[prop.ressources] ? "block" : "none",
                        }}
                      ></div>
                      <div
                        className={"fa-solid fa-angle-down"}
                        style={{
                          display: !toggle[prop.ressources] ? "block" : "none",
                        }}
                      ></div>
                      Ressources
                    </button>
                    <span
                      className={"ressources content"}
                      style={{
                        display: toggle[prop.ressources] ? "block" : "none",
                      }}
                    >
                      {prop.ressources.map((element, index) => {
                        return (
                          <p
                            className="ressources"
                            key={"ress-" + index.toString()}
                          >
                            {element}
                          </p>
                        );
                      })}
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
