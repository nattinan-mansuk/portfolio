import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone, faLink, faCheck, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import './Contact.css';



export default function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const copy = () => {
    navigator.clipboard.writeText('nattinan.ms@hotmail.com').catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Let's Work <span>Together</span></h2>
        <p className="section-sub">Always happy to chat about opportunities</p>
      </div>

      <div className="contact__grid reveal">
        <div className="contact__card" onClick={copy}>
          <div>
            <div className="cc-label">
              <FontAwesomeIcon icon={faAt} /> Email</div>
            <div className="cc-val">nattinanms@outlook.co.th</div>
          </div>
          <span className="cc-copy">{copied ? <FontAwesomeIcon icon={faCheck} /> : 'Copy'}</span>
        </div>
        <div className="contact__card">
          <div>
            <div className="cc-label">
              <FontAwesomeIcon icon={faPhone} /> Phone</div>
            <div className="cc-val">061-616-9669</div>
          </div>
        </div>
        <a className="contact__card contact__card--link" href="https://nattinan.port.com" target="_blank" rel="noopener noreferrer">
          <div>
            <div className="cc-label">
              <FontAwesomeIcon icon={faLink} /> Portfolio</div>
            <div className="cc-val">nattinan.port.com</div>
          </div>
          <span className="cc-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
          </span>
        </a>
      </div>
    </section>
  );
}
