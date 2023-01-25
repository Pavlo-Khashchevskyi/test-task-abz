import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const StyledTextField = withStyles({
  root: {
    '& label': {
      color: '#7E7E7E',
    },
    '& label.Mui-focused': {
      color: '#00BDD3',
    },
    '& label.Mui-disabled': {
      color: '#D0CFCF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7E7E7E',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.87)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00BDD3',
      },
      '&.Mui-disabled fieldset': {
        borderColor: '#D0CFCF',
      },
    },
    '& .Mui-error, & .Mui-error .MuiOutlinedInput-notchedOutline': {
      color: '#CB3D40',
      borderColor: '#CB3D40',
    },
  },
})(TextField);

