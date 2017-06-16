import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'

MaterialIcon.propTypes = {
  glyph: PropTypes.string.isRequired
}

export default function MaterialIcon (props) {
  const { glyph, ...restProps } = props
  return <FontIcon {...restProps} className='material-icons'>{glyph}</FontIcon>
}
