import React from 'react'
import PropTypes from 'prop-types'
import GenericInputDialog from './GenericInputDialog'

EditorImageDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function EditorImageDialog (props) {
  return (
    <GenericInputDialog
      title='Insert image'
      hintText='Enter image URL'
      onClose={props.onClose}
      isVisible={props.isVisible}
    />
  )
}
