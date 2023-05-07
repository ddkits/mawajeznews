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
import 'bootstrap/dist/js/bootstrap.min.js';
import { channels } from './component/core/helpers';
const App = () => {
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
                  key="general"
                  country="in"
                  pageSize={20}
                  category="general"
                />
              }
            />
            {channels.map((x) => {
              return (
                <Route
                  key={x.key}
                  exact
                  idtitle={x.title}
                  path={`/${x.key}`}
                  element={
                    <News
                      setProgress={setProgress}
                      idfrom={x.id}
                      idtitle={x.title}
                      key={`${x.key}`}
                      country="in"
                      pageSize={20}
                      category={`${x.key}`}
                    />
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </>
    </div>
  );
};
export default App;
