import React from 'react'

const Navbar = () => {
    return (
       <div className='justify-content-between text-center py-4 ' style={{backgroundColor: '#800080'}}>
            <a href="https://web.whatsapp.com/" className="icoWhatsApp me-4 fa-lg" title="Facebook">
                <i className="fa fa-whatsapp fst-italic" style={{color: 'orange'}}>  WhatsApp  </i>
              </a>
              <a href="/" className="icoFacebook me-4 fa-lg" title="Facebook">
                <i className="fa fa-facebook fst-italic" style={{color: 'lightblue'}}>  FaceBook  </i>
              </a>
              <a href="/" className="icoTwitter me-4 fa-lg" title="Twitter">
                <i className="fa fa-twitter fst-italic" style={{color: 'lightred'}}> Twitter  </i>
              </a>
              <a href="/" className="icoGoogle me-4 fa-lg" title="Google +">
                <i className="fa fa-google-plus fst-italic" style={{color: 'white'}}>  Google  </i>
              </a>
            </div>
    )
}

export default Navbar
