import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import localStorage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import configReducer, { IConfigState } from './config'
export interface IAppState {
  config: IConfigState
}

const persistConfig: PersistConfig<IAppState> = {
  key: 'root',
  storage: localStorage,
  blacklist: [],
  stateReconciler: autoMergeLevel2,
}

const rootReducers = combineReducers({
  config: configReducer.reducer,
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
})
