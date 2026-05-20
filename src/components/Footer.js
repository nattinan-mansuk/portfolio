import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__name">Nattinan Mansuk</div>
          <div className="footer__role">Frontend Developer</div>
        </div>
        <div className="footer__cols">
          <div>
            <div className="fc-head">Contact</div>
            <div className="fc-item"><FontAwesomeIcon icon={faPhone} /> 061-616-9669</div>
            <div className="fc-item"><FontAwesomeIcon icon={faAt} /> nattinanms@outlook.co.th</div>
            <div className="fc-item"><FontAwesomeIcon icon={faLocationPin} /> Bang Kho Laem, Bangkok 10120</div>
          </div>
          <div>
            <div className="fc-head">Links</div>
            <a className="fc-item fc-link" href="https://nattinan.port.com" target="_blank" rel="noopener noreferrer">🌐 nattinan.port.com</a>
            <a className="fc-item fc-link" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          </div>
          <div>
            <div className="fc-head">Education</div>
            <div className="fc-item"><strong>Silpakorn University</strong></div>
            <div className="fc-item" style={{fontSize:'12px',marginTop:'2px'}}>B.S. Information &amp; Communication Technology<br/>Major: Game Design</div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Nattinan Mansuk (Kie). All rights reserved.</span>
        <span>Built with React 💛</span>
      </div>
    </footer>
  );
}
