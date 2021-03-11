import React from 'react';
import './relatedarticle.scss';
import Slider from "react-slick";

import relatedimg1 from '../../assets/img/relatedimg1.png';
import relatedimg2 from '../../assets/img/relatedimg2.png';
import relatedimg3 from '../../assets/img/relatedimg3.png';
import relatedimg4 from '../../assets/img/relatedimg4.png';

export default class RelatedArticle extends React.Component{
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            arrows:true,

            responsive: [
                {
                breakpoint:1199,
                settings: {
                  slidesToShow:3,
                  slidesToScroll: 3,
                  initialSlide: 3
                    }
                },
                {
                    breakpoint:576,
                    settings: {
                      slidesToShow:2,
                      slidesToScroll:2,
                      initialSlide: 2
                    }
                }
            ]

        };
        return(
            <div className="related_arti_panel">
                <div className="r_a_p_head">
                    <h2><label><span>सम्बंधित</span> जानकारी</label></h2>
                </div>
                <div className="r_a_p_body">
                    <div className="related_news_slider">
                        <Slider {...settings}>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg1}/></a>
                                <label>समाचार</label>
                                <h2><a href="#">अमेरिकी विश्लेषक का दावा चीन ने किम जोंग...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg2}/></a>
                                <label>किसान आंदोलन</label>
                                <h2><a href="#">किसानों और सरकार के बीच भरोसा क्यों नहीं...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg3}/></a>
                                <label>किसान आंदोलन</label>
                                <h2><a href="#">किसान संगठनों ने कृषिमंत्री को सौंपा ज्ञा...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg4}/></a>
                                <label>समाचार</label>
                                <h2><a href="#">अंजू बॉबी जॉर्ज ने किया चौंकाने वाला खुलासा ...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg1}/></a>
                                <label>समाचार</label>
                                <h2><a href="#">अमेरिकी विश्लेषक का दावा चीन ने किम जोंग...</a></h2>
                            </div>
                        </div>
                        <div>
                            <div className="related_news_block">
                                <a href="#"><img src={relatedimg2}/></a>
                                <label>किसान आंदोलन</label>
                                <h2><a href="#">किसानों और सरकार के बीच भरोसा क्यों नहीं...</a></h2>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}