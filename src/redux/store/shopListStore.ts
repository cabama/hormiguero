
export type shopListType = {
  id: number,
  title: string,
  date: string,
  list: string[]
}

export const shopList: shopListType[] = [
  {
    id: 1,
    title: 'Compra',
    date: '9-04-2018',
    list: [
      'aguacates',
      'leche'
    ]
  },
  {
    id: 2,
    title: 'Compra2',
    date: '10-04-2018',
    list: []
  },
  {
    id: 3,
    title: 'Compra del culo2',
    date: '10-05-2018',
    list: [
      'melón',
      'sandia',
      'cocacola',
      'granizado'
    ]
  }
]