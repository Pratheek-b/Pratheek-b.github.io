import React from 'react';

const Dropdown = () => {
  return (
  //  <h1> Hello World </h1>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="public/index.html">MarketWatch</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="public/index.html">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="public/index.html">Link</a>
        </li>
        <li className="nav-item dropdown active">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu active" aria-labelledby="navbarDropdown">
            <a className="dropdown-item active" href="public/index.html">Action</a>
            <a className="dropdown-item active" href="public/index.html">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item active" href="public/index.html">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="public/login.html" tabindex="-1" aria-disabled="true">Login</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);
}
export default Dropdown;
