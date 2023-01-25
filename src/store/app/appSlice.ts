import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import INotification from "models/Notification";
import { v4 as uuid } from "uuid";

interface IState {
  notifications: INotification[];
}

const initialState: IState = {
  notifications: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enqueueSnackbar: (state, action:PayloadAction<Omit<INotification, 'key'>>) => {
      state.notifications = [ ...state.notifications, { key: uuid(), ...action.payload } ]
    },
    closeSnackbar: (state, action:PayloadAction<{ key:string, dismissAll:boolean }>) => {
      state.notifications = state.notifications.map((notification:INotification) =>
        (action.payload.dismissAll || notification.key === action.payload.key)
          ? { ...notification, dismissed: true }
          : notification
      )
    },
    removeSnackbar: (state, action:PayloadAction<string>) => {
      state.notifications = state.notifications.filter((notification:INotification) =>
        notification.key !== action.payload
      )
    }
  }
})

export const appActions = appSlice.actions;
export default appSlice.reducer;
