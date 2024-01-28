import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.css"
export default function Home() {

  return (
    <>
      <div className="container-fluid container-fluid-custom py-md-5">
        <main>
          <div className="row py-md-5 text-center justify-content-center">
            <div className="col-md-12 col-lg-6 mb-6 mb-md-0 query">
              <h1 className="display-2 fw-bold mb-4 position-relative">
                Write your thoughts down as they come to you.
              </h1>
              <p className="fs-4 mb-4">
                Notes is a simple to use free note taking app made with NodeJs.
              </p>
              <Link to="/login" className="btn bg-dark text-light bt-lg rounded-pill">Try Notes, it's FREE!</Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
