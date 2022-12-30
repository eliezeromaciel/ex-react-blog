import {  BrowserRouter,  Routes,   Route, } from 'react-router-dom'
import { Header } from "./components/Header";
import { Cadastro } from './components/Pages/Cadastro';
import { Home } from "./components/Pages/Home";

function App() {
  return (
    <>

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}   />
          <Route path='/cadastro' element={<Cadastro/>}   />
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
