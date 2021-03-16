import React from 'react';
import './specialvideo.scss';
import Slider from "react-slick";
import  Globals from '../../api' ;
import videothumb1 from '../../assets/img/videothumb1.png';
import videothumb2 from '../../assets/img/videothumb2.png';
import videothumb3 from '../../assets/img/videothumb3.png';
import videothumb4 from '../../assets/img/videothumb4.png';

export default class SpecialVideo extends React.Component{
    constructor(){
        super();
        this.state={
            SpeciVideo:[]
        }
    }
    componentDidMount(){
        const url= Globals.language_based_api+'/home-page';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                SpeciVideo: data.Contents[2].out.list
            })
        })
    }
    render(){
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 4,
        centerPadding: '60px',

        responsive: [
            {
            breakpoint:991,
            settings: {
              slidesToShow:2,
              slidesToScroll: 2,
              initialSlide: 2
                }
            },
            {
                breakpoint:576,
                settings: {
                  slidesToShow:1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
            }
        ]
        
        };
        return(
            <section className="h_video_section grey_bg padding15">
                <div className="container">
                    <div className="news_widget_panel speical_video">
                        <div className="n_w_p_head">
                            <h2><label>स्पेशल वीडियो</label></h2>
                        </div>
                        <div className="n_w_p_body">
                            <div className="speical_video_slider">
                                <Slider {...settings}>
                                {
                                    this.state.SpeciVideo?
                                    this.state.SpeciVideo.map((Spevideo, i)=>
                                    <div>
                                        <div className="sp_video_block">
                                            <span className="sp_v_thumb">
                                                <a href="#"><img src={Spevideo.thumbnail_360_url}/></a>
                                                <time>4:23</time>
                                            </span>
                                            <h4><a href="#">{Spevideo.title}</a></h4>
                                        </div>
                                    </div>
                                    )
                                    :
                                    null
                                }
                                {/* <div>
                                    <div className="sp_video_block">
                                        <span className="sp_v_thumb">
                                            <a href="#"><img src={videothumb1}/></a>
                                            <time>4:23</time>
                                        </span>
                                        <h4><a href="#">ICMR के पूर्व निदेशक डॉ. रमन गंगाखेडकर से Exclusive बातचीत</a></h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="sp_video_block">
                                        <span className="sp_v_thumb">
                                            <a href="#"><img src={videothumb2}/></a>
                                            <time>4:23</time>
                                        </span>
                                        <h4><a href="#">ICMR के पूर्व निदेशक डॉ. रमन गंगाखेडकर से Exclusive बातचीत</a></h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="sp_video_block">
                                        <span className="sp_v_thumb"><a href="#"><img src={videothumb3}/></a>
                                        <time>4:23</time></span>
                                        <h4><a href="#">ICMR के पूर्व निदेशक डॉ. रमन गंगाखेडकर से Exclusive बातचीत</a></h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="sp_video_block">
                                        <span className="sp_v_thumb"><a href="#"><img src={videothumb4}/></a>
                                        <time>4:23</time></span>
                                        <h4><a href="#">ICMR के पूर्व निदेशक डॉ. रमन गंगाखेडकर से Exclusive बातचीत</a></h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="sp_video_block">
                                        <span className="sp_v_thumb"><a href="#"><img src={videothumb2}/></a>
                                        <time>4:23</time></span>
                                        <h4><a href="#">ICMR के पूर्व निदेशक डॉ. रमन गंगाखेडकर से Exclusive बातचीत</a></h4>
                                    </div>
                                </div> */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}