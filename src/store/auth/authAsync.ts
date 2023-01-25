import { createAsyncThunk } from "@reduxjs/toolkit";
import HTTPService from "services/HTTPService";
import StorageService from "services/StorageService";
import config from "config";

const url = `${config.apiURL}/token`;

const AuthAsync = {
  getToken: createAsyncThunk('auth/getToken', async () => {
    const { data } = await HTTPService.get(url);
    StorageService.setToken(data.token);
  }),
}

export default AuthAsync;
