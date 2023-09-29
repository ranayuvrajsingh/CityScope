//TODO: one time setup for all crud functions and error handling functions in request
// import { storage } from '../../services/config/storage';
// import axios from 'axios';
import AxiosSingleton from './AxiosSingleton';
// import Toast from '../../components/Toast';
// import { fetchAccessToken } from '../../utils/helper';
// import Store from '../../store';
// import { LOGOUT } from '../../store/auth/actionTypes';

// const connectionHandler = () => {
//   return navigator.onLine;
// };

// const errHandler = (res) => {
//   if (res.response?.status === 401) {
//     const store = Store; // comment for IT setup
//     storage.destroy.all();
//     store.dispatch({ type: LOGOUT });
//   } else if (res.status === 400) {
//     const contentType = res.headers.get('content-type');
//     if (contentType && contentType.indexOf('application/json') !== -1) {
//       res.json().then((res) => {
//         if (
//           res.error &&
//           res.message &&
//           (typeof res.message === 'string' || res.message instanceof String)
//         ) {
//           Toast('error', `Opps! Error.. ${res.message}`);
//         } else {
//           Toast('error', `Opps! Error`);
//         }
//       });
//     } else {
//       res.text().then((res) => {
//         Toast('error', `Opps! Error. ${res.error ? res.message : ''}`);
//       });
//     }
//   } else if (res.status === 403) {
//     Toast('error', 'Your session has expired, please, re-login.');
//     storage.destroy.authToken();
//     setTimeout(() => {
//       window.href = '/login';
//     }, 100);
//   } else {
//     let errorMessage = res?.response?.data?.message;
//     Toast('error', typeof errorMessage === 'string' ? errorMessage : '');
//   }
// };
const _authorizationHeaders = async () => {
  // const token = fetchAccessToken();
  return {
    // Authorization: `${token}`,
    'Content-Type': 'application/json',
  };
};
const handleError = (err) => {
  return Promise.reject(err);
};

export const getRequest = async (url, headers = _authorizationHeaders()) => {
  try {
    const res = await AxiosSingleton.getInstance().get(url, headers);
    console.log('res',res);
    return res?.data;
  
  } catch (err) {
    console.log('???',err);
  }
};

// export const getExternalRequest = async (url) => {
//   try {
//     return await axios.get(url);
//   } catch (err) {
//     handleError(err);
//   }
// };

// export const postRequest = async (
//   url,
//   data = {},
//   headers = _authorizationHeaders()
// ) => {
//   try {
//     const res = await AxiosSingleton.getInstance().post(url, data, headers);

//     return res;
//   } catch (err) {
//     errHandler(err);
//     handleError(err);
//   }
// };

// export const putRequest = async (
//   url,
//   data = {},
//   headers = _authorizationHeaders(),
//   absoluteUrl = false
// ) => {
//   try {
//     const res = await AxiosSingleton.getInstance().put(url, data, headers);
//     return res;
//   } catch (err) {
//     errHandler(err);
//     handleError(err);
//   }
// };




export const Api = {

  getRequest,
  // getExternalRequest,
  // postRequest,
  // putRequest,

};
