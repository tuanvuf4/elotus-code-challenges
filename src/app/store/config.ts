import {
  ActionReducerMapBuilder,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAppState } from '.'
import { IAppConfigResponse, IError } from '../common/models/config'
import { getConfig } from './asyncActions/movies'

export interface IConfigState {
  requestAPIInProgress: boolean
  isShowError: boolean
  errorMessage: string
  appConfig: IAppConfigResponse
}

const initialState: IConfigState = {
  requestAPIInProgress: false,
  isShowError: false,
  errorMessage: '',
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
    showError(state: IConfigState, action: PayloadAction<IError>) {
      state.isShowError = action.payload.isShowError
      state.errorMessage = action.payload.errorMessage
    },
    hideError(state: IConfigState) {
      state.isShowError = false
      state.errorMessage = ''
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      getConfig.fulfilled,
      (state: IConfigState, action: PayloadAction<IAppConfigResponse>) => {
        state.appConfig = action.payload
      },
    )
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

export const getRequestAPIInProgress = createSelector(
  rootState,
  (state: IConfigState) => state.requestAPIInProgress,
)

export const getIsShowError = createSelector(
  rootState,
  (state: IConfigState) => state.isShowError,
)

export const getErrorMessage = createSelector(
  rootState,
  (state: IConfigState) => state.errorMessage,
)

export const {
  updateRequestAPIInProgress,
  updateAppConfig,
  showError,
  hideError,
} = configReducer.actions

export default configReducer
