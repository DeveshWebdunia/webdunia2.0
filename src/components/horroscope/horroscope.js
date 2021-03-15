import React from 'react';
import './horroscope.scss';
import  Globals from '../../api' ;
import Slider from "react-slick";

export default class Horroscope extends React.Component{
    constructor(props ) {
        super(props);
        this.state = {
           astro : []
         };
      } 

      componentDidMount() {
        const url= Globals.language_based_api+'/home-page';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                astro : data.Contents
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

    let AstroData = this.state.astro;
    let AstroDataDetails = AstroData.filter((x)=>x.Type == "Rashifal");
    console.log("🚀 ~ file: astro.js ~ line 23 ~ Astro ~ render ~ AstroData", AstroDataDetails)
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
                {/* <div className="horroscope_slide">
                    <Slider {...settings}>
                        <div>
                            <div className="horroscope_s_block">
                                <div className="horr_s_col">
                                    <span className="horr_s_icons"></span>
                                    <h4><a href="#">मेष</a></h4>
                                </div>
                                <div className="horr_s_info">
                                    भूले-बिसरे साथी तथा रिश्तेदारों से मुलाकात होगी। आत्मसम्मान बना रहेगा। अच्छी खबर प्राप्त होगी।...
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="horroscope_s_block">
                                <div className="horr_s_col">
                                    <span className="horr_s_icons"></span>
                                    <h4><a href="#">मेष</a></h4>
                                </div>
                                <div className="horr_s_info">
                                    भूले-बिसरे साथी तथा रिश्तेदारों से मुलाकात होगी। आत्मसम्मान बना रहेगा। अच्छी खबर प्राप्त होगी।...
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="horroscope_s_block">
                                <div className="horr_s_col">
                                    <span className="horr_s_icons"></span>
                                    <h4><a href="#">मेष</a></h4>
                                </div>
                                <div className="horr_s_info">
                                    भूले-बिसरे साथी तथा रिश्तेदारों से मुलाकात होगी। आत्मसम्मान बना रहेगा। अच्छी खबर प्राप्त होगी।...
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div> */}
                <ul>
                    <li><a href="#">मासिक राशिफल</a></li>
                    <li><a href="#">साप्ताहिक राशिफल</a></li>
                </ul>
            </div>
        )
    }
}