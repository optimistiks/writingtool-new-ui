import React from 'react'
import PropTypes from 'prop-types'
import GenericInputDialog from './GenericInputDialog'

EditorLinkDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function EditorLinkDialog (props) {
  return (
    <GenericInputDialog
      title='Insert link'
      hintText='Enter link URL'
      onClose={props.onClose}
      isVisible={props.isVisible}
    />
  )
}
