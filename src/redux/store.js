import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './tasks/slice';
import { authReducer } from './auth/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


//------------------------------------------//
// import { configureStore } from '@reduxjs/toolkit';
// import { filterSlice } from './filter/filterSlice';
// import { contactsApi } from 'redux/contactsApi';

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(contactsApi.middleware),
// });

//-----------------------------------------------------------//


//------------------------myStore-----------------------//

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'; //   persistStore, persistReducer,
// import storage from 'redux-persist/lib/storage';
// import { contactsSlice } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['items'],
// };

// const contacsPersistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     // contacts: contacsPersistedReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
