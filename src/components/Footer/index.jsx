import "./Footer.css";
import "../../index.css";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon";
import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import Linq from "../../components/Link";

export default function Footer() {
  let year = new Date();

  return (
    <>
      <hr />
      <footer className="footer">
        <div>
          <p className="m-0 p-footer">
            {year.getFullYear()} | Claudio D. Operti
          </p>
          <SocialIcon />
        </div>

        <div>
          <h3 className="m-0 p-footer">Secciones</h3>
          <ul>
            <li>
              <Link to="/" className="underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="underline">
                Sobre mi
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="underline">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact" >
          <h3 className="m-0 p-footer">Contacto</h3>
          <p>Presentame tu idea y te ayudo a hacerla realidad.</p>

          <Linq
            link="https://wa.me/543535084611"
            icon={whatsapp}
            alter="whatsapp number"
            ImageSize={{ width: 16, height: 16 }}
          >
            +54 353 5084611
          </Linq>
          <Linq
            link="mailto:claudio.operti@gmail.com"
            icon={mail}
            ImageSize={{ width: 16, height: 16 }}
          >
            claudio.operti@gmail.com
          </Linq>
        </div>
      </footer>
    </>
  );
}
