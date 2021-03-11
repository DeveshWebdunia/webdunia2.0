
import React from 'react';

import './Coronatracker.scss';

export default class CoronaTracker extends React.Component{
    render(){
        return(
            <div className="corona_tracker_sect">
                <div className="coron_t_col">
                    <h2>COVID 19 INDIA TRACKER</h2>
                </div>
                <div className="coron_t_col">
                    <div className="corona_t_info">
                        <span className="confirm"><b>Total Confirmed</b><strong>94,31,692</strong></span>
                        <span className="active_case"><b>Active Cases</b><strong>4,46,952</strong></span>
                        <span className="recovered"><b>Recovered</b><strong>88,47,600</strong></span>
                        <span className="deaths"><b>Total Deaths</b><strong>1,37,139</strong></span>
                    </div>
                </div>
                <div className="coron_t_col">
                    <a href="#" className="coro_t_link">COVID-19 News</a>
                </div>
            </div>
        )
    }
}