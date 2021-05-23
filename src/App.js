import React, { useState } from "react"

import Productos from './views/Productos/Productos'
import ProductAdd from './views/Productos/add/add'

import 'bulma/css/bulma.css'

export default function App() {
  const [editProduct, setEditProduct] = useState(false)

  const hadleClickAdd = () => setEditProduct(!editProduct)

  const ComponentSelect = () => {
    if (!editProduct) return <Productos hadleClickAdd={ hadleClickAdd } />
    return <ProductAdd hadleClickAdd={ hadleClickAdd } /> 
  }

  return <ComponentSelect />
}
