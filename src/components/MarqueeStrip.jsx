import './MarqueeStrip.css'

const DEFAULT_LABEL = 'BOAT TOURS'
const DEFAULT_REPEAT = 10

function MarqueeGroup({ label, repeatCount }) {
  return (
    <div className="marquee-strip__group">
      {Array.from({ length: repeatCount }, (_, index) => (
        <span key={index} className="marquee-strip__item">
          {'//\u00A0\u00A0'}{label}{'\u00A0\u00A0'}
        </span>
      ))}
    </div>
  )
}

function MarqueeStrip({
  label = DEFAULT_LABEL,
  repeatCount = DEFAULT_REPEAT,
  className = '',
  ariaHidden = true,
  paused = false,
}) {
  const rootClassName = [
    'marquee-strip',
    paused && 'marquee-strip--paused',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName} aria-hidden={ariaHidden}>
      <div className="marquee-strip__track">
        <MarqueeGroup label={label} repeatCount={repeatCount} />
        <MarqueeGroup label={label} repeatCount={repeatCount} />
      </div>
    </div>
  )
}

export default MarqueeStrip
