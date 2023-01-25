import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
// Hooks
import { useAppDispatch } from 'hooks/redux';
// Async
import UsersAsync from 'store/users/usersAsync';
import PositionsAsync from 'store/positions/positionsAsync';
// Selectors
import { selectPositions } from 'store/positions/positionsSelectors';
// MUI
import { LoadingButton } from '@mui/lab';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
// Components
import Uploader from 'components/Uploader';
import { StyledTextField } from 'components/Controls';
import SuccessRequest from './SuccessRequest';
// utilities
import { isEmail, isPhone, isRequired } from 'utilities/Validation';
// Styles
import classes from './styles.module.scss';

interface IForm {
  name: string;
  email: string;
  phone: string;
  position_id: number | null;
  photo: any;
}

const SignUp:React.FC = () => {
  const dispatch = useAppDispatch();

  const positions = useSelector(selectPositions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const { control, handleSubmit, formState: { errors } } = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: null,
      photo: '',
    }
  });

  const onSubmit = handleSubmit((data: IForm) => {
    setIsLoading(true);
    dispatch(UsersAsync.createUser(data))
      .unwrap()
      .then(() => setSent(true))
      .finally(() => setIsLoading(false))
  })

  useEffect(() => {
    dispatch(PositionsAsync.fetchPositions());
    // eslint-disable-next-line
  }, [])

  if (sent) return <SuccessRequest />;

  return (
    <div className={classes.page} data-container="sign-up">
      <div className="container">
        <h2 className={classes.title}>Working with POST request</h2>
        <form noValidate onSubmit={onSubmit} className={classes.form}>
          <Controller
            control={control} name="name"
            rules={{ required: isRequired }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                label="Name"
                placeholder="Your name"
                error={!!errors.name}
                helperText={errors.name?.message || ''}
                required
              />
            )}
          />
          <Controller
            control={control} name="email"
            rules={{ required: isRequired, pattern: isEmail }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                label="Email"
                placeholder="Your email"
                error={!!errors.email}
                helperText={errors.email?.message || ''}
                required
              />
            )}
          />
          <Controller
            control={control} name="phone"
            rules={{ required: isRequired, pattern: isPhone }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                label="Phone"
                placeholder="Your phone"
                error={!!errors.phone}
                helperText={errors.phone?.message || '+38 (XXX) XXX - XX - XX'}
                required
              />
            )}
          />
          <Controller
            control={control} name="position_id"
            rules={{ required: isRequired }}
            render={({ field: { value, onChange } }) => (
              <FormControl fullWidth required error={!!errors.position_id}>
                <FormLabel id="positions-radio-buttons-group-label">Select your position</FormLabel>
                <FormHelperText sx={{ color: '#CB3D40' }}>{errors.position_id?.message}</FormHelperText>
                <RadioGroup
                  value={value}
                  onChange={(_, value) => onChange(+value)}
                  aria-labelledby="positions-radio-buttons-group-label"
                  name="positions-buttons-group"
                >
                  {positions.map(position => (
                    <FormControlLabel key={position.id} value={position.id} control={<Radio />} label={position.name} />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <Controller
            control={control} name="photo"
            rules={{ required: isRequired }}
            render={({ field: { onChange } }) => (
              <Uploader error={`${errors.photo?.message || ''}`} onChange={onChange} />
            )}
          />
          <LoadingButton
            loading={isLoading}
            variant="contained"
            type="submit"
          >Sign up</LoadingButton>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
