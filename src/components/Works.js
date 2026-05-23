import React, { useEffect, useRef, useState } from 'react';
import './Works.css';
import axtrart from '../assets/axtrart.jpg';
import ptc     from '../assets/ptc.jpg';
import ptt     from '../assets/ptt.jpg';
import tman    from '../assets/tman.jpg';
import safe    from '../assets/safe.jpg';
import twpc    from '../assets/twpc.jpg';
import wash    from '../assets/wash02.jpg';
import hermes    from '../assets/hermes.jpeg';
import anvinest    from '../assets/anvinest.jpg';

const projects = [
  { id:1, title:'AXTRART',         category:'IR System',         tags:['Content Page'],   img:axtrart, size:'wide',   url:'https://www.axtrart.com/th/home' },
  { id:2, title:'TMAN',            category:'IR System',         tags:['Full Website'],   img:tman,    size:'tall',   url:'https://investor.tmanpharmaceutical.com/th/home' },
  { id:3, title:'PTT IR',          category:'IR System',         tags:['Full Website'],   img:ptt,     size:'normal', url:'https://investor.pttplc.com/en/ir-home' },
  { id:4, title:'PTC IR',          category:'IR System',         tags:['Full Website'],   img:ptc,     size:'normal', url:'https://investor.premiertankcorp.com/en/home' },
  { id:5, title:'SAFE Fertility',  category:'Corporate Website', tags:['Full Website (Corporate)'], img:safe, size:'normal', url:'https://www.safefertilitygroup.com/en/home' },
  { id:6, title:'TWPC SD Journey', category:'Corporate Website', tags:['Full Website'],   img:twpc,    size:'tall',   url:'https://sdjourney.thaiwah.com/th/home' },
  { id:7, title:'WashXpress',      category:'Corporate Website', tags:['HomePage'],       img:wash,    size:'tall',   url:'https://www.washxpressth.com/th/home' },
  { id:8, title:'hermes',          category:'Corporate Website', tags:['LandingPage'],    img:hermes,  size:'wide',   url:'https://www.hermesindustrialestate.com/en/home' },
  { id:9, title:'Anvinest',        category:'Corporate Website', tags:['ContentPage'],    img:anvinest,  size:'wide',   url:'https://www.anvinest.com/en/home' },
];

const filters = ['All','IR System','Corporate Website'];

export default function Works() {
  const ref = useRef(null);
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState(null);
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  return (
    <section className="works section" id="works" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">My <span>Works</span></h2>
        <p className="section-sub">Just a part of the  projects I've built and shipped</p>
      </div>

      <div className="works__filters reveal">
        {filters.map(f => (
          <button key={f} className={`wf-btn ${active===f?'active':''}`} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="works__masonry">
        {filtered.map((p, i) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`wcard wcard--${p.size} reveal`}
            style={{'--delay':`${i*0.07}s`}}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="wcard__img-wrap">
              <img src={p.img} alt={p.title} />
              <div className={`wcard__overlay ${hovered===p.id?'show':''}`}>
                <div className="wcard__ov-inner">
                  <div className="wcard__tags">
                    {p.tags.map(t => <span key={t} className="wtag">{t}</span>)}
                  </div>
                  <div className="wcard__visit">Visit Site →</div>
                </div>
              </div>
            </div>
            <div className="wcard__foot">
              <span className="wcard__cat">{p.category}</span>
              <h3 className="wcard__title">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}