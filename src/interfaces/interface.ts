interface oneArtist {
  artist: {
    name: never,
  },
  id: string,
  mbid: string,
  name: string,
}

interface inputAndSelectValue {
  select: string,
  value: string,
}

interface Data {
  tracks: {
    track: [],
  }
}

interface audio {
  $refs: {
    audio: {
      pause: () => {}
    }
  }
}

interface dataType {
  _data: {
    type: boolean
  }
}

export {
  oneArtist,
  inputAndSelectValue,
  Data,
  audio,
  dataType
}
