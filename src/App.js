import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddService from './Pages/Home/AddService/AddService';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login/Login';
import ManageServices from './Pages/Home/Login/ManageServices/ManageServices';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import UpdateService from './Pages/Home/Login/UpdateService/UpdateService';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
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
            <Route path="/addService"> <AddService></AddService> </Route>
            <Route path="/manageServices"><ManageServices></ManageServices></Route>
            <Route path="/updateService/:id"><UpdateService></UpdateService></Route>
            <Route path="*"><NotFound></NotFound></Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
