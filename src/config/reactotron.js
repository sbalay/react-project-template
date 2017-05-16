import Reactotron, { trackGlobalErrors } from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import apisaucePlugin from 'reactotron-apisauce';

if (process.env.NODE_ENV === 'development') {
  Reactotron // eslint-disable-line prettier/prettier
  .configure()
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(apisaucePlugin())
  .connect();
}
