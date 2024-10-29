import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import './App.css'; // Adjust the path if your structure is differentfro
import Movie from "./Movie";
import Newmovie from "./Newmovie";
import Updatemovie from './Updatemovie';
import ProtectedRoute from './ProtectedRoute';
import MovieApp from './MovieApp';
import './media.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Movie"
          element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
          }
        />        <Route path="Newmovie" element={
          <ProtectedRoute>
            <Newmovie />
          </ProtectedRoute>
        } />
        <Route path="Updatemovie" element={<ProtectedRoute>
          <Updatemovie />
        </ProtectedRoute>
        }
        />
        <Route path="MovieApp" element={<ProtectedRoute><MovieApp />
        </ProtectedRoute>} />


      </Routes>
    </Router >
  );
}
// https://www.figma.com/design/rsilPqu30TpPX7IOPqLPAf/Movie-list?node-id=0-1&t=LIfUUNVnyIkSzIo7-0

export default App;
