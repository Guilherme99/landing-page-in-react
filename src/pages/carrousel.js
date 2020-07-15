import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () =>
     (  
        <>
        <div className='container-fluid' >  
            <Carousel style={{'height':'80%', 'width': '65%'}} className="carousel-slide" >  
                <Carousel.Item style={{'height':'100%', 'width': '100%'}} >  
                    <div className="carrossel-perfil">
                        <img src="http://landrick.react.themesbrand.com/static/media/06.2849e2c4.jpg" />
                        <p>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                        <h6> - Dean Tolle </h6>
                    </div>
                </Carousel.Item  >  
                <Carousel.Item style={{'height':'100%', 'width': '100%'}} >  
                    <div className="carrossel-perfil">
                        <img src="http://landrick.react.themesbrand.com/static/media/01.0f84cfe8.jpg" />
                        <p>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                        <h6> - Dean Tolle </h6>
                    </div>
                </Carousel.Item  >  
                <Carousel.Item style={{'height':'100%', 'width': '100%'}} >  
                    <div className="carrossel-perfil">
                        <img src="http://landrick.react.themesbrand.com/static/media/06.2849e2c4.jpg" />
                        <p>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                        <h6> - Dean Tolle </h6>
                    </div>
                </Carousel.Item  >  
            </Carousel>  
        </div>  
        </>
        );
  
  export default ControlledCarousel;