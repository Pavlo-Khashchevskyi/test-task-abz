import { appActions } from "store/app/appSlice";
import NotificationStatuses from "types/NotificationStatuses";
   
const errorMiddleware = ({ dispatch }:any) => (next:any) => (action:any) => {
  const { type, error } = action;
  
  if ( type.includes('/rejected') ){
    dispatch(appActions.enqueueSnackbar({
      message: error?.message || 'Server error',
      options: { variant: NotificationStatuses.Error }
    }));
  }

  return next(action);
}

export default errorMiddleware;
