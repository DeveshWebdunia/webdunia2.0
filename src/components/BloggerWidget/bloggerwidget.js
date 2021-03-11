import React from 'react';
import './bloggerwidget.scss';
import Slider from "react-slick";

import blogger1 from '../../assets/img/blogger1.png';
import blogger2 from '../../assets/img/blogger2.png';
import blogger3 from '../../assets/img/blogger3.png';

export default class BloggerWidget extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow:3,
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
        return (
            <div className="news_widget_panel top_news">
                <div className="n_w_p_head">
                    <h2><label>मेरा ब्लॉग</label> </h2>
                </div>
                <div className="n_w_p_body">
                    <div className="blogger_w_slider">
                        <Slider {...settings}>
                            <div>
                                <div className="blog_w_block">
                                    <h2>सत्ता का प्रहार नहीं, कृषकों की चीख-पुकार सुनिए</h2>
                                    <caption>
                                        <div className="blogger_w_img">
                                            <span><img src={blogger1} /></span>
                                            <strong>कृष्णमुरारी त्रिपाठी अटल</strong>
                                        </div>
                                        <p>कहां मर जाती है जनप्रतिनिधियों की आत्मा जब कृषक कर्जे के बोझ तले आत्महत्या कर लेता है 
                                            और उसका परिवार बेसहारा हो जाता है। भीषण प्राकृतिक प्रकोपों ...</p>
                                    </caption>
                                </div>
                            </div>
                            <div>
                                <div className="blog_w_block">
                                    <h2>बिना मिले झगड़ते रहने वाली दुनिया</h2>
                                    <caption>
                                        <div className="blogger_w_img">
                                            <span><img src={blogger2} /></span>
                                            <strong>अनिल त्रिवेदी (एडवोकेट)</strong>
                                        </div>
                                        <p>कहां मर जाती है जनप्रतिनिधियों की आत्मा जब कृषक कर्जे के बोझ तले आत्महत्या कर लेता है 
                                            और उसका परिवार बेसहारा हो जाता है। भीषण प्राकृतिक प्रकोपों ...</p>
                                    </caption>
                                </div>
                            </div>
                            <div>
                                <div className="blog_w_block">
                                    <h2>सत्ता का प्रहार नहीं, कृषकों की चीख-पुकार सुनिए</h2>
                                    <caption>
                                        <div className="blogger_w_img">
                                            <span><img src={blogger3} /></span>
                                            <strong>श्रवण गर्ग</strong>
                                        </div>
                                        <p>कहां मर जाती है जनप्रतिनिधियों की आत्मा जब कृषक कर्जे के बोझ तले आत्महत्या कर लेता है 
                                            और उसका परिवार बेसहारा हो जाता है। भीषण प्राकृतिक प्रकोपों ...</p>
                                    </caption>
                                </div>
                            </div>
                            <div>
                                <div className="blog_w_block">
                                    <h2>सत्ता का प्रहार नहीं, कृषकों की चीख-पुकार सुनिए</h2>
                                    <caption>
                                        <div className="blogger_w_img">
                                            <span><img src={blogger1} /></span>
                                            <strong>कृष्णमुरारी त्रिपाठी अटल</strong>
                                        </div>
                                        <p>कहां मर जाती है जनप्रतिनिधियों की आत्मा जब कृषक कर्जे के बोझ तले आत्महत्या कर लेता है 
                                            और उसका परिवार बेसहारा हो जाता है। भीषण प्राकृतिक प्रकोपों ...</p>
                                    </caption>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        )
    }
}