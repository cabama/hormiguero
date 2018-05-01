import { defaultStore } from '../store/defaultStore';
import { DrawableMenuDefaultStorage } from '../store/drawableMenu';

export const DrawableActions  = {
  switchVisibility: 'DRAWABLE_SWITCH_VISIBILITY',
  setVisibility: 'DRAWABLE_SET_VISIBILITY'
}

export const DrawableMenuReducer = (state: typeof DrawableMenuDefaultStorage = DrawableMenuDefaultStorage, action: any) => {
  switch (action.type) {
    case DrawableActions.switchVisibility:
      const visible = !state.visible
      return {
        ...state,
          visible
      }
    default:
      return state
  }
}