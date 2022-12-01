import {
  ActionReducerMapBuilder,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAppState } from '.'
import { IAppConfigResponse } from '../common/models/config'

export interface IConfigState {
  requestAPIInProgress: boolean
  appConfig: IAppConfigResponse
}

const initialState: IConfigState = {
  requestAPIInProgress: false,
  appConfig: {
    images: {
      backdrop_sizes: [''],
      base_url: '',
      logo_sizes: [''],
      poster_sizes: [''],
      profile_sizes: [''],
      secure_base_url: '',
      still_sizes: [''],
    },
    change_keys: [''],
  },
}

const configReducer = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateRequestAPIInProgress(
      state: IConfigState,
      action: PayloadAction<boolean>,
    ) {
      state.requestAPIInProgress = action.payload
    },
    updateAppConfig(
      state: IConfigState,
      action: PayloadAction<IAppConfigResponse>,
    ) {
      state.appConfig = action.payload
    },
  },
})

const rootState = (state: IAppState) => state.config

export const getAppConfig = createSelector(
  rootState,
  (state: IConfigState) => state.appConfig,
)

export const getBackDropImageSizes = createSelector(
  rootState,
  (state: IConfigState) => state.appConfig.images.backdrop_sizes,
)

export const getPosterImageSizes = createSelector(
  rootState,
  (state: IConfigState) => state.appConfig.images.poster_sizes,
)

export const getImageBaseUrl = createSelector(
  rootState,
  (state: IConfigState) => state.appConfig.images.base_url,
)

export const { updateRequestAPIInProgress, updateAppConfig } =
  configReducer.actions

export default configReducer
