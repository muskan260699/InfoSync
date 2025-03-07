import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="edituser/:id" element={<EditUser/>}></Route>
          <Route exact path="viewuser/:id" element={<ViewUser/>}></Route>
          {/* <Route exact path="/" element={<DeleteUser/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
