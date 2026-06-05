import './Button.css'

function Button({ children, onClick, href, type = 'button' }) {
  const className = 'hero-button'

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
