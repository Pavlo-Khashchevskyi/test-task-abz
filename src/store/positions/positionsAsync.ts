import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "config";
// Services
import HTTPService from "services/HTTPService";

const url = `${config.apiURL}/positions`;

const PositionsAsync = {
  fetchPositions: createAsyncThunk('positions/fetchPositions', async () => {
    const { data } = await HTTPService.get(url);
    return data;
  }),
}

export default PositionsAsync;
