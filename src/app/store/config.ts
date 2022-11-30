import {
  ActionReducerMapBuilder,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IAppState } from '.';

type TtypeOfView = 'list' | 'grid';

export interface IConfigState {
  typeOfView: TtypeOfView;
}

const initialState: IConfigState = {
  typeOfView: 'list',
};

const configReducer = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateTypeOfView(state: IConfigState, action: PayloadAction<TtypeOfView>) {
      state.typeOfView = action.payload;
    },
  },
});

const rootState = (state: IAppState) => state.config;

export const getTypeOfView = createSelector(
  rootState,
  (state: IConfigState) => state.typeOfView
);

export const { updateTypeOfView } = configReducer.actions;

export default configReducer;
