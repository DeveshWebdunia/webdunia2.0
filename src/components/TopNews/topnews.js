import React from 'react';
import Slider from "react-slick";
import  Globals from '../../api' ;
import './topnews.scss';
import slider1 from '../../assets/img/slider_img1.png';



export default class TopNews extends React.Component{
    constructor(){
        super();
        this.state={
            rotator:[]
        }
    }
    componentDidMount(){
         const url= Globals.language_based_api+'/home-page';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
            rotator: data.Contents[2].Items
            })
        })
        
    }
    render(){

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            arrows:true
        };

        return(
            <div className="news_widget_panel top_news">
                <div className="n_w_p_head">
                    <h2><label>Top न्यूज़ </label> </h2>
                </div>
                <div className="n_w_p_body">
                    <div className="top_news_slider">
                        <Slider {...settings}>
                        {
                            this.state.rotator?
                            this.state.rotator.map((slides, inde)=>
                                <div>
                                    <div className="t_n_slider" >
                                        <div className="tns_image"><img src={slides.Image}/></div>
                                        <caption>
                                            <h2><a href="#">{slides.Title}</a></h2>
                                            <time>{slides.PublishedDate}</time>
                                        </caption>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }
                        </Slider>
                        
                    </div>
                </div>
            </div>
        )
    }
}