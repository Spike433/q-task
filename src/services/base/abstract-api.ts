import axios, { AxiosInstance } from 'axios';

export default abstract class BaseAPI {
  protected instance: AxiosInstance;

  constructor(baseURL: string) {    
    this.instance = axios.create({
      baseURL,
    });

    // Add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      },
    );
  }  
}
