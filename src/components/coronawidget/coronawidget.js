import React from 'react';
import Slider from "react-slick";
import coronathumb from '../../assets/img/coronathumb.jpg';
import './coronawidget.scss';

export default class Coronawidget extends React.Component{
    render(){
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
        };
        return(
            <div className="news_widget_panel coronavirus_w">
                <div className="n_w_p_head">
                    <h2><label>कोरोना वायरस</label></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="coronav_slider">
                        <Slider {...settings}>
                        <div className="coronavirus_w_block">
                            <span><a href="#"><img src={coronathumb}/></a></span>
                            <h4><a href="#">दिल्ली में 6 नवंबर के बाद कोरोना से सबसे कम मौतें, नए मामले 5 हजार से नीचे</a></h4>
                        </div>
                        <div className="coronavirus_w_block">
                            <span><a href="#"><img src={coronathumb}/></a></span>
                            <h4><a href="#">दिल्ली में 6 नवंबर के बाद कोरोना से सबसे कम मौतें, नए मामले 5 हजार से नीचे</a></h4>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}