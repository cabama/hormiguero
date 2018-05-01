import { defaultStore } from '../store/defaultStore';
import { DrawableMenuDefaultStorage } from '../store/drawableMenu';
import { shopListType, shopList } from '../store/shopListStore';

export const shopListTypes = {
  addItem: 'ADD_ITEM',
  removeItem: 'REMOVE_ITEM'
}

export const ShopListReducer = (state: shopListType[] = shopList, action: any) => {

  const listaCompra = state.slice(0)

  switch (action.type) {

    case shopListTypes.addItem:
      const id = action.id
      const newitem = action.item
      listaCompra.forEach((item, index) => {
        if (item.title === id) {
          listaCompra[index].list.push(newitem)
        }
      })
      return listaCompra

    case shopListTypes.removeItem:
      listaCompra.forEach((item, index) => {
        if (item.title === action.index) {
          debugger
          item.list.splice(action.elementIndex, 1)
        }
      })
      return listaCompra



    default:
      return state
  }
}