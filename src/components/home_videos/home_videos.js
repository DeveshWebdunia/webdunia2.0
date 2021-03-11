import React from 'react';
import './home_videos.scss';
import Slider from "react-slick";

import H_video_thumb1 from '../../assets/img/video_thumb1.jpg';
import H_video_thumb2 from '../../assets/img/video_thumb2.jpg';
import H_video_thumb3 from '../../assets/img/video_thumb3.jpg';
import H_video_thumb4 from '../../assets/img/video_thumb4.jpg';
import H_video_thumb5 from '../../assets/img/video_thumb5.jpg';

export default class HomeVideoswidget extends React.Component {
    render() {
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 5,

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
            <section className="h_video_section">
                <div className="container">
                    <div className="news_widget_panel coronavirus_w">
                        <div className="n_w_p_head">
                            <h2><label>फोटो गैलरी</label><span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
                        </div>
                        <div className="n_w_p_body">
                            <div className="h_video_slider m-t-10">
                                <Slider {...settings}>
                                    <div>
                                        <div className="h_videos_block">
                                            <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb1} /></a></span>
                                            <h4><a href="#">लक्मे फैशन वीक में छाई सानिया मिर्ज़ा</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                            <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb2} /></a></span>
                                            <h4><a href="#">'द कपिल शर्मा शो' के सेट पर नवाज़ुद्दीन सिद्दीकी</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                            <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb3} /></a></span>
                                            <h4><a href="#">'कौन बनेगा करोड़पति' के कर्मवीर स्पेशल एपिसोड में लिएंडर पेस और दीपा करमाकर
</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                            <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb4} /></a></span>
                                            <h4><a href="#">कुली नं. 1 में वरुण-सारा का धमाल</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                            <label>समाचार</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb5} /></a></span>
                                            <h4><a href="#">शिवसेना में शामिल हुईं अभिनेत्री उर्मिला मातोंडकर</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                        <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb3} /></a></span>
                                            <h4><a href="#">'कौन बनेगा करोड़पति' के कर्मवीर स्पेशल एपिसोड में लिएंडर पेस और दीपा करमाकर
</a></h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h_videos_block">
                                        <label>सिनेमा</label>
                                            <span className="h_v_thumb"><a href="#"><img src={H_video_thumb4} /></a></span>
                                            <h4><a href="#">कुली नं. 1 में वरुण-सारा का धमाल</a></h4>
                                        </div>
                                    </div>
                                    
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}