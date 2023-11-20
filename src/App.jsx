import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import database from "./constants";
import Debug from "./Components/Debug/Debug";
import TextEditor from "./Components/TextEditor/TextEditor";
import Post from "./Components/Post/Post";
import ViewPost from "./Components/ViewPost/ViewPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/Homepage"} />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Debug" element={<Debug />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TextEditor" element={<TextEditor />} />
        <Route path="/viewpost/:postName" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
