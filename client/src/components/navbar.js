// import { Link } from "react-router-dom"

// const Navbar = () => {
//     return(
//         <header>
//             <div className="container">
//                 <h1>Aidan's Instagram Clone</h1>
//                 <Link to="/">
//                     <h1>Home</h1>
//                 </Link>
//                 <Link to="/search">
//                     <h1>Search</h1>
//                 </Link>
//                 <Link to="/account">
//                     <h1>Account</h1>
//                 </Link>
//                 <Link to="/signout">
//                     <h1>Sign Out</h1>
//                 </Link>
//             </div>
//         </header>
//     )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header style={headerStyle}>
      <div className="container" style={containerStyle}>
        <h1 style={logoStyle}>Aidan's Instagram Clone</h1>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/search" style={linkStyle}>
            Search
          </Link>
          <Link to="/account" style={linkStyle}>
            Account
          </Link>
          <Link to="/signout" style={linkStyle}>
            Sign Out
          </Link>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 0',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', // Add a drop shadow
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%', // Fill the entire width of the screen
  maxWidth: '1200px', // Set a max width for the content
  margin: '0 auto', // Center the content
};

const logoStyle = {
  fontSize: '1.5rem',
  margin: 0,
};

const navStyle = {
  display: 'flex',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 1rem',
};

export default Navbar;

