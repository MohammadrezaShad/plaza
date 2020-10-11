import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


const initStore = (preloadedState) => (
    createStore(
        reducers, 
        preloadedState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
);

export default initStore;