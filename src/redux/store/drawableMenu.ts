export const pages = {
  home: 'Inicio',
  listaCompra: 'Compras'
}

type DrawableMenuDefaultStorageTyoe = {
  visible: boolean,
  selected: keyof typeof pages
}


export const DrawableMenuDefaultStorage: DrawableMenuDefaultStorageTyoe = {
  visible: false,
  selected: 'home'
}