import React, { useEffect, useState } from "react"
import api from '../../../src/api'

export default function Productos(props) {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const response = await api.getProductos()
    setProductos(response.data)
    console.log(response)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div className="table-container">
      <h2 className="title is-2" style={{ textAlign: 'center' }}>Productos</h2>
      <button className="button is-success" onClick={() => props.history.push('/productos/crear')}>Agregar</button>
      <table className="table" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th><abbr title="id">id </abbr></th>
            <th><abbr title="nombre">Nombre Producto</abbr></th>
            <th><abbr title="precio">Precio</abbr></th>
            <th><abbr title="precio">Cantidad</abbr></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id_productos}</td>
              <td>{ele.nombre}</td>
              <td>{ele.precio}</td>
              <td>{ele.cantidad}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}