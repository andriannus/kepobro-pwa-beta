import { BehaviorSubject } from "rxjs";

import apiService from "@/shared/services/api.service";

const globalService = () => {
  const { baseApi } = apiService();

  const store = {};
  const dispatcher = new BehaviorSubject(store);
  const state$ = dispatcher.asObservable();

  const setStore = (obj) => {
    const data = Object.assign(store, obj);

    dispatcher.next(data);
  };

  return { state$ };
};

export default globalService;
