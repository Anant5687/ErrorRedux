import './App.css';
import UserList from './components/user/UserList';
import {
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './components/addUser/AddUser';
import EditUser from './components/addUser/EditUser';

function App() {
  return (
    <>
      <h1 align="center">Crud Operation </h1>
      
      <Routes>
        <Route path="/" element={<UserList/>}/>
      
        <Route path="/add-User" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </>
  );
}

export default App;
