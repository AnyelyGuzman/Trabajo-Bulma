import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4000'
})

http.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedError) {
    return Promise.reject(error)
  }
})

const Api = {

  //Producto

  async getProductos() {
    try {
      return await http.get('/productos')
    } catch (error) {
      console.error(error)
    }
  },

  async crearProductos(obj) {
    try {
      return await http.post('/productos', obj)
    } catch (error) {
      console.error(error)
    }
  },
}


export default Api