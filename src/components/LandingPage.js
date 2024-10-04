import React from 'react';
import Carousel from './carousel';
import cart from './svg.svg'
import firstt from './firstbg.png';


const LandingPage = ({ data, scrollToNextSection }) => {

    
    const items = [
        ...data.PhoneAccessories.slice(0, 2),
        ...data.CrystalJewellery.slice(0, 2),
        ...data.More.slice(0, 1)
    ];

    return (
    <div className='main_div'>
        <div className="landingpage">
            <div className="navbar">
                <div className="compname">
                    Pop Rock Crystal
                </div>
                <div className="navsection">
                    <nav className="navcontent">
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">About US</a>
                        <a href="#">Help?</a>
                    </nav>
                    <div className="cart">
                        <div className="cartnumber">00</div>
                        <img src={cart} alt="cart" />
                    </div>
                </div>
            </div>
            <div className="landing">
                <div className="left_section">
                    <p className="left_first_para">Welcome to</p>
                    <h1 className="left_heading">Pop Rock Crystal Shop!</h1>
                    <p className="left_second_para">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
                    <div className="left_button">
                        <button className="left_first_button">
                            SHOP NOW
                        </button>
                        <button className="left_second_button">
                            About Us
                        </button>
                    </div>
                </div>
                <div className="carousel-section">
                    <Carousel images={items} />
                </div>
            </div>
            <div className="scroll-down-indicator" onClick={scrollToNextSection}>
                <div className="scroll-arrow"></div>
                <span className="scroll-text">Scroll Down</span>
            </div>
        </div>
        <div className='image_div'>
            <img src={firstt} alt={cart}/>
        </div> 
    </div>
    
        
        
    );
};

export default LandingPage;
