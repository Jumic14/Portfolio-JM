import React, { useParams } from "react-router-dom";
import ErrorPage from "./error-page";
import certifications from "../data/certifications";
import icon from "./../assets/images/certifications.png";
import "../styles/Certifications.css";

const Certificate = () => {
  let currentId = useParams().id;
  let pageUrl = window.location.pathname;
  const idList = [];
  certifications.forEach((element) => idList.push(element.id));

  if (
    idList.includes(currentId) &&
    pageUrl === "/Certifications/" + currentId
  ) {
    let picture = certifications.find(
      (element) => element.id === currentId
    ).pictures;

    return (
      <section>
        <article className="certificate-article">
          <span className="certificate-title">
            {certifications.find((element) => element.id === currentId).title}
          </span>
          <p className="certificate-introduction">
            Les objectifs de cette certification sont :
          </p>
          <div className="certificate-content">
            <img
              src={icon}
              className="certifications-icon"
              alt="certifications img"
            />
            <div className="certificate-list">
              {certifications
                .find((element) => element.id === currentId)
                .skills.map((element, index) => {
                  return (
                    <p
                      className="certificate-skill"
                      key={"certificate-skill-" + index.toString()}
                    >
                      {element}
                    </p>
                  );
                })}
            </div>
          </div>
          <img
            src={picture}
            className="certificate-img"
            alt="certificate img"
          />
        </article>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
};

export default Certificate;
