import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app

import Routing from "./routes/Routing";

 const App = () => {
 return (
   <div>
     <Routes>
        <Routing />
     </Routes>
   </div>
 );
};
 export default App;