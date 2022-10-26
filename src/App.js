import React  from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Pagination from "./Pages/Pagination";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact={true} path='/' element={<Pagination/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
