interface DataMainCard {
  buttonValue: string,
  isModal: boolean,
}
interface DatAMainTrackList {
  tab: string,
  result: any,
  massDeletedItem: string[],
  perPage: number,
  total: number,
  currentPage: number
}

interface DataSearchPage {
  inputText: {
    select: string,
    value: string
  },
  selectValue: string,
  showLoader: number,
  genreList: string[],
  isEmpty: boolean
}

interface DataHomeMain {
  mass: string[],
  typeBtn: boolean,
  genre: string[]
}

export {
  DataMainCard,
  DatAMainTrackList,
  DataSearchPage,
  DataHomeMain
}
