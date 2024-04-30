import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function Icon ({
  src,
  size,
  ...otherProps
}) {
  return (
    <Image
      src={src}
      alt='icon'
      width={size}
      height={size}
      {...otherProps}
    />
  )
}

Icon.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string
}

export default Icon
