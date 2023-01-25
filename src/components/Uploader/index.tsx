import React, { useEffect, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';

import classes from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  error?: string;
  onChange: (file: File) => void;
}

const Uploader:React.FC<Props> = ({ error: initialError, onChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(initialError || '');

  const handleChangeImage = (e: any) => {
    if (!e.target.files.length) {
      setError(initialError || '');
      return;
    }
    if (e.target.files[0].type !== 'image/jpeg') {
      setError('user photo should be jpg/jpeg image');
    } else {
      setError('');
      setFile(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  }

  useEffect(() => {
    setError(initialError || '');
  }, [initialError])
  
  return (
    <div className={classes.uploader_wrapper}>
      <div className={classNames(classes.uploader, { [classes.error]: !!error })}>
      <Button component="label" className={classNames(classes.button, { [classes.error]: !!error })}>
          Upload File
          <input
            type="file"
            hidden
            onChange={handleChangeImage}
          />
        </Button>
        {file ? <p className={classes.text}>{file.name}</p> : <p className={classes.label}>Upload your photo</p>}
      </div>
      <FormHelperText sx={{ color: '#CB3D40' }}>{error}</FormHelperText>
    </div>
  );
}

export default Uploader;
