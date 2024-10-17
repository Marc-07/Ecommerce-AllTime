import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { db } from "./data/db";
import Products from "./pages/Products";
import WatchDetail from "./components/WatchDetails"; 

function App() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itemExists = cart.findIndex((watch) => watch.id === item.id);
    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const upDateCart = [...cart];
      upDateCart[itemExists].quantity++;
      setCart(upDateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((watch) => watch.id !== id));
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function increaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart(e) {
    setCart([]);
  }

  return (
    <Router>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products data={data} addToCart={addToCart} />}
        />
        <Route path="/products/:id" element={<WatchDetail data={data} addToCart={addToCart} />} />

      </Routes>

      <footer className="bg-gray-900  py-5">
        <div className="container mx-auto">
          <p className="text-white text-center text-lg mt-4">
            All TIME - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
