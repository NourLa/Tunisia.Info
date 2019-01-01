

import React from 'react';
import Swiper from 'react-id-swiper';

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  render() {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
          freeModeMomentum : true,
        //   loop: true,
        //  width: 300,
          // height: 450,
        },
        pagination: {
          el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
      },
      autoplay: {
        delay: 1000,
      },
    }

    return(
      <div style={{width:"100%",padding:"2% 1%",border:"2px solid white", backgroundColor:"rgba(230, 173, 68, 0.801)"}}>
        <Swiper {...params} ref={node =>{ if(node) this.swiper = node.swiper }}>
          <div> <img  src={require('../TotalPictures/colloseum-el-djem.jpg')} alt=""  style={{width:"390px", height:"400px"}} /></div>
          <div> <img src={require('../TotalPictures/image3.jpg')} alt=""  style={{width:"390px", height:"400px"}}/></div>
          <div> <img  src={require('../TotalPictures/image4.jpg')} alt=""  style={{width:"390px", height:"400px"}}  /></div>
          <div> <img  src={require('../TotalPictures/image2.jpg')} alt=""  style={{width:"350px", height:"400px"}} /></div>
          <div> <img  src={require('../TotalPictures/image6.jpg')} alt=""  style={{width:"350px", height:"400px"}} /></div>
          <div> <img  src={require('../TotalPictures/image5.jpg')} alt=""  style={{width:"350px", height:"400px"}} /></div>
          <div> <img  src={require('../TotalPictures/monnais.jpg')} alt=""  style={{width:"350px", height:"400px"}} /></div>
          </Swiper>
      </div>
    )
  }
}