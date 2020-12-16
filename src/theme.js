import { createMuiTheme } from '@material-ui/core/styles';
import LaColmenitaFontWoof2 from './Fonts/LaColmenitaFont__.woff2';
import LaColmenitaFontWoof from './Fonts/LaColmenitaFont__.woff';
import SegoeScriptWoof2 from './Fonts/segoesc.woff2';
import SegoeScriptWoof from './Fonts/segoesc.woff';


const LaColmenita = {
  fontFamily: '"La Colmenita"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: ` 
    local('LaColmenitaFont__.woff2'),
    url(${LaColmenitaFontWoof2}) format('woff2'),
    local('LaColmenitaFont__.woff'),
    url(${LaColmenitaFontWoof}) format('woff')
  `
}

const SegoeScript = {
  fontFamily: '"Segoe Script"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'bold',
  src: ` 
    local('segoesc.woff2'),
    url(${SegoeScriptWoof2}) format('woff2'),
    local('segoesc.woff'),
    url(${SegoeScriptWoof}) format('woff')
  `
}


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#1C1C1C',
      main: '#000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FED10F',
      main: '#F7A81F',
      dark: '#B27318',
      contrastText: '#000',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2'
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00'
    }
  },
  typography: {
    fontFamily: [
      'Asap',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [LaColmenita, SegoeScript],
      },
    },
  },
});

export default theme;