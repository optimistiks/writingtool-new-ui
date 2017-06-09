import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  zIndex: {
    appBar: 1300,
    drawer: 1200,
    drawerOverlay: 1100
  },
  editorToolbar: {
    height: 100
  }
});

export default muiTheme
