import React from 'react'

const Home = () => {
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 
                className="text-4xl font-bold mb-4">¡Bienvenido a nuestra tienda de relojes!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Explora nuestra selección de productos y encuentra el reloj perfecto para ti.
            </p>
            <a
                href="/products"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Ver productos
            </a>
        </div>
  )
}

export default Home;

