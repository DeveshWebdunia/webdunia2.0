import React from 'react';
import './deutschewelle.scss';
import  Globals from '../../api' ;
import newsimg1 from '../../assets/img/1554038373-791.jpg';

import deu_img1 from '../../assets/img/deu_img1.jpg';
import deu_img2 from '../../assets/img/deu_img2.jpg';
import deu_img3 from '../../assets/img/deu_img3.jpg';
import deu_img4 from '../../assets/img/deu_img4.jpg';


export default class DeutscheWelleWidget extends React.Component {
    render() {
        return (
            <div className="news_widget_panel deutschewidget">
                <div className="n_w_p_head">
                    <h2><label>डॉयचे वेले</label><span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
                </div>
                <div className="n_w_p_body">
                    
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={deu_img1} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">3 दिसंबर : औद्योगिक इतिहास की सबसे बड़ी दुर्घटना है भोपाल गैस त्रासदी
</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={deu_img2} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">भोपाल गैस पीड़ितों में मोटापा और थायरॉयड की समस्या दोगुना अधिक
</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={deu_img3} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">किसानों के विरोध प्रदर्शन पर क्या कह रहे हैं देश के अन्य राज्यों के किसान
</a></h2>
                        </div>
                    </div>
                    <div className="news_block_l">
                        <div className="n_block_l_thumb"><a href="#"><img src={deu_img4} /></a></div>
                        <div className="n_block_l_cont">
                            <time>25 सितंबर 2020</time>
                            <h2><a href="#">किसान आंदोलन के लिए कहां से आ रहा है फंड?
</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}