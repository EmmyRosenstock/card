import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import CreateCard from './pages/CreateCard/CreateCard'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Home/>} />
      <Route path='/criarCard' exact element = {<CreateCard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
