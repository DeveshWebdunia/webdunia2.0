import React from 'react';
import './jyotishwidget.scss';
import Slider from "react-slick";
import  Globals from '../api' ;

import jyotish_thumb from '../../assets/img/jyotish_thumb.png';
import jyotish_thumb2 from '../../assets/img/jyotish_thumb2.png';
import jyotish_thumb3 from '../../assets/img/jyotish_thumb3.png';
import jyotish_thumb4 from '../../assets/img/jyotish_thumb4.png';

export default class Jyotishwidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data : []
         };
      }
      componentDidMount() {
        // console.log('api at header' + Globals.language_based_api);
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents
                })
            })   
          }
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

        let pagelist = this.state.data;
        let PagelistData = pagelist.filter((x)=>x.Title == "ज्योतिष");
     const _PagelistDataItemss = PagelistData.map((item, i ) =>    
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
                {/* {_PagelistDataItemss} */}
                {/* <div className="n_w_p_head">
                    <h2><label>ज्योतिष</label> <span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="jyotish_news_slider">
                        <Slider {...settings}>
                        <div>
                            <div className="jyotish_news_block">
                                <a href="#"><img src={jyotish_thumb}/></a>
                                <h2><a href="#">30 नवंबर 2020 कार्तिक पूर्णिमा, राशि अनुसार खास...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="jyotish_news_block">
                                <a href="#"><img src={jyotish_thumb2}/></a>
                                <h2><a href="#">इस बार की कार्तिक पूर्णिमा है ज्योतिष की दृष्टि से महत्वपूर्ण</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="jyotish_news_block">
                                <a href="#"><img src={jyotish_thumb3}/></a>
                                <h2><a href="#">तुरंत जांचें, कहीं आपकी कुंडली में शनि का शश योग तो नहीं है?</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="jyotish_news_block">
                                <a href="#"><img src={jyotish_thumb4}/></a>
                                <h2><a href="#">शुक्र प्रदोष व्रत : किस समय करें भोलेनाथ का पूजन, जानिए शुभ मुहूर्त</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="jyotish_news_block">
                                <a href="#"><img src={jyotish_thumb2}/></a>
                                <h2><a href="#">30 नवंबर 2020 कार्तिक पूर्णिमा, राशि अनुसार खास...</a></h2>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div> */}
                {_PagelistDataItemss}
            </div>
        )
    }
}