import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import carousel1 from "../images/crousel-img1.jpg";
import carousel2 from "../images/crousel-img2.jpg";
import carousel3 from "../images/crousel-img3.jpg";
class Corousalp extends Component {
    render() {
        return (
            <div>
              
                <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={3}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={carousel1}/>
    </div>
    <div>
      <img
        alt=''
        src= {carousel2}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel3}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel1}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel2}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel3}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel1}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel2}
      />
    </div>
    <div>
      <img
        alt=''
        src={carousel3}
      />
    </div>
    
      
  </InfiniteCarousel>
            </div>
        )
    }
}

export default Corousalp;
