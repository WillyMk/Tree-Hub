import React from 'react'

const Footer = () => {
  return (
    <div classame="container-lg" style={{marginTop: "-30px"}}>
    <footer className="text-center text-lg-start text-muted">
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section> */}
      <section style={{backgroundColor: "lightcyan", color: "black"}}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color: "black"}}>
                <i className="fa fa-gem me-3 text-secondary" ></i>The Tree Hub
              </h6>
              <p>
              We are a reputable company that deals with trees and plants called Tree Hub. We turn your visions of farming and lush surroundings into reality. We provide top-notch tree saplings of various varieties.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color: "black"}}>Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Mango Seedlings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pawpaw seedlings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Water Melon Seedlings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sukumawiki etc...
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color: "black"}}>Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Products 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contacts 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Location
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color: "black"}}>Contact</h6>
              <p>
                <i className="fa fa-home me-3 text-secondary"></i>
                Murang'a, Kongo-ini Kenya
              </p>
              <p>
                <i className="fa fa-envelope me-3 text-secondary"></i>
                treehub@gmail.com
              </p>
              <p>
                <i className="fa fa-phone me-3 text-secondary"></i> +254 723366273
              </p>
              <p>
                <i className="fa fa-print me-3 text-secondary"></i> +254 723366273
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: "gray", color: "white"}}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TheTreeHub.com
        </a>
      </div>
    </footer>
  </div>
  )
}

export default Footer