
import React from 'react';

import './Marketwidget.scss';

export default class MarketWidget extends React.Component{
    render(){
        return(
            <div className="news_widget_panel market_h_w">
                <div className="n_w_p_head">
                    <h2><label>व्यापार</label></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="market_widget_sect">
                        <ul>
                            <li>
                                <span className="m_w_name">बीएसई</span>
                                <span className="m_w_numb">44150</span>
                                <span className="m_w_status down">110</span>
                            </li>
                            <li>
                                <span className="m_w_name">एनएसई</span>
                                <span className="m_w_numb">12969</span>
                                <span className="m_w_status down">18</span>
                            </li>
                            <li>
                                <span className="m_w_name">सोना</span>
                                <span className="m_w_numb">48625</span>
                                <span className="m_w_status up">108</span>
                            </li>
                            <li>
                                <span className="m_w_name">चाँदी</span>
                                <span className="m_w_numb">59882</span>
                                <span className="m_w_status up">09</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}