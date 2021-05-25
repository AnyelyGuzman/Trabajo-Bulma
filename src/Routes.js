import Productos from './views/Productos/Productos'
import ProductosCrear from './views/Productos/add/add'

const Routes = [
    { path:"/", exact: true, component: Productos },
    { path:"/productos/crear", exact: true, component: ProductosCrear},
]

export default Routes;