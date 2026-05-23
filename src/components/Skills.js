import React, { useEffect, useRef } from 'react';
import './Skills.css';

const levels = {
  learning: { label: 'Learning', color: '#b07d1a', bg: '#ffec9f' },
};

const groups = [
  {
    cat: 'Frontend',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SCSS' },
      { name: 'Bootstrap' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'Laravel', sub: 'Blade' },
    ],
  },
  {
    cat: 'Backend & DB',
    items: [
      { name: 'WordPress', sub: 'Custom Plugins' },
      { name: 'MySQL' },
      { name: 'C#' },
    ],
  },
  {
    cat: 'Tools & Analytics',
    items: [
      { name: 'Figma', sub: 'Design-to-Code' },
      { name: 'GA4', sub: 'Analytics' },
      { name: 'GTM', sub: 'Tag Manager' },
      { name: 'GitHub' },
      { name: 'Photoshop' },
    ],
  },
  {
    cat: 'Libraries (frequently used)',
    items: [
      { name: 'ECharts' },
      { name: 'Swiper.js' },
      { name: 'Slick Slider' },
      { name: 'ScrollMagic' },
      { name: 'Google Charts' },
    ],
  },
  {
    cat: 'Other',
    items: [
      { name: 'Unity (game engine)' }
    ],
  },
  {
    cat: 'Learning',
    items: [
      { name: 'React' },
      { name: 'Tailwind' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">My <span>Skills</span></h2>
      </div>

      <div className="skills__groups">
        {groups.map((g, gi) => (
          <div className="skill-group reveal" key={g.cat} style={{ '--delay': `${gi * 0.08}s` }}>
            <div className="skill-group__head">
              <span className="sg-icon">{g.icon}</span>
              <h3 className="sg-cat">{g.cat}</h3>
            </div>
            <div className="skill-grid">
              {g.items.map(item => {
                const lv = levels[item.level];
                return (
                  <div className="skill-card" key={item.name}>
                    <span className="skill-card__name">{item.name}</span>
                    {item.sub && <span className="skill-card__sub">{item.sub}</span>}
                    {lv && (
                      <span className="skill-card__level" style={{ background: lv.bg, color: lv.color }}>
                        {lv.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
