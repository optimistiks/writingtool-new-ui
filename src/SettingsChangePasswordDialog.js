import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import GenericDialog from './GenericDialog'

SettingsChangePasswordDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function SettingsChangePasswordDialog (props) {
  const { isVisible, onClose } = props
  return (
    <GenericDialog
      title='Change password'
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
            <TextField floatingLabelText='Current password' fullWidth />
            <TextField floatingLabelText='New password' fullWidth />
            <TextField floatingLabelText='Confirm new password' fullWidth />
          </div>
        </div>

      </div>
    </GenericDialog>
  )
}
