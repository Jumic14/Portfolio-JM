import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Form.css";

export default function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxost0m",
        "template_5n8jtyb",
        form.current,
        "-_jNeJvDMe5TN2qQj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Votre message a bien été envoyé !");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            JSON.stringify(error)
          );
        }
      );
  };

  return (
    <div className="form-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="form-label">Votre nom</label>
        <input type="text" name="user_name" />
        <label>Votre e-mail</label>
        <span className="disclaimer">*Votre email ne sera utilisé que dans le cadre d'une réponse à une demande de prise de contact.</span>
        <input type="email" name="user_email" />
        <label>Votre message</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
