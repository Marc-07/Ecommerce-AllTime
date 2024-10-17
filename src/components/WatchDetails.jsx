import { useParams } from "react-router-dom";

const WatchDetail = ({ data, addToCart }) => {
  
  const { id } = useParams();
  const watch = data.find((item) => item.id === parseInt(id));

  if (!watch) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container mx-auto my-10 max-w-md">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={`/img/${watch.image}.jpg`}
          alt={`Imagen de ${watch.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2">{watch.name}</h2>
          <p className="text-gray-700 text-base mb-2">{watch.description}</p>
          <p className="text-gray-700 text-base mb-2">Para él</p>
          <p className="bold">
            <span className="text-gray-700 text-base mb-2">Color:</span> Negro
          </p>
          <p className="text-xl font-bold text-red-600 mb-4 pt-4">${watch.price}</p>

          {/* Contenedor de botones usando Flexbox */}
          <div className="flex justify-between items-center mt-4">
            {/* Botón para regresar a la lista de productos */}
            <a
              href="/products"
              className="inline-flex items-center text-gray-800 hover:text-gray-600 transition"
            >
              <span className="text-lg mr-2">←</span>
              Back
            </a>

            {/* Botón para agregar al carrito */}
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
              onClick={() => addToCart(watch)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetail;
