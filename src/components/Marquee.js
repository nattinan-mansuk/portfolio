import { useEffect, useRef, useState } from 'react'
import './Marquee.css'

function MarqueeRow({ reverse = false, rotate = '-3deg', bgColor = '#ffec9f', textColor = '#3f372a' }) {
  const items = ['FRONTEND DEVELOPER']
  const [offset, setOffset] = useState(0)
  const offsetRef = useRef(0)

  useEffect(() => {
    const handleWheel = (e) => {
      offsetRef.current += reverse ? e.deltaY * 0.3 : -e.deltaY * 0.3
      setOffset(offsetRef.current)
    }
    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [reverse])

  return (
    <div
      className="marquee-row"
      style={{ transform: `rotate(${rotate})`, background: bgColor, margin: '10px 0' }}
    >
      <div
        className="marquee-inner"
        style={{ transform: `translateX(${offset % 800}px)` }}
      >
        {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item" style={{ color: textColor }}>
            <span className="marquee-flower">✿</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      {/* เส้นหลัง — ขาว เอียงขวา */}
      <div className="marquee-back">
        <MarqueeRow reverse={true} rotate="1deg" bgColor="#ffffff" textColor="#3f372a" />
      </div>
      {/* เส้นหน้า — เหลือง เอียงซ้าย */}
      <div className="marquee-front">
        <MarqueeRow rotate="-3deg" bgColor="#ffec9f" textColor="#3f372a" />
      </div>
    </div>
  )
}