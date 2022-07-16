
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './components/contexts/AuthContex';
import { NotificationProvider } from './components/contexts/NotificationContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import Coafior from './components/Coafior/Coafior';
import ErrorBoundary from './components/Common/ErrorBoudary';
import CreateCoafior from './components/CreateCoafior/CreateCoafior';
import DetailsCoafior from './components/DetailsCoafior/DetailsCoafior';
import EditCoafior from './components/EditCoafior/EditCoafior';
import Contacts from './components/Contacts/Contacts';
import MyPosts from './components/MyPosts/MyPosts';
import Profile from './components/Profile/Profile'
import GuardedRoute from './components/Common/GuardedRoute';

function App() {





  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>

          <div id="box" className="App">
            < Header />
            < main id="main-content" >
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/coafior" element={<Coafior />} />
                <Route path="/coafior/details/:clientCoafiorId" exact element={<DetailsCoafior />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/my-posts" element={<MyPosts />} />
                <Route path="/profile" element ={<Profile/>} />
                <Route element={<GuardedRoute />}>
                  <Route path="/coafior/create" exact element={<CreateCoafior />} />
                  <Route path="/coafior/edit/:clientCoafiorId" exact element={<EditCoafior />} />
                </Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>
            < Footer />
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
