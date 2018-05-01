import { DrawableMenuDefaultStorage } from "./drawableMenu";

export type AppStore = typeof defaultStore

export type ListaCompraType = {
  title: string,
  date: string,
  lista: {item: string, description: string}[]
}


export const defaultStore = {
  counter: 0,
  visible: false,

  DrawableMenu: DrawableMenuDefaultStorage,

  listaCompra: [
    {
      title: 'Compra',
      date: '9-04-2018',
      lista: [
        { item: 'aguacates', description: 'Para guacamole'},
        { item: 'leche', description: 'Para cereales'}
      ]
    },
    {
      title: 'Compra2',
      date: '10-04-2018',
      lista: [
        { item: 'paramelones', description: 'Para guacamole' },
        { item: 'leche', description: 'Para cereales' }
      ]
    }
  ]

}