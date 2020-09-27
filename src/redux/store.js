import { createStore} from 'redux';
import reducers from './reducers';


const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState);

export default store;