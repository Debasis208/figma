import React, { useRef, useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Card from './components/Card';
import { newPhoto } from './crystalData';
import { CrystalData } from './crystalData';
import firsttt from './components/Vector 2.png';
import sect from './components/imagebg.png'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Product');
  const nextSectionRef = useRef(null);
  const  [showAll, setShowAll] = useState(false);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCardData = () => {
    if (selectedCategory === 'All Product') {
      return Object.values(CrystalData.data).flat();
    }
    return CrystalData.data[selectedCategory] || [];
  };

  function toogleShowAll(){
    setShowAll(!showAll);
  }

  const cardData = getCardData();
  const limitedCardData = showAll ? cardData : cardData.slice(0, 8);

  return (
    <div className="App">
      <LandingPage data={CrystalData.data} scrollToNextSection={scrollToNextSection} />

      <div ref={nextSectionRef} className="filter_cards">
        <div className='filter_card_heading'><p>All Product</p> <span className='span_tag'></span></div>
        <div className='fiter_card_section'>
          <label id="category-filter">Filter:</label>
          <select
            for="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
          <option value="All Product">All Product</option>
          {Object.keys(CrystalData.data).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          </select>
        </div>  
        <div className="cards-container">
          {limitedCardData.map((cardData) => (
            <Card key={cardData.id} data={cardData} />
          ))}
        </div>
        <button onClick={toogleShowAll} className="toggle-button">
          {showAll ? 'Show Less' : 'View All'}
        </button>
        
      </div>

    




            <div className='main_div' >
              <div className="landing" style={{margin:`2rem 0 0 auto`,padding:`3rem 0 0 0 `}}>
                <div className="last_left_section">
                    <p className="tag_h2">BEST PRICE</p>
                    <h1 className="left_heading">Agate Phone Grip</h1>
                    <div className='last_section_pricediv'>
                      <p className='real_price'>44.50$</p>
                      <p className='offer_price'>19.60$</p>
                    </div>
                    <p className='last_product_detail'>
                      These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                    </p>
                    <button className='last_buy_button'>
                        BUY NOW
                    </button>
                </div>
                <div className='last_right_section'>
                  <div className='div1' style={{background: `url(${sect})`}}>
                    <div className='div2'>
                      <div className='div3'>
                        <img alt={newPhoto} src={newPhoto}/>
                      </div>
                    </div>
                  </div>
                </div>


              
            </div>

            <div className='image_div'>
            <img src={firsttt}/>
        </div> 
            </div>

      <div className='footer_div'>

      </div>

    </div>
  );
}

export default App;
