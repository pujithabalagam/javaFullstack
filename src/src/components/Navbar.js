import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-center">
      <div className="container-fluid p-5 bg-info text-white text-center">
        <img src="https://tse2.mm.bing.net/th/id/OIP.q8ELjxohqCj5GLrRsjXFfwHaHa?pid=Api&P=0&h=180" alt="logo" width="6%" height="6%" />
        <div>
          <h1><i>Cakes Recipes</i></h1>
          <h3>Make A Try!</h3>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#"><h3><i><b>All Recipes</b></i></h3></a></li>
          <li className="nav-item"><a className="nav-link" href="#"><h3><i><b>Chef Special</b></i></h3></a></li>
          <li className="nav-item"><a className="nav-link" href="#"><h3><i><b>Blogs</b></i></h3></a></li>
          <li className="nav-item"><a className="nav-link" href="#"><h3><i><b>About Us</b></i></h3></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;