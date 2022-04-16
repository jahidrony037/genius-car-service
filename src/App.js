import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login/Login';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <Route path="/login"><Login></Login></Route>
            <PrivateRoute path="/booking/:serviceID"><Booking></Booking></PrivateRoute>
            <Route path="*"><NotFound></NotFound></Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
