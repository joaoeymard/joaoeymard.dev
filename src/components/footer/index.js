import './style.css';

import mailDotRu from '../../assets/icons/mail-dot-ru.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

function Footer() {
  return (
    <footer className="container pt-4">
      <div className="list-group flex-row">
        <a href="mailto:my@joaoeymard.dev" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={mailDotRu} alt="joaoeymard" height="20" width="20" />
        </a>
        <a href="https://linkedin.com/in/joaoeymard" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={linkedin} alt="joaoeymard" height="20" width="20" />
        </a>
        {/* <a href="https://fb.com/joaoeymard" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={facebook} alt="joaoeymard" height="20" width="20" />
        </a> */}
        <a href="https://instagram.com/joaoeymard" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={instagram} alt="joaoeymard" height="20" width="20" />
        </a>
        {/* <a href="https://t.me/joaoeymard" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={telegram} alt="joaoeymard" height="20" width="20" />
        </a> */}
        <a href="https://wa.me/5588999114867" target="blank" className="list-group-item flex-fill w-25 mb-3 mx-1 p-3">
          <img align="center" src={whatsapp} alt="joaoeymard" height="20" width="20" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;