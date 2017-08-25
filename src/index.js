import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PaintShop from './components/PaintShop';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
   <PaintShop />
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();
