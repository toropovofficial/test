interface test {
  artist: string
  image: object[]
  listeners: string
  mbid: string
  name: string
  streamable: string
  url: string
}

interface GeneralState {
    responseTrack: object[],
    from:number,
    to: number,
    total: number,
    auth: true
}

export default GeneralState
