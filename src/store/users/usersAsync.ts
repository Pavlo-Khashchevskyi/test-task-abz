import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "config";
import { v4 as uuid } from "uuid";
// Services
import HTTPService from "services/HTTPService";

const url = `${config.apiURL}/users`;

const UsersAsync = {
  fetchUsers: createAsyncThunk('users/fetchUsers', async (params: any) => {
    const { data } = await HTTPService.get(url, params);
    return data;
  }),
  createUser: createAsyncThunk('users/createUser', async (data: any, thunkApi) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => { formData.append(key, data[key]) });
      await HTTPService.post(url, formData);
      return { ...data, photo: URL.createObjectURL(data.photo), id: uuid() };
    } catch (e: any) {
      throw Error(e.response.data.message);
    }
  }),
}

export default UsersAsync;
