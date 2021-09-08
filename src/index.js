import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import redux things
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {logger} from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cart_reducer from './store/reducers/cart';
import ui_reducer from './store/reducers/ui';
import food_reducer from './store/reducers/foods';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cart_reducer,
  foods :  food_reducer,
  ui: ui_reducer
})

const reducer = persistReducer(persistConfig,rootReducer)

const middeleWares = []

if(process.env.NODE_ENV === 'development') {
  middeleWares.push(logger)
}

const store = createStore(reducer,applyMiddleware(...middeleWares))

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

