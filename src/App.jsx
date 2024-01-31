import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontPage';
import Signin from './pages/signin';
import Signup from './pages/signup'


function App() {
  return (
    <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
