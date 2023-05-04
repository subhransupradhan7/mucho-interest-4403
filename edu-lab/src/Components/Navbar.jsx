import React from 'react';

const Navbar = ({ userName, userPhoto }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="/">
        {/* Add your logo here */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* Add your tabs here */}
        </ul>
        <div className="my-2 my-lg-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="far fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-cog"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={userPhoto} alt="User Avatar" className="rounded-circle mr-2" width="30" height="30" />
                {userName}
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
