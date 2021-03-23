import React from 'react';
import './home.scss';
import { Helmet } from "react-helmet";
import ads4 from '../../assets/img/ads4.png';
import ads5 from '../../assets/img/ads5.png';
import ads1 from '../../assets/img/ads1.png';
import ads6 from '../../assets/img/ads6.png';
import newsimg1 from '../../assets/img/1554038373-791.jpg';


import TopNews from '../../components/TopNews/topnews';
import TrandingNews from '../../components/TrandingNews/trandingnews';
import Horroscope from '../../components/horroscope/horroscope';
import SpecialVideo from '../../components/SpecialVideo/specialvideo';
import BollywoodMasala from '../../components/bollywoodmasala/bollywoodmasala';
import Jyotishwidget from '../../components/Jyotishwidget/jyotishwidget';
import Coronawidget from '../../components/coronawidget/coronawidget';
import SportWidget from '../../components/sportswidget/sportswidget';
import BBCWidget from '../../components/BBCwidget/bbcwidget';
import DeutscheWelleWidget from '../../components/DeutscheWelleWidget/deutschewelle';
import SamacharWidget from '../../components/SamacharWidget/samacharwidget';
import HomeVideoswidget from '../../components/home_videos/home_videos';
import BloggerWidget from '../../components/BloggerWidget/bloggerwidget';
import MarketWidget from '../../components/MarketWidget/Marketwidget';
import CoronaTracker from '../../components/Coronatracker/Coronatracker';
import OpinionWidget from '../../components/opinionwidget/Opinionwidget';
import CricketUpdate from '../../components/CricketUpdate/Cricketupdate';
import  Globals from '../../api' ;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data : [],
           videos : [],
           meta : [] ,
           title : [],
           meta_keywords : [],
           meta_description : [],
           CricketData :[]

         };
      }

      getVideos(){
        const url= Globals.language_based_api+'/videos';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            
            this.setState({
              videos : data.Contents.out
            })
        })   
      }
      getCricketUpdate(){
        const url= Globals.Cricket_update_api;
        console.log("🚀 ~ file: home.js ~ line 58 ~ Home ~ getCricketUpdate ~ url", url)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
              CricketData : data,
              
            })
        })   
      }
    componentDidMount() {
        // console.log('api at header' + Globals.language_based_api);
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents,
                  meta : data.Meta ,
                  title : data.Title,
                  meta_keywords : data.Meta.keywords.Attributes.content,
                  meta_description : data.Meta.description.Attributes.content
                })
            }) 
        this.getVideos();  
        this.getCricketUpdate();
          }
    
    render() {
        return (
            <div className="home_wrapper">
                <Helmet>
                <title>{this.state.title}</title>
                <meta name="keywords" content={this.state.meta_keywords} />
                <meta name="description" content={this.state.meta_description} />
                </Helmet>
                <div className="container">
                    <CoronaTracker />
                </div>
                <section className="container">
                    <div className="row">
                        <div className="col top_news">
                            <TopNews dataFromParent = {this.state.data}/>
                        </div>
                        <div className="col tranding_news">
                            <TrandingNews dataFromParent = {this.state.data}/>
                        </div>
                        <div className="col ads_336">
                            <div className="m-b-15 cleafix"></div>
                            <div className="ads_block"><img src={ads4} /></div>
                            <div className="m-b-15"></div>
                            <Horroscope dataFromParent = {this.state.data}/>
                        </div>
                    </div>
                </section>
                <div className="m-t-15">
                <SpecialVideo dataFromParent = {this.state.videos}/>
                </div>

                <section className="h_section3 m-t-20">
                    <div className="container">
                        <div className="row">
                            <div className="col h_l_col">
                                <BollywoodMasala dataFromParent = {this.state.data}/>
                                <div className="ads_block m-t-10 m-b-10"><img src={ads1} /></div>
                                <Jyotishwidget dataFromParent = {this.state.data}/>
                            </div>
                            <div className="col h_r_col">
                                <CricketUpdate dataFromParent = {this.state.CricketData}/>
                                <div className="m-b-15"></div>
                                <div className="m-b-15"></div>
                                <Coronawidget dataFromParent = {this.state.data}/>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grey_bg padding15">
                    <div className="container">
                        <SportWidget dataFromParent = {this.state.data}/>
                    </div>
                </section>

                <section className="padding15">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <DeutscheWelleWidget dataFromParent = {this.state.data}/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <BBCWidget dataFromParent = {this.state.data}/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <SamacharWidget dataFromParent = {this.state.data}/>
                            </div>
                        </div>
                    </div>
                </section>
                
                <HomeVideoswidget/>

                <div className='container m-t-20'>
                    <div className='row'>
                        <div className='col'>
                            <BloggerWidget dataFromParent = {this.state.data}/>
                            <div className="ads_block m-t-20 m-b-10"><img src={ads1} /></div>
                            <div className="m-b-20 cleafix"></div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6"><BBCWidget dataFromParent = {this.state.data}/></div>
                                <div className="col-sm-12 col-md-12 col-lg-6"><BBCWidget dataFromParent = {this.state.data}/></div>
                                
                            </div>
                            <div className="ads_block m-t-20 m-b-10"><img src={ads6} /></div>
                        </div>
                        <div className='col h_r_col'>
                            <MarketWidget dataFromParent = {this.state.data}/>
                            <div className="m-b-15 cleafix"></div>
                            <OpinionWidget dataFromParent = {this.state.data}/>
                        </div>
                        
                    </div>
                    
                </div>
                

            </div>
        )
    }
}