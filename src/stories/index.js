import '../index.css'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './Button';
import Welcome from './Welcome';
import EditorToolbar from '../EditorToolbar'
import MuiTheme from '../MuiTheme'

injectTapEventPlugin()

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('EditorToolbar', module)
  .add('default', () => <MuiTheme><EditorToolbar /></MuiTheme>);
