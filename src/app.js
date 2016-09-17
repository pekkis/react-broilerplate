import React from 'react';
import { Provider } from 'react-redux';

export function createApp(store, history, router) {
  return (
    <Provider store={store}>
      {router}
    </Provider>
  );
}
