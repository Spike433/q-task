import { isArray, get } from 'lodash';

/**
 *
 * @param error Error returned from the API
 * @returns String array of error messages
 */
export const parseHttpErrorMessages = (error: any) => {
  if (isArray(error)) {
    return error.map<string>(resError => {
      return get(resError, 'response.data.message');
    });
  } else {
    return Array<string>(`${error.response.data.message}`);
  }
};
