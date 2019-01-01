

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
        slidesPerView: 2,
        spaceBetween: 1,
        // freeMode: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        autoplay: {
          delay: 1000,
        }, 
     
         scrollbar: {
            el: '.swiper-scrollbar',
          hide: true,
           },
        };
    //   autoplay: {
    //     delay: 1000,
    //   },
    // }

    return(
      <div style={{border:"2px solid white"}}>
        <Swiper {...params} ref={node =>{ if(node) this.swiper = node.swiper }}>
          <div > <img  src="https://scontent.ftun3-1.fna.fbcdn.net/v/t51.2885-15/43705880_190761341853045_2986846771310322493_n.jpg?_nc_cat=102&_nc_ht=scontent.ftun3-1.fna&oh=9465b4156a5d549233d0fbecb9ecdb99&oe=5CD73971" alt=""   style={{width:"100%", height:"400px", border:"2px solid white"}}/></div>
          <div > <img style={{width:"110%", height:"400px"}} src="https://scontent.ftun3-1.fna.fbcdn.net/v/t51.2885-15/46241221_336755293577764_3037248776545861542_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun3-1.fna&oh=b2d92f81da118d44e7cd26ae5e4de388&oe=5CAEB3DA" alt=""  /></div>
          <div> <img   style={{width:"100%", height:"400px"}} src="https://scontent.ftun3-1.fna.fbcdn.net/v/t51.2885-15/46411700_1991903887556470_9049624539756331874_n.jpg?_nc_cat=101&_nc_ht=scontent.ftun3-1.fna&oh=e27e3ebf006b66b20bb0e838a63261f9&oe=5CAB7BFE" alt=""   /></div>
          <div > <img  style={{width:"100%", height:"400px"}} src="https://i.pinimg.com/564x/6d/5d/96/6d5d96a7c11437434da8aa3dff862d46.jpg" alt=""  style={{width:"500px", height:"400px"}}  /></div>
          <div> <img  style={{width:"100%", height:"400px"}} src= "https://scontent.ftun3-1.fna.fbcdn.net/v/t51.2885-15/44382147_316239655642239_3463998185272408133_n.jpg?_nc_cat=105&_nc_ht=scontent.ftun3-1.fna&oh=e28b640b7ecf742f28b6f47abe8c835f&oe=5C9D68D3" alt="" /></div>
      
          </Swiper>
      </div>
    )
  }
}