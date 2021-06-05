/** @format */

import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <span className='navbar-brand mb-0 h1'>
        <h1>
          Navbar{" "}
          <span
            style={{ background: "brown" }}
            className='badge badge-pill badge-dark'>
            {totalCounters}
          </span>
        </h1>
      </span>
    </nav>
  );
};

export default NavBar;
