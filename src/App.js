import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useState, useEffect } from "react";
import { AuthContext } from "./context/context";
import Footer from "./components/UI/Footer/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth: setIsAuth }}>
      <BrowserRouter className='page_container'>
        <Navbar />
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
