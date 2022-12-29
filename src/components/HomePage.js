import React from "react";
import Typed from "react-typed";

const HomePage = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Tree Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Expand Navigation"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seedlings
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Mango Seedlings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Apple Seedlings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Macadamia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Passion Seedlings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Pawpaw Seedlings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Tree Tomato
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Oranges
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      All
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-text">
            <button type="button" className="btn btn-primary">
              Lipa na M-pesa
            </button>
          </div>
        </div>
      </nav>
      <div className="wrapper" style={{ marginTop: "-20px" }}>
        <img
          style={{ width: "100%", height: "550px" }}
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img-responsive"
          alt="Responsive"
        />
        <div className="sol-sm-6">
          <h1 id="text">
          <Typed
            strings={[
              "Mango Seedlings",
              "Pawpaw Seedlings",
              "Macadamia",
              "Tree Tomato",
              "Apple Seedlings",
              "Oranges",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;
