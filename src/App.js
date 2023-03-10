import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Group } from "./components/Group";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/userDetails/" element={<UserDetails />} />
          <Route path="/group" element={<Group />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
