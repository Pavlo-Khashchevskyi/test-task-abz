import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Hooks
import { useAppDispatch } from 'hooks/redux';
// Async
import UsersAsync from 'store/users/usersAsync';
// Models
import IUser from 'models/User';
// Selectors
import { selectParams, selectUsers, selectTotalPages } from 'store/users/usersSelectors';
// MUI
import { LoadingButton } from '@mui/lab';
// Components
import UserItem from './UserItem';
// Styles
import classes from './styles.module.scss';

const Users:React.FC = () => {
  const dispatch = useAppDispatch();

  const users:IUser[] | null = useSelector(selectUsers);
  const params = useSelector(selectParams);
  const totalPages = useSelector(selectTotalPages);

  const [page, setPage] = useState(params.page);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(UsersAsync.fetchUsers({ ...params, page }))
      .unwrap()
      .finally(() => setIsLoading(false))
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className={classes.page} data-container="users">
      <div className={[classes.content, 'container'].join(' ')}>
        <h2 className={classes.title}>Working with GET request</h2>
        <div className={classes.items}>
          {users?.map((user:IUser) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
        {page !== totalPages && <LoadingButton loading={isLoading} className={classes.button} variant="contained" onClick={handleChangePage}>Show more</LoadingButton>}
      </div>
    </div>
  );
}

export default Users;
