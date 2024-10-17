import { useMemo } from "react"

const Header = ({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}) => {

    //State derivado
    const isEmpty = useMemo ( () => cart.length === 0, [cart] )
    const cartTotal =  useMemo(() => cart.reduce ((total, item) => total + (item.quantity * item.price), 0), [cart])

  return (
    <header className="relative bg-gray-800 bg-cover bg-center h-36 flex items-center justify-between px-8">

        <div className="flex items-center">
            <a href="/">
                <img className="w-48 h-48" src="/img/logo.png" alt="imagen logo" /> 
            </a>
        </div>

        <nav className="flex items-center space-x-4">

            <ul className="flex space-x-8 text-white text-xl">
                <li>
                    <a href="/" className="hover:text-blue-600 transition duration-300">Inicio</a>
                </li>
                <li>
                    <a href="/products" className="hover:text-blue-600 transition duration-300">Productos</a>
                </li>
            </ul>
           
            <div className="relative group">
                <img className="h-8 pr-14 cursor-pointer" src="/img/carrito.png" alt="imagen carrito" />
                
                <div id="carrito" className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-6 hidden group-hover:block z-50 w-96">
                { isEmpty  ? (
                        <p className="text-center text-gray-700 font-semibold mb-4">El carrito está vacío</p>
                ) : (

                    <>

                        <table className="w-full mt-4">
                        <thead>
                            <tr className="text-left">
                                <th className="font-bold p-2">Imagen</th>
                                <th className="font-bold p-2">Nombre</th>
                                <th className="font-bold p-2">Precio</th>
                                <th className="font-bold p-2">Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map (watch => (

                            
                                <tr 
                                    key={watch.id} 
                                    className="border-t"
                                >
                                    <td className="p-2">
                                        <img className="h-16 w-16 object-cover" src= {`/img/${watch.image}.jpg`} alt="imagen guitarra" />
                                    </td>
                                    <td className="p-2">{watch.name}</td>
                                    <td className="p-2 text-primary font-bold">${watch.price}</td>
                                    <td className="py-6 pl-0 flex items-center gap-2">
                                        <button 
                                            className="px-3 py-1 bg-gray-300 rounded"
                                            onClick={() => decreaseQuantity (watch.id)}
                                        >
                                            -
                                        </button>
                                        <span>{watch.quantity}</span>
                                        <button 
                                            className="px-3 py-1 bg-gray-300 rounded"
                                            onClick={() => increaseQuantity (watch.id)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="p-2">
                                    <button 
                                        className="bg-red-600 rounded-full text-white font-bold w-5 h-5 flex items-center justify-center hover:bg-red-500 transition-all"
                                        onClick={() => removeFromCart (watch.id)}
                                    >   
                                        X
                                    </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>

                

                    <p className="text-right mt-6 font-semibold text-lg">Total a pagar: <span className="text-primary">${cartTotal}</span></p>

                    </>

                )}
                    <button 
                        className="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-800 transition duration-300"
                        onClick={clearCart}
                    >
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </nav>

    </header>
  )
}

export default Header;