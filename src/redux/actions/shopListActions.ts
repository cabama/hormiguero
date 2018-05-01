import { shopListType } from '../store/shopListStore';

const getShopList = (shopLists: shopListType[], id: number): shopListType | void => {
  shopLists.forEach((item, index) => {
    if ( item.id === id) {
      return item
    }
  })
}

const insertItem = (shopList: shopListType, item: string) => {
  shopList.list.push(item)
}