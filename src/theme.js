import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto Mono', 'monospace'].join(','),
        h1: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '2.5rem',
        },
        h2: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '2rem',
        },
        h4: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '1rem',
        },
    },
    palette: {
        text: {
            secondary: '#F85788'    
        },
        background: {
          default: "#ffc43d"
        }
      },
});

export default theme;