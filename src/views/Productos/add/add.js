import React from 'react'

export default function ProductosAdd(props) {
  return (
    <div>
      <h2 class="title is-2"  style={{ textAlign: 'center' }}>Formulario Agregar</h2>
      <div class="field">
        <label class="label">Nombre Producto</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nombre" />
        </div>
      </div>
      <div class="field">
        <label class="label">Precio</label>
        <div class="control">
          <input class="input" type="number" placeholder="Precio" />
        </div>
      </div>
      <div class="field">
        <label class="label">Cantidad</label>
        <div class="control">
          <input class="input" type="number" placeholder="Cantidad" />
        </div>
      </div>
      <button class="button is-success" onClick={ props.hadleClickAdd }>Agregar</button>
    </div>
  )
}