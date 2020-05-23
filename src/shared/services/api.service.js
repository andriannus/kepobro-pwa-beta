import axios from "axios";

import API from "@/shared/constants/api.const";

const apiService = () => {
  const { baseUrl, timeout, token } = API;
  const { create } = axios;

  const baseApi = create({
    baseURL: baseUrl,
    headers: {
      "X-Auth-Token": token,
    },
    timeout,
  });

  return { baseApi };
};

export default apiService;
