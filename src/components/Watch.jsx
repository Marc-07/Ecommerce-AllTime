import { useNavigate } from "react-router-dom";

const Watch = ({ watch }) => {
  
  const { id, name, image, description, price } = watch;

  // Hook para navegación
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img 
        src={`/img/${image}.jpg`} 
        alt={`Imagen de ${name}`} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col space-y-4">
        <h3 className="text-2xl font-bold uppercase">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-primary font-bold text-red-600 text-2xl">${price}</p>
          <button 
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition w-auto"
            onClick={() => navigate(`/watch/${id}`)} // Redirige a WatchDetail
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
