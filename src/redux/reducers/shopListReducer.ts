import { defaultStore } from '../store/defaultStore';
import { DrawableMenuDefaultStorage } from '../store/drawableMenu';
import { shopListType, shopList } from '../store/shopListStore';

export const shopListTypes = {
  addItem: 'ADD_ITEM',
  setVisibility: 'DRAWABLE_SET_VISIBILITY'
}

export const ShopListReducer = (state: shopListType[] = shopList, action: any) => {
  switch (action.type) {

    case shopListTypes.addItem:
      const listaCompra = state.slice(0)
      const id = action.id
      const newitem = action.item

      listaCompra.forEach((item, index) => {
        if (item.title === id) {
          debugger
          listaCompra[index].lista.push({item: String(newitem), description: ''})
        }
      })
      debugger
      return listaCompra

    default:
      return state
  }
}