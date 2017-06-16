import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import typography from 'material-ui/styles/typography';
import hipsum from 'lorem-hipsum';

JobItem.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

JobItem.propTypes = {
  actionsElement: PropTypes.element.isRequired
}

export default function JobItem (props, context) {
  const { actionsElement } = props
  console.log('theme', context.muiTheme)
  const { desktopGutter, desktopGutterMini } = context.muiTheme.spacing;
  return (
    <Card style={{ marginBottom: desktopGutter }}>
      <CardText>
        <div className='row row_no-spacing between-xs middle-xs'>
          <div className='col-xs col_no-flex mdc-typography--caption'
               style={{ color: typography.textLightBlack }}>
            today
          </div>
          <div className='col-xs'>
            <div>
              <div className='row row_no-spacing end-xs'>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>remote</Chip>
                </div>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>full
                  time</Chip></div>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>New
                  York</Chip></div>
              </div>
            </div>
          </div>
        </div>
      </CardText>
      <CardTitle title={hipsum()}/>
      <CardText>{hipsum({ count: 3 })}</CardText>
      {actionsElement}
    </Card>
  )
}
