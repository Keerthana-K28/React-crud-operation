import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import Create from "./create";
import Read from "./read";
import Update from "./update";
import Delete from "./delete";
import './app.css';

function Home() {
  return (

    <Routes >
      <Route
        path="/"
        element={
          <>
            <nav  className="sticky-nav" >
            <h2> CRUD Operations</h2>
     
              <div className="list" >  
              <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/read">Read</Link>
                </li>
                <li>
                  <Link to="/update">Update</Link>
                </li>
                <li>
                  <Link to="/delete">Delete</Link>
                </li>
              </ul>
              </div>
            </nav>
          </>
        }
      />
      
      <Route path="/create" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<Update />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>

  );
}


export default Home;
