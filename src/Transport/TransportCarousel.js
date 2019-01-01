import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import './TransportCarousel.css';


class CarouselPage extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.id}</h1>
      
      <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner >
          <CarouselItem itemId="1"  >
            <View >
              <img className="d-block w-100" src="https://i.pinimg.com/564x/b3/8d/aa/b38daa0c242d4c51e1fb25774042f8b3.jpg" alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src="https://i.pinimg.com/564x/ed/2f/12/ed2f1223c97618bce3d233300bcbdc5e.jpg" alt="Second slide" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src="https://i.pinimg.com/564x/20/d9/a8/20d9a86e8c7f2d07aac21d79a23e3acf.jpg" alt="Third slide" />
              <Mask overlay="black-slight" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="d-block w-100" src="https://i.pinimg.com/564x/fd/04/2c/fd042cd832cf5d652bfd69107d082468.jpg" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
      </div>
    );
  }
}

export default CarouselPage;