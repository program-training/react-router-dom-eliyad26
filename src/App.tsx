import axios from "axios";
import "./App.css";
import Users_List from "./components/Users_List";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components

// ... Your User interface and useEffect code ...

function App() {
  const [Users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users_List users={Users} />} />
      </Routes>

      <div>hello !</div>
    </Router>
  );
}

export default App;
