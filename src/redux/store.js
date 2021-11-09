import {
  configureStore,
  // combineReducers,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { transactionsReducer } from './transactions/transactions.reducer';

// console.log(transactionsReducer);

// const middleware = [
// ...getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }),
// tmpMiddleware,
//   logger,
// ];

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const transactionsPersistConfig = {
//   key: 'transactions',
//   storage,
//   whitelist: ['token', 'isAuthenticated'],
// };

// const tmpMiddleware = store => next => action => {
//   next(action);
// };

// const rootReducer = combineReducers({
//   transactions: persistReducer(persistConfig, transactionsReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const persistor = persistStore(store);

// const reduxStore = {
//   store,
//   persistor,
// };

// export default reduxStore;

//

//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     transactions: transactionsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export let persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { transactionsReducer } from './transactions/transactions.reducer';
// import { authReducer } from './auth/auth.reducer';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'isAuthenticated'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     transactions: transactionsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export let persistor = persistStore(store);
