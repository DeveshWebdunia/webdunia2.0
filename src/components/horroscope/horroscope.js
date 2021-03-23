import React from 'react';
import './horroscope.scss';
import Slider from "react-slick";
import  Globals from '../../api' ;
export default class Horroscope extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        data : []
         };
      }

    componentDidMount() {
        // console.log('api at header' + Globals.language_based_api);
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents
                })
            }) 
          }
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            arrows:true,
            autoplay: true,
            autoplaySpeed: 2500,
            accessibility: false
        };

    let AstroData =  this.state.data;
    let AstroDataDetails = AstroData.filter((x)=>x.Type == "Rashifal");
    const RashiResults =  AstroDataDetails.map((item, i ) => 
    <div className="horroscope_slide">
    <Slider {...settings}>
     {item.Predictions.map((item, i ) => 
 <div className="horroscope_s_block">
				     <div className="horr_s_col">
                     <span className="horr_s_icons"><img src={'https://media.webdunia.com/_media/hi//img/zodiac-signs-white/'+item.RashiID+'.png'} alt={item.RashiName} /></span>
                      <h4><a href="#">{item.RashiName}</a></h4>
					</div>
                    <div className="horr_s_info">
					{item.Prediction}
                    </div>
</div>
 )}
 </Slider>
 </div>
    );
        return(
            <div className="horroscope_widget">
                <h3><a href="#">दैनिक राशिफल</a></h3>
                {RashiResults}
                <ul>
                    <li><a href="#">मासिक राशिफल</a></li>
                    <li><a href="#">साप्ताहिक राशिफल</a></li>
                </ul>
            </div>
        )
    }
}