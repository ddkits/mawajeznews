/**
 * Built by Sam Ayoub, Reallexi.com
 * https://github.com/melayyoub
 * https://mawajez.com
 * Important: To use this code please leave the copyright in place
 * Reallexi LLC, https://reallexi.com
 */
import './App.css';

import React, { useState } from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
  const apiKey = '';
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <>
        <Router>
          <NavBar />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  country="in"
                  pageSize={18}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  country="in"
                  pageSize={18}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  country="in"
                  pageSize={18}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general1"
                  country="in"
                  pageSize={18}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  country="in"
                  pageSize={18}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  country="in"
                  pageSize={18}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  country="in"
                  pageSize={18}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  country="in"
                  pageSize={18}
                  category="technology"
                />
              }
            />
          </Routes>

          {/* <News setProgress={setProgress} apiKey={apiKey}   country="us" pageSize={6} category="general"/> */}
        </Router>
      </>
    </div>
  );
};
export default App;
