import React from 'react';
import Slider from "react-slick";
import './topnews.scss';




export default class TopNews extends React.Component{
   
    render(){

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            arrows:true
        };
        let topNews =  this.props.dataFromParent;
        let rotator = topNews.filter((x)=>x.Type == "Rotator");
        const RotatorItems = rotator.map((item, i ) =>    
        <div className="news_widget_panel top_news">
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label><span className="n_readmore"><a href={item.ViewAllUrl}>और भी पढ़ें</a></span></h2>
     </div>
     <div className="n_w_p_body">
     <div className="top_news_slider">
     <Slider {...settings}>
      {item.Items.map((slides, i ) => 
              <div>
              <div className="t_n_slider" >
                  <div className="tns_image"><img src={slides.Image}/></div>
                  <caption>
                      <h2><a href="#">{slides.Title}</a></h2>
                      <time>{slides.PublishedDate}</time>
                  </caption>
              </div>
          </div>
          )}
          </Slider>
          </div>
        </div>
      </div>
       );

        return(
            <div>
                {RotatorItems}
            </div>
        )
    }
}