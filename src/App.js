
import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContex';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';





function App() {

  

  

  return (
    <AuthProvider>
      <div id="box" className="App">
        < Header />
        < main id="main-content" >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        < Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
