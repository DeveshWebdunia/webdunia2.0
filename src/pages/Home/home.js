import React from 'react';
import './home.scss';

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

export default class Home extends React.Component {
    render() {
        return (
            <div className="home_wrapper">
                <div className="container">
                    <CoronaTracker/>
                </div>
                <section className="container">
                    <div className="row">
                        <div className="col top_news">
                            <TopNews />
                        </div>
                        <div className="col tranding_news">
                            <TrandingNews />
                        </div>
                        <div className="col ads_336">
                            <div className="m-b-15 cleafix"></div>
                            <div className="ads_block"><img src={ads4} /></div>
                            <div className="m-b-15"></div>
                            <Horroscope />
                        </div>
                    </div>
                </section>
                <div className="m-t-15">
                <SpecialVideo />
                </div>

                <section className="h_section3 m-t-20">
                    <div className="container">
                        <div className="row">
                            <div className="col h_l_col">
                                <BollywoodMasala />
                                <div className="ads_block m-t-10 m-b-10"><img src={ads1} /></div>
                                <Jyotishwidget />
                            </div>
                            <div className="col h_r_col">
                                <CricketUpdate/>
                                <div className="m-b-15"></div>
                                <div className="m-b-15"></div>
                                <Coronawidget />
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grey_bg padding15">
                    <div className="container">
                        <SportWidget />
                    </div>
                </section>

                <section className="padding15">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <DeutscheWelleWidget/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <BBCWidget/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <SamacharWidget/>
                            </div>
                        </div>
                    </div>
                </section>
                
                <HomeVideoswidget/>

                <div className='container m-t-20'>
                    <div className='row'>
                        <div className='col'>
                            <BloggerWidget/>
                            <div className="ads_block m-t-20 m-b-10"><img src={ads1} /></div>
                            <div className="m-b-20 cleafix"></div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6"><BBCWidget/></div>
                                <div className="col-sm-12 col-md-12 col-lg-6"><BBCWidget/></div>
                            </div>
                            <div className="ads_block m-t-20 m-b-10"><img src={ads6} /></div>
                        </div>
                        <div className='col h_r_col'>
                            <MarketWidget/>
                            <div className="m-b-15 cleafix"></div>
                            <OpinionWidget/>
                        </div>
                        
                    </div>
                    
                </div>
                

            </div>
        )
    }
}