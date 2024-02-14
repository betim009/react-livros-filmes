import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Livros from "./pages/livros";
import Filmes from "./pages/filmes";
import NotFound from "./pages/not-found";
import LayOut from "./components/layOut";

function App() {
  return (
    <div>
      <Routes>
        {/* Components que irão fazer parte do LayOut */}
        <Route path='/' element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path='/livros' element={<Livros />} />
          <Route path='/filmes' element={<Filmes />} />
        </Route>
        {/* Que não irão fazer parte */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;