import React from 'react'
import productosData from '../../data/Productos'

export default function Productos(props) {
  return (
    <div class="table-container">
      <h2 class="title is-2" style={{ textAlign: 'center' }}>Productos</h2>
      <button class="button is-success" onClick={ props.hadleClickAdd }>Agregar</button>
      <table class="table" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th><abbr title="id">id </abbr></th>
            <th><abbr title="nombre">Nombre Producto</abbr></th>
            <th><abbr title="precio">Precio</abbr></th>
            <th><abbr title="precio">Cantidad</abbr></th>
          </tr>
        </thead>
        <tbody>
          {productosData.map(ele => (
            <tr>
              <td>{ele.id}</td>
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