import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "./Contact.css";
import whatsapp from "../../assets/icons/whatsapp.svg";
import SocialIcon from "../../components/SocialIcon";
import Linq from "../../components/Link";
import arrowTo from "../../assets/icons/arrow-to.svg";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r6387u2",
      "template_mocqr8r",
      e.target,
      "-fGuoikiZiShTXxp2"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Póngase en contacto</h2>
      <div className="contact__container container ">
        <div className="contact__content">
          <h3 className="contact__title">Otros medios de contacto</h3>

          <div className="contact__info">
            <div className="contact__card">
              <h3 className="contact__card-title">Email</h3>
              <a
                href="mailto:claudio.operti@gmail.com"
                className="contact__button"
              >
                claudio.operti@gmail.com
              </a>
            </div>
            <div className="contact__card">
              <h3 className="contact__card-title">Whatsapp</h3>
              <div>
                <Linq
                  link="https://wa.me/543535084611"
                  icon={whatsapp}
                  alter="whatsapp number"
                  ImageSize={{ width: 16, height: 16 }}
                >
                  +54 353 5084611
                </Linq>
              </div>
            </div>

            <div className="contact__card">
              <h3 className="contact__card-title">Redes Sociales</h3>
              <SocialIcon />
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Deje su mensaje</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Ingrese su nombre"
                id="name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Ingrese su correo"
                id="email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Mensaje</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Deje su mensaje"
                id="message"
              ></textarea>
            </div>

            <button className="button-contact">
              Enviar Mensaje
              <img src={arrowTo} alt="arrow icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
