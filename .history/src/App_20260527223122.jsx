import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";

import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Archive from "./pages/Archive";
import ArchiveDetail from "./pages/ArchiveDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/archive/:id" element={<ArchiveDetail />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;