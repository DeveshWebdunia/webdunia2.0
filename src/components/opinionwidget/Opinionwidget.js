
import React from 'react';

import './Opinionwidget.scss';

export default class OpinionWidget extends React.Component{
    render(){
        return(
            <div className="news_widget_panel opinion_h_w">
                <div className="n_w_p_head">
                    <h2><label>आपकी राय</label></h2>
                </div>
                <div className="n_w_p_body">
                   <div className="question_an_sect">
                       <div className="quest_a_head">
                       क्या नीतीश कुमार मुख्‍यमंत्री के रूप में 5 साल का कार्यकाल पूरा कर पाएंगे?
                       </div>
                       <div className="quest_a_body">

                            <div className="q_a_radio">
                                <span className="q_a_result">
                                    <span className="q_a_progress"></span>
                                    <span className="q_a_prog_count">63.12%</span>
                                </span>
                                <span className="q_a_radio_click">
                                    <input type="radio" id="radio1"/>
                                    <label for="radio1">हां</label>
                                </span> 
                            </div>
                            <div className="q_a_radio">
                                <span className="q_a_result">
                                    <span className="q_a_progress"></span>
                                    <span className="q_a_prog_count">63.12%</span>
                                </span>
                                <span className="q_a_radio_click">
                                    <input type="radio" id="radio2"/>
                                    <label for="radio2">नहीं</label>
                                </span> 
                            </div>
                            <div className="q_a_radio">
                                <span className="q_a_result">
                                    <span className="q_a_progress"></span>
                                    <span className="q_a_prog_count">63.12%</span>
                                </span>
                                <span className="q_a_radio_click">
                                    <input type="radio" id="radio3"/>
                                    <label for="radio3">पता नहीं</label>
                                </span> 
                            </div>
                            <button className="btn btn-block btn-outline-primary">भाग लीजिए</button>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}