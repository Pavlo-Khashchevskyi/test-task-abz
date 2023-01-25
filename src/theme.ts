// Mui
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BDD3',
    },
    secondary: {
      main: '#7E7E7E',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
          borderRadius: '4px',
          fontSize: '16px',
          color: '#fff'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: '16px',
          lineHeight: '26px',
          fontWeight: 400,
          borderRadius: '80px',
          textTransform: 'inherit',
        },
        contained: {
          background: '#F4E041',
          color: 'rgba(0, 0, 0, 0.87)',
          transition: 'linear',
          '&:hover': {
            background: '#FFE302'
          },
          '&:disabled': {
            background: '#B4B4B4',
            color: 'rgba(255, 255, 255, 0.87)'
          }
        },
      },
    },
  },
});

export default theme;
