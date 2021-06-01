import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import dataReducer from './form-contacts/form-contacts-reducer';
import userReducer from './auth/user-reducer';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const store = configureStore({
  reducer: {
    auth: userReducer,
    data: dataReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});
// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;

// middleware: getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }),
