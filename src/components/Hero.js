import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const roles = ['Frontend Developer','UI Implementer','AI-Assisted Dev','Pixel-Perfect Coder'];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const t = useRef(null);

  useEffect(() => {
    const cur = roles[roleIdx];
    if (typing) {
      if (displayed.length < cur.length) {
        t.current = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 65);
      } else {
        t.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="home">
      {/* Deco squares */}
      <div className="sq sq-1" />
      <div className="sq sq-2" />
      <div className="sq sq-3" />
      <div className="sq sq-4" />

      {/* Left big text */}
      <div className="hero__left">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__first">NATTINAN</h1>
      </div>

      {/* Center photo */}
      <div className="hero__photo-wrap">
        <div className="photo-card">
          <img src={profileImg} alt="Nattinan Mansuk" />
          <div className="photo-badge">
            Call me Kie
          </div>
        </div>
      </div>

      {/* Right big text */}
      <div className="hero__right">
        <h1 className="hero__last">MANSUK</h1>
        <div className="hero__role-wrap">
          <span className="hero__role">{displayed}<span className="cursor">|</span></span>
        </div>
        <div className="hero__stats">
          <div className="hero__stat"><span className="sv">4+</span><span className="sl">Years Exp.</span></div>
          <div className="hero__stat"><span className="sv">10+</span><span className="sl">Projects</span></div>
          <div className="hero__stat"><span className="sv">AI</span><span className="sl">Assisted</span></div>
        </div>
      </div>
    </section>
  );
}
