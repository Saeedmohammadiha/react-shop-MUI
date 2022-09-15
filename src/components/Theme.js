import { createTheme } from '@material-ui/core';

import iranyekanttf from '../font/ttf/iranyekanwebregular.ttf';

export default createTheme({
  palette: {
    common: {
      orange: '#EE384E',
    },
    primary: {
      main: '#EE384E',
    },
  },
  typography: {
    fontFamily: 'iranyekan',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'iranyekan',
          src: `
          url(${iranyekanttf})
        `,
        },
      },
    },
    
  },
});
