import React from "react";
import "./Presentation.css";
import perfil from "../../assets/images/AboutMe/Perfil.png";
import SocialIcon from "../../components/SocialIcon";
import "../../index.css";
import ButtonOutline from "../../components/ButtonOutline/index";
import ButtonPrimary from "../../components/ButtonPrimary/index";
import Typewriter from "../../components/Typewriter/index";
import arrowTo from "../../assets/icons/arrow-to.svg";
import download from "../../assets/icons/download.svg";
import downloadCV from "../../assets/CV Operti Claudio.pdf";

export default function Presentation() {
  return (
    <section className="flex-init presentation">
      <div className="section-1">
        <h1>Claudio D. Operti</h1>
        <Typewriter>Full-Stack Developer</Typewriter>
        <p>
          Desarrollador de aplicaciones de escritorio con mas de 12 años de
          experiencia en tecnologias como VB y C#
        </p>
        <SocialIcon />
        <div className="flex contain-btnpresentation">
          <div className="btn-presentation">
            <ButtonPrimary
              type="BtnIcon"
              icon={arrowTo}
              alter="arrow up icon"
              link="/about"
            >
              Sobre mi
            </ButtonPrimary>
          </div>
          <div className="btn-presentation">
            <ButtonOutline
              type="BtnIcon"
              icon={download}
              alter="download icon"
              link={downloadCV}
            >
              Decargar <span translate="no">CV</span>
            </ButtonOutline>
          </div>
        </div>
      </div>

      <div className="section-2">
        <img src={perfil} alt="Claudio Operti face" className="perfil" />
      </div>
    </section>
  );
}
