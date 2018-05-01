import { combineReducers } from 'redux'
import { visibilityReducer } from './visibilityReducer';
import { DrawableMenuReducer } from './drawableMenu';
import { ShopListReducer } from './shopListReducer';

export const reducersStore = combineReducers({
  ShopListReducer,
  DrawableMenuReducer
})
