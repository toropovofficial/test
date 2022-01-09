interface dataHomeForm {
  nameProduct: string,
  descrProduct: string,
  linkProduct: string,
  priceProduct: string,
  error: string,
  newProduct: {
    name?: string,
    descr?:  string,
    link?:  string,
    price?:  string,
    id?: number,
    time?: number,
  },
}


interface newProduct  {
  name: string,
  descr:  string,
  link:  string,
  price:  string,
  id: number,
  time: number,
}

interface dataHome {
  arrayProducts: object,
  isLoader: boolean,
  selectValue: string,
  filterName: string,
  alertValue: string,
}

export {
  dataHomeForm,
  dataHome,
  newProduct,
}