import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto Mono', 'monospace'].join(','),
        h1: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '3.5rem',
        },
        h3: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '1rem',
        },
    },
    palette: {
        text: {
            secondary: '#f75590'    
        },
        background: {
          default: "#ffc43d"
        }
      },
});

export default theme;