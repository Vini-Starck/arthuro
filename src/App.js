import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Fotos from "./pages/Fotos";
import Musicas from "./pages/Musicas";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-gray-100">
        

        <Header />
        <main className="flex-grow p-0 m-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/musicas" element={<Musicas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
