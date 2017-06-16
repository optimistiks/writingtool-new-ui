import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'

MaterialIconButton.propTypes = {
  glyph: PropTypes.string.isRequired
}

export default function MaterialIconButton (props) {
  const { glyph, ...restProps } = props
  return <IconButton {...restProps} iconClassName='material-icons'>{glyph}</IconButton>
}
