import React from 'react';
import './jyotishwidget.scss';
import Slider from "react-slick";


export default class Jyotishwidget extends React.Component{
   
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            arrows:true,

            responsive: [
                {
                    breakpoint:991,
                    settings: {
                    slidesToShow:3,
                    slidesToScroll: 3,
                    initialSlide: 3
                    }
                },
                {
                    breakpoint:767,
                    settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint:576,
                    settings: {
                      slidesToShow:1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                }
            ]
        };

        let pagelist = this.props.dataFromParent;
        let PagelistDataFull = pagelist.filter((x)=>x.Type == "PageList" );
        let PagelistDatas = PagelistDataFull.slice(1,2);
     const _PagelistDataItemss = PagelistDatas.map((item, i ) =>    
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label> <span className="n_readmore"><a href={item.ViewAllUrl}>और भी पढ़ें</a></span></h2>
     <div className="n_w_p_body">
     <div className="jyotish_news_slider">
     <Slider {...settings}>
      {item.Pages.map((item, i ) => 
               <div>
               <div className="jyotish_news_block">
                   <a href={item.Url}><img src={item.Image||item.Thumbnail}/></a>
                   <h2><a href={item.Url}>{item.Title}</a></h2>
               </div>
           </div>
         
          )}
          </Slider>
     </div>
     </div>
        </div>
       );
        
        return(
            <div className="news_widget_panel jyotish_w">
                {_PagelistDataItemss}
            </div>
        )
    }
}