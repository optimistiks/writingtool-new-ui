import React from 'react'
import PropTypes from 'prop-types'
import GenericInputDialog from './GenericInputDialog'

DocumentCreateDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function DocumentCreateDialog (props) {
  return (
    <GenericInputDialog
      title='New document'
      hintText='Enter document title'
      onClose={props.onClose}
      isVisible={props.isVisible}
    />
  )
}
