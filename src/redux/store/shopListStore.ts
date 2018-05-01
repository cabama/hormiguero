
export type shopListType = {
  title: string,
  date: string,
  lista: { item: string, description: string }[]
}

export const shopList: shopListType[] = [
  {
    title: 'Compra',
    date: '9-04-2018',
    lista: [
      { item: 'aguacates', description: 'Para guacamole' },
      { item: 'leche', description: 'Para cereales' }
    ]
  },
  {
    title: 'Compra2',
    date: '10-04-2018',
    lista: [
      { item: 'paramelones', description: 'Para guacamole' },
      { item: 'leche', description: 'Para cereales' }
    ]
  },
  {
    title: 'Compra del culo2',
    date: '10-05-2018',
    lista: [
      { item: 'cafe', description: 'Para reshu m' },
      { item: 'leche', description: 'Para cereales' }
    ]
  }
]