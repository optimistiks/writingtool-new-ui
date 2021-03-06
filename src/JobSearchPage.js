import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import ChipInput from 'material-ui-chip-input';
import algoliaLogo from './static/Algolia_logo_bg-white.svg';
import typography from 'material-ui/styles/typography';
import { grey400, red400 } from 'material-ui/styles/colors';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import JobItem from './JobItem'
import MaterialIcon from './MaterialIcon';

JobSearchPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function JobSearchPage (props, context) {
  console.log('theme', context.muiTheme)
  const { desktopGutter } = context.muiTheme.spacing;

  const jobItemActions = (
    <CardActions>
      <div className='row row_no-spacing center-xs'>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton icon={<MaterialIcon glyph="open_in_new" />} label="Open"
                      primary/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Bookmark"/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Add to applied"/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Add to projects"/>
        </div>
      </div>
    </CardActions>
  )

  return (
    <div>
      <div className='row middle-xs row_no-spacing'>
        <div className='col-xs'>
          <h2 className='mdc-typography--display1'>Job search</h2>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <span className='va-middle mdc-typography--caption'
                style={{ color: typography.textLightBlack }}>powered by</span>
          {' '}
          <img className='va-middle' src={algoliaLogo} alt="Powered by Algolia" style={{ height: '1rem' }}/>
        </div>
      </div>
      <div className='row row_no-spacing'>
        <div className='col-xs-12 col-lg-4'>
          <Card style={{ marginBottom: desktopGutter }} expanded>
            <CardHeader
              subtitle='Filter'
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              <TextField floatingLabelText='Keywords' fullWidth/>
              <ChipInput
                floatingLabelText='Source'
                defaultValue={['Indeed', 'Problogger']}
                dataSource={['Indeed', 'Problogger', 'Writersjobboard']}
                fullWidth
                openOnFocus
              />
              <ChipInput
                floatingLabelText='Tags'
                defaultValue={['remote']}
                dataSource={['remote', 'freelance', 'fulltime']}
                filter={(searchText, key) => searchText !== '' && key.startsWith(searchText)}
                fullWidth
                openOnFocus
              />
              <ChipInput
                floatingLabelText='Location'
                defaultValue={['New York', 'Bangor']}
                dataSource={['New York', 'Bangor', 'Wichita']}
                fullWidth
                openOnFocus
              />
            </CardText>
            <CardActions expandable style={{ textAlign: 'right' }}>
              <FlatButton
                label='Save filter'
              />
              <FlatButton
                icon={<MaterialIcon glyph="search" />}
                label='Search'
              />
            </CardActions>
          </Card>
          <Card expanded>
            <CardHeader
              subtitle='Saved filters'
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              <List>
                <ListItem
                  rightIconButton={
                    <ToolbarGroup>
                      <IconButton iconClassName='material-icons'>notifications</IconButton>
                      <IconButton iconClassName='material-icons' iconStyle={{ color: red400 }}>delete</IconButton>
                    </ToolbarGroup>
                  }
                  primaryText='My filter'
                />
                <Divider/>
                <ListItem
                  rightIconButton={
                    <ToolbarGroup>
                      <IconButton iconClassName='material-icons'
                                  iconStyle={{ color: grey400 }}>notifications_off</IconButton>
                      <IconButton iconClassName='material-icons' iconStyle={{ color: red400 }}>delete</IconButton>
                    </ToolbarGroup>
                  }
                  primaryText='My filter'
                />
              </List>
            </CardText>
          </Card>
        </div>
        <div className='col-xs col_no-flex' style={{ width: desktopGutter, height: desktopGutter }}/>
        <div className='col-xs-12 col-lg'>
          <Subheader style={{ padding: 0 }}>Results: 2898</Subheader>
          <JobItem actionsElement={jobItemActions} />
          <JobItem actionsElement={jobItemActions} />
        </div>
      </div>
    </div>
  )
}
