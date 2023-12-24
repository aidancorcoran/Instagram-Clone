import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Home from "./pages/home"

import Routing from "./routes/Routing";

 const App = () => {
 return (
   <div>
     <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
     </BrowserRouter>
   </div>
 );
};

export default App;