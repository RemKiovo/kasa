import { useRef, useState } from 'react'
import '../styles/Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapsible" onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
      </button>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse
