import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
 
  // Handle input change
  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // Handle form submission
  handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const { searchQuery } = this.state;

    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`); 
      // Redirect or fetch data based on searchQuery
      // Example: this.props.history.push(`/search?query=${searchQuery}`);
    } else {
      alert('Please enter a valid search query.');
    }
  };

  render() {
    const { Mode, toggleMode } = this.props;
    const { searchQuery } = this.state;

    return (
      <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Links */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex" onSubmit={this.handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={this.handleInputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Mode Toggle */}
            <div className={`form-check form-switch text-${Mode === 'light' ? 'dark' : 'light'} ms-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="modeSwitch"
                onClick={toggleMode}
              />
              <label className="form-check-label" htmlFor="modeSwitch">
                Dark / Light Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
