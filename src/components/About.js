import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faEarthAsia, faSchool } from '@fortawesome/free-solid-svg-icons'
import './About.css';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '2', label: 'Companies' },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={ref}>
      {/* Deco */}
      <div className="about-sq about-sq1" />
      <div className="about-sq about-sq2" />

      <div className="about__inner">
        {/* Left */}
        <div className="about__left reveal">
          <div className="about__img-frame">
            <div className="frame-deco frame-deco-blue" />
            <div className="frame-deco frame-deco-yellow" />
            <div className="about__exp-badge">
              <span className="exp-num">4+</span>
              <span className="exp-label">Years<br/>Experience</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="about__right reveal">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Frontend <span>Developer</span></h2>

          <p className="about__para">
            Frontend Developer with <strong>4+ years</strong> of experience developing enterprise websites
            and Investor Relations (IR) systems. I focus on creating responsive and cross-browser compatible
            interfaces, with a commitment to pixel-perfect UI based on Figma designs.
          </p>
          <p className="about__para">
            I use AI tools (<strong>Claude, ChatGPT</strong>) to improve my workflow and speed up
            development. My experience also includes website maintenance and collaborating directly with clients.
          </p>

          <div className="about__stats">
            {stats.map(s => (
              <div className="astat" key={s.label}>
                <span className="astat__value">{s.value}</span>
                <span className="astat__text">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about__info-row">
            <div className="info-item">
              <span className="info-icon"> <FontAwesomeIcon icon={faCakeCandles} /></span>
              <span>1995 / 08 / 16</span>
            </div>
            <div className="info-item">
              <span className="info-icon"><FontAwesomeIcon icon={faEarthAsia} /></span>
              <span>Thai Nationality</span>
            </div>
            <div className="info-item">
              <span className="info-icon"><FontAwesomeIcon icon={faSchool} /></span>
              <span>Silpakorn University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
