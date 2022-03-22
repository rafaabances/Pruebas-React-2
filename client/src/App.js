
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

return(

<Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
</Routes>
)

}

export default App;
