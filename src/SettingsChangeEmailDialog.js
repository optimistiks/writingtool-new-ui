import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
import GenericDialog from './GenericDialog'

SettingsChangeEmailDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function SettingsChangeEmailDialog (props) {
  const { isVisible, onClose } = props
  return (
    <GenericDialog
      title='Change email'
      actions={[
        <FlatButton label='Close' />,
        <FlatButton label='Save' primary />
      ]}
      isVisible={isVisible}
      onClose={onClose}
    >
      <div>
        <div className='row row_no-spacing'>
          <div className='col-xs-12'>
            <Subheader style={{ padding: 0 }}>Current email</Subheader>
            <div>user@mail.com</div>
            <TextField floatingLabelText='New email' fullWidth />
            <TextField floatingLabelText='Current password' fullWidth />
          </div>
        </div>

      </div>
    </GenericDialog>
  )
}
