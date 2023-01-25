import React from 'react';
// Models
import IUser from 'models/User';
// MUI
import { Tooltip } from '@mui/material';
// utilities
import { formatPhone } from 'utilities/StringFromatter';
// Styles
import classes from './styles.module.scss';

type Props = {
  user: IUser;
}

const UserItem:React.FC<Props> = ({ user }) => {
  return (
    <div className={classes.item}>
      <img src={user.photo} alt={user.name} className={classes['item_photo']} />
      <Tooltip title={user.name}>
        <p className={classes['item_text']}>{user.name}</p>
      </Tooltip>
      <div style={{ maxWidth: '100%' }}>
        <Tooltip title={user.position}>
          <p className={classes['item_text']}>{user.position}</p>
        </Tooltip>
        <Tooltip title={user.email}>
          <p className={classes['item_text']}><a href={`mailto:${user.email}`}>{user.email}</a></p>
        </Tooltip>
        <p className={classes['item_text']}><a href={`tel:${user.phone}`}>{formatPhone(user.phone)}</a></p>
      </div>
    </div>
  );
}

export default UserItem;
