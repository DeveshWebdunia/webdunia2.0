import React from 'react';
import './Marketwidget.scss';

export default class MarketWidget extends React.Component {
    render() {

        let MarketData =  this.props.dataFromParent;
        let MarketDataDetail = MarketData.filter((x) => x.Type == "Market");
        const _MarketDataResult = MarketDataDetail.map((item, i) =>
            <div className="news_widget_panel market_h_w">
                <div className="n_w_p_head">
                    <h2><label>{item.Title}</label></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="market_widget_sect">
                        {item.Items.map((item, i) =>
                            <ul>
                                <li>
                                    <span className="m_w_name">{item.Title}</span>
                                    <span className="m_w_numb">{item.Value}</span>
                                    <span className={item.OnRise == true ? "m_w_status up" : "m_w_status down"}>{item.Change}</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                { _MarketDataResult}
            </div>
        )
    }
}