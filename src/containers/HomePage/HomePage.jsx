import React, { useState } from "react";
import { useSelector } from "react-redux"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignupLoginModal from "../../components/Dialogs/SignupLoginModal";
import loginCompImage from "../../assets/logo.png";
import companyNameImage from "../../assets/companyName.png";
import faceBookIcon from "../../assets/facebookButton.png";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Hamburger from "../../assets/images/hamburger.png";
// import Header from '../../components/partials/Header'
import AutoPlaySlider from '../../UI_Frontendlib/molecules/AutoPlaySlider'
import { GetContinueWatching, GetRecommendationCarosal } from '../VideoInfoPage/VideoInfoPage'
import continueWaching from '../VideoInfoPage/__mock/continuewatching'
import moviesMock from '../VideoInfoPage/__mock/movies'

require('./HomePageStyle.scss')

function HomePage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [show, setShow] = useState(false);
  const [Navshow, setNavShow] = useState(false);
  const handleNavModal = () => setNavShow(!Navshow);
  const handleModal = () => setShow(true);

  const { email, password } = inputs;

  // Configure Autoplay slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 10000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    display: true
  };

  return (
    <div className="home-background">
      <div className='d-flex'>
        <SideNav ></SideNav>
        <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
      </div>
      <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
      <div className="right-navsection">
        {/* <Header /> */}
      </div>
      <AutoPlaySlider {...settings} />
      <GetContinueWatching continueWaching={continueWaching} />
      <GetRecommendationCarosal title={'Popular'} movies={moviesMock} />
      <div>
        <Button variant="warning" onClick={handleModal}>
          Login
        </Button>
      </div>
      <Modal className="modal-style" centered show={show} >
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <div className="logo-div">
            <img
              src={loginCompImage}
              alt="login"
            />{" "}

          </div>
          <div className="company-name">
            <img
              src={companyNameImage}
              alt="company-name"
            />{" "}
          </div>
          <div className="heading">Login or Create account</div>
          <form name="form" >
            <div className="form-group">
              <div className="form-email">EMAIL</div>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value
                className="login-input"
              />

            </div>
          </form>{" "}
          <div className="btn-group">
            <button className="login-button">
              <div className="login-button-text">CONTINUE</div>
            </button>
            {/*<div className="signup-cont mt-5">
              New here? Please
              <Link onClick={handleShow} className="btn signup-button">
                Sign up
              </Link>
            </div>*/}
          </div>
          <div className="social-login"><h2><span>Social login</span></h2></div>
          <div className="social-img">
            <img className="fb-icon"
              src={faceBookIcon}
              alt="fb"
              width="75px"
            />{" "}
          </div>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export { HomePage };
