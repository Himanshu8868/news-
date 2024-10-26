// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',  // State to store the search query
//     };
//   }

//   // Handle input change
//   handleInputChange = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };

//   // Handle form submission
//   handleSearchSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload
//     const { searchQuery } = this.state;

//     if (searchQuery.trim()) {
//       console.log(`Searching for: ${searchQuery}`); 
//       // Redirect or fetch data based on searchQuery
//       // Example: this.props.history.push(`/search?query=${searchQuery}`);
//     } else {
//       alert('Please enter a valid search query.');
//     }
//   };

//   render() {
//     const { Mode, toggleMode } = this.props;
//     const { searchQuery } = this.state;

//     return (
//       <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
//         <div className="container-fluid">
//           {/* Brand */}
//           <Link className="navbar-brand" to="/">
//             Navbar
//           </Link>

//           {/* Hamburger Menu */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             {/* Links */}
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">General</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Entertainment">Entertainment</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Health">Health</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Science">Science</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Sports">Sports</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Technology">Technology</Link>
//               </li>
//             </ul>

//             {/* Search Form */}
//             <form className="d-flex" onSubmit={this.handleSearchSubmit}>
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={searchQuery}
//                 onChange={this.handleInputChange}
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>

//             {/* Mode Toggle */}
//             <div className={`form-check form-switch text-${Mode === 'light' ? 'dark' : 'light'} ms-3`}>
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="modeSwitch"
//                 onClick={toggleMode}
//               />
//               <label className="form-check-label" htmlFor="modeSwitch">
//                 Dark / Light Mode
//               </label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    const { Mode, toggleMode } = this.props;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
              </ul>
              {/* Align the switch with flexbox */}
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <div className={`form-check form-switch text-${Mode === 'light' ? 'dark' : 'light'} me-3`}>
                  <input
                    className="form-check-input"
                    onClick={toggleMode}
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Change Color
                  </label>
                </div>
                <div className={`text-${Mode === 'light' ? 'dark' : 'light'}`}>
                  <small>Responsive Navbar</small>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
