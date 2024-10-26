// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Mode: 'light', // State to track light/dark mode
    };
  }

  toggleMode = () => {
    this.setState({
      Mode: this.state.Mode === 'light' ? 'dark' : 'light',
    });
  };

  render() {
    return (
      <Router>
        <Navbar Mode={this.state.Mode} toggleMode={this.toggleMode} />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top General Headlines"
                  Mode={this.state.Mode}
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Business Headlines"
                  Mode={this.state.Mode}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Entertainment Headlines"
                  Mode={this.state.Mode}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Health Headlines"
                  Mode={this.state.Mode}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Science Headlines"
                  Mode={this.state.Mode}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Sports Headlines"
                  Mode={this.state.Mode}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  pageSize={12}
                  country="us"
                  headline="Top Technology Headlines"
                  Mode={this.state.Mode}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
