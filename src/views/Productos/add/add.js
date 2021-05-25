import React, {useState} from "react"
import api from '../../../api'
import {useParams} from "react-router-dom"

export default function Productos(props) {
  const { id } = useParams()
  const [nombre, setnombre] = useState('')
  const [cantidad, setcantidad] = useState('')
  const [precio, setprecio] = useState('')

  const handleInputChange = event => {
    if (event.target.name === 'nombre') setnombre(event.target.value)
    if (event.target.name === 'cantidad') setcantidad(event.target.value)
    if (event.target.name === 'precio') setprecio(event.target.value)
  }

  const envio = async event => {
    console.log("bug 1")
    event.preventDefault()
    console.log("bug 2")
    const data = {
      nombre: nombre,
      cantidad: cantidad,
      precio: precio
    }
    console.log("bug 3")
    const response = await api.crearProductos(data)
    console.log("bug 4")
    alert(response.data.response)
    console.log("bug 5")
    props.history.push("/")
    console.log("bug 6")
  }
  return (
    <div>
      <h2 className="title is-2" style={{ textAlign: 'center' }}>Formulario Agregar</h2>
      
        <div className="field" >
          <label className="label">Nombre Producto</label>
          <div className="control">
            <input className="input" type="text" placeholder="Nombre" value={nombre} name="nombre" onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Cantidad</label>
          <div className="control">
            <input className="input" type="number" placeholder="Cantidad" value={cantidad} name="cantidad" onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Precio</label>
          <div className="control">
            <input className="input" type="number" placeholder="Precio" value={precio} name="precio" onChange={handleInputChange} />
          </div>
        </div>
        <button className="button is-success" type="submit" onClick={envio}>Agregar</button>
      
    </div>
  )
}