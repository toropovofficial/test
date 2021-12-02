import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: '43548c34a2626b9b3f067826b7a5a856'
  }
})

export default instance

// import axios from 'axios'

// class ParamsRequests {
//   instance: any
//   constructor (adress: string, key: string) {
//     this.instance = axios.create({
//       baseURL: adress,
//       params: {
//         api_key: key
//       }
//     })
//   }
// }
// const axiosInstance = new ParamsRequests('http://ws.audioscrobbler.com/2.0/', '43548c34a2626b9b3f067826b7a5a856').instance

// export default axiosInstance
