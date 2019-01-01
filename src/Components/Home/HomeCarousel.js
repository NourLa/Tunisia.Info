import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={4} length={6} showControls={true} showIndicators={true} thumbnails className="z-depth-1"
       style={{ height: "612px" }}>     
          <CarouselInner>
        <CarouselItem itemId="1" style={{ width: "200px", left: "50%" }} >
          <View hover zoom >
            <img className="d-block w-100" style={{ height: "610px" }} src="http://lonelyplanetimages.imgix.net/a/g/hi/t/96b6657bdea025c8d72d59658bba360f-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong" >
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Is Layers Of History</p>    </CarouselCaption>
            </Mask>
          </View>
        </CarouselItem>
        <CarouselItem itemId="2" style={{ width: "200px", left: "50%" }}>
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "610px" }} src="http://lonelyplanetimages.imgix.net/a/g/hi/t/e41ea44f84a51473b215065226625602-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Sidi BouSaid Is So Beautiful .</p>
              </CarouselCaption>
            </Mask>
          </View>
        </CarouselItem>
        <CarouselItem itemId="3" style={{ width: "200px", left: "50%" }}>
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "610px" }} src="https://lonelyplanetimages.imgix.net/a/g/hi/t/f72dbca584b269e1aa3708817a83613e-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Is Attention To Details.</p>
              </CarouselCaption>
            </Mask>
          </View>
          </CarouselItem>
          <CarouselItem itemId="4" style={{ width: "200px", left: "50%" }} >
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "610px" }} src="https://lonelyplanetimages.imgix.net/a/g/hi/t/38b3e687149e9cad2b25041a812250fa-tunis.jpg?sharp=10&vib=20&w=2000" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Is Layers Of Historyis Meandering Through The Medina  </p>
              </CarouselCaption>
            </Mask>
          </View>
          </CarouselItem>
          <CarouselItem itemId="5" style={{ width: "200px", left: "50%" }} >
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "610px" }} src="https://lonelyplanetimages.imgix.net/a/g/hi/t/f60d65e6d464d1ae9a6e08a2b9cb68e3-tunis.jpg?sharp=10&vib=20&w=2000" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Is Layers Of History .</p>
              </CarouselCaption>
            </Mask>
          </View>
          </CarouselItem>
          <CarouselItem itemId="6" style={{ width: "200px", left: "50%" }} >
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "610px" }} src="https://lonelyplanetimages.imgix.net/a/g/hi/t/abf6593fbeb774b847ff246d70b0d5d1-tunis.jpg?sharp=10&vib=20&w=2000" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Tunisia</h3>
                <p>Is Attention To Details .</p>
              </CarouselCaption>
            </Mask>
          </View>
          </CarouselItem>
    

      </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;
