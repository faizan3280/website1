import React, { useState, useEffect } from "react";
import "./Nav.css";
import myImage from "./kofi.jpg";
import myImage2 from "./double.jpg";
import myImage3 from "./ccd.jpg";
import myImage4 from "./kalrem.jpg";
import myImage8 from "./scence.jpg";
import myImage5 from "./shoes.jpg";
import myImage6 from "./blazer.jpg";
import myImage9 from "./wire.jpg";
import myImage10 from "./samsung.jpg";
import Services from "./Services";
import Services2 from "./Services2";
import Services3 from "./Services3";
import Services4 from "./Services4";
import Services5 from "./Services5";
import Services6 from "./Services6";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { IoHelp } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function Navbar() {
  const [service, setService] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);
  const [service5, setService5] = useState(false);
  const [service6, setService6] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCat, setShowCat] = useState(false);

  return (
    <>
      <div className="adjust">
        <div className="navbar">
          <div className="container">
            <div className="logo"></div>
            <div
              className="menu"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <IoReorderThreeOutline />
            </div>
            <div className={!showMenu ? "items" : "items show"}>
              <ul className="nav-links">
                <li>
                  <a href="#">
                    Shopping
                    <CiShoppingCart />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Sell
                    <MdOutlineSell />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Help
                    <IoHelp />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Messages
                    <TiMessages />
                  </a>
                </li>
                <li>
                <Link to='/login'>
                Sign In
                    <BiLogInCircle />

                </Link>
                    
            
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ban-hed">
          <div className="back">
            <img src={myImage8} alt="city-view" />
          </div>
          <h2 className="banHead-Heading">
            <b>Search</b> for products & find verified sellers near you
          </h2>
          <div className="search-bar">
            <input type="text" placeholder="Enter Product name" />
            <button type="submit">Search</button>
          </div>
        </div>

        <div className="services">
          <div
            className="categories"
            onClick={() => {
              setShowCat(!showCat);
            }}
          >
            Click to Show Services provided by<br></br>
            <IoReorderThreeOutline />
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className={!showCat ? "items" : "items show1"}>
            <ul>
              <li
                onMouseOver={() => {
                  setService(true);
                }}
                onMouseLeave={() => {
                  setService(false);
                }}
              >
                Building and Construction
              </li>
              <li
                onMouseOver={() => {
                  setService2(true);
                }}
                onMouseLeave={() => {
                  setService2(false);
                }}
              >
                Electronics and Electrical
              </li>
              <li
                onMouseOver={() => {
                  setService3(true);
                }}
                onMouseLeave={() => {
                  setService3(false);
                }}
              >
                Drugs and Pharma
              </li>
              <li
                onMouseOver={() => {
                  setService4(true);
                }}
                onMouseLeave={() => {
                  setService4(false);
                }}
              >
                {" "}
                Industrial Machinery
              </li>
              <li
                onMouseOver={() => {
                  setService5(true);
                }}
                onMouseLeave={() => {
                  setService5(false);
                }}
              >
                Industrial Supplies
              </li>
              <li
                onMouseOver={() => {
                  setService6(true);
                }}
                onMouseLeave={() => {
                  setService6(false);
                }}
              >
                Food and Agriculture
              </li>
              <li>
                <a href="#">View All Category</a>
              </li>
            </ul>
          </div>
        </div>
        {service && <Services />}
        {service2 && <Services2 />}
        {service3 && <Services3 />}
        {service4 && <Services4 />}
        {service5 && <Services5 />}
        {service6 && <Services6 />}
     

        <div className="outer">
          <div className="information-container">
            <div className="image-container">
              <img src={myImage} alt="coffee-machine" />
            </div>
            <p>NESCAFE BEANS TO YOUR CUP...</p>
            <p>New Vending Solutions</p>
            <p>Noida,Uttar Pradesh</p>
            <p>17500 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
            <br></br>
            <br></br>
          </div>

          <div className="information-container">
            <div className="image-container2">
              <img src={myImage2} alt="coffee-machine2" />
            </div>
            <p>DOUBLE DRINKS TEA COFFEE VENDING...</p>
            <p>Punchline vending machine</p>
            <p>New delhi, Delhi</p>
            <p>11999 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
          </div>

          <div className="information-container">
            <div className="image-container3">
              <img src={myImage3} alt="coffee-machine3" />
            </div>
            <p>CAFE COFFEE DAY AUTOMATIC COFFEE MAKER</p>
            <p>Vending Services & Solutions</p>
            <p>Noida,Uttar Pradesh</p>
            <p>1.25 lac / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
          </div>

          <div className="information-container">
            <div className="image-container4">
              <img src={myImage4} alt="coffee-machine4" />
            </div>

            <p>Kalerm X585 Coffee Machine</p>
            <p>Kaapi Machines (India) Private Limited</p>
            <p>Bengaluru, Karnataka</p>
            <p>3.10 lac / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
          </div>
        </div>
        <div className="outer">
          <div className="information-container">
            <div className="image-container">
              <img src={myImage5} alt="blazer" />
            </div>
            <p>SHOES</p>
            <p>Bata,sgs Mall</p>
            <p></p>
            <p>80000 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
            <br></br>
            <br></br>
          </div>

          <div className="information-container">
            <div className="image-container">
              <img src={myImage6} alt="chair" />
            </div>
            <p>Blazer</p>
            <p>Manyawar</p>
            <p>Konkan,Maharashtra</p>
            <p>17500 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
            <br></br>
            <br></br>
          </div>

          <div className="information-container">
            <div className="image-container">
              <img src={myImage9} alt="wire" />
            </div>
            <p>color Wires</p>
            <p>New Vending Solutions</p>
            <p>Pune,Maharashtra</p>
            <p>1750 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
            <br></br>
            <br></br>
          </div>

          <div className="information-container">
            <div className="image-container">
              <img src={myImage10} alt="Phone" />
            </div>
            <p>Samsung s24 Ultra</p>
            <p>New Gada Ellectinocs</p>
            <p>Mumbai,Maharashtra</p>
            <p>120000 / Piece</p>
            <button className="View-number">View Number </button>
            <br></br>
            <br></br>
            <button className="best-price">Get Best Price</button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
