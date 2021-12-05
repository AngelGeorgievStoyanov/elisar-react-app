
import { Routes, Route} from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './components/contexts/AuthContex';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import Loading from './components/Loading/Loading';


const initialAuthState = {
  accessToken: '',
  email: '',
  _id: ''
}



function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState)

  

  const login = (authData) => {
    setUser(authData)
  }
  const logout = () => {
    setUser(initialAuthState)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
    </AuthContext.Provider>
  );
}

export default App;
