import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import CreateCard from './pages/CreateCard/CreateCard'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact component = {Home} />
      <Route path='/criarCard' exact component = {CreateCard} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
