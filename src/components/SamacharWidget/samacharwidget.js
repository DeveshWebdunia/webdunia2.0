import React from 'react';
import './samacharwidget.scss';

import samachar1 from '../../assets/img/samachar1.jpg';
import samachar2 from '../../assets/img/samachar2.jpg';
import samachar3 from '../../assets/img/samachar3.jpg';
import samachar4 from '../../assets/img/samachar4.jpg';

export default class SamacharWidget extends React.Component {
    render() {
        return (
            <div className="news_widget_panel samacharwidget">
                <div className="n_w_p_head">
                    <h2><label>समाचार</label><span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={samachar1} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">चुनिंदा देशों के बीच नहीं हो सकती वैश्विक विकास पर चर्चा : मोदी</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={samachar2} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">Kisan Andolan : किसानों ने शुरू की 1 दिन की 'क्रमिक' भूख हड़ताल</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={samachar3} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">बंगाल में भाजपा की सुनामी, विजयवर्गीय का प्रशांत किशोर पर पलटवार</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={samachar4} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">TMC के रणनीतिकार प्रशांत किशोर का दावा, बंगाल चुनाव में BJP ने किया दहाई का आंकड़ा पार तो छोड़ दूंगा काम</a></h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}