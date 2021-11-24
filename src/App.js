import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('/home');



  return (
    <div id="box" className="App">
      < Header />
      <Switch>
        < main id="main-content" >
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" render={(props) => {
            return <Redirect to="/" />
          }} />
        </main>
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
