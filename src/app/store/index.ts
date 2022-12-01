import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk';
import { injectStore } from '../core/apiUtils';
import configReducer, { IConfigState } from './config';
import moviesReducer, { IMoviesState } from './movies';
export interface IAppState {
  config: IConfigState;
  movies: IMoviesState;
}

const persistConfig: PersistConfig<IAppState> = {
  key: 'root',
  storage: storageSession,
  blacklist: ['movies'],
  stateReconciler: autoMergeLevel2,
};

const rootReducers = combineReducers({
  config: configReducer.reducer,
  movies: moviesReducer.reducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

injectStore(store);