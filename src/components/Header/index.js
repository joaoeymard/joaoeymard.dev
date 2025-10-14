import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo_eymard_full_dark.svg";
import imgJoaoeymard from "../../assets/joaoeymard.jpeg";

import "./style.css";

function Header() {
  return (
    <header>
      <div className="container py-4 px-3">
        <section className="d-flex justify-content-between align-items-center">
          <figure className="img-brand d-flex flex-column m-0">
            <img src={imgLogo} alt="Logo João Eymard" />
            {/* <span>Front-end Developer</span> */}
          </figure>
          <Link to="/">
            <figure className="img-person m-0">
              <img src={imgJoaoeymard} alt="João Eymard" />
            </figure>
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Header;
