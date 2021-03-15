
import React from 'react';

import './Coronatracker.scss';

export default class CoronaTracker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data : []
         };
      }
    componentDidMount() {
            const url= 'https://ws.webdunia.com/json/tracker-api/get-tracker?lang=hi';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.results
                })
               // console.log("corona "+data);
            })   
          }

         
     

    render(){

        console.log("corona "+JSON.stringify(this.state.data[0]));
        let CoronaData = this.state.data;
        const Corona = CoronaData.map((item, i ) =>    
        <div className="corona_t_info">
          <span className="confirm"><b>Total Confirmed</b><strong>{item.total_cases}</strong></span>
           <span className="active_case"><b>Active Cases</b><strong>{item.india_cases}</strong></span>
           <span className="recovered"><b>Recovered</b><strong>{item.india_death}</strong></span>
           <span className="deaths"><b>Total Deaths</b><strong>{item.total_death}</strong></span>

         </div>
          );
        return(
            <div className="corona_tracker_sect">
                <div className="coron_t_col">
                    <h2>COVID 19 INDIA TRACKER</h2>
                </div>
                <div className="coron_t_col">
                    {Corona}
                    {/* <div className="corona_t_info">
                        <span className="confirm"><b>Total Confirmed</b><strong>{CoronaData}</strong></span>
                        <span className="active_case"><b>Active Cases</b><strong>4,46,952</strong></span>
                        <span className="recovered"><b>Recovered</b><strong>88,47,600</strong></span>
                        <span className="deaths"><b>Total Deaths</b><strong>1,37,139</strong></span>
                    </div> */}
                </div>
                <div className="coron_t_col">
                    <a href="#" className="coro_t_link">COVID-19 News</a>
                </div>
            </div>
        )
    }
}