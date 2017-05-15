import { create } from 'apisauce';
import Reactotron from 'reactotron-react-js';

const baseURL = 'http://wolox.com'; // TODO: properly set the base api url

const api = create({
  baseURL,
  timeout: 5000
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
