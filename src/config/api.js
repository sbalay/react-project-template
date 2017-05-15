import { create } from 'apisauce';
import Reactotron from 'reactotron-react-js';

const api = create({
  baseURL: process.env.API_BASE_URL,
  headers: { 'Utility-ID': process.env.UTILITY_ID },
  timeout: 15000
});

if (process.env.NODE_ENV === 'development') {
  api.addMonitor(Reactotron.apisauce);
}

export const apiSetup = dispatch => { // eslint-disable-line no-unused-vars, prettier/prettier
  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;