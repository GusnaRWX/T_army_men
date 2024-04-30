import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

function Portal({
  className,
  children,
  el,
  id
}) {
  const [container] = useState(document.createElement(el))

  if (className) {
    container.classList.add(className)
  }

  container.setAttribute('id', id)

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(children, container)
}

Portal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  el: PropTypes.string,
  id: PropTypes.string
}

export default Portal
