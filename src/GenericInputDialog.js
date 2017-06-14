import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';
import GenericDialog from './GenericDialog'

GenericInputDialog.propTypes = {
  title: PropTypes.string.isRequired,
  hintText: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function GenericInputDialog (props) {
  const { isVisible, title, hintText, onClose } = props
  return (
    <GenericDialog
      title={title}
      actions={
        <div>
          <FlatButton label='Cancel' />
          <FlatButton label='Save' primary />
        </div>
      }
      isVisible={isVisible}
      onClose={onClose}
    >
      <div>
        <TextField floatingLabelText={hintText} fullWidth />
      </div>
    </GenericDialog>
  )
}
