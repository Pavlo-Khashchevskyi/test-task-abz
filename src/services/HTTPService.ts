import axios from "axios";
// services
import StorageService from "./StorageService";

export default class HTTPService {
  public static async get(path: string, params: any = {}) {
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach(key => {if (params[key]) queryParams.append(key, params[key])});

    return await axios.get(`${path}?${queryParams}`, { headers: {Token: StorageService.getToken()}  });
  };

  public static async post(path: string, data: any) {
    return await axios.post(path, data, { headers: {Token: StorageService.getToken()}  });
  };

  public static async put(path: string, data: any) {
    return await axios.put(path, data, { headers: {Token: StorageService.getToken()}  });
  };

  public static async delete(path: string) {
    return await axios.delete(path, { headers: {Token: StorageService.getToken()}  });
  };
}
