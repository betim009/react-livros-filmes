import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Livros from "./pages/livros";
import Filmes from "./pages/filmes";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/livros' element={<Livros />} />
        <Route path='/filmes' element={<Filmes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;