import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={3} length={3} showControls={true} showIndicators={true} thumbnails className="z-depth-1" style={{ height: "570px" }}>         <CarouselInner>
        <CarouselItem itemId="1" style={{ width: "200px", left: "50%" }} >
          <View hover zoom >
            <img className="d-block w-100" style={{ height: "576px" }} src="http://lonelyplanetimages.imgix.net/a/g/hi/t/96b6657bdea025c8d72d59658bba360f-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong" >
              <CarouselCaption>
                <h3 className="h3-responsive">Visit Tozeur</h3>
                <p>Land in #Tozeur and experience a tale of the thousand and one nights in the Sahara.</p>    </CarouselCaption>
            </Mask>
          </View>
        </CarouselItem>
        <CarouselItem itemId="2" style={{ width: "200px", left: "50%" }}>
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "576px" }} src="http://lonelyplanetimages.imgix.net/a/g/hi/t/e41ea44f84a51473b215065226625602-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">Fascinating Historic Medieval Town Of Tozeur</h3>
                <p>Come and discover the fascinating historic medieval town of Tozeur with its intricately patterned yellow brickwork facades.</p>
              </CarouselCaption>
            </Mask>
          </View>
        </CarouselItem>
        <CarouselItem itemId="3" style={{ width: "200px", left: "50%" }}>
          <View hover zoom>
            <img className="d-block w-100" style={{ height: "576px" }} src="https://lonelyplanetimages.imgix.net/a/g/hi/t/f72dbca584b269e1aa3708817a83613e-tunisia.jpg?h=768&sharp=10&vib=20" alt="" />
            <Mask overlay="teal-strong">
              <CarouselCaption>
                <h3 className="h3-responsive">This Is A Work Of Art</h3>
                <p>The originality of the colors, designs and the unique know-how of Tunisian carpets make them truly outstanding.</p>
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
